/*
Core for FullJS 3.0
version: 1.0.5
*/

;(function($){
	window.FJSCore={
		local:location.protocol=="file:"	
		,basepath:location.pathname.slice(0,location.pathname.lastIndexOf('/')+1)	
		,defState:''
		,defMobileState:''
		,defStateMobileText:'Main Page'
		,emptyNavigationText:'-- navigate to --'
		,ajaxFolder:"/ajax/"
		,indexFile:'index.html'
		,modules:{}
		,mobileVersion:true
		,mobileFolowLinks:false	
	}

	include('js/history.js?redirect=true&basepath='+FJSCore.basepath)

	if(FJSCore.mobileVersion&&(FJSCore.mobile=(device.mobile())||location.search.slice(1)==='mobile'))
		document.write('<meta name="viewport" content="width=device-width, initial-scale=1.0"/>')
	else
		FJSCore.mobile=false
	
	if(FJSCore.tablet=device.tablet()||location.search.slice(1)==='tablet')
		document.write('<meta name="viewport" content="width=device-width"/>')

})(jQuery);

!function($){
	var win=$(window)
		,doc=$(document)
		,Core=window.FJSCore
		,$Core=$(Core)
		
	doc
		.on('changeLocation',function(e,d){
			if(d===Core.state)
				return false			
			if(!Core.local)
				history.pushState(d,'',Core.basepath+d)
			if((''+d).indexOf('#')===-1)
				Core.state=d
				//,Core.hash=''
			else
				Core.state=d.slice(0,d.indexOf('#'))
				//,Core.hash=location.hash.slice(1)
			$Core.trigger('changeState',Core.state)
		})
		.on('click','a',function(e){	
			var $this=$(this)
				,href=$this.attr('href')	
			if (href[0]==='#'){
				if (href.length === 1) {
					return false;
				}
				if(window.history&&window.history.pushState) {
					location.hash=href
				} else {
					location.hash+=href
				}
				return false;			
			}
			if(!/^\.\/|^\/[^/]|^javascript/.test(href)){
				window.location.replace(~href.indexOf('://')?href:'//'+href);
				return false;
			}		
		})
		.on('click','a[href^="/"]:not([href^="//"]),a[href^="./"]',function(e){			
			var href=$(this).attr('href')			
			href=href.replace(/^\./,'').replace(Core.basepath,'').replace(/^\//,'')
			if(FJSCore.mobile&&href===FJSCore.defState)
				href=FJSCore.defMobileState
			doc.trigger('changeLocation',href)
			e.preventDefault()
			return false
		})
	$Core.on('changeState',function(){
		FJSCore.modules.updateTitle&&FJSCore.modules.updateTitle(false)
	})
	
	win		
		.on('popstate afterload hashchange'+(FJSCore.mobile?' load':''),function(){
			popstate()
		})
		
	function popstate(){
		var locationHref=location.href.match(/.+\/([^?#]*)\??([^#]*)\#?(.*)$/)			
			,defState=FJSCore.mobile?FJSCore.defMobileState:FJSCore.defState
			,state=locationHref[1]//||defState
			,search=locationHref[2]
			,hash=locationHref[3]
		
		switch(state){
			case FJSCore.defState:
			case FJSCore.defMobileState:
			state=defState
		}
		
		state=search?state+'?'+search:state
			
		if(Core.state!==state){
			FJSCore.prevState = Core.state ? Core.state : state; 
			Core.state=state;
			//Core.search=search
			Core.hash=hash;
			$Core.trigger('changeState',Core.state);
		}
	}
	
	$(function(){
		Core.ajaxOverlay=$('<div id="ajax-overlay"><div/></div>').hide()
		Core.globOverlay=$('#glob-overlay')
		Core.ajaxOverlay
			.appendTo('#glob-wrap')
			
		Core.globOverlay.add(Core.ajaxOverlay)			
			.on('show',function(){
				$(this).fadeIn()
			})
			.on('hide',function(){
				$(this).fadeOut()
			})
			
		win.on('afterload',function(){
			$.when(Core.globOverlay.trigger('hide'))
				.then(function(){
					$('body').removeClass('overlaid')
				})
		})
	})
	
	FJSCore.prepareLoaded=function(root){
		$('a[href^="/"]:not([href^="//"])',root).each(function(){
			var $this=$(this)
			$this.attr({href:'.'+$this.attr('href')})
		})
		
		FJSCore.modules.ajaxForms&&FJSCore.modules.ajaxForms(root)
		FJSCore.modules.updateTitle&&FJSCore.modules.updateTitle(root)
	}

	FJSCore.modules.updateTitle=function(root){
		document.title=root?$('title',root).text():FJSCore.title
	}
	
	$('html').addClass(FJSCore.mobile?'mobile':FJSCore.tablet?'tablet desktop':'desktop')

	$(function(){
		FJSCore.prepareLoaded($('html'))
		FJSCore.title=$('html>head>title').text()
		if(!FJSCore.mobile)
			$('.mobile-only').remove()
	})
	
}(window.jQuery);

!function($){
	$(function follows(){
		FJSCore.modules.follows=follows
		$('[data-follow]').not('[data-follow="location"]')//,[data-follow="hash"]
			.each(function(){
				var $this=$(this)
					,follow=$this.data('follow')
				$(follow).on('changeState',function(e,d){
					$this.trigger('changeState',d)
				})
			})
		$('[data-follow="location"]')
			.each(function(){
				var $this=$(this)
				$(window.FJSCore)
					.on('changeState',function(e,d){
						$this.trigger('changeState',d)						
					})
			})
		/*$('[data-follow="hash"]')
			.each(function(){
				var $this=$(this)
				$(window.FJSCore)
					.on('changeState',function(e,d){
						if(window.FJSCore.hash)
							$this.trigger('changeHashState',window.FJSCore.hash)
					})
			})*/
	})
}(window.jQuery);

!function($){
	$(function(){
		var opt={
			elementsPath:'>ul>li'
			,activeClass:'active'
		}
		$('[data-type="navigation"]').each(function(){
			var th=$(this)
				,data=$.extend({},opt,th.data('options'))
			
			data.elements=$(data.elementsPath,th)
				
			th
				.data({navigation:data})
				.on('changeState',function(e,d){					
					data.elements.each(function(){
						var th=$(this)
							,a=$('a',th)
							,href=a.attr('href').replace(FJSCore.basepath,'').replace(/^\.\//,'')
						if(href===d)
							th.addClass(data.activeClass)
						else
							th.removeClass(data.activeClass)
					})			
				})
			
		})
	})
}(window.jQuery);

!function($){
	$(function switcher(){
		var opt={
			elementsPath:'>div'			
		}
		,xhr
		
		FJSCore.modules.switcher=switcher
		
		$.ajaxSetup({
			type: "get",
			cache:false,
			async:true,
			accepts: "html",
			dataType: "html",
			isLocal:true,
			crossDomain:false
		})
		
		$('[data-type="switcher"]').each(function(){
			var $this=$(this)
				,flags=$this.data('flags')||''
				,data=$.extend({},opt,$this.data('options'))
				,show,hide
			
			data.elements=$(data.elementsPath,$this)
									
			$this
				.data({switcher:data})
				.on('changeState',function(e,d){
					show=$()
					hide=$()

					if(isExternal(d)&&~flags.indexOf('ajax')){
						var url=FJSCore.basepath+FJSCore.ajaxFolder.slice(1)+d						
						if(xhr)xhr.abort()						
						FJSCore.ajaxOverlay.trigger('show')		
						try{
							xhr=$.get(url,function(html){
								var ajaxPage=$('<div class="ajax-page"/>').attr({'data-url':FJSCore.state})
								show=show.add(ajaxPage)
								hide=hide.add($(data.elementsPath,$this))
								ajaxPage
									.html(html)
									.hide()
									.appendTo($this)
								
								data.elements=data.elements.add(ajaxPage)
								FJSCore.prepareLoaded(ajaxPage)
								
								show_hide_actions()							
							})
							xhr.error(function(e){					
								history.replaceState(FJSCore.prevState,'',FJSCore.basepath+FJSCore.defState);			
								$(document).trigger('changeLocation','404.html')
							})
							$.when(xhr)
								.then(function(){
									FJSCore.ajaxOverlay.trigger('hide')
								})
						}catch(e){console.log(e)}
					}else{
						if(d===FJSCore.indexFile)
							d=FJSCore.defState
							
						data.elements.each(function(){
							var $this=$(this)
							if($this.data('id')===d)
								show=show.add($this)
							else
								hide=hide.add($this)
						})
						show_hide_actions()
					}
					
					function show_hide_actions(){						
						hide=hide.not(':hidden')
						data.prev=data.curr
						data.curr=show
						
						hide.trigger('hide',data)
						
						if(show.length!==0)
							show.trigger('show',data)
						
						$.when(data.elements)
							.then(function(){
								data.elements.filter('.ajax-page:hidden').remove()
							})						
					}				
				})
		})
		
		$('[data-source]')
			.each(function(){
				var $this=$(this)
					,url=location.href.slice(0,location.href.lastIndexOf('/'))+'/ajax/'+$this.data('source')
				
				$this
					.on('show',function(e,d){						
						if(!$this.data('loaded')){
							if(xhr)xhr.abort()
							e.stopPropagation()							
							FJSCore.ajaxOverlay.trigger('show')		
							xhr=$.get(url,function(data){
								$this
									.html(data)
									.data('loaded',true)
									.trigger('show',d)
								FJSCore.prepareLoaded($this)							
							})
							$.when(xhr)
								.then(function(){									
									FJSCore.ajaxOverlay.trigger('hide')
								})
						}									
					})
			})
		
		$('[data-type="switcher"][data-follow="location"]').each(function(){
			var $this=$(this)
			FJSCore.internalIds=(FJSCore.internalIds||$()).add($this.data('switcher').elements)
		})
		
		FJSCore.internalIds=FJSCore.internalIds&&FJSCore.internalIds.map&&FJSCore.internalIds.map(function(){return $(this).data('id')})
		
		function isExternal(url){
			var external=true,i=0,l=FJSCore.internalIds.length
			
			for(i=0;i<l;i++)				
				if(FJSCore.internalIds[i]===url)
					external=false
					
			if(external&&(url===''||url===FJSCore.indexFile))
				external=false
			return external
		}
		
	})
}(window.jQuery);


!function($){
	if(FJSCore.mobile)
		$(function(){
			var desktop_wrap=$('#glob-wrap')
				,mobile_wrap=$('<div id="mobile-wrap"/>')
				,header=$('<div id="mobile-header"/>')
				,content=$('<div id="mobile-content" data-type="switcher" data-follow="location" data-flags="ajax"/>')
				,footer=$('<div id="mobile-footer"/>')
				,select_menu=$('<select id="mobile-navigation"/>')
				,select_options
				,navigation_holder=$('[data-type="navigation"][data-follow="location"]').eq(0)
				,content_holders=$('[data-type="switcher"][data-follow="location"]')
				,pages_collection=$()
				,notForMobileClass=".desktop-only"
				,states=FJSCore.internalIds.toArray()
				,submenuClass=".sf-mega"
				,defState=(FJSCore.defState==FJSCore.defMobileState)?FJSCore.defState:FJSCore.defMobileState
			
			function appendSubmenu($ul,level){
				if ($ul && $ul.length){
					var $li = $ul.children('li');
					$li.each(function(){
						var $this = $(this),
							a = $this.children('a');
						select_menu.append('<option value='+a.attr('href').replace(FJSCore.basepath,'')+'>'+level+a.html()+'</option>');
						appendSubmenu($this.children('ul'),level+level);
					});
				}
			}
			
			$('h1').eq(0)
				.appendTo(header)
				.find('a').attr({href:'./'+defState})
			
			select_menu.append('<option value="">'+FJSCore.emptyNavigationText+'</option>')
			select_menu.append('<option value="./'+defState+'">'+FJSCore.defStateMobileText+'</option>');
		
			navigation_holder.data('navigation').elements.each(function(){
				var a=$('>a',this)
					,val=a.attr('href')//.replace(FJSCore.basepath,'').replace(/^\.\//,'')
				if (val.substr(2) !== defState)
					select_menu.append('<option value=' + val + '>' + a.text() + '</option>')				
				// append submenu for mobile version
				appendSubmenu($(this).find(submenuClass+'>ul'),'--');
			})

			select_options=select_menu.find('option')

			select_menu
				.appendTo(header)
				
			content_holders
				.each(function(){
					var $this=$(this)					
					pages_collection=pages_collection.add($this.data('switcher').elements)
				})
				
			pages_collection
				.hide()
				.appendTo(content)
				
			$('footer .copyright,.follow-links').appendTo(footer)
						
			mobile_wrap
				.append(header)
				.append(content)
				.append(footer)
			mobile_wrap.find(notForMobileClass).remove()
			mobile_wrap.appendTo($('body').html(''))
			
			FJSCore.modules.switcher()
			FJSCore.modules.follows()

			select_menu.on('change',function(e,d){
				var val
					,index=select_options.filter(':selected').index()
					,selectMenuValue = FJSCore.state
				if(index){
					val=select_menu.val()
					if(/^\.\//.test(val)){
						val=val.replace(/^\.\//,'')
						if(val===FJSCore.defState)
							val=FJSCore.defMobileState						
						$(document).trigger('changeLocation',val);
						selectMenuValue = (val == FJSCore.defState) ? FJSCore.defMobileState : val;
					}
					else{
						window.location.replace(val)
					}
				}			
				select_menu.val('./'+selectMenuValue)
			})

		if(FJSCore.mobileFolowLinks){
			$('.follow-links')
				.click(function(e,d){
					var $this=$(this)
						,h=$('a',$this).outerHeight()
					$('>li',this)
						.stop()
						.animate({
							height:h
						})
					e.stopPropagation()
				})
			$('.follow-links a').click(function(e,d){
				var href=$(this).attr('href').replace(FJSCore.basepath,'')			
				$(document).trigger('changeLocation',href)
				$('.follow-links>li')
					.stop()
					.animate({
						height:0
					})
				return false
			})
			
			$(document).on('click',':not(".follow-links")',function(){
				$('.follow-links>li')
					.stop()
					.animate({
						height:0
					})
			})

		}
			
			$(FJSCore).on('changeState',function(e,d){
				var state=FJSCore.state.replace(/\?.+$/,'')
				if (select_menu.find('option[value="./'+state+'"]').length !== 0) {
					select_menu.val('./'+state)
				} else {
					select_menu.val('');
				}
			})
			
			$(document)
				.on('show','#mobile-content>*',function(e,d){					
					$(this).show()
				})				
				.on('hide','#mobile-content>*',function(e,d){
					$(this).hide()
				})				
				
		})	
}(window.jQuery);

!function($){
if(!FJSCore.mobile)
	$(function longScroller(){
		var map=[]
		,names=[]
		,scrollHolder=$('[data-follow="location"][data-type="switcher"][data-behavior="scroll"]')
		,items=scrollHolder.children()
		,$scrollable=$('html,body')
		,scrollable=$scrollable[0]
		,scroll_duration=1400
		,Core=window.FJSCore
		,$Core=$(Core)
		,doc=$(document)
		,win=$(window)
		,currentLocation
		,n=0,tmr
	
	FJSCore.modules.longScroller=longScroller
	
	if(items.length!==0){
		items
			.each(function(n){
				map[n]=this.offsetTop
				names[n]=$(this).data('id')
			})
		
		
		function onresize(){
			items
				.each(function(n){
					map[n]=this.offsetTop
				})
			$scrollable.stop()			
			if(scrollHolder.data('switcher').curr&&scrollHolder.data('switcher').curr.length!==0)
				$scrollable
						.stop()
						.animate({
							scrollTop:scrollHolder.data('switcher').curr.prop('offsetTop')
						},{
							duration:scroll_duration
						})				
		}
		
		win
			.on('load afterload',function(){
				onresize()
			})
			.resize(function(){
				n++
				clearTimeout(tmr)
				tmr=setTimeout(function(){
					if(n>1)
						onresize()
					n=0
				},100)
			})
		onresize()
		
		longScroller.blockScrollCalc=false
		
		win
			.on('scroll',function(){
				if(longScroller.blockScrollCalc)
					return false
					
				var i=0
				
				while(map[i++]-win.height()/2<=win.scrollTop()){}
				
				if(Core.state!==undefined&&names[i-2]!==Core.state)					
					doc.trigger('changeLocation',currentLocation=names[i-2])
			})
			.on('mousewheel',function(){
				$scrollable.stop()
			})
			
		items
			.on('show',function(e,d){
				if(Core.state!==currentLocation)
					scrollHolder.trigger('scrollstart')
					,$scrollable
						.stop()						
						.animate({
							scrollTop:d.curr.prop('offsetTop')
						},{
							duration:scroll_duration
							
						})
					,$.when($scrollable)
						.then(function(){
							scrollHolder.trigger('scrollend')
						})
			})
		}
	})
	
}(window.jQuery);

!function($){
	$(function(){
		FJSCore.modules.ajaxForms=ajaxForms
		ajaxForms()
		function ajaxForms(root){
			$('form[data-type="ajax"]',root)
				.each(function(){
					var $this=$(this)
					if($this.data('ajaxForms')===undefined)						
						$this.submit(function(){
							var get=$('[name]',$this).map(function(){
								return $(this).attr('name')+'='+$(this).val()
							}).toArray().join('&')
							
							$(document).trigger('changeLocation',$this.attr('action').slice(2)+'?'+get)
							
							return false
						})
						.data({ajaxForms:true})
				})
		}
	})
}(window.jQuery);

// plugin for changing height for pages with absolute and fixed position 
!function($){
    FJSCore.modules.responsiveContainer = function responsiveContainer(o){
        var options={
            container: '', // selector for content pages container
            elementsSelector: '.content-pages>div', // selector for content pages
            type: 'outer', // type of scroll (inner or outer) -- if inner min-height apply for elementsSelector, outer for body 
            affectSelectors: 'header, footer', // design elements selectors, that affect total height 
            deltaHeight: 0, // value for dynamically increase or decrease height value
            activePageSelector: '.activeSubPage', // selector for active page
            resizeDisableSelector: '.disableResize', // selector for page without applying resize 
            defStates: '' // when history.state equal to this value, then height of container will be 0
        }
        $.extend(options,o);
        options.deltaHeight = parseInt(options.deltaHeight);
        options.defStates = options.defStates.split(',');

        var win = $(window),
            mainContainer = setContainer(),
            defaultMinHeight = parseInt($('body').css('minHeight')),
            affectHeight = 0;

		function setContainer(){
			return (options.container==='') ? $(options.elementsSelector).parent() : $(options.container);
		}

        function checkDefStates(state){
        	var result = false,
        		i = 0; 
    		for (i = 0; i < options.defStates.length ; i++) {
    			if (options.defStates[i] == state) {
    				result = true;
    			}
    		}
    		return result;
        }

        function changeHeight(e) {        	
	        var currHistoryState = history.state ? history.state : location.href.slice(location.href.lastIndexOf('/')+1,location.href.length);	// current history state;
	        affectHeight = calculateAffectHeight();
        	if (options.type == 'inner') {
        	// min-height apply for every page
	            mainContainer = setContainer();
	            if ($(options.elementsSelector).length) {
	                $(options.elementsSelector).each(function(){  
	                    var $this = $(this),
	                        height = $('>div', $this).outerHeight(true),
	                        containerHeight = win.height() - affectHeight;
	                    // if height of page more than height of container
	                    (height > containerHeight)&&(height = containerHeight);
	                    var currentHeight = 0; // current height	                    	
	                    if (!checkDefStates(currHistoryState)) {
	                        currentHeight = containerHeight;
	                        // apply min-height
	                        $(options.elementsSelector).filter('>div'+options.activePageSelector).css('minHeight',height);
	                    }
	                    // apply height for container
	                    mainContainer.stop(true).animate({'height': currentHeight}, 0);
	                	// if disable resize selector not found
	                    if (!$(options.resizeDisableSelector, $this).length) {
	                    	// if height of container more than content height, select overflow-y property
	                        (containerHeight>height)?$this.css('overflow-y','hidden'):$this.css('overflow-y','scroll');
	                    }
	                })
	            } else {
	            	// if pages inside container not exists (for splash)
	                mainContainer.stop(true).animate({'height': 0}, 0);
	            }
	        } else if (options.type == 'outer') {
        	// min-height applying for body
        		var height = (defaultMinHeight>affectHeight)?defaultMinHeight:affectHeight;
        		
        		if (!checkDefStates(currHistoryState)) {
        			height = affectHeight + $(options.elementsSelector).filter(options.activePageSelector).outerHeight(true);
        		}
        		$('body').stop(true).animate({'minHeight': height}, 0);	                
	        }
	        // add listeners for container
	        $('body')
	        	.off('resizeContent', changeHeight).on('resizeContent', changeHeight)
                .off('updateDeltaHeight', updateDeltaHeight).on('updateDeltaHeight', updateDeltaHeight);
        }
        // calculate height of selectors, that affect total height
        function calculateAffectHeight(){
        	var	aDiffH = options.affectSelectors.split(','),
        		result = 0;
        	if (options.affectSelectors) {
		        for (var i = 0;i < aDiffH.length;i++){
		        	var elem = $(aDiffH[i]);
		        	(elem[0]) && (result += parseInt(elem.outerHeight(true)));
		        }
	        }
	        return (result + options.deltaHeight);
        }
        // update value for affecting selector's height
        function updateDeltaHeight(e, d){
        	if (d){
        		options.deltaHeight = parseInt(d);
        		$(this).trigger('resizeContent');
        	}
        }
        // add listener for window resize
        win.off('resize', changeHeight).on('resize', changeHeight);
    }
}(window.jQuery);

function include(src){document.write('<script src="'+src+'" type="text/javascript"></script>')}
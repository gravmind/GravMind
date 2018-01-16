/*
* Plugin for stretching images and video on fullscreen
*Version: 1.8;
*Author: Smart;
*/

(function($){
	$.fn.tmMultimediaGallery = function(o){
		return this.each(function(){
			var object = $(this),
				data = object.data('tmMultimediaGallery'),
				getObject = {
					startIndex: 0, // initial postion for gallery
					showOnInit: true, // show gallery after init
					autoPlayState: false, // on/off autoplay
					autoPlayTime: 4, // autoplay timeout
					alignIMG:"center", // align of image
					alignMode: 'fill', // mode of align 'fill' or 'fit'
					mouseMove: false, // use mouse move actions for images
					controlDisplay: false, // on/off controls display
					hideControlsOnClick: true, // hide controls on click or on tap event
					paginationDisplay: false, // on/off pagination display
					dragEnable: false, // on/off enable dragging pagination holder
					animationSpeed:'0.7', // speed of animation
					mobile: false, // if mobile
					resizableContainer: false, // change the size of the container on the size of the window
					galleryOpenClass: 'galleryOpen', // class, that adds to body when gallery is open
					container: '.galleryContainer', // container of gallery (window or other DOM element)
					imageHolder: '.imageHolder', // imageHolder selector
					pagination: '.inner', // pagination selector
					outerPagination: false, // outer pagination
					description: '.galleryDescription', // description selector
					descriptionActiveClass: '.active', // active class for current description item
					descriptionShowClass: '.show', // show class for description holder
					outerNavigation: false, // outer navigation
					next: '.nextButton', // next button selector
					prev: '.prevButton', // prev button selector
					play: '.playButton', // play button selector
					pause: '.pauseButton', // pause button selector
					spinner: '.imgSpinner', // prev button selector
					backClass: '.backImg', // back class
					frontClass: '.frontImg', // front class
					animationClass: 'flip', // class for main animation
					animationClassSub: 'scale', // class for secondary animation 
					noAnimationClass: '.animationDisable', // class for quick image changing 
					onShowActions: function(){}, // actions when gallery is active
					onHideActions: function(){}, // actions when gallery is not active,
					onBeforeChange: function(){}, // actions before change image
					onAfterChange: function(){}, // actions after change image
					onShowControls: function(){}, // actions shows controls of gallery
					onHideControls: function(){}, // actions hide controls of gallery
					// constructor of plugin
					constructor: function (params) {
						if (object.length) {
							getObject.container = object.parents(getObject.container);
							getObject.imageHolder = $(getObject.imageHolder, getObject.container);
							if (!getObject.outerPagination) {
								getObject.pagination = $(getObject.pagination, getObject.container);
					 		} else {
				 				getObject.pagination = $(getObject.pagination);
					 		}
					 		getObject.description = $(getObject.description, getObject.container);
					 		getObject.descriptionActiveClass = getObject.descriptionActiveClass.substr(1);
					 		getObject.descriptionShowClass = getObject.descriptionShowClass.substr(1);
					 		if (!getObject.outerNavigation) {
				 				getObject.next = $(getObject.next, getObject.container);
						 		getObject.prev = $(getObject.prev, getObject.container);
					 		} else {
						 		getObject.next = $(getObject.next);
						 		getObject.prev = $(getObject.prev);
					 		}
					 		getObject.play = $(getObject.play, getObject.container);
					 		getObject.pause = $(getObject.pause, getObject.container);
					 		getObject.spinner = $(getObject.spinner);
					 		getObject.noAnimationClass = getObject.noAnimationClass.substr(1);

							var image = $("img", getObject.imageHolder),
						 		video = $("video", getObject.imageHolder),
						 		imageSRCLink = $("ul li a", getObject.pagination.eq(0)),
						 		description = $("li", getObject.description),
						 		imageDeltaX,
								imageDeltaY,
								prevImg = -1,
								currImg = -1,
								allImg = imageSRCLink.length,
								loadComplete = true,
								autoPlayTimer,
								dragDirection = 1,
								doc = $(document),
								win = $(window),
								body = $('body'),
								galleryActive = false,
								showControls = false,
								mouseDrag = false,
								mouseDown = false,
								msie9 = Boolean(navigator.userAgent.match(/MSIE ([9]+)\./));
								
					 		getObject.startIndex = (getObject.startIndex < allImg) ? getObject.startIndex : 0;

					        init();
					    }

						function init(){
							msie9&&getObject.imageHolder.addClass('ie9');

							getObject.autoPlayTime*=1000;
							getObject.animationSpeed = getObject.animationSpeed.replace(",", ".");
							
							getObject.spinner.removeClass('spinnerShow');

							object.css({"position":"absolute", width:"100%", height:"100%", "z-index":"0"});
							getObject.imageHolder.css({"position":"absolute", width:"100%", height:"100%", "z-index":0, "top":0});

							if (!$(getObject.frontClass, getObject.imageHolder).length)
				        		image.wrap('<div class="'+getObject.frontClass.substr(1)+'"></div>');
				        	if (!$(getObject.backClass, getObject.imageHolder).length)
				        		getObject.imageHolder.append('<div class="'+getObject.backClass.substr(1)+'" style="display:none"></div>');

				        	setTimeout(function() {
				        		getObject.imageHolder.removeClass('flip90');
				        		object.css('zIndex','0');
				        	}, 1000);

				        	if (getObject.autoPlayState){
				        		autoPlayHandler();
				        	}
							
							getObject.mouseMove && init_mouse_move();

							window.orientation==undefined?usedDevice = "desktop":usedDevice = "fixedOptions";

							if(usedDevice != "desktop"){
								window.addEventListener("orientationchange", function(){
									resizeImageHandler();
								}, true);
							}
							win.resize(resizeImageHandler);
							object.on('resize', resizeImageHandler);
							resizeImageHandler();

							if ((!getObject.controlDisplay) || (allImg <= 1)){
								getObject.next.css({display:"none"});
								getObject.prev.css({display:"none"});
							}else{
								getObject.next.css({display:"block"});
								getObject.prev.css({display:"block"});
							}
							getObject.next.on("click", clickNext);
							getObject.prev.on("click", clickPrev);
							
							var id = 0;			
							if(getObject.paginationDisplay){
								$(getObject.pagination).each(function(){
									$(this)
										.find("ul li a")
											.on('mousedown', function(){
												mouseDown = true;
											})
											.on('mouseup',function(){
												clearTimeout(id);
												id = setTimeout(function(){ mouseDown = false; }, 10);
											})
											.on('mousemove', function(){
												(getObject.dragEnable) && (mouseDrag = mouseDown);
											})
											.on('click', clickPagination);
								})
							}else{
								getObject.pagination.css({display:"none"});
							}

							// object listeners
							object
								.on('showGallery', function(e, d){
									reset();

									body.addClass(getObject.galleryOpenClass);

									if (!galleryActive){
										!getObject.mobile&&videoInit();
									}
									getObject.onShowActions();
									
									galleryActive = true;

									descriptionChange();
									descriptionToggle(true);
									resizeImageHandler();

									doc.on('keydown', keyboardEvent);
									object.on('goTo', goTo);

									if (!d) { d = getObject.startIndex.toString(); }
									object.trigger('goTo', d);
								})
								.on('hideGallery',function(e){
									getObject.onHideActions();

									body.removeClass(getObject.galleryOpenClass);
									
									videoStop();

									getObject.imageHolder
										.removeClass('videoInside')
										.off('click')
										.children('div').removeClass('videoShow')
									
									getObject.autoPlayState = false;				
									descriptionToggle(false);
									galleryActive = false;

									doc.off('keydown', keyboardEvent);
									object.off('goTo', goTo);

									resetCounters();
								})
								.on('setGalleryActivity', function(e, d){
									if (d) {
										if (d === 'true') {
											galleryActive = true;
										} else if (d === 'false') {
											galleryActive = false;
										}
									}
								})
								.on('showControls', function(e){
									showControls = true;
									getObject.onShowControls();
								})
								.on('hideControls', function(e){
									showControls = false;
									getObject.onHideControls();
								})
								.on('toggleControls', function(e, d){
									if (d) {
										if (d === 'true') {
											object.trigger('showControls');
										} else if (d === 'false') {
											object.trigger('hideControls');
										}
									}
								})
								.on('click', function(){
									if (getObject.hideControlsOnClick)
										object.trigger('toggleControls', (showControls=!showControls).toString());
								})

							if ($.fn.swipe) {
								object
								.swipe({
									swipeLeft:function(event, direction, distance, duration, fingerCount) {
										galleryActive && clickNext();
									},
									swipeRight:function(event, direction, distance, duration, fingerCount) {
										galleryActive && clickPrev();
									}
								});
							}

							if (getObject.showOnInit) {
								object.trigger('showGallery');
							} else {
								reset();
							}
						}

						// keyboard listeners
						function keyboardEvent(e){
							if (galleryActive) {
								if (e.keyCode == 37) { clickPrev(); }
								else if (e.keyCode == 39) { clickNext(); }
							}
						}

						// reset couters and remove active class from pagination
						function resetCounters(){
							currImg = prevImg = -1;
							$("ul li", getObject.pagination).removeClass('active');
						}

						// reset actions
						function reset () {
							var img = $(getObject.imageHolder).find(getObject.frontClass + ' img, '+getObject.backClass + ' img');
							img.length && img.attr('src', '').css('visibility', 'hidden');
							resetCounters();
						}

						// mouse move actions
						function init_mouse_move(){
							/* mouse move actions */
			                var currTop = 0;
						    if (!getObject.mobile) {
						        getObject.imageHolder
						            .on('mousemove', function(e){
						                if (!galleryActive) { return false; }
					                    currTop = e.pageY * ($('.frontImg>img, .backImg>img').height()-win.height()) / win.height();
						            	$('.frontImg, .backImg', getObject.imageHolder).stop().animate({'scrollTop': currTop}, 1500);
						            });
						    /* end mouse move */
						    } else {
						        if ($.fn.swipe) {
							        getObject.imageHolder
							            .find('.frontImg, .backImg')
							            .swipe({
							                swipe:function(event, direction, distance, duration, fingerCount) {
							                    if (direction == 'down') {
							                        currTop -= distance;
							                    } else if (direction == 'up'){
							                        currTop += distance;
							                    }
							                    var h = $('.frontImg>img, .backImg>img').height();
							                    currTop = (currTop > h) ? h : currTop;
							                    currTop = (currTop < 0) ? 0 : currTop;
							                    $('.frontImg, .backImg', getObject.imageHolder).stop().animate({'scrollTop': currTop}, 1500);
							                }
							            });
						    	}
						    }
						}

						// function for go to element (number - parameter d)
						function goTo(e, d, q){
							if (d){
								d = parseInt(d);
								if (getObject.pagination &&
									getObject.pagination.find('a') &&
									getObject.pagination.find('a').eq(d)) {
										getObject.pagination.find('a').eq(d).trigger('click', q);
								}
							}
						}

						// show / hide description holder
						function descriptionToggle(value){
							if (value){
								getObject.description.addClass(getObject.descriptionShowClass);
							} else {
								getObject.description.removeClass(getObject.descriptionShowClass);
							}
						}

						// change description
						function descriptionChange(){
							description
								.stop(true)
								.removeClass(getObject.descriptionActiveClass)
								.eq(currImg)
									.addClass(getObject.descriptionActiveClass).end()
								.delay(500).queue(descriptionResize);
						}

						function descriptionResize(){
							getObject.description.css('height', description.eq(currImg).outerHeight(true));
						}

						// next listener
						function clickNext(e){
							if(loadComplete){
								getObject.autoPlayState = false;
								prevImg = currImg;
								currImg++;
								if(currImg>allImg-1){
									currImg = 0;
								}
								dragDirection=1;
								changeImageHandler();
							}
							return false;
						}

						// prev listener
						function clickPrev(e){
							if(loadComplete){
								getObject.autoPlayState = false;
								prevImg = currImg;
								currImg--;
								if(currImg<0){
									currImg = allImg-1;
								}
								dragDirection=-1;
								changeImageHandler();
							}
							return false;
						}

						// pagination listener
						function clickPagination(e, d){
							if (!mouseDrag) {
								if($(this).parent().index()!=currImg && loadComplete){
									if (!galleryActive) {
										object.trigger('showGallery');
									}
									prevImg = currImg;
									currImg = $(this).parent().index();
					                
					                clearTimeout(autoPlayTimer);
									getObject.autoPlayState = false;

									dragDirection = prevImg<currImg ? 1 : -1;
									changeImageHandler(d);
								}
							}
							return false;			
						}

						// autoplay
						function autoPlayHandler(){
							autoPlayTimer = setTimeout(function(){
								if(getObject.autoPlayState){
									prevImg = currImg;
									currImg++;
									if(currImg>=allImg){
										currImg = 0;
									}
									changeImageHandler();
								}
							}, getObject.autoPlayTime);
						}

						// video initialize
				        function videoInit(){
				        	function imageHolderClick(e){
				        		video&&video[0].paused ? videoPlay() : videoPause();
				        	}

				        	image.stop(true).fadeIn(1200);
				        	getObject.imageHolder
				        		.removeClass('videoInside')
				        		.off('click')
				        		.find('video').remove().end()
				    			.children('div').removeClass('videoShow');

				    		video = null;

				    		getObject.pause.removeClass('showButton').off('click');
				    		getObject.play.removeClass('showButton').off('click');

							// if video tag exist			
							if ($("ul li", getObject.pagination).eq(currImg).hasClass('video')){
								var videoArray = $("ul li", getObject.pagination).eq(currImg).find('a').attr('data-video-href');
				    			if (videoArray.length) videoArray = videoArray.split(',');

				    			getObject.imageHolder
									.addClass('videoInside')
				    			image
				    				.after('<video preload poster="'+image.attr('src')+'" style="display: none;"><source src="'+videoArray[0]+'" type="video/mp4" /><source src="'+videoArray[1]+'" type="video/webm" /><source src="'+videoArray[2]+'" type="video/ogg" />Video tag not supported. Download the video <a href="'+videoArray[0]+'.webm">here</a>.</video>');

				        		getObject.play.addClass('showButton').on('click',videoPlay);
								getObject.pause.on('click', videoPause);
								getObject.imageHolder.on('click', imageHolderClick);
				        		
				        		video = getObject.imageHolder.find('video');
				        	}
				        }

				        // video play
				        function videoPlay(e){
				        	getObject.autoPlayState = false;

				        	resizeElement(video);

				        	getObject.play.removeClass('showButton');
							getObject.pause.addClass('showButton');

							descriptionToggle(false);

				        	image.stop(true).fadeOut(600, function(){
				    			video.stop(true).fadeIn(1200);
				    			getObject.imageHolder.children(getObject.frontClass).addClass('videoShow');
								video[0].play();
				    		});
							return false;
				        }

				        // video pause
				        function videoPause(e){
							getObject.play.addClass('showButton');
				        	getObject.pause.removeClass('showButton');

				        	descriptionToggle(true);

				        	if (video&&video.length) {
				        		video[0].pause();
				        		video.stop(true).fadeOut(600,function () {
				    				getObject.imageHolder.children('div').removeClass('videoShow');
				    				image.stop(true).fadeIn(1200);
				        		});
					    	}
							return false;
				        }

				        // video stop
				        function videoStop(e){
				    		videoPause(e);
				    		getObject.play.removeClass('showButton');
				    		getObject.pause.removeClass('showButton');

				        	return false;
				        }
				        
				        // function for getting container height 
				        function windowH() {
				        	var result; 
				        	if (getObject.container == window) {
				        		result = ((getObject.container.height()>=parseInt($('body').css('minHeight')))?getObject.container.height():parseInt($('body').css('minHeight')));
				        	} else {
				    			result = getObject.container.height();
				        	}
				        	return result;
				        }

				        // function for getting container width 
				        function windowW() {
				        	var result; 
				        	if (getObject.container == window) {
				        		return ((getObject.container.width()>=parseInt($('body').css('minWidth')))?getObject.container.width():parseInt($('body').css('minWidth')));
				        	} else {
				        		result = getObject.container.width();
				        	}
				        	return result;
				        }

				        // function for controlling resize element
				        function resizeElement(obj) {
				        	if (obj.length) {
								var imageWidth = obj.width(),
									imageHeight = obj.height(),
									screenWidth = windowW(),
									screenHeight = windowH(),
									imageCoef = imageHeight/imageWidth,
									holderCoef = screenHeight/screenWidth,
									imageDeltaX = 0,
									imageDeltaY = 0;

				        		if (getObject.alignMode === 'fill') {
									obj.css({'width': windowW(), 'height':"auto", 'position':"absolute", "max-width":"none"});
									imageWidth = obj.width();
									imageHeight = obj.height();									

									var	alignIMG = obj.attr('data-image-align') ? obj.attr('data-image-align') : getObject.alignIMG,
										imageScroll = obj.attr('data-image-scroll');

									if (imageScroll === "enable") {
										imageScroll = true; 
										alignIMG = 'top';
										obj.parent().css('overflow-y','visible');
									} else {
										imageScroll = false;
										obj.parent().css('overflow-y','hidden');
									}

									// imageCoef = imageHeight/imageWidth;
									// holderCoef = screenHeight/screenWidth;

									obj.css({height: screenHeight, width:"auto"});
									if ((imageCoef > holderCoef) || ((imageScroll || getObject.mouseMove) && (screenHeight < imageHeight))){							
										obj.css({height:"auto", width: screenWidth});
									}

									imageWidth = obj.width();
									imageHeight = obj.height();

									switch(alignIMG){
										case "top":
											imageDeltaX=-(imageWidth-screenWidth)*.5;
											imageDeltaY=0;
										break;
										case "bottom":
											imageDeltaX=-(imageWidth-screenWidth)*.5;
											imageDeltaY=-(imageHeight-screenHeight);
										break;
										case "right":
											imageDeltaX=-(imageWidth-screenWidth);
											imageDeltaY=-(imageHeight-screenHeight)*.5;
										break;
										case "left":
											imageDeltaX=0;
											imageDeltaY=-(imageHeight-screenHeight)*.5;
										break;
										case "top_left":
											imageDeltaX=0;
											imageDeltaY=0;
										break;
										case "top_right":
											imageDeltaX=-(imageWidth-screenWidth);
											imageDeltaY=0;
										break;
										case "bottom_right":
											imageDeltaX=-(imageWidth-screenWidth);
											imageDeltaY=-(imageWidth-screenHeight);
										break;
										case "bottom_left":
											imageDeltaX=0;
											imageDeltaY=-(imageHeight-screenHeight);
										break;
										default:
											imageDeltaX=-(imageWidth-screenWidth)*.5;
											imageDeltaY= -(imageHeight-screenHeight)*.5;
									}

									if (!getObject.mouseMove) {
										obj.css({'left':imageDeltaX, 'top':imageDeltaY});
									} else {
										obj.css({'left':imageDeltaX});
									}
															
								} else if (getObject.alignMode === 'fit') {
									if (imageCoef > holderCoef){							
										obj.css({ width: 'auto', height: screenHeight });
									} else {
										obj.css({ height: 'auto', width: screenWidth });
									}

									imageWidth = obj.width();
									imageHeight = obj.height();
									imageDeltaX = -(imageWidth-screenWidth)*.5;
									imageDeltaY = -(imageHeight-screenHeight)*.5;

									obj.css({'position':"absolute", "max-width":"none", 'left':imageDeltaX, 'top':imageDeltaY});
								}							
							}							
						}

						// main function for controlling resize element 
						function resizeImageHandler(){
							descriptionResize();
							if (getObject.resizableContainer) {
								getObject.container.css({
									'width': win.width(),
									'height': win.height()
								});
							}
							image = $("img", getObject.imageHolder);
							image.length&&image.each(function(ind, img){
								resizeElement($(img));
							})

							video = $('video', getObject.imageHolder);
							resizeElement(video);
						}

						// function for controlling change image
						function changeImageHandler(d){
							if (allImg > 1) {
								// galleryActive = false;
								getObject.spinner.addClass('spinnerShow');

								$(getObject.pagination).each(function(){
									$(this).find("ul li")
										.eq(currImg)
											.addClass("active").end()
										.eq(prevImg).removeClass("active");
								});
								
								loadComplete = false;
								
								image = $("img", getObject.imageHolder);

								var imgSRC = imageSRCLink.eq(currImg).attr("href"),
									alignIMG = imageSRCLink.eq(currImg).attr("data-image-align"),
									imageScroll = imageSRCLink.eq(currImg).attr("data-image-scroll");
								alignIMG = alignIMG?'data-image-align="'+alignIMG+'"':"";
								imageScroll = imageScroll?'data-image-scroll="'+imageScroll+'"':"";

								$(getObject.backClass, getObject.imageHolder)
									.css({'display':'block'})
									.empty()
									.append('<img src="'+imgSRC+'" alt="" '+alignIMG+' '+imageScroll+'>')
									.find('img')
										.on("load", loadHandler);

								descriptionChange();
								descriptionToggle(true);
							}
							function loadHandler(){
								loadImageHandler(d);
							}
						}

						// function for controlling load image
						function loadImageHandler(quickChange){
							getObject.onBeforeChange();
							getObject.imageHolder.addClass(getObject.animationClassSub);
							resizeElement(getObject.imageHolder.find(getObject.backClass+'>img'));
							resizeElement(getObject.imageHolder.find(getObject.frontClass+'>img'));

							var time = 1000;
							if (quickChange === 'quick') {
								time = 10;
								getObject.container.addClass(getObject.noAnimationClass);
								$(getObject.frontClass, getObject.imageHolder).empty().css({'zIndex':1, 'display':'none'});
							}

							setTimeout(function(){
								getObject.spinner.removeClass('spinnerShow');

								// add or remove animation class
								!getObject.imageHolder.hasClass(getObject.animationClass)?getObject.imageHolder.addClass(getObject.animationClass):getObject.imageHolder.removeClass(getObject.animationClass);
								
								if (msie9) {
									getObject.imageHolder
										.find(getObject.frontClass).stop(true).animate({'opacity':0}, time).end()
										.find(getObject.backClass).css('opacity',0).stop(true, true).animate({'opacity':1}, time).end()
								}

								getObject.imageHolder.find(getObject.backClass+">img")
									.off("load", loadImageHandler);

								getObject.imageHolder
									.stop(true,true)
									.delay(getObject.animationSpeed*time)
									.queue(onAnimateComplete);

								function onAnimateComplete(e){
									if (quickChange) {
										getObject.container.removeClass(getObject.noAnimationClass);
									}
									var $this = $(this);

									$(getObject.frontClass, $this).empty().css({'zIndex':1, 'display':'none'});
									$(getObject.backClass, $this).css('zIndex',2);

									image = $(getObject.backClass + ' img', $this);

									$this.removeClass(getObject.animationClassSub);

									// swap classes
									var tmp = getObject.backClass;
									getObject.backClass = getObject.frontClass;
									getObject.frontClass = tmp;

									// initialize video if exist
									!getObject.mobile&&videoInit();
									
									loadComplete = true;
									// galleryActive = true;
									autoPlayHandler();

									getObject.onAfterChange();
								}
							}, time)
						}
					}
				}			
			
			data?object=data:object.data({tmMultimediaGallery: getObject});
    		typeof o=='object' && $.extend(getObject, o);
    		getObject.me || getObject.constructor(getObject.me=object);
		});
	}
})(jQuery);
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Search</title>
</head>
<body>
<a href="./" class="closeIcon historyBack closeIconGallery"></a>
	<div class="container mar_t_160 pad_b_m_8">
		<div class="row">
			<div class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-12 mar_t_20">
				<h4>Search results:</h4>
<?php

if(!isset($_GET['s'])) {
	die('You must define a search term!');
}

$highlight = true;//highlight results or not
$search_in = array('html', 'htm');//allowable filetypes to search in
$search_dir = '.';//starting directory
$recursive = true;//should it search recursively or not
define('SIDE_CHARS', 80);
$file_count = 0;
$search_term = mb_strtolower($_GET['s'], 'UTF-8');
$search_term_length = strlen($search_term);
$final_result = array();
$found = 0;

$files = list_files($search_dir);
$files[] = '../index.html';


foreach($files as $file){
	$contents = file_get_contents($file);
	preg_match("/\<title\>\s*(.*)\s*\<\/title\>/", $contents, $page_title); //getting page title
	if (preg_match("#\<body.*\>(.*)\<\/body\>#si", $contents, $body_content)){ //getting content only between <body></body> tags
		$clean_content = strip_tags($body_content[0]); //remove html tags
		$clean_content = preg_replace( '/\s+/', ' ', $clean_content ); //remove duplicate whitespaces, carriage returns, tabs, etc
	
	//$found = strpos_recursive($clean_content, $search_term);
	$found = strpos_recursive(mb_strtolower($clean_content, 'UTF-8'), $search_term);
	$final_result[$file_count]['file_name'][] = $file;
	if(isset($page_title[1]) and $page_title[1]!==''){
		$final_result[$file_count]['page_title'][] = $page_title[1];
	}else{
		$final_result[$file_count]['page_title'][] = substr(strrchr($final_result[$file_count]['file_name'][0],'/'),1);
	}
}
	if($found && !empty($found)) {
		for ($z = 0; $z < count($found[0]); $z++){
			$pos = $found[0][$z][1];
			$side_chars = SIDE_CHARS;
			if ($pos < SIDE_CHARS){
				$side_chars = $pos;
				$pos_end = SIDE_CHARS + $search_term_length;
			}else{
				$pos_end = SIDE_CHARS*2 + $search_term_length;
			}

			$pos_start = $pos - $side_chars;
			$str = substr($clean_content, $pos_start, $pos_end);
			$result = preg_replace('#'.$search_term.'#ui', '<span class="search_result">\0</span>', $str);
			//$result = preg_replace('#'.$search_term.'#ui', '<span class="search">'.$search_term.'</span>', $str);
			$final_result[$file_count]['search_result'][] = $result;
		}
	} else {
		$final_result[$file_count]['search_result'][] = '';
	}
	$file_count++;
}
?>
<ol class="search_list">
	<?php
		$match_count = 0;
		for ($i=0; $i < count($final_result); $i++){
			if (!empty($final_result[$i]['search_result'][0]) || $final_result[$i]['search_result'][0] !== ''){
				$match_count++;
				$href='.' . strrchr($final_result[$i]['file_name'][0],'/');
	?>
			<li>
				<h3 class="search_title"><a target="_top" href="<?php echo $href; ?>" class="search_link"><?php echo $final_result[$i]['page_title'][0]; ?></a></h3>
				<p>...<?php echo $final_result[$i]['search_result'][0]; ?>...
				<br><span class="search_result">Terms matched: <?php echo count($final_result[$i]['search_result']); ?> - URL: <?php echo $href; ?></span></p>
			</li>
	<?php
			}
		}
		if ($match_count == 0) {
			echo '<h4>No results found for <span class="search">'.$search_term.'</span></h4>';
		}
	?>
</ol>

<?php
//lists all the files in the directory given (and sub-directories if it is enabled)
function list_files($dir){
	global $recursive, $search_in;

	$result = array();
	if(is_dir($dir)){
		if($dh = opendir($dir)){
			while (($file = readdir($dh)) !== false) {
				if(!($file == '.' || $file == '..')){
					$file = $dir.'/'.$file;
					if(is_dir($file) && $recursive == true && $file != './.' && $file != './..'){
						$result = array_merge($result, list_files($file));
					}
					else if(!is_dir($file)){
						if(in_array(get_file_extension($file), $search_in)){
							$result[] = $file;
						}
					}
				}
			}
		}
	}
	return $result;
}

//returns the extention of a file
function get_file_extension($filename){
	$result = '';
	$parts = explode('.', $filename);
	if(is_array($parts) && count($parts) > 1){
		$result = end($parts);
	}
	return $result;
}

function strpos_recursive($haystack, $needle, $offset = 0, &$results = array()) {               
    $offset = stripos($haystack, $needle, $offset);
    if($offset === false) {
        return $results;           
    } else {
        $pattern = '/'.$needle.'/ui';
	preg_match_all($pattern, $haystack, $results, PREG_OFFSET_CAPTURE);
		return $results;
    }
}
?>
			</div>
		</div>
	</div>
</body>
</html>
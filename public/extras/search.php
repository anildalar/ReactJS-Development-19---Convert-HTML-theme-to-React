<?php
/*
 * This is an example for the search. It returns
 * a JSON array of objects:
 * Format:
   [
		{
			"href" : "link to target page",
			"text" : "text which is shown in the results",
			"img" : "a URL to a 50x50 pixel image which is displayd with the result (optional)"
		},
		[more results...]
   ]
 */

ob_start();

sleep(1);

// Check for AJAX request
if (isset($_SERVER['HTTP_X_REQUESTED_WITH'])) {
    $term = trim($_POST['term']);
    
    // Example results array:
    $result = array(
        array(
            'href' => 'http://google.com',
            'text' => 'Description text',
            'img' => 'http://<url>/50x50.jpg'
        ),
        array(
            'href' => 'http://facebook.com',
            'text' => 'Description text'
        )
        
    );
    
    // Demonstration: ThemeForest Results
    $result = themeforesSearch($term);
   
	// Alternative: Wikipedia
	// $result = wikipediaSearch($term);
	
    echo json_encode($result);
}




/* SEARCH FUNCTIONS */

// Get results from ThemeForest API
function themeforesSearch($term) {

    $term = urlencode($term);
	
    // Check for cached result
    if (file_exists('_searches/' . $term . '.json')) {
        $json = file_get_contents('_searches/' . $term . '.json');
        
	// Cache lookup failed - fetch result from envato.com
    } else {
        $url = 'http://marketplace.envato.com/api/v3/search:themeforest,,' . str_replace('+', '|', $term) . '.json';
        
        $useragent = "Mozilla/5.0 (Windows NT 6.1; rv:15.0) Gecko/20100101 Firefox/15.0";
        
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, $url);
        curl_setopt($curl, CURLOPT_HEADER, 0);
        curl_setopt($curl, CURLOPT_TIMEOUT, 30);
        curl_setopt($curl, CURLOPT_USERAGENT, $useragent);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        $json = curl_exec($curl);
        curl_close($curl);
        
		// API limit reached :( Switch to Wikipedia Results
        if (empty($json)) {
            return wikipediaSearch($term);
        }
		
		// Store result in cache
        file_put_contents('_searches/' . $term . '.json', $json);
    }
    
    $obj = json_decode($json);
    
    $results = array();
    $i       = 0;
	
    foreach ($obj->search as $item) {
		// Ten results are enough
        if (++$i > 10) {
            continue;
		}
		
		// Store entry in results array
        $array = array(
            'href' => $item->url . '?ref=Stammi',
            'title' => $item->description,
            'descr' => 'Price: $' . intval($item->item_info->cost),
            'img' => $item->item_info->thumbnail
        );
        
        array_push($results, $array);
    }
    
    return $results;
}


// Get results from Wikipedia
function wikipediaSearch($term) {

    $term = urlencode($term);
	
    // Check for cached result
    if (file_exists('_searches/' . $term . '.xml')) {
        $xml = file_get_contents('_searches/' . $term . '.xml');
        
    // Cache lookup failed - fetch result from wikipedia.org
    } else {
        $url = 'http://en.wikipedia.org/w/api.php?action=opensearch&format=xml&limit=8&search=' . $term;
        
        $useragent = "Mozilla/5.0 (Windows NT 6.1; rv:15.0) Gecko/20100101 Firefox/15.0";
        
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_HEADER, 0);
        curl_setopt($ch, CURLOPT_TIMEOUT, 30);
        curl_setopt($ch, CURLOPT_USERAGENT, $useragent);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $xml = curl_exec($ch);
        curl_close($ch);
        
        file_put_contents('_searches/' . $term . '.xml', $xml);
    }
    
    
    $xmlobj = new SimpleXMLElement($xml);
    
    $results = array();
    
    foreach ($xmlobj->Section->Item as $node) {
	
		// Store entry in results array
        $array = array(
            'href' => (string) $node->Url,
            'title' => (string) $node->Text,
            'descr' => (string) $node->Description
        );
        
        if (isset($node->Image)) {
            $array['img'] = (string) @$node->Image[0]->attributes();
        }
        
        array_push($results, $array);
    }
    
    return $results;
}

ob_end_flush();
?>
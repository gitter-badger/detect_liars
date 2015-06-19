<?php
	$user_agent = $_SERVER['HTTP_USER_AGENT'];
    $accept_header = $_SERVER['HTTP_ACCEPT'];
    $encoding_header = $_SERVER['HTTP_ACCEPT_ENCODING'];
    $language_header = $_SERVER['HTTP_ACCEPT_LANGUAGE'];
    $connection_header = $_SERVER['HTTP_CONNECTION'];

    $response = array("userAgentHttp" => $user_agent
    	, "acceptHttp" => $accept_header
    	, "encodingHttp" => $encoding_header
    	, "acceptLanguagesHttp" => $language_header
    	, "connectionHttp" => $connection_header
    );

    echo json_encode($response);

?>
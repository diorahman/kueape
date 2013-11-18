<?php
  $handle = curl_init();
  $custom_headers = array();

  curl_setopt($handle, CURLOPT_URL, "http://master.tus.io/files");
  curl_setopt($handle, CURLOPT_FOLLOWLOCATION, false);
  curl_setopt($handle, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($handle, CURLOPT_HEADER, false);
  curl_setopt($handle, CURLOPT_POST, true);
  curl_setopt($handle, CURLOPT_FAILONERROR, true);
  curl_setopt($handle, CURLOPT_BUFFERSIZE, 64000);
  curl_setopt($handle, CURLOPT_HTTPHEADER, array(
      'Content-Length: 0',
      'Final-Length: 100',
  ));
  curl_setopt($handle, CURLOPT_HEADERFUNCTION, function($ch, $header) use (&$custom_headers){
      $headers = array();
      $extract = explode("\r\n", $header);
      foreach ($extract as $line) {
          if (preg_match('/^([a-z0-9_-]+): (.*)$/i', $line, $matches)) {
              list($null, $key, $value) = $matches;
              $headers[$key] = $value;
          }
      }

      $custom_headers = array_merge($custom_headers, $headers);

      return strlen($header);
  });
  
  if (curl_exec($handle) === false) {
      echo 'Error\n';
  }
  
  $http_code = curl_getinfo($handle, CURLINFO_HTTP_CODE);
  
  if ($http_code !== 201) {
      echo 'Error while request POST - excepted HTTP Code 201 - get HTTP Code '.$http_code;
  }
  
  $info = array_merge($custom_headers, curl_getinfo($handle));
  curl_close($handle);
?>

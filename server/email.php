
<?php

$to         = 'alex.heritier@gmail.com';
$from       = $_POST['from']
$subject    = $_POST['subject'];
$message    = $_POST['message'];
$headers    =   'From: ' . $from . "\n" .
                'Reply-To: ' . $to;

mail($to, $subject, $message, $headers);
header('Location: http://www.aheritier.com');

<?php
header('Content-Type: application/json');

$GEETEST_ID = "f34ca0c4dee4082cf8b97fc9a895a451";  // ใส่ Public Key จาก Geetest
$GEETEST_KEY = "00345e2a6b2150d3ceaa704bb9539f5e"; // ใส่ Private Key จาก Geetest

$data = file_get_contents("http://api.geetest.com/register.php?gt=$GEETEST_ID");
$challenge = md5($data . $GEETEST_KEY);

echo json_encode([
    "gt" => $GEETEST_ID,
    "challenge" => $challenge,
    "success" => 1
]);
?>

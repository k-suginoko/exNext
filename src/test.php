<?php
header('Access-Control-Allow-Methods: POST, PUT, GET, POST, DELETE, OPTIONS, PUT, GET, POST, DELETE, OPTIONS');
header('Access-Control-Allow-Origin: *, *, *');

$word1 = $_POST['text']
$params = json_decode(file_get_contents('php://input'), true);

echo "{$_POST['text']}を入力しました。";
echo "params: {$params}";

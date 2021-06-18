<?php
header('Content-Type: application/json');

$word1 = htmlspecialchars($_POST['text'], ENT_QUOTES, 'UTF-8');
 
echo "{$word1}を入力しました。";

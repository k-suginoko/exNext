<?php
 
$word1 = htmlspecialchars($_POST['text'], ENT_QUOTES, 'UTF-8');
 
echo "{$word1}を入力しました。";

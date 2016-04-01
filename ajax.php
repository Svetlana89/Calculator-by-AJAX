<?php
    $a = $_POST["x"];
    $b = $_POST["y"];
    $c = $a + $b;
    if($a<10 && $b<10){
    echo "Summa = $c";
    } else echo "Error";
?>
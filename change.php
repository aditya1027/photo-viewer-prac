<?php
if(isset($_POST["order"])){

    $content=($_POST["order"]);
    $fp=fopen("list.html","w");
    fwrite($fp,$content);
    fclose($fp);
}
?>
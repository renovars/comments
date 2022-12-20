<?php

require 'connect.php';

if (isset($_POST["comment"])) {

    $comment = mysqli_real_escape_string($connect, $_POST["comment"]);
    $sql = "INSERT INTO `comments` (`id`, `name`, `text`, `date`) VALUES (NULL, NULL, '$comment', NULL);";
    $id = mysqli_insert_id($connect);
    if(mysqli_query($connect, $sql)){
        echo $id = mysqli_insert_id($connect);
    } else{
        echo "Ошибка: " . mysqli_error($connect);
    }
    mysqli_close($connect);
}
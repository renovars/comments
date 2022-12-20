<?php

require 'connect.php';

if (isset($_POST["id"])) {

    $id = mysqli_real_escape_string($connect, $_POST["id"]);
    $sql = "DELETE FROM `comments` WHERE `comments`.`id` = $id";
    if(mysqli_query($connect, $sql)){
        echo "Данные успешно удалены";
    } else{
        echo "Ошибка: " . mysqli_error($connect);
    }
    mysqli_close($connect);
}
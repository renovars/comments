<?php

require 'connect.php';

$commentsFromDB = mysqli_query($connect, "SELECT * FROM `comments` ORDER BY `comments`.`date` DESC");
$commentsFromDB = mysqli_fetch_all($commentsFromDB);

echo json_encode($commentsFromDB);

mysqli_close($connect);
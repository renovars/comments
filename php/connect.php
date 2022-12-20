<?php

$connect = mysqli_connect('localhost', 'root', '', 'comments');

if(!$connect) {
    die('Error connect to database!');
}
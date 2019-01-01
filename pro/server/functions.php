<?php
require "db_connection.php";

function getBrands()
{
    global $con;
    $getQuery = "select * from brand";
    $getResult = mysqli_query($con, $getQuery);
    while ($row = mysqli_fetch_assoc($getResult))
    {
        $title = $row['brand_name'];
        echo "<option> <a class=\"nav-link\"  href=\"#\">$title</a></option>";
    }
}


function getCategory()
{
    global $con;
    $getCatQuery = "select * from category";
    $getCatResult = mysqli_query($con, $getCatQuery);
    while ($row = mysqli_fetch_assoc($getCatResult))
    {
        $title = $row['cat_title'];
        echo "<option><a class=\"nav-link\"  href=\"#\">$title</a> </option>";
    }
}


function getCats()
{
    global $con;
    $getCatQuery = "select * from categories";
    $getCatResult = mysqli_query($con, $getCatQuery);
    while ($row = mysqli_fetch_assoc($getCatResult))
    {
        $title = $row['cat_title'];
        echo " <li> <a class=\"nav-link\"  href=\"#\">$title</a> </li>";
    }
    print_r($row);
}
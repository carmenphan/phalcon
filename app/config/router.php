<?php


$router = $di->getRouter();

// Define your routes here
$router->add('/new', [
   
    'controller' => 'New',
    'action' => 'index',

]);

$router->handle();

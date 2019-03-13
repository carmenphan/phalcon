<?php



$router = $di->getRouter();

$router->add('/', [
    'namespace' => 'App\Controllers',
    'controller' => "index",
    'action' => "index"
]);
$router->add('/setup', [
    'namespace' => 'App\Controllers',
    'controller' => "Setup",
    'action' => "index"
]);
// Define your routes here
$router->add('/404', [
    'namespace' => 'App\Controllers',
    'controller' => 'index',
    'action' => 'page404',

]);
$router->add('/login', [
    'namespace' => 'App\Controllers',
    'controller' => 'Login',
    'action' => 'index',
]);
$router->add('/logout', [
    'namespace' => 'App\Controllers',
    'controller' => 'Login',
    'action' => 'logout',
]);
$router->add('/Ajax/CheckSubmitLogin', [
    'namespace' => 'App\Controllers',
    'controller' => 'Login',
    'action' => 'CheckEmailPassword',
]);
//getDataList
$router->add('/getDataList', [
    'namespace' => 'App\Controllers',
    'controller' => 'index',
    'action' => 'getDataList',

]);
$router->add('/deleteEmployee', [
    'namespace' => 'App\Controllers',
    'controller' => 'index',
    'action' => 'deleteEmployee',

]);
$router->add('/add', [
    'namespace' => 'App\Controllers',
    'controller' => 'index',
    'action' => 'addNew',

]);
$router->add('/edit/{id}', [
    'namespace' => 'App\Controllers',
    'controller' => 'index',
    'action' => 'edit',

]);
// DEPARMENT
$router->add('/getDepartment', [
    'namespace' => 'App\Controllers',
    'controller' => 'index',
    'action' => 'getDepartment',

]);
$router->add('/editDepartment', [
    'namespace' => 'App\Controllers',
    'controller' => 'index',
    'action' => 'editDepartment',

]);
$router->add('/deleteDepartment', [
    'namespace' => 'App\Controllers',
    'controller' => 'index',
    'action' => 'deleteDepartment',

]);
$router->add('/addNewDepartment', [
    'namespace' => 'App\Controllers',
    'controller' => 'index',
    'action' => 'addNewDepartment',

]);
// POSITION
$router->add('/getPosition', [
    'namespace' => 'App\Controllers',
    'controller' => 'index',
    'action' => 'getPosition',

]);
$router->add('/editPosition', [
    'namespace' => 'App\Controllers',
    'controller' => 'index',
    'action' => 'editPosition',

]);
$router->add('/deletePosition', [
    'namespace' => 'App\Controllers',
    'controller' => 'index',
    'action' => 'deletePosition',

]);
$router->add('/addNewPosition', [
    'namespace' => 'App\Controllers',
    'controller' => 'index',
    'action' => 'addNewPosition',

]);
// 
$router->handle();

<?php


$router = $di->getRouter();

// Define your routes here
$router->add('/404', [
   
    'controller' => 'index',
    'action' => 'page404',

]);
//getDataList
$router->add('/getDataList', [
   
    'controller' => 'index',
    'action' => 'getDataList',

]);
$router->add('/deleteEmployee', [
   
    'controller' => 'index',
    'action' => 'deleteEmployee',

]);
$router->add('/add', [
   
    'controller' => 'index',
    'action' => 'addNew',

]);
$router->add('/edit/{id}', [
   
    'controller' => 'index',
    'action' => 'edit',

]);
// DEPARMENT
$router->add('/getDepartment', [
   
    'controller' => 'index',
    'action' => 'getDepartment',

]);
$router->add('/editDepartment', [
   
    'controller' => 'index',
    'action' => 'editDepartment',

]);
$router->add('/deleteDepartment', [
   
    'controller' => 'index',
    'action' => 'deleteDepartment',

]);
$router->add('/addNewDepartment', [
   
    'controller' => 'index',
    'action' => 'addNewDepartment',

]);
// POSITION
$router->add('/getPosition', [
   
    'controller' => 'index',
    'action' => 'getPosition',

]);
$router->add('/editPosition', [
   
    'controller' => 'index',
    'action' => 'editPosition',

]);
$router->add('/deletePosition', [
   
    'controller' => 'index',
    'action' => 'deletePosition',

]);
$router->add('/addNewPosition', [
   
    'controller' => 'index',
    'action' => 'addNewPosition',

]);
// 
$router->handle();

<?php

$loader = new \Phalcon\Loader();

/**
 * We're a registering a set of directories taken from the configuration file
 */



$loader->registerDirs(
    [
        $config->application->controllersDir,
        $config->application->modelsDir,
        $config->application->libraryDir
    ]
)->register();  
$loader->registerNamespaces([
    'App\Controllers' => APP_PATH . '/controllers/',
    'App\Models' => APP_PATH . '/models/',
    'App\Libraries' => APP_PATH . '/library/'
]);


$loader->register();
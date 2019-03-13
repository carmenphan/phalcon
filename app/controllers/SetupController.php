<?php
namespace App\Controllers;
use Phalcon\Mvc\Controller;
use Phalcon\Http\Request;
use Phalcon\Flash\Direct as FlashDirect;
use Phalcon\Flash\Session as FlashSession;
use App\Models\UserExtends;
use App\Models\Position;
use App\Models\Department;
use Phalcon\Db\Adapter\Pdo\Mysql;

class SetupController extends Controller
{

    public function indexAction()
    {
        if (file_exists(__DIR__."/../config/eav.php")){
            return $this->response->redirect('/');
        }
        $request = new Request();

        if ($request->isPost()){
            $flash = new FlashSession();
        
            
         
            $info_db = $request->getPost("db");
            $checkConnect = $this->CheckConnectToDataBase($info_db);
            if (!$checkConnect){
                
                $flash->error("Can't Connect To Database");
                return $this->response->redirect('/setup');


            }

            $createTable = $this->CreateTable($info_db);
            if(!$createTable) {
                $flash->error("Can't Connect To Database");
                return $this->response->redirect('/setup');
            }
          
            
            $createUser = $this->CreateUser($info_db,$request->getPost("user"));

            $fp = fopen(__DIR__."/../config/eav.php", 'w');
        
            foreach ($info_db as $key =>  $value ){
                fwrite($fp , $key .",".$value.PHP_EOL);

            }

            
          
            fclose($fp);
            
            chmod(__DIR__."/../config/eav.pgp", 0777); 
        
            return $this->response->redirect('/login');
            
        }
        $this->view->pick("setup/index");
  
    }
    public function CheckConnectToDataBase($info_db)
    {
        $config = array(
            "host" => $info_db['host'],
            "dbname" => "",
            "username" => $info_db['user'],
            "password" => $info_db['password'],
            "port"     => 3306
        );

       
        try {
         
        
            $connection = new Mysql($config);
          
        }
        catch(\Exception $e){
            return false;
            
        }
        // checkDatabase 
        $createDataNotExists = $connection->execute(
            "CREATE DATABASE IF NOT EXISTS ERP_HRM"
        );
        return true;
    }
    public function CreateTable($info_db)
    {
        $config = array(
            "host" => $info_db['host'],
            "dbname" => "ERP_HRM",
            "username" => $info_db['user'],
            "password" => $info_db['password'],
            "port"     => 3306
        );

       
        try {
         
        
            $connection = new Mysql($config);
          
        }
        catch(\Exception $e){
            return false;
            
        }
        $connection->execute("
            CREATE TABLE IF NOT EXISTS `Employees` (
            `id` int(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            `fullName` varchar(254) DEFAULT NULL,
            `birthday` date DEFAULT NULL,
            `address` varchar(254) DEFAULT NULL,
            `position_id` int(11) DEFAULT NULL,
            `department_id` int(11) DEFAULT NULL,
            `createAt` datetime DEFAULT NULL,
            `updateAt` datetime DEFAULT CURRENT_TIMESTAMP
          ) ENGINE=InnoDB DEFAULT CHARSET=latin1;
        ");
        $connection->execute("
            CREATE TABLE IF NOT EXISTS `Department` (
                `id` int(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                `name` varchar(254) DEFAULT NULL
            ) ENGINE=InnoDB DEFAULT CHARSET=latin1;
        ");
        $connection->execute("
            CREATE TABLE IF NOT EXISTS `Position` (
                `id` int(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                `name` varchar(254) DEFAULT NULL
            ) ENGINE=InnoDB DEFAULT CHARSET=latin1;
        ");
        $connection->execute("
            CREATE TABLE IF NOT EXISTS `User` (
                `id` int(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                `username` varchar(254) DEFAULT NULL,
                `password` varchar(254) DEFAULT NULL,
                `name` varchar(254) DEFAULT NULL,
                `is_active` tinyint(2) DEFAULT NULL
            ) ENGINE=InnoDB DEFAULT CHARSET=latin1;
        ");
        
        return true;
    }
    public function CreateUser($info_db,$user)
    {

        $config = array(
            "host" => $info_db['host'],
            "dbname" => "ERP_HRM",
            "username" => $info_db['user'],
            "password" => $info_db['password'],
            "port"     => 3306
        );
      
       
        try {
         
        
            $connection = new Mysql($config);
          
        }
        catch(\Exception $e){
            return false;
            
        }
      
        try {
            $result = $connection->execute("
                INSERT INTO `User` (`username`, `password`, `name`, `is_active`) VALUES
                ('".$user['username']."', '".md5($user['password'])."', '".$user['name']."', 1);
            ");
           
        }
        catch(\Exception $e){
            return false;
            
        }
        
        return true;
    }
    
}


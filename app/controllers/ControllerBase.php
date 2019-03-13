<?php
namespace App\Controllers;
use Phalcon\Mvc\Controller;
use App\Libraries\data;
class ControllerBase extends Controller
{
    public function initialize()
    {
        
       

        if (!file_exists(__DIR__."/../config/eav.php")){
            return $this->response->redirect('/setup');
        }
        
       
        // check login 
        

        if (!$this->CheckLogin()) {
            return $this->response->redirect('/login');
        }
      
    }
    private function CheckLogin(){
       
        if ($this->session->has('session-login')) {
           return true;
        }
        return false;
    }

}

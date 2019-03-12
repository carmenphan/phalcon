<?php
namespace App\Controllers;
use Phalcon\Mvc\Controller;
use App\Libraries\data;
class ControllerBase extends Controller
{
    public function initialize()
    {
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

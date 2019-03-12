<?php
namespace App\Controllers;
use Phalcon\Mvc\Controller;
use Phalcon\Http\Request;
use Phalcon\Flash\Direct as FlashDirect;
use Phalcon\Flash\Session as FlashSession;
use App\Models\UserExtends;
use App\Models\Position;
use App\Models\Department;

class LoginController extends Controller
{

    public function indexAction()
    {
        $request = new Request();
        if ($request->isPost()){
       
            $user = new UserExtends();
            $user->username = $request->getPost("username") ;
            $user->password = md5($request->getPost("password"));
           
            $result = $user->CheckUser();
            if ( $result ) {
                $this->session->set("session-login",["username" => $result->username , "name" => $result->name]);
                return $this->response->redirect('/');
            }
            $flash = new FlashSession();
            $flash->error("Can't Login");
    
            return $this->response->redirect('/login');
         
        }
       
    
        return $this->view->pick('login/index');  
    }
    public function CheckEmailPasswordAction (){

        $request = new Request();
        if ($request->isPost()){
            $user = new UserExtends();
            $user->username = $request->getPost("username") ;
            $user->password = md5($request->getPost("password"));
           
            $result = $user->CheckUser();
            if ( $result ) {
                echo "true";die();
            }
            echo "false";die();
         
        }
    }
}


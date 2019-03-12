<?php
namespace App\Models;
use App\Models\User; 
class UserExtends extends User {
    
    function CheckUser (){
        $conditions = ["username" => $this->username , "password" => $this->password];
        $result = $this->findFirst([
            'conditions' => 'username=:username: AND password=:password:',
            'bind' => $conditions,
        ]);
        return $result;
    }
}

?>
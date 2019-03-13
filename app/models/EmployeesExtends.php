<?php
namespace App\Models;
use App\Models\Employees; 
class EmployeesExtends extends Employees {
    
    public $table = "App\Models\Employees";
    // @var string table position name 
    
    public $table_position = "App\Models\Position";
    // @var string table deparment name
    public $table_department = "App\Models\Department";

    // object department
    public $department;
    // object position
    public $position;

    // pram order by
    public $orderby = array ("column" => "id" , "dir" => "desc");
    public $start   = 0;
    public $limit   = 10;
    public $searchData = "";
    function getListAll(){

        
        $data = $this->getModelsManager()->createBuilder()

        ->addFrom( "App\Models\Employees" , 'e')

        ->columns(
            array(
                'e.fullname as fullname',
                'e.id as id',
                'e.birthday as birthday',
                'e.address as address',
                'e.createAt as createAt',
                'e.updateAt as updateAt',
                'p.name as position_name',
                'd.name as department_name'
            )
        )
        ->leftJoin("App\Models\Position", 'p.id = e.position_id', 'p')
        ->leftJoin("App\Models\Department", 'd.id = e.department_id', 'd')
        ->orderBy($this->orderby['column'] . " " . $this->orderby['dir'])
        ->where('e.fullname LIKE :name:  or p.name LIKE :name: or d.name LIKE :name:', ['name' => '%' . $this->searchData . '%'])
        ->limit($this->limit,$this->start)->getQuery()->execute();
        
     
        if (count($data) == 0) return [];

        $result = [];
        foreach ($data as $key => $val ){
            $result[$key][] = $val->id;
            $result[$key][] = $val->fullname;
            $result[$key][] = $val->address;
            $result[$key][] = $val->position_name;
            $result[$key][] = $val->department_name;
            $result[$key][] = date("d-m-Y" , strtotime($val->birthday));
            $result[$key][] = date("d-m-Y" , strtotime($val->createAt));
            $result[$key][] = date("d-m-Y" , strtotime($val->updateAt));
         
            $result[$key][] = "
            <div style = 'padding :5px'>
                <a href = './edit/".$val->id."'><img style = 'width : 30px ; height : 30px' src = './public/img/button-edit.png'/></a>
            </div> 

            <div style = 'padding :5px'>
                <a style = 'cursor :pointer' class = 'delete-employee' id_employee = '".$val->id."' ><img style = 'width : 30px ; height : 30px' src = './public/img/button-delete.png'/></a>
            </div>
            
            ";
        }
        return $result;
    }
    function getResultFilter (){
        $data = $this->getModelsManager()->createBuilder()

        ->addFrom( $this->table , 'e')

        ->columns(
            array(
                'count(e.id) as count',
               
            )
        )
        ->leftJoin($this->table_position, 'p.id = e.position_id', 'p')
        ->leftJoin($this->table_department, 'd.id = e.department_id', 'd')
   
        ->where('e.fullname LIKE :name:  or p.name LIKE :name: or d.name LIKE :name:', ['name' => '%' . $this->searchData . '%'])
        ->getQuery()->execute();

        if (count($data) == 0) return 0;
     
        return $data[0]->count;
    }
    function convertOrderByList($number_column){
        $result = "";
        switch ($number_column) {
            case 0:
                $result = "e.id";
                break;
            case 1:
                $result = "e.fullName";
                break;
            case 2:
                $result = "e.address"; 
                break;
            case 3:
                $result = "e.position_id"; 
                break;
            case 4:
                $result = "e.department_id"; 
                break;
            case 5:
                $result = "e.birthday"; 
                break;
            case 6:
                $result = "e.createAt"; 
                break;
            case 7:
                $result = "e.updateAt"; 
                break;
            default:
                $result = "e.id";
        } 
        return $result;
    }
}

?>
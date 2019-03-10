<?php

class Employees extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    public $id;

    /**
     *
     * @var string
     */
    public $fullName;

    /**
     *
     * @var string
     */
    public $brithday;

    /**
     *
     * @var string
     */
    public $address;

    /**
     *
     * @var integer
     */
    public $position_id;

    /**
     *
     * @var integer
     */
    public $department_id;

    /**
     *
     * @var string
     */
    public $createAt;

    /**
     *
     * @var string
     */
    public $updateAt;
    // @var string table name 
    public $table = "Employees";
    // @var string table position name 
    
    public $table_position = "Position";
    // @var string table deparment name
    public $table_department = "Department";

    // object department
    public $department;
    // object position
    public $position;

    // pram order by
    public $orderby = array ("column" => "id" , "dir" => "desc");
    public $start   = 0;
    public $limit   = 10;
    public $searchData = "";
    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("ERP_HRM");
        $this->setSource("Employees");
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'Employees';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return Employees[]|Employees|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return Employees|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }
    
    function getListAll(){

     
        $data = $this->getModelsManager()->createBuilder()

        ->addFrom( $this->table , 'e')

        ->columns(
            array(
                'e.fullname as fullname',
                'e.id as id',
                'e.brithday as brithday',
                'e.address as address',
                'e.createAt as createAt',
                'e.updateAt as updateAt',
                'p.name as position_name',
                'd.name as department_name'
            )
        )
        ->leftJoin($this->table_position, 'p.id = e.position_id', 'p')
        ->leftJoin($this->table_department, 'd.id = e.department_id', 'd')
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
            $result[$key][] = date("d-m-Y" , strtotime($val->brithday));
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
                $result = "e.brithday"; 
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

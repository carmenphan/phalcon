<?php
namespace App\Controllers;
use App\Controllers\ControllerBase;
use Phalcon\Http\Request;
use Phalcon\Flash\Direct as FlashDirect;
use Phalcon\Flash\Session as FlashSession;
use App\Models\Employees;
use App\Models\Position;
use App\Models\Department;
use App\Models\EmployeesExtends;    
class IndexController extends ControllerBase
{

    
    public function getDataListAction()
    {
      
        
        $request = new Request();

        $em = new EmployeesExtends();
        $em->start = $request->get("start");
        $em->limit = $request->get("length");
        $em->searchData = $request->get("search")['value'];
        $em->orderby = array ("column" => $em->convertOrderByList($request->get("order")[0]['column']) , "dir"=> $request->get("order")[0]['dir']);
        $data = $em->getListAll();
         $filterData = $em->getResultFilter();
         $arr = array ("draw" => $request->get('draw') , "recordsTotal" =>  Employees::count() , "recordsFiltered" => intval($filterData) , "data" => $data );
         return  json_encode($arr);
        
      
    }

    public function deleteEmployeeAction()
    {
        
    
        $request = new Request();
        $employee = Employees::findFirst($request->getPost("id"));

    
        try
        {
        
            $employee->delete();
        }
        catch(\Exception $e )
        {
            return json_encode(['complete' =>  false]);
        }
    
        return  json_encode(['complete' =>  true ]);

    }
    public function indexAction()
    {
       
    
        return $this->view->pick('index/index');  
    }
    public function page404Action()
    {
        
        return $this->view->pick('index/404');  
    }
    public function addNewAction()
    {
        $request = new Request();
        if ( $request->isPost() ){
            $array = $request->getPost("employee");
            
            if (!empty($array)) {
         
                $employee                   = new Employees();
                $employee->fullName         = !empty($array['fullname']) ? $array['fullname'] : "";
                $employee->birthday         = !empty($array['birthday']) ? date("Y-m-d",strtotime($array['birthday'])) : "";
                $employee->address          = !empty($array['address']) ? $array['address'] : "";
                $employee->position_id        = !empty($array['position']) ? $array['position'] : "";
                $employee->department_id    = !empty($array['department']) ? $array['department'] : "";
                $employee->createAt         = date("Y-m-d H:i:s");

              
                try
                {
                    $employee->save();
                   
                }
                catch(\Exception $e )
                {
                    echo( $e );
                    $this->flashSession->error("Can't Save Employee");
                    return $this->response->redirect('/');
                }
                
                $this->flashSession->success('Finish Save Employee');

                return $this->response->redirect('/');
                
            }
            
        }
       
        
        return $this->view->pick('index/addNew');  
    }
    public function editAction()
    {
        $request = new Request();
        $id = $this->dispatcher->getParam('id');
        $employee_now  = Employees::findFirst($id);
        if (!$employee_now){
            $this->flashSession->error("Not Exist Employee");
            return $this->response->redirect('/');
        }
      
        if ( $request->isPost() ){
            $array = $request->getPost("employee");
            
            if (!empty($array)) {
         
                $employee                   = new Employees();
                $employee->id               = $id;
                $employee->fullName         = !empty($array['fullname']) ? $array['fullname'] : "";
                $employee->birthday         = !empty($array['birthday']) ? date("Y-m-d",strtotime($array['birthday'])) : "";
                $employee->address          = !empty($array['address']) ? $array['address'] : "";
                $employee->position_id      = !empty($array['position']) ? $array['position'] : "";
                $employee->department_id    = !empty($array['department']) ? $array['department'] : "";
              

                
                try
                {
                    $employee->save();
                    $employee_now = $employee;
                }
                catch(\Exception $e )
                {
               
                    $this->flash->message("error","Can't Not Save Employee");
                    return $this->response->redirect("edit/" . $id);
                }
                
                $this->flashSession->success('Finish Save Employee');
               


                return $this->response->redirect("edit/" . $id);
                
            }
            
        }
        $employee_now->department = Department::findFirst($employee_now->department_id);
        $employee_now->position = Position::findFirst($employee_now->position_id);
        $this->view->employee_data = $employee_now;
        return $this->view->pick('index/edit');  
    }
    // POSITION
    public function getPositionAction (){
        return json_encode(Position::find());
    }
    public function addNewPositionAction(){
         $request = new Request();
       
        $position = new Position();
        $position->name = $request->getPost("name");
     
        try
        {
            $position->save();
        }
        catch(\Exception $e )
        {
            return json_encode(['complete' =>  false]);
        }
     
        return  json_encode(['complete' =>  true , 'id' => $position->id]);
        
    }
    public function editPositionAction(){
       $request = new Request();
       $position = new Position();
       $position->name = $request->getPost("name");
       $position->id = $request->getPost("id");
       try
       {
           $position->save();
       }
       catch(\Exception $e )
       {
           return json_encode(['complete' =>  false]);
       }
    
       return  json_encode(['complete' =>  true , 'name' => $position->name]);
       
   }
   public function deletePositionAction(){
        $request = new Request();
        $position = Position::findFirst($request->getPost("id"));

    
        try
        {
        
            $position->delete();
        }
        catch(\Exception $e )
        {
            return json_encode(['complete' =>  false]);
        }
    
        return  json_encode(['complete' =>  true ]);
        
    }
    // DEPARTMENT
    public function getDepartmentAction (){
        return json_encode(Department::find());
    }
    public function addNewDepartmentAction(){
         $request = new Request();
       
        $department = new Department();
        $department->name = $request->getPost("name");
     
        try
        {
            $department->save();
        }
        catch(\Exception $e )
        {
            return json_encode(['complete' =>  false]);
        }
     
        return  json_encode(['complete' =>  true , 'id' => $department->id]);
        
    }
    public function editDepartmentAction(){
       $request = new Request();
       $department = new Department();
       $department->name = $request->getPost("name");
       $department->id = $request->getPost("id");
       try
       {
           $department->save();
       }
       catch(\Exception $e )
       {
           return json_encode(['complete' =>  false]);
       }
    
       return  json_encode(['complete' =>  true , 'name' => $department->name]);
       
   }
   public function deleteDepartmentAction(){
        $request = new Request();
        $department = Department::findFirst($request->getPost("id"));

    
        try
        {
        
            $department->delete();
        }
        catch(\Exception $e )
        {
            return json_encode(['complete' =>  false]);
        }
    
        return  json_encode(['complete' =>  true ]);
        
    }
}


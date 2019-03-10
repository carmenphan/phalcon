function getHostName (){
    return window.location.protocol +"//"+ window.location.host + "/";
}
function renderPosition (result){
    if (result.length == 0) return ;
    var html = "<table class = 'table table-bordered list-position' >";
    html += `
        <tr>
            <th></th>
            <th>Name</th>
            <th>
                <a class = "add-position" attributeClick = "0" ><img style = "width : 30px ; height : 30px padding :5px" src = "`+getHostName()+`/public/img/button-add.png"></a>
            </th>
        </tr>
    `;

    var id_choose = $("#value-position-save").val();

    result.forEach(function(val) {
        if (val.id != id_choose){
            html += `
                <tr id = "row-position-`+val.id+`" >
                    <td> <input type = 'radio' name = 'position_radio' value = '`+val.id+`'/></td>
                    <td> <div id = "position_name_`+val.id+`"> `+val.name+` </div>
                        <input type = "text" id = "input-edit-position-`+val.id+`"  class = "form-control radio-checkbox-position" value = "`+val.name+`" style = "display:none" />
                    </td>
                    <td> 
                        <div style = "padding :5px">
                            <span id = "span_button_class_edit_position_`+val.id+`"> 
                                <a  class = "edit-position" id_position = "`+val.id+`" attr_edit_display = "0"><img style = "width : 30px ; height : 30px" src = "`+getHostName()+`/public/img/button-edit.png"/></a>
                            
                            </span> 
                            <a class = "delete-position" id_position = "`+val.id+`" ><img style = "width : 30px ; height : 30px" src = "`+getHostName()+`/public/img/button-delete.png"/></a>
                        </div>
                    </td>
                </tr>
            `;
        }   else {
            html += `
                <tr id = "row-position-`+val.id+`" >
                    <td> <input checked type = 'radio' name = 'position_radio' value = '`+val.id+`'/></td>
                    <td> <div id = "position_name_`+val.id+`"> `+val.name+` </div>
                        <input type = "text" id = "input-edit-position-`+val.id+`"  class = "form-control " value = "`+val.name+`" style = "display:none" />
                    </td>
                    <td> 
                        <div style = "padding :5px">
                            <span id = "span_button_class_edit_position_`+val.id+`"> 
                                <a  class = "edit-position" id_position = "`+val.id+`" attr_edit_display = "0"><img style = "width : 30px ; height : 30px" src = "`+getHostName()+`/public/img/button-edit.png"/></a>
                            
                            </span> 
                            <a class = "delete-position" id_position = "`+val.id+`" ><img style = "width : 30px ; height : 30px" src = "`+getHostName()+`/public/img/button-delete.png"/></a>
                        </div>
                    </td>
                </tr>
            `;
        }
        
    });
    html += "</table>";
    $(".append_data").html(html);

}
function renderDepartment (result){
    if (result.length == 0) return ;
    var html = "<table class = 'table table-bordered list-department' >";
    html += `
        <tr>
            <th></th>
            <th>Name</th>
            <th>
                <a class = "add-department" attributeClick = "0" ><img style = "width : 30px ; height : 30px padding :5px" src = "`+getHostName()+`/public/img/button-add.png"></a>
            </th>
        </tr>
    `;

    var id_choose = $("#value-department-save").val();

    result.forEach(function(val) {
        if (val.id != id_choose){
            html += `
                <tr id = "row-department-`+val.id+`" >
                    <td> <input type = 'radio' name = 'department_radio' value = '`+val.id+`'/></td>
                    <td> <div id = "department_name_`+val.id+`"> `+val.name+` </div>
                        <input type = "text" id = "input-edit-department-`+val.id+`"  class = "form-control radio-checkbox-department" value = "`+val.name+`" style = "display:none" />
                    </td>
                    <td> 
                        <div style = "padding :5px">
                            <span id = "span_button_class_edit_department_`+val.id+`"> 
                                <a  class = "edit-department" id_department = "`+val.id+`" attr_edit_display = "0"><img style = "width : 30px ; height : 30px" src = "`+getHostName()+`/public/img/button-edit.png"/></a>
                            
                            </span> 
                            <a class = "delete-department" id_department = "`+val.id+`" ><img style = "width : 30px ; height : 30px" src = "`+getHostName()+`/public/img/button-delete.png"/></a>
                        </div>
                    </td>
                </tr>
            `;
        }   else {
            html += `
                <tr id = "row-department-`+val.id+`" >
                    <td> <input checked type = 'radio' name = 'department_radio' value = '`+val.id+`'/></td>
                    <td> <div id = "department_name_`+val.id+`"> `+val.name+` </div>
                        <input type = "text" id = "input-edit-department-`+val.id+`"  class = "form-control " value = "`+val.name+`" style = "display:none" />
                    </td>
                    <td> 
                        <div style = "padding :5px">
                            <span id = "span_button_class_edit_department_`+val.id+`"> 
                                <a  class = "edit-department" id_department = "`+val.id+`" attr_edit_display = "0"><img style = "width : 30px ; height : 30px" src = "`+getHostName()+`/public/img/button-edit.png"/></a>
                            
                            </span> 
                            <a class = "delete-department" id_department = "`+val.id+`" ><img style = "width : 30px ; height : 30px" src = "`+getHostName()+`/public/img/button-delete.png"/></a>
                        </div>
                    </td>
                </tr>
            `;
        }
        
    });
    html += "</table>";
    $(".append_data").html(html);

}
$(document).ready(function(){
    $(document).on("click",".delete-employee",function(){
        id_employee = $(this).attr("id_employee");
        $.ajax({
            url: getHostName()+"deleteEmployee", 
            type : "POST",
          
            dataType: "json",
            data : {
                id : id_employee,
            },
            success: function(result){
              if (result.complete == true){
                  alert("Finish Delete Employee");
                  window.location.reload();
              }else {
                alert("Can't Delete Employee");
              }
          
            }
        });
    })
    $('#example').DataTable( {
        "processing": true,
        "serverSide": true,
        "ajax": {
            "url": getHostName()+"getDataList",
            "data": function ( d ) {
                d.myKey = "myValue";
                // d.custom = $('#myInput').val();
                // etc
            }
        }
    } );
    $("#form-create-employee").validate();
    $( "#birthday" ).datepicker({ dateFormat: 'dd-mm-yy' });
// ///////////////////////////////////////////////////////////////// DEPARTMENT /////////////////////////////////////////////////
// CLICK BUTTON CHOOSE DEPARTMENT
$(document).on("click",".btnSelectDepartment",function(){
    var radio_check_now = $("input[name='department_radio']:checked").val();
    $(".append_message").html("");
    if (radio_check_now == ""){
        alert("Please check the box Position before performing this action");
        $(".append_message").html(`
                <div class="alert alert-danger">
                    <strong>Error!</strong> Please check the box Position before performing this action. 
                </div>
        `);
        return ;
    }
    var id_position = radio_check_now;
    $("#value-department-save").val(id_position);
    $(".label-name-department").html($("#input-edit-department-"+id_position).val());
    $("#myModal").modal("hide");

})
// CLICK BUTTON SUBMIT  DELETE DEPARTMET
$(document).on("click",".delete-department",function(){
    $(".append_message").html("");
    var id_department = $(this).attr("id_department");
    var radio_check_now = $("input[name='department_radio']:checked").val();
    if (radio_check_now != undefined && radio_check_now == id_department){
        alert("Please check the other box before performing this action");
        return ;
    }
    $.ajax({
        url: getHostName()+"deleteDepartment", 
        type : "POST",
      
        dataType: "json",
        data : {
            id : id_department,
        },
        success: function(result){
           if (result.complete == false){
            $(".append_message").html(`
                    <div class="alert alert-danger">
                        <strong>Error!</strong> Can't Delete Data Department. 
                    </div>
            `);
           }else {
            $(".append_message").html(`
                    <div class="alert alert-success">
                        <strong>Success!</strong> Finish Delete Data Department.
                    </div>
                `);
            $("#row-department-"+id_department).remove();

            if ($("#value-department-save").val() == id_department){
                
                $("#value-department-save").val($("input[name='department_radio']:checked").val());
                $(".label-name-department").html($("#input-edit-department-"+$("input[name='department_radio']:checked").val()).val());
            }
           
           }
      
        }
    });
});
// CLICK BUTTON SUBMIT SAVE EDIT DEPARTMET
$(document).on("click",".submit-save-edit-department",function(){
    $(".append_message").html("");
    var id_department = $(this).attr("id_department");
    var radio_check_now = $("input[name='department_radio']:checked").val();
   
    if (radio_check_now != undefined && radio_check_now == id_department){
        alert("Please check the other box before performing this action");
        return ;
    }
    var value_edit  = $("#input-edit-department-"+id_department).val();
    
    $.ajax({
        url: getHostName()+"editDepartment", 
        type : "POST",
      
        dataType: "json",
        data : {
            id : id_department,
            name : value_edit
        },

        success: function(result){
           if (result.complete == false){
            $(".append_message").html(`
                    <div class="alert alert-danger">
                        <strong>Error!</strong> Can't Update Data Department. 
                </div>
            `);
           }else {
            $(".append_message").html(`
                    <div class="alert alert-success">
                        <strong>Success!</strong> Finish Update Data Deparment.
                    </div>
                `);
                $("#span_button_class_edit_department_"+id_department).html(`
                    <a  class = "edit-department"  id_department= "`+id_department+`"><img style = "width : 30px ; height : 30px" src = "`+getHostName()+`/public/img/button-edit.png"/></a>
                `);
                $("#input-edit-department-"+id_department).val(result.name);
                $("#department_name_"+id_department).html(result.name);
                $("#input-edit-department-"+id_department).hide();
                $("#department_name_"+id_department).show();
                if ($("#value-department-save").val() == id_department){
                
                    $("#value-department-save").val($("input[name='department_radio']:checked").val());
                    $(".label-name-department").html($("#input-edit-department-"+$("input[name='department_radio']:checked").val()).val());
                }
                
                
           }
      
        }
    });

})
// CLICK BUTTON EDIT DEPARTMENT IN MODAL
$(document).on("click",".edit-department",function(){
    $(".append_message").html("");
    var id_department = $(this).attr("id_department");
    var radio_check_now = $("input[name='department_radio']:checked").val();
    if (radio_check_now == id_department){
        alert("Please check the other box before performing this action");
        return ;
    }
    $("#span_button_class_edit_department_"+id_department).html(`
        <a  class = "submit-save-edit-department" id_department = "`+id_department+`"><img style = "width : 30px ; height : 30px" src = "`+getHostName()+`/public/img/button-check.png"/></a>
    `);
    $("#department_name_"+id_department).hide();
    $("#input-edit-department-"+id_department).show();
})
// CLICK BUTTON ADD DEPARTMENT
$(document).on("click",".add-department",function (){
    if ($(this).attr("attributeclick") == 1) return ;
    $(this).attr("attributeClick",1);
    var html = `
        <tr class = "append-add-department">
            <td>
                Add
            </td>
            
            <td>
                <input type = "text" class = "form-control" id = "name_department_new"  placeholder = "Name" />
                <div class = "msg-error"></div>
            </td>
            <td>
                <div style = "padding :5px">
                    <a id = "submit-add-department"><img style = "width : 30px ; height : 30px" src = "`+getHostName()+`/public/img/button-check.png"/></a>
                    <a id = "submit-delete-department-new"><img style = "width : 30px ; height : 30px" src = "`+getHostName()+`/public/img/button-delete.png"/></a>
                </div>
            </td>
        </tr>
    `; 
    $(".list-department").append(html);
});
// CLICK BUTTON VIEW DEPARTMENT
$(document).on("click","#tagSelectDeparment",function(){
    $(".modal-title").html("");
    $(".modal-body").html("");
    $(".modal-body").append("<div class = 'append_message'></div>");
    $(".modal-body").append("<div class = 'append_data'></div>");
    $.ajax({
        url: getHostName()+"getDepartment", 
        contentType: "application/json",
        dataType: "json",
        success: function(result){
            renderDepartment(result);
            $(".modal-title").html("Select Deparment");
            $(".append-button-choose-model").html(`
                <button type="button" class="btn btn-success btnSelectDepartment">Choose</button>
            `);
            $("#myModal").modal("show");
      }});
   
});
// CLICK BUTTON DELETE POSITION AFTER CLICK ADD
$(document).on("click","#submit-delete-department-new",function (){
    $(".append-add-department").remove();
    $(".append_message").html(`
                    <div class="alert alert-success">
                        <strong>Success!</strong> Finish Delete Data Department.
                    </div>
                `);
    $(".add-department").attr("attributeClick",0);
});

// CLICK BUTTON SUBMIT POSITION 
$(document).on("click","#submit-add-department",function (){
$("#name_department_new").next().html("");
$(".append_message").html("");
var val_name  = $("#name_department_new").val();
if (val_name == ""){
    $("#name_department_new").next().html("Required Field");
    return ;
}
$.ajax({
    url: getHostName()+"addNewDepartment", 
    type : "POST",
  
    dataType: "json",
    data : {
        name : val_name
    },

    success: function(result){
    
        if (result.complete == false) {
            $(".append_message").html(`
                 <div class="alert alert-danger">
                     <strong>Error!</strong> Can't Save Data Department. 
                </div>
            `);
        }else {
            $(".append_message").html(`
                <div class="alert alert-success">
                    <strong>Success!</strong> Finish Save Data Department.
                </div>
            `);
            var html = `
            <tr id = "row-department-`+result.id+`">
                <td> <input type = 'radio' name = 'department_radio' value = '`+result.id+`'/></td>
                <td> <div id = "department_name_`+result.id+`"> `+val_name+` </div>
                
                    <input type = "text" id = "input-edit-department-`+result.id+`"  class = "form-control" value = "`+val_name+`" style = "display:none" />
                </td>
                <td> 
                     <div style = "padding :5px">
                     <span id = "span_button_class_edit_department_`+result.id+`"> 
                        <a  class = "edit-department" id_department = "`+result.id+`"><img style = "width : 30px ; height : 30px" src = "`+getHostName()+`/public/img/button-edit.png"/></a>
                     </span>
                        <a class = "delete-department" id_department = "`+result.id+`" ><img style = "width : 30px ; height : 30px" src = "`+getHostName()+`/public/img/button-delete.png"/></a>
                    </div>
                </td>
            </tr>
            `;
            $(".append-add-department").remove();
            $(".list-department").append(html);
            $(".add-department").attr("attributeClick",0);
        }
    }
});
})
// ///////////////////////////////////////////////////////////////// POSITION///////////////////////////////////////////////////

    //CLICK CHOOSE POSITION 
    $(document).on("click",".btnSelectPosition",function(){
        var radio_check_now = $("input[name='position_radio']:checked").val();
        $(".append_message").html("");
        if (radio_check_now == ""){
            alert("Please check the box Position before performing this action");
            $(".append_message").html(`
                    <div class="alert alert-danger">
                        <strong>Error!</strong> Please check the box Position before performing this action. 
                    </div>
            `);
            return ;
        }
        var id_position = radio_check_now;
        $("#value-position-save").val(id_position);
        $(".label-name-position").html($("#input-edit-position-"+id_position).val());
        $("#myModal").modal("hide");

    })
    // CLICK BUTTON DELETE POSITION MODAL
    $(document).on("click",".delete-position",function(){
        $(".append_message").html("");
        var id_position = $(this).attr("id_position");
        var radio_check_now = $("input[name='position_radio']:checked").val();
        if (radio_check_now == id_position){
            alert("Please check the other box before performing this action");
            return ;
        }
        $.ajax({
            url: getHostName()+"deletePosition", 
            type : "POST",
          
            dataType: "json",
            data : {
                id : id_position,
            },
            success: function(result){
               if (result.complete == false){
                $(".append_message").html(`
                        <div class="alert alert-danger">
                            <strong>Error!</strong> Can't Delete Data Position. 
                        </div>
                `);
               }else {
                $(".append_message").html(`
                        <div class="alert alert-success">
                            <strong>Success!</strong> Finish Delete Data Position.
                        </div>
                    `);
                $("#row-position-"+id_position).remove();

                if ($("#value-position-save").val() == id_position){
                    
                    $("#value-position-save").val($("input[name='position_radio']:checked").val());
                    $(".label-name-position").html($("#input-edit-position-"+$("input[name='position_radio']:checked").val()).val());
                }
               
               }
          
            }
        });
    });

    // CLICK BUTTON SUBMIT SAVE EDIT POSITION
    $(document).on("click",".submit-save-edit-position",function(){
        $(".append_message").html("");
        var id_position = $(this).attr("id_position");
        var radio_check_now = $("input[name='position_radio']:checked").val();
        if (radio_check_now == id_position){
            alert("Please check the other box before performing this action");
            return ;
        }
        var value_edit  = $("#input-edit-position-"+id_position).val();
        $.ajax({
            url: getHostName()+"editPosition", 
            type : "POST",
          
            dataType: "json",
            data : {
                id : id_position,
                name : value_edit
            },

            success: function(result){
               if (result.complete == false){
                $(".append_message").html(`
                        <div class="alert alert-danger">
                            <strong>Error!</strong> Can't Update Data Position. 
                    </div>
                `);
               }else {
                $(".append_message").html(`
                        <div class="alert alert-success">
                            <strong>Success!</strong> Finish Update Data Position.
                        </div>
                    `);
                    $("#span_button_class_edit_position_"+id_position).html(`
                        <a  class = "edit-position"  id_position = "`+id_position+`"><img style = "width : 30px ; height : 30px" src = "`+getHostName()+`/public/img/button-edit.png"/></a>
                    `);
                    $("#input-edit-position-"+id_position).val(result.name);
                    $("#position_name_"+id_position).html(result.name);
                    $("#input-edit-position-"+id_position).hide();
                    $("#position_name_"+id_position).show();
                    if ($("#value-position-save").val() == id_position){
                    
                        $("#value-position-save").val($("input[name='position_radio']:checked").val());
                        $(".label-name-position").html($("#input-edit-position-"+$("input[name='position_radio']:checked").val()).val());
                    }
                    
                    
               }
          
            }
        });

    })
    // CLICK BUTTON EDIT POSITION IN MODAL
    $(document).on("click",".edit-position",function(){
        $(".append_message").html("");
        var id_position = $(this).attr("id_position");
        var radio_check_now = $("input[name='position_radio']:checked").val();
        if (radio_check_now == id_position){
            alert("Please check the other box before performing this action");
            return ;
        }
        $("#span_button_class_edit_position_"+id_position).html(`
            <a  class = "submit-save-edit-position" id_position = "`+id_position+`"><img style = "width : 30px ; height : 30px" src = "`+getHostName()+`/public/img/button-check.png"/></a>
        `);
        $("#position_name_"+id_position).hide();
        $("#input-edit-position-"+id_position).show();
    })
    // CLICK BUTTON VIEW POSITION
    $(document).on("click","#tagSelectPosition",function(){
        $(".modal-title").html("");
        $(".modal-body").html("");
        $(".modal-body").append("<div class = 'append_message'></div>");
        $(".modal-body").append("<div class = 'append_data'></div>");
        $.ajax({
            url: getHostName()+"getPosition", 
            contentType: "application/json",
            dataType: "json",
            success: function(result){
                renderPosition(result);
                $(".modal-title").html("Select Position");
                $(".append-button-choose-model").html(`
                    <button type="button" class="btn btn-success btnSelectPosition">Choose</button>
                `);
                $("#myModal").modal("show");
          }});
       
    });
    // CLICK BUTTON ADD POSITION
    $(document).on("click",".add-position",function (){
        if ($(this).attr("attributeclick") == 1) return ;
        $(this).attr("attributeClick",1);
        var html = `
            <tr class = "append-add-position">
                <td>
                    Add
                </td>
                
                <td>
                    <input type = "text" class = "form-control" id = "name_position_new"  placeholder = "Name" />
                    <div class = "msg-error"></div>
                </td>
                <td>
                    <div style = "padding :5px">
                        <a id = "submit-add-position"><img style = "width : 30px ; height : 30px" src = "`+getHostName()+`/public/img/button-check.png"/></a>
                        <a id = "submit-delete-position-new"><img style = "width : 30px ; height : 30px" src = "`+getHostName()+`/public/img/button-delete.png"/></a>
                    </div>
                </td>
            </tr>
        `; 
        $(".list-position").append(html);
    });
    // CLICK BUTTON DELETE POSITION AFTER CLICK ADD
    $(document).on("click","#submit-delete-position-new",function (){
        $(".append-add-position").remove();
        $(".append_message").html(`
                        <div class="alert alert-success">
                            <strong>Success!</strong> Finish Delete Data Position.
                        </div>
                    `);
        $(".add-position").attr("attributeClick",0);
    });

    // CLICK BUTTON SUBMIT POSITION 
    $(document).on("click","#submit-add-position",function (){
        $("#name_position_new").next().html("");
        $(".append_message").html("");
        var val_name  = $("#name_position_new").val();
        if (val_name == ""){
            $("#name_position_new").next().html("Required Field");
            return ;
        }
        $.ajax({
            url: getHostName()+"addNewPosition", 
            type : "POST",
          
            dataType: "json",
            data : {
                name : val_name
            },

            success: function(result){
            
                if (result.complete == false) {
                    $(".append_message").html(`
                         <div class="alert alert-danger">
                             <strong>Error!</strong> Can't Save Data Position. 
                        </div>
                    `);
                }else {
                    $(".append_message").html(`
                        <div class="alert alert-success">
                            <strong>Success!</strong> Finish Save Data Position.
                        </div>
                    `);
                    var html = `
                    <tr id = "row-position-`+result.id+`">
                        <td> <input type = 'radio' name = 'position_radio' value = '`+result.id+`'/></td>
                        <td> <div id = "position_name_`+result.id+`"> `+val_name+` </div>
                        
                            <input type = "text" id = "input-edit-position-`+result.id+`"  class = "form-control" value = "`+val_name+`" style = "display:none" />
                        </td>
                        <td> 
                             <div style = "padding :5px">
                             <span id = "span_button_class_edit_position_`+result.id+`"> 
                                <a  class = "edit-position" id_position = "`+result.id+`"><img style = "width : 30px ; height : 30px" src = "`+getHostName()+`/public/img/button-edit.png"/></a>
                             </span>
                                <a class = "delete-position" id_position = "`+result.id+`" ><img style = "width : 30px ; height : 30px" src = "`+getHostName()+`/public/img/button-delete.png"/></a>
                            </div>
                        </td>
                    </tr>
                    `;
                    $(".append-add-position").remove();
                    $(".list-position").append(html);
                    $(".add-position").attr("attributeClick",0);
                }
            }
        });
    })


    
})
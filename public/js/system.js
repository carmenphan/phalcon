function getHostName (){
    return window.location.protocol +"//"+ window.location.host + "/";
}
var MD5 = function(d){result = M(V(Y(X(d),8*d.length)));return result.toLowerCase()};function M(d){for(var _,m="0123456789ABCDEF",f="",r=0;r<d.length;r++)_=d.charCodeAt(r),f+=m.charAt(_>>>4&15)+m.charAt(15&_);return f}function X(d){for(var _=Array(d.length>>2),m=0;m<_.length;m++)_[m]=0;for(m=0;m<8*d.length;m+=8)_[m>>5]|=(255&d.charCodeAt(m/8))<<m%32;return _}function V(d){for(var _="",m=0;m<32*d.length;m+=8)_+=String.fromCharCode(d[m>>5]>>>m%32&255);return _}function Y(d,_){d[_>>5]|=128<<_%32,d[14+(_+64>>>9<<4)]=_;for(var m=1732584193,f=-271733879,r=-1732584194,i=271733878,n=0;n<d.length;n+=16){var h=m,t=f,g=r,e=i;f=md5_ii(f=md5_ii(f=md5_ii(f=md5_ii(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_ff(f=md5_ff(f=md5_ff(f=md5_ff(f,r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+0],7,-680876936),f,r,d[n+1],12,-389564586),m,f,d[n+2],17,606105819),i,m,d[n+3],22,-1044525330),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+4],7,-176418897),f,r,d[n+5],12,1200080426),m,f,d[n+6],17,-1473231341),i,m,d[n+7],22,-45705983),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+8],7,1770035416),f,r,d[n+9],12,-1958414417),m,f,d[n+10],17,-42063),i,m,d[n+11],22,-1990404162),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+12],7,1804603682),f,r,d[n+13],12,-40341101),m,f,d[n+14],17,-1502002290),i,m,d[n+15],22,1236535329),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+1],5,-165796510),f,r,d[n+6],9,-1069501632),m,f,d[n+11],14,643717713),i,m,d[n+0],20,-373897302),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+5],5,-701558691),f,r,d[n+10],9,38016083),m,f,d[n+15],14,-660478335),i,m,d[n+4],20,-405537848),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+9],5,568446438),f,r,d[n+14],9,-1019803690),m,f,d[n+3],14,-187363961),i,m,d[n+8],20,1163531501),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+13],5,-1444681467),f,r,d[n+2],9,-51403784),m,f,d[n+7],14,1735328473),i,m,d[n+12],20,-1926607734),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+5],4,-378558),f,r,d[n+8],11,-2022574463),m,f,d[n+11],16,1839030562),i,m,d[n+14],23,-35309556),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+1],4,-1530992060),f,r,d[n+4],11,1272893353),m,f,d[n+7],16,-155497632),i,m,d[n+10],23,-1094730640),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+13],4,681279174),f,r,d[n+0],11,-358537222),m,f,d[n+3],16,-722521979),i,m,d[n+6],23,76029189),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+9],4,-640364487),f,r,d[n+12],11,-421815835),m,f,d[n+15],16,530742520),i,m,d[n+2],23,-995338651),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+0],6,-198630844),f,r,d[n+7],10,1126891415),m,f,d[n+14],15,-1416354905),i,m,d[n+5],21,-57434055),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+12],6,1700485571),f,r,d[n+3],10,-1894986606),m,f,d[n+10],15,-1051523),i,m,d[n+1],21,-2054922799),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+8],6,1873313359),f,r,d[n+15],10,-30611744),m,f,d[n+6],15,-1560198380),i,m,d[n+13],21,1309151649),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+4],6,-145523070),f,r,d[n+11],10,-1120210379),m,f,d[n+2],15,718787259),i,m,d[n+9],21,-343485551),m=safe_add(m,h),f=safe_add(f,t),r=safe_add(r,g),i=safe_add(i,e)}return Array(m,f,r,i)}function md5_cmn(d,_,m,f,r,i){return safe_add(bit_rol(safe_add(safe_add(_,d),safe_add(f,i)),r),m)}function md5_ff(d,_,m,f,r,i,n){return md5_cmn(_&m|~_&f,d,_,r,i,n)}function md5_gg(d,_,m,f,r,i,n){return md5_cmn(_&f|m&~f,d,_,r,i,n)}function md5_hh(d,_,m,f,r,i,n){return md5_cmn(_^m^f,d,_,r,i,n)}function md5_ii(d,_,m,f,r,i,n){return md5_cmn(m^(_|~f),d,_,r,i,n)}function safe_add(d,_){var m=(65535&d)+(65535&_);return(d>>16)+(_>>16)+(m>>16)<<16|65535&m}function bit_rol(d,_){return d<<_|d>>>32-_}
function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  
    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
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
    // Login
    var token_qr_code = "";
    $(document).on("click",".btn-block",function (){
		$(".message").html("");
	
		if ($("#input-username").val() == ""){
			$(".message").html("UserName Required");
			return ;
		}
		if ($("#input-password").val() == ""){
			$(".message").html("Password Required");
			return ;
        }
        
		$.ajax({
            url: getHostName()+"Ajax/CheckSubmitLogin", 
            type : "POST",
           
            data : {
                username : $("#input-username").val(),
                password : $("#input-password").val()
            },
            success: function(result){
               
                if (result == "false") {
                    $(".message").html("UserName Or Password Incorrect ");
                  return ;
                }  
                var token = makeid();
                token_qr_code = MD5(token.toUpperCase()) ;

                var html = `
                    <img src="https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=`+token+`&choe=UTF-8" title="Link to Google.com" />
                    <div>
                        <input id = "input-token-qr" class = 'form-control' type = 'text' style = 'border: 1px solid gray' placeholder = 'Enter QR Code'/>
                        
                    </div>
                   
                `; 
                html += `<div style = "color :red ; padding : 5px;" id = "message-qr-code"> </div>`;
                $(".modal-body").html(html);
                $("#myModal").modal("show");
            }
        });
		// $("#myModal").modal("show");

    });
    $(document).on("click",".save-qr-code",function (){
        var input_qr_code = $("#input-token-qr").val();
        
        if (input_qr_code == ""){
            $("#message-qr-code").html("QR code Required");
            return ;
        }
        if (MD5(input_qr_code.toUpperCase()) != token_qr_code ) {
            $("#message-qr-code").html("QR code Incorrect");
            return ;
        }
        $("#form-login").submit();

    })
    // end login
    $(document).on("click",".btn-back",function(){
        window.location.href = getHostName();
    })
    
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
        "order": [[ 0, "desc" ]],
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
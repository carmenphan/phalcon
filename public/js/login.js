$(document).ready(function(){
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
    $(document).on('keypress',function(e) {
        if(e.which == 13) {
            $(".btn-block").trigger("click");
        }
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
})
    
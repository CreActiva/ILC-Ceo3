!function(){"use strict";jQuery(document).ready(function(m){m(document).on("submit","#contact_form_submit",function(e){e.preventDefault();var a=m("#uname").val(),s=m("#email").val(),r=m("#message").val();a?m("#uname").removeClass("error"):(m("#uname").removeClass("error"),m("#uname").addClass("error").attr("placeholder","Name *")),s?m("#email").removeClass("error"):(m("#email").removeClass("error"),m("#email").addClass("error").attr("placeholder","Email *")),r?m("#message").removeClass("error"):(m("#message").removeClass("error"),m("#message").addClass("error").attr("placeholder","Message *")),a&&s&&r?m.ajax({type:"POST",url:"contact.php",data:{name:a,email:s,message:r},success:function(e){m("#contact_form_submit").children(".email-success").remove(),m("#contact_form_submit").prepend('<span class="alert alert-success email-success">'+e+"</span>"),m("#name").val(""),m("#email").val(""),m("#message").val(""),m(".email-success").fadeOut(3e3)}}):(m("#contact_form_submit").children(".email-success").remove(),m("#contact_form_submit").prepend('<span class="alert alert-danger email-success">somenthing is wrong</span>'),m(".email-success").fadeOut(3e3))})})}(jQuery);
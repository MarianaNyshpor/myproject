
$(function(){
  $('#btn-send').click(sendForm);  
});
function sendForm (e){
    e.preventDefault();
    $.ajax({
    url: "https://formspree.io/m.nyshpor@gmail.com", 
    method: "POST",
    data: {
        message:$('#msg').val()
    },
    dataType: "json",
    success:function(){
        $('#thanks').html('Thank you for contacting us.');
    }
});
};
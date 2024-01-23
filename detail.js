function submitform(){
   var fname=document.getElementById("firstname").value;
   var lname=document.getElementById("lastname").value;
   var pnum=document.getElementById("pnum").value;
   var email=document.getElementById("email").value;

   var result=document.getElementById("demo")
   result.innerHTML="<b>user detail:</b><br>NAME:"+ firstname+"<br> LASTNAME:"+lastname+"<br>PHONE NUMBER "+ pnum +"<br> email"+email;
   result.style.display="block"

}
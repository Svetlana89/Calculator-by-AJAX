function start(){
    var x = document.getElementById("n1").value;
    var y = document.getElementById("n2").value;
    
    var xml = new XMLHttpRequest();
    xml.onreadystatechange=function(){
      if (xml.readyState==4 && xml.status==200)
         document.getElementById('res').innerHTML=xml.responseText;
   }
   xml.open('POST','ajax.php',true);
   xml.setRequestHeader('Content-type','application/x-www-form-urlencoded');
   var str = 'x='+x+'&y='+y;
   xml.send(str);
    
};

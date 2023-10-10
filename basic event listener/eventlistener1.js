var x=document.getElementById("btnid");
x.addEventListener("click",A);//A oluşturduğumuz bir fonksiyondur.
x.addEventListener("mouseover",B);
x.addEventListener("mouseout",C);
function A(){
    document.getElementById("h3id").innerHTML+="Tıklanma gerçekleşti"+"<br>";

}

function B(){
    document.getElementById("h3id").innerHTML+="Over Çalıştı"+"<br>";

}

function C(){
    document.getElementById("h3id").innerHTML+="Out Çalıştı"+"<br>";

}
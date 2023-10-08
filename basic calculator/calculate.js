function sum(){
  let s1= Number(document.getElementById('in1').value);
  let s2= Number(document.getElementById('in2').value);
  document.getElementById('pid').innerHTML=s1+s2;  
}

function sub(){
    let n1=Number(document.getElementById('in1').value);
    let n2=Number(document.getElementById('in2').value);
    document.getElementById('pid').innerHTML=n1-n2;

}

function carp(){
    let x1= Number(document.getElementById('in1').value);
    let x2= Number(document.getElementById('in2').value);
    document.getElementById('pid').innerHTML=x1*x2;
}

function bol(){
    let d1= Number(document.getElementById('in1').value);
    let d2= Number(document.getElementById('in2').value);
    document.getElementById('pid').innerHTML=d1/d2;
}
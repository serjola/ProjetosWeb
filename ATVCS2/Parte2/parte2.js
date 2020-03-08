"use strict"
let frete = 31.00;
let p1= 34.90;
let p2 =35.90;
let p3 = 35.90;
function retornaNome(){
    let nome = prompt("Qual o seu nome?:");
    let data = new Date();
    document.getElementById("divnome").innerHTML = nome;
    document.getElementById("divdata").innerHTML = data;

    
    }

function total1(){
        document.getElementById("tot1").innerHTML="produto R$"+p1+"0"+"<br/>"+"    Frete: R$"+frete+",00"+"<br/>"+"<hr width="+"120px"+">"+"R$"+(p1+frete)+"0";
        alert(p1+frete);
    }
        
function total2(){
    document.getElementById("tot2").innerHTML="produto R$"+p2+"0"+"<br/>"+"    Frete: R$"+frete+",00"+"<br/>"+"<hr width="+"120px"+">"+"R$"+(p2+frete)+"0";
        alert(p2+frete)
    }
        
function total3(){
    document.getElementById("tot3").innerHTML="produto R$"+p3+"0"+"<br/>"+"    Frete:"+frete+",00"+"<br/>"+"<hr width="+"120px"+">"+"R$"+(p3+frete)+"0";
        alert(p3+frete);  
    } 
function total4(){
        document.getElementById("tot4").innerHTML="produto R$"+p2+"0"+"<br/>"+"    Frete: R$"+frete+",00"+"<br/>"+"<hr width="+"120px"+">"+"R$"+(p2+frete)+"0";
            alert(p2+frete)
        }

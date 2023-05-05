const toss=document.querySelector("button");
const head=document.querySelector("#circle1");
const tail=document.querySelector("#circle2");
let headInTable=document.querySelector("#headF");
let tailInTable=document.querySelector("#tailF");
var Hcount=0;
var Tcount=0;
toss.addEventListener("click",()=>{
    let coin=Math.floor((Math.random()*10)+1);
    console.log(coin);
    console.log("clicked");
    if(coin<=5){
        head.classList.add("color");
        tail.classList.remove("color");
        Hcount++;
        setF(1,Hcount);
        console.log(Hcount);
    }
    else{
        tail.classList.add("color");
        head.classList.remove("color");
        Tcount++;
        setF(2,Tcount);
        console.log(Tcount);
    }
})
//table content 
    var table=document.getElementById("myTable");
    var row0=table.insertRow(0);
    var row1=table.insertRow(1);
    row0.insertCell(0).innerHTML="Face";
    row0.insertCell(1).innerHTML="Frequency";
    row0.insertCell(2).textContent="Percentage";
    var row2=table.insertRow(2);
    var cell1=row1.insertCell(0).innerHTML="Head";
    var cell2=row1.insertCell(1);
    var cell3=row1.insertCell(2);
    var cell4=row2.insertCell(0).innerHTML="Tail";
    var cell5=row2.insertCell(1);
    var cell6=row2.insertCell(2);
 
//function to set frequency and percentage
function setF(f,count){
    let per=(count*100/(Hcount+Tcount)).toFixed(2);
    if(f==1){
        cell2.innerHTML=count;
        cell3.innerHTML=per;
        cell6.innerHTML=(100-per).toFixed(2);
    }
    if(f==2){
        cell5.innerHTML=count;
        cell6.innerHTML=`${per}`;
        cell3.innerHTML=(100-per).toFixed(2);
   }
   
}

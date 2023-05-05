//display a pop up 
alert("welcome\nPlease fill the form ");

function changeBackgroundColor() {
    // Generate a random color
    var randomColor1 = '#' + Math.floor(Math.random() * 16777215).toString(16);
    var randomColor2 = '#' + Math.floor(Math.random() * 16777215).toString(16);
    
    // Set the background color to the random gradient
    document.body.style.background = "linear-gradient(to right, " + randomColor1 + ", " + randomColor2 + ")";
}

// Call the function to start the color changing process every 5 seconds
setInterval(changeBackgroundColor, 5000);

function validation(){
    const age=document.forms["form"]["age"].value;
    const pass=document.forms["form"]["pass"].value;
    if(age<0||age>150){
        alert("age is invalid");
        return false;
    }
    if(pass.length<8){
        alert("password should be 8 character long");
        return false;
    }
    
}

//dynamically bold,italic and underline words.
const labels=document.querySelectorAll("label");

labels.forEach(label=>label.addEventListener("mouseover",()=>{
    label.setAttribute("style","text-decoration:underline;");

}))

labels.forEach(label=>label.addEventListener("mouseout",()=>{
    label.setAttribute("style","text-decoration:none;");
    
}))

//hidden div
const reveal = document.createElement('p');
function showDiv(){
    reveal.textContent="total forms submitted 500"
}
const count=document.querySelector("button");
count.addEventListener("click", alert("total 500 forms have been submitted so far"));
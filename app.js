let x=document.querySelectorAll(".box");
let btn=document.querySelector(".reset");
let newbtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");  
let turn0=true; 

const winPatterns=[
[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8], 
]; 

const resetGame=()=>{
turn0=true;
enableBoxes();
msgcontainer.classList.add("hide"); 
}

x.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turn0){
            box.innerText="O";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;             
        } 
        box.disabled=true;

        checkwinner();
    });
})   

const disableBoxes = () => {
for(let box of x ){
    box.disabled=true;
}
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes(); 
}

const enableBoxes = () => {
    for(let box of x ){
        box.disabled=false;
        box.innerText="";
    }
}

const checkwinner=()=>{
for(let i of winPatterns){
let a=x[i[0]].innerText;
let b=x[i[1]].innerText;
let c=x[i[2]].innerText;
if(a!="" && b!="" && c!=""){
if(a==b && b==c){ 
    console.log("winner",a);

    showWinner(a);
}
}
}
};  

newbtn.addEventListener("click",resetGame);
btn.addEventListener("click",resetGame);



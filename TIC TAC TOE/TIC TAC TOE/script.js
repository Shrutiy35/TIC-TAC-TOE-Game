let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let  msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true;
let count=0;//to track draw conition
//2Darray to store all winning patterns--
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
box.addEventListener("click",()=>{
    console.log("box was clicked");
    if(turnO==true)
    {
        box.innerText="O";
    box.style.backgroundColor="#ced4da";
    box.style.color="red";
        turnO=false;
        
    }
    else
    {
        box.innerText="X";
        box.style.backgroundColor="#ced4da";
        box.style.color="green";
        turnO=true;
    }
    box.disabled=true;
    count++;
    let isWinner=checkWinner();
    if(count == 9 && !isWinner){
    gamedraw();
    }
});
});
const gamedraw=()=>
 {
    msg.innerHTML=`Game was a draw &#128589`;
        msgContainer.classList.remove("hide");
       disableBoxes();
 };

const resetGame = () =>{
    turnO=true;
    count=0;
    enableBoxes();
    msgContainer.classList.add("hide");
    boxes.forEach((box) =>{
        box.style.backgroundColor="";//reset to default background color
    });
}

const showWinner = (winner) => {
msg.innerHTML =`Congrats, Winner is  player- ${winner} &#129395 🎉 `;
msgContainer.classList.remove("hide");
disableBoxes();
};

const disableBoxes =() =>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
        box.style.backgroundColor="";//reset background color when enabling boxes
    }
}

const checkWinner=() =>{
    for( let pattern of winPatterns){
    let pos1val=boxes[pattern[0]].innerText;
    let pos2val=boxes[pattern[1]].innerText;
    let pos3val=boxes[pattern[2]].innerText;
    if(pos1val!="" && pos2val!="" && pos3val!=""){
        if(pos1val==pos2val && pos2val==pos3val)
        {
        console.log("winner",pos1val);
        showWinner(pos1val);
        }
    }
} 
};
newGameBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
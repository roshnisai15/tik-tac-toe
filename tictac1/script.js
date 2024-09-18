let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset-btn');
let newBtn = document.querySelector('#new-btn');
let audioturn=new Audio("turn.mp3");
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');
let turnO = true; // true for "O", false for "X"

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO===true)
        {
            audioturn.play();
            box.innerHTML="O";
            turnO=false;
        }
        else
        {
            audioturn.play();
            box.innerHTML="X";
            turnO=true; 
        }
            box.disabled = true;
            checkWinner();
        });
    });

    const disableBoxes=()=>{
        for(let box of boxes)
        {
            box.disabled = true;  
        }
    }

    const enableBoxes=()=>{
        for(let box of boxes)
        {
            box.disabled = false; 
            box.innerText=""; 
        }
    }


const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    disableBoxes();
};


const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val !== "" && pos2val !="" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val)
            {
              console.log("Winner is ",pos1val)
              document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width='300px';
              showWinner(pos1val);
            }
            
        }
    }
};

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msg.innerText = "";
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width='0px';  
   
};
resetBtn.addEventListener("click",resetGame)


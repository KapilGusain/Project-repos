let yourch=document.querySelector(".yourchoice");
let rock=document.querySelector(".rock");
let paper=document.querySelector(".paper");
let scissor=document.querySelector(".scissor");
let computerch=document.querySelector(".compchoice");
let heading=document.querySelector("h3");
let result=document.querySelector(".result");
let newgame=document.querySelector(".newgame");
let ch1=document.querySelector(".text1");
let ch2=document.querySelector(".text2");

let yourchoice;
let comch;

const compch=()=>{
    let ch=["rock","paper","scissor"];
    let rnum=Math.floor(Math.random()*3);
    if(rnum===0){
        return ch[0];
    }else if(rnum===1){
        return ch[1];
    }else{
        return ch[2];
    }
}

let winner=()=>{
    if(yourchoice==="rock" && comch==="rock"){
        result.innerText="Draw";
    }
    else if(yourchoice==="rock" && comch==="paper"){
        result.innerText="You Lose";
    }
    else if(yourchoice==="rock" && comch==="scissor"){
        result.innerText="You Win";
    }
    else if(yourchoice==="paper" && comch==="scissor"){
        result.innerText="You Lose";
    }
    else if(yourchoice==="paper" && comch==="rock"){
        result.innerText="You Win";
    }
    else if(yourchoice==="paper" && comch==="paper"){
        result.innerText="Draw";
    }
    else if(yourchoice==="scissor" && comch==="scissor"){
        result.innerText="Draw";
    }
    else if(yourchoice==="scissor" && comch==="rock"){
        result.innerText="You Lose";
    }
    else if(yourchoice==="scissor" && comch==="paper"){
        result.innerText="You Win";
    }
}

rock.addEventListener("click",()=> {
    yourch.innerHTML="<i class='fa-solid fa-hand-back-fist'></i>";
    // heading.innerText="Click on computer choice";
    yourchoice="rock";
    let compchoice=compch();
    if(compchoice==="rock"){
        computerch.innerHTML="<i class='fa-solid fa-hand-back-fist'></i>";
        comch="rock";
    }else if(compchoice==="paper"){
        computerch.innerHTML="<i class='fa-solid fa-hand'></i>";
        comch="paper";
    }else {
        computerch.innerHTML="<i class='fa-solid fa-hand-scissors'></i>";
        comch="scissor";
    }
    rock.disabled=true;
    paper.disabled=true;
    scissor.disabled=true;
    winner();
    newgame.classList.remove("hide");  
    yourch.classList.add("anime"); 
    computerch.classList.add("anime");   
    // rock.classList.add("anime");   
})
paper.addEventListener("click",()=> {
    yourch.innerHTML="<i class='fa-solid fa-hand'></i>";
    // heading.innerText="Click on computer choice";
    yourchoice="paper";
    let compchoice=compch();
    if(compchoice==="rock"){
        comch="rock";
        computerch.innerHTML="<i class='fa-solid fa-hand-back-fist'></i>";
    }else if(compchoice==="paper"){
        comch="paper";
        computerch.innerHTML="<i class='fa-solid fa-hand'></i>";
    }else {
        comch="scissor";
        computerch.innerHTML="<i class='fa-solid fa-hand-scissors'></i>";
    }
    rock.disabled=true;
    paper.disabled=true;
    scissor.disabled=true;
    winner();
    newgame.classList.remove("hide"); 
    yourch.classList.add("anime"); 
    computerch.classList.add("anime");   
    // paper.classList.add("anime");   
})
scissor.addEventListener("click",()=> {
    yourch.innerHTML="<i class='fa-solid fa-hand-scissors'></i>";
    // heading.innerText="Click on computer choice";
    yourchoice="scissor";
    let compchoice=compch();
    if(compchoice==="rock"){
        comch="rock";
        computerch.innerHTML="<i class='fa-solid fa-hand-back-fist'></i>";
    }else if(compchoice==="paper"){
        comch="paper";
        computerch.innerHTML="<i class='fa-solid fa-hand'></i>";
    }else {
        comch="scissor";
        computerch.innerHTML="<i class='fa-solid fa-hand-scissors'></i>";
    }
    rock.disabled=true;
    paper.disabled=true;
    scissor.disabled=true;
    winner();
    newgame.classList.remove("hide"); 
    yourch.classList.add("anime");   
    computerch.classList.add("anime");   
})

newgame.addEventListener("click",()=> {
    rock.disabled=false;
    paper.disabled=false;
    scissor.disabled=false;
    newgame.classList.add("hide");
    yourch.innerHTML="";
    computerch.innerHTML="";
    ch1.innerText="Your Choice";
    ch2.innerText="Computer's Choice"; 
    result.innerText="Result";
    // scissor.classList.remove("anime"); 
    yourch.classList.remove("anime");
    computerch.classList.remove("anime");  
})
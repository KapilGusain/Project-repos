let sidebar=document.querySelector(".sidebar");
let sidebtn=document.querySelector(".sbtn");
let cross=document.querySelector(".cross");
let loadbtn=document.querySelector(".lodbtn");
let container=document.querySelector(".container");

sidebtn.addEventListener("click", ()=> {
    sidebar.style.transition='0.5s ease-in';
    sidebar.style.position='fixed';
    sidebar.style.transform='translateX(2%)';
    console.log("clicked");
});

cross.addEventListener("click",()=> {
    sidebar.style.transform='translateX(-110%)';
});

function loadimg() {
    for(let i=0;i<8;i++){
        let image=document.createElement("img");
        image.src=`https://picsum.photos/200/300?random=randnum${Math.floor(Math.random()*1000)}`;
        container.appendChild(image);
    }
}

loadbtn.addEventListener("click",loadimg);

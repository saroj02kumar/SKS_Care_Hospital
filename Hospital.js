// // let div = document.querySelector("div")
// let div = document.querySelectorAll("div")
// // console.log(div);

// div[0].addEventListener("click",()=>{
//     // console.log("clicked");

//     div[1].style.display=block
// })
    
let chatbot = document.querySelector(".bot")
let chatpopup = document.querySelector(".chat-popup")
let closebtn = document.querySelector("#close")

chatbot.addEventListener("click",()=>{

    chatpopup.style.display ="block"
    chatbot.style.display ="none"
})

    closebtn.addEventListener("click",()=>{
        chatpopup.style.display ="none"
        chatbot.style.display ="block"
    })

let menutoggle = document.querySelector("#menubar")
let menu = document.querySelector(".menux")
let sidebar= document.querySelector(".nav2-right")
let htmlbody = document.querySelector(".htmlbody")


menutoggle.addEventListener("click",()=>{
    sidebar.classList.toggle("menux")
    // console.log("clicked");
    


})

htmlbody.addEventListener("click",()=>{
    menu.style.display = "none"
})




// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     document.getElementById("header").style.fontSize = "30px";
//   } else {
//     document.getElementById("header").style.fontSize = "90px";
//   }
// }



let buttontoggle = document.querySelector(".button")
let button = document.querySelector(".form1 button")

let submit = document.querySelector(".booked")




button.addEventListener("click",()=>{

    buttontoggle.classList.toggle("buttonx")
submit.classList.toggle("bookedx")

// // let div = document.querySelector("div")
// let div = document.querySelectorAll("div")
// // console.log(div);

// div[0].addEventListener("click",()=>{
//     // console.log("clicked");

//     div[1].style.display=block
// })
    
let chatbot = document.querySelector(".bot")
let chatpopup = document.querySelector(".chat-popup")
let closebtn = document.querySelector("#close")

chatbot.addEventListener("click",()=>{

    chatpopup.style.display ="block"
    chatbot.style.display ="none"
})

    closebtn.addEventListener("click",()=>{
        chatpopup.style.display ="none"
        chatbot.style.display ="block"
    })

let menutoggle = document.querySelector("#menubar")
let menu = document.querySelector(".menux")
let sidebar= document.querySelector(".nav2-right")
let htmlbody = document.querySelector(".htmlbody")


menutoggle.addEventListener("click",()=>{
    sidebar.classList.toggle("menux")
    // console.log("clicked");
    


})

htmlbody.addEventListener("click",()=>{
    menu.style.display = "none"
})




// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     document.getElementById("header").style.fontSize = "30px";
//   } else {
//     document.getElementById("header").style.fontSize = "90px";
//   }
// }



let buttontoggle = document.querySelector(".button")
let button = document.querySelector(".form1 button")

let submit = document.querySelector(".booked")




button.addEventListener("click",()=>{

    buttontoggle.classList.toggle("buttonx")
submit.classList.toggle("bookedx")

})
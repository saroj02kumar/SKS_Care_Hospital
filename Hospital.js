
    
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







let buttontoggle = document.querySelector(".button")
let button = document.querySelector(".form1 button")

let submit = document.querySelector(".booked")




button.addEventListener("click",()=>{

    buttontoggle.classList.toggle("buttonx")
submit.classList.toggle("bookedx")

})
    

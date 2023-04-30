let imgs = document.querySelectorAll("img")
let slides = document.querySelectorAll("span")
let leftBtn = document.querySelector(".nav-left")
let rightBtn = document.querySelector(".nav-right")
let index = 0


slides.forEach((ele,i)=>{
    if(!ele.hasAttribute("data-mark")){
        ele.addEventListener("click",()=>{
            toggle(--i)
            ++i
            index = i
        })
    }
})

imgs.forEach((ele,i)=>{
    ele.addEventListener("click",()=>{
        toggle(--i)
        ++i
        index = i
    })
})


rightBtn.addEventListener("click",()=>{
    if(index < imgs.length - 1){
        toggle(index++)
    }
})

leftBtn.addEventListener("click",()=>{
    if(index > 0){
        toggle(--index-1)
    }
})

function toggle(index){
    imgs.forEach(ele=>{
        ele.classList.remove("active")
    })
    imgs[++index].classList.toggle("active")
    slides.forEach((ele)=>{
        ele.classList.remove("marked")
    })
    slides[index].classList.toggle("marked")
}
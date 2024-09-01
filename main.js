const dynamic_text = document.querySelector("#dynamic-text")
const phrases=["Teacher...","Frontend Developer...","Full Stack Web Developer..."]

phrase_idx=0;
letter_idx=0;

writing_speed=300;
erace_speed=150;

function erace_letter(){
    let content=dynamic_text.textContent.split("")
    content.pop()
    dynamic_text.textContent = content.join("")
    if(dynamic_text.textContent!=""){
        setTimeout(function(){
            erace_letter();
        },erace_speed)
    }else {
        phrase_idx++;
        phrase_idx=phrase_idx%phrases.length;
        letter_idx=0;
        write_letter()
    }
}



function write_letter(){
    dynamic_text.textContent+=phrases[phrase_idx].charAt(letter_idx)
    if(letter_idx<phrases[phrase_idx].length){
        setTimeout(function(){
            letter_idx++;
            write_letter()
        },writing_speed)
    }else {
        erace_letter()
    }
}


write_letter()


const menuButton = document.querySelector("#open-menu");
menuButton.addEventListener("click",openMenu)

const closeButton = document.getElementById("close-menu");
closeButton.addEventListener("click",closeMenu)

const allMobileNavigationLinks = document.querySelectorAll("#mobile-nav a.link");
allMobileNavigationLinks.forEach(link =>{
    link.addEventListener("click",closeMenu)
})


function openMenu(){
    const menu = document.getElementById("mobile-nav")
    menu.style.height = "100%"
}

function closeMenu(){
    const menu = document.getElementById("mobile-nav")
    menu.style.height = "0"
}


document.querySelector('.menu-opener').addEventListener('click', () => {
    let menu = document.querySelector('nav');

    if (menu.style.display == "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
        setTimeout(()=>{
            document.addEventListener('click', removeClick)
        },500);
    }

});

function removeClick(){
    document.querySelector('nav').style.display="none";
    document.removeEventListener('click', removeClick);
}
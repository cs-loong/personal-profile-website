function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    // Get all elements with class="tab-content" and hide them
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tab-link" and remove the class "active"
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// By default, open the first tab
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.tab-link').click();
});


function openPopUP(id){

    let popup=document.getElementById(id);
    popup.classList.add("open-popup");
}
function closePopUP(id){

    let popup=document.getElementById(id);
    let currentIMG=popup.querySelector('.fadeimg.active')
    
    let chosenIMG=popup.querySelector('#img1');
    if (currentIMG) {
        currentIMG.classList.remove('active');
    }
    chosenIMG.classList.add("active");
    let currentdot=popup.querySelector('.fade.active')
    let chosendot=popup.querySelector('.fade')
    if (currentdot) {
        currentdot.classList.remove('active');
    }
    chosendot.classList.add("active");
    popup.classList.remove("open-popup");
   
}

function PortclosePopUP(id){
    let popup=document.getElementById(id);

    for (let n=1;n<7;n++){
        let targetpopup=popup.querySelector('#'+id+'-'+n)
        // console.log(targetpopup)
        if (targetpopup!=null){
            let currentIMG=targetpopup.querySelector('.right-fadeimg.active')
    
            let chosenIMG=targetpopup.querySelector('#img1');
            if (currentIMG) {
                currentIMG.classList.remove('active');
            }
            if (chosenIMG){
                chosenIMG.classList.add("active");
            }
            
            let currentdot=targetpopup.querySelector('.right-fade.active')
            if (currentdot) {
                currentdot.classList.remove('active');
            }
           
            let chosendot=targetpopup.querySelector('.right-fade')
            if (chosendot){
                chosendot.classList.add("active");
            }
        }
        
    }
    
   
    
    popup.classList.remove("open-popup");
   
}

function activeIMG(id,event,id_main){
    let allIMG=document.getElementById(id_main);
    let currentIMG=allIMG.querySelector('.fadeimg.active')
    
    let chosenIMG=allIMG.querySelector('#'+id);
    if (currentIMG) {
        currentIMG.classList.remove('active');
    }
    chosenIMG.classList.add("active");
   
    let currentdot=allIMG.querySelector('.fade.active')
    let chosendot=event.target;
    if (currentdot) {
        currentdot.classList.remove('active');
    }
    chosendot.classList.add("active");

}

function portactiveIMG(id,event,id_main){
    let allIMG=document.getElementById(id_main);
    let currentIMG=allIMG.querySelector('.right-fadeimg.active')
    let chosenIMG=allIMG.querySelector('#'+id);
    // console.log(chosenIMG);
    if (currentIMG) {
        currentIMG.classList.remove('active');
    }
    // console.log(currentIMG);
    chosenIMG.classList.add("active");
   
    let currentdot=allIMG.querySelector('.right-fade.active')
    let chosendot=event.target;
    if (currentdot) {
        currentdot.classList.remove('active');
    }
    chosendot.classList.add("active");

}

function updateLogo() {
    const logo = document.querySelector('.logo');
    const fullName = logo.getAttribute('data-full-name');
    const shortName = logo.getAttribute('data-short-name');
    
    if (window.innerWidth <= 1063) {
        logo.innerHTML = shortName + '<span> Loong</span>';
    } else {
        logo.innerHTML = fullName.split(' ')[0] + '<span> ' + fullName.split(' ')[1] + '</span>';
    }
}

// Run on initial load
updateLogo();

// Add event listener for window resizing
window.addEventListener('resize', updateLogo);

let menuIcon=document.querySelector('#menu-icon');
let navBar=document.querySelector('.navbar');
let sections = document.querySelectorAll('.section');
let navLinks= document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec =>{
        let top=window.scrollY;
        let offset=sec.offsetTop - 150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top >= offset && top>offset +height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a [href='+id+']').classList.add('active')

            })
        }
    })
}

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active')
}
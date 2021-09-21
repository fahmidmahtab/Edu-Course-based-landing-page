// menu toggle button
let menubtn = document.getElementById("menu-btn");
let sidenav = document.getElementById("sidenav");
let navClose = document.getElementById("nav-close");

if (menubtn) {
  menubtn.addEventListener("click", () => {
    sidenav.style.right = "0";
    menubtn.style.opacity = "0";
    navClose.style.opacity = "1";
  });
}
if (navClose) {
  navClose.addEventListener("click", () => {
    sidenav.style.right = "-250px";
    menubtn.style.opacity = "1";
    navClose.style.opacity = "0";
  });
}

// remove menu
let navLink = document.querySelectorAll(".navlink");

function linkAction() {
  let sidenav = document.getElementById("sidenav");
  sidenav.style.right = "-250px";
  menubtn.style.opacity = "1";
  navClose.style.opacity = "0";
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

//  dark theme
themeButtonOff = document.getElementById("theme-button-off");
themeButton = document.getElementById("theme-button");

if (themeButton) {
  themeButton.addEventListener("click", () => {
    let body = document.querySelector("body");
    let themeButton = document.getElementById("theme-button");
    let themeName = document.querySelector(".change-theme-name");
    let changeThemeOff = document.querySelector(".change-theme-name-off");
    let themeButtonOff = document.getElementById("theme-button-off");
    let htext = document.getElementById("text");
    let ptext = document.getElementById("ptext");
    let button = document.getElementById("common-btn-1");
    let abouttext = document.getElementById("about-text");
    let abouttextp = document.getElementById("about-text-p");
    let abouth2 = document.getElementById("abouth2");
    let featureh1=document.getElementById("feature-h-1")
    let featureh2=document.getElementById("feature-h-2")
    let featureh3=document.getElementById("feature-h-3")
   let featurep1=document.getElementById("feature-p-1")
   let featurep2=document.getElementById("feature-p-2")
   let featurep3=document.getElementById("feature-p-3")
   let button2=document.getElementById("button-2")
   let courseh=document.getElementById("course-h")
   let coursep=document.getElementById("course-p")
   let button3=document.getElementById("button-3")
   let button4=document.getElementById("button-4")
   let offerp=document.getElementById("offer-p")
   let offerh=document.getElementById("offer-h")
   let button5=document.getElementById("button-5")
   let signh=document.getElementById("sign-h")
   let icons=document.getElementById("social-icons")



    body.style.background = "rgb(17, 16, 16)";
    themeButton.style.opacity = "0";
    themeName.style.opacity = "0";
    changeThemeOff.style.opacity = "1";
    themeButtonOff.style.opacity = "1";
    htext.style.color = "rgb(234 234 234)";
    ptext.style.color = "#797979";
    button.style.color = "rgb(234 234 234)";
    abouttext.style.color = "rgb(234 234 234)";
    abouttextp.style.color = "#797979";
    abouth2.style.color = "rgb(234 234 234)";
    featureh1.style.color="rgb(234 234 234)";
    featureh2.style.color="rgb(234 234 234)";
    featureh3.style.color="rgb(234 234 234)";
    featurep1.style.color="#797979"
    featurep2.style.color="#797979"
    featurep3.style.color="#797979"
    button2.style.color="rgb(234 234 234)"
    button3.style.color="rgb(234 234 234)"
    button4.style.color="rgb(234 234 234)"
    button5.style.color="rgb(234 234 234)"
    courseh.style.color="rgb(234 234 234)";
    coursep.style.color="#797979"
    offerh.style.color="rgb(234 234 234)";
    offerp.style.color="#797979"
    signh.style.color="rgb(234 234 234)";
    icons.style.color="rgb(234 234 234)";
    
  });
  // rgb(175 175 175)
}
if (themeButtonOff) {
  themeButtonOff.addEventListener("click", () => {
    let body = document.querySelector("body");
    let themeButton = document.getElementById("theme-button");
    let themeName = document.querySelector(".change-theme-name");
    let changeThemeOff = document.querySelector(".change-theme-name-off");
    let themeButtonOff = document.getElementById("theme-button-off");
    let htext = document.getElementById("text");
    let ptext = document.getElementById("ptext");
    let button = document.getElementById("common-btn-1");
    let abouttext = document.getElementById("about-text");
    let abouttextp = document.getElementById("about-text-p");
    let abouth2 = document.getElementById("abouth2");
    let featureh1=document.getElementById("feature-h-1")
    let featureh2=document.getElementById("feature-h-2")
    let featureh3=document.getElementById("feature-h-3")
   let featurep1=document.getElementById("feature-p-1")
   let featurep2=document.getElementById("feature-p-2")
   let featurep3=document.getElementById("feature-p-3")
   let button2=document.getElementById("button-2")
   let courseh=document.getElementById("course-h")
   let coursep=document.getElementById("course-p")
   let button3=document.getElementById("button-3")
   let button4=document.getElementById("button-4")
   let offerp=document.getElementById("offer-p")
   let offerh=document.getElementById("offer-h")
   let button5=document.getElementById("button-5")
   let signh=document.getElementById("sign-h")
   let icons=document.getElementById("social-icons")




    body.style.background = "#fff";
    themeButton.style.opacity = "1";
    themeName.style.opacity = "1";
    changeThemeOff.style.opacity = "0";
    themeButtonOff.style.opacity = "0";
    htext.style.color = "#000";
    ptext.style.color = "rgb(53, 52, 52)";
    button.style.color = "#000";
    abouttext.style.color = "#000";
    abouttextp.style.color = "rgb(53, 52, 52)";
    abouth2.style.color = "#000";
    featureh1.style.color="#000";
    featureh2.style.color="#000";
    featureh3.style.color="#000";
    featurep1.style.color="rgb(53, 52, 52)"
    featurep2.style.color="rgb(53, 52, 52)"
    featurep3.style.color="rgb(53, 52, 52)"
    button2.style.color="#000"
    button3.style.color="#000"
    button4.style.color="#000"
    button5.style.color="#000"
    courseh.style.color="#000";
    coursep.style.color="rgb(53, 52, 52)"
    offerh.style.color="#000";
    offerp.style.color="rgb(53, 52, 52)"
    signh.style.color="#000";
    icons.style.color="rgb(82, 77, 77)"
  })
}


// function scrollUp() {
//   const scrollUp = document.getElementById("scroll-up");
//   if (this.scrollY >= 200) scrollUp.classList.add("show-scroll");
//   else scrollUp.classList.remove("show-scroll");
// }
// window.addEventListener("scroll", scrollUp);

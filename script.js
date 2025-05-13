const themeSwitch = document.getElementById("theme-switch-button");
const moon = document.querySelector(".moon");
const sun = document.querySelector(".sun");

// getting the theme from local storage
let theme = localStorage.getItem("theme");

// removing all classes if any on load of screen
document.body.classList.remove("slidein");
document.body.classList.remove("slide");


// switching to darkmode
const enableDarkmode = () => {
    document.body.classList.add("darkmode");
    document.body.classList.remove("slidein");
    void document.body.offsetWidth;
    document.body.classList.add("slide");
    localStorage.setItem("theme", "darkmode");
    moon.style.display = "block";
    sun.style.display = "none";
    moon.style.color = "gray";


}

// switching to lightmode
const enableLightMode = () => {
    document.body.classList.remove("darkmode");
    document.body.classList.remove("slide");
    void document.body.offsetWidth;
    document.body.classList.add("slidein");
    localStorage.setItem("theme", "lightmode");
    moon.style.display = "none";
    sun.style.display = "block";


}


// setting darkmode initially on load of the screen if darkmode was user's original preference.
if (theme === "darkmode"){
    enableDarkmode();
}


// function to switch between light and dark modes.
themeSwitch.addEventListener("click", () => {
    theme = localStorage.getItem("theme");
    if (theme === "lightmode"){
        enableDarkmode()
    }
    else{
        enableLightMode()
    }
});





let bar_option = document.getElementById("bar");

let side_menuOption = document.getElementById("side_menuDesign");

let side_text1 = document.getElementById("home1");

let side_text2 = document.getElementById("about1");

let side_text3 = document.getElementById("services1");

let side_text4 = document.getElementById("portfolio1");

let side_text5 = document.getElementById("contact1");

bar_option.addEventListener("click", function () {
    side_menuOption.classList.toggle("side_menu");
    side_menuOption.classList.toggle("side_menuChild");

    side_text1.classList.toggle("open");
    side_text2.classList.toggle("open");
    side_text3.classList.toggle("open");
    side_text4.classList.toggle("open");
    side_text5.classList.toggle("open");
});

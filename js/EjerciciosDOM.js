const $burger = document.querySelector("#burger");

$burger.addEventListener("click",(e) => {
    const $menudesplegable = document.querySelector(".menudesplegable");
    
    $menudesplegable.toggleAttribute("style","transform: translateX(-100%)");
});

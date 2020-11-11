import hamburguerMenu from "./dom/menu_hamburguesa.js";
import reloj from "./dom/reloj.js";
import alarma from "./dom/alarma.js";
import {moveball} from "./dom/teclado.js";
import {shortcuts} from "./dom/teclado.js"

const d = document;
d.addEventListener("DOMContentLoaded", (e) => {
    hamburguerMenu(".panel-btn",".panel",".menu a");
    reloj("#btnStartClock","#btnStopClock",d.querySelector(".clock"));
    alarma("#btnStartAlarm","#btnStopAlarm","assets/alarma.mp3");
    // moveball("#ball","ArrowUp","ArrowDown","ArrowLeft","ArrowRight")
});

d.addEventListener("keydown", (e) => {
    shortcuts(e);
    moveball(e,".ball",".stage")
})

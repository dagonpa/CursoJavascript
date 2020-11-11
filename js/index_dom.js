import hamburguerMenu from "./dom/menu_hamburguesa.js";
import reloj from "./dom/reloj.js";
import alarma from "./dom/alarma.js";

const d = document;
d.addEventListener("DOMContentLoaded", e => {
    hamburguerMenu(".panel-btn",".panel",".menu a");
    reloj("#btnStartClock","#btnStopClock",d.querySelector(".clock"));
    alarma("#btnStartAlarm","#btnStopAlarm","assets/alarma.mp3");
});

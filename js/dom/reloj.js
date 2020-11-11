export default function reloj(btnStartClock,btnStopClock,clock){
    const d = document;
    let intervalClock;

    d.addEventListener("click",(e) => {

        if (e.target.matches(btnStartClock)){

            intervalClock = setInterval(() => {
                // let ahora = new Date();
                // clock.innerText = `${ahora.getHours()} : ${ahora.getMinutes()} : ${ahora.getSeconds()} `;
                let ahora = new Date().toLocaleTimeString();
                clock.innerHTML = `<h3>${ahora}</h3>`
            }, 1000);

            e.target.disabled = true;
        };

        if (e.target.matches(btnStopClock)){

            clock.innerHTML = null;
            clearInterval(intervalClock);
            d.querySelector(btnStartClock).disabled = false;
        };
    });

};
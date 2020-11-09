export default function reloj(btnStartClock,btnStopClock,clock){
    const d = document;

    d.addEventListener("click",(e) => {

        if (e.target.matches(btnStartClock)){

            let ahora = new Date();

            clock.innerText = `${"0".repeat(2-ahora.getHours().toString.length)}${ahora.getHours()} : ${"0".repeat(2-ahora.getMinutes().toString.length)}${ahora.getMinutes()} : ${"0".repeat(2-ahora.getSeconds().toString.length)}${ahora.getSeconds()} `;

            setInterval(() => {
                let ahora = new Date();
                clock.innerText = `${ahora.getHours()} : ${ahora.getMinutes()} : ${ahora.getSeconds()} `;
            }, 1000);
        };

        if (e.target.matches(btnStopClock)){

            clock.innerText = '';
            clock.setAttribute("display","none");
        };
    });

};
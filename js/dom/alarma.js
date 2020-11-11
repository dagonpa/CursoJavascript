export default function alarma(btnStartAlarm,btnStopAlarm,sound){
    const d = document;
    let alarmTime;
    // const audioElement = new Audio("assets/alarma.mp3");
    let $alarm = d.createElement("audio");
    $alarm.setAttribute("src",sound);

    d.addEventListener("click",(e) => {

        if (e.target.matches(btnStartAlarm)){
            alarmTime = setTimeout((e) => {
                $alarm.play();
            }, 1000);
            e.target.disabled = true;
        }
        if (e.target.matches(btnStopAlarm)){
            clearTimeout(alarmTime);
            $alarm.pause();
            $alarm.currentTime = 0;
            d.querySelector(btnStartAlarm).disabled = false;
        }

    });
}
const d = document;

export function shortcuts(e){
        
    if (e.altKey && e.keyCode===65){
        alert("Has presionado ALT+A");
    }
    if (e.altKey && e.keyCode===80){
        prompt("Has presionado ALT+P");
    }
    if (e.altKey && e.keyCode===67){
        confirm("Has presionado ALT+C");
    }

}

let x=0, y=0;

export function moveball(e, ball, stage){
    const $ball = d.querySelector(ball);
    const $stage = d.querySelector(stage);
    let limitsBall = $ball.getBoundingClientRect();
    let limitsStage = $stage.getBoundingClientRect();

    // console.log(limitsBall, limitsStage);
    switch(e.keyCode){
        case 37: //left
            e.preventDefault();
            if (limitsBall.left>limitsStage.left) x--;
        break;
        case 38: //up
            e.preventDefault();
            if (limitsBall.top>limitsStage.top) y--;
        break;
        case 39: //right
            e.preventDefault();
            if (limitsBall.right<limitsStage.right) x++;
        break;
        case 40: //down
            e.preventDefault();
            if (limitsBall.bottom<limitsStage.bottom) y++;
        break;
        default:
            break;
    }
    $ball.style.transform = `translate(${x * 10}px,${y * 10}px)`;

}
export function moveball(ball,up, down,left,right){
    const d = document;

    function shortcuts(e){
        console.log(e);
        console.log(e.type);
    }

    d.onkeydown = pulsacion;
    function pulsacion(tecla) {
        if (tecla.code === up){
            d.querySelector(ball).style.top = d.querySelector(ball).style.top - 1;
            console.log(d.querySelector(ball).style.top);
        }
        if (tecla.code === down){
            d.querySelector(ball).style.bottom = d.querySelector(ball).style.bottom - 1;
        }
        if (tecla.code === left){
            d.querySelector(ball).style.left = d.querySelector(ball).style.left - 1;
        }
        if (tecla.code === right){
            d.querySelector(ball).style.right = d.querySelector(ball).style.right - 1;
        }
        if (tecla.code === "AltLeft" && tecla.code === "KeyA"){
            alert();
        }
        if (tecla.code === "AltLeft" && tecla.code === "KeyP"){
            prompt();
        }
        if (tecla.code === "AltLeft" && tecla.code === "KeyC"){
            confirm();
        }
        // console.log(tecla.code);
        
    }

  
}
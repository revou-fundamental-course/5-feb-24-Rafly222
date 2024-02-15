function konversiCelcius() {
    const Celcius = parseInt(document.querySelector(".sesi-input textarea").value);
    const Fahrenheit = (Celcius * 9/5) + 32;
    document.querySelector(".sesi-output textarea").value = Fahrenheit;
}

function reset() {
    document.querySelector(".sesi-input textarea").value = "";
    document.querySelector(".sesi-output textarea").value = "";
    document.querySelector(".sesi-cara textarea").value = "";
   
}


function caraKalkulasi() {
        const Celcius = parseInt(document.querySelector(".sesi-input textarea").value);
        const Fahrenheit = (Celcius * 9/5) + 32;
        const textarea = document.querySelector(".sesi-cara textarea");
        textarea.value = Celcius + " * (9/5) + 32 = " + Fahrenheit + " F";
    }
    



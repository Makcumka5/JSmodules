let timerInput = document.getElementById("time");
let buttonRun = document.getElementById("button");
let timerShow = document.getElementById("timer");
let audio = new Audio("./audio/f110f32efccd34044.mp3");

buttonRun.addEventListener("click", function() {
    timeMinut = parseInt(timerInput.value) * 60;

    timer = setInterval(function() {
        seconds = timeMinut % 60;
        minutes = (timeMinut / 60) % 60;
        hour = (timeMinut / 60 / 60) % 60;
        if (timeMinut <= 0) {
            clearInterval(timer);
            audio.play();
            // alert("Время закончилось");
        } else {
            let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
            timerShow.innerHTML = strTimer;
        }
        --timeMinut;
    }, 1000);
    // document.getElementById("start-btn").addEventListener("click", () => {
    //     intervalId = setInterval(startTimer, 1000);
    // });

    // document.getElementById("stop-btn").addEventListener("click", () => {
    //     if (intervalId) clearInterval(intervalId);
    // });

    // document.getElementById("reset-btn").addEventListener("click", () => {
    //     totalSeconds = 0;
    //     document.getElementById("hour").innerHTML = "0";
    //     document.getElementById("minute").innerHTML = "0";
    //     document.getElementById("seconds").innerHTML = "0";
    // });
});
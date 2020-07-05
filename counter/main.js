var input = document.querySelector('#dateInput');
var btn = document.querySelector('#select');
var errDisplay = document.querySelector('#errDisplay');

var container = document.querySelector('#display-container');

var daysDisplay = document.querySelector('#dias');
var hoursDisplay = document.querySelector('#horas');
var minutesDisplay = document.querySelector('#minutos');
var secondsDisplay = document.querySelector('#segundos');

var modal = document.querySelector("#myModal");

window.onclick = event => {
    if (event.target == modal) {
        modal.style.display = "none";
        clearInterval(displayTime);
    }
}


btn.onclick = () => {
    modal.style.display = "block";
    var inputDate = new Date(input.value); //Data do input
    inputDate.setHours(24, 0, 0, 0); //Reseta horas

    var actualDate = new Date(); //Data atual
    var displayTime = setInterval(() => {
        try {
            if ((inputDate.getTime() < actualDate.getTime())) { //Exception
                container.style.display = 'none';
                throw "Invalid Date";
            }

            var days = Math.round(((((inputDate.getTime() - actualDate.getTime()) / 1000) / 60) / 60) / 24);
            var hours = (23 - actualDate.getHours());
            var minutes = (60 - actualDate.getMinutes());
            var seconds = (60 - actualDate.getSeconds());

            daysDisplay.innerHTML = days;
            hoursDisplay.innerHTML = hours;
            minutesDisplay.innerHTML = minutes;
            secondsDisplay.innerHTML = seconds;
        } catch (error) {
            errDisplay.innerHTML = "Insira uma data correta";
            clearInterval(displayTime);
            return;
        }
    }, 1000);
    input.value = "";
};

var span = document.querySelector("#close");

span.onclick = function() {
    modal.style.display = "none";
};
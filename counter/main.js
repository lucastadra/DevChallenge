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
    var displayTime = setInterval(() => {
        try {

            var actualDate = new Date(); //Data atual

            console.log(inputDate);
            if ((inputDate.getTime() < actualDate.getTime())) { //Exception
                container.style.display = 'none';
                throw "Invalid Date";
            }

            var days = Math.round(((((inputDate.getTime() - actualDate.getTime()) / 1000) / 60) / 60) / 24);
            var hours = (23 - actualDate.getHours());
            var minutes = (60 - actualDate.getMinutes());
            var seconds = (60 - actualDate.getSeconds());

            //console.log(`${days} dias ${hours} horas ${minutes} minutos ${seconds} segundos`);
            // errDisplay.innerHTML = (`${days} dias ${hours} horas ${minutes} minutos ${seconds} segundos`);

            daysDisplay.innerHTML = days;
            hoursDisplay.innerHTML = hours;
            minutesDisplay.innerHTML = minutes;
            secondsDisplay.innerHTML = seconds;
        } catch (error) {
            //console.log(err);
            errDisplay.innerHTML = "Insira uma data correta. A data deve ser maior que a atual!";
            clearInterval(displayTime);
            return;
        }
    }, 1000);
    input.value = "";
    var span = document.querySelector("#close");

    span.onclick = () => {
        clearInterval(displayTime);
        modal.style.display = "none";
    };
};
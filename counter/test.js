//Processing input
var input = document.querySelector('#dateInput');

const formatInput = dateStr => {
    dateArr = dateStr.split("-"); // ex input "2010-01-18"

    var date = {
        day: dateArr[2],
        month: dateArr[1],
        year: dateArr[0].substring(0),
    }
    return date;
    // return dateArr[2] + "/" + dateArr[1] + "/" + dateArr[0].substring(0); //ex out: "18/01/10"
}

//Current Date
var currentDate = new Date();

var day = String(currentDate.getDate()).padStart(2, '0');
var month = String(currentDate.getMonth() + 1).padStart(2, '0');
var year = currentDate.getFullYear();

currentDate = { //obj data
    day,
    month,
    year,
}

var relogio = document.querySelector('#display');
var btn = document.querySelector('#select');
var day, hour, min, sec; //for display

/*remainingTime = {
    days: formatInput(input.value).split("/")[0],
    month: currentDate.month - formatInput(input.value).split("/")[1],
    year: currentDate.year - formatInput(input.value).split("/")[2],
}*/

//Calc remaining time
btn.onclick = event => {
    // console.log(formatInput(input.value).split("/")[0]); //pega o retorno da função, faz split no / e pega o dia
    console.log(formatInput(input.value).year - currentDate.year);
    console.log(new Date(Date.now()).toLocaleString().split(',')[0]);
    //pega o input e subtrai da data atual
    console.log(`Faltam ${formatInput(input.value).year - currentDate.year} anos, ${formatInput(input.value).month - currentDate.month} meses, e ${formatInput(input.value).day - currentDate.day} dias`)
        //para a lógica de subtração dos meses, se meses der menor que 0, subtrair dos anos, se anos 
}
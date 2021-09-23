// create a input element 
// create a div element with
var pdiv = document.createElement('div');
pdiv.setAttribute('style','padding-top:20px');

//create a date input field

var dateele = document.createElement('input');
dateele.setAttribute('type','date');
dateele.setAttribute('id','dob');
dateele.setAttribute('name','dob');

pdiv.appendChild(dateele);

// create a button element

var button = document.createElement('button');
button.innerHTML="display data";
button.setAttribute('class','btn btn-primary');
button.addEventListener('click',calculate);

pdiv.appendChild(button);


// displaying the data in the HTML

var dd = document.createElement('div');
dd.setAttribute('id','display');


function calculate() {
    var input = document.getElementById('dob').value;
    console.log(input);
    // wheather the input date is valid or not
    if(Date.parse(input)){
        var inputdate = new Date(input);
        console.log(inputdate);
        // todays date
        var currentdate = new Date();
        console.log(currentdate);

        var millisecondsdiff = parseInt(currentdate.getTime())-parseInt(inputdate.getTime());
        console.log(millisecondsdiff);
        var secondsdiff = mathfloor(millisecondsdiff,1000);
        console.log(secondsdiff);
        var minutesdiff = mathfloor(secondsdiff,60);
        console.log(minutesdiff);
        var hourdiff = mathfloor(minutesdiff,60);
        console.log(hourdiff);

        var daysdiff = mathfloor(hourdiff,24);
        console.log(daysdiff);

        var yeardiff = getyear(inputdate,currentdate);
        console.log(yeardiff);

        var monthdiff = getmonth(inputdate,currentdate);
        console.log(monthdiff);

        dd.innerHTML = `Given input date is:${inputdate} <br>
        year :${yeardiff}<br>
        month:${monthdiff}<br>
        day:${daysdiff}<br>
        hour:${hourdiff}<br>
        minutes:${minutesdiff}<br>
        seconds:${secondsdiff}<br>
        Millidiff:${millisecondsdiff}<br>`;

    }
    else{
        dd.innerHTML = "invalid date";

    }
    document.body.appendChild(dd);
}

function mathfloor(value1,value2) {
    return Math.floor(value1/value2);
}

function getyear(value1,value2){
    var date1 = new Date(value1);
    var date2 = new Date(value2);
    return date2.getFullYear()-date1.getFullYear();
}

function getmonth(value1,value2) {
    var year = getyear(value1,value2);
    var month=(year*12)+(value2.getMonth()-value1.getMonth());
    return month;
}

document.body.append(pdiv);
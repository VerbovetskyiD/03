//вариант через else if

let num = 0; //переменная для проверки

if ( (num % 100 > 10) && (num % 100 < 15) ) {
    console.log(num + ` лет`);
} else {
    if (num % 10 === 1) {
        console.log(num + ` год`);
    } else if ( (num % 10 > 1) && (num % 10 < 5) ) {
        console.log(num + ` года`);
    } else {
        console.log(num + ` лет`);
    }
}

//вариант через switch

let num = 0; //переменная для проверки

switch (true) {
    case ( (num % 100 > 10) && (num % 100 < 15) ):
        console.log(num + ` лет`);
        break;
    case (num % 10 === 1):
        console.log(num + ` год`);
        break;
    case ( (num % 10 > 1) && (num % 10 < 5) ):
        console.log(num + ` года`);
        break;
    default:
        console.log(num + ` лет`);
}
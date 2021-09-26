// Task 1

const age = prompt('Please input your age');

if (age >= 0 && age <= 12) {
   document.write('You are a child');
} else if (age > 12 && age <= 18) {
   document.write('You are a child'); 
} else if (age > 18 && age <= 60) {
    document.write('You are an adult');
} else if (age > 60) {
   document.write('You are an old man');
} else {
    document.write('You entered wrong value');
}

// Task 2

const number = prompt('Enter the number from 0 to 9', 0);
    switch(number) {
        case '0':
            document.write('0 is )');
            break;
        case '1':
            document.write('1 is !');
            break;
        case '2':
            document.write('2 is @');
            break;
        case '3':
            document.write('3 is #');
            break;
        case '4':
            document.write('4 is $');
            break;
        case '5':
            document.write('5 is %');
            break;
        case '6':
            document.write('6 is ^');
            break;
        case '7':
            document.write('7 is &');
            break;
        case '8':
            document.write('8 is *');
            break;
        case '9':
            document.write('9 is (');
            break;
    }


// Task 3

const testNumber = +prompt('Please input the number from 100 to 999', 0);
    testNumber = testNumber + '';
    if (testNumber[0] == testNumber[1] || testNumber[0] == testNumber[2] || testNumber[1] == testNumber[2])
    {
        alert('There are the same numbers');
    }
    else
        alert('There are no the same numbers');

        
  // Task 4      
  let year = prompt('Enter a year', 0);
  if (year % 400 == 0 || year % 4 == 0 && year % 100 !== 0) {
    document.write('This is a leap year');
 } else {
     document.write('This is not a leap year');
 }

  // Task 5
  const isPalindrome = function(word) {
      let isWordPalindrome = false;

   for (let i =0; i < word.length / 2, i++) {
      if (word[i] === word[word.length - i -1]) {
          isWordPalindrome = true;
      }
  }
  return isWordPalindrome;
}

document.write(isPalindrome('qweewq'));


//Task 6
let money = prompt('Enter the amount of money in USD:', 0);
    let currency = prompt('EUR = 1, UAH = 2, AZN = 3', 0);
    switch(currency) {
        case '1':
            document.write(money*0.85 + 'EUR');
            break;
        case '2':
            document.write(money*26.69 + 'UAH');
            break;
        case '3':
            document.write(money*1.70 + 'AZN');
            break;
    }

    //Task 7
 let amount = prompt('Enter the value of purchase:');
    if (amount >=200 && amount < 300)
        alert(amount - amount * 0.03 + '$ with 3% discount');
    else if (amount >=300 && amount < 500)
        alert(amount - amount * 0.05 + '$ with 5% discount');
    else if (amount >=500)
        alert(amount - amount * 0.07 + '$ with 7% discount');

    //Task 8
    let circumference = prompt('Enter the value of circumference');
    let perimeter = prompt('Enter the value of perimeter of a square');
    let diameter = circumference / 3.141592653589793;
    let length = perimeter / 4;
    if (diameter < length) {
        document.write('This circle can fit into the square');
    } else {
        document.write('This circle can not fit into the square');
    }

   //Task 9
   //Тест на тему “Первое кругосветное путешествие Фернандо Магеллана”
    const question1 = prompt('С какой целью была организована экспедиция? а Захват новых территорий, b Подтвердить шарообразность Земли, с Найти путь к пряностям', 0);
    const question2 = prompt('Когда совершилась экспедиция?, a Середина XV века, b Начало XVI века, Начало XVII века', 0);
    const question3 = prompt('Какие трудности возникли в плавании через Тихий океан?, a Голод и болезни, b Штормы, c Мятежи', 0);
    let points = 0;
    if (question1 === 'a' || question1 === 'b')
        alert('Неправильный ответ');
    else ('c')
        points += 2;

    if (+question2 === 'a' || question2 === 'c')
        alert('Неправильный ответ');
    else ('b')
        points += 2;

    if (+question3 === 'b' || question2 === 'c')
    alert('Неправильный ответ');
else ('a')
    points += 2;

document.write('Вы получили:' + points);


   //Task 10
   const day = +prompt('Enter day please');
   const month = +prompt('Enter month please');
   const year = +prompt('Enter year please');
   let nextYear = year;
   let nextMonth = month;
   let nextDay = day + 1;

   let isDecember = month === 12;
   if (
       ((month % 2 === 1 && day === 31) || (month % 2 === 0 && day === 30)) || //check for 31 days
       ((month === 2 && year % 4 === 0 && day === 29) || (month === 2 && day === 28)) || // check for 20 days
       ((month === 8 || isDecember) && day === 31) //check for August and December
   ) {
       nextDay = 1;
       nextMonth = isDecember ? 1 : nextMonth++;

       if (isDecember) {
           nextYear++;
       }
   }

   //Error Handling
   if (day > 31 || month > 12 || day < 1 || month < 1 || year < 0 || isNaN(day) ||isNaN(month) || isNaN(year)) {
   document.write('Error');
   } else {
   document.write(`Year: ${nextYear} / Month: ${nextMonth} / day: ${nextDay}`);
   }
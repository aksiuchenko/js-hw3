/*---Task 1--- 
Выведите числа от 1 до 50 и от 35 до 8.*/

document.write('task 1<br>');

for (let i = 1; i <= 50; i++) {
    document.write(i + ' ');
}

document.write('<br>');

for (let i = 35; i >= 8; i--) {
    document.write(i + ' ');
}

/*---Task 2---
Выведите столбец чисел от 89 до 11 - воспользуйтесь циклом while и отделите числа
тегом <br /> друг от друга, чтобы получить столбец, а не строку.*/

document.write('<br><br>task 2<br>');

let varitable2 = 89;

while (varitable2 >= 11) {
    document.write(varitable2 + '<br>');
    varitable2--;
}

/*---Task 3---
С помощью цикла найдите сумму чисел от 0 до 100.*/

document.write('<br>task 3<br>');

let varitable3 = 0;

for (let i = 0; i <= 100; i++) {
    varitable3 += i;
}

document.write(varitable3 + '<br>');

/*---Task4--- 
Найдите сумму чисел в каждом числе от 1 до 5, например: в числе 3 сумма составляет 6
(1+2+3).*/

document.write('<br>task 4<br>');

let varitable4;

for (let i = 1; i <= 5; i++) {
    varitable4 = 0;
    for (let v = 1; v <= i; v++) {
        varitable4 = varitable4 + v;
    }
    document.write(varitable4 + '<br>');
}

/*---Task5---
Выведите чётные числа от 8 до 56. Решить задание через while и for.*/

document.write('<br>task 5<br>');

document.write('через while<br>');

let varitable5 = 8;

while (varitable5 <= 56) {
    if (varitable5 % 2 == 0) {
        document.write(varitable5 + '')
    }
    varitable5++;
}

document.write('<br>через for<br>');

for (let i = 8; i <= 56; i++) {
    if (i % 2) continue;
    document.write(i + '' );
}
document.write('<br>');


/*---Task 6---
Необходимо вывести на экран полную таблицу умножения (от 2 до 10) в виде:
2*2 = 4
2*3 = 6
2*4 = 8
2*5 = 10
...
3*1=3
3*2=6
3*3=9
3*4=12
...
Для решения задачи используйте вложенные циклы.*/

document.write('<br>task 6<br>'); 
 
for (let i = 2; i <= 10; i++) {  
document.write('<p>'); 
for (let j = 1; j <=10; j++)  
{ 
document.write(i + "*" + j + "=" +(i*j) + "<br>"); 
}
document.write('</p>');
}


/*---Task 7--- 
Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет
меньше 50. Какое число получится? Посчитайте количество итераций, необходимых
для этого (итерация - это проход цикла), и запишите его в переменную num. */

document.write('<br>task 7<br>');

let varitable7 = 1000;
     num7 = 0;

while (varitable7 >= 50) {
    varitable7 /= 2;
    num7 += 1;
}

document.write ('Результат деления: ' + varitable7 + '<br>')
document.write('Количество интеграций: '  + num7 + '<br>' );


/*---Task 8---
Запустите цикл, в котором пользователю предлагается вводить число с клавиатуры, до
тех пор, пока не будет введена пустая строка или 0. После выхода из цикла выведите
общую сумму и среднее арифметическое введённых чисел. Если пользователь ввел не
число, то вывести сообщение об ошибке ввода. При подсчете учесть, что пользователь
может ввести отрицательное значение.*/
document.write('<br>task 8<br>');

let z = prompt('Введите число');

i8 = 0;
sum8 = 0;

if (z == '') {
    document.write('Вы ввели пустую строку. Цикл прервался');

} else {
    while (z != '') {
        if (!parseInt(z)) {
        z = prompt('Вы ошиблись с вводом. Введите число еще раз');
    } else {
        document.write('Вы ввели число - ' + z + '<br>');
            sum8 = sum8 + parseInt(z);
            i8++;
            z = prompt('Введите еще одно число');
        }
    }
    document.write('Сумма введенных чисел = ' + sum8 + '<br>');
    document.write('Среднее арифметическое = ' + (sum8 / i8) + '<br>');
}




/*---Task 9---
Дана строка с числами разделенными пробелами «4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36
8 57». Найдите самое большое и самое маленькое число в строке, используя цикл.*/

document.write('<br>task 9<br>');

let str = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57',
min = 100,
max = 0,
num9 = '';

for(let i=0; str[i] !== undefined; i++){
    
    if(str[i] != ' '){
        num9 += str[i];
    }
    else{
        
        if(num9 > max){
            max = num9;
        }
        if(num9 < min){
            min = num9;
        }
        num9 = '';
    }
    
}
 document.write ('Минимальное число: ' + min + '<br>');
 document.write ('Максимальное число: ' + max + '<br>');

/*---Task 9--- Дано произвольное целое число n. Написать программу, которая:
a. разбивает число n на цифры и выводит их на экран;
b. подсчитывает сколько цифр в числе n;
c. находит сумму цифр числа n;
d. меняет порядок цифр числа n на обратный.
Пример: вводится число 123: цифр в числе = 3; сумма = 6; обратный порядок 321. */

document.write('<br>task 10<br>');

let innum = prompt('Введите произвольное целое число'),
calc = 0,
numb = 0,
strnum = '',
numbers = '';

sum = 0;

let inputnum = innum;

while (innum > 0) {

    sum += innum % 10;
    numb = innum % 10;
    strnum += numb + '';
    innum = Math.floor(innum / 10);
    calc++;

}

let fnum = strnum; 

while (fnum > 0) {
    numb = fnum % 10;
    numbers += ' "' + numb + '" ';
    fnum = Math.floor(fnum / 10);
    
}

document.write ('Ваше число - ' + inputnum + '<br>');
document.write ('Числа вашего числа - ' + numbers + '<br>');
document.write ('Колтчество цифр в числе - ' + calc + '<br>');
document.write ('Сумма цифр числа - ' + sum + '<br>');
document.write ('Обратный порядок цифр - ' + strnum  + '<br>');
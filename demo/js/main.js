//alert('hi');
alert('hello')
var str ='this is string';
var num=5;
var bool=true;
console.log('types', typeof str, typeof num,typeof bool);

var isTrue=confirm('are you good');
//alert(parseInt('5'));
 

//3ashan at2akad men hay aljomleh hay dayman basta5demha ma3 alconfirm
//con

console.log(isTrue);
var myNum=prompt('enter a number');
console.log('myNum',myNum,typeof myNum);
//parseInt('nhcnj')==>NaN
//parseInt('4')==>4
//never use an assignment with the if we only use ==
var color='blue';
switch (color)
{case 'red':
console.log('red');
break;
case 'blue':
case'bluee':
    console.log('blue');
    break;
default:
    console.log('nooooo');
    break;
}

/*the console code we made during the class
arr = [1,2,3,4,5,6]
(6) [1, 2, 3, 4, 5, 6]
arr[0]
1
arr[6]
undefined
arr.push(7)
7
arr
(7) [1, 2, 3, 4, 5, 6, 7]
arr.pop
ƒ pop() { [native code] }
arr.pop()
7
arr
(6) [1, 2, 3, 4, 5, 6]
arr.shift()
1
arr
(5) [2, 3, 4, 5, 6]
var=arr.shift()
VM367:1 Uncaught SyntaxError: Unexpected token '='
var value = arr.shift()
undefined
value
2
arr
(4) [3, 4, 5, 6]
var val = arr.shift()
undefined
val
3
arr
(3) [4, 5, 6]
arr.unshift
ƒ unshift() { [native code] }
arr.unshift(1)
4
arr.unshift(2)
5
arr.join('') //read more about this function if you want to know more 
"12345"
arr.join(' ');
"1 2 3 4 5"
read about arrat.include()
*/

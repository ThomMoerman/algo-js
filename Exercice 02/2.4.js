// Count from 1 to 100. For every even number display the result of their division by 2. For every odd number display the result of their multiplication by 3.

let num = 1;

while (num<=100){
    if(num%2 === 0){
        console.log(num/2)
        num+=1
    }else{
        console.log(num/3)
        num+=1
    }
}
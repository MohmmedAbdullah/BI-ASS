//problem1
function factorial(){
      num=document.getElementById("num").value;
        let i=1;
        let fact=1;
        if(num<0){
            console.log("ERROR");
        }
         else  {
      for(i;i<=num;i++)
      {
     fact=fact*i;
      }
      //document.write(fact);
      document.getElementById("res").innerHTML = "The factorial is :"+fact
      //console.log("the factorial of the given num is",fact);
      
    }
}
//problem2
function cube(){
       n=document.getElementById("num").value;
        let c;
        c=n**3;
      document.getElementById("res").innerHTML = "The cube of the number is : :"+c   
}
//problem3
        function areaOfTriangle(){
        
        side=document.getElementById("length").value;
        area=Math.sqrt(3)/4*side*side;
        
      document.getElementById("res").innerHTML = "The area of the triangle is : :"+area   
}
//problem4
function numOfDays(){
        
        num=document.getElementById("num").value;
        
        if(num==1|| num==3|| num==5|| num==7|| num==8||num==10||num==12)
        {
        document.write("The Number of days in this month is : 31");
         
        }
        else if(num==4||num==6||num==9||num==11)
        {
        
        document.write("The Number of days in this month is : 30");
        }
        
        else if(num==2) {
        document.write("The Number of days in this month is : 28/29");
        }
       else 
        document.write("invalid input");
        }
//problem5
function cToF(){
        c=document.getElementById("temp").value;
        let f=(c*9/5)+32;
        document.getElementById("res").innerHTML = "The Temprature in farenhite is  :"+f  
}
//problem6
 function sumOfValues(){
          
        
       n=document.getElementById("n").value;
       
        let  sum=((n*( ++n))/2);
        
      document.getElementById("res").innerHTML = "The sum of values from 1 to N is  :"+sum
      }
//problem7
function nthTerm(){
         num=document.getElementById("num").value;
         let n;
         if(num<=0){
         document.write("ERROR");
         }
         else
          n=num**2;
          document.getElementById("res").innerHTML = "The nth term of the series is  :"+n
      }
//problem8
       const str = "Lorem Ipsum";

console.log(str.split(' ').join('').length);
document.write(str.split(' ').join('').length);

//problem9
function sortEvenArray(array, n){
    let evenArr=[];
    let oddArr=[];
    let result =[];
    for(let i=0; i<=n; i++){
        if(i%2 == 0){
evenArr.push(array[i]);
        }else{
            oddArr.push(array[i]);
        }
    }
    evenArr.sort((a,b)=>a-b);
    for(let i=0;i<n;i++){
        if(i%2 ==0){
            result.push(evenArr.shift())
        }else(
            result.push(oddArr.shift()) 
        )

    }
    return result;
}
      
let ans = sortEvenArray([3,9,1,44,6],5);
console.log(ans);

//problem10
function sortEvenArray(array, n){
    let evenArr=[];
    let oddArr=[];
    let result =[];
    for(let i=0; i<=n; i++){
        if(i%2 == 0){
evenArr.push(array[i]);
        }else{
            oddArr.push(array[i]);
        }
    }
    evenArr.sort((a,b)=>a-b);
    for(let i=0;i<n;i++){
        if(i%2 ==0){
            result.push(evenArr.shift())
        }else(
            result.push(oddArr.shift()) 
        )

    }
    return result;
}
      
let ans = sortEvenArray([3,9,1,44,6],5);
console.log(ans);

//problem11
function asc(arr) {
    let map = new Map
    let c = 1;
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1)
        }
        else {
            map.set(arr[i], c)
        }
    }
    let narr = [...map];
    let tmp;
    for (i = 0; i < narr.length; i++) {
        for (j = i + 1; j < narr.length; j++) {
            if (narr[i][1] > narr[j][1]) {
                tmp = narr[i];
                narr[i] = narr[j];
                narr[j] = tmp;
            }
            else if ((narr[i][1] == narr[j][1])) {
                if (narr[i][0] > narr[j][0]) {
                    tmp = narr[i];
                    narr[i] = narr[j];
                    narr[j] = tmp;
                }
            }
        }
    }
    return narr;
}
arr = [3 ,3 ,4, 4, 7, 8];
console.log(asc(arr));

var x = 5;
var y = 6;
var z = x=y;
console.log("Value of z "+z);

//problem12
function isPalindrome(n)
{
    
    var rev = 0;
    for (var i = n; Math.trunc(i) > 0; i /= 10)
    {
        rev = ((rev*10) + (Math.trunc(i)%10));
         
        }
 
    return (n==rev);
}
     
var count = 0;

function countPal(min,  max)

{
    for (var i = min; i <=max; i++)
    {
        if(isPalindrome(i))
        
        count++;
       
       }

       console.log(count);
}
 
 
    countPal(1, 5);

//rpoblem13
function nthTerm(num){
    let term = num*(num+1);

    return term;
}

console.log(nthTerm(4));

//problem14
function leftRotate(arr, n, k){
    
    let mod = k % n;
 

    for (let i = 0; i < n; i++)
        console.log((arr[(mod + i) % n]) + " ");
 
    console.log("\n");
}
 
let arr = [ 1 ,2 ,3 ,4 ,5, 6, 7];
let n = arr.length;
k = 3;
leftRotate(arr, n, k);

//problem15
function evaluatePostfix(exp)
{ 
        let stack=[];      
        for(let i=0;i<exp.length;i++)
        {
            let c=exp[i]; 
            if(! isNaN( parseInt(c) ))
            stack.push(c.charCodeAt(0) - '0'.charCodeAt(0));
            else
            {
                let val1 = stack.pop();
                let val2 = stack.pop();
                  
                switch(c)
                {
                    case '+':
                    stack.push(val2+val1);
                    break;
                      
                    case '-':
                    stack.push(val2- val1);
                    break;
                      
                    case '/':
                    stack.push(val2/val1);
                    break;
                      
                    case '*':
                    stack.push(val2*val1);
                    break;
              }
            }
        }
        return stack.pop();  
}
 
let exp="531*+9-";
console.log("postfix evaluation: "+evaluatePostfix(exp));


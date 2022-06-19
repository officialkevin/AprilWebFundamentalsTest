const input = [ 1, -5, 2, 10, -30, 29, 50];

function SumOfPositiveIntegers(){

let sum=0
for(let i=0;i<input.length;i++){
  if(input[i]>0){
    sum=sum+input[i]
  }
}
return sum
}

let bomb=SumOfPositiveIntegers()
console.log('The sum of positive numbers in an array is '+ bomb)
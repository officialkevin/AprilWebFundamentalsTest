
function oddSum(n)
{
    let sum = 0; curr = 1;
    for (let i = 0; i < n; i++)
    {
        sum += curr;
        curr += 2;
    }
    return sum;
}
 



let n = prompt("Enter the nth number that you want to sum");
for(i=1;i<=n;i++){
    if (i%2!=0) {
       
        console.log("odd numbers are "+i)
        }
       
     
    }

console.log("The sum of first n odd number is  " +oddSum(n));
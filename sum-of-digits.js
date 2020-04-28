var num=102345;
var sum=0;
while(num>0)
{
    sum=sum+parseInt(num%10);
    num=parseInt(num/10);
}
console.log(sum);
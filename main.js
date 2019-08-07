let number=Number(prompt("Limit row"));
let value1=0,value2=1,temp;
for(let i=0;i<number;i++)
{
    temp=value2;
    value2+=value1;
    value1=temp;
    document.write(value1);
    document.write("<br>");
}
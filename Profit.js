function profit() {
    let number=Number(prompt("Import borrow amount"));
    let month=Number(prompt("Import borrow month"));
    let money;
    if(month<=1)
    {
        money=(number*7.1)+number;
        alert("Profit amount is "+money);
    }
  else  if((month>1) &&(month<=3))
    {
        money=(number*5.8)+number;
        alert("Profit amount is "+money);
    }
    else  if((month>3) &&(month<=6))
    {
        money=(number*4.8)+number;
        alert("Profit amount is "+money);
    }
    else  if((month>6) &&(month<=12))
    {
        money=(number*4)+number;
        alert("Profit amount is "+money);
    }
}
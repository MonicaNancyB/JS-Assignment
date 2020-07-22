var count = 0;
function page()
{
    setTimeout("func()",5000);
}
function func()
{
    var a =new Array("red","darkblue","sky","yellow","blue","pink","green");
    if(count<=6)
    {
        document.bgColor = a[count++];
        setTimeout("func()",5000);
}
else
{
    count =0;
    page();
}
}
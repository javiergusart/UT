for(var i = 1; i <=10; i++) {
    console.log(i);
}
console.log('after loop');

var j = 1;
while (j <= 10) {
    console.log(j);
    j++;
}


for(var i=5;i>0;i--) {
    var s='';
    for(var j=i;j>0;j--)
    {
        s+='*';
    }
    console.log(s);
}

for(var i=1;i<5;i++)
    {
    var s='';
    for(var j=0;j<=i;j++)
    {
        s+='*';
    }
    console.log(s);
}

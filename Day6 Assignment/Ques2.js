function printTable(){
    var num;
    num =Number(document.getElementById('txtNumber').value);
    for(var i=1;i<=10;i++){
        var pTag=document.getElementById('pPrint');
        pTag.innerHTML +=(i+"x" +num+ "=" +i*num+ "<br>");
    }
    }

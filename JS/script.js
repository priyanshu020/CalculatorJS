// To fetch the numbers on the textarea
function getInput(num) {
    var x=num;
    if(x==='='){
        document.getElementById('result').value=eval(document.getElementById('result').value);
    }else if(x==='AC'){
        document.getElementById('result').value='';
    }else{
        document.getElementById('result').value+=num;
    }
}

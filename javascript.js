let displ=document.querySelector(".display");
const container=document.querySelector(".calcLayout");
function clearNumbs(ang1, ang2){
ang1.splice(0, ang1.length);
ang2.splice(0, ang2.length);
return ang1, ang2;
};
function showDisplay(stoinost){
    if(stoinost == "*" || stoinost == "/" || stoinost == "+" || stoinost == "-" || stoinost == "%"){
        displ.value = '';
    }
    else{
displ.value+=stoinost;
    };
};
let result=0;
function firstOrSecond(opera, vale){
    if(opera == "+" || opera == "-" || opera =="/" || opera == "*" || opera=="%" ){
        secondNumb.push(vale);
    }
    else{
        firstNumb.push(vale);
    };
};
function doOperation(first, second, ope){
    let realFirst=0;
    let realSecond=0;
for(i=0; i<=first.length-1; i++){
        realFirst+= first[i]* Math.pow(10,first.length-i-1);
};
for(k=0; k<=second.length-1; k++){
    realSecond+= second[k]* Math.pow(10,second.length-k-1);
};
if(ope=="+"){
    result=realFirst+realSecond;
}
else if(ope=="-"){
    result=realFirst-realSecond;
}
else if(ope=="/"){
    result=realFirst/realSecond;
}
else if(ope=="*"){
    result=realFirst*realSecond;
};

//console.log(result);
return result;
};
//const oppAndNumbers=[];
let firstNumb=[];
let secondNumb=[];
let operation;
function disp(valu){
displ.value+=valu;
    
};

container.addEventListener('click', (event) => {
    let target = event.target;

    switch(target.id) {
        case 'AC':
            result=0;
            break;
        case 'perc':
            operation = '%';
            showDisplay(operation);
            break;
        case 'div':
            operation = '/';
            showDisplay(operation);
            break;
            case 'sev':
                firstOrSecond(operation, 7);
                showDisplay(7);
            break;
        case 'eig':
            firstOrSecond(operation, 8);
            showDisplay(8);
            break;
        case 'nin':
            firstOrSecond(operation, 9);
            showDisplay(9);
            break;

            case 'mul':
            operation="*"
            showDisplay(operation);
            break;

            case 'for':
            firstOrSecond(operation, 4);
            showDisplay(4);
            break;
        case 'fiv':
            firstOrSecond(operation, 5);
            showDisplay(5);
            break;
        case 'six':
            firstOrSecond(operation, 6);
            showDisplay(6);
            break;

            case 'min':
                operation = "-";
                showDisplay(operation);
            break;
        case 'one':
            firstOrSecond(operation, 1);
            showDisplay(1);
            break;
        case 'two':
            firstOrSecond(operation, 2);
            showDisplay(2);
            break;

            case 'thr':
                firstOrSecond(operation, 3);
                showDisplay(3);
            break;
        case 'plus':
            operation = '+';
            showDisplay(operation);
            break;
        case 'zero':
            firstOrSecond(operation, 0);
            showDisplay(0);
            break;
            case 'point':
                firstOrSecond(operation, ".")
            break;
        case 'eql':
            doOperation(firstNumb, secondNumb, operation);
            displ.value = result;
            console.log(clearNumbs(firstNumb, secondNumb));
            break;
}});



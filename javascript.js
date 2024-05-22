let displ=document.querySelector(".display");
const container=document.querySelector(".calcLayout");
let result=0;
const delButton=document.getElementById("del");
function checkForPeriod(arrToCheck){
    let hasPeriod;
for(let is=0; is<=arrToCheck.length-1; is++){
if(arrToCheck[is]=="."){
    hasPeriod=is;
    break;
}
else{
    hasPeriod=-1;
};
};
return hasPeriod;
};
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

function firstOrSecond(opera, vale){
    if(opera == "+" || opera == "-" || opera =="/" || opera == "*" || opera=="%" || opera =="="){
        secondNumb.push(vale);
    }
    else{
        firstNumb.push(vale);
    };
};
function doOperation(first, second, ope){
    let realFirst=0;
    let realSecond=0;
    let afterPeriod1=false;
    let afterPeriod2=false;
    let containsPeriod1 = checkForPeriod(first);
    let containsPeriod2 = checkForPeriod(second);
for(i=0; i<=first.length-1; i++){
    if(containsPeriod1==-1){
        realFirst+=first[i]*Math.pow(10,first.length-1-i);
    };
    if(containsPeriod1>-1 && first[i]=="."){
        afterPeriod1=true;
    continue;
    };
    if(containsPeriod1>-1 && afterPeriod1==false){
        realFirst+= first[i]* Math.pow(10,containsPeriod1-i-1);
    }
    else if(containsPeriod1>-1 && afterPeriod1==true){
        realFirst+= first[i]* Math.pow(10,-(i-containsPeriod1));
};
};
for(k=0; k<=second.length-1; k++){
    if(containsPeriod2==-1){
        realSecond+=second[k]*Math.pow(10,second.length-1-k);
    };
    if(containsPeriod2>-1 && second[k]=="."){
        afterPeriod2=true;
    continue;
    };
    if(containsPeriod2>-1 && afterPeriod2==false){
        realSecond+= second[k]* Math.pow(10,containsPeriod2-k-1);
    }
    else if(containsPeriod2>-1 && afterPeriod2==true){
        realFirst+= second[k]* Math.pow(10,-(k-containsPeriod2));
};
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


return result;
};
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
            displ.value='';
            clearNumbs(firstNumb, secondNumb);
            result=0;
            operation = 1;
            break;
        case 'perc':
            /*operation = '%';
            showDisplay(operation);*/
            result=firstNumb.join('')/100;
            displ.value=result;
            clearNumbs(firstNumb, secondNumb);
            firstNumb.push(result);
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
                firstOrSecond(operation, ".");
                showDisplay(".");
            break;
        case 'eql':
            doOperation(firstNumb, secondNumb, operation);
            displ.value = result;
            clearNumbs(firstNumb, secondNumb);
            operation=1;
            const finalArray=Array.from(String(result), Number);
            firstNumb=finalArray;
            //firstNumb.push(result);

            break;
            case 'del':
            if(operation == "+" || operation == "-" || operation =="/" || operation == "*" || operation =="="){
                secondNumb.splice(secondNumb.length-1, 1);
                displ.value=secondNumb.join('');
            }
            else{
                firstNumb.splice(firstNumb.length-1, 1);
                displ.value=firstNumb.join('');
            };
            break;
}});

/*let newArr=[ 3, 5, 6, "."];
console.log(checkForPeriod(newArr));*/


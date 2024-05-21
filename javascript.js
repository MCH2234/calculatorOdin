let displ=document.querySelector(".display");
const container=document.querySelector(".calcLayout");
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
            total =0;
            break;
        case 'perc':
            operation = '%';
            break;
        case 'div':
            operation = '/';
            break;
            case 'sev':
                firstOrSecond(operation, 7);
            break;
        case 'eig':
            firstOrSecond(operation, 8);
            break;
        case 'nin':
            firstOrSecond(operation, 9);
            break;

            case 'mul':
            operation="*"
            break;

            case 'for':
            firstOrSecond(operation, 4);
            break;
        case 'fiv':
            firstOrSecond(operation, 5);
            break;
        case 'six':
            firstOrSecond(operation, 6);
            break;

            case 'min':
                operation = '-';
            break;
        case 'one':
            firstOrSecond(operation, 1);
            break;
        case 'two':
            firstOrSecond(operation, 2);
            break;

            case 'thr':
                firstOrSecond(operation, 3);
            break;
        case 'plus':
            operation = '+';
            break;
        case 'zero':
            firstOrSecond(operation, 0);
            break;
            case 'point':
                firstOrSecond(operation, ".")
            break;
        case 'eql':
            alert(doOperation(firstNumb, secondNumb, operation));
            break;
}});



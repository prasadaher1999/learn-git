add = (n1,n2)=>{
    return n1+n2;
}
sub = (n1,n2)=>{
    return n1-n2;
}
div = (n1,n2)=>{
    return n1/n2;
}

let sum = add(1,2);
let subtraction = sub(1,2);
let divison = div(4,2);

console.log("Addition =",sum);
console.log("Subtraction =",subtraction);
console.log("Division =",divison);


//check postive or negative
let a=-12;
if(a>0){
    console.log(a,"is positive");
}else{
    console.log(a,'is negative');
}
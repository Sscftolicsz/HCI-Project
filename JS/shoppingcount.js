var btn = document.getElementById('btn');
var spn = document.getElementById('total-counter');
let count = 0;
function cot(){
    count+=1;
    document.getElementById('total-counter').innerHTML=count;
    console.log(count);
}
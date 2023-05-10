let count = 0 ;

document.getElementById("btndecrease").onclick = function(){
    count -=1;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("btnincrease").onclick = function(){
    count +=1;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("btnreset").onclick = function(){
    count =0;
    document.getElementById("countLabel").innerHTML = count;
}
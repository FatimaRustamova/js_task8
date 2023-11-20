for (let i = 1; i <= 20; i++) {
    let myDiv = document.getElementById("div" + i);
    if(i % 2 == 0){
        myDiv.style.backgroundColor = "red";
    }
    else{
        myDiv.style.backgroundColor = "yellow";
    }
    if(i % 5 == 0){
        myDiv.style.backgroundColor = "blue";
    }
}
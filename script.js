document.getElementById("roll").addEventListener("click",rollDice)

let member1 = document.getElementById("member-1")
let member2 = document.getElementById("member-2")
let member3 = document.getElementById("member-3")
let winner = document.getElementById("winner")

function rollDice(){
    randomNumber1 = Math.floor(Math.random() * (7 - 1) + 1);
    randomNumber2 = Math.floor(Math.random() * (7 - 1) + 1);
    randomNumber3 = Math.floor(Math.random() * (7 - 1) + 1);

    member1.innerHTML = randomNumber1;
    member2.innerHTML = randomNumber2;
    member3.innerHTML = randomNumber3;

    member1.style.backgroundColor = "whitesmoke"
    member2.style.backgroundColor = "whitesmoke"
    member3.style.backgroundColor = "whitesmoke"
    if(randomNumber1 == randomNumber2 && randomNumber1 == randomNumber3){
        winner.innerHTML = "Draw " + randomNumber1;
        member1.style.backgroundColor = "blue";
        member2.style.backgroundColor = "blue";
        member3.style.backgroundColor = "blue";
        member1.style.color = "white";
        member2.style.color = "white";
        member3.style.color = "white";
    }
    else if(randomNumber1 > randomNumber2 && randomNumber1 > randomNumber3){
        winner.innerHTML = "Member-1 win " + randomNumber1;
        member1.style.backgroundColor = "green";
        member1.style.color = "white";
        if(randomNumber2 > randomNumber3){
            member2.style.backgroundColor = "yellow";
            member2.style.color = "black";
            member3.style.backgroundColor = "red";
            member3.style.color = "white"
        }
        else if(randomNumber2 == randomNumber3){
            member2.style.backgroundColor = "blue";
            member3.style.backgroundColor = "blue";
            member2.style.color = "white";
            member3.style.color = "white";
        }
        else{
            member3.style.backgroundColor = "yellow";
            member3.style.color = "black";
            member2.style.backgroundColor = "red";
            member2.style.color = "white"
        }
    }
    else if(randomNumber2 > randomNumber1 && randomNumber2 > randomNumber3){
        winner.innerHTML = "Member-2 win " + randomNumber2;
        member2.style.backgroundColor = "green";
        member2.style.color = "white";
        if(randomNumber1 > randomNumber3){
            member1.style.backgroundColor = "yellow";
            member1.style.color = "black";
            member3.style.backgroundColor = "red";
            member3.style.color = "white"
        }
        else if(randomNumber1 == randomNumber3){
            member1.style.backgroundColor = "blue";
            member3.style.backgroundColor = "blue";
            member1.style.color = "white";
            member3.style.color = "white";
        }
        else{
            member3.style.backgroundColor = "yellow";
            member3.style.color = "black";
            member1.style.backgroundColor = "red";
            member1.style.color = "white"
        }
    }
    else if(randomNumber1 == randomNumber2 && randomNumber1 > randomNumber3 ){
        winner.innerHTML = "Draw between Member-1 & Member-2 = " + randomNumber2;
        member1.style.backgroundColor = "blue";
        member2.style.backgroundColor = "blue";
        member1.style.color = "white";
        member2.style.color = "white";
        member3.style.backgroundColor = "red";
        member3.style.color = "white";
    }
    else if(randomNumber1 == randomNumber2 && randomNumber1 < randomNumber3 ){
        winner.innerHTML = "Member-3 win " + randomNumber3;
        member1.style.backgroundColor = "blue";
        member2.style.backgroundColor = "blue";
        member1.style.color = "white";
        member2.style.color = "white";
        member3.style.backgroundColor = "green";
        member3.style.color = "white";
    }
    else if(randomNumber2 == randomNumber3 && randomNumber2 > randomNumber1 ){
        winner.innerHTML = "Draw between Member-2 & Member-3 = " + randomNumber2;
        member2.style.backgroundColor = "blue";
        member3.style.backgroundColor = "blue";
        member2.style.color = "white";
        member3.style.color = "white";
        member1.style.backgroundColor = "red";
        member1.style.color = "white";
    }
    else if(randomNumber2 == randomNumber3 && randomNumber2 < randomNumber1 ){
        winner.innerHTML = "Member-1 win " + randomNumber1;
        member2.style.backgroundColor = "blue";
        member3.style.backgroundColor = "blue";
        member2.style.color = "white";
        member3.style.color = "white";
        member1.style.backgroundColor = "green";
        member1.style.color = "white";
    }
    else{
        winner.innerHTML = "Member-3 win " + randomNumber3;
        member3.style.backgroundColor = "green";
        member3.style.color = "white";
        if(randomNumber2 > randomNumber1){
            member2.style.backgroundColor = "yellow";
            member2.style.color = "black";
            member1.style.backgroundColor = "red";
            member1.style.color = "white"
        }
        else if(randomNumber1 == randomNumber2){
            member1.style.backgroundColor = "blue";
            member2.style.backgroundColor = "blue";
            member1.style.color = "white";
            member2.style.color = "white";
        }
        else{
            member1.style.backgroundColor = "yellow";
            member1.style.color = "black";
            member2.style.backgroundColor = "red";
            member2.style.color = "white"
        }
    }
}

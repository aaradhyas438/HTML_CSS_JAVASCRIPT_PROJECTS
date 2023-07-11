let user = prompt("Enter S, W or G")
let computerI = Math.floor(Math.random() * 3);
let computer = ["S", "W", "G"][computerI]

const match = (computer, user)=>{
    if(computer === user){
        return "Nobody"
    }
    else if(computer === "S" && user === "W"){
        return "computer"
    }
    else if(computer === "S" && user==="G"){
        return "user"
    }
    else if(computer === "G" && user==="W"){
        return "user"
    }
    else if(computer === "G" && user==="S"){
        return "computer"
    }
    else if(computer === "W" && user == "S"){
        return "user"
    }
    else if(computer === "W" && user === "G"){
        return "computer"
    }
}
let result = match(computer, user)
document.write(`COMPUTER: ${computer}<br> User:${user}<br>The winner is: ${result.toUpperCase()}`)

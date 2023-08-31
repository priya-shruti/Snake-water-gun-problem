let user=prompt("Enter S,W or G")
let cpu=Math.floor(Math.random()*3)  ;
let cpu=["S","W","G"] [cpu]

const match=(cpu,user)=> {
    if(cpu==user){
        return "Nobody. Match is tied"
    }
    else if(cpu=="S" && user=="W") {
        return "cpu"
    }
    else if(cpu=="S" && user=="G") {
        return "user"
    }
    else if(cpu=="G" && user=="W") {
        return "user"
    }
    else if(cpu=="G" && user=="S") {
        return "cpu"
    }
    else if(cpu=="W" && user=="G") {
        return "user"
    }
    else if(cpu=="W" && user=="S") {
        return "user"
    }
}
let result=match(cpu,user)
document.write("The winner is:"+result)
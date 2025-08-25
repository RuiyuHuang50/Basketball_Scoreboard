let homeEL = document.getElementById("home-el")
let guestEL = document.getElementById("guest-el")

let homeCount =0
let guestCount =0

function home1Increment(){
    homeCount = homeCount+1
    homeEL.innerText = homeCount
}

function home2Increment(){
    homeCount = homeCount+2
    homeEL.innerText = homeCount
}
function home3Increment(){
    homeCount = homeCount+3
    homeEL.innerText = homeCount
}
function guest1Increment(){
    guestCount = guestCount+1
    guestEL.innerText = guestCount
}
function guest2Increment(){
    guestCount = guestCount+2
    guestEL.innerText = guestCount
}
function guest3Increment(){
    guestCount = guestCount+3
    guestEL.innerText = guestCount
}


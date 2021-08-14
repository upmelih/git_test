let count = 0
let countEl = document.getElementById("count-el")
let savePerson = document.getElementById("save-person")

function counter(){
    count += 1
    countEl.innerText = count
}

function saver(){
    let countStr = count + " - "
    savePerson.textContent += countStr
}

/*
let count = 0
let countEl = document.getElementById("count-el")
let countBtn = document.getElementById("count-btn")
let savePerson = document.getElementById("save-person")
let saveBtn = document.getElementById("save-btn")

countBtn.onclick = function(){
    count += 1
    countEl.innerText= count
}

saveBtn.onclick= function(){
    let countStr= count + " - "
    savePerson.innerText+= countStr
}
*/
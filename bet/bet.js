numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
colors = ["red", "blue", "green", "yellow", "rgba(0,0,0,0.6)"]
let colorsLooped = []
let num = []
let col = document.querySelectorAll(".divs")
let nos = document.querySelectorAll(".no")
let height = document.querySelector(".height")
let newNo;





function getArray() {
    for (i = 0; i < 6; i++) {
        let number = numbers[getRandomNo()]
        num.push(number)
    }
    


    let newArray = num.reduce((number, no) => number.indexOf(no) !== -1 ? number : [...number, no], [])
    

    while(newArray.length !==6){
        let newNo = numbers[getRandomNo()]
        newArray.indexOf(newNo) === -1 ? newArray.push(newNo):newArray
    }
return (newArray)
}


let arr = getArray()


// //this is to derive a random no/colors

function getRandomColor() {
    return Math.floor(Math.random() * colors.length)
}

function getRandomNo() {
    return Math.floor(Math.random() * numbers.length)
}

//this occurs when the window loads
window.addEventListener("DOMContentLoaded", function () {
    
    col.forEach(function (color) {
        color.style.background = colors[getRandomColor()]
    })
    
    nos.forEach((no,i) =>
    no.innerHTML = arr[i] )


})








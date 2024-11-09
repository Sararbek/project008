const countNumber = document.querySelector("#countNumber")
const changingText = document.querySelector("#changingText")

let offset = 0
let set = 0
let imWords = ["Subhanalloh", "Alhamdulillah", "Allohu Akbar"]

function inc(){
    offset++
    set++
    countNumber.innerHTML = offset
    if(offset === 33){
        offset = 0
    }

    if(set <= 33){
        changingText.innerHTML = imWords[0]
    }else if(set > 33 && set <= 66){
        changingText.innerHTML = imWords[1]
    }else{
        changingText.innerHTML = imWords[2]
    }
    if(set > 98){
        set = 0
    }
}

function reset(){
    offset = 0
    set = 0
    countNumber.innerHTML = offset
    changingText.innerHTML = imWords[0]
}


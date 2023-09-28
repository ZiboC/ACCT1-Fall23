let firstSection = document.getElementById("sectionOne")
let buttunChangeColor = document.getElementById("colorChangeBTN")
let buttunGenColor = document.getElementById("colorGenBTN")
let buttunChangeImage = document.getElementById("imageChangeBTN")
let firstImage = document.getElementById("imageOne")
let buttonAddText = document.getElementById("addTextBTN")

console.log(buttunChangeColor)

let changeColor = function(){
    firstSection.style.backgroundColor = "rgb(178, 250, 170)"
}

let generateColor = function(){
    let redComp = Math.random()*255
    let greenComp = Math.random()*255
    let blueComp = Math.random()*255
    
    firstSection.style.backgroundColor = "rgb("+redComp+", "+greenComp+", "+blueComp+")"
}

let changeImage = function(){
    firstImage.classList.toggle("image-2")
    console.log(firstImage.classList[0])
    if(firstImage.classList[0] == "image-2"){
        firstImage.src = "russian blue cat.jpeg"
    }
    else{
        firstImage.src = "russian blue cat2.jpeg"
    }
}

let addText = function(){
    let myParag = document.createElement("p")
    myParag.innerText = "Hello, this is Lego"
    myParag.style.fountWeight = "bolder"
    firstSection.appendChild(myParag)
}  


firstSection.style.backgroundColor = "rgb(250, 170, 170)"

buttunChangeColor.addEventListener("click", changeColor)
buttunGenColor.addEventListener("click", generateColor)
buttunChangeImage.addEventListener("click", changeImage)
buttonAddText.addEventListener("click", addText)
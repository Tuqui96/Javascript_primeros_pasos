document.getElementById("elementh1").innerHTML = "¿Qué tal?"
document.getElementById("elementp").innerHTML = "A las buenas tardes."



document.getElementById("Btn1").addEventListener("click", cambiandoBtn1)

function cambiandoBtn1() {
    document.getElementById("elementh1").innerHTML = "Muy bien"
    document.getElementById("elementp").innerHTML = "Enga agur!"
}



document.getElementById("Btn2").addEventListener("click", cambaindoBtn2)

function cambaindoBtn2() {
    document.getElementById("gato").src = "https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg?auto=compress&cs=tinysrgb&w=1600"
}



document.getElementById("Btn3").addEventListener("click", cambiandoBtn3)

function cambiandoBtn3() {
    document.getElementById('boxi').classList.toggle("blue");
}


/*document.getElementById('mydiv').className = 'newclass';*/
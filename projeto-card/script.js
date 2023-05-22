let likeCount = 0
let likeCount2 = document.getElementById("like-count")
let likeCaixa = document.querySelector(".like-caixa")
let likeCoracao = document.querySelector("#like-coracao img")

likeCaixa.addEventListener("click", likeButton)

function likeButton(buttonclick) {
    buttonclick.stopPropagation()  //evitar a propagação do evento de clique
    likeCount++
    likeCount2.innerText = likeCount
    likeCaixa.classList.add("cor")
    likeCoracao.src = "svg/coracaover.svg"
}

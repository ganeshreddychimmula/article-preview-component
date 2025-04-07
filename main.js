let shareButton = document.querySelector("#share-button");
let shareOptions = document.querySelector(".article-card__share-options");

shareButton.addEventListener("click", function () {
    let display = shareOptions.style.display;
    if (!display || display=="none"){
        shareOptions.style.display = "flex";
        shareButton.classList.add('article-card__share-button--active')
    }else{
        shareOptions.style.display = "none";
        shareButton.classList.remove('article-card__share-button--active')
    }
})
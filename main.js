let shareButton = document.querySelector("#share-button");

shareButton.addEventListener("click", function () {
    let shareOptions = document.querySelector(".article-footer__share-menu");
    let display = shareOptions.style.display;
    if (!display || display=="none"){
        shareOptions.style.display = "flex";
    }else{
        shareOptions.style.display = "none";
    }
})
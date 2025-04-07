let shareButton = document.querySelector("#share-button");

shareButton.addEventListener("click", function () {
    let shareOptions = document.querySelector(".article-footer__share-menu--mobile");
    let display = shareOptions.style.display;
    let footerNode = document.querySelector(".article-card__footer");
    if (!display || display=="none"){
        shareOptions.style.display = "flex";
    }else{
        shareOptions.style.display = "none";
    }
})
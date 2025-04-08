let shareButton = document.querySelector("#share-button");
let shareOptions = document.querySelector(".article-card__share-options");

// shareButton.addEventListener("click", function () {
//     let display = shareOptions.style.display;
//     if (!display || display=="none"){
//         shareOptions.style.display = "flex";
//         shareButton.classList.add('article-card__share-button--active')
//     }else{
//         shareOptions.style.display = "none";
//         shareButton.classList.remove('article-card__share-button--active');
//     }
// })

shareButton.addEventListener("click", ()=>{
    shareButton.classList.toggle('article-card__share-button--active');
    shareOptions.classList.toggle('article-card__share-options--active');
})

// Closes share box when clicked outside
document.addEventListener('click', (e)=> {
    if(!shareButton.contains(e.target) && !shareOptions.contains(e.target)) {
        shareButton.classList.remove('article-card__share-button--active');
        shareOptions.classList.remove('article-card__share-options--active')
    }
})

// keyboard accesibility
shareButton.addEventListener("keydown", (e) => {
    if(e.key === "Enter" || e.key === ""){
        e.preventDefault();
        shareButton.click();
    }
})

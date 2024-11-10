document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        document.querySelector(".loading-container").style.opacity = "0";
    }, 2000);

    setTimeout(() => {
        document.querySelector(".loading-container").style.display = "none";
        document.querySelector(".fest-logo").style.display = "flex";
    }, 3000);
});

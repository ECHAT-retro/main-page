//buttons
document.querySelector("#homebtn").addEventListener("click", () => {
    document.querySelector("#home").style.scale = "1"
    document.querySelector("#versions").style.scale = "0"
});

document.querySelector("#versionsbtn").addEventListener("click", () => {
    document.querySelector("#home").style.scale = "0"
    document.querySelector("#versions").style.scale = "1"
});
function upDate(previewPic) {
    console.log("Event triggered for:", previewPic.alt);
    const displayDiv = document.getElementById("image");
    displayDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    displayDiv.innerHTML = previewPic.alt;
}

function unDo() {
    const displayDiv = document.getElementById("image");
    displayDiv.style.backgroundImage = "url('')";
    displayDiv.innerHTML = "Hover over or focus on an image below to display here.";
}

function addTabFocus() {
    console.log("onload event triggered: adding tabindex attributes...");
    const images = document.querySelectorAll(".preview");

    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
    }
}
var toggleButton = document.getElementById("toggleButton");
var photoContainer = document.getElementById("photoContainer");

toggleButton.addEventListener("click", function () {
    if (photoContainer.style.display === "none") {
        photoContainer.style.display = "block";
    } else {
        photoContainer.style.display = "none";
    }
});
const banner = document.getElementById("banner");
const updateButton = document.getElementById("updateBtn");

function updateBannerText() {
banner.innerHTML = "Updated Banner";
}

updateButton.addEventListener("click", updateBannerText);

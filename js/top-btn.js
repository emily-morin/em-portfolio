// get button
const topButton = document.getElementById("top-button");

// display button after user scrolls down 20px from top of page
function showButton () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = "block"; 
    } else {
        topButton.style.display = "none"; 
    }
}

// bring user back to top of page when button is clicked
function scrollToTop () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
// public/script.js
function adjustFontSize(element) {
    var maxHeight = element.clientHeight;
    while (element.scrollHeight > maxHeight) {
        var currentSize = parseFloat(window.getComputedStyle(element, null).getPropertyValue('font-size'));
        element.style.fontSize = (currentSize - 1) + 'px';
    }
}

function setJoke(setup, delivery) {
    var frontDiv = document.querySelector('.flip-card-front');
    var backDiv = document.querySelector('.flip-card-back');

    frontDiv.innerHTML = setup;
    backDiv.innerHTML = delivery;

    adjustFontSize(frontDiv);
    adjustFontSize(backDiv);
}

// Call setJoke when the page loads
document.addEventListener('DOMContentLoaded', function () {
    var setup = "<%= setup %>";
    var delivery = "<%= delivery %>";
    setJoke(setup, delivery);
});

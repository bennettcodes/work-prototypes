window.cancelRequestAnimFrame = (function () {
    return window.cancelAnimationFrame ||
        window.webkitCancelRequestAnimationFrame ||
        window.mozCancelRequestAnimationFrame ||
        window.oCancelRequestAnimationFrame ||
        window.msCancelRequestAnimationFrame ||
        clearTimeout
})();

window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function ( /* function */ callback, /* DOMElement */ element) {
            return window.setTimeout(callback, 1000 / 60);
        };
})();

const sarafiZoomPrevention = function () {
    document.addEventListener("touchstart", function () {}, true);
    document.documentElement.addEventListener('touchstart', function (event) {
        if (event.touches.length > 1) {
            event.preventDefault();
        }
    }, false);
    var lastTouchEnd = 0;
    document.documentElement.addEventListener('touchend', function (event) {
        var now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
}

const cl = function (entry) {
    console.log(entry);
};
const raf = function (entry) {
    window.requestAnimFrame(entry);
};
const caf = function (entry) {
    window.cancelRequestAnimFrame(entry);
};
const random = function (min, max) {
    max = max + 1;
    return Math.floor(Math.random() * (max - min) + min);
}
const min = function (arr) {
    return Math.min.apply(Math, arr);
}
const max = function (arr) {
    return Math.max.apply(Math, arr);
}
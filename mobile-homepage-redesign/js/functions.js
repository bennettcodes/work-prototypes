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
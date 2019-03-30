var loadingDone = false;

function plsLoad(props) {

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

    window.onload = function () {

        $(document).ready(function () {

            var isActive = props.isActive || false;

            if (isActive) {

                var
                    bodyHTML = $('body, html'),
                    body = $('body');

                body.prepend(
                    `<div id="loading">
                <div id="loading-bar">
                    <div id="loading-bar-inner">
                        <div id="loading-bar-text" class="loading-text-count">0%</div>
                        <div id="loading-bar-progress"></div>
                    </div>
                    <div id="loading-text" class="loading-text-count">0%</div>
                </div>
            </div>`
                )
            }

            var
                images = $('img'),
                imageArr = [],
                windowWidthOld = window.innerWidth,
                windowWidthNew = window.innerWidth,
                windowHeightOld = window.innerHeight,
                windowHeightNew = window.innerHeight,
                windowInnerWidthHalf = windowWidthNew / 2,
                windowInnerHeightHalf = windowHeightNew / 2,

                hiddenClass,
                request,

                imageContainer = $('#images'),
                fakeImage,
                loading = $('#loading'),
                loadingHeight,
                loadingText = $('#loading-text'),
                loadingBarText = $('#loading-bar-text'),
                loadingTextCount = $('.loading-text-count'),
                loadingBarHeight,
                loadingBarTextHeight,
                loadingBarY,
                loadingBarTextY,
                loadingBar = $('#loading-bar'),
                loadingBarInner = $('#loading-bar-inner'),
                loadingBarProgress = $('#loading-bar-progress'),

                text = $('#text'),

                imagesDone = false,
                loadAnimDone = false,
                percentDone = false,

                testImages = props.testImages || false,
                fakeImageLoad = props.fakeImageLoad || false,

                barWidth = props.barWidth || 500,
                barHeight = props.barHeight || props.barWidth * 0.3,

                beforeEndLoadFunctions = props.beforeEndLoadFunctions || null,
                afterEndLoadFunctions = props.afterEndLoadFunctions || null,

                plsLoadBackground = props.plsLoadBackground || '#ffffff',

                barTextFontSize = props.barTextFontSize || 50,
                barTextFontWeight = props.barTextFontWeight || 300,
                barTextBelowColor = props.barTextBelowColor || '#000000',
                barTextAboveColor = props.barTextAboveColor || '#ffffff',

                barGradientDirection = props.barGradientDirection || 'bottom left',
                barGradientColorStart = props.barGradientColorStart || '#c0c0c0',
                barGradientColorEnd = props.barGradientColorEnd || '#858585',

                barProgressGradientDirection = props.barProgressGradientDirection || 'bottom left',
                barProgressGradientColorStart = props.barProgressGradientColorStart || '#d01a75',
                barProgressGradientColorEnd = props.barProgressGradientColorEnd || '#8f0b4c',

                barBackground = props.barBackground != 'gradient' ? (props.barBackground || '#efefef') : `-webkit-linear-gradient(${barGradientDirection}, ${barGradientColorStart} 0%, ${barGradientColorEnd} 100%)`,
                barProgressBackground = props.barProgressBackground != 'gradient' ? (props.barProgressBackground || '#ff0000') : `-webkit-linear-gradient(${barProgressGradientDirection}, ${barProgressGradientColorStart} 0%, ${barProgressGradientColorEnd} 100%)`,

                newImages = $('#new-images'),
                plsLoadImage = $('.pls-load'),
                plsLoadImageNew,
                plsLoadPaths = [],
                newplsLoadImages = [],

                progress = 0,
                counter = 0,
                total = plsLoadImage.length,
                interval = 1,
                breakPoint = 1,

                loadEndDuration = 1,
                loadEndEase = Quint.easeInOut

            function styles() {
                TweenMax.set(loading, {
                    width: window.innerWidth,
                    height: window.innerHeight,
                    position: 'fixed',
                    overflow: 'hidden',
                    top: 0,
                    left: 0,
                    background: plsLoadBackground,
                    opacity: 1,
                    backgroundColor: 'white',
                    zIndex: 9999
                });

                TweenMax.set(loadingBar, {
                    width: barWidth,
                    height: barHeight,
                    position: 'fixed',
                    overflow: 'hidden',
                    background: barBackground,
                    zIndex: 10
                });

                TweenMax.set(loadingBar, {
                    x: loading.width() / 2 - loadingBar.width() / 2,
                    y: loading.height() / 2 - loadingBar.height() / 2
                });

                TweenMax.set(loadingBarInner, {
                    width: barWidth,
                    height: barHeight,
                    position: 'absolute',
                    '-webkit-clip-path': 'inset(0px 100% 0px 0px)',
                    top: 0,
                    left: 0,
                    zIndex: 10
                });

                TweenMax.set(loadingBarProgress, {
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    background: barProgressBackground,
                    top: 0,
                    left: 0,
                    zIndex: 0
                });

                TweenMax.set(imageContainer, {
                    width: window.innerWidth,
                    height: window.innerHeight,
                    position: 'absolute',
                    overflowX: 'hidden',
                    top: 0,
                    left: 0,
                    zIndex: 0
                });

                TweenMax.set(loadingTextCount, {
                    width: '100%',
                    height: '1em',
                    lineHeight: '1em',
                    position: 'absolute',
                    color: 'black',
                    fontSize: barTextFontSize,
                    fontWeight: barTextFontWeight,
                    textAlign: 'center',
                    top: 0,
                    left: 0,
                    opacity: 1
                });

                loadingTextCount.html('0%');

                TweenMax.set(loadingTextCount, {
                    y: loadingBar.height() / 2 - loadingTextCount.height() / 2
                })

                TweenMax.set(loadingText, {
                    color: barTextBelowColor,
                    zIndex: 0
                });

                TweenMax.set(loadingBarText, {
                    color: barTextAboveColor,
                    zIndex: 20
                });
            }

            styles();

            function makeImages() {
                setTimeout(function () {
                    for (var i = 0; i < total; i++) {
                        plsLoadPaths.push(plsLoadImage.eq(i).data('src'));
                        newplsLoadImages.push(new Image());
                        newplsLoadImages[i].src = plsLoadPaths[i];
                        newplsLoadImages[i].className = `${plsLoadImage.eq(i).attr('class')} pls-load-new`;
                        newplsLoadImages[i].onload = newImageLoaded;
                    }
                }, 0)
            }

            function newImageLoaded() {
                setTimeout(function () {
                    counter++;
                    progress = (counter / total) * 100;
                    plsLoadImage.hide();
                    if (Math.floor(progress) > breakPoint) {
                        loadingTextCount.html(`${Math.floor(progress)}%`);
                        TweenMax.to(loadingBarInner, 0.5, {
                            '-webkit-clip-path': `inset(0px ${100 - progress}% 0px 0px)`,
                            ease: Quad.easeOut
                        }, 0);
                        breakPoint += interval;
                        if (Math.floor(progress) === 100) {
                            endLoad();
                        }
                    }
                }, 0)
            }

            function endLoad() {
                setTimeout(function () {
                beforeEndLoadFunctions ? beforeEndLoadFunctions() : null;
                    TweenMax.set(plsLoadImage, {
                        width: '100%',
                        height: 'auto'
                    });
                    loadingTextCount.html('100%');
                    for (var i = 0; i < newplsLoadImages.length; i++) {
                        plsLoadImage.eq(i).replaceWith(newplsLoadImages[i]);
                    }
                    plsLoadImage = $('.pls-load');
                    plsLoadImage.show();
                    TweenMax.to(loadingBarInner, loadEndDuration, {
                        '-webkit-clip-path': `inset(0px 0% 0px 0px)`,
                        ease: Expo.easeOut
                    }, 0);
                    TweenMax.to(loading, loadEndDuration, {
                        height: 0,
                        y: window.innerHeight / 2,
                        ease: loadEndEase,
                        delay: 0.25,
                        onComplete: function () {
                            TweenMax.set(loading, {
                                display: 'none'
                            });
                            cancelRequestAnimFrame(request);
                            afterEndLoadFunctions ? afterEndLoadFunctions() : null;
                        }
                    }, 0);
                    TweenMax.to(loadingBar, loadEndDuration, {
                        y: ((loading.height() / 2) + loadingBar.height() / 2) - (window.innerHeight / 2 + loadingBar.height() / 2),
                        height: 0,
                        delay: 0.25,
                        ease: loadEndEase
                    }, 0);
                    TweenMax.to(loadingTextCount, loadEndDuration, {
                        y: `-${loadingTextCount.height() / 2}`,
                        delay: 0.25,
                        ease: loadEndEase
                    }, 0);
                }, 0);
            }

            makeImages();

            function keepLoadVCentered() {
                setTimeout(function () {
                    TweenMax.set(loadingTextCount, {
                        y: loadingBar.height() / 2 - loadingTextCount.height() / 2
                    });
                    TweenMax.set(loadingBar, {
                        y: loading.height() / 2 - loadingBar.height() / 2
                    });
                    request = requestAnimFrame(keepLoadVCentered);
                }, 0);
            }
            //            keepLoadVCentered();
        })
    }
}
// START MAIN FUNCTIONS //

// shim layer with setTimeout fallback
window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
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

//sarafiZoomPrevention();

const raf = function (entry) {
    window.requestAnimFrame(entry);
};
const caf = function (entry) {
    window.cancelAnimationFrame(entry);
};
const random = function (min, max) {
    max = max + 1;
    return Math.floor(Math.random() * (max - min) + min);
}
const min = function (arr) {
    return Math.min.apply(Math, arr); // 3
}
const max = function (arr) {
    return Math.max.apply(Math, arr); // 3
}
const cl = function (entry) {
    console.log(entry);
}

String.prototype.toHHMMSS = function () {
    var sec_num = parseInt(this, 10); // don't forget the second param
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    return hours + ':' + minutes + ':' + seconds;
}

String.prototype.toMMSS = function () {
    var sec_num = parseInt(this, 10); // don't forget the second param
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    return minutes + ':' + seconds;
}

String.prototype.toMM = function () {
    var sec_num = parseInt(this, 10); // don't forget the second param
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    return minutes;
}

//END MAIN FUNCTIONS //

//START APP FUNCTIONS //

// START STYLE FUNCTION //

function style() {
    TweenMax.set(defineSectionPoint, {
        opacity: defineSectionPointOpacityStart
    }, 0);
    TweenMax.set(defineSectionPointIconSVG, {
        fill: 'rgba(255, 255, 255, 1)'
    }, 0);
    TweenMax.set(programToolsSectionPointIconSVG, {
        fill: 'rgba(255, 255, 255, 1)'
    }, 0);
    TweenMax.set(programToolsSectionPointIconSVG, {
        fill: 'rgba(255, 255, 255, 1)'
    }, 0);
    TweenMax.set(programToolsSectionPointLabel, {
        color: 'rgba(255, 255, 255, 1)'
    }, 0);
    section.each(function (i) {
        var current = section.eq(i)

        i % 2 === 0 ? current.addClass('white-bg') : current.addClass('light-grey-bg');

        current.attr('id') === 'stream-device-section' ? current.removeClass('white-bg').removeClass('light-grey-bg').addClass('dark-grey-bg') : null;
    });
    setTimeout(function () {
        container.show();
        TweenMax.set(logo, {
            left: heroContent.offset().left,
            opacity: 1
        }, 0);
        TweenMax.set(sectionMore, {
            height: hpFpo.outerHeight()
        }, 0);
        sectionSquareTrainerImg.imagesLoaded(function () {
            TweenMax.set(staggerSquaresTrainerImg, {
                opacity: 0.01
            }, 0);
        });
        sectionGallery.each(function (i) {
            var current = sectionGallery.eq(i),
                currentHeader = current.find('.section-gallery-header'),
                currentTilesContainer = current.find('.section-gallery-tiles-container'),
                currentTiles = current.find('.section-gallery-tiles'),
                currentTilesInner = current.find('.section-gallery-tiles-inner')

            TweenMax.set(currentTilesContainer, {
                width: currentTiles.length * current.outerWidth() + 100
            }, 0);
        });

        scrollBarWidth = getScrollBarWidth();
        TweenMax.set(sectionGalleryTilesRightArrow, {
            x: window.innerWidth - ((sectionGalleryTilesLeftArrow.outerWidth() * 2) + scrollBarWidth)
        }, 0);

        TweenMax.set(sectionGalleryTilesNav, {
            y: sectionGalleryTilesContainerOuter.outerHeight() + parseInt(sectionGalleryTilesContainer.css('top'))
        }, 0);

        sectionGalleryTileThumbImg.imagesLoaded(function () {
            initialScrollPosition =
                //        similarProgramsSectionOffsetTop = similarProgramsSection.offset().top; - headerHeight * headerHeightShrinkRate;
                initialScrollPosition = 0;

            TweenMax.set(sectionGalleryTileThumbOverlaySymbol, {
                lineHeight: `${sectionGalleryTileThumb.outerHeight()}px`,
                onComplete: function () {circlesRanOnce
                    TweenMax.set(bodyHTML, {
                        scrollTop: initialScrollPosition
                    }, 0);
                    pointsRanOnce = false;
                    programToolsRanOnce = false;
                    squaresRanOnce = false;
                    circlesRanOnce = false;
                    iconRanOnce = false;
                    TweenMax.set(container, {
                        opacity: 1,
                        userSelect: 'none'
                    });
                    loading.hide();
                }
            }, 0);
        });
        TweenMax.set(sectionGalleryTiles, {
            width: window.innerWidth
        }, 0);
        TweenMax.set(logo, {
            transformOrigin: 'left center'
        }, 0);
        //		styleCheckmarks();
        sectionCirclesHeight = sectionCircles.outerHeight();
        TweenMax.set(sectionBodcomTextMoreButton, {
            x: sectionBodcomTextMoreButton.parent('.section').outerWidth() * 0.5 - sectionBodcomTextMoreButton.outerWidth() * 0.5
        }, 0);
        TweenMax.set(sectionContentIconCircleInner, {
            perspective: 800,
            perspectiveOrigin: 'center center',
            transformStyle: '2d'
        }, 0);
        TweenMax.set(sectionVideoSliderNavItems, {
            x: sectionVideoSliderNav.outerWidth() * 0.5 - sectionVideoSliderNavItems.outerWidth() * 0.5
        }, 0);

        sectionFaq.each(function (i) {
            var current = sectionFaq.eq(i),
                currentText = current.find('.section-faq-text'),
                currentIcon = current.find('.section-faq-icon'),
                currentIconRing = current.find('.section-faq-icon-ring'),
                currentIconPlus = current.find('.section-faq-icon-plus')

            TweenMax.set(currentIconRing, {
                y: currentIcon.outerHeight() * 0.5 - currentIconRing.outerHeight() * 0.5
            }, 0);

        });

        TweenMax.set(getAllAccessButtonFixed, {
            //            height: header.outerHeight() * headerHeightShrinkRate,
//            top: header.outerHeight() * 0.5 - getAllAccessButtonFixed.outerHeight() * 0.5,
            right: heroContent.offset().left
        }, 0);

        rafEvents();
    }, 0);

    $(window).resize(function init() {
        TweenMax.set(logo, {
            left: heroContent.offset().left
        }, 0);
        defineYourselfSectionOffsetTop = defineYourselfSection.offset().top;
        defineSectionPointsOffsetTop = defineSectionPoints.offset().top;
        programToolsSectionPointsOffsetTop = programToolsSectionPoints.offset().top;
        whyPiyoWorksSquaresOffsetTop = whyPiyoWorksSquares.offset().top;
        sectionCirclesOffsetTop = bodCommunitySectionCircles.offset().top;
        personalCoachSectionOffsetTop = personalCoachSection.offset().top;
        realPiyoResultsSectionOffsetTop = realPiyoResultsSection.offset().top;
        piyoFaqsSectionOffsetTop = piyoFaqsSection.offset().top;
        similarProgramsSectionOffsetTop = similarProgramsSection.offset().top;
        setTimeout(function () {
            defineYourselfSectionOffsetTop = defineYourselfSection.offset().top;
            defineSectionPointsOffsetTop = defineSectionPoints.offset().top;
            programToolsSectionPointsOffsetTop = programToolsSectionPoints.offset().top;
            whyPiyoWorksSquaresOffsetTop = whyPiyoWorksSquares.offset().top;
            sectionCirclesOffsetTop = bodCommunitySectionCircles.offset().top;
            personalCoachSectionOffsetTop = personalCoachSection.offset().top;
            realPiyoResultsSectionOffsetTop = realPiyoResultsSection.offset().top;
            piyoFaqsSectionOffsetTop = piyoFaqsSection.offset().top;
            similarProgramsSectionOffsetTop = similarProgramsSection.offset().top;
        }, 0);
        sectionGallery.each(function (i) {
            var current = sectionGallery.eq(i),
                currentHeader = current.find('.section-gallery-header'),
                currentTilesContainer = current.find('.section-gallery-tiles-container'),
                currentTiles = current.find('.section-gallery-tiles'),
                currentTilesInner = current.find('.section-gallery-tiles-inner')

            TweenMax.set(currentTilesContainer, {
                width: currentTiles.length * current.outerWidth() + 100
            }, 0);
        });

        scrollBarWidth = getScrollBarWidth();
        TweenMax.set(sectionGalleryTilesRightArrow, {
            x: window.innerWidth - ((sectionGalleryTilesLeftArrow.outerWidth() * 2) + scrollBarWidth)
        }, 0);

        TweenMax.set(sectionGalleryTilesNav, {
            y: sectionGalleryTilesContainerOuter.outerHeight() + parseInt(sectionGalleryTilesContainer.css('top'))
        }, 0);

        sectionGalleryTileThumbImg.imagesLoaded(function () {
            TweenMax.set(sectionGalleryTileThumbOverlaySymbol, {
                lineHeight: `${sectionGalleryTileThumb.outerHeight()}px`
            }, 0);
        });
        //		styleCheckmarks();
        TweenMax.set(sectionVideoSliderNavItems, {
            x: sectionVideoSliderNav.outerWidth() * 0.5 - sectionVideoSliderNavItems.outerWidth() * 0.5
        }, 0);
        TweenMax.set(sectionBodcomTextMoreButton, {
            x: sectionBodcomTextMoreButton.parent('.section').outerWidth() * 0.5 - sectionBodcomTextMoreButton.outerWidth() * 0.5
        }, 0);

        TweenMax.set(getAllAccessButtonFixed, {
//            top: header.outerHeight() * 0.5 - getAllAccessButtonFixed.outerHeight() * 0.5,
            right: heroContent.offset().left
        }, 0);

        return init;
    }());
    hpFpo.imagesLoaded(function () {
        hpFpoHeight = hpFpo.outerHeight();
        TweenMax.set(sectionMore, {
            height: hpFpoHeight
        }, 0);
        !showHpFpo ? hpFpo.hide() : null;
    });
}

// END STYLE FUNCTION   //

$(window).resize(function () {
    TweenMax.set(sectionGalleryTiles, {
        width: window.innerWidth
    }, 0);
    readjustTiles();
});

function resizeActions() {

    hero.each(function (i) {
        var current = hero.eq(i),
            currentPlayIcon = current.find('.hero-play-point')

        TweenMax.set(currentPlayIcon, {
            x: current.outerWidth() * 0.5 - currentPlayIcon.outerWidth() * 0.5,
            y: current.outerHeight() * 0.5 - ((currentPlayIcon.outerHeight() * 0.5) * -0.5)
        });
    });
}

function pointsIntro(type) {
    switch (type) {
    case 'define':
        defineTl.clear();
        defineTl.timeScale(defineRate);

        defineTl.set(defineSectionPoint, {
            opacity: defineSectionPointOpacityStart,
            scale: 1.5
        }, 0);
        defineTl.set(defineSectionPointIconSVG, {
            fill: 'rgba(255, 255, 255, 1)'
        }, 0);
        defineTl.set(defineSectionPointLabel, {
            color: 'rgba(255, 255, 255, 1)'
        }, 0);
        defineTl.staggerTo(defineSectionPoint, 0.5, {
            opacity: 1,
            scale: 1,
            ease: Expo.easeOut
        }, 0.1, 0);
        defineTl.staggerTo(defineSectionPointIconSVG, 0.25, {
            fill: 'rgba(255, 0, 183, 1)',
            ease: Circ.easeIn
        }, 0.1, 0);
        defineTl.staggerTo(defineSectionPointLabel, 0.25, {
            color: 'rgba(255, 0, 183, 1)',
            ease: Circ.easeIn
        }, 0.1, 0);
        defineTl.staggerTo(defineSectionPointIconSVG, 0.25, {
            fill: 'rgba(86, 85, 90, 1)',
            ease: Circ.easeOut
        }, 0.1, 0.25);
        defineTl.staggerTo(defineSectionPointLabel, 0.25, {
            color: 'rgba(86, 85, 90, 1)',
            ease: Circ.easeOut
        }, 0.1, 0.25);
        break;
    case 'program tools':
        programToolsTl.clear();
        programToolsTl.timeScale(programToolsRate);
        programToolsTl.set(programToolsSectionPoint, {
            opacity: programToolsSectionPointOpacityStart,
            scale: 1.5
        }, 0);
        programToolsTl.set(programToolsSectionPointIconSVG, {
            fill: 'rgba(255, 255, 255, 1)'
        }, 0);
        programToolsTl.set(programToolsSectionPointLabel, {
            color: 'rgba(255, 255, 255, 1)'
        }, 0);
        programToolsTl.staggerTo(programToolsSectionPoint, 0.5, {
            opacity: 1,
            scale: 1,
            ease: Expo.easeOut
        }, 0.1, 0);
        programToolsTl.staggerTo(programToolsSectionPointIconSVG, 0.25, {
            fill: 'rgba(255, 0, 183, 1)',
            ease: Circ.easeIn
        }, 0.1, 0);
        programToolsTl.staggerTo(programToolsSectionPointLabel, 0.25, {
            color: 'rgba(255, 0, 183, 1)',
            ease: Circ.easeIn
        }, 0.1, 0);
        programToolsTl.staggerTo(programToolsSectionPointIconSVG, 0.25, {
            fill: 'rgba(86, 85, 90, 1)',
            ease: Circ.easeOut
        }, 0.1, 0.25);
        programToolsTl.staggerTo(programToolsSectionPointLabel, 0.25, {
            color: 'rgba(86, 85, 90, 1)',
            ease: Circ.easeOut
        }, 0.1, 0.25);
        break;
    default:
        break;
    }
}

function staggerSquares(squares) {
    var currentSquares = squares,
        currentSquaresHeader = currentSquares.find('.section-squares-header'),
        currentSquare = currentSquares.find('.section-square'),
        currentSquareTrainer = currentSquare.find('.section-square-trainer'),
        currentSquareTrainerImg = currentSquare.find('.section-square-trainer-img')

    staggerSquaresTl.clear();
    staggerSquaresTl.timeScale(staggerSquaresRate);

    staggerSquaresTl.set(currentSquareTrainerImg, {
        opacity: 0,
        y: 50
    }, 0);
    staggerSquaresTl.staggerTo(currentSquareTrainerImg, 0.5, {
        opacity: 1,
        y: 0,
        ease: Expo.easeOut
    }, 0.1);
}

function staggerCircles(circles) {
    var currentCircles = circles,
        currentCirclesInner = currentCircles.find('.section-circles-inner'),
        currentCircle = currentCircles.find('.section-circle'),
        easeConfig = easeConfigStart

    currentCircle.each(function (i) {
        /*  */
    });

    staggerCirclesTl.clear();
    staggerCirclesTl.timeScale(staggerCirclesRate);

    staggerCirclesTl.set(currentCircle, {
        opacity: staggerCirclesProps.opacity.start,
        x: staggerCirclesProps.x.start,
        y: staggerCirclesProps.y.start,
        scale: staggerCirclesProps.scale.start
    }, 0);
    staggerCirclesTl.staggerTo(currentCircle, staggerCirclesProps.duration, {
        opacity: staggerCirclesProps.opacity.end,
        x: staggerCirclesProps.x.end,
        y: staggerCirclesProps.y.end,
        scale: staggerCirclesProps.scale.end,
        ease: staggerCirclesProps.ease
    }, -0.025, 0);
}

function staggerCirclesBg(circlesBg) {
    var currentCirclesBg = circlesBg,
        currentCirclesInner = currentCirclesBg.find('.section-circles-bg-inner'),
        currentCircleBg = currentCirclesBg.find('.section-circle-bg'),
        easeConfig = easeConfigStart

    staggerCirclesBgTl.clear();
    staggerCirclesBgTl.timeScale(staggerCirclesBgRate);
    //    staggerCirclesBgTl.timeScale = 2;

    staggerCirclesBgTl.set(currentCircleBg, {
        opacity: staggerCirclesBgProps.opacity.start,
        x: staggerCirclesBgProps.x.start,
        y: staggerCirclesBgProps.y.start,
        scale: staggerCirclesBgProps.scale.start
    }, 0);
    staggerCirclesBgTl.staggerTo(currentCircleBg, staggerCirclesBgProps.duration, {
        opacity: staggerCirclesBgProps.opacity.end,
        x: staggerCirclesBgProps.x.end,
        y: staggerCirclesBgProps.y.end,
        scale: staggerCirclesBgProps.scale.end,
        ease: staggerCirclesBgProps.ease
    }, -0.0125, 0);
}

function shrinkHeader() {
    headerShrunk = true;
    TweenMax.to(header, 0.5, {
        height: headerHeightShrinkAmount,
        backgroundColor: 'rgba(0, 0, 0, 1)',
        ease: Expo.easeOut
    }, 0);
    TweenMax.to(logo, 0.5, {
        scale: logoScaleShrinkAmount,
        ease: Expo.easeOut
    }, 0);
}

function growHeader() {
    headerShrunk = false;
    TweenMax.to(header, 0.5, {
        height: headerHeight,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        ease: Expo.easeOut
    }, 0);
    TweenMax.to(logo, 0.5, {
        scale: logoScale,
        ease: Expo.easeOut
    }, 0);
}

function scrollActions() {
    if (windowTopNew > 0) {
        TweenMax.set(heroBgImg, {
            y: heroBgImgY + windowTopNew * parallaxSpeed
        }, 0);
    } else {
        TweenMax.set(heroBgImg, {
            y: 0
        }, 0);
    }

    if (windowTopNew > headerHeight) {
        !headerShrunk ? shrinkHeader() : null;
    } else {
        headerShrunk ? growHeader() : null;
    }

    if (windowTopNew + header.outerHeight() > heroButton.offset().top + heroButton.outerHeight()) {
        revealFixedButton(getAllAccessButtonFixed);
    } else {
        hideFixedButton(getAllAccessButtonFixed);
    }

    if ((windowTopNew + headerHeight > heroButton.offset().top + heroButton.outerHeight()) && !pointsRanOnce) {
        pointsRanOnce = true;
        pointsIntro('define');
    }

    if ((bottomOfPage > defineSectionPointsOffsetTop + (defineSectionPoints.outerHeight() * 1)) && !pointsRanOnce) {
        pointsRanOnce = true;
        pointsIntro('define');
    }

    if ((bottomOfPage > programToolsSectionPointsOffsetTop + (programToolsSectionPoints.outerHeight() * 1)) && !programToolsRanOnce) {
        programToolsRanOnce = true;
        pointsIntro('program tools');
    }

    if ((bottomOfPage > whyPiyoWorksSquaresOffsetTop + (whyPiyoWorksSquares.outerHeight() * 0.65)) && !squaresRanOnce) {
        squaresRanOnce = true;
        staggerSquares(whyPiyoWorksSquares);
    }

    if ((bottomOfPage > sectionCirclesOffsetTop + (sectionCirclesHeight * 0.5)) && !circlesRanOnce) {
        sectionBgCircleImg.imagesLoaded(function () {
            circlesRanOnce = true;
            staggerCircles(bodCommunitySectionCircles);
            staggerCirclesBg(bodCommunitySectionCirclesBg);
        });
    }

    if ((bottomOfPage > personalCoachSectionOffsetTop + (personalCoachSection.outerHeight() * 0.75)) && !iconRanOnce) {
        iconRanOnce = true;
        coachIntro(personalCoachSection);
    }
}

function rafEvents() {
    request = raf(rafEvents);
    now = Date.now();
    delta = now - then;
    if (delta > interval) {
        then = now - (delta % interval);
        // START RAF FUNCTION //

        windowTopOld = windowTopNew;
        windowTopNew = window.pageYOffset;
        bottomOfPage = windowTopNew + window.innerHeight;

        if (windowTopOld != windowTopNew) {

            scrollActions();

        }



        // END RAF FUNCTION //
    }
}

// START GENERAL FUNCTION //

function generalFunctions() {

    heroPlayIcon.on('mouseover', function () {
        var current = $(this)

        TweenMax.to(current, 0.5, {
            scale: 1.3,
            fill: 'rgba(255, 255, 255, 1)',
            ease: Expo.easeOut
        }, 0);
    });

    heroPlayIcon.on('mouseout', function () {
        var current = $(this)

        TweenMax.to(current, 0.5, {
            scale: 1,
            fill: 'rgba(255, 255, 255, 0.3)',
            ease: Expo.easeOut
        }, 0);
    });

    heroButton.on('mouseover', function () {
        var current = $(this)

        TweenMax.to(current, 0.5, {
            backgroundColor: 'rgba(25, 76, 170, 1)',
            ease: Expo.easeOut
        }, 0);
    });

    heroButton.on('mouseout', function () {
        var current = $(this)

        TweenMax.to(current, 0.5, {
            backgroundColor: 'rgba(36, 115, 255, 1)',
            ease: Expo.easeOut
        }, 0);
    });
}

function checkArrow(thisArrow) {
    thisArrow.hasClass('left') ? moveTiles(twelveWorkoutsTilesContainer, 0) : moveTiles(twelveWorkoutsTilesContainer, 1);
};

sectionGalleryTilesArrow.on('click', function () {
    checkArrow($(this))
});

function moveTiles(tiles, direction) {
    var thisDirection = direction,
        isTrue = thisDirection > 0 ? true : false

    if (isTrue) {
        tileIndex++
    } else {
        tileIndex--
    }

    tileIndex > tileMax ? tileIndex = tileMin : null;
    tileIndex < tileMin ? tileIndex = tileMax : null;

    percentage = tileIndex / tileMax
    percentageOfBar = sectionGalleryTilesNavInner.outerWidth() * percentage

    TweenMax.to(tiles, 1.5, {
        x: window.innerWidth * -1 * tileIndex,
        ease: Expo.easeOut
    }, 0);

    if (tileIndex === tileMin) {
        TweenMax.to(sectionGalleryTilesNavTracker, 1.5, {
            x: 0,
            ease: Expo.easeOut
        }, 0);
    } else if (tileIndex === tileMax) {
        TweenMax.to(sectionGalleryTilesNavTracker, 1.5, {
            x: sectionGalleryTilesNavInner.outerWidth() - sectionGalleryTilesNavTracker.outerWidth(),
            ease: Expo.easeOut
        }, 0);
    } else {
        TweenMax.to(sectionGalleryTilesNavTracker, 1.5, {
            x: percentageOfBar - (sectionGalleryTilesNavTracker.outerWidth() * 0.5),
            ease: Expo.easeOut
        }, 0);
    }
}

function readjustTiles() {

    percentage = tileIndex / tileMax
    percentageOfBar = sectionGalleryTilesNavInner.outerWidth() * percentage

    TweenMax.set(sectionGalleryTilesContainer, {
        x: window.innerWidth * -1 * tileIndex
    }, 0);

    if (tileIndex === tileMin) {
        TweenMax.set(sectionGalleryTilesNavTracker, {
            x: 0
        }, 0);
    } else if (tileIndex === tileMax) {
        TweenMax.set(sectionGalleryTilesNavTracker, {
            x: sectionGalleryTilesNavInner.outerWidth() - sectionGalleryTilesNavTracker.outerWidth()
        }, 0);
    } else {
        TweenMax.set(sectionGalleryTilesNavTracker, {
            x: percentageOfBar - (sectionGalleryTilesNavTracker.outerWidth() * 0.5)
        }, 0);
    }

    sectionGalleryTileThumbImg.imagesLoaded(function () {
        TweenMax.set(sectionGalleryTileThumbOverlaySymbol, {
            lineHeight: `${sectionGalleryTileThumb.outerHeight()}px`
        }, 0);
    });
}

function getScrollBarWidth() {
    var inner = document.createElement('p');
    inner.style.width = "100%";
    inner.style.height = "200px";

    var outer = document.createElement('div');
    outer.style.position = "absolute";
    outer.style.top = "0px";
    outer.style.left = "0px";
    outer.style.visibility = "hidden";
    outer.style.width = "200px";
    outer.style.height = "150px";
    outer.style.overflow = "hidden";
    outer.appendChild(inner);

    document.body.appendChild(outer);
    var w1 = inner.offsetWidth;
    outer.style.overflow = 'scroll';
    var w2 = inner.offsetWidth;
    if (w1 == w2) w2 = outer.clientWidth;

    document.body.removeChild(outer);

    return (w1 - w2);
};

sectionGalleryTile.on('mouseover', function () {
    var current = $(this),
        currentOverlay = current.find('.section-gallery-tile-thumb-overlay'),
        currentOverlayBg = currentOverlay.find('.section-gallery-tile-thumb-overlay-bg'),
        currentOverlaySymbol = currentOverlay.find('.section-gallery-tile-thumb-overlay-symbol')

    TweenMax.to(current, 0.5, {
        scale: 1.1,
        ease: Expo.easeOut
    }, 0);
    TweenMax.to(currentOverlay, 0.5, {
        pointerEvents: 'auto',
        ease: Expo.easeOut
    }, 0);
    TweenMax.to(currentOverlayBg, 0.5, {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        ease: Expo.easeOut
    }, 0);
    TweenMax.to(currentOverlaySymbol, 0.5, {
        color: 'rgba(255, 255, 255, 1)',
        ease: Expo.easeOut
    }, 0);
});

sectionGalleryTile.on('mouseout', function () {
    var current = $(this),
        currentOverlay = current.find('.section-gallery-tile-thumb-overlay'),
        currentOverlayBg = currentOverlay.find('.section-gallery-tile-thumb-overlay-bg'),
        currentOverlaySymbol = currentOverlay.find('.section-gallery-tile-thumb-overlay-symbol')

    TweenMax.to(current, 0.5, {
        scale: 1,
        ease: Expo.easeOut
    }, 0);
    TweenMax.to(currentOverlay, 0.5, {
        pointerEvents: 'none',
        ease: Expo.easeOut
    }, 0);
    TweenMax.to(currentOverlayBg, 0.5, {
        backgroundColor: 'rgba(0, 0, 0, 0.01)',
        ease: Expo.easeOut
    }, 0);
    TweenMax.to(currentOverlaySymbol, 0.5, {
        color: 'rgba(255, 255, 255, 0)',
        ease: Expo.easeOut
    }, 0);
});

defineYourselfSection.on('click', function () {
    pointsRanOnce = true;
    pointsIntro('define');
});

whyPiyoWorksSection.on('click', function () {
    squaresRanOnce = true;
    staggerSquares(whyPiyoWorksSquares);
});

programToolsSection.on('click', function () {
    programToolsRanOnce = true;
    pointsIntro('program tools');
});

bodCommunitySection.on('click', function () {
    staggerCircles(bodCommunitySectionCircles);
    staggerCirclesBg(bodCommunitySectionCirclesBg);
});

personalCoachSection.on('click', function () {
    coachIntro($(this));
});

function styleCheckmarks() {
    sectionCheckmarks.each(function (i) {
        var current = sectionCheckmarks.eq(i),
            currentCheckmark = current.find('.section-checkmark')

        currentCheckmark.each(function (l) {
            var
                currentCheckmarkIcon = currentCheckmark.find('.section-checkmark-icon'),
                currentCheckmarkIconSVG = currentCheckmark.find('.section-checkmark-icon-svg'),
                currentCheckmarkText = currentCheckmark.find('.section-checkmark-text'),
                currentCheckmarkTextInner = currentCheckmark.find('.section-checkmark-text-inner'),
                currentCheckmarkTextDescription = currentCheckmark.find('.section-checkmark-text-description')


        });
    });
}

function coachIntro(section) {
    var
        currentSection = section,
        currentSectionCircle = currentSection.find('.section-content-icon-circle'),
        currentSectionCircleInner = currentSection.find('.section-content-icon-circle-inner'),
        currentSectionCircleShield = currentSection.find('.section-content-icon-circle-shield'),
        currentStaggerIcon = currentSection.find('.stagger-icon')

    currentDuration = 0.65,
        currentEase = Expo.easeOut

    coachTl.clear();
    coachTl.timeScale(coachRate);

    coachTl.set(currentSectionCircle, {
        scale: 0,
        opacity: 1,
        backgroundColor: 'rgba(146, 186, 252, 1)'
    }, 0);

    coachTl.set(currentSectionCircleInner, {
        scale: 0
    }, 0);

    coachTl.set(currentSectionCircleShield, {
        //        y: currentSectionCircleInner.outerHeight()
        z: 300,
        opacity: 0,
        rotation: 90
    }, 0);

    coachTl.to(currentSectionCircle, currentDuration, {
        scale: 1,
        ease: Quart.easeOut
    }, 0);

    coachTl.to(currentSectionCircle, currentDuration, {
        backgroundColor: 'rgba(246, 243, 252, 1)',
        y: 0,
        ease: Quad.easeOut
    }, 0);

    coachTl.to(currentSectionCircleInner, currentDuration, {
        scale: 1,
        opacity: 1,
        y: 0,
        ease: Quart.easeOut
    }, 0.2);

    coachTl.to(currentSectionCircleShield, currentDuration, {
        scale: 1,
        opacity: 1,
        y: 0,
        rotation: 0,
        ease: currentEase
    }, 0.45);
}

sectionVideoSliderTile.on('mouseover', function () {
    var currentTile = $(this),
        currentTileThumb = currentTile.find('.section-video-slider-tile-thumb'),
        currentTileThumbBg = currentTile.find('.section-video-slider-tile-thumb-bg'),
        currentTileThumbBgImg = currentTile.find('.section-video-slider-tile-thumb-bg-img'),
        currentTileThumbIcon = currentTile.find('.section-video-slider-tile-thumb-icon'),
        currentTileLabel = currentTile.find('.section-video-slider-tile-label'),
        currentTileLabelHeader = currentTile.find('.section-video-slider-tile-label-header'),
        currentTileLabelDescription = currentTile.find('.section-video-slider-tile-label-description')

    TweenMax.to(currentTile, 0.5, {
        scale: 1.05,
        zIndex: highZIndex++,
        ease: Expo.easeOut
    }, 0);

    TweenMax.to(currentTileThumbBgImg, 0.5, {
        opacity: 0.4,
        ease: Expo.easeOut
    }, 0);
});

sectionVideoSliderTile.on('mouseout', function () {
    var currentTile = $(this),
        currentTileThumb = currentTile.find('.section-video-slider-tile-thumb'),
        currentTileThumbBg = currentTile.find('.section-video-slider-tile-thumb-bg'),
        currentTileThumbBgImg = currentTile.find('.section-video-slider-tile-thumb-bg-img'),
        currentTileThumbIcon = currentTile.find('.section-video-slider-tile-thumb-icon'),
        currentTileLabel = currentTile.find('.section-video-slider-tile-label'),
        currentTileLabelHeader = currentTile.find('.section-video-slider-tile-label-header'),
        currentTileLabelDescription = currentTile.find('.section-video-slider-tile-label-description')

    TweenMax.to(currentTile, 0.5, {
        scale: 1,
        ease: Expo.easeOut
    }, 0);

    TweenMax.to(currentTileThumbBgImg, 0.5, {
        opacity: 1,
        ease: Expo.easeOut
    }, 0);
});

sectionPlan.on('mouseover', function () {
    var currentPlan = $(this)

    TweenMax.to(currentPlan, 0.5, {
        scale: 1.05,
        zIndex: planIndex++,
        ease: Expo.easeOut
    }, 0);
});

sectionPlan.on('mouseout', function () {
    var currentPlan = $(this)

    TweenMax.to(currentPlan, 0.5, {
        scale: 1,
        ease: Expo.easeOut
    }, 0);
});

sectionProgramBanner.on('mouseover', function () {
    var currentBanner = $(this)

    TweenMax.to(currentBanner, 0.5, {
        scale: 1.05,
        zIndex: bannerIndex++,
        ease: Expo.easeOut
    }, 0);
});

sectionProgramBanner.on('mouseout', function () {
    var currentBanner = $(this)

    TweenMax.to(currentBanner, 0.5, {
        scale: 1,
        ease: Expo.easeOut
    }, 0);
});

    getAllAccessButtonFixed.on('mouseover', function () {
        var current = $(this)

        TweenMax.to(current, 0.5, {
            backgroundColor: 'rgba(25, 76, 170, 1)',
            ease: Expo.easeOut
        }, 0);
    });

    getAllAccessButtonFixed.on('mouseout', function () {
        var current = $(this)

        TweenMax.to(current, 0.5, {
            backgroundColor: 'rgba(36, 115, 255, 1)',
            ease: Expo.easeOut
        }, 0);
    });

function revealFixedButton(thisButton) {
    if (!fixedButtonVisible) {
        var currentButton = thisButton,
            currentButtonText = currentButton.find('.get-all-access-button-fixed')

        fixedButtonVisible = true;

        TweenMax.to(currentButton, 0.5, {
            opacity: 1,
            pointerEvents: 'auto',
            ease: Expo.easeOut
        }, 0);
    }
}

function hideFixedButton(thisButton) {
    if (fixedButtonVisible) {
        var currentButton = thisButton,
            currentButtonText = currentButton.find('.get-all-access-button-fixed')

        fixedButtonVisible = false;

        TweenMax.to(currentButton, 0.5, {
            opacity: 0,
            pointerEvents: 'none',
            ease: Expo.easeOut
        }, 0);
    }
}

// END GENERAL FUNCTION //

// END APP FUNCTIONS //
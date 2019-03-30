function style() {

    TweenMax.set($videoWrapper, {
        perspective: '30vw',
        perspectiveOrigin: 'center',
        transformOrigin: 'bottom left',
        transformStyle: 'flat'
//        , top: (($(window).outerHeight() / 2) - ($(window).width() * 0.225))
    });

    TweenMax.set($playerOverlay, {
        y: '-' + $playerOverlay.outerHeight()
    });

    TweenMax.set($playButtonContainer, {
        userSelect: 'none',
        y: $(window).width() * 0.025
    });

    TweenMax.set($playButton, {
        color: buttonColor,
        backgroundColor: buttonBackgroundColor,
        opacity: 0.75
    });

    TweenMax.set($muteButtonContainer, {
        userSelect: 'none',
        y: $(window).width() * 0.025
    });

    TweenMax.set($muteButton, {
        color: buttonColor,
        backgroundColor: buttonBackgroundColor,
        opacity: 0,
        bottom: 0
    });

    TweenMax.set($fullscreenButtonContainer, {
        userSelect: 'none',
        y: $(window).width() * 0.025
    });

    TweenMax.set($fullscreenButton, {
        color: buttonColor,
        backgroundColor: buttonBackgroundColor,
        opacity: 0,
        bottom: 0
    });

    TweenMax.set($pointsOverlayBackground, {
        opacity: 0
    });

    TweenMax.set($pointsCounterContainer, {
        transformOrigin: 'top right',
        userSelect: 'none',
        skewX: -10,
        x: 0,
        y: $videoWrapper.height() * 0.1,
        z: 0
    });

    TweenMax.set($pointsCounter, {
        transformOrigin: 'center'
    });

    TweenMax.set($pointsCounterInner, {
        color: shakeologyGreenLightHex
    });

    TweenMax.set($pointsCounterTrailingVerbiage, {
        transformOrigin: 'center',
        backgroundColor: trailingVerbiageBackgroundColor,
        y: $pointsCounterTrailingVerbiage.outerHeight() - 3
    });

    TweenMax.set($bar, {
        userSelect: 'none',
        backgroundColor: defaultBarBackgroundColor,
        x: 0,
        y: $(window).width() * 0.025,
        width: $(window).width() * 0.8,
        opacity: 1
    });

    TweenMax.set(progressBar, {
        backgroundColor: progressBarBackgroundColor
    });

    TweenMax.set($statsContainer, {
        height: $statSmall.outerHeight() + $statBig.outerHeight(),
        perspective: '30vw',
        perspectiveOrigin: 'center',
        transformStyle: 'flat',
        userSelect: 'none',
        skewX: -10,
        top: ($videoWrapper.outerHeight() / 2) - ($statsContainer.outerHeight() / 2)
    });

    TweenMax.set($stat, {
        transformOrigin: 'center',
        x: $(window).width() * 0.05,
        y: ($videoWrapper.height() / 2) / ($stat.height() / 2),
        z: 0,
    });

    TweenMax.set($statSmall, {
        backgroundColor: 'rgba(' + blackRGB + ',0.9)'
    });

    TweenMax.set($statSmall, {
        top: 0,
        x: $(window).width() * 0.05
    });

    /*TweenMax.set($statSmallLevel, {
        top: ($statSmall.height() / 2) - ($statSmallLevel.height() / 2),
        left: $statSmallTitle.outerWidth() * 1
    });*/

    TweenMax.set($statReading2, {
        width: '100%',
        height: '100%'
    });

    TweenMax.set($statReading2, {
        top: 0,
        left: ($statSmall.width() / 2) - ($statReading2.width() / 2)
    });

    TweenMax.set($statBig, {
        x: $(window).width() * 0.05
            /*backgroundColor: 'rgba(' + blackRGB + ',0.7)'*/
    });

    TweenMax.set($statBigTitle, {
        color: 'rgba(' + whiteRGB + ',1)'
    });

    TweenMax.set($statBigLevel, {
        color: 'rgba(' + blackRGB + ',1)'
    });

    /*TweenMax.set($statBigDifficulty, {
        bottom: '3vw',
        left: '6vw',
        color:'rgba(' + whiteRGB + ',1)'
    });*/

    TweenMax.set($statReading1, {
        height: $statBig.height()
    });

    /*TweenMax.set($statReading1, {
        top: (($statBig.height() / 2) - ($statReading1.height() / 2)) * 1.6
    });*/

    TweenMax.set($clearBreak, {
        bottom: '-' + $playerOverlay.outerHeight()
    });

    TweenMax.set($levelRotatorContainer, {
        width: levelRotatorContainerWidth,
        height: levelRotatorContainerHeight
    });

    TweenMax.set($levelRotatorContainer, {
        perspective:levelRotatorContainerPerspective,
        perspectiveOrigin:'center',
        transformStyle:'flat',
        top: verticallyCenter($levelRotatorContainer),
        left: 0
    });

    TweenMax.set($levelRotator, {
        transformOrigin:'center',
        width:$videoWrapper.height() * 0.2,
        height:$videoWrapper.height() * 0.2,
        top: verticallyCenter($levelRotatorContainer),
        left: 0
    });
};
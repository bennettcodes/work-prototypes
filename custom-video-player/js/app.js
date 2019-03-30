function doFirst() {
    myMovie = document.getElementById('my-movie');
    videoWrapper = document.getElementById('video-wrapper');
    canvasPlayButton = document.getElementById('canvas-play-button');
    canvasHover = document.getElementById('canvas-hover');
    playButtonContainer = document.getElementById('play-button-container');
    playButton = document.getElementById('play-button');
    bar = document.getElementById('default-bar');
    progressBar = document.getElementById('progress-bar');
    muteButtonContainer = document.getElementById('mute-button-container');
    muteButton = document.getElementById('mute-button');
    fullscreenButtonContainer = document.getElementById('fullscreen-button-container');
    fullscreenButton = document.getElementById('fullscreen-button');

    $clearBreak = $('#clear-break');

    $videoWrapper = $('#video-wrapper');
    $canvasPlayButton = $('#canvas-play-button');
    $canvasHover = $('#canvas-hover');
    $videoWrapperHeight = $videoWrapper.outerHeight();
    $playerOverlay = $('#player-overlay');
    $myMovie = $('#my-movie');
    $playButtonContainer = $('#play-button-container');
    $playButton = $('#play-button');
    $bar = $('#default-bar');
    $progressTracker = $('#progress-tracker');
    $muteButtonContainer = $('#mute-button-container');
    $muteButton = $('#mute-button');
    $fullscreenButtonContainer = $('#fullscreen-button-container');
    $fullscreenButton = $('#fullscreen-button');

    $levelRotatorContainer = $('#level-rotator-container');
    $levelRotator = $('.level-rotator');
    $rotateLevel = $('.rotate-level');

    $rotateLevel1 = $('#rotate-level-1');
    $rotateLevel2 = $('#rotate-level-2');
    $rotateLevel3 = $('#rotate-level-3');
    $rotateLevel4 = $('#rotate-level-4');
    $rotateLevel5 = $('#rotate-level-5');

    $playIcon = '<img class="video-btn" src="images/svg/play.svg">';
    $pauseIcon = '<img class="video-btn" src="images/svg/pause.svg">';

    $muteIcon = '<img class="video-btn" src="images/svg/mute.svg">';
    $unmuteIcon = '<img class="video-btn" src="images/svg/unmute.svg">';

    $fullscreenIcon = '<img class="video-btn" src="images/svg/fullscreen.svg">';
    $fullscreenIconAlt = '<img class="video-btn" src="images/svg/fullscreen-exit.svg">';

    overlayActive = false;

    $statsContainer = $('#stats-container');
    $statBigSubBackground = $('#stat-big-sub-bg');
    $stat = $('.stat');
    $statText = $('.stat-text');
    $statBig = $('#stat-big');
    $statSmall = $('#stat-small');

    $statBigBackgroundContainer = $('#stat-big-bg-container');
    $statBigBackground = $('.stat-big-bg');

    $bigBackground1 = $('#big-bg-1');
    $bigBackground2 = $('#big-bg-2');
    $bigBackground3 = $('#big-bg-3');
    $bigBackground4 = $('#big-bg-4');
    $bigBackground5 = $('#big-bg-5');

    $activeBigBackground = $('.active-big-bg');
    $activeBigBackgroundString = 'active-big-bg';
    $activeBigBackgroundFindString = '.active-big-bg';

    $inactiveBigBackground = $('.inactive-big-bg');
    $inactiveBigBackgroundString = 'inactive-big-bg';
    $inactiveBigBackgroundFindString = '.inactive-big-bg';

    $statReading1 = $('#stat-reading1');
    $statReading2 = $('#stat-reading2');

    $statBigTitle = $('.stat-big-title');
    $statBigLevel = $('.stat-big-level');
    $statBigDifficulty = $('.stat-big-difficulty');

    $statSmallTitle = $('.stat-small-title');
    $statSmallLevel = $('.stat-small-level');
    $statSmallDifficulty = $('.stat-small-difficulty');

    $pointsOverlay = $('#points-overlay');
    $pointsCounterContainer = $('#points-counter-container');
    $pointsCounter = $('#points-counter');
    $pointsCounterInner = $('#points-counter-inner');
    $pointsCounterInnerHeading3 = $('#points-counter-inner h3');
    $pointsOverlayBackgroundContainer = $('#points-overlay-bg-container');
    $pointsOverlayBackground = $('.points-overlay-bg');
    $pointsCounterTrailingVerbiage = $('#points-counter-trailing-verbiage');
    
    $pointsOverlayBackgroundActive = $('.points-overlay-bg-active');
    $pointsOverlayBackgroundActiveString = 'points-overlay-bg-active';
    $pointsOverlayBackgroundActiveFindString = '.points-overlay-bg-active';
    
    $pointsOverlayBackground1 = $('#points-overlay-bg-1');
    $pointsOverlayBackground2 = $('#points-overlay-bg-2');
    $pointsOverlayBackground3 = $('#points-overlay-bg-3');
    $pointsOverlayBackground4 = $('#points-overlay-bg-4');
    $pointsOverlayBackground5 = $('#points-overlay-bg-5');

    fullscreenActive = false;
    hoverActive = false;
    controlEndY = 0;

    pointCounterValue = 1;

    bbBlueHex = '#0070d9';
    bbBlue = '#0070d9';

    var pointsInterval;

    var currentMousePos;

    var currentStatText;

    blackRGB = '0,0,0';
    whiteRGB = '255,255,255';
    beachbodyBlueHex = '#0070D9';
    beachbodyBlueRGB = '0,112,217';
    beachbodyBlueLightHex = '#009BD8';
    beachbodyBlueLightRGB = '0,155,216';
    beachbodyBlueVeryLightHex = '#36C9E2';
    beachbodyBlueVeryLightRGB = '54,201,226';
    beachbodyBlueDarkHex = '#004ACC';
    beachbodyBlueDarkRGB = '0,74,204';
    shakeologyGreenHex = '#6CC24A';
    shakeologyGreenRGB = '108,194,74';
    shakeologyGreenLightHex = '#90EF81';
    shakeologyGreenLightRGB = '144,239,129';
    shakeologyGreenDarkHex = '#378E37';
    shakeologyGreenDarkRGB = '55,142,55';
    
    level1LightRGB = '144,239,129';
    level1MediumRGB = '99,239,56';
    level1DarkRGB = '38,160,117';
    
    level2LightRGB = '240,255,145';
    level2MediumRGB = '242,237,101';
    level2DarkRGB = '252,213,37';
    
    level3LightRGB = '255,208,170';
    level3MediumRGB = '255,159,81';
    level3DarkRGB = '255,116,0';
    
    level4LightRGB = '239,197,202';
    level4MediumRGB = '210,75,90';
    level4DarkRGB = '186,39,55';
    
    level5LightRGB = '255,209,204';
    level5MediumRGB = '255,105,89';
    level5DarkRGB = '255,26,0';

    videoFullscreen = $('.video-fullscreen');
    videoFullscreenString = 'video-fullscreen';
    videoFullscreenFindString = '.video-fullscreen';

    noTransform = $('.no-transform');
    noTransformString = 'no-transform';
    noTransformFindString = '.no-transform';

    videoButtonEaseStart = Circ.easeOut;
    videoButtonEaseEnd = Circ.easeIn;
    videoButtonDuration = 0.2;

    overlayRevealEaseStart = Circ.easeOut;
    overlayRevealEaseEnd = Circ.easeIn;
    overlayRevealEaseEndSize = Expo.easeIn;
    overlayRevealDuration = 0.2;
    overlayRevealDurationSize = 0.4;

    pointsCounterContainerEaseStart = Back.easeOut;
    pointsCounterContainerEaseEnd = Back.easeOut;
    pointsCounterContainerDuration = 0.2;
    statBigEaseStart = Back.easeOut;
    statBigEaseEnd = Elastic.easeOut;
    statSmallEaseStart = Back.easeOut;
    statSmallEaseEnd = Elastic.easeOut;
    statBigDuration = 1;
    statSmallDuration = 0.4;
    statDurationStart = 0.4;
    statDurationEnd = 1;

    levelRotatorHoverDuration = 0.5;
    levelRotatorHoverEaseStart = Back.easeOut;
    levelRotatorHoverEaseEnd = Back.easeOut;

    buttonColor = 'rgba(' + whiteRGB + ',1)';
    buttonColorAlt = 'rgba(' + whiteRGB + ',1)';

    buttonBackgroundColor = 'rgba(' + blackRGB + ',1)';
    buttonBackgroundColorAlt = 'rgba(' + beachbodyBlueVeryLightRGB + ',1)';

    trailingVerbiageBackgroundColor = 'rgba(' + blackRGB + ',1)';

    videoWrapperBackgroundColor = 'rgba(' + blackRGB + ',0.1)';
    defaultBarBackgroundColor = 'rgba(' + blackRGB + ',0.3)';
    progressBarBackgroundColor = 'rgba(' + beachbodyBlueLightRGB + ',0.8)';

    playAnimations = {
        hover: {
            over: function () {
                $playButton.on('mouseover', function () {
                    TweenMax.to($(this), videoButtonDuration, {
                        color: buttonColorAlt,
                        backgroundColor: buttonBackgroundColorAlt,
                        ease: videoButtonEaseStart
                    }, 0);
                });
            },
            out: function () {
                $playButton.on('mouseout', function () {
                    TweenMax.to($(this), videoButtonDuration, {
                        color: buttonColor,
                        backgroundColor: buttonBackgroundColor,
                        ease: videoButtonEaseEnd
                    }, 0);
                });
            }
        },
        click: {
            down: function () {
                $playButton.on('mousedown', function () {
                    TweenMax.to($(this), videoButtonDuration, {
                        color: buttonColorAlt,
                        backgroundColor: buttonBackgroundColorAlt,
                        ease: videoButtonEaseStart
                    }, 0);
                });
            },
            up: function () {
                $playButton.on('mouseup', function () {
                    TweenMax.to($(this), videoButtonDuration, {
                        color: buttonColor,
                        backgroundColor: buttonBackgroundColor,
                        ease: videoButtonEaseEnd
                    }, 0);
                });
            }
        }
    };

    muteAnimations = {
        hover: {
            over: function () {
                $muteButton.on('mouseover', function () {
                    TweenMax.to($(this), videoButtonDuration, {
                        color: buttonColorAlt,
                        backgroundColor: buttonBackgroundColorAlt,
                        ease: videoButtonEaseStart
                    }, 0);
                });
            },
            out: function () {
                $muteButton.on('mouseout', function () {
                    TweenMax.to($(this), videoButtonDuration, {
                        color: buttonColor,
                        backgroundColor: buttonBackgroundColor,
                        ease: videoButtonEaseEnd
                    }, 0);
                });
            }
        },
        click: {
            down: function () {
                $muteButton.on('mousedown', function () {
                    TweenMax.to($(this), videoButtonDuration, {
                        color: buttonColorAlt,
                        backgroundColor: buttonBackgroundColorAlt,
                        ease: videoButtonEaseStart
                    }, 0);
                });
            },
            up: function () {
                $muteButton.on('mouseup', function () {
                    TweenMax.to($(this), videoButtonDuration, {
                        color: buttonColor,
                        backgroundColor: buttonBackgroundColor,
                        ease: videoButtonEaseEnd
                    }, 0);
                });
            },
            click: function () {
                $muteButton.click(function () {
                    muteVideo();
                });
            }
        }
    };

    fullscreenAnimations = {
        hover: {
            over: function () {
                $fullscreenButton.on('mouseover', function () {
                    TweenMax.to($(this), videoButtonDuration, {
                        color: buttonColorAlt,
                        backgroundColor: buttonBackgroundColorAlt,
                        ease: videoButtonEaseStart
                    }, 0);
                });
            },
            out: function () {
                if (!hoverActive) {
                    $fullscreenButton.on('mouseout', function () {
                        TweenMax.to($(this), videoButtonDuration, {
                            color: buttonColor,
                            backgroundColor: buttonBackgroundColor,
                            ease: videoButtonEaseEnd
                        }, 0);
                    });
                }
            }
        },
        click: {
            down: function () {
                $playButton.on('mousedown', function () {
                    //
                });
            },
            up: function () {
                if (!hoverActive) {
                    hoverActive = true;
                    $fullscreenButton.on('mouseup', function () {
                        TweenMax.to($(this), videoButtonDuration, {
                            color: buttonColor,
                            backgroundColor: buttonBackgroundColor,
                            ease: videoButtonEaseEnd,
                            onComplete: function () {
                                hoverActive = false;
                            }
                        }, 0);
                    });
                }
            }
        }
    };

    videoHoverActions = {
        player: {
            over: function () {
                $videoWrapper.on('mouseover', function () {
                    if (!fullscreenActive) {
                        overlayActive = true;
                        overlayFlyInAnimation();
                    }
                });
                $playerOverlay.on('mouseover', function () {
                    if (fullscreenActive) {
                        overlayActive = true;
                        overlayFlyInAnimationFullScreen();
                    }
                });
            },
            out: function () {
                $videoWrapper.on('mouseout', function () {
                    if (!fullscreenActive) {
                        overlayActive = false;
                        overlayFlyOutAnimation();
                    }
                });
                $playerOverlay.on('mouseout', function () {
                    if (fullscreenActive) {
                        overlayActive = false;
                        overlayFlyOutAnimationFullScreen();
                    }
                });
            },
            up: function () {
                $canvasHover.on('mouseup', function () {
                    myMovie.pause();
                });
            },
            canvasUp: function () {
                $canvasHover.on('mouseup', function () {
                    myMovie.pause();
                });
            }
        }
    };

    levelRotatorActions = {
        hover: {
            over: function () {
                $levelRotator.on('mouseover', function () {
                    TweenMax.to($(this), levelRotatorHoverDuration, {
                        scale: 1.5,
                        ease: levelRotatorHoverEaseStart
                    }, 0);
                });
            },
            out: function () {
                $levelRotator.on('mouseout', function () {
                    TweenMax.to($(this), levelRotatorHoverDuration, {
                        scale: 1,
                        ease: levelRotatorHoverEaseEnd
                    }, 0);
                });
            }
        },
        click: {
            up: function() {
                $levelRotator.on('mouseup', function() {
                    switch (true) {
                    case $(this).is($levelRotator.eq(0)):
                            $statBigBackground.removeClass($activeBigBackgroundString);
                            $bigBackground1.addClass($activeBigBackgroundString);
                            $pointsOverlayBackground.removeClass($pointsOverlayBackgroundActiveString);
                            $pointsOverlayBackground1.addClass($pointsOverlayBackgroundActiveString);
                            $pointsOverlayBackgroundActive = $('.points-overlay-bg-active');
                            $pointsOverlayBackgroundActiveString = 'points-overlay-bg-active';
                            $pointsOverlayBackgroundActiveFindString = '.points-overlay-bg-active';
                            $statBigBackground.removeClass($activeBigBackgroundString);
                            $bigBackground1.addClass($activeBigBackgroundString);
                            $activeBigBackground = $('.active-big-bg');
                            $activeBigBackgroundString = 'active-big-bg';
                            $activeBigBackgroundFindString = '.active-big-bg';
                            TweenMax.set($statBigSubBackground, {
                               backgroundColor: 'rgba(' + level1LightRGB + ',1)'
                            });
                            TweenMax.set($pointsCounterInnerHeading3, {
                               color: 'rgba(' + level1LightRGB + ',1)',
                                textShadow: '0.3vw 0.3vw 0 rgba(' + level1DarkRGB + ',1)'
                            });
                            $statSmallLevel.html('1.5X');
                            TweenMax.set($statSmallLevel, {
                               color: 'rgba(' + level1MediumRGB + ',1)'
                            });
                            $statBigDifficulty.html('LIGHT');
                            $statBigLevel.html('1');
                        break;
                    case $(this).is($levelRotator.eq(1)):
                            $statBigBackground.removeClass($activeBigBackgroundString);
                            $bigBackground2.addClass($activeBigBackgroundString);
                            $pointsOverlayBackground.removeClass($pointsOverlayBackgroundActiveString);
                            $pointsOverlayBackground2.addClass($pointsOverlayBackgroundActiveString);
                            $pointsOverlayBackgroundActive = $('.points-overlay-bg-active');
                            $pointsOverlayBackgroundActiveString = 'points-overlay-bg-active';
                            $pointsOverlayBackgroundActiveFindString = '.points-overlay-bg-active';
                            $statBigBackground.removeClass($activeBigBackgroundString);
                            $bigBackground2.addClass($activeBigBackgroundString);
                            $activeBigBackground = $('.active-big-bg');
                            $activeBigBackgroundString = 'active-big-bg';
                            $activeBigBackgroundFindString = '.active-big-bg';
                            TweenMax.set($statBigSubBackground, {
                               backgroundColor: 'rgba(' + level2LightRGB + ',1)'
                            });
                            TweenMax.set($pointsCounterInnerHeading3, {
                               color: 'rgba(' + level2LightRGB + ',1)',
                                textShadow: '0.3vw 0.3vw 0 rgba(' + level2DarkRGB + ',1)'
                            });
                            $statSmallLevel.html('2X');
                            TweenMax.set($statSmallLevel, {
                               color: 'rgba(' + level2MediumRGB + ',1)'
                            });
                            $statBigDifficulty.html('EASY');
                            $statBigLevel.html('2');
                        break;
                    case $(this).is($levelRotator.eq(2)):
                            $statBigBackground.removeClass($activeBigBackgroundString);
                            $bigBackground3.addClass($activeBigBackgroundString);
                            $pointsOverlayBackground.removeClass($pointsOverlayBackgroundActiveString);
                            $pointsOverlayBackground3.addClass($pointsOverlayBackgroundActiveString);
                            $pointsOverlayBackgroundActive = $('.points-overlay-bg-active');
                            $pointsOverlayBackgroundActiveString = 'points-overlay-bg-active';
                            $pointsOverlayBackgroundActiveFindString = '.points-overlay-bg-active';
                            $statBigBackground.removeClass($activeBigBackgroundString);
                            $bigBackground3.addClass($activeBigBackgroundString);
                            $activeBigBackground = $('.active-big-bg');
                            $activeBigBackgroundString = 'active-big-bg';
                            $activeBigBackgroundFindString = '.active-big-bg';
                            TweenMax.set($statBigSubBackground, {
                               backgroundColor: 'rgba(' + level3LightRGB + ',1)'
                            });
                            TweenMax.set($pointsCounterInnerHeading3, {
                               color: 'rgba(' + level3LightRGB + ',1)',
                                textShadow: '0.3vw 0.3vw 0 rgba(' + level3DarkRGB + ',1)'
                            });
                            $statSmallLevel.html('2.5X');
                            TweenMax.set($statSmallLevel, {
                               color: 'rgba(' + level3MediumRGB + ',1)'
                            });
                            $statBigDifficulty.html('MEDIUM');
                            $statBigLevel.html('3');
                        break;
                    case $(this).is($levelRotator.eq(3)):
                            $statBigBackground.removeClass($activeBigBackgroundString);
                            $bigBackground4.addClass($activeBigBackgroundString);
                            $pointsOverlayBackground.removeClass($pointsOverlayBackgroundActiveString);
                            $pointsOverlayBackground4.addClass($pointsOverlayBackgroundActiveString);
                            $pointsOverlayBackgroundActive = $('.points-overlay-bg-active');
                            $pointsOverlayBackgroundActiveString = 'points-overlay-bg-active';
                            $pointsOverlayBackgroundActiveFindString = '.points-overlay-bg-active';
                            $statBigBackground.removeClass($activeBigBackgroundString);
                            $bigBackground4.addClass($activeBigBackgroundString);
                            $activeBigBackground = $('.active-big-bg');
                            $activeBigBackgroundString = 'active-big-bg';
                            $activeBigBackgroundFindString = '.active-big-bg';
                            TweenMax.set($statBigSubBackground, {
                               backgroundColor: 'rgba(' + level4LightRGB + ',1)'
                            });
                            TweenMax.set($pointsCounterInnerHeading3, {
                               color: 'rgba(' + level4LightRGB + ',1)',
                                textShadow: '0.3vw 0.3vw 0 rgba(' + level4DarkRGB + ',1)'
                            });
                            $statSmallLevel.html('3X');
                            TweenMax.set($statSmallLevel, {
                               color: 'rgba(' + level4MediumRGB + ',1)'
                            });
                            $statBigDifficulty.html('HARD');
                            $statBigLevel.html('4');
                        break;
                    case $(this).is($levelRotator.eq(4)):
                            $statBigBackground.removeClass($activeBigBackgroundString);
                            $bigBackground5.addClass($activeBigBackgroundString);
                            $pointsOverlayBackground.removeClass($pointsOverlayBackgroundActiveString);
                            $pointsOverlayBackground5.addClass($pointsOverlayBackgroundActiveString);
                            $pointsOverlayBackgroundActive = $('.points-overlay-bg-active');
                            $pointsOverlayBackgroundActiveString = 'points-overlay-bg-active';
                            $pointsOverlayBackgroundActiveFindString = '.points-overlay-bg-active';
                            $statBigBackground.removeClass($activeBigBackgroundString);
                            $bigBackground5.addClass($activeBigBackgroundString);
                            $activeBigBackground = $('.active-big-bg');
                            $activeBigBackgroundString = 'active-big-bg';
                            $activeBigBackgroundFindString = '.active-big-bg';
                            TweenMax.set($statBigSubBackground, {
                               backgroundColor: 'rgba(' + level5LightRGB + ',1)'
                            });
                            TweenMax.set($pointsCounterInnerHeading3, {
                               color: 'rgba(' + level5LightRGB + ',1)',
                                textShadow: '0.3vw 0.3vw 0 rgba(' + level5DarkRGB + ',1)'
                            });
                            $statSmallLevel.html('3.5X');
                            TweenMax.set($statSmallLevel, {
                               color: 'rgba(' + level5MediumRGB + ',1)'
                            });
                            $statBigDifficulty.html('INSANE');
                            $statBigLevel.html('5');
                        break;
                    }
                });
            }
        }
    };

    pointCounterActions = {
        container: {
            inactive: function () {
                if (!fullscreenActive) {
                    TweenMax.to($pointsCounterContainer, pointsCounterContainerDuration, {
                        x: pointsCounterContainerInactiveX,
                        y: pointsCounterContainerInactiveY,
                        z: pointsCounterContainerInactiveZ,
                        ease: pointsCounterContainerEaseEnd
                    });
                }
            },
            active: function () {
                if (!fullscreenActive) {
                    TweenMax.to($pointsCounterContainer, pointsCounterContainerDuration, {
                        x: pointsCounterContainerActiveX,
                        y: pointsCounterContainerActiveY,
                        z: pointsCounterContainerActiveZ,
                        ease: pointsCounterContainerEaseStart
                    });
                }
            }
        }
    };

    statActions = {
        container: {
            inactive: function () {
                if (!fullscreenActive) {
                    TweenMax.staggerTo($stat, statDurationEnd, {
                        x: statsContainerInactiveX,
                        y: statsContainerInactiveY,
                        z: statsContainerInactiveZ,
                        ease: statSmallEaseEnd
                    }, 0.075);
                }
            },
            active: function () {
                if (!fullscreenActive) {
                    TweenMax.staggerTo($stat, statDurationStart, {
                        x: statsContainerActiveX,
                        y: statsContainerActiveY,
                        z: statsContainerActiveZ,
                        ease: statSmallEaseStart
                    }, 0.075);
                }
            }
        }
    };

    //    videoWrapper.addEventListener('click', playOrPause, false);
    canvasPlayButton.addEventListener('click', canvasPlayOrPause, false);
    canvasHover.addEventListener('click', canvasPlayOrPause, false);
    playButton.addEventListener('click', playOrPause, false);
    //    fullscreenButton.addEventListener('click', playOrPause, false);
    bar.addEventListener('click', clickedBar, false);

    function recalculateSizes() {

        levelRotatorContainerWidth = $(window).width() * 0.1;
        levelRotatorContainerHeight = $videoWrapper.height();

        levelRotatorWidth = $videoWrapper.height() * 0.2;
        levelRotatorHeight = $videoWrapper.height() * 0.2;

        barGrowActive = $(window).width() * 0.65;
        barGrowInactive = $(window).width() * 0.8;

        levelRotatorContainerPerspective = $(window).width() * 0.3;

        barGrowFullscreenActive = $(window).width() - ($playButtonContainer.width() + $muteButtonContainer.width() + $fullscreenButtonContainer.width());
        barGrowFullscreenInactive = $(window).width();

        controlStartY = $playerOverlay.height();

        pointsCounterContainerActiveX = '-' + $videoWrapper.width() * 0.05;
        pointsCounterContainerActiveY = ($videoWrapper.height() / 2) / 4;
        pointsCounterContainerActiveZ = 0;

        pointsCounterContainerInactiveX = 0;
        pointsCounterContainerInactiveY = $videoWrapper.height() * 0.1;
        pointsCounterContainerInactiveZ = 0;

        statsContainerActiveX = $videoWrapper.width() * 0.01;
        statsContainerActiveY = ($videoWrapper.height() / 2) * 0.1;
        statsContainerActiveZ = 0;
        statsContainerActiveSkewX = 10;

        statsContainerInactiveX = $(window).width() * 0.05;
        statsContainerInactiveY = ($videoWrapper.height() / 2) / ($stat.height() / 2);
        statsContainerInactiveZ = 0;
        statsContainerInactiveSkewX = 0;

        barSize = $videoWrapper.width() - ($playButtonContainer.outerWidth() * 2);

    };

    $(window).resize(function initial() {

        recalculateSizes();

        style();

        fullScreenChecker();

        verticallyCenter($videoWrapper);

        verticallyCenter($statsContainer);

        verticallyCenter($pointsOverlayBackground);

        return initial;
    }());

    TweenMax.set($statBigSubBackground, {
        backgroundColor: 'rgba(' + shakeologyGreenLightRGB + ',0.9)'
    });
    
    TweenMax.set($statSmallLevel, {
       color: 'rgba(' + level1MediumRGB + ',1)'
    });

}

doFirst();

function fullscreenPlayOrPause() {
    if (!myMovie.paused && !myMovie.ended) {
        myMovie.pause();
        fullscreenButton.innerHTML = $fullscreenIcon;
        window.clearInterval(updateBar);
        clearInterval(pointsInterval);
    } else {
        myMovie.play();
        fullscreenButton.innerHTML = $fullscreenIconAlt;
        updateBar = setInterval(update, 500);
        pointCounter();
    }
}

function muteVideo() {

    if ($myMovie.prop('muted')) {
        muteButton.innerHTML = $unmuteIcon;
        $myMovie.prop('muted', false);
    } else {
        muteButton.innerHTML = $muteIcon;
        $myMovie.prop('muted', true);
    }
}

function canvasPlayOrPause() {
    if (!myMovie.paused && !myMovie.ended) {
        myMovie.pause();
        playButton.innerHTML = $playIcon;
        window.clearInterval(updateBar);
        clearInterval(pointsInterval);
    } else {
        myMovie.play();
        playButton.innerHTML = $pauseIcon;
        updateBar = setInterval(update, 500);
        pointCounter();
    }
}

function playOrPause() {
    if (!myMovie.paused && !myMovie.ended) {
        myMovie.pause();
        playButton.innerHTML = $playIcon;
        window.clearInterval(updateBar);
        clearInterval(pointsInterval);
    } else {
        myMovie.play();
        playButton.innerHTML = $pauseIcon;
        updateBar = setInterval(update, 500);
        pointCounter();
    }
}

function update() {
    if (!myMovie.ended) {
        var size = parseInt(myMovie.currentTime * $bar.width() / myMovie.duration);
        var percentage = (myMovie.currentTime / myMovie.duration) * 100;
        //        console.log('current time: ' + myMovie.currentTime);
        //        console.log('current percentage: ' + myMovie.currentTime);
        //        console.log('total time: ' + myMovie.duration);
        TweenMax.to(progressBar, 1, {
            width: percentage + '%',
            ease: Linear.easeNone
        }, 0);
    } else {
        playButton.innerHTML = $playIcon;
        fullscreenButton.innerHTML = $fullscreenIcon;
        window.clearInterval(updateBar);
        clearInterval(pointsInterval);
        TweenMax.set(progressBar, {
            width: '0'
        }, 0);
    }
}

//function statTextVerticalAlign() {
//    for (i = 0; i < $statText.length; i++) {
//        var currentStatText = $statText.eq(i);
//        
//        TweenMax.set(currentStatText, {
//           top: (currentStatText.parent('.stat').height() / 2) - (currentStatText.height() / 2) 
//        });
//    }
//}

function clickedBar(e) {
    if (!myMovie.paused && !myMovie.ended) {
        var mouseX = e.pageX - $bar.offset().left;
        var newtime = mouseX * myMovie.duration / $bar.width();
        myMovie.currentTime = newtime;
        var size = parseInt(myMovie.currentTime * $bar.width() / myMovie.duration);
        TweenMax.set(progressBar, {
            width: mouseX + 'px'
        }, 0);
    }
}

function fullScreenChecker() {
    if (fullscreenActive) {
        TweenMax.set($playButton, {
            opacity: 0
        });
        TweenMax.set($muteButton, {
            opacity: 0
        });
        TweenMax.set($fullscreenButton, {
            opacity: 0
        });
        fullscreenActive = true;
        $videoWrapper.addClass('video-fullscreen');
        $myMovie.addClass('video-fullscreen');
        //        myMovie.className = 'video-fullscreen';
        barSize = $(window).width();
        TweenMax.set(bar, {
            width: $(window).width()
        });
        TweenMax.set($videoWrapper, {
            top: (($(window).height() / 2) - ($(window).height() / 2))
        });
        fullscreenButton.innerHTML = $fullscreenIconAlt;
        if ($fullscreenButton.requestFullscreen) {
            $fullscreenButton.requestFullscreen();
        } else if ($fullscreenButton.webkitRequestFullscreen) {
            $fullscreenButton.webkitRequestFullscreen();
        } else if ($fullscreenButton.mozRequestFullScreen) {
            $fullscreenButton.mozRequestFullScreen();
        } else if ($fullscreenButton.msRequestFullscreen) {
            $fullscreenButton.msRequestFullscreen();
        }
    } else {
        TweenMax.set($playButton, {
            opacity: 0
        });
        TweenMax.set($muteButton, {
            opacity: 0
        });
        TweenMax.set($fullscreenButton, {
            opacity: 0
        });
        TweenMax.set($statBig, {
            x: $(window).width() * 0.05
                /*backgroundColor: 'rgba(' + blackRGB + ',0.7)'*/
        });
        TweenMax.staggerTo($stat, statDurationEnd, {
            x: $(window).width() * 0.05,
            y: ($videoWrapper.height() / 2) / ($stat.height() / 2),
            z: 0,
            ease: statSmallEaseEnd
        }, 0.075);
        TweenMax.to($pointsCounterContainer, statDurationEnd, {
            x: 0,
            y: $videoWrapper.height() * 0.1,
            z: 0,
            ease: statSmallEaseEnd
        }, 0.075);
    }
}

window.addEventListener('load', doFirst, false);

function pointCounter() {
    pointsInterval = setInterval(function () {
        pointCounterValue++;
        $pointsCounterInnerHeading3.html(Math.floor(pointCounterValue / 240));
    }, 1);
};

//function bindTrackerToMouse() {
//    currentMousePos = {
//        x: -1
//        , y: -1
//    };
//    $(document).mousemove(function (event) {
//        currentMousePos.x = event.pageX;
//        currentMousePos.y = event.pageY;
//        TweenMax.set($progressTracker, {
//            x: currentMousePos.x - $progressTracker.offset().left
//        });
//    });
//};
//
//bindTrackerToMouse();

playAnimations.hover.over();
playAnimations.hover.out();

muteAnimations.hover.over();
muteAnimations.hover.out();
muteAnimations.click.up();
muteAnimations.click.click();

fullscreenAnimations.hover.over();
fullscreenAnimations.hover.out();
fullscreenAnimations.click.up();

videoHoverActions.player.over();
videoHoverActions.player.out();

levelRotatorActions.hover.over();
levelRotatorActions.hover.out();
levelRotatorActions.click.up();

function verticallyCenter(e) {
    e.css({
        top: (e.parent('div').height() / 2) - (e.height() / 2)
    });
}

var i = document.getElementById("video-wrapper");

// gfull-screen
$fullscreenButton.on('mouseup', function () {
    if (!fullscreenActive) {
        $videoWrapper.addClass('video-fullscreen');
        $myMovie.addClass('video-fullscreen');
        fullscreenActive = true;
        //        myMovie.className = 'video-fullscreen';
        barSize = $(window).width() - ($playButtonContainer.outerWidth() * 2);
        TweenMax.set(bar, {
            width: $(window).width() - ($playButtonContainer.outerWidth() * 2)
        });
        /*$canvasHover.hide();*/
        $pointsOverlayBackgroundContainer.hide();
        fullscreenButton.innerHTML = $fullscreenIconAlt;
        if (i.requestFullscreen) {
            i.requestFullscreen();
        } else if (i.webkitRequestFullscreen) {
            i.webkitRequestFullscreen();
        } else if (i.mozRequestFullScreen) {
            i.mozRequestFullScreen();
        } else if (i.msRequestFullscreen) {
            i.msRequestFullscreen();
        }
    } else {
        $videoWrapper.removeClass('video-fullscreen');
        $myMovie.removeClass('video-fullscreen');
        fullscreenActive = false;
        barSize = $videoWrapper.width() - ($playButtonContainer.outerWidth() * 2);
        TweenMax.set(bar, {
            width: $videoWrapper.width() - ($playButtonContainer.outerWidth() * 2)
        });
        /*$canvasHover.show();*/
        $pointsOverlayBackgroundContainer.show();
        fullscreenButton.innerHTML = $fullscreenIcon;
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
});

$(document).keyup(function (e) {
    e.preventDefault();
    if ((fullscreenActive) && (e.keyCode == 27)) {
        $videoWrapper.removeClass('video-fullscreen');
        $myMovie.removeClass('video-fullscreen');
        fullscreenActive = false;
        barSize = $videoWrapper.width() - ($playButtonContainer.outerWidth() * 2);
        TweenMax.set(bar, {
            width: $videoWrapper.width() - ($playButtonContainer.outerWidth() * 2)
        });
        /*$canvasHover.show();*/
        $pointsOverlayBackgroundContainer.show();
        fullscreenButton.innerHTML = $fullscreenIcon;
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }

});

function overlayFlyInAnimation() {
    pointCounterActions.container.active();
    statActions.container.active();
    TweenMax.to($playButtonContainer, overlayRevealDuration, {
        ease: overlayRevealEaseStart,
        y: controlEndY
    }, 0);
    TweenMax.to($playButton, overlayRevealDuration, {
        opacity: 1
    }, 0);
    TweenMax.to($muteButtonContainer, overlayRevealDuration, {
        ease: overlayRevealEaseStart,
        y: controlEndY
    }, 0);
    TweenMax.to($muteButton, overlayRevealDuration, {
        opacity: 1
    }, 0);
    TweenMax.to($fullscreenButtonContainer, overlayRevealDuration, {
        ease: overlayRevealEaseStart,
        y: controlEndY
    }, 0);
    TweenMax.to($fullscreenButton, overlayRevealDuration, {
        opacity: 1
    }, 0);
    TweenMax.to(bar, overlayRevealDuration, {
        ease: overlayRevealEaseStart,
        x: $(window).width() * 0.05,
        y: controlEndY,
        width: barGrowActive
    }, 0);
    TweenMax.to($pointsOverlayBackgroundActive, overlayRevealDuration, {
        opacity: 1
    }, 0);
};

function overlayFlyInAnimationFullScreen() {
    pointCounterActions.container.active();
    statActions.container.active();
    TweenMax.to($playButtonContainer, overlayRevealDuration, {
        ease: overlayRevealEaseStart,
        y: controlEndY
    }, 0);
    TweenMax.to($playButton, overlayRevealDuration, {
        opacity: 1
    }, 0);
    TweenMax.to($muteButtonContainer, overlayRevealDuration, {
        ease: overlayRevealEaseStart,
        y: controlEndY
    }, 0);
    TweenMax.to($muteButton, overlayRevealDuration, {
        opacity: 1
    }, 0);
    TweenMax.to($fullscreenButtonContainer, overlayRevealDuration, {
        ease: overlayRevealEaseStart,
        y: controlEndY
    }, 0);
    TweenMax.to($fullscreenButton, overlayRevealDuration, {
        opacity: 1
    }, 0);
    TweenMax.to(bar, overlayRevealDuration, {
        ease: overlayRevealEaseStart,
        x: $(window).width() * 0.05,
        y: controlEndY,
        width: barGrowFullscreenActive
    }, 0);
    TweenMax.to($pointsOverlayBackgroundActive, overlayRevealDuration, {
        opacity: 1
    }, 0);
};

function overlayFlyOutAnimation() {
    pointCounterActions.container.inactive();
    statActions.container.inactive();
    TweenMax.to($playButtonContainer, overlayRevealDuration, {
        ease: overlayRevealEaseEnd,
        y: $(window).width() * 0.025
    }, 0);
    TweenMax.to($playButton, overlayRevealDuration, {
        opacity: 0
    }, 0);
    TweenMax.to($muteButtonContainer, overlayRevealDuration, {
        ease: overlayRevealEaseEnd,
        y: $(window).width() * 0.025
    }, 0);
    TweenMax.to($muteButton, overlayRevealDuration, {
        opacity: 0
    }, 0);
    TweenMax.to($fullscreenButtonContainer, overlayRevealDuration, {
        ease: overlayRevealEaseEnd,
        y: $(window).width() * 0.025
    }, 0);
    TweenMax.to($fullscreenButton, overlayRevealDuration, {
        opacity: 0
    }, 0);
    TweenMax.to(bar, overlayRevealDuration, {
        ease: overlayRevealEaseEnd,
        y: $(window).width() * 0.025
    }, 0);
    TweenMax.to(bar, overlayRevealDurationSize, {
        ease: overlayRevealEaseEndSize,
        width: barGrowInactive,
        x: 0
    }, 0);
    TweenMax.to($pointsOverlayBackgroundActive, overlayRevealDuration, {
        opacity: 0
    }, 0);
};

function overlayFlyOutAnimationFullScreen() {
    pointCounterActions.container.inactive();
    statActions.container.inactive();
    TweenMax.to($playButtonContainer, overlayRevealDuration, {
        ease: overlayRevealEaseEnd,
        y: $(window).width() * 0.025
    }, 0);
    TweenMax.to($playButton, overlayRevealDuration, {
        opacity: 0
    }, 0);
    TweenMax.to($muteButtonContainer, overlayRevealDuration, {
        ease: overlayRevealEaseEnd,
        y: $(window).width() * 0.025
    }, 0);
    TweenMax.to($muteButton, overlayRevealDuration, {
        opacity: 0
    }, 0);
    TweenMax.to($fullscreenButtonContainer, overlayRevealDuration, {
        ease: overlayRevealEaseEnd,
        y: $(window).width() * 0.025
    }, 0);
    TweenMax.to($fullscreenButton, overlayRevealDuration, {
        opacity: 0
    }, 0);
    TweenMax.to(bar, overlayRevealDuration, {
        ease: overlayRevealEaseEnd,
        y: $(window).width() * 0.025
    }, 0);
    TweenMax.to(bar, overlayRevealDurationSize, {
        ease: overlayRevealEaseEndSize,
        width: barGrowFullscreenInactive,
        x: 0
    }, 0);
    TweenMax.to($pointsOverlayBackgroundActive, overlayRevealDuration, {
        opacity: 0
    }, 0);
};

function rotateLevels() {
    switch (true) {
    case $(this).is('#rotate-level-1'):
        console.log('Level 1');
        break;
    case $(this).is('#rotate-level-2'):
        console.log('Level 2');
        break;
    case $(this).is('#rotate-level-3'):
        console.log('Level 3');
        break;
    case $(this).is('#rotate-level-4'):
        console.log('Level 4');
        break;
    case $(this).is('#rotate-level-5'):
        console.log('Level 5');
        break;
    }
};
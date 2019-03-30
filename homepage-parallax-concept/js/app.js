var app = {
    init: function () {
        this.cacheDOM();
        this.style();
        this.hoverActions();
    },
    cacheDOM: function () {
        this.body = $('body');
        this.heroForegroundScene = document.getElementById('hero-fg-scene');
        this.heroForegroundParallax = new Parallax(app.heroForegroundScene);

        this.pageTracker = $('#page-tracker');
        this.pageTrackerHeight = app.pageTracker.height();
        this.pageTrackerLineTop = $('#page-tracker-line-top');
        this.pageTrackerLineBottom = $('#page-tracker-line-bottom');

        this.pleaseUseChrome = $('#please-use-chrome');
        this.container = $('#container');
        this.containerBackground = $('#container-bg');
        this.wrapper = $('#wrapper');
        this.wrapperOffsetLeft = app.wrapper.offset().left;
        this.images = $('img');
        this.videos = $('video');

        this.isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

        this.backgroundVideo = $('#bgvid');
        this.backgroundVideoWidth = 0;
        this.backgroundVideoHeight = 0;
        this.backgroundVideo2 = $('#bgvid2');
        this.backgroundVideo2Width = 0;
        this.backgroundVideo2Height = 0;

        this.parallaxFront = $('.parallax-front');
        this.parallaxMiddle = $('.parallax-middle');
        this.parallaxBack = $('.parallax-back');

        this.parallaxStartY = 0;

        this.parallaxFrontIntervalNumber = 0.25;
        this.parallaxMiddleIntervalNumber = 0.15;
        this.parallaxBackIntervalNumber = 0.05;
        this.parallaxFrontInterval = window.pageYOffset * 0.25;
        this.parallaxMiddleInterval = window.pageYOffset * 0.15;
        this.parallaxBackInterval = window.pageYOffset * 0.05;

        this.newParallaxFrontY;
        this.newParallaxMiddleY;
        this.newParallaxBackY;

        this.overlay = $('.overlay');
        this.heroVideoOverlay = $('#hero-vid-overlay');
        this.heroVideoOverlay2 = $('#hero-vid-overlay2');

        this.triggerItem = $('.trigger-item');
        this.startAfterTop = $('.start-after-top');
        this.triggerItemStartY = 50;
        this.triggerItemEndY = 0;
        this.triggerItemEase = Expo.easeOut;

        this.triggerItemTracker = [];
        this.triggerItemProps = [];
        this.tileProps = [];

        this.header = $('#header');
        this.headerHeight = app.header.height();
        this.headerBackground = $('#header-bg');
        this.headerContent = $('#header-content');
        this.logoContainer = $('#logo-container');
        this.logo = $('#logo');
        this.logoWhite = $('#logo-white');

        this.scrollAfterTopDuration = 0.5;

        this.oldFromTop = window.pageYOffset;
        this.newFromTop = window.pageYOffset;

        this.oldWidth = 0;
        this.newWidth = $(window).width();

        this.scrollFunctionActive = true;
        this.yogaSceneInitialized = false;
        this.scrolledPastTop = false;

        this.heroForegroundScene = $('#hero-fg-scene');
        this.heroBackgroundScene = $('#hero-bg-scene');
        this.iPhoneScene = $('#iphone-scene');
        this.yogaScene = $('.yoga-scene');
        this.scene = $('.scene');
        this.layer = $('.layer');
        this.layerImage = $('.layer img');

        this.videoContainer = $('#video-container');
        this.heroForegroundSceneMonitor = $('#hero-fg-scene-monitor');
        this.heroForegroundSceneMonitorScreen = $('#hero-fg-scene-monitor-screen');
        this.heroForegroundSceneMonitorBackdrop = $('#hero-fg-scene-monitor-backdrop');
        this.heroBackgroundSceneBackground = $('#hero-bg-scene-bg');
        this.video = $('.video');

        this.hero = $('#hero');
        this.heroBackground = $('#hero-bg');
        this.heroContent = $('#hero-content');
        this.heroHeader = $('#hero-header');
        this.heroDescription = $('#hero-description');
        this.heroCTA = $('#hero-cta');
        this.heroCTABackground = $('#hero-cta-bg');
        this.heroCTABackgroundSkewX = 7;
        this.heroCTAHover = $('#hero-cta-hover');
        this.heroVideoBackground = $('#hero-vid-bg');
        this.videoBackground = $('.video-bg');

        this.sections = $('#sections');
        this.section = $('.section');
        this.sectionDescription = $('.section-description');
        this.firstSectionBackground = $('#first-section-bg');
        this.lastSectionBackground = $('#last-section-bg');
        this.sectionBackground = $('.section-bg');
        this.sectionImageContainer = $('.section-img-container');
        this.sectionImage = $('.section-img');

        this.duffelbagImageContainer = $('#duffelbag-img-container');
        this.duffelbagImage = $('#duffelbag-img');
        this.iPhoneImageContainer = $('#p90x-iphone-img-container');
        this.iPhoneImage = $('#p90x-iphone-img');
        this.iPadImageContainer = $('#p90x-ipad-img-container');
        this.iPadImage = $('#p90x-ipad-img');

        this.gymbagImageContainer = $('#gymbag-img-container');
        this.gymbagImage = $('#gymbag-img');
        this.girlYogaImageContainer = $('#girl-yoga-img-container');
        this.girlYogaImage = $('#girl-yoga-img');
        this.apartmentImageContainer = $('#apartment-img-container');
        this.apartmentImage = $('#apartment-img');
        this.programTileContainer = $('#program-tile-container');
        this.programTileContainerInner = $('#program-tile-container-inner');
        this.programTile = $('.program-tile');
        this.programTileImage = $('.program-tile-img');

        this.tilesStartX = 0;
        this.tileStartZ = 0;
        this.tileEndZ = 800;

        this.tilesTriggered = false;

        this.tileZIndex = 100;
        this.tileXDelayVal = 0;
        this.tileZDelayVal = 0;
        this.tileOpacityDelayVal = -3;
        this.tileRotationYDelayVal = 0;
        this.tileSkewYDelayVal = 0;

        this.heroForegroundSceneY = 0;
        this.iPhoneSceneX = 0;
        this.iPhoneSceneY = 0;
        this.iPadSceneX = 0;
        this.iPadSceneY = 0;
        this.yogaSceneY = 500;
        this.apartmentImageY = 0;
        this.girlYogaImageY = 0;
        this.containerBackgroundOpacity = 0;
        this.heroVideoOverlay2Opacity = 0;
        this.heroForegroundSceneOpacity = 1.5;
        this.heroBackgroundOpacity = 0;

        this.windowScrolltop;
        this.windowScrolltopPercentage;

        this.pageTrackerLineTopFromTop = 0;
        this.pageTrackerLineBottomFromTop = 0;

        this.monitorScreenScrollInterval;
        this.monitorBackdropScrollInterval;
        this.iPadScrollInterval;
        this.iPhoneScrollInterval;
        this.girlYogaScrollInterval;
        this.apartmentScrollInterval;

        this.newMonitorScreenY;
        this.newMonitorBackdropY;
        this.newiPadY;
        this.newiPhoneY;
        this.newGirlYogaY;
        this.newApartmentY;
    },
    style: function () {
        this.images.imagesLoaded(function () {
            app.backgroundVideo.load();
            app.backgroundVideoWidth = app.backgroundVideo.width();
            app.backgroundVideoHeight = app.backgroundVideo.height();
            app.backgroundVideo2.load();
            app.backgroundVideo2Width = app.backgroundVideo2.width();
            app.backgroundVideo2Height = app.backgroundVideo2.height();
            TweenMax.set(app.overlay, {
                opacity: 1
            });
            if (app.isChrome) {
                TweenMax.set(app.container, {
                    opacity: 1,
                    userSelect: 'none'
                });
            } else {
                TweenMax.set(app.pleaseUseChrome, {
                    opacity: 1,
                    userSelect: 'none'
                });
            }
            TweenMax.set($('body, html'), {
                scrollTop: 0
            });
            TweenMax.set(app.logoContainer, {
                perspective: 800,
                perspectiveOrigin: 'center center',
                transformStyle: '2d'
            });
            TweenMax.set(app.logo, {
                transformOrigin: 'center bottom',
                rotationX: 0
            });
            TweenMax.set(app.logoWhite, {
                transformOrigin: 'center top',
                rotationX: 90,
                opacity: 0
            });
            TweenMax.set(app.heroBackgroundScene, {
                perspective: 800,
                perspectiveOrigin: 'center',
                transformStyle: '2d'
            });
            var clipCoords = 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)';
            var heroBackgroundClipCoords = `polygon(${app.hero.offset().left}px ${app.hero.offset().top}px, ${app.hero.offset().left + app.hero.width()}px ${app.hero.offset().top}px, 100% 100%, 0% 100%)`;
            TweenMax.set(app.hero, {
                '-webkit-clip-path': clipCoords,
                '-ms-clip-path': clipCoords,
                '-moz-clip-path': clipCoords,
                '-o-clip-path': clipCoords,
                'clip-path': clipCoords
            });
            TweenMax.set(app.heroBackgroundScene, {
                x: app.hero.offset().left * -1,
                y: app.hero.offset().top * -1
            });
            TweenMax.set(app.triggerItem, {
                y: app.triggerItemEndY
            });
            TweenMax.set(app.firstSectionBackground, {
                rotation: 2
            });
            TweenMax.set(app.lastSectionBackground, {
                top: app.firstSectionBackground.height()
            });
            TweenMax.set(app.heroForegroundSceneMonitor, {
                top: `-${app.heroForegroundSceneMonitor.height() * 0.25}`,
                left: `-${app.heroForegroundSceneMonitor.width() * 0.15}`
            });
            TweenMax.set(app.heroContent, {
                height: app.heroForegroundSceneMonitor.height() * 0.6,
                left: app.heroForegroundSceneMonitor.width() + parseInt(app.heroForegroundSceneMonitor.css('left').replace(/[^-\d\.]/g, ''))
            });
            TweenMax.set(app.heroHeader, {
                top: Math.abs(parseInt(app.heroForegroundSceneMonitor.css('left').replace(/[^-\d\.]/g, ''))) * 0.45
            });
            TweenMax.set(app.heroDescription, {
                top: (parseInt(app.heroHeader.css('top').replace(/[^-\d\.]/g, '')) + app.heroHeader.height()) * 1
            });
            TweenMax.set(app.heroCTA, {
                top: (parseInt(app.heroDescription.css('top').replace(/[^-\d\.]/g, '')) + app.heroDescription.height()) * 1.1,
            });
            TweenMax.set(app.heroCTABackground, {
                skewX: app.heroCTABackgroundSkewX
            });
            TweenMax.set(app.heroCTAHover, {
                scale: 0,
                skewX: `-${app.heroCTABackgroundSkewX}`
            });
            TweenMax.set(app.iPhoneScene, {
                top: `-${app.iPhoneScene.height() * 0.15}`,
                right: `-${app.iPhoneScene.width() * 0.6}`
            });
            TweenMax.set(app.iPhoneImageContainer, {
                top: `${app.iPhoneImageContainer.height() * 0.9}`,
                left: `-${app.iPhoneImageContainer.width() * 2.1}`
            });
            //            console.log(app.iPhoneImageContainer.offset().top);
            TweenMax.set(app.iPadImageContainer, {
                top: `${app.iPadImageContainer.height() * 0.65}`,
                left: `-${app.iPadImageContainer.width() * 1.925}`
            });
            TweenMax.set(app.gymbagImage, {
                right: `-${app.gymbagImage.width() * 0.4}`
            });
            TweenMax.set(app.yogaScene.eq(0), {
                top: `${(app.section.eq(0).height() * 1.8) - app.programTileContainer.height()}`
            });
            TweenMax.set(app.yogaScene.eq(1), {
                top: `${app.section.eq(1).height() * 1.8}`
            });
            TweenMax.set(app.girlYogaImageContainer, {
                top: `${(app.girlYogaImageContainer.height() * 0.3) + 150}`,
                left: `${(app.container.width() * 0.5 - (app.girlYogaImageContainer.width() * 0.2))}`,
                right: 'initial'
            });
            TweenMax.set(app.apartmentImageContainer, {
                top: `${app.girlYogaImageContainer.height() * 0.25}`
            });
            TweenMax.set(app.heroForegroundSceneMonitorBackdrop, {
                '-webkit-clip-path': 'polygon(0% 0%, 565px 141px, 599px 471px, 30px 420px)',
                '-ms-clip-path': 'polygon(0% 0%, 565px 141px, 599px 471px, 30px 420px)',
                '-moz-clip-path': 'polygon(0% 0%, 565px 141px, 599px 471px, 30px 420px)',
                '-o-clip-path': 'polygon(0% 0%, 565px 141px, 599px 471px, 30px 420px)',
                'clip-path': 'polygon(0% 0%, 565px 141px, 599px 471px, 30px 420px)'
            });
            TweenMax.set(app.yogaScene, {
                x: `-${app.wrapper.offset().left}`
            });
            TweenMax.set(app.backgroundVideo, {
                x: (app.videoContainer.width() / 2) - (app.backgroundVideoWidth / 2),
                y: (app.videoContainer.height() / 2) - (app.backgroundVideoHeight / 2)
            });
            TweenMax.set(app.backgroundVideo2, {
                x: (app.heroVideoBackground.width() / 2) - (app.backgroundVideo2Width / 2),
                y: (app.heroVideoBackground.height() / 2) - (app.backgroundVideo2Height / 2)
            });
            for (var i = 0; i < app.triggerItem.length; i++) {
                app.triggerItemTracker.push({
                    triggered: false
                });
                app.triggerItemProps.push({
                    offsetTop: app.triggerItem.eq(i).offset().top,
                    height: app.triggerItem.eq(i).height(),
                    top: parseInt(app.triggerItem.eq(i).css('top').replace(/[^-\d\.]/g, '')),
                    parallaxStartY: 0,
                    parallaxIntervalNumber: null,
                    parallaxInterval: null,
                    newParallaxY: 0,
                    conditionChecker: function (i, newParallaxY) {
                        return (
                            app.pageTrackerLineTopFromTop + app.headerHeight > app.triggerItem.eq(i).offset().top + app.triggerItem.eq(i).height() ||
                            app.pageTrackerLineBottomFromTop < app.triggerItem.eq(i).offset().top + newParallaxY
                        )
                    }
                });
                app.triggerItemTracker.push({
                    triggered: false
                });
                if (app.triggerItem.eq(i).hasClass('parallax-front')) {
                    app.triggerItemProps[i].parallaxIntervalNumber = app.parallaxFrontIntervalNumber;
                    app.triggerItemProps[i].parallaxInterval = app.parallaxFrontInterval;
                }
                if (app.triggerItem.eq(i).hasClass('parallax-middle')) {
                    app.triggerItemProps[i].parallaxIntervalNumber = app.parallaxMiddleIntervalNumber;
                    app.triggerItemProps[i].parallaxInterval = app.parallaxMiddleInterval;
                }
                if (app.triggerItem.eq(i).hasClass('parallax-back')) {
                    app.triggerItemProps[i].parallaxIntervalNumber = app.parallaxBackIntervalNumber;
                    app.triggerItemProps[i].parallaxInterval = app.parallaxBackInterval;
                }
            }
            for (var i = 0; i < app.programTile.length; i++) {
                app.tileProps.push({
                    zIndex: app.tileZIndex--,
                    xDelay: app.tileXDelayVal -= 1,
                    zDelay: app.tileZDelayVal -= 0.1,
                    opacityDelay: app.tileOpacityDelayVal -= 0.9,
                    skewYDelay: app.tileSkewYDelayVal -= 1
                });
            }
            for (var i = 0; i < app.triggerItem.length; i++) {
                //                if (app.triggerItem.eq(i).hasClass('front')) {
                //                    app.triggerItemProps[i].parallaxIntervalNumber = app.parallaxFrontIntervalNumber;
                //                    app.triggerItemProps[i].parallaxInterval = app.parallaxFrontInterval;
                //                }
                //                if (app.triggerItem.eq(i).hasClass('middle')) {
                //                    app.triggerItemProps[i].parallaxIntervalNumber = app.parallaxMiddleIntervalNumber;
                //                    app.triggerItemProps[i].parallaxInterval = app.parallaxMiddleInterval;
                //                }
                //                if (app.triggerItem.eq(i).hasClass('back')) {
                //                    app.triggerItemProps[i].parallaxIntervalNumber = app.parallaxBackIntervalNumber;
                //                    app.triggerItemProps[i].parallaxInterval = app.parallaxBackInterval;
                //                }
                TweenMax.set(app.triggerItem.eq(i), {
                    y: app.triggerItemProps[i].parallaxStartY - (window.pageYOffset * app.triggerItemProps[i].parallaxIntervalNumber)
                });
                //                console.log(app.triggerItem.eq(i).offset().top);
            }

            //            TweenMax.set(app.parallaxFront, {
            //                y: app.parallaxStartY - app.parallaxFrontInterval
            //            });
            //            TweenMax.set(app.parallaxMiddle, {
            //                y: app.parallaxStartY - app.parallaxMiddleInterval
            //            });
            //            TweenMax.set(app.parallaxBack, {
            //                y: app.parallaxStartY - app.parallaxBackInterval
            //            });
            TweenMax.set(app.programTileContainer, {
                height: app.programTile.height()
            });
            TweenMax.set(app.programTileContainerInner, {
                perspective: 800,
                perspectiveOrigin: 'center',
                transformStyle: '2d',
                x: app.tilesStartX,
                width: (app.programTile.width() + (parseInt(app.programTile.css('margin-right').replace(/[^-\d\.]/g, '')))) * (app.programTile.length)
            });
            TweenMax.set(app.programTile, {
                rotationY: 0,
                scale: app.tileStartZ,
                backfaceVisibility: 'hidden',
                transformOrigin: 'center bottom'
            });
        });
    },
    windowResizePropertiesChange: function () {
        console.log('changed');
        app.wrapperOffsetLeft = app.wrapper.offset().left;
        TweenMax.set(app.yogaScene, {
            x: `-${app.wrapper.offset().left}`
        });
        TweenMax.set(app.girlYogaImageContainer, {
            left: `${(app.container.width() * 0.5 - (app.girlYogaImageContainer.width() * 0.2))}`,
            right: 'initial'
        });
        TweenMax.set(app.backgroundVideo, {
            x: (app.videoContainer.width() / 2) - (app.backgroundVideoWidth / 2),
            y: (app.videoContainer.height() / 2) - (app.backgroundVideoHeight / 2)
        });
        TweenMax.set(app.backgroundVideo2, {
            x: (app.heroVideoBackground.width() / 2) - (app.backgroundVideo2Width / 2),
            y: (app.heroVideoBackground.height() / 2) - (app.backgroundVideo2Height / 2)
        });
    },
    scrollTopPropertiesChange: function () {
        //        console.log('new top');
        app.windowScrolltop = window.pageYOffset;
        app.windowScrolltopPercentage = app.windowScrolltop / 350;
        app.pageTrackerLineTopFromTop = app.pageTrackerLineTop.offset().top;
        app.pageTrackerLineBottomFromTop = app.pageTrackerLineBottom.offset().top;
        //        console.log(`TOP LINE: ${app.pageTrackerLineTopFromTop}`);
        //        console.log(`BOTTOM LINE: ${app.pageTrackerLineBottomFromTop}`);
        //        console.log(`Tracker Line is ${app.pageTrackerLineBottomFromTop}`);
        //        console.log(`Girl Yoga is ${app.girlYogaImageContainer.offset().top}`);

        //        TweenMax.set(app.parallaxFront, {
        //            y: app.newParallaxFrontY
        //        });
        //        TweenMax.set(app.parallaxMiddle, {
        //            y: app.newParallaxMiddleY
        //        });
        //        TweenMax.set(app.parallaxBack, {
        //            y: app.newParallaxBackY
        //        });

        for (var i = 0; i < app.triggerItem.length; i++) {
            //            app.triggerItemProps[i].offsetTop = app.triggerItem.eq(i).offset().top;
            //            console.log(`ipad offset top is ${app.iPadImageContainer.offset().top}`);
            //            console.log(`ipad cached offset top is ${app.triggerItemProps[2].offsetTop}`);
            app.triggerItemProps[i].parallaxInterval = window.pageYOffset * app.triggerItemProps[i].parallaxIntervalNumber;
            app.triggerItemProps[i].newParallaxY = app.triggerItemProps[i].parallaxStartY - app.triggerItemProps[i].parallaxInterval;
            //            console.log(app.triggerItem.eq(2).offset().top);
            if (!app.triggerItemProps[i].conditionChecker(i, app.triggerItemProps[i].newParallaxY)) {
                TweenMax.set(app.triggerItem.eq(i), {
                    top: app.triggerItemProps[i].top
                });
                TweenMax.set(app.triggerItem.eq(i), {
                    y: app.triggerItemProps[i].newParallaxY,
                    opacity: 1
                });
                if (app.triggerItem.eq(i).hasClass('tiles')) {
                    app.tilesTriggered = true;
//                    TweenMax.set(app.programTileContainerInner, {
//                        x: `-${window.pageYOffset * 0.1}`
//                    });
                }
                if (!(app.triggerItem.eq(i).hasClass('tiles'))) {
                    app.tilesTriggered = false;
//                    TweenMax.set(app.programTileContainerInner, {
//                        x: 0
//                    });
                }
                //                if (app.triggerItem.eq(i).hasClass('tiles')) {
                //                    app.tilesTriggered = true;
                //                } else {
                //                    app.tilesTriggered = false;
                //                }
            }

            if (app.triggerItemProps[i].conditionChecker(i, app.triggerItemProps[i].newParallaxY)) {
                TweenMax.set(app.triggerItem.eq(i), {
                    opacity: 0,
                    y: app.triggerItemProps[i].parallaxStartY
                });
                app.tilesTriggered = false;
            }

            if (app.tilesTriggered) {
                for (var i = 0; i < app.programTile.length; i++) {
                    //                    app.tileProps[i].ZDelay+=(window.pageYOffset);
                    if ((window.pageYOffset * 0.0015) + app.tileProps[i].zDelay <= 0) {
                        TweenMax.set(app.programTile.eq(i), {
                            opacity: 0,
                            zIndex: app.tileProps[i].zIndex,
                            //                        x: (app.tileXDelayVal + app.tileProps[i].xDelay) - (window.pageYOffset * 0.1),
                            //                        x: `-${(window.pageYOffset * 0.05) + app.tileProps[i].opacityDelay}`,
                            scale: (window.pageYOffset * 0.0015) + app.tileProps[i].zDelay,
//                            opacity: (window.pageYOffset * 0.01) + app.tileProps[i].opacityDelay,
                            //                        skewY: app.tileProps[i].skewYDelay - (window.pageYOffset * 0.05)
                        });
                    } else {
                        TweenMax.set(app.programTile.eq(i), {
                            opacity: 1,
                            zIndex: app.tileProps[i].zIndex,
                            //                        x: (app.tileXDelayVal + app.tileProps[i].xDelay) - (window.pageYOffset * 0.1),
                            //                        x: `-${(window.pageYOffset * 0.05) + app.tileProps[i].opacityDelay}`,
                            scale: (window.pageYOffset * 0.0015) + app.tileProps[i].zDelay,
//                            opacity: (window.pageYOffset * 0.01) + app.tileProps[i].opacityDelay,
                            //                        skewY: app.tileProps[i].skewYDelay - (window.pageYOffset * 0.05)
                        });
                    }
                }
            } else {
                TweenMax.set(app.programTile, {
                    scale: app.tileStartZ,
                    x: app.tilesStartX,
                });
            }
            //            if ((app.pageTrackerLineBottomFromTop >= (app.triggerItem.eq(i).offset().top + app.triggerItem.eq(i).height() / 2)) && (app.triggerItemTracker[i].triggered === false)) {
            //                app.triggerItemTracker[i].triggered = true;
            //                app.triggerItem.eq(i).hasClass('parallax-front') ? () => {
            //                    TweenMax.set(app.triggerItem.eq(i), {
            //                        y: app.newParallaxFrontY,
            //                        opacity: 1
            //                    });
            //                }
            //                app.triggerItem.eq(i).hasClass('parallax-middle') ? () => {
            //                    TweenMax.set(app.triggerItem.eq(i), {
            //                        y: app.newParallaxMiddleY,
            //                        opacity: 1
            //                    });
            //                }
            //                app.triggerItem.eq(i).hasClass('parallax-back') ? () => {
            //                    TweenMax.set(app.triggerItem.eq(i), {
            //                        y: app.newParallaxBackY,
            //                        opacity: 1
            //                    });
            //                }
            //            }
            //            if (app.pageTrackerLineBottomFromTop < (app.triggerItem.eq(i).offset().top + app.triggerItem.eq(i).height() / 2)) {
            //                app.triggerItemTracker[i].triggered = false;
            //                TweenMax.set(app.triggerItem.eq(i), {
            //                    opacity: 0
            //                });
            //            }
        }

        console.log(app.tilesTriggered);

        if ((app.windowScrolltop > 0) && (!app.scrolledPastTop)) {
            app.scrolledPastTop = true;
            TweenMax.to(app.headerBackground, app.scrollAfterTopDuration, {
                opacity: 1
            }, 0);
            TweenMax.to(app.logo, app.scrollAfterTopDuration, {
                opacity: 0,
                rotationX: -90,
                ease: Quad.easeOut
            }, 0);
            TweenMax.to(app.logoWhite, app.scrollAfterTopDuration, {
                opacity: 1,
                rotationX: 0,
                ease: Quad.easeOut
            }, 0);
            TweenMax.to(app.videoContainer, app.scrollAfterTopDuration, {
                opacity: 0
            }, 0);
            TweenMax.to(app.yogaScene, app.scrollAfterTopDuration, {
                opacity: 1
            }, 0);
            TweenMax.to(app.startAfterTop, app.scrollAfterTopDuration, {
                opacity: 1
            }, 0);
        }
        if ((app.windowScrolltop <= 0) && (app.scrolledPastTop)) {
            app.scrolledPastTop = false;
            TweenMax.to(app.headerBackground, app.scrollAfterTopDuration, {
                opacity: 0
            }, 0);
            TweenMax.to(app.logo, app.scrollAfterTopDuration, {
                opacity: 1,
                rotationX: 0,
                ease: Quad.easeOut
            }, 0);
            TweenMax.to(app.logoWhite, app.scrollAfterTopDuration, {
                opacity: 0,
                rotationX: 90,
                ease: Quad.easeOut
            }, 0);
            TweenMax.to(app.videoContainer, app.scrollAfterTopDuration, {
                opacity: 1
            }, 0);
            TweenMax.to(app.yogaScene, app.scrollAfterTopDuration, {
                opacity: 0
            }, 0);
            TweenMax.to(app.startAfterTop, app.scrollAfterTopDuration, {
                opacity: 0
            }, 0);
        }
    },
    hoverActions: function () {
        app.heroCTA.on('mouseover', function () {
            TweenMax.set(app.heroCTAHover, {
                scale: 0,
                opacity: 0.35
            });
            TweenMax.to(app.heroCTAHover, 0.75, {
                scale: 8,
                opacity: 0,
                ease: Quart.easeOut
            }, 0);
        });
    },
    scrollActionsRAF: function () {
        if (!app.yogaSceneInitialized) {
            app.yogaSceneInitialized = true;
            TweenMax.set(app.yogaScene, {
                opacity: 0,
                zIndex: 10,
                left: 'initial'
            });
            app.yogaScene.css({
                'clip': 'initial'
            });
        }

        //WINDOW RESIZE METHOD
        if (app.oldWidth !== app.newWidth) {
            app.windowResizePropertiesChange();
        }

        //SCROLLED FROM TOP METHOD
        if (app.oldFromTop !== app.newFromTop) {
            app.scrollTopPropertiesChange();
        }

        app.oldFromTop = app.newFromTop;
        app.newFromTop = window.pageYOffset;
        app.oldWidth = app.newWidth;
        app.newWidth = $(window).width();

        window.requestAnimationFrame(app.scrollActionsRAF);
    }
}

app.init();

window.requestAnimationFrame(app.scrollActionsRAF);

if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
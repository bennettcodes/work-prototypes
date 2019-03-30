var blockMenuHeaderScroll = false;

sarafiZoomPrevention();
var
    bodyHTML = $('body, html'),

    loadAnimDone = false,

    fps = 60,
    now,
    then = Date.now(),
    interval = 1000 / fps,
    delta,

    initBlurFps = fps,
    initBlurNow,
    initBlurThen = Date.now(),
    initBlurInterval = 1000 / initBlurFps,
    initBlurDelta,

    rafEventsFps = fps,
    rafEventsNow,
    rafEventsThen = Date.now(),
    rafEventsInterval = 1000 / rafEventsFps,
    rafEventsDelta,

    rafEventsAgainFps = fps,
    rafEventsAgainNow,
    rafEventsAgainThen = Date.now(),
    rafEventsAgainInterval = 1000 / rafEventsAgainFps,
    rafEventsAgainDelta,

    request,
    requestAgain,
    initBlurRequest,

    cachedImages = $('#cached-images'),
    cachedImage,
    container = $('#container'),
    topCount = $('#top-count'),

    nav = $('#nav'),
    navTl = new TimelineMax(),
    navLine = $('#nav-line'),
    navLineWidth = 0,
    navItemContainer,
    navItem,
    navItemInactiveOpacity = 1,
    navItemActiveOpacity = 1,

    bottomFade = $('#bottom-fade'),
    bottomFadeBreak1 = 0,
    bottomFadeBreak2 = 18,
    bottomFadeBreak3 = 50,
    bottomFadeBreak4 = 100,

    containerBackgrounds = $('#container-bgs'),
    containerBackground = $('.container-bg'),
    activeContainerBackground = $('.active-container-bg'),
    activeContainerBackgroundZIndex = 1000,
    allProgs = $('.program'),

    slogan = $('.slogan'),
    sloganInner = $('.slogan-inner'),
    sloganItem = $('.slogan-item'),
    sloganText = $('.slogan-text'),

    c = document.getElementById('c'),
    cx = c.getContext('2d'),
    cbg = {
        rgb: '255,255,255',
        a: 1
    },

    bgScrollContainer = $('.bg-scroll-container'),
    bgScroll = $('.bg-scroll'),
    containerBackgroundOverlay = $('.container-bg-overlay'),
    bgScrollItem = $('.bg-scroll-item'),
    logoContainer = $('.logo-container'),

    content = $('.content'),
    contentInner = $('.content-inner'),
    contentIntro = $('.content-intro'),
    contentH1 = $('.content-h1'),
    contentBody = $('.content-body'),
    contentP = $('.content-p'),
    contentPAlt = $('.content-p-alt-container .content-p'),

    logoContainerBlur = 30,
    logoContainerBlurChange = -1,
    logoContainerYEnd = 0,
    logo = $('.logo'),
    logoScale = 2,
    logoScale2 = 1,
    logoScale3 = 0.6,
    logoTransformOriginFirst = 'center center',
    logoTransformOriginSecond = 'center top',
    logoY = 0,
    logoYChange = 0,
    logoYChangeMult = -0.5,
    logoOpacity = 1,
    logoOpacityChange = 0,
    logoOpacityChangeMult = -0.0075,
    logoTl = new TimelineMax(),
    bgOverlayTop = $('.bg-overlay-top'),
    bgOverlayTopTl = new TimelineMax(),
    bgOverlayTopYEnd = [
        0.99,
        1
    ],
    bgOverlay = $('.bg-overlay'),

    transitionDuration = 0.25,

    Particle,
    particles = {},
    particleNum = 1,
    particleIndex = 0,
    mouseX = null,
    mouseY = null,
    fromTopOld,
    fromTopNew,

    runRaf,
    initDone = false,
    loadRan = false,
    imagesCached = false,
    rafActive = true,
    rafPaused = false,
    programsDefined = false,
    programsRedefined = false,
    overlayTopTriggered = false,
    firstBlurRun = false,
    blurRun = false,

    scrollSpeed = 0.5,

    currentScrollPosition = 0,

    frame = {
        count: [
                105,
                89,
                116,
                77,
                129
            ],
        start: [
                1,
                1,
                1,
                1,
                1
            ],
        end: [
                77,
                77,
                77,
                77,
                77
            ],
        offset: [
                0,
                0,
                0,
                0,
                60
            ],
        positions: [
                [],
                [],
                [],
                [],
                []
            ]
    },

    textFontWeight = [
        300,
        300,
        300,
        400,
        300
    ],

    textAltFontWeight = [
        400,
        400,
        400,
        400,
        400
    ],

    programIds = {
        be: 0,
        p90x: 1,
        piyo: 2,
        t25: 3,
        tdf: 4
    },

    programInitials = [
        'be',
        'p90x',
        'piyo',
        't25',
        'tdf'
    ],

    programColors = [
        {
            bg: '#456221',
            bgAlt: '-webkit-linear-gradient(left bottom, #416712 0%, #81b244 100%)',
            text: '#ffffff',
            textAlt: '#ffffff',
            bottomFade: {
                start: 'rgba(69,98,33,1)',
                end: 'rgba(69,98,33,0)'
            }
        },
        {
            bg: '#000000',
            bgAlt: '-webkit-linear-gradient(bottom left, #ba5815 0%, #ff9f5d 100%)',
            text: '#ffffff',
            textAlt: '#000000',
            bottomFade: {
                start: 'rgba(0,0,0,1)',
                end: 'rgba(0,0,0,0)'
            }
        },
        {
            bg: '#cc0066',
            bgAlt: '-webkit-linear-gradient(bottom left, #79003c 0%, #9f2160 100%)',
            text: '#ffffff',
            textAlt: '#ffffff',
            bottomFade: {
                start: 'rgba(204,0,102,1)',
                end: 'rgba(204,0,102,0)'
            }
        },
        {
            bg: '#f9c52d',
            bgAlt: '-webkit-linear-gradient(bottom left, #fe9601 0%, #fdd901 100%)',
            text: '#000000',
            textAlt: '#000000',
            bottomFade: {
                start: 'rgba(249,197,45,1)',
                end: 'rgba(249,197,45,0)'
            }
        },
        {
            bg: '#926daf',
            bgAlt: '-webkit-linear-gradient(bottom left, #725076 0%, #cfa6dc 100%)',
            text: '#ffffff',
            textAlt: '#ffffff',
            bottomFade: {
                start: 'rgba(146,109,175,1)',
                end: 'rgba(146,109,175,0)'
            }
        }
    ],

    programCount = programInitials.length,

    programImagesAdded = false,
    programPositionsAdded = [],

    programsInitial = [],
    programs = [],

    startingProgram = programIds.be,
    currentProgram,

    scroller = $('#scroller'),

    counter = 0,

    particlesRendered = false;

c.width = $('#c').outerWidth();
c.height = $('#c').outerHeight();

var w = c.width,
    h = c.height;

cx.fillStyle = `rgba(${cbg.rgb},${cbg.a})`;
cx.fillRect(0, 0, w, h);

TweenMax.set(topCount, {
    width: window.innerWidth,
    height: window.innerHeight
});

TweenMax.set(container, {
    height: window.innerHeight,
    opacity: 1,
    userSelect: 'none'
});

TweenMax.set(bgOverlay, {
    rotation: 5
});

TweenMax.set(logo, {
    scale: logoScale,
    transformOrigin: logoTransformOriginFirst
});

function initNav() {
    for (var i = 0; i < programCount; i++) {
        nav.prepend(`<div class="nav-item-container"><div id="${programInitials[i]}-nav-item" class="nav-item"></div></div>`);
        if (i === programCount - 1) {
            navItemContainer = $('.nav-item-container');
            navItem = $('.nav-item');
        }
    }
    for (var i = 0; i < programCount; i++) {
        TweenMax.set(navItem.eq(i), {
            width: navItemContainer.eq(i).width(),
            height: navItemContainer.eq(i).width()
        });
        TweenMax.set(nav, {
            height: navItemContainer.outerHeight()
        });
        TweenMax.set(nav, {
            x: window.innerWidth / 2 - nav.width() / 2,
            y: `-${nav.height()}`
        });
        TweenMax.set(bottomFade, {
            height: nav.height() * 8
        });
    }
    navLineWidth = ((navItemContainer.eq(1).width() * navItemContainer.length) + (parseInt(navItemContainer.css('margin-right')) * (navItemContainer.length - 1))) - navItemContainer.width();
    TweenMax.set(navLine, {
        width: navLineWidth,
        x: parseInt(navItemContainer.css('margin-right')) + (navItemContainer.width() / 2),
        opacity: navItemInactiveOpacity
    });
    TweenMax.set(navItem.eq(programCounter), {
        scale: 0.8,
        opacity: navItemActiveOpacity
    });
    TweenMax.set(navItem.not(navItem.eq(programCounter)), {
        scale: 0.3,
        opacity: navItemInactiveOpacity
    });
}

function initBlur() {

    initBlurRequest = requestAnimFrame(initBlur);

    initBlurNow = Date.now();
    initBlurDelta = initBlurNow - initBlurThen;

    if (initBlurDelta > initBlurInterval) {

        initBlurThen = initBlurNow - (initBlurDelta % initBlurInterval);

        if (logoContainerBlur > 0) {
            TweenMax.set(logoContainer, {
                filter: `blur(${logoContainerBlur}px)`
            });
            logoContainerBlur += logoContainerBlurChange;
        } else {
            cancelRequestAnimFrame(initBlurRequest);
            TweenMax.set(logoContainer, {
                filter: 'blur(0px)'
            });
            firstBlurRun = true;
        }
    }
}

function changeNav(thisCounter) {
    navTl.to(navItem.eq(thisCounter), 1, {
        scale: 0.8,
        opacity: navItemActiveOpacity,
        ease: Quart.easeOut
    }, 0);
    navTl.to(navItem.not(navItem.eq(thisCounter)), 1, {
        scale: 0.3,
        opacity: navItemInactiveOpacity,
        ease: Quart.easeOut
    }, 0);
}

function setProgramColors() {
    for (var i = 0; i < programCount; i++) {
        TweenMax.set(programs[i].bgOverlay, {
            backgroundColor: programs[i].programColors.bg
        });

        TweenMax.set(programs[i].containerBackground, {
            backgroundColor: programs[i].programColors.bg
        });
    }
}

function initLoad() {

    for (var i = 0; i < programCount; i++) {
        var currentInitials = programInitials[i],
            currentId = i;
        bgScrollItem = $('.bg-scroll-item');
        programImagesAdded = true;
    }
}

for (var i = 0; i < programCount; i++) {
    programPositionsAdded.push(false);
}

for (var i = 0; i < programCount; i++) {
    var
        initials = programInitials[i],
        bg = programColors[i].bg,
        bgAlt = programColors[i].bgAlt,
        text = programColors[i].text,
        textAlt = programColors[i].textAlt,
        bottomFadeStart = programColors[i].bottomFade.start,
        bottomFadeEnd = programColors[i].bottomFade.end,
        frameCount = frame.count[i],
        frameStart = frame.start[i],
        frameEnd = frame.end[i],
        framePositions = frame.positions[i],
        frameOffset = frame.offset[i],
        thisTextFontWeight = textFontWeight[i],
        thisTextAltFontWeight = textAltFontWeight[i];

    programsInitial.push({
        id: i,
        program: $(`#${initials}`),
        programColors: {
            bg: bg,
            bgAlt: bgAlt,
            text: text,
            textAlt: textAlt,
            bottomFade: {
                start: bottomFadeStart,
                end: bottomFadeEnd
            }
        },
        slogan: $(`#${initials}-slogan`),
        sloganInner: $(`#${initials}-slogan-inner`),
        sloganItem: $(`.${initials}-slogan-item`),
        sloganText: $(`.${initials}-slogan-text`),
        textFontWeight: thisTextFontWeight,
        textAltFontWeight: thisTextAltFontWeight,
        containerBackground: $(`#${initials}-container-bg`),
        containerBackgroundOverlay: $(`#${initials}-container-bg-overlay`),
        bgScrollContainer: $(`#${initials}-bg-scroll-container`),
        bgScrollContainerOpacity: 0,
        bgScrollContainerChangeMult: 0.95,
        bgScrollContainerOpacityChange: 0.02,
        bgScrollContainerHeight: $(`#${initials}-bg-scroll-container`).height(),
        bgScrollContainerZ: 0,
        bgScrollContainerChange: this.bgScrollContainerZ * -0.05,
        bgScroll: $(`#${initials}-bg-scroll`),
        bgScrollOpacity: 1,
        bgScrollOpacityChange: -0.02,
        bgScrollHeight: $(`#${initials}-bg-scroll`).height(),
        bgScrollItem: $(`.${initials}-bg-scroll-item`),
        bgScrollItemHeight: null,
        bgOverlayRotationStart: 15,
        bgOverlayRotationEnd: 0,
        bgOverlayTop: $('.bg-overlay-top'),
        bgOverlay: $(`#${initials}-bg-overlay`),
        logoContainer: $(`#${initials}-logo-container`),
        logoContainerBlur: 30,
        logoContainerBlur2: 30,
        logoContainerBlurChange: -1,
        logoContainerYEnd: 0,
        logo: $(`#${initials}-logo`),
        logoTransformOriginFirst: 'center center',
        logoTransformOriginSecond: 'center top',
        logoScale: 2,
        logoScaleChange: 0.01,
        logoOpacity: 0,
        logoOpacityChange: 0.01,

        content: $(`#${initials}-content`),
        contentPaddingTop: 0,
        contentInner: $(`#${initials}-content-inner`),
        contentIntro: $(`#${initials}-content-intro`),
        contentH1: $(`.${initials}-content-h1`),
        contentBody: $(`#${initials}-content-body`),
        contentBodyLastChild: $(`#${initials}-content-body .content-stagger:last-child`),
        contentP: $(`.${initials}-content-p`),
        contentPAltContainer: $(`#${initials}-content-p-alt-container`),
        contentPAlt: $(`#${initials}-content-p-alt-container .content-p`),
        contentStagger: $(`#${initials}-content .content-stagger`),

        initials: initials,
        tl: new TimelineMax(),
        frame: {
            count: frameCount,
            start: frameStart,
            end: frameEnd,
            positions: framePositions,
            offset: frameOffset
        },
        tick: 0,
        tickMult: 0.99,
        staggerVisible: false,
        imagesLoaded: false,
        stylesSet: false,
        vidDone: false,
        stagDone: false,
        introTriggered: false,
        imagesLoaded: false,
        imagesAdded: false,
        positionsAdded: false
    });
}

function reset() {
    if (!rafPaused) {
        currentProgram.tl.clear();
        cancelRequestAnimFrame(request);

        definePrograms();

        rafPaused = true;
    } else {
        rafEvents(currentProgram);
        rafPaused = false;
    }
}

function resetInstant(e) {
    if (e.type === 'swipeleft') {
        if (programCounter < programCount - 1) {
            programCounter++;
        } else {
            programCounter = 0;
        }
    }
    if (e.type === 'swiperight') {
        if (programCounter > 0) {
            programCounter--;
        } else {
            programCounter = programCount - 1;
        }
    }
    activeContainerBackgroundZIndex++;
    TweenMax.set(programs[programCounter].containerBackground, {
        zIndex: activeContainerBackgroundZIndex
    });
    TweenMax.set(nav, {
        zIndex: activeContainerBackgroundZIndex + 1
    });
    TweenMax.set(bgOverlayTop, {
        zIndex: activeContainerBackgroundZIndex - 1
    });
    TweenMax.set(allProgs, {
        zIndex: activeContainerBackgroundZIndex - 2
    });
    //    TweenMax.to(bottomFade, transitionDuration, {
    //        background: `-webkit-linear-gradient(bottom, ${programs[programCounter].programColors.bottomFade.start} ${bottomFadeBreak1}%, ${programs[programCounter].programColors.bottomFade.start} ${bottomFadeBreak2}%, ${programs[programCounter].programColors.bottomFade.end} 60%, ${programs[programCounter].programColors.bottomFade.end} ${bottomFadeBreak4}%)`
    //    }, 0);
    TweenMax.to(programs[programCounter].containerBackground, transitionDuration, {
        opacity: 1,
        onComplete: function () {
            initDone = false;
            TweenMax.set(container, {
                backgroundColor: programs[programCounter].programColors.bg
            });
            TweenMax.set(bottomFade, {
                opacity: 0
            });
            TweenMax.set(slogan, {
                opacity: 0
            });
            TweenMax.set(programs[programCounter].containerBackground.siblings('.container-bg'), {
                opacity: 0,
                zIndex: 0
            });
            TweenMax.set(programs[programCounter].containerBackground, {
                zIndex: 0
            });
            TweenMax.set(bgOverlayTop, {
                opacity: 0
            });
            TweenMax.set(containerBackgroundOverlay, {
                opacity: 0
            });
            TweenMax.set(programs[programCounter].program.siblings('.program'), {
                opacity: 0
            });
            cancelRequestAnimFrame(request);
            cancelRequestAnimFrame(requestAgain);
            programsDefined = false;
            currentProgram = programs[programCounter];
            redefinePrograms();
        }
    }, 0);
    TweenMax.to(navItem, transitionDuration, {
        backgroundColor: programs[programCounter].programColors.text
    }, 0);
    TweenMax.to(navLine, transitionDuration, {
        backgroundColor: programs[programCounter].programColors.text
    }, 0);
    //    TweenMax.to(allProgs, transitionDuration, {
    //        opacity: 0,
    //        onComplete: function () {
    //            cancelRequestAnimFrame(request);
    //            cancelRequestAnimFrame(requestAgain);
    //            programsDefined = false;
    //            currentProgram = programs[programCounter];
    //            redefinePrograms();
    //        }
    //    }, 0);
    navTl.clear();
    changeNav(programCounter);
}

function definePrograms() {

    programs = [];

    for (var i = 0; i < programCount; i++) {

        programs.push({
            id: programsInitial[i].id,
            program: programsInitial[i].program,
            programColors: {
                bg: programsInitial[i].programColors.bg,
                bgAlt: programsInitial[i].programColors.bgAlt,
                text: programsInitial[i].programColors.text,
                textAlt: programsInitial[i].programColors.textAlt,
                bottomFade: {
                    start: programsInitial[i].programColors.bottomFade.start,
                    end: programsInitial[i].programColors.bottomFade.end
                }
            },
            slogan: programsInitial[i].slogan,
            sloganInner: programsInitial[i].sloganInner,
            sloganItem: programsInitial[i].sloganItem,
            sloganText: programsInitial[i].sloganText,
            textFontWeight: programsInitial[i].textFontWeight,
            textAltFontWeight: programsInitial[i].textAltFontWeight,
            containerBackground: programsInitial[i].containerBackground,
            containerBackgroundOverlay: programsInitial[i].containerBackgroundOverlay,
            bgScrollContainer: programsInitial[i].bgScrollContainer,
            bgScrollContainerOpacity: programsInitial[i].bgScrollContainerOpacity,
            bgScrollContainerChangeMult: programsInitial[i].bgScrollContainerChangeMult,
            bgScrollContainerOpacityChange: programsInitial[i].bgScrollContainerOpacityChange,
            bgScrollContainerHeight: programsInitial[i].bgScrollContainerHeight,
            bgScrollContainerZ: programsInitial[i].bgScrollContainerZ,
            bgScrollContainerChange: programsInitial[i].bgScrollContainerChange,
            bgScroll: programsInitial[i].bgScroll,
            bgScrollOpacity: programsInitial[i].bgScrollOpacity,
            bgScrollOpacityChange: programsInitial[i].bgScrollOpacityChange,
            bgScrollHeight: programsInitial[i].bgScrollHeight,
            bgScrollItem: programsInitial[i].bgScrollItem,
            bgScrollItemHeight: programsInitial[i].bgScrollItemHeight,
            bgOverlayRotationStart: programsInitial[i].bgOverlayRotationStart,
            bgOverlayRotationEnd: programsInitial[i].bgOverlayRotationEnd,
            bgOverlayTop: programsInitial[i].bgOverlayTop,
            bgOverlay: programsInitial[i].bgOverlay,
            logoContainer: programsInitial[i].logoContainer,
            logoContainerBlur: programsInitial[i].logoContainerBlur,
            logoContainerBlur2: programsInitial[i].logoContainerBlur2,
            logoContainerBlurChange: programsInitial[i].logoContainerBlurChange,
            logoContainerYEnd: programsInitial[i].logoContainerYEnd,
            logo: programsInitial[i].logo,
            logoTransformOriginFirst: programsInitial[i].logoTransformOriginFirst,
            logoTransformOriginSecond: programsInitial[i].logoTransformOriginSecond,
            logoScale: programsInitial[i].logoScale,
            logoScaleChange: programsInitial[i].logoScaleChange,
            logoOpacity: programsInitial[i].logoOpacity,
            logoOpacityChange: programsInitial[i].logoOpacityChange,

            content: programsInitial[i].content,
            contentPaddingTop: programsInitial[i].contentPaddingTop,
            contentInner: programsInitial[i].contentInner,
            contentIntro: programsInitial[i].contentIntro,
            contentH1: programsInitial[i].contentH1,
            contentBody: programsInitial[i].contentBody,
            contentBodyLastChild: programsInitial[i].contentBodyLastChild,
            contentP: programsInitial[i].contentP,
            contentPAltContainer: programsInitial[i].contentPAltContainer,
            contentPAlt: programsInitial[i].contentPAlt,
            contentStagger: programsInitial[i].contentStagger,

            initials: programsInitial[i].initials,
            tl: programsInitial[i].tl,
            frame: {
                count: programsInitial[i].frame.count,
                start: programsInitial[i].frame.start,
                end: programsInitial[i].frame.end,
                positions: programsInitial[i].frame.positions,
                offset: programsInitial[i].frame.offset
            },
            tick: programsInitial[i].tick,
            tickMult: programsInitial[i].tickMult,
            staggerVisible: programsInitial[i].staggerVisible,
            imagesLoaded: programsInitial[i].imagesLoaded,
            stylesSet: programsInitial[i].stylesSet,
            vidDone: programsInitial[i].vidDone,
            stagDone: programsInitial[i].stagDone,
            introTriggered: programsInitial[i].introTriggered,
            imagesLoaded: programsInitial[i].imagesLoaded,
            imagesAdded: programsInitial[i].imagesAdded,
            positionsAdded: programsInitial[i].positionsAdded
        });

    }


    programCounter = programs[startingProgram].id;

    programsDefined = true;
}

definePrograms();

function redefinePrograms() {

    var id = currentProgram.id;
    currentProgram.id = programsInitial[id].id;
    currentProgram.program = programsInitial[id].program;
    currentProgram.programColors.bg = programsInitial[id].programColors.bg;
    currentProgram.programColors.bgAlt = programsInitial[id].programColors.bgAlt;
    currentProgram.programColors.text = programsInitial[id].programColors.text;
    currentProgram.programColors.textAlt = programsInitial[id].programColors.textAlt;
    currentProgram.programColors.bottomFade.start = programsInitial[id].programColors.bottomFade.start;
    currentProgram.programColors.bottomFade.end = programsInitial[id].programColors.bottomFade.end;
    currentProgram.slogan = programsInitial[id].slogan;
    currentProgram.sloganInner = programsInitial[id].sloganInner;
    currentProgram.sloganItem = programsInitial[id].sloganItem;
    currentProgram.sloganText = programsInitial[id].sloganText;
    currentProgram.textFontWeight = programsInitial[id].textFontWeight;
    currentProgram.textAltFontWeight = programsInitial[id].textAltFontWeight;
    currentProgram.containerBackground = programsInitial[id].containerBackground;
    currentProgram.containerBackgroundOverlay = programsInitial[id].containerBackgroundOverlay;
    currentProgram.bgScrollContainer = programsInitial[id].bgScrollContainer;
    currentProgram.bgScrollContainerOpacity = programsInitial[id].bgScrollContainerOpacity;
    currentProgram.bgScrollContainerChangeMult = programsInitial[id].bgScrollContainerChangeMult;
    currentProgram.bgScrollContainerOpacityChange = programsInitial[id].bgScrollContainerOpacityChange;
    currentProgram.bgScrollContainerHeight = programsInitial[id].bgScrollContainerHeight;
    currentProgram.bgScrollContainerZ = programsInitial[id].bgScrollContainerZ;
    currentProgram.bgScrollContainerChange = programsInitial[id].bgScrollContainerChange;
    currentProgram.bgScroll = programsInitial[id].bgScroll;
    currentProgram.bgScrollOpacity = programsInitial[id].bgScrollOpacity;
    currentProgram.bgScrollOpacityChange = programsInitial[id].bgScrollOpacityChange;
    currentProgram.bgScrollHeight = programsInitial[id].bgScrollHeight;
    currentProgram.bgScrollItem = programsInitial[id].bgScrollItem;
    currentProgram.bgScrollItemHeight = programsInitial[id].bgScrollItemHeight;
    currentProgram.bgOverlayRotationStart = programsInitial[id].bgOverlayRotationStart;
    currentProgram.bgOverlayRotationEnd = programsInitial[id].bgOverlayRotationEnd;
    currentProgram.bgOverlayTop = programsInitial[id].bgOverlayTop;
    currentProgram.bgOverlay = programsInitial[id].bgOverlay;
    currentProgram.logoContainer = programsInitial[id].logoContainer;
    currentProgram.logoContainerBlur = programsInitial[id].logoContainerBlur;
    currentProgram.logoContainerBlur2 = programsInitial[id].logoContainerBlur2;
    currentProgram.logoContainerBlurChange = programsInitial[id].logoContainerBlurChange;
    currentProgram.logoContainerYEnd = programsInitial[id].logoContainerYEnd;
    currentProgram.logo = programsInitial[id].logo;
    currentProgram.logoTransformOriginFirst = programsInitial[id].logoTransformOriginFirst;
    currentProgram.logoTransformOriginSecond = programsInitial[id].logoTransformOriginSecond;
    currentProgram.logoScale = programsInitial[id].logoScale;
    currentProgram.logoScaleChange = programsInitial[id].logoScaleChange;
    currentProgram.logoOpacity = programsInitial[id].logoOpacity;
    currentProgram.logoOpacityChange = programsInitial[id].logoOpacityChange;

    currentProgram.content = programsInitial[id].content;
    currentProgram.contentPaddingTop = programsInitial[id].contentPaddingTop;
    currentProgram.contentInner = programsInitial[id].contentInner;
    currentProgram.contentIntro = programsInitial[id].contentIntro;
    currentProgram.contentH1 = programsInitial[id].contentH1;
    currentProgram.contentBody = programsInitial[id].contentBody;
    currentProgram.contentBodyLastChild = programsInitial[id].contentBodyLastChild;
    currentProgram.contentP = programsInitial[id].contentP;
    currentProgram.contentPAltContainer = programsInitial[id].contentPAltContainer;
    currentProgram.contentPAlt = programsInitial[id].contentPAlt;
    currentProgram.contentStagger = programsInitial[id].contentStagger;

    currentProgram.initials = programsInitial[id].initials;
    currentProgram.tl = programsInitial[id].tl;
    currentProgram.frame.count = programsInitial[id].frame.count;
    currentProgram.frame.start = programsInitial[id].frame.start;
    currentProgram.frame.end = programsInitial[id].frame.end;
    currentProgram.frame.positions = programsInitial[id].frame.positions;
    currentProgram.frame.offset = programsInitial[id].frame.offset;
    currentProgram.tick = programsInitial[id].tick;
    currentProgram.tickMult = programsInitial[id].tickMult;
    currentProgram.staggerVisible = programsInitial[id].staggerVisible;
    currentProgram.imagesLoaded = programsInitial[id].imagesLoaded;
    currentProgram.stylesSet = programsInitial[id].stylesSet;
    currentProgram.vidDone = programsInitial[id].vidDone;
    currentProgram.stagDone = programsInitial[id].stagDone;
    currentProgram.introTriggered = programsInitial[id].introTriggered;
    currentProgram.imagesLoaded = programsInitial[id].imagesLoaded;
    currentProgram.imagesAdded = programsInitial[id].imagesAdded;
    currentProgram.positionsAdded = programsInitial[id].positionsAdded;

    programsRedefined = true;

    rafEventsAgain();

}

function init(program) {
    if (!program.stylesSet && programImagesAdded) {

        program.tl.clear();
        bgOverlayTopTl.clear();
        logoTl.clear();

        program.stylesSet = true;

        loadAnimDone = true;

        program.staggerVisible = false;

        TweenMax.set(cachedImages, {
            display: 'none'
        });
        TweenMax.set(allProgs, {
            position: 'fixed'
        });
        TweenMax.set(bgOverlay, {
            backgroundColor: program.programColors.bg
        });
        program.bgScrollItem = $(`.${program.initials}-bg-scroll-item`);
        program.bgScrollItem.imagesLoaded(function () {

            program.bgScrollItemHeight = Math.ceil(program.bgScrollItem.outerHeight());

            program.bgScrollContainerHeight = program.bgScrollItemHeight;

            if (!programPositionsAdded[program.id]) {
                for (var i = program.frame.offset; i < program.frame.count; i++) {
                    var height = program.bgScrollItemHeight,
                        position = ((height * -1) * i);

                    program.frame.positions.push({
                        id: i,
                        position: position
                    });
                }
                programPositionsAdded[program.id] = true;
            }

            overlayTopTriggered = false;

            TweenMax.set(program.bgOverlayTop, {
                height: program.bgScrollContainerHeight,
                top: `-${program.bgScrollContainerHeight}`,
                y: 0,
                rotation: `-${program.bgOverlayRotationEnd}`,
                opacity: 1,
                backgroundColor: program.programColors.bg,
                zIndex: 2
            });

            TweenMax.set(program.bgOverlayTop.first(), {
                backgroundColor: 'white',
                opacity: 1
            });

            TweenMax.set(program.bgOverlay, {
                y: 0,
                rotation: program.bgOverlayRotationStart,
                zIndex: 100
            });

            program.tl.to(program.bgOverlay, 4, {
                y: `${program.bgScrollContainerHeight * 1.5}`,
                rotation: program.bgOverlayRotationEnd,
                ease: Quart.easeOut
            }, 0);

            TweenMax.set(program.program, {
                zIndex: 10,
                opacity: 1
            });

            TweenMax.set(program.program.siblings('.program'), {
                zIndex: -1,
                opacity: 0
            });

            TweenMax.set(program.bgScrollContainer, {
                height: program.bgScrollItemHeight,
                opacity: 1
            });

            TweenMax.set(program.bgScroll, {
                opacity: program.bgScrollOpacity
            });

            TweenMax.set(program.logo, {
                scale: logoScale,
                transformOrigin: logoTransformOriginFirst,
                y: 0,
                opacity: 1
            });

            TweenMax.set(program.logoContainer, {
                opacity: 0,
                height: program.logo.height()
            });

            TweenMax.set(program.logoContainer, {
                x: program.bgScrollContainer.width() / 2 - logoContainer.width() / 2,
                y: program.bgScrollContainerHeight / 2 - program.logoContainer.height() / 2
            });

            TweenMax.set(program.bgScrollItem, {
                height: program.bgScrollItemHeight
            });

            TweenMax.set(program.bgScrollItem, {
                x: program.bgScrollContainer.width() / 2 - program.bgScrollItem.width() / 2,
                y: program.bgScrollContainerHeight / 2 - program.bgScrollItemHeight / 2
            });

            program.logoContainerYEnd = program.bgScrollContainer.height() * 0.2;

            TweenMax.set(bodyHTML, {
                scrollTop: 0
            });

            TweenMax.set(program.content, {
                scrollTop: 0
            });

            TweenMax.set(program.content, {
                height: window.innerHeight - ((program.logo.height() * logoScale3) + (program.logoContainerYEnd * 2)),
                paddingTop: (program.logo.height() * logoScale3) + (program.logoContainerYEnd * 2),
                opacity: 1,
                overflowY: 'hidden'
                    //                '-webkit-overflow-scrolling': 'initial'
                    //                backgroundColor: program.programColors
            });

            TweenMax.set(program.contentH1, {
                color: program.programColors.text
            });

            TweenMax.set(program.contentP, {
                color: program.programColors.text
            });

            TweenMax.set(program.contentPAltContainer, {
                background: program.programColors.bgAlt
            });

            TweenMax.set(program.contentP, {
                fontWeight: program.textFontWeight
            });

            TweenMax.set(program.contentPAlt, {
                color: program.programColors.textAlt,
                fontWeight: program.textAltFontWeight
            });

            TweenMax.set(program.contentPAlt.prev(program.contentPAlt), {
                paddingBottom: 0
            });

            TweenMax.set(program.contentPAlt.prev(program.contentP).not(program.contentPAlt), {
                paddingBottom: '2em'
            });

            TweenMax.set(program.contentPAlt.next(program.contentP), {
                paddingTop: '2em'
            });

            TweenMax.set(program.contentStagger, {
                opacity: 0,
                y: 100
            });

            TweenMax.set(bottomFade, {
                background: `-webkit-linear-gradient(bottom, ${program.programColors.bottomFade.start} ${bottomFadeBreak1}%, ${program.programColors.bottomFade.start} ${bottomFadeBreak2}%, ${program.programColors.bottomFade.end} ${bottomFadeBreak3}%, ${program.programColors.bottomFade.end} ${bottomFadeBreak4}%)`,
                opacity: 1
            });

            TweenMax.set(program.contentBodyLastChild, {
                marginBottom: bottomFade.height() * 0.5
            });

            TweenMax.set(slogan.not(program.slogan), {
                opacity: 0
            });

            TweenMax.set(program.slogan, {
                height: window.innerHeight - (program.bgScrollContainerHeight + (nav.height() * 2)),
                bottom: nav.height() * 2
            });

            for (var i = 0; i < slogan.length; i++) {
                var current = slogan.eq(i),
                    currentInner = current.find('.slogan-inner'),
                    currentItem = current.find('.slogan-item'),
                    currentText = current.find('.slogan-text'),
                    textI,
                    length = 0,
                    startWidth = 0,
                    longest,
                    longestTextNode,
                    longestTextString,
                    widestWord,
                    textWidths = [],
                    textArr = [];

                for (var textI = 0; textI < currentText.length; textI++) {
                    textArr.push(currentText.eq(textI).html());
                    if (textArr[textI].length > length) {
                        longestTextNode = currentText.eq(textI);
                        longestTextString = textArr[textI];
                        length = longestTextString.length;
                    }
                    textWidths.push(currentText.eq(textI).width());
                    if (textWidths[textI] > startWidth) {
                        widestWord = textWidths[textI];
                        startWidth = widestWord;
                    }
                    if (textI === currentText.length - 1) {
                        cl(`The widest word is ${widestWord} in ${current.attr('id')}`)

                        TweenMax.set(currentInner, {
                            width: widestWord + Math.ceil(parseInt(currentText.css('letter-spacing'))),
                            height: currentItem.height() * currentItem.length
                        });

                        cl(Math.ceil(parseInt(currentText.css('letter-spacing'))))

                        TweenMax.set(currentInner, {
                            x: (current.width() / 2 - currentInner.width() / 2) + Math.ceil(parseInt(currentText.css('letter-spacing'))),
                            y: current.height() / 2 - currentInner.height() / 2
                        });
                    }
                }

            }

            //            TweenMax.set(program.sloganInner, {
            //                x: program.slogan.width() / 2 - program.sloganInner.width() / 2,
            //                y: program.slogan.height() / 2 - program.sloganInner.height() / 2
            //            });

            TweenMax.set(program.sloganItem, {
                y: `-${program.slogan.height() * 0.1}`,
                color: program.programColors.text
            });

            TweenMax.set(program.sloganText, {
                y: program.sloganText.height() * 1.15,
                color: program.programColors.text
            });

            TweenMax.set(program.slogan, {
                opacity: 1
            });

            program.tl.staggerFrom(program.sloganItem, 5, {
                cycle: {
                    y: function (i) {
                        return program.slogan.height() * (0.2 + (i * 0.05));
                    }
                },
                ease: Expo.easeOut
            }, 0.1, 0);

            //            program.tl.staggerTo(program.sloganItem, 3, {
            //                y: `-${program.sloganText.height() * 2}`,
            //                ease: Quad.easeInOut
            //            }, 0.1, 1);

            program.tl.staggerTo(program.sloganText, 1, {
                y: 0,
                ease: Quart.easeOut
            }, 0.1, 0);

            program.tl.staggerTo(program.sloganText, 1, {
                y: `-${program.sloganText.height()}`,
                ease: Expo.easeInOut
            }, 0.1, 1.75);

            program.contentPaddingTop = parseInt(programs[currentProgram.id].content.css('padding-top'));

            program.imagesLoaded = true;

            initDone = true;
        });

    }

};

function vidIntro(program) {
    var id = program.id;
    init(program);
    if (program.imagesLoaded && initDone) {
        TweenMax.set(program.bgScrollItem, {
            opacity: 1
        });
        program.bgScrollContainerOpacity += program.bgScrollContainerOpacityChange;

        program.bgScrollContainerChange *= program.bgScrollContainerChangeMult;
        if (Math.floor(program.tick) < program.frame.count - program.frame.offset) {
            TweenMax.set(program.bgScroll, {
                y: program.frame.positions[Math.floor(program.tick)].position
            });
        }
        program.tick += scrollSpeed;
        if (program.tick > program.frame.end * 0.7) {
            TweenMax.set(program.program, {
                position: 'initial'
            });
            if (!overlayTopTriggered) {
                overlayTopTriggered = true;
                bgOverlayTopTl.staggerTo(program.bgOverlayTop, 0.75, {
                    cycle: {
                        y: function (i) {
                            return program.bgScrollContainerHeight * bgOverlayTopYEnd[i]
                        }
                    },
                    rotation: program.bgOverlayRotationEnd,
                    ease: Quart.easeInOut
                }, 0.1, 0, function () {
                    program.vidDone = true;
                    program.stagDone = true;
                    program.introTriggered = true;
                    logoContainerBlur = 30;
                    initBlur();
                    intro();
                });
            }
        }
        //        if (program.tick > program.frame.end * 0.8 && !program.introTriggered) {
        //            program.introTriggered = true;
        //            logoContainerBlur = 30;
        //            initBlur();
        //            intro();
        //        }
    }
};

function intro() {
    logoTl.to(programs[programCounter].logo, 1, {
        scale: logoScale2,
        ease: Quart.easeOut
    }, 0);
    logoTl.to(programs[programCounter].logoContainer, 1, {
        opacity: 1
    }, 0);
    logoTl.to(programs[programCounter].logoContainer, 1, {
        y: programs[programCounter].logoContainerYEnd,
        ease: Quart.easeInOut
    }, 'here');
    logoTl.set(programs[programCounter].logo, {
        transformOrigin: logoTransformOriginSecond
    }, 'here');
    logoTl.to(programs[programCounter].logo, 1, {
        scale: logoScale3,
        ease: Quart.easeInOut
    }, 'here');
    logoTl.set(programs[programCounter].bgScrollContainer, {
        opacity: 0
    }, 'here');
    logoTl.set(programs[programCounter].bgOverlayTop, {
        height: programs[programCounter].bgScrollContainerHeight,
        top: `-${programs[programCounter].bgScrollContainerHeight}`,
        y: 0,
        rotation: `-${programs[programCounter].bgOverlayRotationEnd}`,
        opacity: 1
    }, 'here');
    TweenMax.set(programs[programCounter].bgOverlayTop.first(), {
        backgroundColor: 'white'
    });
    logoTl.to(programs[programCounter].containerBackgroundOverlay, 1, {
        opacity: 0.2,
        ease: Quart.easeInOut
    }, 'here');
    logoTl.set(programs[programCounter].content, {
        overflowY: 'scroll',
        onComplete: function () {
            programs[programCounter].staggerVisible = true;
        }
    }, 'here');
    logoTl.staggerTo(programs[programCounter].contentStagger, 1, {
        opacity: 1,
        y: 0,
        ease: Quart.easeInOut
    }, 0.1, 'here');
}

function initIntro() {
    TweenMax.set(bgScrollContainer, {
        opacity: 0
    });
    TweenMax.set(bgOverlayTop, {
        opacity: 0
    });
    TweenMax.set(logoContainer, {
        y: programs[programCounter].logoContainerYEnd,
        opacity: 1
    });
    TweenMax.set(logo, {
        transformOrigin: logoTransformOriginSecond,
        scale: logoScale3
    });
}

initLoad();

function scrollFade() {
    if (programs[currentProgram.id].staggerVisible) {
        fromTopOld = fromTopNew;
        fromTopNew = programs[currentProgram.id].contentPaddingTop - programs[currentProgram.id].contentInner.offset().top;
        if (fromTopNew > 0) {
            logoYChange = logoYChangeMult * fromTopNew;
            logoOpacityChange = logoOpacityChangeMult * fromTopNew;
        }
        if (fromTopNew <= 0) {
            logoYChange = 0;
            logoOpacityChange = 0;
        }

        TweenMax.set(logo, {
            y: logoY + logoYChange,
            opacity: logoOpacity + logoOpacityChange
        });
    }
};

container.on('swipeleft', resetInstant);
container.on('swiperight', resetInstant);

function rafEvents() {

    if (!loadAnimDone) {}
    request = requestAnimFrame(rafEvents);

    rafEventsNow = Date.now();
    rafEventsDelta = rafEventsNow - rafEventsThen;

    if (rafEventsDelta > rafEventsInterval) {

        rafEventsThen = rafEventsNow - (rafEventsDelta % rafEventsInterval);

        if (programsDefined && imagesCached) {

            currentProgram = programs[startingProgram];

            scrollFade();

            currentScrollPosition = Math.floor(fromTopNew * scrollSpeed);

            vidIntro(currentProgram);
        }
    }

    //    if (programsDefined && imagesCached) {
    //
    //        currentProgram = programs[startingProgram];
    //        fromTopOld = fromTopNew;
    //        fromTopNew = window.pageYOffset;
    //
    //        currentScrollPosition = Math.floor(fromTopNew * scrollSpeed);
    //
    //        vidIntro(currentProgram);
    //    }
    //
    //    request = requestAnimFrame(rafEvents);
};

rafEvents();

function rafEventsAgain() {

    requestAgain = requestAnimFrame(rafEventsAgain);

    rafEventsAgainNow = Date.now();
    rafEventsAgainDelta = rafEventsAgainNow - rafEventsAgainThen;

    if (rafEventsAgainDelta > rafEventsAgainInterval) {

        rafEventsAgainThen = rafEventsAgainNow - (rafEventsAgainDelta % rafEventsAgainInterval);
        if (programsRedefined) {
            scrollFade();

            currentScrollPosition = Math.floor(fromTopNew * scrollSpeed);

            vidIntro(currentProgram);
        }

    }
    //    if (programsRedefined) {
    //        fromTopOld = fromTopNew;
    //        fromTopNew = window.pageYOffset;
    //
    //        currentScrollPosition = Math.floor(fromTopNew * scrollSpeed);
    //
    //        vidIntro(currentProgram);
    //        requestAgain = requestAnimFrame(rafEventsAgain);
    //    }
    //
    //    requestAgain = requestAnimFrame(rafEventsAgain);
};

window.addEventListener('mousemove', mouseCoord, false);

function mouseCoord(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
}

//});
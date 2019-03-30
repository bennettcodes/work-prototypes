    var bbp = {
        init: function () {
            this.cacheDom();
        },
        cacheDom: function () {
            this.cacheDomTest = 'Testing this';
            this.loadingOverlay = $('#loading-overlay');
            this.fpo = $('#fpo');
            this.fpo2 = $('#fpo2');
            this.toggleFpo = $('#toggle-fpo');
            this.toggleFpoBackground = $('#toggle-fpo-bg');
            this.toggleFpoBackgroundAlt = $('#toggle-fpo-bg-alt');
            this.fpoActive;
            
            this.passwordInputBoxShadowX = '0';
            this.passwordInputBoxShadowY = '0';
            this.passwordInputBoxShadowSize = '0';
            this.passwordInputBoxShadowSize2 = '0.5vw';
            
            this.passwordOverlay = $('#password-overlay');
            this.passwordInput = $('#password-input');

            this.loadingOverlay = $('#loading-overlay');
            this.fpoActive;
            
            this.navBlock = $('#nav-block');

            this.widthInterval;

            this.cachedImages = $('.cached-images');

            this.fpoActiveOpacity = 1;
            this.fpoInactiveMouseoverOpacity = 0.5;
            this.fpoInactiveOpacity = 0.3;

            this.toggleLive = $('#toggle-live');
            this.toggleLiveBackground = $('#toggle-live-bg');
            this.toggleLiveBackgroundAlt = $('#toggle-live-bg-alt');
            this.liveActive;
            this.fpoOnly;
            this.liveOnly;
            this.circle = document.getElementById('green-halo');
            this.myTimer = document.getElementById('myTimer');

            this.circle = document.getElementById('blue-halo');
            this.resultCircle = document.getElementById('gold-halo');
            this.myResultsTimer = document.getElementById('myResultsTimer');


            this.timerDigits = $('.timer-digits');
            this.timerMinutes = $('.timer-minutes');

            this.interval = 30;
            this.angle = 0;
            this.angle_increment = 6;

            this.optionClicked = false;

            this.bubbleClicked = false;

            this.bubbleHoverActive = false;

            this.typeClicked = false;

            this.typeHoverActive = false;

            this.timerInMotion = false;

            this.tipInterval;

            this.tipBubbleActive = false;

            this.downArrowSVG = $('#down-arrow-svg');

            this.lastCardIndex;

            this.navItemHoverInMotion = false;
            this.ogoutHovered = false;

            this.liveActiveOpacity = 1;
            this.liveInactiveMouseoverOpacity = 0.5;
            this.liveInactiveOpacity = 0.3;
            this.currentCard;
            this.currentCardRotationX = 0;
            this.cardRotationXIncrement = 0;
            this.currentCardRotationY = -20;
            this.cardRotationYIncrement = 20;
            this.currentCardSkewX = -10;
            this.cardSkewXIncrement = 10;
            this.currentZIndex = 0;
            this.cardXIncrement;
            this.cardZIncrement;
            this.activeCardIndex = 0;

            this.hiddenCardIndex;

            this.resultsQuick = $('#results-quick');
            this.resultsQuickSection = $('.results-quick-section');
            this.resultsQuickSectionHeader3 = $('.results-quick-section h3');
            this.resultsQuickSectionParagraph = $('.results-quick-section p');

            this.goalResults = $('#goal-results-quick');
            this.levelResults = $('#level-results-quick');
            this.typeResults = $('#type-results-quick');
            this.timeResults = $('#time-results-quick');

            this.resultsContainer = $('#results-container');
            this.resultRow = $('.result-row');

            this.heroBlackOverlay = $('#hero-black-overlay');

            this.resultsHeroTagContainer = $('.results-hero-tag-container');
            this.resultsHeroTagBackground = $('.results-hero-tag-bg');
            this.resultsHeroTag = $('.results-hero-tag');
            this.resultsHeroTagText = $('.results-hero-tag-text');

            this.currentStrokeOffset = 120;
            this.currentResultsStrokeOffset = 65.2;

            this.resultHeroBody = ('.result-hero-body');
            this.resultHeroBodyBackground = ('.result-hero-body-bg');

            this.statsRowBarUnitContainer = ('.stats-row-bar-unit-container');
            this.statsRowBar = ('.stats-row-bar');
            this.statsRowBarUnit = ('.stats-row-bar-unit');
            this.statsRowBarUnitInactive = ('.bar-unit-inactive');

            this.darkerGrey = 'rgba(97,97,97,1)';
            this.bbBlueRGB = '23, 122, 241';
            this.bbGreenRGB = '18, 255, 0';
            this.bbBlue = 'rgba(23, 122, 241, 1)';
            this.incorrectRed = 'rgba(255, 0, 0, 1)';
            this.incorrectRedRGB = '255, 0, 0';
            this.white = 'rgba(255,255,255,1)';
            this.whiteRGB = '255, 255, 255';

            this.progressLabels = $('.progress-labels');
            this.myGoalLabel = $('.my-goal-label');
            this.fitnessLevelLabel = $('.fitness-level-label');
            this.workoutTypeLabel = $('.workout-type-label');
            this.workoutTimeLabel = $('.workout-time-label');
            this.progressLabel = $('.progress-label');
            this.finishLabel = $('.finish-label');

            this.currentBackgroundZStart = 0;
            this.currentBackgroundZEnd = 250;
            this.nextBackgroundZStart = -250;
            this.nextBackgroundZEnd = 0;

            this.checkmark = $('.checkmark');
            this.twentyFivePercent = $('.twenty-five-percent');
            this.fiftyPercent = $('.fifty-percent');
            this.seventyFivePercent = $('.seventy-five-percent');

            this.blueHalo = $('#blue-halo');
            this.goldHalo = $('#gold-halo');

            this.heroCardOptionsHoverDurationStart = 0.5;
            this.heroCardOptionsHoverDurationEnd = 0.25;
            this.heroCardOptionsHoverBackgroundDurationStart = 1;
            this.heroCardOptionsHoverBackgroundDurationEnd = 0.25;
            this.heroCardOptionsHoverEaseStart = Expo.easeOut;
            this.heroCardOptionsHoverEaseEnd = Back.easeOut;
            this.heroCardOptionsHoverBackgroundEaseStart = Elastic.easeOut;
            this.heroCardOptionsHoverBackgroundEaseEnd = Back.easeOut;

            this.optionBubbleDuration = 1;
            this.blueFadeDuration = 0.5;
            this.optionTitleDurationStart = 1;
            this.optionTitleDurationEnd = 0.5;
            this.optionBubbleEase = Expo.easeOut;
            this.optionTitleEaseStart = Elastic.easeOut;
            this.optionTitleEaseEnd = Expo.easeOut;

            this.sliderBarDuration = 1;
            this.sliderBarEase = Expo.easeOut;

            this.graphBarFillDuration = 0.25;
            this.graphBarFillEase = Quad.easeOut;

            this.otherOptionBubbleDuration = 0.25;
            this.otherOptionBubbleEase = Linear.easeNone;

            this.heroCardOptionsBackground = $('.hero-card-options-bg');
            this.heroCardOptionsHoverBackground = $('.hero-card-options-hover-bg');
            this.heroCardOptionsHoverTitle = $('.hero-card-options-hover-title');
            this.heroCardOptionsTitle = $('.hero-card-options-title');

            this.mouseX;
            this.mouseY;

            this.currentNavHover;

            this.dropdownActive = false;

            this.cardsInMotion = false;
            this.bubbleInMotion = false;

            this.container = $('#container');
            this.live = $('.live');
            this.liveDivs = $('div.live');
            this.divs = $('div');
            this.nav = $('#nav');
            this.navInner = $('#nav-inner');
            this.navItemHover = $('.nav-item-hover');
            this.navItemHoverBackground = $('.nav-item-hover-bg');
            this.navItemHoverTitle = $('.nav-item-hover-title');
            this.navItemHoverTitleSub = $('.nav-item-hover-title-sub');
            this.navItemHoverTitleMain = $('.nav-item-hover-title-main');
            this.navItemHoverIcon = $('.nav-item-hover-icon');
            this.logo = $('#logo');
            this.userInfo = $('#user-info');
            this.userInfoDropdown = $('#user-info-dropdown');
            this.userInfoDropdownHoverRegion = $('#user-info-dropdown-hover-region');
            this.logoutHoverRegion = $('#logout-hover-region');
            this.userInfoDropdownList = $('#user-info-dropdown-list');
            this.userInfoOption = $('.user-info-option');
            this.userInfoOptionBackground = $('.user-info-option-bg');
            this.userInfoOptionTitle = $('.user-info-option-title');
            this.userInfoName = $('#user-info-name');
            this.userInfoNameParagraph = $('#user-info-name p');
            this.userInfoLogOut = $('#user-info-log-out');
            this.userInfoLogOutParagraph = $('#user-info-log-out p');
            this.downArrow = $('.down-arrow');
            this.rightArrowBlue = $('.right-arrow-blue');
            this.search = $('#search');
            this.searchInput = $('.search-input');
            this.topSearchInput = $('#top-search-input');
            this.searchInputFocus = $('.search-input:focus');
            this.navItems = $('#nav-items');
            this.navItem = $('.nav-item');
            this.hero = $('#hero');
            this.heroBackgroundContainer = $('#hero-bg-container');
            this.heroBackground = $('.hero-bg');
            this.heroBackground1 = $('#hero-bg1');
            this.heroBackground2 = $('#hero-bg2');
            this.heroBackground3 = $('#hero-bg3');
            this.heroBackground4 = $('#hero-bg4');
            this.heroBackground5 = $('#hero-bg5');
            this.heroCards = $('#hero-cards');
            this.heroCard = $('.hero-card');
            this.heroCardTipBubbleContainer = $('.hero-card-tip-bubble-container');
            this.heroCardTipBubbleClose = $('.hero-card-tip-bubble-close');
            this.heroCardTipBubbleBackground = $('.hero-card-tip-bubble-bg');
            this.heroCardTipBubbleText = $('.hero-card-tip-bubble-text');
            this.heroCardTipBubbleTriangle = $('.hero-card-tip-bubble-triangle ');
            this.heroCardTipBubble = $('.hero-card-tip-bubble');
            this.heroCardShadow = $('.hero-card-shadow');
            this.heroCardHeader = $('.hero-card-header');
            this.heroCardHeaderBackground = $('.hero-card-header-bg');
            this.heroCardHeaderTitle = $('.hero-card-header-title');
            this.heroCardBody = $('.hero-card-body');

            this.heroCardGraphContainer = $('.hero-card-graph-container');
            this.heroCardGraphBar1 = $('#hero-card-graph-bar-1');
            this.heroCardGraphBar2 = $('#hero-card-graph-bar-2');
            this.heroCardGraphBar3 = $('#hero-card-graph-bar-3');
            this.heroCardGraphBar4 = $('#hero-card-graph-bar-4');
            this.heroCardGraphBar5 = $('#hero-card-graph-bar-5');
            this.heroCardGraphBar = $('.hero-card-graph-bar');
            this.graphBarFill = $('.graph-bar-fill');
            this.graphBarFillInner = $('.graph-bar-fill-inner');

            this.heroCardTypeRowContainer = $('.hero-card-type-row-container');
            this.heroCardTypeRow = $('.hero-card-type-row');
            this.heroCardType = $('.hero-card-type');
            this.heroCardTypeInfoHoverContainer = $('.hero-card-type-info-hover-container');
            this.heroCardTypeInfoHoverIcon = $('.hero-card-type-info-hover-icon');
            this.heroCardTypeInfoHoverButton = $('.hero-card-type-info-hover-button');
            this.heroCardTypeInfoHoverTitle = $('.hero-card-type-info-hover-title');
            this.heroCardTypeInfoContainer = $('.hero-card-type-info-container');
            this.heroCardTypeInfoIcon = $('.hero-card-type-info-icon');
            this.heroCardTypeInfoButton = $('.hero-card-type-info-button');
            this.heroCardTypeInfoTitle = $('.hero-card-type-info-title');

            this.timeControlLeftArrow = $('.time-control-left-arrow');
            this.timeControlLeftArrowHover = $('.time-control-left-arrow-hover');
            this.timeControlRightArrow = $('.time-control-right-arrow');
            this.timeControlRightArrowHover = $('.time-control-right-arrow-hover');

            this.heroCardTimeControlLeft = $('#hero-card-time-control-left');
            this.timeControlLeftBackground = $('.time-control-left-bg');
            this.timeControlLeftBackgroundHover = $('.time-control-left-bg-hover');
            this.heroCardTimeControlRight = $('#hero-card-time-control-right');
            this.timeControlRightBackground = $('.time-control-right-bg');
            this.timeControlRightBackgroundHover = $('.time-control-right-bg-hover');
            this.heroCardTimeModuleTimer = $('.hero-card-time-module-timer');
            this.heroCardTimeModuleTrackBar = $('.hero-card-time-module-track-bar');
            this.heroCardTimeModuleTrackBarBackground = $('.hero-card-time-module-track-bar-bg');
            this.heroCardTimeModuleProgressBar = $('.hero-card-time-module-progress-bar');

            this.heroCardRow1 = $('#hero-card-row-1');
            this.heroCardRow2 = $('#hero-card-row-2');
            this.heroCardRow3 = $('#hero-card-row-3');

            this.heroCardColumnHalf = $('.hero-card-column-half');

            this.heroCardOptions = $('.hero-card-options');
            this.heroCardOptionsInfoContainer = $('.hero-card-options-info-container');
            this.heroCardOptionsHoverInfoContainer = $('.hero-card-options-hover-info-container');

            this.heroCardOptionsIcon = $('.hero-card-options-icon');
            this.heroCardOptionsHoverIcon = $('.hero-card-options-hover-icon');

            this.heroCardFooter = $('.hero-card-footer');
            this.heroCardFooterBackground = $('.hero-card-footer-bg');
            this.heroCardFooterTitle = $('.hero-card-footer-title');
            this.heroCardFooterTitleBlock = $('.hero-card-footer-title-block');
            this.heroCardFooterTitleBlock1 = $('#hero-card-footer-title-block-1');
            this.heroCardFooterTitleBackground = $('.hero-card-footer-title-bg');
            this.heroCardFooterTitleBackgroundBubble = $('.hero-card-footer-title-bg-bubble');
            this.heroCardFooterBack = $('.hero-card-footer-back');
            this.heroCardFooterBackBlock = $('.hero-card-footer-back-block');
            this.heroCardFooterBackBlock1 = $('#hero-card-footer-back-block-1');
            this.heroCardFooterBackBackground = $('.hero-card-footer-back-bg');
            this.heroCardFooterBackBackgroundBubble = $('.hero-card-footer-back-bg-bubble');
            this.heroCardSliderOption = $('.hero-card-slider-option');
            this.heroCardSliderOptionTitle = $('.hero-card-slider-option-title');
            this.heroCardSliderOptionBubble = $('.hero-card-slider-option-bubble');
            this.heroCardSliderOptionBubbleOuter = $('.option-bubble-outer');
            this.heroCardSliderOptionBubbleMiddle = $('.option-bubble-middle');
            this.heroCardSliderOptionBubbleInner = $('.option-bubble-inner');
            this.heroCardSliderBarProgress = $('.hero-card-slider-bar-progress');
            this.heroCardSliderBarProgressBackground = $('.hero-card-slider-bar-progress-bg');
            this.heroCardSliderBarProgressBlueFade = $('.hero-card-slider-bar-progress-blue-fade');
            this.popular = $('#popular');
            this.trending = $('#trending');
            this.inspirational = $('#inspirational');

            this.statusBarContainer = $('#status-bar-container');
            this.statusBar = $('#status-bar');
            this.progressBar = $('#progress-bar');

            this.cardChangeDuration = 0.75;
            this.cardChangeEase = Expo.easeInOut;

            this.bubbleScaleStart = 0;
            this.bubbleGrowDuration = 0.25;
            this.bubbleGrowEase = Quad.easeInOut;

            this.bubbleScaleEnd = 4;
            this.bubbleShrinkDuration = 0.25;
            this.bubbleShrinkEase = Quad.easeInOut;

            this.navItemHoverSubDelay = 0;
            this.navItemHoverMainDelay = 0.075;
            this.navItemHoverIconDelay = 0.125;

            this.navItemHoverXStart = '-' + this.nav.width();
            this.navItemHoverTitleSubXStart = this.nav.width() / 2;
            this.navItemHoverTitleMainXStart = this.nav.width() / 2;
            this.navItemHoverXEnd = 0;
            this.navItemHoverTitleSubXEnd = 0;
            this.navItemHoverTitleMainXEnd = 0;
            this.navItemHoverTitleEase = Expo.easeOut;

            this.userInfoOptionEaseStart = Back.easeOut;
            this.userInfoOptionEaseEnd = Back.easeOut;

            this.navItemHoverIconXStart = 0;
            this.navItemHoverIconXEnd = 0;

            this.navItemHoverDurationIn = 1;
            this.navItemHoverDurationOut = 0.5;
            this.navItemHoverTitleDurationIn = 1.5;
            this.navItemHoverTitleDurationOut = 0.5;
            this.navItemHoverEase = Expo.easeOut;

            this.cardsPerspective = 1800;

            this.userInfoOptionDuration = 0.5;
            this.userInfoOptionStagger = 0.025;

            this.classSearch = $('#class-bbp.search');
            this.classSearchTitle = $('#class-bbp.search-title');
            this.classEmphasis = $('.class-emphasis');
            this.classSearchInput = $('#class-bbp.search-input');

            this.heroCardTypeInfoHoverbutton = $('.hero-card-type-info-hover-button');

            this.navHoverTop = this.navItems.offset().top;
            this.navHoverTopFirst = 0;
            this.navHoverTopIncrement = 0;

            this.helpOthers = $('#help-others');
            this.helpOthersTitle = $('#help-others-title');
            this.currentX = 50;
            this.currentZ = 0 - (this.cardsPerspective / this.heroCard.length);

            this.inactiveUnitsRow1 = $('.stats-row-bar').eq(0).find('.bar-unit-inactive');
            this.inactiveUnitsRow2 = $('.stats-row-bar').eq(1).find('.bar-unit-inactive');
            this.inactiveUnitsRow3 = $('.stats-row-bar').eq(2).find('.bar-unit-inactive');
            this.inactiveUnitsRow4 = $('.stats-row-bar').eq(3).find('.bar-unit-inactive');
            this.inactiveUnitsRow5 = $('.stats-row-bar').eq(4).find('.bar-unit-inactive');

            this.userObject = {
                selectedGoal: 'None Selected',
                selectedFitnessLevel: 'None Selected',
                selectedWorkoutType: 'None Selected',
                workoutTime: 'None Selected'
            };

            this.helpOthersLink = $('#help-others-link');
        }
    };

    bbp.init();


    ;
    $('img').imagesLoaded(function () {
        $('#loading-overlay').hide();
        $('#cached-images-container').hide();
        bbp.resultsContainer.hide();

        function horizontallyCenter(elem) {
            TweenMax.set(elem, {
                left: (elem.parent('div').width() / 2) - (elem.width() / 2)
            });
        }

        function horizontallyCenterTransform(elem) {
            TweenMax.set(elem, {
                x: (elem.parent('div').width() / 2) - (elem.width() / 2)
            });
        }

        function verticallyCenter(elem) {
            TweenMax.set(elem, {
                top: (elem.parent('div').height() / 2) - (elem.height() / 2)
            });
        }

        function verticallyCenterTransform(elem) {
            TweenMax.set(elem, {
                y: (elem.parent('div').height() / 2) - (elem.height() / 2)
            });
        }


        function style() {

            TweenMax.set(bbp.container, {
                perspectiveOrigin: 'center',
                transformStyle: 'flat',
                transformOrigin: 'center'
            });

            TweenMax.set(bbp.liveDivs, {
                transformOrigin: 'center'
            });

            TweenMax.set(bbp.downArrow, {
                x: bbp.container.width() * 0.01,
                y: bbp.container.width() * 0.004
            });

            TweenMax.set(bbp.rightArrowBlue, {
                x: bbp.container.width() * 0.004,
                y: 0
            });

            TweenMax.set(bbp.navItems, {
                /*userSelect: 'none'*/
            });

            TweenMax.set(bbp.toggleFpo, {
                userSelect: 'none'
            });

            TweenMax.set(bbp.toggleLive, {
                userSelect: 'none',
                top: bbp.toggleFpo.offset().top + (bbp.toggleFpo.height() * 2.5)
            });

            TweenMax.set(bbp.classSearchInput, {
                height: bbp.logo.height() * 1.2
            });

            TweenMax.set(bbp.classSearchInput, {
                y: (bbp.logo.height() * 1.2) * 0.25
            });

            TweenMax.set(bbp.heroCards, {
                perspective: bbp.cardsPerspective,
                perspectiveOrigin: '114% 63%',
                transformStyle: 'flat',
                transformOrigin: 'center'
            });

            TweenMax.set(bbp.heroCard, {
                height: bbp.hero.height() * 0.6
            });

            TweenMax.set(bbp.heroCardBody, {
                height: bbp.heroCard.height() - bbp.heroCardHeader.height() - bbp.heroCardFooter.height(),
                top: bbp.heroCard.height() * 0.126
            });

            TweenMax.set(bbp.heroCardHeaderTitle, {
                lineHeight: bbp.heroCardHeader.height() + 'px'
            });

            TweenMax.set(bbp.heroCardFooterBack, {
                lineHeight: bbp.heroCardFooter.height() + 'px'
            });

            TweenMax.set(bbp.heroCardFooterBackBlock, {
                width: bbp.heroCardFooterBackBackground.width()
            });

            TweenMax.set(bbp.heroCardFooterBackBackground, {
                width: bbp.heroCardFooterBack.outerWidth(),
                perspective: bbp.cardsPerspective,
                perspectiveOrigin: 'center',
                transformStyle: 'flat',
                transformOrigin: 'center'
            });

            TweenMax.set(bbp.heroCardFooterBackBackgroundBubble, {
                width: bbp.heroCardFooterBackBackground.width() / 2,
                opacity: 0
            });

            TweenMax.set(bbp.heroCardFooterTitle, {
                lineHeight: bbp.heroCardFooter.height() + 'px'
            });

            TweenMax.set(bbp.heroCardFooterTitleBlock, {
                width: bbp.heroCardFooterTitleBackground.width()
            });

            TweenMax.set(bbp.heroCardFooterTitleBackground, {
                width: bbp.heroCardFooterTitle.outerWidth(),
                perspective: bbp.cardsPerspective,
                perspectiveOrigin: 'center',
                transformStyle: 'flat',
                transformOrigin: 'center'
            });

            TweenMax.set(bbp.heroCardFooterTitleBackgroundBubble, {
                width: bbp.heroCardFooterTitleBackground.width() / 2,
                opacity: 0
            });

            TweenMax.set(bbp.navItemHover, {
                width:bbp.nav.width(),
                height:bbp.navItem.outerHeight(),
                opacity: 1,
                userSelect: 'none'
            });

            TweenMax.set(bbp.navItemHoverBackground, {
                opacity: 0,
                x:bbp.navItemHoverXStart
            });

            TweenMax.set(bbp.navItemHoverTitle, {
                perspective: bbp.cardsPerspective,
                perspectiveOrigin: 'center',
                transformStyle: 'flat',
                transformOrigin: 'center'
            });

            TweenMax.set(bbp.navItemHoverIcon, {
                width: 'auto',
                height:bbp.navItemHover.height() * 3,
                top: '-' +bbp.navItemHover.height() * 1.1,
                x: (bbp.navItemHoverIcon.width() * 1.5) + (bbp.container.width() * 0.02),
                opacity: 1
            });

            TweenMax.set(bbp.navItemHoverTitleSub, {
                x:bbp.navItemHoverTitleSubXStart,
                opacity: 0
            });

            TweenMax.set(bbp.navItemHoverTitleMain, {
                x:bbp.navItemHoverTitleMainXStart,
                opacity: 0
            });

            TweenMax.set(bbp.navItemHoverTitleMain, {
                x:bbp.navItemHoverTitleMainXStart,
                opacity: 0
            });

            TweenMax.set(bbp.userInfoDropdown, {
                width:bbp.nav.width(),
                height: bbp.userInfoOption.outerHeight() * bbp.userInfoOption.length,
                top: bbp.userInfo.outerHeight() - 1,
                left: '-' + bbp.container.width() * 0.02,
                pointerEvents: 'none'
            });


            TweenMax.set(bbp.userInfoDropdownList, {
                perspective: bbp.cardsPerspective,
                perspectiveOrigin: 'center',
                transformStyle: 'flat',
                transformOrigin: 'center',
                pointerEvents: 'none'
            });

            TweenMax.set(bbp.userInfoOption, {
                transformOrigin: 'center',
                opacity: 0,
                userSelect: 'none'
            });

            TweenMax.set(bbp.userInfoName, {
                userSelect: 'none'
            });

            TweenMax.set(bbp.userInfoDropdownHoverRegion, {
                width: bbp.downArrow.offset().left + bbp.downArrow.width() + bbp.container.width() * 0.02,
                height: bbp.userInfoOption.outerHeight(),
                top: '-' + bbp.container.width() * 0.018,
                left: '-' + bbp.container.width() * 0.02,
                userSelect: 'none'
            });

            TweenMax.set(bbp.logoutHoverRegion, {
                width:bbp.nav.width() - bbp.userInfoDropdownHoverRegion.outerWidth(),
                height: bbp.userInfoOption.outerHeight(),
                top: '-' + bbp.container.width() * 0.018,
                right: '-' + bbp.container.width() * 0.02
            });

            TweenMax.set(bbp.heroCardOptions, {
                perspective: bbp.cardsPerspective,
                perspectiveOrigin: 'center',
                transformStyle: 'flat',
                transformOrigin: 'center'
            });

            TweenMax.set(bbp.heroBackgroundContainer, {
                perspective: bbp.cardsPerspective,
                perspectiveOrigin: 'center',
                transformStyle: 'flat',
                transformOrigin: 'center'
            });

            TweenMax.set(bbp.heroBackground, {
                transformOrigin: 'center',
                width: bbp.heroBackgroundContainer.width() * 2
            });
            TweenMax.set(bbp.heroCardOptionsHoverInfoContainer, {
                z: 300
            });

            TweenMax.set(bbp.heroBackground, {
                top: (bbp.heroBackgroundContainer.height() / 2) - (bbp.heroBackground.height() / 2)
            });

            TweenMax.set(bbp.heroCardTipBubbleText, {
                width: bbp.heroCardHeader.width() - (bbp.container.width() * 0.04),
                height: bbp.heroCardHeader.height() - (bbp.container.width() * 0.06)
            });

            TweenMax.set(bbp.heroCardTipBubbleContainer, {
                perspective: bbp.cardsPerspective,
                perspectiveOrigin: 'center',
                transformStyle: 'flat',
                transformOrigin: 'center',
                userSelect: 'none'
            });

            TweenMax.set(bbp.heroCardOptionsInfoContainer, {
                perspective: bbp.cardsPerspective,
                perspectiveOrigin: 'center',
                transformStyle: 'flat',
                transformOrigin: 'center',
                userSelect: 'none'
            });

            TweenMax.set(bbp.heroCardOptionsHoverInfoContainer, {
                perspective: bbp.cardsPerspective,
                perspectiveOrigin: 'center',
                transformStyle: 'flat',
                transformOrigin: 'center',
                userSelect: 'none'
            });

            TweenMax.set(bbp.heroCardColumnHalf, {
                perspective: bbp.cardsPerspective,
                perspectiveOrigin: 'center',
                transformStyle: 'flat',
                transformOrigin: 'center',
                userSelect: 'none'
            });

            TweenMax.set(bbp.heroCardGraphContainer, {
                perspective: 800,
                perspectiveOrigin: 'center',
                transformStyle: 'flat',
                transformOrigin: 'center',
                userSelect: 'none'
            });

            TweenMax.set(bbp.heroCardGraphBar.eq(1), {
                left: '1.2vw'
            });

            TweenMax.set(bbp.heroCardGraphBar.eq(2), {
                left: '2.4vw'
            });

            TweenMax.set(bbp.heroCardGraphBar.eq(3), {
                left: '3.6vw'
            });

            TweenMax.set(bbp.heroCardRow1, {
                top: 0
            });

            TweenMax.set(bbp.heroCardRow2, {
                top: bbp.heroCardRow1.height()
            });

            TweenMax.set(bbp.heroCardRow3, {
                bottom: 0
            });

            TweenMax.set(bbp.heroCardSliderOptionBubbleOuter, {
                x: bbp.container.width() * 0.002,
                y: bbp.container.width() * 0.002
            });

            TweenMax.set(bbp.heroCardSliderOptionBubbleMiddle, {
                x: bbp.container.width() * 0.003,
                y: bbp.container.width() * 0.003
            });

            TweenMax.set(bbp.heroCardSliderOptionBubbleInner, {
                x: bbp.container.width() * 0.006,
                y: bbp.container.width() * 0.006
            });

            TweenMax.set(bbp.heroCardSliderBarProgressBackground, {
                backgroundColor: bbp.darkerGrey
            });

            TweenMax.set(bbp.heroCardTypeInfoHoverContainer, {
                perspective: 800,
                perspectiveOrigin: '50% 50%',
                transformStyle: 'flat',
                userSelect: 'none'
            });

            TweenMax.set(bbp.resultsHeroTagContainer, {
                perspective: 800,
                perspectiveOrigin: '50% 50%',
                transformStyle: 'flat',
                userSelect: 'none'
            });

            TweenMax.set(bbp.resultsHeroTagBackground, {
                skewX: 26
            });

            TweenMax.set(bbp.resultsHeroTagContainer, {
                perspective: 800,
                perspectiveOrigin: '50% 50%',
                transformStyle: 'flat',
                userSelect: 'none'
            });

            TweenMax.set(bbp.resultHeroBody, {
                perspective: 800,
                perspectiveOrigin: '50% 50%',
                transformStyle: 'flat',
                userSelect: 'none'
            });

            TweenMax.set(bbp.statsRowBarUnitContainer, {
                perspective: 800,
                perspectiveOrigin: '50% 50%',
                transformStyle: 'flat',
                userSelect: 'none'
            });

            TweenMax.set(bbp.resultsContainer, {
                perspective: 800,
                perspectiveOrigin: '50% 50%',
                transformStyle: 'flat',
                userSelect: 'none'
            });

            TweenMax.set(bbp.resultRow, {
                transformOrigin: 'center'
            });
            
            TweenMax.set(bbp.navBlock, {
               height:$(window).height() - (bbp.logo.height() + (bbp.logo.offset().top * 2)) 
            });

            for (i = 0; i < bbp.heroCardTypeInfoHoverIcon.length; i++) {
                horizontallyCenter(bbp.heroCardTypeInfoHoverIcon.eq(i));
                verticallyCenter(bbp.heroCardTypeInfoHoverIcon.eq(i));
            }

            for (i = 0; i < bbp.heroCardTypeInfoIcon.length; i++) {
                horizontallyCenter(bbp.heroCardTypeInfoIcon.eq(i));
                verticallyCenter(bbp.heroCardTypeInfoIcon.eq(i));
            }

            TweenMax.set(bbp.heroCardTypeInfoContainer, {
                perspective: 800,
                perspectiveOrigin: 'center',
                transformStyle: 'flat',
                transformOrigin: 'center',
                userSelect: 'none'
            });

            TweenMax.set(bbp.heroCardTypeInfoHoverbutton, {
                perspective: 800,
                perspectiveOrigin: '50% 50%',
                transformStyle: 'flat',
                userSelect: 'none'
            });

            TweenMax.set(bbp.timeControlLeftArrow, {
                userSelect: 'none'
            });

            TweenMax.set(bbp.timeControlLeftArrowHover, {
                userSelect: 'none'
            });

            TweenMax.set(bbp.timeControlRightArrow, {
                userSelect: 'none'
            });

            TweenMax.set(bbp.timeControlRightArrowHover, {
                userSelect: 'none'
            });

            TweenMax.set(bbp.heroCardTimeModuleTimer, {
                userSelect: 'none'
            });

            for (i = 0; i < bbp.heroCardOptionsInfoContainer.length; i++) {
                verticallyCenter(bbp.heroCardOptionsInfoContainer.eq(i));
            }

            for (i = 0; i < bbp.heroCardOptionsHoverInfoContainer.length; i++) {
                verticallyCenter(bbp.heroCardOptionsHoverInfoContainer.eq(i));
            }

            verticallyCenter(bbp.timeControlLeftArrow);
            verticallyCenter(bbp.timeControlLeftArrowHover);
            verticallyCenter(bbp.timeControlRightArrow);
            verticallyCenter(bbp.timeControlRightArrowHover);

            TweenMax.set(bbp.twentyFivePercent, {
                x: (bbp.container.width() * 0.364) * 0.25
            });

            TweenMax.set(bbp.fiftyPercent, {
                x: (bbp.container.width() * 0.364) * 0.5
            });

            TweenMax.set(bbp.seventyFivePercent, {
                x: (bbp.container.width() * 0.364) * 0.75
            });

            //        TweenMax.set(bbp.heroCardTipBubbleTriangle, {
            //            left: (bbp.heroCardTipBubbleContainer.width() / 2) - (bbp.heroCardTipBubbleTriangle.width() / 2)
            //        });
        
        TweenMax.set(bbp.passwordOverlay, {
            perspective: 800,
            perspectiveOrigin: 'center',
            transformStyle: 'flat',
            transformOrigin: 'center'
        });
        
        TweenMax.set(bbp.passwordInput, {
            top:(bbp.passwordOverlay.height() / 2) - (bbp.passwordInput.outerHeight() / 2),
            boxShadow:bbp.passwordInputBoxShadowX + ' ' + bbp.passwordInputBoxShadowY + ' ' + bbp.passwordInputBoxShadowSize + ' ' + bbp.passwordInputBoxShadowSize2 + ' rgba(' + bbp.whiteRGB + ',0)'
        });
        };

        function recalculateNavHoverTops() {
            for (i = 0; i <bbp.navItemHover.length; i++) {
                bbp.currentNavHover =bbp.navItemHover.eq(i);

                TweenMax.set(bbp.currentNavHover, {
                    top:bbp.navHoverTop +=bbp.navHoverTopIncrement,
                    onComplete: function () {
                        bbp.navHoverTopIncrement =bbp.navItem.outerHeight();
                    }
                });
            }
        }

        TweenMax.set(bbp.heroBackground1, {
            opacity: 1,
            z: 0
        });

        TweenMax.set(bbp.heroBackground2, {
            opacity: 0,
            z: -250
        });

        TweenMax.set(bbp.heroBackground3, {
            opacity: 0,
            z: -250
        });

        TweenMax.set(bbp.heroBackground4, {
            opacity: 0,
            z: -250
        });

        TweenMax.set(bbp.heroCardSliderOption, {
            perspective: 1500,
            perspectiveOrigin: 'center',
            transformStyle: 'flat',
            transformOrigin: 'center',
            filter: 'blur(0)',
            userSelect: 'none',
            left: 'calc(50% - 0.9vw)'
        });

        for (i = 0; i < bbp.heroCardSliderOptionTitle.length; i++) {
            TweenMax.set(bbp.heroCardSliderOptionTitle.eq(i), {
                top: (bbp.heroCardSliderOption.eq(i).height() / 2) - (bbp.heroCardSliderOptionTitle.eq(i).height() / 2)
            });
        }

        TweenMax.set(bbp.heroCardSliderOptionTitle, {
            perspectiveOrigin: 'center',
            transformStyle: 'flat',
            transformOrigin: 'center',
            userSelect: 'none'
        });

        TweenMax.set(bbp.heroCardSliderOption.eq(0), {
            top: 'calc(0% - 0.9vw)'
        });

        TweenMax.set(bbp.heroCardSliderOption.eq(1), {
            top: 'calc(25% - 0.9vw)'
        });

        TweenMax.set(bbp.heroCardSliderOption.eq(2), {
            top: 'calc(50% - 0.9vw)'
        });

        TweenMax.set(bbp.heroCardSliderOption.eq(3), {
            top: 'calc(75% - 0.9vw)'
        });

        TweenMax.set(bbp.heroCardSliderOption.eq(4), {
            top: 'calc(100% - 0.9vw)'
        });

        /*TweenMax.set(bbp.heroCardSliderOptionBubble, {
            width:bbp.heroCardSliderOption.width(),
            height:bbp.heroCardSliderOption.width(),
            perspective: '2vw',
            perspectiveOrigin: 'center',
            transformStyle: 'flat',
            transformOrigin: 'center',
            userSelect: 'none'
        });*/

        /*TweenMax.set(bbp.heroCardSliderOptionBubbleOuter, {
            width:bbp.heroCardSliderOptionBubble.width() * 0.8,
            height:bbp.heroCardSliderOptionBubble.width() * 0.8
        });*/

        /*TweenMax.set(bbp.heroCardSliderOptionBubbleOuter, {
            top: (bbp.heroCardSliderOptionBubble.height() / 2) - (bbp.heroCardSliderOptionBubbleOuter.height() / 2),
            left: (bbp.heroCardSliderOptionBubble.width() / 2) - (bbp.heroCardSliderOptionBubbleOuter.width() / 2)
        });*/

        for (i = 0; i < bbp.heroCard.length; i++) {
            bbp.currentCard = bbp.heroCard.eq(i);
            bbp.currentX -= (bbp.cardsPerspective / bbp.heroCard.length);
            bbp.currentZ += (bbp.cardsPerspective / bbp.heroCard.length);
            bbp.currentCardRotationX += bbp.cardRotationXIncrement;
            bbp.currentCardRotationY += bbp.cardRotationYIncrement;
            bbp.currentCardSkewX += bbp.cardSkewXIncrement;
            bbp.currentZIndex--;
            TweenMax.set(bbp.currentCard, {
                z: '-' + bbp.currentZ,
                zIndex: bbp.currentZIndex,
                rotationY: bbp.currentCardRotationY
            });
            bbp.cardXIncrement = bbp.currentX;
            bbp.cardZIncrement = bbp.currentZ;
        }

        bbp.navHoverTop =bbp.navItems.offset().top;
        bbp.navHoverTopIncrement = 0;
        style();
        recalculateNavHoverTops();
        TweenMax.set(bbp.loadingOverlay, {
            opacity: 0,
            pointerEvents: 'none'
        });
        bbp.navHoverTop =bbp.navItems.offset().top;
        bbp.navHoverTopIncrement = 0;
        style();
        recalculateNavHoverTops();

        $(window).resize(function () {
            bbp.navHoverTop =bbp.navItems.offset().top;
            bbp.navHoverTopIncrement = 0;
            style();
            recalculateNavHoverTops();
        });

        bbp.toggleFpo.on('click', function () {
            if (bbp.fpoActive) {
                bbp.fpoActive = false;
                TweenMax.to(bbp.fpo, 0.25, {
                    opacity: 0
                }, 0);
                TweenMax.to(bbp.toggleFpo, 0.25, {
                    opacity: bbp.fpoInactiveOpacity
                }, 0);
                TweenMax.to(bbp.toggleFpoBackground, 0.25, {
                    opacity: 1
                }, 0);
                TweenMax.to(bbp.toggleFpoBackgroundAlt, 0.25, {
                    opacity: 0
                }, 0);
            } else {
                bbp.fpoActive = true;
                TweenMax.to(bbp.fpo, 0.25, {
                    opacity: 0.3
                }, 0);
                TweenMax.to(bbp.toggleFpo, 0.25, {
                    opacity: bbp.fpoActiveOpacity
                }, 0);
                TweenMax.to(bbp.toggleFpoBackground, 0.25, {
                    opacity: 0
                }, 0);
                TweenMax.to(bbp.toggleFpoBackgroundAlt, 0.25, {
                    opacity: 1
                }, 0);
            }
        });

        bbp.toggleLive.on('click', function () {
            if (bbp.bbpliveActive) {
                TweenMax.to(bbp.live, 0.25, {
                    opacity: 0
                }, 0);
                TweenMax.to(bbp.toggleLive, 0.25, {
                    opacity: bbp.fpoInactiveOpacity
                }, 0);
                TweenMax.to(bbp.toggleLiveBackground, 0.25, {
                    opacity: 1
                }, 0);
                TweenMax.to(bbp.toggleLiveBackgroundAlt, 0.25, {
                    opacity: 0
                }, 0);
                bbp.bbpliveActive = false;
            } else {
                TweenMax.to(bbp.live, 0.25, {
                    opacity: 1
                }, 0);
                TweenMax.to(bbp.toggleLive, 0.25, {
                    opacity: bbp.liveActiveOpacity
                }, 0);
                TweenMax.to(bbp.toggleLiveBackground, 0.25, {
                    opacity: 0
                }, 0);
                TweenMax.to(bbp.toggleLiveBackgroundAlt, 0.25, {
                    opacity: 1
                }, 0);
                bbp.bbpliveActive = true;
            }
        });

        bbp.toggleFpo.on('mouseover', function () {
            if (!bbp.fpoActive) {
                TweenMax.to(bbp.toggleFpo, 0.25, {
                    opacity: bbp.fpoInactiveMouseoverOpacity
                }, 0);
            }
        });

        bbp.toggleFpo.on('mouseout', function () {
            if (!bbp.fpoActive) {
                TweenMax.to(bbp.toggleFpo, 0.25, {
                    opacity: bbp.fpoInactiveOpacity
                }, 0);
            }
        });

        bbp.toggleLive.on('mouseover', function () {
            if (!bbp.bbpliveActive) {
                TweenMax.to(bbp.toggleLive, 0.25, {
                    opacity: bbp.liveInactiveMouseoverOpacity
                }, 0);
            }
        });

        bbp.toggleLive.on('mouseout', function () {
            if (!bbp.bbpliveActive) {
                TweenMax.to(bbp.toggleLive, 0.25, {
                    opacity: bbp.liveInactiveOpacity
                }, 0);
            }
        });

        function urlChecker() {
            switch (true) {
            case window.location.hash === "#fpo":
                bbp.bbpliveActive = false;
                bbp.fpoActive = true;
                TweenMax.to(bbp.live, 0.25, {
                    opacity: 0
                }, 0);
                TweenMax.to(bbp.fpo, 0.25, {
                    opacity: 0.3
                }, 0);
                TweenMax.to(bbp.toggleFpo, 0.25, {
                    opacity: bbp.fpoActiveOpacity
                }, 0);
                TweenMax.to(bbp.toggleLive, 0.25, {
                    opacity: 0.3
                }, 0);
                TweenMax.to(bbp.toggleFpoBackground, 0.25, {
                    opacity: 0
                }, 0);
                TweenMax.to(bbp.toggleFpoBackgroundAlt, 0.25, {
                    opacity: 1
                }, 0);
                TweenMax.to(bbp.toggleLiveBackgroundAlt, 0.25, {
                    opacity: 0
                }, 0);
                style();
                break;
            case window.location.hash === '#live':
                bbp.fpoActive = false;
                bbp.bbpliveActive = true;
                bbp.fpoOnly = false;
                bbp.liveOnly = false;
                TweenMax.to(bbp.live, 0.25, {
                    opacity: 1
                }, 0);
                TweenMax.to(bbp.fpo, 0.25, {
                    opacity: 0
                }, 0);
                TweenMax.to(bbp.toggleFpo, 0.25, {
                    opacity: 0.3
                }, 0);
                TweenMax.to(bbp.toggleLive, 0.25, {
                    opacity: 1
                }, 0);
                TweenMax.to(bbp.toggleLiveBackgroundAlt, 0.25, {
                    opacity: 1
                }, 0);
                TweenMax.to(bbp.toggleFpoBackgroundAlt, 0.25, {
                    opacity: 0
                }, 0);
                style();
                break;
            case window.location.hash === '#both':
                bbp.fpoActive = true;
                bbp.bbpliveActive = true;
                bbp.fpoOnly = false;
                bbp.liveOnly = false;
                TweenMax.to(bbp.live, 0.25, {
                    opacity: 1
                }, 0);
                TweenMax.to(bbp.fpo, 0.25, {
                    opacity: 0.3
                }, 0);
                TweenMax.to(bbp.toggleFpo, 0.25, {
                    opacity: 1
                }, 0);
                TweenMax.to(bbp.toggleLive, 0.25, {
                    opacity: 1
                }, 0);
                TweenMax.to(bbp.toggleLiveBackgroundAlt, 0.25, {
                    opacity: 1
                }, 0);
                TweenMax.to(bbp.toggleFpoBackgroundAlt, 0.25, {
                    opacity: 1
                }, 0);
                style();
                break;
            case window.location.hash === '#fpo-only':
                bbp.fpoActive = true;
                bbp.bbpliveActive = false;
                bbp.fpoOnly = true;
                bbp.liveOnly = false;
                TweenMax.set(bbp.live, {
                    display: 'none'
                });
                TweenMax.set(bbp.fpo, {
                    opacity: 1
                });
                TweenMax.set(bbp.toggleFpo, {
                    display: 'none'
                });
                TweenMax.set(bbp.toggleLive, {
                    display: 'none'
                });
                style();
                break;
            case window.location.hash === '#live-only':
                bbp.fpoActive = false;
                bbp.bbpliveActive = true;
                bbp.fpoOnly = false;
                bbp.liveOnly = true;
                TweenMax.set(bbp.live, {
                    opacity: 1
                });
                TweenMax.set(bbp.fpo, {
                    display: 'none'
                });
                TweenMax.set(bbp.toggleFpo, {
                    display: 'none'
                });
                TweenMax.set(bbp.toggleLive, {
                    display: 'none'
                });
                style();
                break;
            default:
                bbp.fpoActive = false;
                bbp.bbpliveActive = true;
                bbp.fpoOnly = false;
                bbp.liveOnly = true;
                TweenMax.set(bbp.live, {
                    opacity: 1
                });
                TweenMax.set(bbp.fpo, {
                    display: 'none'
                });
                TweenMax.set(bbp.toggleFpo, {
                    display: 'none'
                });
                TweenMax.set(bbp.toggleLive, {
                    display: 'none'
                });
                style();
                break;
            }
        }

        urlChecker();

        function opacityToggle(elem) {
            elem.on('click', function () {
                if (elem.css('opacity') !== 0) {
                    TweenMax.to(elem, 0.25, {
                        opacity: 0
                    }, 0);
                } else {
                    TweenMax.to(elem, 0.25, {
                        opacity: 'initial'
                    }, 0);
                }
            })
        }

        cardRotatorAnimations = {
            forward: function () {
                if (!bbp.cardsInMotion) {
                    bbp.cardsInMotion = true;
                    console.log('Cards in motion: ' + bbp.cardsInMotion);
                    tipBubbleClose();
                    switch (true) {

                        // STATUS BAR BETWEEN 0% AND 25%
                    case (bbp.progressBar.width() >= bbp.statusBar.width() * 0) && bbp.progressBar.width() < bbp.statusBar.width() * 0.23:
                        console.log('25');
                        TweenMax.to(bbp.myGoalLabel, 1, {
                            color: 'rgba(239, 168, 0, 1)'
                        }, 0);
                        TweenMax.to(bbp.twentyFivePercent, 1, {
                            backgroundColor: 'rgba(239, 168, 0, 1)'
                        }, 0);
                        TweenMax.to(bbp.progressBar, 1, {
                            width: '+=' + 25 + '%',
                            ease: Expo.easeOut
                        });
                        break;

                        // STATUS BAR BETWEEN 25% AND 50%
                    case (bbp.progressBar.width() >= bbp.statusBar.width() * 0.23) && bbp.progressBar.width() < bbp.statusBar.width() * 0.49:
                        console.log('50');
                        TweenMax.to(bbp.fitnessLevelLabel, 1, {
                            color: 'rgba(239, 168, 0, 1)'
                        }, 0);
                        TweenMax.to(bbp.fiftyPercent, 1, {
                            backgroundColor: 'rgba(239, 168, 0, 1)'
                        }, 0);
                        TweenMax.to(bbp.progressBar, 1, {
                            width: '+=' + 25 + '%',
                            ease: Expo.easeOut
                        });
                        break;

                        // STATUS BAR BETWEEN 50% AND 75%
                    case (bbp.progressBar.width() >= bbp.statusBar.width() * 0.49) && bbp.progressBar.width() < bbp.statusBar.width() * 0.74:
                        console.log('75');
                        TweenMax.to(bbp.workoutTypeLabel, 1, {
                            color: 'rgba(239, 168, 0, 1)'
                        }, 0);
                        TweenMax.to(bbp.seventyFivePercent, 1, {
                            backgroundColor: 'rgba(239, 168, 0, 1)'
                        }, 0);
                        TweenMax.to(bbp.progressBar, 1, {
                            width: '+=' + 25 + '%',
                            ease: Expo.easeOut
                        });
                        break;

                        // STATUS BAR BETWEEN 75% AND 100% FOLLOWED BY END BEHAVIOR
                    case bbp.progressBar.width() >= bbp.statusBar.width() * 0.74:
                        bbp.goalResults.html(bbp.userObject.selectedGoal);
                        bbp.levelResults.html(bbp.userObject.selectedFitnessLevel);
                        bbp.typeResults.html(bbp.userObject.selectedWorkoutType);
                        bbp.timeResults.html(bbp.userObject.workoutTime);
                        TweenMax.set(bbp.resultsQuick, {
                            opacity: 1
                        });
                        TweenMax.set(bbp.resultsQuickSectionHeader3, {
                            opacity: 0,
                            x: '-' + bbp.container.width() * 0.15
                        });
                        TweenMax.to(bbp.resultsQuickSectionHeader3, 1, {
                            opacity:1,
                            delay: 0.5
                        }, 0);
                        TweenMax.to(bbp.resultsQuickSectionHeader3, 3, {
                            x: '-' + bbp.container.width() * 0.03,
                            ease: Expo.easeOut
                        }, 0);
                        TweenMax.staggerFrom(bbp.resultsQuickSectionParagraph, 2, {
                            x: bbp.container.width() * 0.1,
                            opacity: 0,
                            ease: Expo.easeOut,
                            delay: 0.5
                        }, 0.1);
//                        TweenMax.to(bbp.resultsQuickSectionHeader3, 2, {
//                            opacity: 0,
//                            delay: 2 + ((bbp.resultsQuickSectionHeader3.length - 1) * 0.1)
//                        }, 0);
                        TweenMax.staggerTo(bbp.resultsQuickSectionParagraph, 2, {
                            x: '-' + bbp.container.width() * 0.1,
                            opacity: 0,
                            ease: Expo.easeIn,
                            delay: 1.5 + ((bbp.resultsQuickSectionParagraph.length - 1) * 0.1)
                        }, 0.1);
                        console.log('100');
                        TweenMax.to(bbp.heroBlackOverlay, 1, {
                            opacity: 0
                        });
                        TweenMax.to(bbp.finishLabel, 1, {
                            color: 'rgba(239, 168, 0, 1)'
                        }, 0);
                        TweenMax.to(bbp.workoutTimeLabel, 1, {
                            color: 'rgba(239, 168, 0, 1)'
                        }, 0);
                        TweenMax.staggerTo(bbp.checkmark, 0.5, {
                            height: 0,
                            ease: Expo.easeIn,
                            delay: 0.5
                        }, 0.1);
                        TweenMax.staggerTo(bbp.progressLabels, 0.5, {
                            opacity: 0,
                            ease: Expo.easeIn,
                            delay: 0.5
                        }, 0.1);
                        TweenMax.to(bbp.progressBar, 0.75, {
                            width: '+=' + 25 + '%',
                            ease: Expo.easeOut,
                            onComplete: function () {
                                TweenMax.set(bbp.resultsContainer, {
                                    display: 'inline'
                                });
                                TweenMax.set(bbp.resultRow, {
                                    opacity: 0
                                });
                                TweenMax.to(bbp.resultsContainer, 1, {
                                    opacity: 1,
                                    delay: 1,
                                    onComplete: function () {
                                        bbp.fpo2.hide();
                                        TweenMax.set(bbp.resultsContainer, {
                                            pointerEvents: 'auto'
                                        });
                                        TweenMax.set(bbp.resultRow, {
                                            opacity: 1
                                        });
                                        TweenMax.staggerFrom(bbp.resultRow, 1, {
                                            y: bbp.container.height() * 0.5,
                                            opacity: 0,
                                            ease: Expo.easeOut
                                        }, 0.1);
                                        TweenMax.set(bbp.goldHalo, {
                                            attr: {
                                                'stroke-dashoffset': 360
                                            }
                                        });
                                        TweenMax.set(bbp.resultHeroBodyBackground, {
                                            opacity: 1
                                        });
                                        TweenMax.from(bbp.resultHeroBodyBackground, 1, {
                                            opacity:0
                                        }, 0)
                                        TweenMax.staggerFrom(bbp.inactiveUnitsRow1, 0.5, {
                                            backgroundColor: 'rgba(150,156,161,1)',
                                            ease: Quad.easeOut,
                                            delay: 0.5
                                        }, 0.05);
                                        TweenMax.staggerFrom(bbp.inactiveUnitsRow2, 0.5, {
                                            backgroundColor: 'rgba(150,156,161,1)',
                                            ease: Quad.easeOut,
                                            delay: 0.7
                                        }, 0.05);
                                        TweenMax.staggerFrom(bbp.inactiveUnitsRow3, 0.5, {
                                            backgroundColor: 'rgba(150,156,161,1)',
                                            ease: Quad.easeOut,
                                            delay: 0.9
                                        }, 0.05);
                                        TweenMax.staggerFrom(bbp.inactiveUnitsRow4, 0.5, {
                                            backgroundColor: 'rgba(150,156,161,1)',
                                            ease: Quad.easeOut,
                                            delay: 1.1
                                        }, 0.05);
                                        TweenMax.staggerFrom(bbp.inactiveUnitsRow5, 0.5, {
                                            backgroundColor: 'rgba(150,156,161,1)',
                                            ease: Quad.easeOut,
                                            delay: 1.3
                                        }, 0.05);
                                        TweenMax.to(bbp.goldHalo, 3, {
                                            attr: {
                                                'stroke-dashoffset': bbp.currentResultsStrokeOffset
                                            },
                                            ease: Expo.easeInOut
                                        }, 0);
                                        TweenMax.to(bbp.resultsContainer, 1, {
                                            backgroundColor: 'rgba(246, 246, 249, 1)',
                                            delay: 1 + (0.1 * (bbp.resultRow.length - 1))
                                        });
                                    }
                                });
                                TweenMax.to(bbp.progressBar, 1, {
                                    scaleX: 0,
                                    transformOrigin: 'center',
                                    ease: Expo.easeIn
                                });
                                TweenMax.set(bbp.statusBar, {
                                    backgroundColor: 'transparent'
                                });
                                TweenMax.to(bbp.statusBarContainer, 1, {
                                    opacity: 0,
                                    ease: Quad.easeIn,
                                    delay: 0.5,
                                });
                            }
                        }, 0);
                        break;
                    }
                    TweenMax.to(bbp.heroCardTipBubble, 0.5, {
                        opacity: 0,
                        onComplete: function () {
                            TweenMax.set(bbp.heroCardTipBubble, {
                                pointerEvents: 'none'
                            });
                        }
                    }, 0)
                    bbp.activeCardIndex++;
                    console.log('Active Card Index: ' + bbp.activeCardIndex);
                    bbp.lastCardIndex = bbp.activeCardIndex - 1;

                    //Current Background Init
                    TweenMax.set(bbp.heroBackground.eq(bbp.lastCardIndex), {
                        opacity: 1,
                        z: bbp.currentBackgroundZStart
                    });

                    //Next Background Init
                    TweenMax.set(bbp.heroBackground.eq(bbp.activeCardIndex), {
                        opacity: 1,
                        z: bbp.nextBackgroundZStart
                    });

                    //Current Background Animation
                    TweenMax.to(bbp.heroBackground.eq(bbp.lastCardIndex), bbp.cardChangeDuration, {
                        opacity: 0,
                        z: bbp.currentBackgroundZEnd,
                        ease: Quart.easeInOut
                    }, 0);

                    //Next Background Animation
                    TweenMax.to(bbp.heroBackground.eq(bbp.activeCardIndex), bbp.cardChangeDuration, {
                        opacity: 1,
                        z: bbp.nextBackgroundZEnd,
                        ease: Quart.easeInOut
                    }, 0);

                    TweenMax.to(bbp.heroCard.eq(bbp.lastCardIndex), bbp.cardChangeDuration, {
                        x: '-' + bbp.container.width() * 0.2,
                        opacity: 0,
                        ease: bbp.cardChangeEase,
                        onComplete: function () {
                            bbp.cardsInMotion = false;
                            console.log('Cards in motion: ' + bbp.cardsInMotion);
                        }
                    }, 0);

                    TweenMax.to(bbp.heroCardShadow.eq(bbp.activeCardIndex), bbp.cardChangeDuration, {
                        opacity: 0,
                        pointerEvents: 'none',
                        ease: Power1.easeOut
                    }, 0);

                    TweenMax.to(bbp.heroCard, bbp.cardChangeDuration, {
                        z: '+=' + (bbp.cardsPerspective / bbp.heroCard.length),
                        rotationY: '-=' + bbp.cardRotationYIncrement,
                        ease: bbp.cardChangeEase
                    }, 0);
                }
            },
            backward: function () {
                if ((!bbp.cardsInMotion) && (!(bbp.activeCardIndex <= 0))) {
                    bbp.cardsInMotion = true;
                    console.log('Cards in motion: ' + bbp.cardsInMotion);
                    tipBubbleClose();
                    switch (true) {

                        // STATUS BAR BETWEEN 25% AND 50%
                    case (bbp.progressBar.width() >= bbp.statusBar.width() * 0.23) && bbp.progressBar.width() < bbp.statusBar.width() * 0.49:
                        console.log('0');
                        TweenMax.to(bbp.myGoalLabel, 1, {
                            color: 'rgba(255, 255, 255, 1)'
                        }, 0);
                        TweenMax.to(bbp.twentyFivePercent, 1, {
                            backgroundColor: 'rgba(255, 255, 255, 1)'
                        }, 0);
                        TweenMax.to(bbp.progressBar, 1, {
                            width: '0%',
                            ease: Expo.easeOut
                        });
                        break;

                        // STATUS BAR BETWEEN 50% AND 75%
                    case (bbp.progressBar.width() >= bbp.statusBar.width() * 0.49) && bbp.progressBar.width() < bbp.statusBar.width() * 0.74:
                        console.log('25');
                        TweenMax.to(bbp.fitnessLevelLabel, 1, {
                            color: 'rgba(255, 255, 255, 1)'
                        }, 0);
                        TweenMax.to(bbp.fiftyPercent, 1, {
                            backgroundColor: 'rgba(255, 255, 255, 1)'
                        }, 0);
                        TweenMax.to(bbp.progressBar, 1, {
                            width: '-=' + 25 + '%',
                            ease: Expo.easeOut
                        });
                        break;

                        // STATUS BAR BETWEEN 75% AND 100% FOLLOWED BY END BEHAVIOR
                    case bbp.progressBar.width() >= bbp.statusBar.width() * 0.74:
                        console.log('50');
                        TweenMax.to(bbp.seventyFivePercent, 1, {
                            backgroundColor: 'rgba(255, 255, 255, 1)'
                        }, 0);
                        TweenMax.to(bbp.workoutTypeLabel, 1, {
                            color: 'rgba(255, 255, 255, 1)'
                        }, 0);
                        TweenMax.to(bbp.progressBar, 0.75, {
                            width: '-=' + 25 + '%',
                            ease: Expo.easeOut
                        }, 0);
                        break;
                    }
                    TweenMax.to(bbp.heroCardTipBubble, 0.5, {
                        opacity: 0,
                        onComplete: function () {
                            TweenMax.set(bbp.heroCardTipBubble, {
                                pointerEvents: 'none'
                            });
                        }
                    }, 0)
                    bbp.activeCardIndex--;
                    bbp.hiddenCardIndex = bbp.activeCardIndex;
                    console.log('Active Card Index: ' + bbp.activeCardIndex);
                    bbp.lastCardIndex = bbp.activeCardIndex + 1;

                    //Current Background Init
                    TweenMax.set(bbp.heroBackground.eq(bbp.lastCardIndex), {
                        opacity: 1,
                        z: bbp.currentBackgroundZStart
                    });

                    //Previous Background Init
                    TweenMax.set(bbp.heroBackground.eq(bbp.hiddenCardIndex), {
                        opacity: 0,
                        z: bbp.currentBackgroundZEnd
                    });

                    //Current Background Animation
                    TweenMax.to(bbp.heroBackground.eq(bbp.lastCardIndex), bbp.cardChangeDuration, {
                        opacity: 1,
                        z: bbp.nextBackgroundZStart,
                        ease: Quart.easeInOut
                    }, 0);

                    //Previous Background Animation
                    TweenMax.to(bbp.heroBackground.eq(bbp.hiddenCardIndex), bbp.cardChangeDuration, {
                        opacity: 1,
                        x: 0,
                        z: 0,
                        ease: Quart.easeInOut
                    }, 0);

                    TweenMax.to(bbp.heroCard.eq(bbp.hiddenCardIndex), bbp.cardChangeDuration, {
                        x: 0,
                        z: '-=' + (bbp.cardsPerspective / bbp.heroCard.length),
                        opacity: 1,
                        ease: bbp.cardChangeEase,
                        onComplete: function () {
                            bbp.cardsInMotion = false;
                            console.log('Cards in motion: ' + bbp.cardsInMotion);
                        }
                    }, 0);

                    TweenMax.to(bbp.heroCardShadow.eq(bbp.lastCardIndex), bbp.cardChangeDuration, {
                        opacity: 1,
                        pointerEvents: 'all',
                        ease: Power1.easeOut
                    }, 0);

                    TweenMax.to(bbp.heroCard, bbp.cardChangeDuration, {
                        opacity: 1,
                        z: '-=' + (bbp.cardsPerspective / bbp.heroCard.length),
                        rotationY: '+=' + bbp.cardRotationYIncrement,
                        ease: bbp.cardChangeEase
                    }, 0);
                }
            }
        };

        //bbp.HERO CARD ROTATOR EVENT
        //opacityToggle(bbp.divs);bbp.cardXIncrement

        bbp.heroCardTipBubble.on('click', function () {
            TweenMax.to(bbp.heroCardTipBubble, 0.5, {
                opacity: 0,
                onComplete: function () {
                    TweenMax.set(bbp.heroCardTipBubble, {
                        pointerEvents: 'none'
                    });
                }
            }, 0)
        });

        bbp.heroCardFooterTitleBackground.on('click', function () {
            cardRotatorAnimations.forward();
        });

        bbp.heroCardFooterBackBackground.on('click', function () {
            cardRotatorAnimations.backward();
        });

        function bubbleGrow(elem) {
            TweenMax.set(elem, {
                opacity: 0,
                z: -500
            });
            TweenMax.to(elem, bbp.bubbleGrowDuration, {
                opacity: 1,
                z: 1000,
                ease: bbp.bubbleGrowEase,
                onComplete: function () {}
            }, 0);
        }

        function bubbleShrink(elem) {
            TweenMax.to(elem, bbp.bubbleShrinkDuration, {
                opacity: 1,
                scale: bbp.bubbleScaleStart,
                ease: bbp.bubbleShrinkEase
            }, 0);
        }

        bbp.heroCardFooterBackBackground.on('mouseover', function () {
            bubbleGrow($(this).find('.hero-card-footer-back-bg-bubble'));
        });

        bbp.heroCardFooterBackBackground.on('mouseout', function () {
            TweenMax.to($(this).find('.hero-card-footer-back-bg-bubble'), bbp.bubbleShrinkDuration, {
                opacity: 0,
                z: -500
            }, 0);
        });

        //        bbp.heroCardFooterBackBackground.on('mouseup', function () {
        //            TweenMax.set($(this).find('.hero-card-footer-back-bg-bubble'), {
        //                opacity: 0
        //            });
        //            TweenMax.set($(this), {
        //                backgroundColor: 'rgba(197, 138, 0, 1)'
        //            });
        //        });

        bbp.heroCardFooterTitleBackground.on('mouseover', function () {
            bubbleGrow($(this).find('.hero-card-footer-title-bg-bubble'));
        });

        bbp.heroCardFooterTitleBackground.on('mouseout', function () {
            TweenMax.to($(this).find('.hero-card-footer-title-bg-bubble'), bbp.bubbleShrinkDuration, {
                opacity: 0,
                z: -500
            }, 0);
        });

        //        bbp.heroCardFooterTitleBackground.on('mouseup', function () {
        //            TweenMax.set($(this).find('.hero-card-footer-title-bg-bubble'), {
        //                opacity: 0
        //            });
        //            TweenMax.set($(this), {
        //                backgroundColor: 'rgba(197, 138, 0, 1)'
        //            });
        //        });

        bbp.navItemHover.on('mouseover', function () {
            TweenMax.killChildTweensOf($(this).siblings('.nav-item-hover').find('.nav-item-hover-title'));
            TweenMax.set($(this).siblings('.nav-item-hover').find('.nav-item-hover-title-sub'), {
                opacity: 0
            });
            TweenMax.set($(this).siblings('.nav-item-hover').find('.nav-item-hover-title-main'), {
                opacity: 0
            });
            TweenMax.set($(this).find('.nav-item-hover-bg'), {
                x:bbp.navItemHoverXStart,
                opacity: 1
            });
            TweenMax.set($(this).find('.nav-item-hover-title-sub'), {
                x:bbp.navItemHoverTitleSubXStart,
                opacity: 0
            });
            TweenMax.set($(this).find('.nav-item-hover-title-main'), {
                x:bbp.navItemHoverTitleMainXStart,
                opacity: 0
            });
            TweenMax.set($(this).find('.nav-item-hover-icon'), {
                x: (bbp.navItemHoverIcon.width() * 1.5) + (bbp.container.width() * 0.02),
                opacity: 1
            });
            TweenMax.to($(this).find('.nav-item-hover-bg'),bbp.navItemHoverDurationIn, {
                x:bbp.navItemHoverXEnd,
                opacity: 1,
                ease:bbp.navItemHoverEase
            }, 0);
            TweenMax.to($(this).find('.nav-item-hover-title-sub'),bbp.navItemHoverTitleDurationIn, {
                x:bbp.navItemHoverTitleSubXEnd,
                ease:bbp.navItemHoverTitleEase,
                delay:bbp.navItemHoverSubDelay,
                opacity: 1
            }, 0);
            TweenMax.to($(this).find('.nav-item-hover-title-main'),bbp.navItemHoverTitleDurationIn, {
                x:bbp.navItemHoverTitleMainXEnd,
                ease:bbp.navItemHoverTitleEase,
                delay:bbp.navItemHoverMainDelay,
                opacity: 1
            }, 0);
            TweenMax.to($(this).find('.nav-item-hover-icon'),bbp.navItemHoverTitleDurationIn, {
                ease:bbp.navItemHoverTitleEase,
                x: (bbp.navItemHoverIcon.width() + (bbp.container.width() * 0.02)) * 0.3,
                opacity: 1,
                delay:bbp.navItemHoverIconDelay
            }, 0);
            TweenMax.to($(this).find('.nav-item-hover-title'),bbp.navItemHoverDurationIn, {
                borderBottomColor: 'rgba(0,0,0,0)',
                ease:bbp.navItemHoverEase
            }, 0);
            TweenMax.to($(this).prev('.nav-item-hover').find('.nav-item-hover-title'),bbp.navItemHoverDurationIn, {
                borderBottomColor: 'rgba(0,0,0,0)',
                ease:bbp.navItemHoverEase
            }, 0);
        });

        bbp.navItemHover.on('mouseout', function () {
            TweenMax.killChildTweensOf($(this).find('.nav-item-hover-title'));
            TweenMax.set($(this).find('.nav-item-hover-title-sub'), {
                opacity: 0
            });
            TweenMax.set($(this).find('.nav-item-hover-title-main'), {
                opacity: 0
            });
            TweenMax.to($(this).find('.nav-item-hover-bg'),bbp.navItemHoverDurationOut, {
                x:bbp.nav.width(),
                ease:bbp.navItemHoverEase
            }, 0);
            TweenMax.to($(this).find('.nav-item-hover-title-sub'),bbp.navItemHoverTitleDurationOut, {
                opacity: 0,
                ease:bbp.navItemHoverEase
            }, 0);
            TweenMax.to($(this).find('.nav-item-hover-title-main'),bbp.navItemHoverTitleDurationOut, {
                opacity: 0,
                ease:bbp.navItemHoverEase
            }, 0);
            TweenMax.to($(this).find('.nav-item-hover-title'),bbp.navItemHoverTitleDurationOut, {
                borderBottomColor: 'rgba(0,0,0,0.1)',
                ease:bbp.navItemHoverEase
            }, 0);
            TweenMax.to($(this).prev('.nav-item-hover').find('.nav-item-hover-title'),bbp.navItemHoverTitleDurationOut, {
                borderBottomColor: 'rgba(0,0,0,0.1)',
                ease:bbp.navItemHoverEase
            }, 0);
            TweenMax.set($(this).find('.nav-item-hover-icon'), {
                opacity: 0
            });
        });

        $(window).mousemove(function (e) {
            bbp.mouseX = e.clientX;
            bbp.mouseY = e.clientY;

            if (((bbp.mouseX >bbp.nav.width()) ||
                    /*(bbp.mouseY < bbp.userInfoDropdownHoverRegion.offset().top - 10) ||*/
                    (bbp.mouseY > bbp.userInfoDropdown.offset().top + bbp.userInfoDropdown.height()) ||
                    (bbp.logoutHovered)) &&
                (bbp.dropdownActive)) {
                dropdownClose();
                TweenMax.to(bbp.userInfoDropdownHoverRegion, 0.25, {
                    backgroundColor: 'rgba(0,0,0,0)'
                }, 0);
                TweenMax.to(bbp.userInfoNameParagraph, 0.25, {
                    color: 'rgba(0,0,0,1)'
                }, 0);
                TweenMax.to(bbp.userInfoNameParagraph, 0.5, {
                    y: 0,
                    ease: Quad.easeOut
                }, 0);
                TweenMax.to(bbp.downArrow, 0.5, {
                    y: bbp.container.width() * 0.004,
                    ease: Quad.easeOut,
                    delay: 0.075
                }, 0);
                TweenMax.to(bbp.downArrowSVG, 0.25, {
                    fill: 'rgba(0,0,0,1)'
                }, 0);
            }

        });

        function dropdownOpen() {
            TweenMax.set(bbp.userInfoDropdown, {
                pointerEvents: 'auto'
            });
            TweenMax.set(bbp.userInfoDropdownList, {
                pointerEvents: 'auto'
            });
            TweenMax.set(bbp.userInfoOption, {
                /*rotationX: -90,*/
                z: -500,
                opacity: 0
            });
            TweenMax.set(bbp.userInfoOptionTitle, {
                color: 'rgba(255,255,255,1)'
            });
            TweenMax.set(bbp.userInfoOptionBackground, {
                backgroundColor: 'rgba(0,0,0,0.3)'
            });
            TweenMax.staggerTo(bbp.userInfoOptionTitle, bbp.userInfoOptionDuration, {
                color: 'rgba(0,0,0,1)',
                ease: Quad.easeIn
            }, bbp.userInfoOptionStagger);
            TweenMax.staggerTo(bbp.userInfoOptionBackground, bbp.userInfoOptionDuration, {
                backgroundColor: 'rgba(0,0,0,0)',
                ease: Quad.easeIn
            }, bbp.userInfoOptionStagger);
            TweenMax.staggerTo(bbp.userInfoOption, bbp.userInfoOptionDuration, {
                /*rotationX: 0,*/
                z: 0,
                opacity: 1,
                ease: bbp.userInfoOptionEaseStart
            }, bbp.userInfoOptionStagger);
        }

        function dropdownClose() {
            TweenMax.set(bbp.userInfoDropdown, {
                pointerEvents: 'none'
            });
            TweenMax.set(bbp.userInfoDropdownList, {
                pointerEvents: 'none'
            });
            bbp.dropdownActive = false;
            TweenMax.staggerTo(bbp.userInfoOption, bbp.userInfoOptionDuration / 2, {
                z: -500,
                opacity: 0,
                ease: Back.easeIn
            }, bbp.userInfoOptionStagger);
        }

        bbp.userInfoDropdownHoverRegion.on('mouseover', function () {
            TweenMax.to(bbp.userInfoNameParagraph, 0.5, {
                y: '-' + bbp.container.height() * 0.005,
                ease: Back.easeInOut
            }, 0);
            TweenMax.to(bbp.downArrow, 0.5, {
                y: '-' + bbp.container.height() * 0.002,
                ease: Back.easeInOut,
                delay: 0.075
            }, 0);
            TweenMax.to(bbp.userInfoDropdownHoverRegion, 0.25, {
                backgroundColor: 'rgba(0,0,0,0.3)'
            }, 0);
            TweenMax.to(bbp.userInfoNameParagraph, 0.25, {
                color: 'rgba(255,255,255,1)'
            }, 0);
            TweenMax.to(bbp.downArrowSVG, 0.25, {
                fill: 'rgba(255,255,255,1)'
            }, 0);
            if (!bbp.dropdownActive) {
                TweenMax.killChildTweensOf(bbp.userInfoOption);
                bbp.dropdownActive = true;
                dropdownOpen();
            }
        });

        bbp.logoutHoverRegion.on('mouseover', function () {
            bbp.logoutHovered = true;
            TweenMax.to(bbp.userInfoLogOutParagraph, 0.5, {
                y: '-' + bbp.container.height() * 0.005,
                ease: Back.easeInOut
            }, 0);
            TweenMax.to(bbp.logoutHoverRegion, 0.25, {
                backgroundColor: 'rgba(0,0,0,0.6)'
            }, 0);
            TweenMax.to(bbp.userInfoLogOutParagraph, 0.25, {
                color: 'rgba(255,255,255,1)'
            }, 0);
        });

        bbp.logoutHoverRegion.on('mouseout', function () {
            bbp.logoutHovered = false;
            TweenMax.to(bbp.userInfoLogOutParagraph, 0.5, {
                y: 0,
                ease: Quad.easeOut
            }, 0);
            TweenMax.to(bbp.logoutHoverRegion, 0.25, {
                backgroundColor: 'rgba(0,0,0,0)'
            }, 0);
            TweenMax.to(bbp.userInfoLogOutParagraph, 0.25, {
                color: 'rgba(0,0,0,1)'
            }, 0);
        });

        bbp.userInfoOption.on('mouseover', function () {
            TweenMax.to($(this), 0.25, {
                scale: 1.05,
                ease: Expo.easeOut
            }, 0);
            TweenMax.set($(this).find('.user-info-option-title'), {
                color: 'rgba(255,255,255,1)'
            });
            TweenMax.to($(this).find('.user-info-option-bg'), 0.25, {
                backgroundColor: 'rgba(0,0,0,0.3)'
            }, 0);
        });

        bbp.userInfoOption.on('mouseout', function () {
            TweenMax.to($(this), 0.25, {
                scale: 1,
                ease: Expo.easeOut
            }, 0);
            TweenMax.set($(this).find('.user-info-option-title'), {
                color: 'rgba(0,0,0,1)'
            });
            TweenMax.to($(this).find('.user-info-option-bg'), 0.25, {
                backgroundColor: 'rgba(0,0,0,0)'
            }, 0);
        });

        bbp.heroCardTipBubbleBackground.on('mouseover', function () {
            if (!bbp.tipBubbleActive) {
                TweenMax.to(bbp.heroCardTipBubbleClose, 0.5, {
                    rotation: 360,
                    pointerEvents: 'none',
                    color: 'rgba(0,0,0,1)',
                    x: bbp.container.width() * 0.03,
                    ease: Expo.easeOut
                }, 0);
                TweenMax.to(bbp.heroCardTipBubbleBackground, 0.5, {
                    opacity: 1,
                    width: bbp.heroCardTipBubbleContainer.width() * 1.05,
                    ease: Expo.easeOut
                }, 0);
            }
        });

        bbp.heroCardTipBubbleBackground.on('mouseout', function () {
            if (!bbp.tipBubbleActive) {
                TweenMax.to(bbp.heroCardTipBubbleClose, 0.5, {
                    rotation: 0,
                    pointerEvents: 'all',
                    color: 'rgba(255,255,255,1)',
                    x: 0,
                    ease: Expo.easeOut
                }, 0);
                TweenMax.to(bbp.heroCardTipBubbleBackground, 0.5, {
                    opacity: 0,
                    width: '100%',
                    ease: Expo.easeOut
                }, 0);
            }
        });

        function tipBubbleClose() {
            bbp.tipBubbleActive = true;
            window.clearInterval(bbp.tipInterval);
            TweenMax.to(bbp.heroCardTipBubbleClose, 1, {
                rotation: -360,
                ease: Expo.easeOut
            }, 0);
            TweenMax.to(bbp.heroCardTipBubbleContainer, 1, {
                z: -300,
                transformOrigin: 'left top',
                scale: 0,
                ease: Expo.easeInOut
            }, 0);
            TweenMax.to(bbp.heroCardTipBubbleContainer, 0.5, {
                opacity: 0,
                ease: Quad.easeIn
            }, 0);
        }

        bbp.heroCardTipBubbleBackground.on('click', function () {
            tipBubbleClose();
        });

        bbp.heroCardTipBubbleClose.on('click', function () {
            tipBubbleClose();
        });

        bbp.heroCardTipBubbleClose.on('mouseover', function () {
            TweenMax.to(bbp.heroCardTipBubbleClose, 0.5, {
                rotation: 360,
                ease: Expo.easeOut
            }, 0);
        });

        bbp.heroCardTipBubbleClose.on('mouseout', function () {
            TweenMax.to(bbp.heroCardTipBubbleClose, 0.5, {
                rotation: 0,
                ease: Expo.easeOut
            }, 0);
        });

        bbp.heroCardOptions.on('mouseover', function () {
            if ((!bbp.optionClicked) && (!($(this).hasClass('option-selected')))) {
                optionHoverActive = true;
                TweenMax.set($(this).find('.hero-card-options-hover-icon'), {
                    z: 0,
                    opacity: 1
                });
                TweenMax.set($(this).parent('div').parent('.hero-card-row-full'), {
                    z: 300
                });
                TweenMax.set($(this).find('.hero-card-options-hover-bg'), {
                    opacity: 1,
                    z: 0
                });
                TweenMax.set($(this).find('.hero-card-options-icon'), {
                    opacity: 0
                });
                TweenMax.set($(this).find('.hero-card-options-hover-title'), {
                    z: 0,
                    opacity: 1
                });
                TweenMax.set($(this).find('.hero-card-options-title'), {
                    opacity: 0
                });
                TweenMax.to($(this).find('.hero-card-options-bg'), bbp.heroCardOptionsHoverBackgroundDurationStart, {
                    opacity: 0,
                    ease: bbp.heroCardOptionsHoverBackgroundEaseStart
                }, 0);
//                TweenMax.to($(this).find('.hero-card-options-hover-bg'), bbp.heroCardOptionsHoverBackgroundDurationStart, {
//                    z: 200,
//                    borderRadius: '1vw',
//                    ease: bbp.heroCardOptionsHoverBackgroundEaseStart
//                }, 0);
                TweenMax.to($(this).find('.hero-card-options-hover-icon'), bbp.heroCardOptionsHoverDurationStart, {
                    z: -300,
                    ease: bbp.heroCardOptionsHoverEaseStart
                }, 0);
                TweenMax.to($(this).find('.hero-card-options-hover-title'), bbp.heroCardOptionsHoverDurationStart, {
                    z: -300,
                    ease: bbp.heroCardOptionsHoverEaseStart
                }, 0);
            }
        });

        bbp.heroCardOptions.on('mouseout', function () {
            if (!($(this).hasClass('option-selected'))) {
                TweenMax.to($(this).find('.hero-card-options-bg'), bbp.heroCardOptionsHoverBackgroundDurationEnd, {
                    opacity: 1,
                    ease: bbp.heroCardOptionsHoverBackgroundEaseEnd
                }, 0);
                TweenMax.to($(this).find('.hero-card-options-hover-bg'), bbp.heroCardOptionsHoverBackgroundDurationEnd, {
                    opacity: 0,
                    z: 0,
                    borderRadius: 0,
                    ease: bbp.heroCardOptionsHoverBackgroundEaseEnd
                }, 0);
                TweenMax.set($(this).parent('div').parent('.hero-card-row-full'), {
                    z: 0
                });
                TweenMax.set($(this).find('.hero-card-options-hover-icon'), {
                    opacity: 0
                });
                TweenMax.set($(this).find('.hero-card-options-icon'), {
                    opacity: 1
                });
                TweenMax.set($(this).find('.hero-card-options-hover-title'), {
                    opacity: 0
                });
                TweenMax.set($(this).find('.hero-card-options-title'), {
                    opacity: 1
                });
                TweenMax.to($(this).find('.hero-card-options-hover-icon'), bbp.heroCardOptionsHoverDurationEnd, {
                    z: 0,
                    ease: bbp.heroCardOptionsHoverEaseEnd
                }, 0);
                TweenMax.to($(this).find('.hero-card-options-hover-title'), bbp.heroCardOptionsHoverDurationEnd, {
                    z: 0,
                    ease: bbp.heroCardOptionsHoverEaseEnd
                }, 0);
            } else {
                bbp.optionClicked = false;
            }
        });

        bbp.heroCardOptions.on('click', function () {
            if (!($(this).hasClass('option-selected'))) {
                bbp.optionClicked = true;
                $(this).addClass('option-selected');
                switch (true) {
                case $(this).hasClass('option1'):
                    bbp.userObject.selectedGoal = 'Lose Weight';
                    console.log(bbp.userObject.selectedGoal);
                    break;
                case $(this).hasClass('option2'):
                    bbp.userObject.selectedGoal = 'Build Muscle';
                    console.log(bbp.userObject.selectedGoal);
                    break;
                case $(this).hasClass('option3'):
                    bbp.userObject.selectedGoal = 'Get Toned';
                    console.log(bbp.userObject.selectedGoal);
                    break;
                case $(this).hasClass('option4'):
                    bbp.userObject.selectedGoal = 'Get Fit';
                    console.log(bbp.userObject.selectedGoal);
                    break;
                case $(this).hasClass('option5'):
                    bbp.userObject.selectedGoal = 'Get Stronger';
                    console.log(bbp.userObject.selectedGoal);
                    break;
                case $(this).hasClass('option6'):
                    bbp.userObject.selectedGoal = 'Performance';
                    console.log(bbp.userObject.selectedGoal);
                    break;
                }
                TweenMax.set(bbp.heroCardFooterTitleBlock1, {
                    opacity: 0,
                    display: 'none'
                });
                bbp.heroCardOptions.not($(this)).removeClass('option-selected');
                TweenMax.to(bbp.heroCardOptionsBackground.not($(this).find('.hero-card-options-bg')), bbp.heroCardOptionsHoverBackgroundDurationEnd, {
                    opacity: 1,
                    ease: bbp.heroCardOptionsHoverBackgroundEaseEnd
                }, 0);
                TweenMax.set($(this).parent('div').parent('.hero-card-row-full'), {
                    z: 0
                });
                TweenMax.to(bbp.heroCardOptionsHoverBackground.not($(this).find('.hero-card-options-hover-bg')), bbp.heroCardOptionsHoverBackgroundDurationEnd, {
                    opacity: 0,
                    z: 0,
                    ease: bbp.heroCardOptionsHoverBackgroundEaseEnd
                }, 0);
                TweenMax.set(bbp.heroCardOptionsHoverIcon.not($(this).find('.hero-card-options-hover-icon')), {
                    opacity: 0
                });
                TweenMax.set(bbp.heroCardOptionsIcon.not($(this).find('.hero-card-options-icon')), {
                    opacity: 1
                });
                TweenMax.set(bbp.heroCardOptionsHoverTitle.not($(this).find('.hero-card-options-hover-title')), {
                    opacity: 0
                });
                TweenMax.set(bbp.heroCardOptionsTitle.not($(this).find('.hero-card-options-title')), {
                    opacity: 1
                });
                TweenMax.to($(this).find('.hero-card-options-hover-bg'), bbp.heroCardOptionsHoverBackgroundDurationEnd, {
                    z: 0,
                    borderRadius: 0,
                    ease: bbp.heroCardOptionsHoverBackgroundEaseEnd
                }, 0);
                TweenMax.to($(this).find('.hero-card-options-hover-icon'), bbp.heroCardOptionsHoverDurationEnd, {
                    z: -300,
                    ease: bbp.heroCardOptionsHoverEaseEnd
                }, 0);
                TweenMax.to($(this).find('.hero-card-options-hover-title'), bbp.heroCardOptionsHoverDurationEnd, {
                    z: -300,
                    ease: bbp.heroCardOptionsHoverEaseEnd
                }, 0);
            } else {
                bbp.optionClicked = false;
                bbp.userObject.selectedGoal = 'None Selected';
                console.log(bbp.userObject.selectedGoal);
                $(this).removeClass('option-selected');
                TweenMax.to($(this).find('.hero-card-options-bg'), bbp.heroCardOptionsHoverBackgroundDurationEnd, {
                    opacity: 1,
                    ease: bbp.heroCardOptionsHoverBackgroundEaseEnd
                }, 0);
                TweenMax.to($(this).find('.hero-card-options-hover-bg'), bbp.heroCardOptionsHoverBackgroundDurationEnd, {
                    opacity: 0,
                    z: 0,
                    ease: bbp.heroCardOptionsHoverBackgroundEaseEnd
                }, 0);
                TweenMax.set($(this).find('.hero-card-options-hover-icon'), {
                    opacity: 0
                });
                TweenMax.set($(this).find('.hero-card-options-icon'), {
                    opacity: 1
                });
                TweenMax.set($(this).find('.hero-card-options-hover-title'), {
                    opacity: 0
                });
                TweenMax.set($(this).find('.hero-card-options-title'), {
                    opacity: 1
                });
            }
        });

        //1.4
        //1.2
        //0.9

        bbp.heroCardSliderOptionBubble.on('mouseover', function () {
            if ((!bbp.bubbleClicked) && (!($(this).hasClass('bubble-selected')))) {
                bbp.bubbleHoverActive = true;
                TweenMax.to($(this).prev('.hero-card-slider-option-title'), bbp.optionTitleDurationStart, {
                    z: 100,
                    opacity: 1,
                    x: '-' + bbp.heroCardSliderOption.width() * 0.6,
                    ease: bbp.optionTitleEaseStart
                }, 0);
                if (($(this).find('.option-bubble-outer').hasClass('darker-grey')) || ($(this).find('.option-bubble-middle').hasClass('darker-grey'))) {
                    TweenMax.to($(this).find('.option-bubble-outer'), bbp.optionBubbleDuration, {
                        width: '3.4vw',
                        height: '3.4vw',
                        x: '-' + bbp.container.width() * 0.008,
                        y: '-' + bbp.container.width() * 0.008,
                        backgroundColor: bbp.darkerGrey,
                        ease: bbp.optionBubbleEase
                    }, 0);
                    TweenMax.to($(this).find('.option-bubble-middle'), bbp.optionBubbleDuration, {
                        width: '2.8vw',
                        height: '2.8vw',
                        x: '-' + bbp.container.width() * 0.005,
                        y: '-' + bbp.container.width() * 0.005,
                        backgroundColor: 'rgba(255, 255, 255, 1)',
                        ease: bbp.optionBubbleEase,
                        delay: 0.1
                    }, 0);
                } else {
                    TweenMax.to($(this).find('.option-bubble-outer'), bbp.optionBubbleDuration, {
                        width: '3.4vw',
                        height: '3.4vw',
                        x: '-' + bbp.container.width() * 0.008,
                        y: '-' + bbp.container.width() * 0.008,
                        backgroundColor: 'rgba(206, 205, 210, 1)',
                        ease: bbp.optionBubbleEase
                    }, 0);
                    TweenMax.to($(this).find('.option-bubble-middle'), bbp.optionBubbleDuration, {
                        width: '2.8vw',
                        height: '2.8vw',
                        x: '-' + bbp.container.width() * 0.005,
                        y: '-' + bbp.container.width() * 0.005,
                        backgroundColor: 'rgba(255, 255, 255, 1)',
                        ease: bbp.optionBubbleEase,
                        delay: 0.1
                    }, 0);
                }
                TweenMax.to($(this).find('.option-bubble-inner'), bbp.optionBubbleDuration, {
                    width: '2vw',
                    height: '2vw',
                    x: '-' + bbp.container.width() * 0.001,
                    y: '-' + bbp.container.width() * 0.001,
                    backgroundColor: 'rgba(23, 122, 241, 1)',
                    ease: bbp.optionBubbleEase,
                    delay: 0.2
                }, 0);
            }
        });

        bbp.heroCardSliderOptionBubble.on('mouseout', function () {
            if (!($(this).hasClass('bubble-selected'))) {
                if (($(this).find('.option-bubble-outer').hasClass('darker-grey')) || ($(this).find('.option-bubble-middle').hasClass('darker-grey'))) {
                    TweenMax.to($(this).prev('.hero-card-slider-option-title'), bbp.optionTitleDurationEnd, {
                        z: 0,
                        opacity: 0.5,
                        x: 0,
                        ease: bbp.optionTitleEaseEnd
                    }, 0);
                    TweenMax.to($(this).find('.option-bubble-outer'), bbp.optionBubbleDuration, {
                        width: '1.4vw',
                        height: '1.4vw',
                        x: bbp.container.width() * 0.002,
                        y: bbp.container.width() * 0.002,
                        backgroundColor: bbp.darkerGrey,
                        ease: bbp.optionBubbleEase
                    }, 0);
                    TweenMax.to($(this).find('.option-bubble-middle'), bbp.optionBubbleDuration, {
                        width: '1.2vw',
                        height: '1.2vw',
                        x: bbp.container.width() * 0.003,
                        y: bbp.container.width() * 0.003,
                        backgroundColor: bbp.darkerGrey,
                        ease: bbp.optionBubbleEase,
                        delay: 0.1
                    }, 0);
                    TweenMax.to($(this).find('.option-bubble-inner'), bbp.optionBubbleDuration, {
                        width: '0.6vw',
                        height: '0.6vw',
                        x: bbp.container.width() * 0.006,
                        y: bbp.container.width() * 0.006,
                        backgroundColor: 'rgba(0, 0, 0, 1)',
                        ease: bbp.optionBubbleEase,
                        delay: 0.2
                    }, 0);
                } else {
                    TweenMax.to($(this).prev('.hero-card-slider-option-title'), bbp.optionTitleDurationEnd, {
                        z: 0,
                        opacity: 0.5,
                        x: 0,
                        ease: bbp.optionTitleEaseEnd
                    }, 0);
                    TweenMax.to($(this).find('.option-bubble-outer'), bbp.optionBubbleDuration, {
                        width: '1.4vw',
                        height: '1.4vw',
                        x: bbp.container.width() * 0.002,
                        y: bbp.container.width() * 0.002,
                        backgroundColor: 'rgba(206, 205, 210, 1)',
                        ease: bbp.optionBubbleEase
                    }, 0);
                    TweenMax.to($(this).find('.option-bubble-middle'), bbp.optionBubbleDuration, {
                        width: '1.2vw',
                        height: '1.2vw',
                        x: bbp.container.width() * 0.003,
                        y: bbp.container.width() * 0.003,
                        backgroundColor: 'rgba(206, 205, 210, 1)',
                        ease: bbp.optionBubbleEase,
                        delay: 0.1
                    }, 0);
                    TweenMax.to($(this).find('.option-bubble-inner'), bbp.optionBubbleDuration, {
                        width: '0.6vw',
                        height: '0.6vw',
                        x: bbp.container.width() * 0.006,
                        y: bbp.container.width() * 0.006,
                        backgroundColor: 'rgba(0, 0, 0, 1)',
                        ease: bbp.optionBubbleEase,
                        delay: 0.2
                    }, 0);
                }

            } else {
                bbp.bubbleClicked = false;
            }
        });

        bbp.heroCardSliderOptionBubble.on('click', function () {
            if (!($(this).hasClass('bubble-selected'))) {
                $(this).addClass('bubble-selected');
                bbp.heroCardSliderOptionBubble.not($(this)).removeClass('bubble-selected');
                switch (true) {
                case $(this).hasClass('b-bubble'):
                    bbp.userObject.selectedFitnessLevel = 'Beginner';
                    console.log(bbp.userObject.selectedFitnessLevel);
                    bbp.heroCardSliderOptionBubbleOuter.eq(0).removeClass('darker-grey');
                    bbp.heroCardSliderOptionBubbleMiddle.eq(0).removeClass('darker-grey');
                    bbp.heroCardSliderOptionBubbleOuter.eq(1).removeClass('darker-grey');
                    bbp.heroCardSliderOptionBubbleMiddle.eq(1).removeClass('darker-grey');
                    bbp.heroCardSliderOptionBubbleOuter.eq(2).removeClass('darker-grey');
                    bbp.heroCardSliderOptionBubbleMiddle.eq(2).removeClass('darker-grey');
                    bbp.heroCardSliderOptionBubbleOuter.eq(3).removeClass('darker-grey');
                    bbp.heroCardSliderOptionBubbleMiddle.eq(3).removeClass('darker-grey');
                    bbp.heroCardSliderOptionBubbleOuter.eq(4).removeClass('darker-grey');
                    bbp.heroCardSliderOptionBubbleMiddle.eq(4).removeClass('darker-grey');
                    TweenMax.to(bbp.heroCardSliderOptionBubbleOuter.not($(this).find('.option-bubble-outer')), bbp.otherOptionBubbleDuration, {
                        backgroundColor: 'rgba(206, 205, 210, 1)',
                        ease: bbp.otherOptionBubbleEase
                    }, 0);
                    TweenMax.to(bbp.heroCardSliderOptionBubbleMiddle.not($(this).find('.option-bubble-middle')), bbp.otherOptionBubbleDuration, {
                        backgroundColor: 'rgba(206, 205, 210, 1)',
                        ease: bbp.otherOptionBubbleEase
                    }, 0);
                    TweenMax.to(bbp.heroCardSliderOptionBubbleInner.not($(this).find('.option-bubble-inner')), bbp.otherOptionBubbleDuration, {
                        backgroundColor: 'rgba(0, 0, 0, 1)',
                        ease: bbp.otherOptionBubbleEase,
                        delay: 0.2
                    }, 0);
                    TweenMax.to(bbp.heroCardSliderBarProgress, bbp.sliderBarDuration, {
                        height: '0%',
                        ease: bbp.sliderBarEase
                    }, 0);
                    TweenMax.staggerTo(bbp.heroCardGraphBar1.find('.graph-bar-fill').find('.graph-bar-fill-inner'), bbp.graphBarFillDuration, {
                        height: '100%',
                        ease: bbp.graphBarFillEase
                    }, -0.05);
                    TweenMax.staggerTo(bbp.heroCardGraphBar2.find('.graph-bar-fill').find('.graph-bar-fill-inner'), bbp.graphBarFillDuration, {
                        height: '0%',
                        ease: bbp.graphBarFillEase
                    }, 0.05);
                    TweenMax.staggerTo(bbp.heroCardGraphBar3.find('.graph-bar-fill').find('.graph-bar-fill-inner'), bbp.graphBarFillDuration, {
                        height: '0%',
                        ease: bbp.graphBarFillEase
                    }, 0.05);
                    TweenMax.staggerTo(bbp.heroCardGraphBar4.find('.graph-bar-fill').find('.graph-bar-fill-inner'), bbp.graphBarFillDuration, {
                        height: '0%',
                        ease: bbp.graphBarFillEase
                    }, 0.05);
                    TweenMax.staggerTo(bbp.heroCardGraphBar5.find('.graph-bar-fill').find('.graph-bar-fill-inner'), bbp.graphBarFillDuration, {
                        height: '0%',
                        ease: bbp.graphBarFillEase
                    }, 0.05);
                    break;
                case $(this).hasClass('bi-bubble'):
                    bbp.userObject.selectedFitnessLevel = 'Beginner/Intermediate';
                    console.log(bbp.userObject.selectedFitnessLevel);
                    TweenMax.to(bbp.heroCardSliderOptionBubbleOuter.not($(this).find('.option-bubble-outer')), bbp.otherOptionBubbleDuration, {
                        backgroundColor: 'rgba(206, 205, 210, 1)',
                        ease: bbp.otherOptionBubbleEase
                    }, 0);
                    TweenMax.to(bbp.heroCardSliderOptionBubbleMiddle.not($(this).find('.option-bubble-middle')), bbp.otherOptionBubbleDuration, {
                        backgroundColor: 'rgba(206, 205, 210, 1)',
                        ease: bbp.otherOptionBubbleEase
                    }, 0);
                    TweenMax.to(bbp.heroCardSliderOptionBubbleInner.not($(this).find('.option-bubble-inner')), bbp.otherOptionBubbleDuration, {
                        backgroundColor: 'rgba(0, 0, 0, 1)',
                        ease: bbp.otherOptionBubbleEase,
                        delay: 0.2
                    }, 0);
                    bbp.heroCardSliderOptionBubbleOuter.eq(0).removeClass('darker-grey');
                    bbp.heroCardSliderOptionBubbleMiddle.eq(0).removeClass('darker-grey');
                    bbp.heroCardSliderOptionBubbleOuter.eq(1).removeClass('darker-grey');
                    bbp.heroCardSliderOptionBubbleMiddle.eq(1).removeClass('darker-grey');
                    bbp.heroCardSliderOptionBubbleOuter.eq(2).removeClass('darker-grey');
                    bbp.heroCardSliderOptionBubbleMiddle.eq(2).removeClass('darker-grey');
                    bbp.heroCardSliderOptionBubbleOuter.eq(4).removeClass('darker-grey').addClass('darker-grey');
                    bbp.heroCardSliderOptionBubbleMiddle.eq(4).removeClass('darker-grey').addClass('darker-grey');
                    TweenMax.to(bbp.heroCardSliderOptionBubbleOuter.eq(4), bbp.otherOptionBubbleDuration, {
                        backgroundColor: bbp.darkerGrey,
                        ease: bbp.otherOptionBubbleEase
                    }, 0);
                    TweenMax.to(bbp.heroCardSliderOptionBubbleMiddle.eq(4), bbp.otherOptionBubbleDuration, {
                        backgroundColor: bbp.darkerGrey,
                        ease: bbp.otherOptionBubbleEase
                    }, 0);
                    TweenMax.to(bbp.heroCardSliderBarProgress, bbp.sliderBarDuration, {
                        height: '25%',
                        ease: bbp.sliderBarEase
                    }, 0);
                    TweenMax.staggerTo(bbp.heroCardGraphBar1.find('.graph-bar-fill').find('.graph-bar-fill-inner'), bbp.graphBarFillDuration, {
                        height: '100%',
                        ease: bbp.graphBarFillEase
                    }, -0.05);
                    TweenMax.staggerTo(bbp.heroCardGraphBar2.find('.graph-bar-fill').find('.graph-bar-fill-inner'), bbp.graphBarFillDuration, {
                        height: '100%',
                        ease: bbp.graphBarFillEase
                    }, -0.05);
                    TweenMax.staggerTo(bbp.heroCardGraphBar3.find('.graph-bar-fill').find('.graph-bar-fill-inner'), bbp.graphBarFillDuration, {
                        height: '0%',
                        ease: bbp.graphBarFillEase
                    }, 0.05);
                    TweenMax.staggerTo(bbp.heroCardGraphBar4.find('.graph-bar-fill').find('.graph-bar-fill-inner'), bbp.graphBarFillDuration, {
                        height: '0%',
                        ease: bbp.graphBarFillEase
                    }, 0.05);
                    TweenMax.staggerTo(bbp.heroCardGraphBar5.find('.graph-bar-fill').find('.graph-bar-fill-inner'), bbp.graphBarFillDuration, {
                        height: '0%',
                        ease: bbp.graphBarFillEase
                    }, 0.05);
                    break;
                case $(this).hasClass('i-bubble'):
                    bbp.userObject.selectedFitnessLevel = 'Intermediate';
                    console.log(bbp.userObject.selectedFitnessLevel);
                    bbp.heroCardSliderOptionBubbleOuter.eq(0).removeClass('darker-grey');
                    bbp.heroCardSliderOptionBubbleMiddle.eq(0).removeClass('darker-grey');
                    bbp.heroCardSliderOptionBubbleOuter.eq(1).removeClass('darker-grey');
                    bbp.heroCardSliderOptionBubbleMiddle.eq(1).removeClass('darker-grey');
                    bbp.heroCardSliderOptionBubbleOuter.eq(3).removeClass('darker-grey').addClass('darker-grey');
                    bbp.heroCardSliderOptionBubbleMiddle.eq(3).removeClass('darker-grey').addClass('darker-grey');
                    bbp.heroCardSliderOptionBubbleOuter.eq(4).removeClass('darker-grey').addClass('darker-grey');
                    bbp.heroCardSliderOptionBubbleMiddle.eq(4).removeClass('darker-grey').addClass('darker-grey');
                    TweenMax.to(bbp.heroCardSliderOptionBubbleOuter.not($(this).find('.option-bubble-outer')), bbp.otherOptionBubbleDuration, {
                        backgroundColor: 'rgba(206, 205, 210, 1)',
                        ease: bbp.otherOptionBubbleEase
                    }, 0);
                    TweenMax.to(bbp.heroCardSliderOptionBubbleMiddle.not($(this).find('.option-bubble-middle')), bbp.otherOptionBubbleDuration, {
                        backgroundColor: 'rgba(206, 205, 210, 1)',
                        ease: bbp.otherOptionBubbleEase
                    }, 0);
                    TweenMax.to(bbp.heroCardSliderOptionBubbleInner.not($(this).find('.option-bubble-inner')), bbp.otherOptionBubbleDuration, {
                        backgroundColor: 'rgba(0, 0, 0, 1)',
                        ease: bbp.otherOptionBubbleEase,
                        delay: 0.2
                    }, 0);
                    TweenMax.to(bbp.heroCardSliderOptionBubbleOuter.eq(3), bbp.otherOptionBubbleDuration, {
                        backgroundColor: bbp.darkerGrey,
                        ease: bbp.otherOptionBubbleEase
                    }, 0);
                    TweenMax.to(bbp.heroCardSliderOptionBubbleMiddle.eq(3), bbp.otherOptionBubbleDuration, {
                        backgroundColor: bbp.darkerGrey,
                        ease: bbp.otherOptionBubbleEase
                    }, 0);
                    TweenMax.to(bbp.heroCardSliderOptionBubbleOuter.eq(4), bbp.otherOptionBubbleDuration, {
                        backgroundColor: bbp.darkerGrey,
                        ease: bbp.otherOptionBubbleEase
                    }, 0);
                    TweenMax.to(bbp.heroCardSliderOptionBubbleMiddle.eq(4), bbp.otherOptionBubbleDuration, {
                        backgroundColor: bbp.darkerGrey,
                        ease: bbp.otherOptionBubbleEase
                    }, 0);
                    TweenMax.to(bbp.heroCardSliderBarProgress, bbp.sliderBarDuration, {
                        height: '50%',
                        ease: bbp.sliderBarEase
                    }, 0);
                    TweenMax.staggerTo(bbp.heroCardGraphBar1.find('.graph-bar-fill').find('.graph-bar-fill-inner'), bbp.graphBarFillDuration, {
                        height: '100%',
                        ease: bbp.graphBarFillEase
                    }, -0.05);
                    TweenMax.staggerTo(bbp.heroCardGraphBar2.find('.graph-bar-fill').find('.graph-bar-fill-inner'), bbp.graphBarFillDuration, {
                        height: '100%',
                        ease: bbp.graphBarFillEase
                    }, -0.05);
                    TweenMax.staggerTo(bbp.heroCardGraphBar3.find('.graph-bar-fill').find('.graph-bar-fill-inner'), bbp.graphBarFillDuration, {
                        height: '100%',
                        ease: bbp.graphBarFillEase
                    }, -0.05);
                    TweenMax.staggerTo(bbp.heroCardGraphBar4.find('.graph-bar-fill').find('.graph-bar-fill-inner'), bbp.graphBarFillDuration, {
                        height: '0%',
                        ease: bbp.graphBarFillEase
                    }, 0.05);
                    TweenMax.staggerTo(bbp.heroCardGraphBar5.find('.graph-bar-fill').find('.graph-bar-fill-inner'), bbp.graphBarFillDuration, {
                        height: '0%',
                        ease: bbp.graphBarFillEase
                    }, 0.05);
                    break;
                case $(this).hasClass('ia-bubble'):
                    bbp.userObject.selectedFitnessLevel = 'Intermediate/Advance';
                    console.log(bbp.userObject.selectedFitnessLevel);
                    bbp.heroCardSliderOptionBubbleOuter.eq(0).removeClass('darker-grey');
                    bbp.heroCardSliderOptionBubbleMiddle.eq(0).removeClass('darker-grey');
                    bbp.heroCardSliderOptionBubbleOuter.eq(2).removeClass('darker-grey').addClass('darker-grey');
                    bbp.heroCardSliderOptionBubbleMiddle.eq(2).removeClass('darker-grey').addClass('darker-grey');
                    bbp.heroCardSliderOptionBubbleOuter.eq(3).removeClass('darker-grey').addClass('darker-grey');
                    bbp.heroCardSliderOptionBubbleMiddle.eq(3).removeClass('darker-grey').addClass('darker-grey');
                    bbp.heroCardSliderOptionBubbleOuter.eq(4).removeClass('darker-grey').addClass('darker-grey');
                    bbp.heroCardSliderOptionBubbleMiddle.eq(4).removeClass('darker-grey').addClass('darker-grey');
                    TweenMax.to(bbp.heroCardSliderOptionBubbleOuter.not($(this).find('.option-bubble-outer')), bbp.otherOptionBubbleDuration, {
                        backgroundColor: 'rgba(206, 205, 210, 1)',
                        ease: bbp.otherOptionBubbleEase
                    }, 0);
                    TweenMax.to(bbp.heroCardSliderOptionBubbleMiddle.not($(this).find('.option-bubble-middle')), bbp.otherOptionBubbleDuration, {
                        backgroundColor: 'rgba(206, 205, 210, 1)',
                        ease: bbp.otherOptionBubbleEase
                    }, 0);
                    TweenMax.to(bbp.heroCardSliderOptionBubbleInner.not($(this).find('.option-bubble-inner')), bbp.otherOptionBubbleDuration, {
                        backgroundColor: 'rgba(0, 0, 0, 1)',
                        ease: bbp.otherOptionBubbleEase,
                        delay: 0.2
                    }, 0);
                    TweenMax.to(bbp.heroCardSliderOptionBubbleOuter.eq(2), bbp.otherOptionBubbleDuration, {
                        backgroundColor: bbp.darkerGrey,
                        ease: bbp.otherOptionBubbleEase
                    }, 0);
                    TweenMax.to(bbp.heroCardSliderOptionBubbleMiddle.eq(2), bbp.otherOptionBubbleDuration, {
                        backgroundColor: bbp.darkerGrey,
                        ease: bbp.otherOptionBubbleEase
                    }, 0);
                    TweenMax.to(bbp.heroCardSliderOptionBubbleOuter.eq(3), bbp.otherOptionBubbleDuration, {
                        backgroundColor: bbp.darkerGrey,
                        ease: bbp.otherOptionBubbleEase
                    }, 0);
                    TweenMax.to(bbp.heroCardSliderOptionBubbleMiddle.eq(3), bbp.otherOptionBubbleDuration, {
                        backgroundColor: bbp.darkerGrey,
                        ease: bbp.otherOptionBubbleEase
                    }, 0);
                    TweenMax.to(bbp.heroCardSliderOptionBubbleOuter.eq(4), bbp.otherOptionBubbleDuration, {
                        backgroundColor: bbp.darkerGrey,
                        ease: bbp.otherOptionBubbleEase
                    }, 0);
                    TweenMax.to(bbp.heroCardSliderOptionBubbleMiddle.eq(4), bbp.otherOptionBubbleDuration, {
                        backgroundColor: bbp.darkerGrey,
                        ease: bbp.otherOptionBubbleEase
                    }, 0);
                    TweenMax.to(bbp.heroCardSliderBarProgress, bbp.sliderBarDuration, {
                        height: '75%',
                        ease: bbp.sliderBarEase
                    }, 0);
                    TweenMax.staggerTo(bbp.heroCardGraphBar1.find('.graph-bar-fill').find('.graph-bar-fill-inner'), bbp.graphBarFillDuration, {
                        height: '100%',
                        ease: bbp.graphBarFillEase
                    }, -0.05);
                    TweenMax.staggerTo(bbp.heroCardGraphBar2.find('.graph-bar-fill').find('.graph-bar-fill-inner'), bbp.graphBarFillDuration, {
                        height: '100%',
                        ease: bbp.graphBarFillEase
                    }, -0.05);
                    TweenMax.staggerTo(bbp.heroCardGraphBar3.find('.graph-bar-fill').find('.graph-bar-fill-inner'), bbp.graphBarFillDuration, {
                        height: '100%',
                        ease: bbp.graphBarFillEase
                    }, -0.05);
                    TweenMax.staggerTo(bbp.heroCardGraphBar4.find('.graph-bar-fill').find('.graph-bar-fill-inner'), bbp.graphBarFillDuration, {
                        height: '100%',
                        ease: bbp.graphBarFillEase
                    }, -0.05);
                    TweenMax.staggerTo(bbp.heroCardGraphBar5.find('.graph-bar-fill').find('.graph-bar-fill-inner'), bbp.graphBarFillDuration, {
                        height: '0%',
                        ease: bbp.graphBarFillEase
                    }, 0.05);
                    break;
                case $(this).hasClass('a-bubble'):
                    bbp.userObject.selectedFitnessLevel = 'Advance';
                    console.log(bbp.userObject.selectedFitnessLevel);
                    bbp.heroCardSliderOptionBubbleOuter.eq(1).removeClass('darker-grey').addClass('darker-grey');
                    bbp.heroCardSliderOptionBubbleMiddle.eq(1).removeClass('darker-grey').addClass('darker-grey');
                    bbp.heroCardSliderOptionBubbleOuter.eq(2).removeClass('darker-grey').addClass('darker-grey');
                    bbp.heroCardSliderOptionBubbleMiddle.eq(2).removeClass('darker-grey').addClass('darker-grey');
                    bbp.heroCardSliderOptionBubbleOuter.eq(3).removeClass('darker-grey').addClass('darker-grey');
                    bbp.heroCardSliderOptionBubbleMiddle.eq(3).removeClass('darker-grey').addClass('darker-grey');
                    bbp.heroCardSliderOptionBubbleOuter.eq(4).removeClass('darker-grey').addClass('darker-grey');
                    bbp.heroCardSliderOptionBubbleMiddle.eq(4).removeClass('darker-grey').addClass('darker-grey');
                    TweenMax.to(bbp.heroCardSliderOptionBubbleOuter.not($(this).find('.option-bubble-outer')), bbp.otherOptionBubbleDuration, {
                        backgroundColor: 'rgba(206, 205, 210, 1)',
                        ease: bbp.otherOptionBubbleEase
                    }, 0);
                    TweenMax.to(bbp.heroCardSliderOptionBubbleMiddle.not($(this).find('.option-bubble-middle')), bbp.otherOptionBubbleDuration, {
                        backgroundColor: 'rgba(206, 205, 210, 1)',
                        ease: bbp.otherOptionBubbleEase
                    }, 0);
                    TweenMax.to(bbp.heroCardSliderOptionBubbleInner.not($(this).find('.option-bubble-inner')), bbp.otherOptionBubbleDuration, {
                        backgroundColor: 'rgba(0, 0, 0, 1)',
                        ease: bbp.otherOptionBubbleEase,
                        delay: 0.2
                    }, 0);
                    TweenMax.to(bbp.heroCardSliderOptionBubbleOuter.eq(1), bbp.otherOptionBubbleDuration, {
                        backgroundColor: bbp.darkerGrey,
                        ease: bbp.otherOptionBubbleEase
                    }, 0);
                    TweenMax.to(bbp.heroCardSliderOptionBubbleMiddle.eq(1), bbp.otherOptionBubbleDuration, {
                        backgroundColor: bbp.darkerGrey,
                        ease: bbp.otherOptionBubbleEase
                    }, 0);
                    TweenMax.to(bbp.heroCardSliderOptionBubbleOuter.eq(2), bbp.otherOptionBubbleDuration, {
                        backgroundColor: bbp.darkerGrey,
                        ease: bbp.otherOptionBubbleEase
                    }, 0);
                    TweenMax.to(bbp.heroCardSliderOptionBubbleMiddle.eq(2), bbp.otherOptionBubbleDuration, {
                        backgroundColor: bbp.darkerGrey,
                        ease: bbp.otherOptionBubbleEase
                    }, 0);
                    TweenMax.to(bbp.heroCardSliderOptionBubbleOuter.eq(3), bbp.otherOptionBubbleDuration, {
                        backgroundColor: bbp.darkerGrey,
                        ease: bbp.otherOptionBubbleEase
                    }, 0);
                    TweenMax.to(bbp.heroCardSliderOptionBubbleMiddle.eq(3), bbp.otherOptionBubbleDuration, {
                        backgroundColor: bbp.darkerGrey,
                        ease: bbp.otherOptionBubbleEase
                    }, 0);
                    TweenMax.to(bbp.heroCardSliderOptionBubbleOuter.eq(4), bbp.otherOptionBubbleDuration, {
                        backgroundColor: bbp.darkerGrey,
                        ease: bbp.otherOptionBubbleEase
                    }, 0);
                    TweenMax.to(bbp.heroCardSliderOptionBubbleMiddle.eq(4), bbp.otherOptionBubbleDuration, {
                        backgroundColor: bbp.darkerGrey,
                        ease: bbp.otherOptionBubbleEase
                    }, 0);
                    TweenMax.to(bbp.heroCardSliderBarProgress, bbp.sliderBarDuration, {
                        height: '100%',
                        ease: bbp.sliderBarEase
                    }, 0);
                    TweenMax.staggerTo(bbp.heroCardGraphBar1.find('.graph-bar-fill').find('.graph-bar-fill-inner'), bbp.graphBarFillDuration, {
                        height: '100%',
                        ease: bbp.graphBarFillEase
                    }, -0.05);
                    TweenMax.staggerTo(bbp.heroCardGraphBar2.find('.graph-bar-fill').find('.graph-bar-fill-inner'), bbp.graphBarFillDuration, {
                        height: '100%',
                        ease: bbp.graphBarFillEase
                    }, -0.05);
                    TweenMax.staggerTo(bbp.heroCardGraphBar3.find('.graph-bar-fill').find('.graph-bar-fill-inner'), bbp.graphBarFillDuration, {
                        height: '100%',
                        ease: bbp.graphBarFillEase
                    }, -0.05);
                    TweenMax.staggerTo(bbp.heroCardGraphBar4.find('.graph-bar-fill').find('.graph-bar-fill-inner'), bbp.graphBarFillDuration, {
                        height: '100%',
                        ease: bbp.graphBarFillEase
                    }, -0.05);
                    TweenMax.staggerTo(bbp.heroCardGraphBar5.find('.graph-bar-fill').find('.graph-bar-fill-inner'), bbp.graphBarFillDuration, {
                        height: '100%',
                        ease: bbp.graphBarFillEase
                    }, -0.05);
                    break;
                };
                TweenMax.to(bbp.heroCardSliderOptionTitle.not($(this).prev('.hero-card-slider-option-title')), bbp.optionTitleDurationEnd, {
                    z: 0,
                    opacity: 0.5,
                    x: 0,
                    ease: bbp.optionTitleEaseEnd
                }, 0);
                TweenMax.from(bbp.heroCardSliderBarProgressBlueFade, bbp.blueFadeDuration, {
                    opacity: 0,
                    ease: Quad.easeIn
                }, 0);
                TweenMax.to($(this).find('.option-bubble-outer'), bbp.optionBubbleDuration, {
                    width: '1.4vw',
                    height: '1.4vw',
                    x: bbp.container.width() * 0.002,
                    y: bbp.container.width() * 0.002,
                    backgroundColor: bbp.bbBlue,
                    ease: bbp.optionBubbleEase
                }, 0);
                TweenMax.to($(this).find('.option-bubble-middle'), bbp.optionBubbleDuration, {
                    width: '1.2vw',
                    height: '1.2vw',
                    x: bbp.container.width() * 0.003,
                    y: bbp.container.width() * 0.003,
                    backgroundColor: bbp.bbBlue,
                    ease: bbp.optionBubbleEase,
                    delay: 0.1
                }, 0);
                TweenMax.to($(this).find('.option-bubble-inner'), bbp.optionBubbleDuration, {
                    width: '0.6vw',
                    height: '0.6vw',
                    x: bbp.container.width() * 0.006,
                    y: bbp.container.width() * 0.006,
                    backgroundColor: bbp.white,
                    ease: bbp.optionBubbleEase,
                    delay: 0.2
                }, 0);
            } else {
                bbp.userObject.selectedFitnessLevel = 'None Selected';
                console.log(bbp.userObject.selectedFitnessLevel);
                bbp.bubbleClicked = false;
                bbp.heroCardSliderOptionBubbleOuter.eq(0).removeClass('darker-grey');
                bbp.heroCardSliderOptionBubbleMiddle.eq(0).removeClass('darker-grey');
                bbp.heroCardSliderOptionBubbleOuter.eq(1).removeClass('darker-grey');
                bbp.heroCardSliderOptionBubbleMiddle.eq(1).removeClass('darker-grey');
                bbp.heroCardSliderOptionBubbleOuter.eq(2).removeClass('darker-grey');
                bbp.heroCardSliderOptionBubbleMiddle.eq(2).removeClass('darker-grey');
                bbp.heroCardSliderOptionBubbleOuter.eq(3).removeClass('darker-grey');
                bbp.heroCardSliderOptionBubbleMiddle.eq(3).removeClass('darker-grey');
                bbp.heroCardSliderOptionBubbleOuter.eq(4).removeClass('darker-grey');
                bbp.heroCardSliderOptionBubbleMiddle.eq(4).removeClass('darker-grey');
                TweenMax.to(bbp.heroCardSliderOptionBubbleOuter.not($(this).find('.option-bubble-outer')), bbp.otherOptionBubbleDuration, {
                    backgroundColor: 'rgba(206, 205, 210, 1)',
                    ease: bbp.otherOptionBubbleEase
                }, 0);
                TweenMax.to(bbp.heroCardSliderOptionBubbleMiddle.not($(this).find('.option-bubble-middle')), bbp.otherOptionBubbleDuration, {
                    backgroundColor: 'rgba(206, 205, 210, 1)',
                    ease: bbp.otherOptionBubbleEase
                }, 0);
                TweenMax.to(bbp.heroCardSliderOptionBubbleInner.not($(this).find('.option-bubble-inner')), bbp.otherOptionBubbleDuration, {
                    backgroundColor: 'rgba(0, 0, 0, 1)',
                    ease: bbp.otherOptionBubbleEase,
                    delay: 0.2
                }, 0);
                TweenMax.from(bbp.heroCardSliderBarProgressBlueFade, bbp.blueFadeDuration, {
                    opacity: 0,
                    ease: Quad.easeIn
                }, 0);
                TweenMax.to(bbp.heroCardSliderBarProgress, bbp.sliderBarDuration, {
                    height: '0%',
                    ease: bbp.sliderBarEase
                }, 0);
                TweenMax.staggerTo(bbp.heroCardGraphBar1.find('.graph-bar-fill').find('.graph-bar-fill-inner'), bbp.graphBarFillDuration, {
                    height: '0%',
                    ease: bbp.graphBarFillEase
                }, 0.05);
                TweenMax.staggerTo(bbp.heroCardGraphBar2.find('.graph-bar-fill').find('.graph-bar-fill-inner'), bbp.graphBarFillDuration, {
                    height: '0%',
                    ease: bbp.graphBarFillEase
                }, 0.05);
                TweenMax.staggerTo(bbp.heroCardGraphBar3.find('.graph-bar-fill').find('.graph-bar-fill-inner'), bbp.graphBarFillDuration, {
                    height: '0%',
                    ease: bbp.graphBarFillEase
                }, 0.05);
                TweenMax.staggerTo(bbp.heroCardGraphBar4.find('.graph-bar-fill').find('.graph-bar-fill-inner'), bbp.graphBarFillDuration, {
                    height: '0%',
                    ease: bbp.graphBarFillEase
                }, 0.05);
                TweenMax.staggerTo(bbp.heroCardGraphBar5.find('.graph-bar-fill').find('.graph-bar-fill-inner'), bbp.graphBarFillDuration, {
                    height: '0%',
                    ease: bbp.graphBarFillEase
                }, 0.05);
                TweenMax.to(bbp.heroCardSliderBarProgress, bbp.sliderBarDuration, {
                    height: '0%',
                    ease: bbp.sliderBarEase
                }, 0);
                $(this).removeClass('bubble-selected');
                TweenMax.to($(this).prev('.hero-card-slider-option-title'), bbp.optionTitleDurationEnd, {
                    z: 0,
                    opacity: 0.5,
                    x: 0,
                    ease: bbp.optionTitleEaseEnd
                }, 0);
                TweenMax.to($(this).find('.option-bubble-outer'), bbp.optionBubbleDuration, {
                    backgroundColor: 'rgba(206, 205, 210, 1)',
                    ease: Linear.easeNone,
                }, 0);
                TweenMax.to($(this).find('.option-bubble-middle'), bbp.optionBubbleDuration, {
                    backgroundColor: 'rgba(206, 205, 210, 1)',
                    ease: Linear.easeNone,
                }, 0);
                TweenMax.to($(this).find('.option-bubble-inner'), bbp.optionBubbleDuration, {
                    backgroundColor: 'rgba(0, 0, 0, 1)',
                    ease: Linear.easeNone,
                    delay: 0.2
                }, 0);
            }
        });

        bbp.heroCardTypeInfoHoverContainer.on('mouseover', function () {
            if ((!bbp.typeClicked) && (!($(this).hasClass('type-selected')))) {
                bbp.typeHoverActive = true;
                TweenMax.to($(this).find('.hero-card-type-info-hover-button'), 0.5, {
                    opacity: 1,
                    ease:Expo.easeOut
                }, 0);
                TweenMax.to($(this).find('.hero-card-type-info-hover-icon'), 0.5, {
                    opacity: 1,
                    ease:Expo.easeOut
                }, 0);
//                TweenMax.to($(this).find('.hero-card-type-info-hover-icon'), 1, {
//                    z: -300,
//                    opacity: 1,
//                    ease: Expo.easeOut
//                }, 0);
            }
        });

        bbp.heroCardTypeInfoHoverContainer.on('mouseout', function () {
            if (!($(this).hasClass('type-selected'))) {
                TweenMax.to($(this).find('.hero-card-type-info-hover-button'), 1, {
                    opacity: 0,
                    ease: Expo.easeOut
                }, 0);
                TweenMax.set($(this).find('.hero-card-type-info-hover-icon'), {
                    opacity: 0
                });
            } else {
                bbp.typeClicked = false;
            }
        });

        bbp.heroCardTypeInfoHoverContainer.on('click', function () {
            if (!($(this).hasClass('type-selected'))) {
                switch (true) {
                case $(this).hasClass('type1'):
                    bbp.userObject.selectedWorkoutType = 'Cardio';
                    console.log(bbp.userObject.selectedWorkoutType);
                    break;
                case $(this).hasClass('type2'):
                    bbp.userObject.selectedWorkoutType = 'Muscle Building';
                    console.log(bbp.userObject.selectedWorkoutType);
                    break;
                case $(this).hasClass('type3'):
                    bbp.userObject.selectedWorkoutType = 'Slim/Tone';
                    console.log(bbp.userObject.selectedWorkoutType);
                    break;
                case $(this).hasClass('type4'):
                    bbp.userObject.selectedWorkoutType = 'Yoga';
                    console.log(bbp.userObject.selectedWorkoutType);
                    break;
                case $(this).hasClass('type5'):
                    bbp.userObject.selectedWorkoutType = 'Dance';
                    console.log(bbp.userObject.selectedWorkoutType);
                    break;
                case $(this).hasClass('type6'):
                    bbp.userObject.selectedWorkoutType = 'Low Impact';
                    console.log(bbp.userObject.selectedWorkoutType);
                    break;
                }
                bbp.heroCardTypeInfoHoverContainer.not($(this)).removeClass('type-selected');
                TweenMax.to(bbp.heroCardTypeInfoHoverButton.not($(this).find('.hero-card-type-info-hover-button')), 1, {
                    opacity: 0,
                    ease: Expo.easeOut
                }, 0);
                TweenMax.to(bbp.heroCardTypeInfoHoverIcon.not($(this).find('.hero-card-type-info-hover-icon')), 1, {
                    opacity: 0,
                    z: 0,
                    ease: Expo.easeOut
                }, 0);
                $(this).addClass('type-selected');
                TweenMax.set($(this).find('.hero-card-type-info-hover-button'), {
                    opacity: 1
                });
                TweenMax.set($(this).find('.hero-card-type-info-hover-icon'), {
                    opacity: 1,
                    z: 0
                });
            } else {
                bbp.userObject.selectedWorkoutType = 'None Selected';
                $(this).removeClass('type-selected');
                TweenMax.to($(this).find('.hero-card-type-info-hover-button'), 0.5, {
                    opacity: 0,
                    ease: Expo.easeOut
                }, 0);
                TweenMax.to($(this).find('.hero-card-type-info-hover-icon'), {
                    opacity: 0,
                    z: 0,
                    ease: Expo.easeOut
                }, 0);
            }
        });

        bbp.heroCardTimeControlLeft.on('mouseover', function () {
            TweenMax.to(bbp.timeControlLeftBackgroundHover, 0.25, {
                opacity: 0.2,
                ease: Quad.easeOut
            }, 0);
            TweenMax.to(bbp.timeControlLeftBackground, 0.25, {
                opacity: 1,
                ease: Quad.easeOut
            }, 0);
        });

        bbp.heroCardTimeControlLeft.on('mouseout', function () {
            TweenMax.to(bbp.timeControlLeftBackgroundHover, 0.25, {
                opacity: 0,
                ease: Quad.easeOut
            }, 0);
            TweenMax.to(bbp.timeControlLeftBackground, 0.25, {
                opacity: 0,
                ease: Quad.easeOut
            }, 0);
        });

        bbp.heroCardTimeControlLeft.on('click', function () {
            if (bbp.currentStrokeOffset !== 360) {
                bbp.timerInMotion = true;
                incrementTimerUp();
                TweenMax.from(bbp.timeControlLeftBackgroundHover, 0.25, {
                    opacity: 0.6,
                    ease: Quad.easeOut
                }, 0);
                TweenMax.to(bbp.timeControlLeftBackground, 0.25, {
                    opacity: 1,
                    ease: Quad.easeOut
                }, 0);
            }
        });

        bbp.heroCardTimeControlRight.on('mouseover', function () {
            TweenMax.to(bbp.timeControlRightBackgroundHover, 0.25, {
                opacity: 0.2,
                ease: Quad.easeOut
            }, 0);
            TweenMax.to(bbp.timeControlRightBackground, 0.25, {
                opacity: 1,
                ease: Quad.easeOut
            }, 0);
        });

        bbp.heroCardTimeControlRight.on('mouseout', function () {
            TweenMax.to(bbp.timeControlRightBackgroundHover, 0.25, {
                opacity: 0,
                ease: Quad.easeOut
            }, 0);
            TweenMax.to(bbp.timeControlRightBackground, 0.25, {
                opacity: 0,
                ease: Quad.easeOut
            }, 0);
        });

        bbp.heroCardTimeControlRight.on('click', function () {
            if (bbp.currentStrokeOffset !== 0) {
                bbp.timerInMotion = true;
                incrementTimerDown();
                TweenMax.from(bbp.timeControlRightBackgroundHover, 0.25, {
                    opacity: 0.6,
                    ease: Quad.easeOut
                }, 0);
                TweenMax.to(bbp.timeControlRightBackground, 0.25, {
                    opacity: 1,
                    ease: Quad.easeOut
                }, 0);
            }
        });

        bbp.tipInterval = setInterval(function initial() {
            TweenMax.to(bbp.heroCardTipBubbleContainer, 1, {
                y: '-' + bbp.hero.height() * 0.02,
                ease: Quad.easeInOut,
                onComplete: function () {
                    TweenMax.to(bbp.heroCardTipBubbleContainer, 1, {
                        y: 0,
                        ease: Quad.easeInOut
                    });
                }
            });

            return initial;
        }(), 2000);

        function incrementTimerUp() {
            bbp.currentStrokeOffset += 60;
            switch (true) {
            case bbp.currentStrokeOffset === 0:
                bbp.timerDigits.html('90');
                bbp.userObject.workoutTime = '90 Minutes';
                console.log(bbp.userObject.workoutTime);
                break;
            case bbp.currentStrokeOffset === 60:
                bbp.timerDigits.html('75');
                bbp.userObject.workoutTime = '75 Minutes';
                console.log(bbp.userObject.workoutTime);
                break;
            case bbp.currentStrokeOffset === 120:
                bbp.timerDigits.html('60');
                bbp.userObject.workoutTime = '60 Minutes';
                console.log(bbp.userObject.workoutTime);
                break;
            case bbp.currentStrokeOffset === 180:
                bbp.timerDigits.html('45');
                bbp.userObject.workoutTime = '45 Minutes';
                console.log(bbp.userObject.workoutTime);
                break;
            case bbp.currentStrokeOffset === 240:
                bbp.timerDigits.html('30');
                bbp.userObject.workoutTime = '30 Minutes';
                console.log(bbp.userObject.workoutTime);
                break;
            case bbp.currentStrokeOffset === 300:
                bbp.timerDigits.html('15');
                bbp.userObject.workoutTime = '15 Minutes';
                console.log(bbp.userObject.workoutTime);
                break;
            case bbp.currentStrokeOffset === 360:
                bbp.timerDigits.html('0');
                bbp.userObject.workoutTime = '0 Minutes';
                console.log(bbp.userObject.workoutTime);
                break;
            }
            TweenMax.to(bbp.blueHalo, 1, {
                attr: {
                    'stroke-dashoffset': bbp.currentStrokeOffset
                },
                ease: Expo.easeOut,
                onComplete: function () {
                    bbp.timerInMotion = false;
                }
            });
            console.log('Current stroke offset is ' + bbp.currentStrokeOffset);
        }

        function incrementTimerDown() {
            bbp.currentStrokeOffset -= 60;
            switch (true) {
            case bbp.currentStrokeOffset === 0:
                bbp.timerDigits.html('90');
                bbp.userObject.workoutTime = '90 Minutes';
                console.log(bbp.userObject.workoutTime);
                break;
            case bbp.currentStrokeOffset === 60:
                bbp.timerDigits.html('75');
                bbp.userObject.workoutTime = '75 Minutes';
                console.log(bbp.userObject.workoutTime);
                break;
            case bbp.currentStrokeOffset === 120:
                bbp.timerDigits.html('60');
                bbp.userObject.workoutTime = '60 Minutes';
                console.log(bbp.userObject.workoutTime);
                break;
            case bbp.currentStrokeOffset === 180:
                bbp.timerDigits.html('45');
                bbp.userObject.workoutTime = '45 Minutes';
                console.log(bbp.userObject.workoutTime);
                break;
            case bbp.currentStrokeOffset === 240:
                bbp.timerDigits.html('30');
                bbp.userObject.workoutTime = '30 Minutes';
                console.log(bbp.userObject.workoutTime);
                break;
            case bbp.currentStrokeOffset === 300:
                bbp.timerDigits.html('15');
                bbp.userObject.workoutTime = '15 Minutes';
                console.log(bbp.userObject.workoutTime);
                break;
            case bbp.currentStrokeOffset === 360:
                bbp.timerDigits.html('0');
                bbp.userObject.workoutTime = '0 Minutes';
                console.log(bbp.userObject.workoutTime);
                break;
            }
            TweenMax.to(bbp.blueHalo, 1, {
                attr: {
                    'stroke-dashoffset': bbp.currentStrokeOffset
                },
                ease: Expo.easeOut,
                onComplete: function () {
                    bbp.timerInMotion = false;
                }
            });
            console.log('Current stroke offset is ' + bbp.currentStrokeOffset);
        }

        window.timer = window.setInterval(function () {
            bbp.circle.setAttribute("stroke-dasharray", bbp.angle + ", 20000");
            bbp.myTimer.innerHTML = parseInt(bbp.angle / 360 * 100) + '%';
            bbp.resultCircle.setAttribute("stroke-dasharray", bbp.angle + ", 20000");
            bbp.myResultsTimer.innerHTML = parseInt(bbp.angle / 360 * 100) + '%';

            if (bbp.angle >= 360) {
                window.clearInterval(window.timer);
            }
            bbp.angle += bbp.angle_increment;
        }.bind(this), bbp.interval);

        TweenMax.set(bbp.blueHalo, {
            attr: {
                'stroke-dashoffset': bbp.currentStrokeOffset
            }
        });

        TweenMax.set(bbp.goldHalo, {
            attr: {
                'stroke-dashoffset': bbp.currentResultsStrokeOffset
            }
        });

        bbp.logo.on('click', function () {
            location.reload();
        });

        bbp.passwordInput.on('keyup', function() {
            if (bbp.passwordInput.val() === 'Beachbody101') {
                TweenMax.to(bbp.passwordInput, 0.5, {
//                   border:'0.01vw solid green'
                    boxShadow:'inset ' + bbp.passwordInputBoxShadowX + ' ' + bbp.passwordInputBoxShadowY + ' ' + bbp.passwordInputBoxShadowSize + ' ' + bbp.passwordInputBoxShadowSize2 + ' rgba(' + bbp.bbGreenRGB + ',0.5)'
                }, 0);
            }
            
            if (bbp.passwordInput.val() !== 'Beachbody101') {
                TweenMax.to(bbp.passwordInput, 0.5, {
//                   border:'0.01vw solid red'
                    boxShadow:'inset ' + bbp.passwordInputBoxShadowX + ' ' + bbp.passwordInputBoxShadowY + ' ' + bbp.passwordInputBoxShadowSize + ' ' + bbp.passwordInputBoxShadowSize2 + ' rgba(' + bbp.incorrectRedRGB + ',0.5)'
                }, 0);
            }
            
            if (bbp.passwordInput.val() === '') {
                TweenMax.to(bbp.passwordInput, 0.5, {
//                   border:'0.01vw solid red'
                    boxShadow:'inset ' + bbp.passwordInputBoxShadowX + ' ' + bbp.passwordInputBoxShadowY + ' ' + bbp.passwordInputBoxShadowSize + ' ' + bbp.passwordInputBoxShadowSize2 + ' rgba(' + bbp.whiteRGB + ',0)'
                }, 0);
            }
        });
        
        bbp.passwordInput.keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        if (bbp.passwordInput.val() === 'Beachbody101') {
            bbp.    passwordOverlay.hide();
        }
    }
});

    });
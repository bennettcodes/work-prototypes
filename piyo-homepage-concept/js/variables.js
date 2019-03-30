var
	loading = $('.loading'),
	container = $('#container'),

	fps = 60,
	now,
	then = Date.now(),
	interval = 1000 / fps,
	delta,

	parallaxSpeed = 0.5,

	hpFpo = $('#hp-fpo'),
	hpFpoHeight,
    
    getAllAccessButtonFixed = $('.get-all-access-button-fixed'),
    getAllAccessButtonFixedText = $('.get-all-access-button-fixed-text'),
    
    header = $('#header'),
    headerHeight = header.outerHeight(),
    headerHeightShrinkRate = 0.65,
    headerHeightShrinkAmount = headerHeight * headerHeightShrinkRate,

	windowTopOld = window.pageYOffset,
	windowTopNew = window.pageYOffset,
	bottomOfPage = windowTopNew + window.innerHeight,

	logo = $('#logo'),
    logoScale = 1,
    logoScaleShrinkRate = headerHeightShrinkRate,
    logoScaleShrinkAmount = logoScale * logoScaleShrinkRate,

	hero = $('.hero'),
	heroContent = $('.hero-content'),

	percentage,
	percentageOfBar,

	heroBg = $('.hero-bg'),
	heroBgImg = $('.hero-bg-img'),
	heroBgImgY = 0,

	showHpFpo = 1,

	pointsRanOnce = 'what',
	squaresRanOnce = 'what',
	circlesRanOnce = 'what',
	programToolsRanOnce = 'what',
	iconRanOnce = 'what',

	defineSectionPoints = $('#define-section-points'),
	defineSectionPoint = $('.define-section-point'),
	defineSectionPointIconSVG = $('#define-section-points .section-point-icon-svg'),
	defineSectionPointLabel = $('#define-section-points .section-point-label'),

	defineSectionPointYStart = 50,
	defineSectionPointOpacityStart = 0.01,

	twelveWorkoutsTilesContainer = $('#twelve-workouts-tiles-container'),

	tileContainerPositions = [
		0,
		window.innerWidth * -1,
		window.innerWidth * -2
	],

	tileMin = 0,
	tileIndex = 0,
	planIndex = 0,
	bannerIndex = 0,
    
    headerShrunk = false,
    fixedButtonVisible = false,

	scrollBarWidth,

	section = $('.section'),
	sectionMore = $('.section-more'),
	sectionSquares = $('.section-squares'),
	sectionSquaresHeader = $('.section-squares-header'),
	sectionSquare = $('.section-square'),

	sectionSquareBg = $('.section-square-bg'),
	sectionSquareBgFade = $('.section-square-bg-fade'),

	sectionSquareTrainer = $('.section-square-trainer'),
	sectionSquareTrainerImg = $('.section-square-trainer-img'),

	sectionSquareHeaders = $('.section-square-headers'),
	sectionSquareSubheader = $('.section-square-subheader'),
	sectionSquareHeader = $('.section-square-header'),

	whyPiyoWorksSquares = $('#why-piyo-works-squares'),

	staggerSquares = $('.stagger-squares'),
    
    easeConfigStart = 0,
    
	staggerSquaresTrainer = staggerSquares.find('.section-square-trainer'),
	staggerSquaresTrainerImg = staggerSquares.find('.section-square-trainer-img'),
	staggerSquaresTl = new TimelineMax(),
	staggerCirclesTl = new TimelineMax(),
	staggerCirclesBgTl = new TimelineMax(),

	defineTl = new TimelineMax(),
	programToolsTl = new TimelineMax(),
	coachTl = new TimelineMax(),

	tileTl = new TimelineMax(),
    
    mainRate = 0.25,
    staggerSquaresRate = mainRate * 2,
    staggerCirclesRate = mainRate * 2,
    staggerCirclesBgRate = mainRate * 2.5,
    
    defineRate = mainRate * 3,
    programToolsRate = mainRate * 3,
    coachRate = mainRate * 3,

	sectionGallery = $('.section-gallery'),
	sectionGalleryHeader = $('.section-gallery-header'),
	sectionGalleryTilesContainerOuter = $('.section-gallery-tiles-container-outer'),
	sectionGalleryTilesContainer = $('.section-gallery-tiles-container'),
	sectionGalleryTiles = $('.section-gallery-tiles'),
	sectionGalleryTilesInner = $('.section-gallery-tiles-inner'),
	sectionGalleryTilesArrow = $('.section-gallery-tiles-arrow'),
	sectionGalleryTilesLeftArrow = $('.section-gallery-tiles-left-arrow'),
	sectionGalleryTilesRightArrow = $('.section-gallery-tiles-right-arrow'),

	sectionGalleryTilesNav = $('.section-gallery-tiles-nav'),
	sectionGalleryTilesNavInner = $('.section-gallery-tiles-nav-inner'),
	sectionGalleryTilesNavTracker = $('.section-gallery-tiles-nav-tracker'),

	sectionGalleryTile = $('.section-gallery-tile'),
	sectionGalleryTileThumb = $('.section-gallery-tile-thumb'),
	sectionGalleryTileThumbImg = $('.section-gallery-tile-thumb-img'),
	sectionGalleryTileThumbOverlay = $('.section-gallery-tile-thumb-overlay'),
	sectionGalleryTileThumbOverlayBg = $('.section-gallery-tile-thumb-overlay-bg'),
	sectionGalleryTileThumbOverlaySymbol = $('.section-gallery-tile-thumb-overlay-symbol'),
	
	sectionCheckmarks = $('.section-checkmarks'),
	sectionCheckmarksInner = $('.section-checkmarks-inner'),
	sectionCheckmark = $('.section-checkmark'),
	sectionCheckmarkIcon = $('.section-checkmark-icon'),
	sectionCheckmarkIconSVG = $('.section-checkmark-icon-svg'),
	sectionCheckmarkText = $('.section-checkmark-text'),
	sectionCheckmarkTextInner = $('.section-checkmark-text-inner'),
	sectionCheckmarkTextDescription = $('.section-checkmark-text-description'),
    
    defineYourselfSection = $('#define-yourself-section'),
    whyPiyoWorksSection = $('#why-piyo-works-section'),
    programToolsSection = $('#program-tools-section'),
    bodCommunitySection = $('#bod-community-section'),
    personalCoachSection = $('#personal-coach-section'),
    realPiyoResultsSection = $('#real-piyo-results-section'),
    bodFeaturesSection = $('#bod-features-section'),
    piyoFaqsSection = $('#piyo-faqs-section'),
    similarProgramsSection = $('#similar-programs-section'),

	programToolsSectionPoints = $('#program-tools-section-points'),
	bodCommunitySectionCircles = $('#bod-community-section .section-circles'),
	bodCommunitySectionCircles = $('#bod-community-section .section-circles'),
	bodCommunitySectionCirclesBg = $('#bod-community-section .section-circles-bg'),
	programToolsSectionPoint = programToolsSectionPoints.find('.section-point'),
	programToolsSectionPointIconSVG = programToolsSectionPoints.find('.section-point-icon-svg'),
	programToolsSectionPointLabel = programToolsSectionPoints.find('.section-point-label'),

	defineYourselfSectionOffsetTop,
	defineSectionPointsOffsetTop,
	whyPiyoWorksOffsetTop,
	programToolsSectionOffsetTop,
	programToolsSectionPointsOffsetTop,
	whyPiyoWorksSquaresOffsetTop,
	sectionCirclesOffsetTop,
	personalCoachSectionOffsetTop,
	realPiyoResultsSectionOffsetTop,
	piyoFaqsSectionOffsetTop,
	similarProgramsSection,
    
    highZIndex = 0,

	programToolsSectionPointYStart = 50,
	programToolsSectionPointOpacityStart = 0.01,
    
    sectionCircles = $('.section-circles'),
    sectionCircle = $('.section-circle'),
    sectionCirclesBg = $('.section-circles-bg'),
    sectionCirclesHeight = sectionCircles.outerHeight(),
    sectionCirclesBgHeight = sectionCirclesBg.outerHeight(),
    sectionCirclesInner = $('.section-circles-inner'),
    sectionCirclesBgInner = $('.section-circles-bg-inner'),
    sectionBgCircle = $('.section-bg-circle'),
    sectionBgCircleImg = $('.section-bg-circle-img'),
    
    sectionContentIcon = $('.section-content-icon'),
    sectionContentIconCircle = $('.section-content-icon-circle'),
    sectionContentIconCircleInner = $('.section-content-icon-circle-inner'),
    sectionContentIconCircleShield = $('.section-content-icon-circle-shield'),
    
    sectionVideoSlidersContainer = $('.section-video-sliders-container'),
    sectionVideoSlidersInner = $('.section-video-sliders-inner'),
    sectionVideoSliders = $('.section-video-sliders'),
    sectionVideoSlider = $('.section-video-slider'),
    sectionVideoSliderTile = $('.section-video-slider-tile'),
    sectionVideoSliderTileThumb = $('.section-video-slider-tile-thumb'),
    sectionVideoSliderTileThumbIcon = $('.section-video-slider-tile-thumb-icon'),
    sectionVideoSliderTileLabel = $('.section-video-slider-tile-label'),
    sectionVideoSliderTileLabelHeader = $('.section-video-slider-tile-label-header'),
    sectionVideoSliderTileLabelDescription = $('.section-video-slider-tile-label-description'),
    
    sectionVideoSliderNav = $('.section-video-slider-nav'),
    sectionVideoSliderNavItems = $('.section-video-slider-nav-items'),
    sectionVideoSliderNavItem = $('.section-video-slider-nav-item'),
    sectionVideoSliderNavItemBg = $('.section-video-slider-nav-item-bg'),

    sectionFaqs = $('.section-faqs'),
    sectionFaq = $('.section-faq'),
    sectionFaqText = $('.section-faq-text'),
    sectionFaqIcon = $('.section-faq-icon'),
    sectionFaqIconRing = $('.section-faq-icon-ring'),
    sectionFaqIconPlus = $('.section-faq-icon-plus'),
    
    sectionProgramBanners = $('.section-program-banners'),
    sectionProgramBanner = $('.section-program-banner'),
    
    sectionPlans = $('.section-plans'),
    sectionPlan = $('.section-plan'),
    
    staggerCirclesProps = {
        duration: 0.3,
        opacity: {
            start: 0,
            end: 1
        },
        x: {
            start: 0,
            end: 0
        },
        y: {
            start: 0,
            end: 0
        },
        scale: {
            start: 0.01,
            end: 1
        },
        ease: Expo.easeOut
    },
    
    staggerCirclesBgProps = {
        duration: 0.5,
        opacity: {
            start: 0,
            end: 1
        },
        x: {
            start: 0,
            end: 0
        },
        y: {
            start: 0,
            end: 0
        },
        scale: {
            start: 1,
            end: 1
        },
        ease: Expo.easeOut
    },
    
    sectionTextMoreButton = $('.section-text-more-button'),
    sectionBodcomTextMoreButton = $('.section-bodcom-text-more-button'),

	twelveWorkoutsTilesContainer = $('#twelve-workouts-tiles-container'),

	tileMax = sectionGalleryTiles.length - 1,

	heroPlayIcon = $('.hero-play-icon'),
	heroText = $('.hero-text'),
	heroDescription = $('.hero-description'),
	heroCta = $('.hero-cta'),
	heroButton = $('.hero-button'),
    
    initialScrollPosition = sectionMore.offset().top,

	bodyHTML = $('body, html')

var mPro = {
    init: function () {
        $(window).resize(function initial() {
            mPro.cacheDom();
            mPro.style();
            return initial;
        }());
    },
    cacheDom: function () {

        this.images = $('img');

        this.mobileAlert = $('#mobile-alert');

        //OUTER CONTAINER
        this.outerContainer = $('#outer-container');

        //BACK ICON
        this.backIcon = $('.back-icon');

        //GEAR MENU CONTAINER
        this.gearMenuContainer = $('#gear-menu-container');
        this.gearMenu = $('.gear-menu');
        this.gearMenuMain = $('#gear-menu-main');
        this.gearMenuSecondary = $('#gear-menu-secondary');

        this.logoutContainer = $('#logout-container');

        this.arrowIconWhite = $('#arrow-icon-white');
        this.arrowTapRegion = $('#arrow-tap-region');
        this.levelBackTapRegion = $('#level-back-tap-region');

        //CONTAINER
        this.container = $('#container');
        this.containerWidth = this.container.width();
        this.containerHeight = this.container.height();

        //FILTER
        this.filterContainer = $('#filter-container');
        this.filterHeader = $('#filter-header');

        //FPO CONTAINER
        this.fpoContainer = $('#fpo-container');
        this.fpo = $('.fpo');

        this.workoutsFpo = $('#workouts-fpo');
        this.friendsFpo = $('#friends-fpo');
        this.profileFpo = $('#profile-fpo');
        this.moreFpo = $('#more-fpo');

        this.closeMenuRegion = $('#close-menu-region');

        this.menuActive = false;
        this.secondaryActive = false;

        //HEADER
        this.header = $('#header');
        this.headerWidth = this.header.width();
        this.headerHeight = this.containerWidth * 0.16;
        this.headerText = $('#header-text');

        this.secondaryDuration = 0.5;
        this.secondaryEase = Quad.easeInOut;

        //DIARY ENTRY SECTION CONTAINER
        this.diaryEntrySectionContainer = $('#diary-entry-section-container');
        this.diaryEntrySectionContainerBackground = $('#diary-entry-section-container-bg');
        this.diaryEntrySectionContainerCloseTapRegion = $('.diary-entry-section-container-close-tap-region');
        this.diaryEntrySection = $('.diary-entry-section');
        this.breakfastSection = $('#breakfast-section');
        this.lunchSection = $('#lunch-section');
        this.dinnerSection = $('#dinner-section');
        this.snackSection = $('#snack-section');
        this.diaryEntrySectionDuration = 0.5;
        this.diaryEntrySectionEase = Quad.easeOut;

        this.outerSection = $('.outer-section');

        //DIARY ENTRY ITEM CONTAINER
        this.diaryEntryItemContainer = $('#diary-entry-item-container');
        this.diaryEntryItem = $('.diary-entry-item');
        this.diaryEntryItemFpo = $('.diary-entry-item-fpo');
        this.diaryEntryItemContainerCloseTapRegion = $('.diary-entry-item-container-close-tap-region');
        this.diaryEntryItemAddTapRegion = $('.diary-entry-item-add-tap-region');
        this.diaryEntryItemAddButton = $('.diary-entry-item-add-button');
        this.diaryEntryItemAddButtonBackgroundActive = $('.diary-entry-item-add-button-bg-active');
        this.diaryEntryItemAddButtonBackgroundInactive = $('.diary-entry-item-add-button-bg-inactive');
        this.diaryEntryItemAddButtonPlus = $('.diary-entry-item-add-button-plus');

        this.chickenSaladDetails = $('#chicken-salad-details');
        this.salmonDetails = $('#salmon-details');
        this.meatballsDetails = $('#meatballs-details');

        this.chickenSaladFpo = $('#chicken-salad-fpo');
        this.salmonFpo = $('#salmon-fpo');
        this.meatballsFpo = $('#meatballs-fpo');

        this.tileClicked = false;

        this.entrySectionTabs = $('.entry-section-tabs');
        this.entrySectionTab = $('.entry-section-tab');
        this.eatingInTab = $('.eating-in-tab');
        this.eatingOutTab = $('.eating-out-tab');
        this.eatingInSection = $('.eating-in-section');
        this.eatingOutSection = $('.eating-out-section');
        this.eatingInActive = true;
        this.eatingOutActive = false;

        this.entrySectionTiles = $('.entry-section-tiles');
        this.entrySectionTile = $('.entry-section-tile');

        this.entrySectionSearchIcon = $('.entry-section-search-icon');
        this.entrySectionSearchInput = $('.entry-section-search-input');
        this.entrySectionSearchInputActual = $('.entry-section-search-input-actual');

        this.entrySectionListSearchIcon = $('.entry-section-list-search-icon');
        this.entrySectionListSearchInput = $('.entry-section-list-search-input');
        this.entrySectionListSearchInputActual = $('.entry-section-list-search-input-actual');

        this.entrySectionNav = $('.entry-section-nav');
        this.entrySectionNavItem = $('.entry-section-nav-item');
        this.entrySectionNavItemFavorites = $('.entry-section-nav-item-favorites');
        this.entrySectionNavItemMeals = $('.entry-section-nav-item-meals');

        this.favoritesSection = $('.favorites-section');
        this.mealsSection = $('.meals-section');

        //VERSION NAVIGATION
        this.versionNav = $('#version-nav');
        this.versionNavItem = $('.version-nav-item');
        this.versionNavItemTitle = $('.version-nav-item-title');
        this.versionNavItemTitleAlt = $('.version-nav-item-title-alt');
        this.versionNavItemBackgroundAlt = $('.version-nav-item-bg-alt');

        this.chickenSaladSelected = false;
        this.salmonSelected = false;
        this.meatballsSelected = false;

        this.totalCalories = 0;
        this.totalProtein = 0;
        this.totalProteinCalories = 0;
        this.totalFat = 0;
        this.totalFatCalories = 0;
        this.totalCarbohydrates = 0;
        this.totalCarbohydratesCalories = 0;
        this.totalBreakfastCalories = 0;
        this.totalLunchCalories = 0;
        this.totalDinnerCalories = 0;
        this.totalSnackCalories = 0;
        this.totalProteinPercentage = 0;
        this.totalFatPercentage = 0;
        this.totalCarbohydratesPercentage = 0;

        this.calorieBreakdownBarProteinSection = $('#calorie-breakdown-bar-protein-section');
        this.calorieBreakdownBarFatSection = $('#calorie-breakdown-bar-fat-section');
        this.calorieBreakdownBarCarbohydratesSection = $('#calorie-breakdown-bar-carbohydrates-section');
        this.proteinPercentageText = $('#calorie-breakdown-bar-protein-section .calorie-breakdown-bar-section-percentage-count');
        this.fatPercentageText = $('#calorie-breakdown-bar-fat-section .calorie-breakdown-bar-section-percentage-count');
        this.carbohydratesPercentageText = $('#calorie-breakdown-bar-carbohydrates-section .calorie-breakdown-bar-section-percentage-count');

        this.proteinCount = $('#protein-count');
        this.fatCount = $('#fat-count');
        this.carbohydratesCount = $('#carbohydrates-count');

        this.foodHad = false;

        this.breakfastActive = false;
        this.lunchActive = false;
        this.dinnerActive = false;
        this.snackActive = false;

        //NAVIGATION
        this.nav = $('#nav');
        this.navItem = $('.nav-item');
        this.navItemIcon = $('.nav-item-icon');
        this.navItemIconAlt = $('.nav-item-icon-alt');
        this.navItemTitle = $('.nav-item-title');
        this.navItemTitleAlt = $('.nav-item-title-alt');
        this.navItemBackgroundAlt = $('.nav-item-bg-alt');

        this.workoutsNavItem = $('#workouts-nav-item');
        this.friendsNavItem = $('#friends-nav-item');
        this.profileNavItem = $('#profile-nav-item');
        this.moreNavItem = $('#more-nav-item');

        this.navActive = $('.nav-active');
        this.navInactive = $('.nav-inactive');

        //GEAR ICON
        this.gearIcon = $('.gear-icon');
        this.gearTapRegion = $('#gear-tap-region');

        //LOGO
        this.logo = $('#logo');

        //FILTER ICON
        this.filterIcon = $('.filter-icon');
        this.filterTapRegion = $('#filter-tap-region');

        this.blackRGB = '0,0,0';
        this.whiteRGB = '255,255,255';
        this.bbBlueRGB = '4,117,222';
        this.bbBlueEntryRGB = '8,77,146';
        this.bbBlueDarkRGB = '10,81,153';
        this.bbBlueSignInRGB = '62,179,225';
        this.bbBlueSignInDarkRGB = '49,137,172';
        this.addButtonTextRGB = '83,83,83';
        this.inactiveTabRGB = '221,222,224';

        this.whiteColor = 'rgba(255,255,255,1)';
        this.bbBlueColor = 'rgba(14,117,222,1)';

        this.black = '#000000';
        this.white = '#ffffff';

        //SECTION CONTAINER
        this.sectionContainer = $('#section-container');
        this.section = $('.section');

        //TILE CONTAINER
        this.tileContainer = $('.tile-container');
        this.tile = $('.tile');
        this.tileBackground = $('.tile-bg');

        this.tileRowsContainer = $('.tile-rows-container');

        this.tileRowHeaderTapRegion = $('.tile-row-header-tap-region');

        this.popularProgramsHeaderTapRegion = $('.popular-programs-header-tap-region');
        this.premiumContentHeaderTapRegion = $('.premium-content-header-tap-region');

        this.listViewHeaderTapRegion = $('.list-view-header-tap-region');

        //WORKOUTS LIST VIEW CONTAINER
        this.workoutsListViewContainer = $('#workouts-list-view-container');
        this.workoutsListView = $('.workouts-list-view');
        this.popularProgramsListView = $('#popular-programs-list-view');
        this.premiumContentListView = $('#premium-content-list-view');

        this.programDetailsTapRegion = $('.program-details-tap-region');

        //WORKOUTS SECTION
        this.workoutsSection = $('#workouts-section');
        this.workoutsSection1 = $('#workouts-section1');
        this.workoutsSection2 = $('#workouts-section2');
        this.workoutsSection3 = $('#workouts-section3');
        this.workoutsSectionSliderContainer = $('.workouts-section-slider-container');
        this.workoutsSectionSlider = $('.workouts-section-slider');
        this.workoutsSectionSlide = $('.workouts-section-slide');

        this.workoutsSectionSignInContainer = $('.workouts-section-sign-in-container');
        this.workoutsSectionSignInButton = $('.workouts-section-sign-in-button');

        //WORKOUTS SECTION TILE ROWS CONTAINER
        this.workoutsSectionTileRowsContainer = $('#workouts-section-tile-rows-container');

        //FRIENDS SECTION
        this.friendsSection = $('#friends-section');
        this.friendsSectionTabs = $('#friends-section-tabs');
        this.friendsSectionTab = $('.friends-section-tab');

        this.friendsSectionFindIcon = $('#friends-section-find-icon');
        this.friendsSectionFindInput = $('#friends-section-find-input');

        this.friendsSectionListsContainer = $('#friends-section-lists-container');
        this.friendsSectionFeedContainer = $('#friends-section-feed-container');

        //PROFILE SECTION
        this.profileSection = $('#profile-section');
        this.profileSectionTabs = $('#profile-section-tabs');
        this.profileSectionTab = $('.profile-section-tab');

        this.abRipperBEffort = $('#ab-ripper-b-effort');
        this.abRipperBMinutes = $('#ab-ripper-b-minutes');
        this.abRipperBCalories = $('#ab-ripper-b-calories');

        this.sweatBMinutes = $('#sweat-b-minutes');
        this.sweatBCalories = $('#sweat-b-calories');
        this.sweatBHeartRate = $('#sweat-b-heart-rate');

        this.profileSectionRecentActivityRowContainer = $('#profile-section-recent-activity-row-container');
        this.profileSectionBodyBoardContainer = $('#profile-section-body-board-container');
        this.bodyBoardEntry = $('.body-board-entry');
        this.bodyBoardInfoContainer = $('.body-board-info-container');
        this.bodyBoardInfoContainerBackground = $('.body-board-info-container-bg');
        this.bodyBoardInfoQuotationMark = $('.body-board-info-quotation-mark');
        this.bodyBoardInfoQuotationText = $('.body-board-info-quotation-text');

        //NUTRITION SECTION
        this.nutritionSection = $('#nutrition-section');
        this.calorieBreakdownContainer = $('#calorie-breakdown-container');
        this.calorieBreakdownRowContainer = $('#calorie-breakdown-row-container');
        this.calorieBreakdownBar = $('#calorie-breakdown-bar');
        this.calorieBreakdownCount = $('.calorie-breakdown-count');

        //OFFLINE SECTION
        this.offlineSection = $('#offline-section');
        this.offlineSectionSavesContainer = $('#offline-section-saves-container');
        this.offlineSectionSave = $('.offline-section-save');
        this.offlineSectionSaveCount = $('.offline-section-save').length;
        this.offlineSectionSaveTapRegion = $('.offline-section-save-tap-region');
        this.offlineSectionSaveDeleteContainer = $('.offline-section-save-delete-container');
        this.offlineSectionSaveDeleteBackground = $('.offline-section-save-delete-bg');

        this.offlineSaveTileDuration = 0.75;
        this.offlineSaveTileEase = Expo.easeOut;

        this.lightSaveTile = $('.light-save-tile');
        this.darkSaveTile = $('.dark-save-tile');
        this.offlineSectionNoSavesContainer = $('#offline-section-no-saves-container');
        this.calorieBreakdownContainer = $('#calorie-breakdown-container');
        this.calorieBreakdownRowContainer = $('#calorie-breakdown-row-container');
        this.calorieBreakdownBar = $('#calorie-breakdown-bar');
        this.calorieBreakdownCount = $('.calorie-breakdown-count');

        this.offlineSectionHeaderSavedText = $('#offline-section-header-saved-text');
        this.savedCurrentCount = $('#saved-current-count');
        this.offlineSectionHeaderTapRegion = $('#offline-section-header-tap-region');

        this.offlineSavesEmpty = false;
        this.barAppeared = false;

        this.nutritionSectionTabs = $('#nutrition-section-tabs');
        this.nutritionSectionTab = $('.nutrition-section-tab');
        this.standardTab = $('.standard-tab');
        this.containersTab = $('.containers-tab');
        this.standard = $('.standard');
        this.containers = $('.containers');
        this.standardActive = true;
        this.containersActive = false;

        //DIARY ENTRY
        this.diaryEntryContainer = $('#diary-entry-container');
        this.diaryEntry = $('.diary-entry');
        this.breakfastEntry = $('#breakfast-entry');
        this.lunchEntry = $('#lunch-entry');
        this.dinnerEntry = $('#dinner-entry');
        this.snackEntry = $('#snack-entry');
        this.breakfastEntryCalories = $('#breakfast-entry .diary-entry-calories');
        this.lunchEntryCalories = $('#lunch-entry .diary-entry-calories');
        this.dinnerEntryCalories = $('#dinner-entry .diary-entry-calories');
        this.snackEntryCalories = $('#snack-entry .diary-entry-calories');

        //MORE SECTION
        this.settingsSection = $('#settings-section');
        this.settingsSectionRowSwitchContainer = $('.settings-section-row-switch-container');
        this.settingsSectionRowSwitchCircle = $('.settings-section-row-switch-circle');
        this.settingsSectionRowSwitchBackground = $('.settings-section-row-switch-bg');

        this.versionActive = true;
        this.programActive = false;
        this.tmhcUnlocked = false;
        this.tdfUnlocked = false;
        this.recentActivityTabActive = true;
        this.bodyBoardTabActive = false;
        this.privacyTabActive = false;
        this.friendsTabActive = true;
        this.feedTabActive = false;
        this.groupsTabActive = false;

        //PROGRAM CONTAINER
        this.programContainer = $('#program-container');
        this.program = $('.program');

        this.programChapter = $('.program-chapter');
        this.programChapterExpanded = $('.program-chapter-expanded');
        this.programChapterItem = $('.program-chapter-item');

        this.programChapterHeaderArrow = $('.program-chapter-header-arrow');

        this.twentyTwoMinuteHardCorpsTile = $('.twenty-two-minute-hard-corps-tile');
        this.twentyTwoMinuteHardCorpsProgram = $('#twenty-two-minute-hard-corps-program');
        this.twentyTwoMinuteHardCorpsPremium = $('#twenty-two-minute-hard-corps-premium');
        this.twentyTwoMinuteHardCorpsLevels = $('.tmhc-levels');
        this.twentyTwoMinuteHardCorpsConfirm = $('.tmhc-confirm');

        this.twentyOneDayFixTile = $('.twenty-one-day-fix-tile');
        this.twentyOneDayFixProgram = $('#twenty-one-day-fix-program');
        this.twentyOneDayFixPremium = $('#twenty-one-day-fix-premium');
        this.twentyOneDayFixLevels = $('.tdf-levels');
        this.twentyOneDayFixConfirm = $('.tdf-confirm');

        this.programPremiumDescriptionUnlockButton = $('.program-premium-description-unlock-button');

        //PROGRAM MATERIALS
        this.programMaterial = $('.program-material');
        this.programMaterialIcon = $('.program-material-icon');

        //LEVEL CONTAINER
        this.levelsContainer = $('#levels-container');
        this.levels = $('.levels');
        this.level = $('.level');

        this.addButton = $('.add-button');

        //CONFIRM CONTAINER
        this.confirmContainer = $('#confirm-container');
        this.confirm = $('.confirm');

        this.confirmButton = $('.confirm-button');

        this.navItemBorderRight = $('.nav-item-border-right');

        this.headerBackgroundColorOpacity = 1;
        this.navBackgroundColorOpacity = 1;
        this.navItemBackgroundColorOpacity = 1;
        this.navItemBorderOpacity = 1;
        this.navItemTitleColorOpacity = 1;
        this.navItemBackgroundColorAltOpacity = 1;
        this.versionNavItemBackgroundColorAltOpacity = 1;
        this.headerTextColorOpacity = 1;
        this.navItemBorderRightOpacity = 1;

        this.workoutsStaggerItem = $('#workouts-section .stagger-item');
        this.workouts1StaggerItem = $('#workouts-section1 .stagger-item');
        this.workouts2StaggerItem = $('#workouts-section2 .stagger-item');
        this.friendsStaggerItem = $('#friends-section .stagger-item');
        this.friendsListsStaggerItem = $('#friends-section #friends-section-lists-container .stagger-item');
        this.friendsFeedStaggerItem = $('#friends-section #friends-section-feed-container .stagger-item');
        this.recentActivityRowStaggerItem = $('#profile-section #profile-section-recent-activity-row-container .stagger-item');
        this.bodyBoardStaggerItem = $('#profile-section #profile-section-body-board-container .stagger-item');
        this.profileStaggerItem = $('#profile-section .stagger-item');
        this.nutritionStaggerItem = $('#nutrition-section .stagger-item');
        this.nutritionStandardStaggerItem = $('#nutrition-section .standard .stagger-item');
        this.nutritionContainersStaggerItem = $('#nutrition-section .containers .stagger-item');
        this.offlineStaggerItem = $('#offline-section .stagger-item');
        this.offlineSavesStaggerItem = $('#offline-section #offline-section-saves-container .stagger-item');
        this.offlineNoSavesStaggerItem = $('#offline-section #offline-section-no-saves-container .stagger-item');
        this.settingsStaggerItem = $('#settings-section .stagger-item');

        this.staggerItemDuration = 1;
        this.staggerItemDelay = 0.1;
        this.staggerItemDistanceX = this.container.width() * 0.2;
        this.staggerItemDistanceY = this.container.width() * 0.2;

        this.blurElement = {
            a: 0
        };

        this.filterActive = false;
    },
    style: function () {
        TweenMax.set(this.outerContainer, {
            opacity: 1,
            perspective: 800,
            perspectiveOrigin: 'center',
            userSelect: 'none',
            transformStyle: 'flat'
        });
        TweenMax.set(this.container, {
            perspectiveOrigin: 'center',
            transformOrigin: 'center'
        });
        TweenMax.set(this.sectionContainer, {
            transformOrigin: 'center'
        });
        //        TweenMax.set(this.header, {
        //            backgroundColor: 'rgba(' + this.bbBlueRGB + ',' + this.headerBackgroundColorOpacity + ')'
        //        });
        TweenMax.set(this.headerText, {
            textAlign: 'center',
            lineHeight: this.headerHeight + 'px',
            margin: 0,
            padding: 0,
            textTransform: 'uppercase',
            fontSize: this.containerWidth * 0.02,
            color: 'rgba(' + this.whiteRGB + ',' + this.headerTextColorOpacity + ')'
        });
        TweenMax.set(this.versionNavItem, {
            backgroundColor: 'rgba(' + this.whiteRGB + ',' + this.navItemBackgroundColorOpacity + ')'
        });
        TweenMax.set(this.nav, {
            //            backgroundColor: 'rgba(' + this.bbBlueRGB + ',' + this.navBackgroundColorOpacity + ')'
        });
        TweenMax.set(this.navItem, {
            //            width: this.nav.width() * 0.2475,
            backgroundColor: 'rgba(' + this.whiteRGB + ',' + this.navItemBackgroundColorOpacity + ')',
            //            borderRight: '0.1vw solid rgba(' + this.bbBlueRGB + ',' + this.navItemBorderOpacity + ')'
        });
        TweenMax.set(this.navItem.eq(3), {
            //            width: this.nav.width() - (this.navItem.eq(0).outerWidth() + this.navItem.eq(1).outerWidth() + this.navItem.eq(2).outerWidth()),
            //            backgroundColor: 'rgba(' + this.blackRGB + ',' + this.navItemBackgroundColorOpacity + ')'
            //            borderRight: 'none'
        });
        //        TweenMax.set(this.navItemIcon.eq(0), {
        //            width: this.navItem.width() * 0.3
        //        });
        //        TweenMax.set(this.navItemIcon.eq(0), {
        //            left: (this.navItem.width() * 0.5) - (this.navItemIcon.eq(0).width() * 0.5)
        //        });
        //        TweenMax.set(this.navItemIcon.eq(1), {
        //            width: this.container.width() * 0.11
        //        });
        //        TweenMax.set(this.navItemIcon.eq(1), {
        //            left: (this.container.width() * 0.125) - (this.navItemIcon.eq(1).width() * 0.5)
        //        });
        //        TweenMax.set(this.navItemIcon.eq(2), {
        //            width: this.navItem.width() * 0.25
        //        });
        //        TweenMax.set(this.navItemIcon.eq(2), {
        //            left: (this.navItem.width() * 0.5) - (this.navItemIcon.eq(2).width() * 0.5)
        //        });
        //        TweenMax.set(this.navItemIcon.eq(3), {
        //            width: this.navItem.width() * 0.4
        //        });
        //        TweenMax.set(this.navItemIcon.eq(3), {
        //            left: (this.navItem.width() * 0.5) - (this.navItemIcon.eq(3).width() * 0.5)
        //        });
        //        TweenMax.set(this.navItemTitle, {
        //            color: 'rgba(' + this.bbBlueRGB + ',' + this.navItemTitleColorOpacity + ')'
        //        });

        //ALT
        //        TweenMax.set(this.navItemIconAlt.eq(0), {
        //            width: this.navItem.width() * 0.3
        //        });
        //        TweenMax.set(this.navItemIconAlt.eq(0), {
        //            left: (this.navItem.width() * 0.5) - (this.navItemIcon.eq(0).width() * 0.5)
        //        });
        //        TweenMax.set(this.navItemIconAlt.eq(1), {
        //            width: this.container.width() * 0.11
        //        });
        //        TweenMax.set(this.navItemIconAlt.eq(1), {
        //            left: (this.container.width() * 0.125) - (this.navItemIconAlt.eq(1).width() * 0.5)
        //        });
        //        TweenMax.set(this.navItemIconAlt.eq(2), {
        //            width: this.navItem.width() * 0.25
        //        });
        //        TweenMax.set(this.navItemIconAlt.eq(2), {
        //            left: (this.navItem.width() * 0.5) - (this.navItemIcon.eq(2).width() * 0.5)
        //        });
        //        TweenMax.set(this.navItemIconAlt.eq(3), {
        //            width: this.navItem.width() * 0.4
        //        });
        //        TweenMax.set(this.navItemIconAlt.eq(3), {
        //            left: (this.navItem.width() * 0.5) - (this.navItemIcon.eq(3).width() * 0.5)
        //        });
        //        TweenMax.set(this.navItemTitleAlt, {
        //            color: 'rgba(' + this.whiteRGB + ',' + this.navItemTitleColorOpacity + ')'
        //        });
        TweenMax.set(this.versionNavItemBackgroundAlt, {
            backgroundColor: 'rgba(' + this.whiteRGB + ',' + this.versionNavItemBackgroundColorAltOpacity + ')'
        });
        TweenMax.set(this.navItemBackgroundAlt, {
            backgroundColor: 'rgba(' + this.bbBlueRGB + ',' + this.navItemBackgroundColorAltOpacity + ')'
        });
        //        TweenMax.set(this.workoutsSectionSlider, {
        //            width: this.workoutsSectionSlide.width() * this.workoutsSectionSlide.length
        //        });
        TweenMax.set(this.navItemBorderRight, {
            backgroundColor: 'rgba(' + this.bbBlueRGB + ',' + this.navItemBorderRightOpacity + ')'
        });

        TweenMax.set(this.friendsSectionFindIcon, {
            height: this.friendsSectionFindInput.outerHeight()
        });

        TweenMax.set(this.gearMenuContainer, {
            perspective: 800,
            perspectiveOrigin: 'center',
            transformStyle: 'flat'
        });

        TweenMax.set(this.gearMenu, {
            transformOrigin: 'center'
        });

        TweenMax.set(this.arrowIconWhite, {
            transformOrigin: 'center'
        });

        TweenMax.set(this.arrowTapRegion, {
            transformOrigin: 'center'
        });

        TweenMax.set(this.tile, {
            perspective: 800,
            perspectiveOrigin: 'center'
        });

        for (i = 0; i < this.tileContainer.length; i++) {
            var currentTileContainer = this.tileContainer.eq(i),
                currentTiles = currentTileContainer.find('.tile'),
                currentTilesLength = currentTiles.length;

            TweenMax.set(currentTileContainer, {
                width: (currentTilesLength * this.tile.outerWidth()) + (this.container.width() * 0.03)
            });
        }

        TweenMax.set(this.confirmContainer, {
            perspective: 800,
            perspectiveOrigin: 'center'
        });

        TweenMax.set(this.confirm, {
            transformOrigin: 'center',
            top: (this.confirmContainer.height() * 0.5) - (this.confirm.height() * 0.5)
        });

        TweenMax.set($('#profile-section-tabs .inactive-tab'), {
            backgroundColor: 'rgba(' + this.inactiveTabRGB + ',1)'
        });

        TweenMax.set(this.diaryEntry.find('.diary-entry-icon'), {
            userSelect: 'none',
            pointerEvents: 'none'
        });

        TweenMax.set(this.diaryEntry.find('.diary-entry-icon-alt'), {
            userSelect: 'none',
            pointerEvents: 'none'
        });

        TweenMax.set(this.offlineSectionSaveDeleteContainer, {
            x: mPro.container.width() * 0.295
        });

        TweenMax.set(this.programChapterHeaderArrow, {
            rotation: 180
        });

        TweenMax.set(this.settingsSectionRowSwitchContainer, {
            perspective: 800,
            perspectiveOrigin: 'center'
        });

        TweenMax.set(this.settingsSectionRowSwitchCircle, {
            transformOrigin: 'center',
            scale: 0.9
        });

        TweenMax.set(this.settingsSectionRowSwitchBackground, {
            transformOrigin: 'center',
            scale: 0
        });

        TweenMax.set(this.abRipperBEffort.find('.profile-section-recent-activity-style-title'), {
            marginTop: mPro.container.width() * 0.02
        });

        //        TweenMax.set(this.bodyBoardInfoContainerBackground, {
        //           height: this.bodyBoardInfoContainerBackground.siblings('.body-board-info-container').outerHeight(),
        //            top: this.bodyBoardInfoContainerBackground.siblings('.body-board-image-container').height() + 'px'
        //        });
    }
};

mPro.init();

//VERSION NAV ITEM TOUCH
mPro.versionNavItem.on('touchstart', function () {
    mPro.outerSection.hide();
    backToMainInstant();
    TweenMax.set(mPro.fpoContainer, {
        scrollTop: 0
    });
    TweenMax.set(mPro.sectionContainer, {
        scrollTop: 0
    });
    TweenMax.set($(this).find('.nav-active'), {
        opacity: 1
    });
    TweenMax.set($(this).find('.nav-item-bg-alt'), {
        opacity: 1
    });
    TweenMax.set($(this).siblings('.version-nav-item').find('.nav-active'), {
        opacity: 0
    });
    TweenMax.set($(this).siblings('.version-nav-item').find('.nav-item-bg-alt'), {
        opacity: 0
    });
    switch (true) {

        //VERSION NAV 1 TAPPED
    case $(this).hasClass('version-1-nav-item'):
        mPro.workoutsSection1.removeClass('active-section').removeClass('inactive-section').addClass('active-section');
        mPro.workoutsSection1.siblings('.section').removeClass('active-section').removeClass('inactive-section').addClass('inactive-section');
        TweenMax.set(mPro.workouts1StaggerItem, {
            opacity: 0,
            x: '-' + mPro.staggerItemDistanceX,
            onComplete: function () {
                TweenMax.staggerTo(mPro.workouts1StaggerItem, mPro.staggerItemDuration, {
                    x: 0,
                    opacity: 1,
                    ease: Expo.easeOut
                }, mPro.staggerItemDelay);
            }
        });
        break;

        //VERSION NAV 2 TAPPED
    case $(this).hasClass('version-2-nav-item'):
        mPro.workoutsSection2.removeClass('active-section').removeClass('inactive-section').addClass('active-section');
        mPro.workoutsSection2.siblings('.section').removeClass('active-section').removeClass('inactive-section').addClass('inactive-section');
        TweenMax.set(mPro.workouts2StaggerItem, {
            opacity: 0,
            x: mPro.staggerItemDistanceX,
            onComplete: function () {
                TweenMax.staggerTo(mPro.workouts2StaggerItem, mPro.staggerItemDuration, {
                    x: 0,
                    opacity: 1,
                    ease: Expo.easeOut
                }, mPro.staggerItemDelay);
            }
        });
        break;

        //VERSION NAV 3 TAPPED
    case $(this).hasClass('version-3-nav-item'):
        mPro.workoutsSection3.removeClass('active-section').removeClass('inactive-section').addClass('active-section');
        mPro.workoutsSection3.siblings('.section').removeClass('active-section').removeClass('inactive-section').addClass('inactive-section');
        TweenMax.set(mPro.workoutsStaggerItem, {
            opacity: 0,
            y: mPro.staggerItemDistanceY,
            onComplete: function () {
                TweenMax.staggerTo(mPro.workoutsStaggerItem, mPro.staggerItemDuration, {
                    y: 0,
                    opacity: 1,
                    ease: Expo.easeOut
                }, mPro.staggerItemDelay);
            }
        });
        break;
    }
});

//NAV ITEM TOUCH
mPro.navItem.on('touchstart', function () {
    mPro.outerSection.hide();
    backToMainInstant();
    TweenMax.set(mPro.fpoContainer, {
        scrollTop: 0
    })
    TweenMax.set(mPro.sectionContainer, {
        scrollTop: 0
    })
    TweenMax.set($(this).find('.nav-item-title'), {
        color: 'rgba(' + mPro.bbBlueRGB + ',1)'
    });
    TweenMax.set($(this).siblings('.nav-item').find('.nav-item-title'), {
        color: '#898b8e'
    });
    TweenMax.set($(this).find('.nav-active'), {
        opacity: 1
    });
    TweenMax.set($(this).find('.nav-item-bg-alt'), {
        opacity: 1
    });
    TweenMax.set($(this).siblings('.nav-item').find('.nav-active'), {
        opacity: 0
    });
    TweenMax.set($(this).siblings('.nav-item').find('.nav-item-bg-alt'), {
        opacity: 0
    });
    switch (true) {

        //NAV 1 TAPPED
    case $(this).hasClass('workouts-nav-item'):
        mPro.friendsSection.removeClass('left').removeClass('right').addClass('right');
        mPro.profileSection.removeClass('left').removeClass('right').addClass('right');
        mPro.offlineSection.removeClass('left').removeClass('right').addClass('right');
        mPro.settingsSection.removeClass('left').removeClass('right').addClass('right');

        mPro.workoutsFpo.removeClass('active-section').removeClass('inactive-section').addClass('active-section');
        mPro.workoutsFpo.siblings('.fpo').removeClass('active-section').removeClass('inactive-section').addClass('inactive-section');
        mPro.workoutsSection.removeClass('active-section').removeClass('inactive-section').addClass('active-section');
        mPro.workoutsSection.siblings('.section').removeClass('active-section').removeClass('inactive-section').addClass('inactive-section');
        if (mPro.workoutsSection.hasClass('left')) {
            TweenMax.set(mPro.workoutsStaggerItem, {
                opacity: 0,
                x: '-' + mPro.staggerItemDistanceX,
                onComplete: function () {
                    TweenMax.staggerTo(mPro.workoutsStaggerItem, mPro.staggerItemDuration, {
                        x: 0,
                        opacity: 1,
                        ease: Expo.easeOut
                    }, mPro.staggerItemDelay);
                }
            });
        }
        if (mPro.workoutsSection.hasClass('right')) {
            TweenMax.set(mPro.workoutsStaggerItem, {
                opacity: 0,
                x: mPro.staggerItemDistanceX,
                onComplete: function () {
                    TweenMax.staggerTo(mPro.workoutsStaggerItem, mPro.staggerItemDuration, {
                        x: 0,
                        opacity: 1,
                        ease: Expo.easeOut
                    }, mPro.staggerItemDelay);
                }
            });
        }
        break;

        //NAV 2 TAPPED
    case $(this).hasClass('friends-nav-item'):
        mPro.workoutsSection.removeClass('left').removeClass('right').addClass('left');
        mPro.profileSection.removeClass('left').removeClass('right').addClass('right');
        mPro.offlineSection.removeClass('left').removeClass('right').addClass('right');
        mPro.settingsSection.removeClass('left').removeClass('right').addClass('right');

        mPro.friendsFpo.removeClass('active-section').removeClass('inactive-section').addClass('active-section');
        mPro.friendsFpo.siblings('.fpo').removeClass('active-section').removeClass('inactive-section').addClass('inactive-section');
        mPro.friendsSection.removeClass('active-section').removeClass('inactive-section').addClass('active-section');
        mPro.friendsSection.siblings('.section').removeClass('active-section').removeClass('inactive-section').addClass('inactive-section');
        if (mPro.friendsSection.hasClass('left')) {
            TweenMax.set(mPro.friendsListsStaggerItem, {
                opacity: 0,
                x: '-' + mPro.staggerItemDistanceX,
                onComplete: function () {
                    TweenMax.staggerTo(mPro.friendsListsStaggerItem, mPro.staggerItemDuration, {
                        x: 0,
                        opacity: 1,
                        ease: Expo.easeOut
                    }, mPro.staggerItemDelay);
                }
            });
            TweenMax.set(mPro.friendsFeedStaggerItem, {
                opacity: 0,
                x: '-' + mPro.staggerItemDistanceX,
                onComplete: function () {
                    TweenMax.staggerTo(mPro.friendsFeedStaggerItem, mPro.staggerItemDuration, {
                        x: 0,
                        opacity: 1,
                        ease: Expo.easeOut
                    }, mPro.staggerItemDelay);
                }
            });
        }
        if (mPro.friendsSection.hasClass('right')) {
            TweenMax.set(mPro.friendsListsStaggerItem, {
                opacity: 0,
                x: mPro.staggerItemDistanceX,
                onComplete: function () {
                    TweenMax.staggerTo(mPro.friendsListsStaggerItem, mPro.staggerItemDuration, {
                        x: 0,
                        opacity: 1,
                        ease: Expo.easeOut
                    }, mPro.staggerItemDelay);
                }
            });
            TweenMax.set(mPro.friendsFeedStaggerItem, {
                opacity: 0,
                x: mPro.staggerItemDistanceX,
                onComplete: function () {
                    TweenMax.staggerTo(mPro.friendsFeedStaggerItem, mPro.staggerItemDuration, {
                        x: 0,
                        opacity: 1,
                        ease: Expo.easeOut
                    }, mPro.staggerItemDelay);
                }
            });
        }
        break;

        //NAV 3 TAPPED
    case $(this).hasClass('profile-nav-item'):
        mPro.workoutsSection.removeClass('left').removeClass('right').addClass('left');
        mPro.friendsSection.removeClass('left').removeClass('right').addClass('left');
        mPro.offlineSection.removeClass('left').removeClass('right').addClass('right');
        mPro.settingsSection.removeClass('left').removeClass('right').addClass('right');

        mPro.profileFpo.removeClass('active-section').removeClass('inactive-section').addClass('active-section');
        mPro.profileFpo.siblings('.fpo').removeClass('active-section').removeClass('inactive-section').addClass('inactive-section');
        mPro.profileSection.removeClass('active-section').removeClass('inactive-section').addClass('active-section');
        mPro.profileSection.siblings('.section').removeClass('active-section').removeClass('inactive-section').addClass('inactive-section');
        if (mPro.profileSection.hasClass('left')) {
            TweenMax.set(mPro.recentActivityRowStaggerItem, {
                opacity: 0,
                x: '-' + mPro.staggerItemDistanceX,
                onComplete: function () {
                    TweenMax.staggerTo(mPro.recentActivityRowStaggerItem, mPro.staggerItemDuration, {
                        x: 0,
                        opacity: 1,
                        ease: Expo.easeOut
                    }, mPro.staggerItemDelay);
                }
            });
            TweenMax.set(mPro.bodyBoardStaggerItem, {
                opacity: 0,
                x: '-' + mPro.staggerItemDistanceX,
                onComplete: function () {
                    TweenMax.staggerTo(mPro.bodyBoardStaggerItem, mPro.staggerItemDuration, {
                        x: 0,
                        opacity: 1,
                        ease: Expo.easeOut
                    }, mPro.staggerItemDelay);
                }
            });
        }
        if (mPro.profileSection.hasClass('right')) {
            TweenMax.set(mPro.recentActivityRowStaggerItem, {
                opacity: 0,
                x: mPro.staggerItemDistanceX,
                onComplete: function () {
                    TweenMax.staggerTo(mPro.recentActivityRowStaggerItem, mPro.staggerItemDuration, {
                        x: 0,
                        opacity: 1,
                        ease: Expo.easeOut
                    }, mPro.staggerItemDelay);
                }
            });
            TweenMax.set(mPro.bodyBoardStaggerItem, {
                opacity: 0,
                x: mPro.staggerItemDistanceX,
                onComplete: function () {
                    TweenMax.staggerTo(mPro.bodyBoardStaggerItem, mPro.staggerItemDuration, {
                        x: 0,
                        opacity: 1,
                        ease: Expo.easeOut
                    }, mPro.staggerItemDelay);
                }
            });
        }
        break;

        //NAV 4 TAPPED
    case $(this).hasClass('offline-nav-item'):
        mPro.workoutsSection.removeClass('left').removeClass('right').addClass('left');
        mPro.friendsSection.removeClass('left').removeClass('right').addClass('left');
        mPro.profileSection.removeClass('left').removeClass('right').addClass('left');
        mPro.settingsSection.removeClass('left').removeClass('right').addClass('right');

        mPro.offlineSection.removeClass('active-section').removeClass('inactive-section').addClass('active-section');
        mPro.offlineSection.siblings('.section').removeClass('active-section').removeClass('inactive-section').addClass('inactive-section');
        if (mPro.offlineSection.hasClass('left')) {
            TweenMax.set(mPro.offlineSavesStaggerItem, {
                opacity: 0,
                x: '-' + mPro.staggerItemDistanceX,
                onComplete: function () {
                    TweenMax.staggerTo(mPro.offlineSavesStaggerItem, mPro.staggerItemDuration, {
                        x: 0,
                        opacity: 1,
                        ease: Expo.easeOut
                    }, mPro.staggerItemDelay);
                }
            });
            TweenMax.set(mPro.offlineNoSavesStaggerItem, {
                opacity: 0,
                x: '-' + mPro.staggerItemDistanceX,
                onComplete: function () {
                    TweenMax.staggerTo(mPro.offlineNoSavesStaggerItem, mPro.staggerItemDuration, {
                        x: 0,
                        opacity: 1,
                        ease: Expo.easeOut
                    }, mPro.staggerItemDelay);
                }
            });
        }
        if (mPro.offlineSection.hasClass('right')) {
            TweenMax.set(mPro.offlineSavesStaggerItem, {
                opacity: 0,
                x: mPro.staggerItemDistanceX,
                onComplete: function () {
                    TweenMax.staggerTo(mPro.offlineSavesStaggerItem, mPro.staggerItemDuration, {
                        x: 0,
                        opacity: 1,
                        ease: Expo.easeOut
                    }, mPro.staggerItemDelay);
                }
            });
            TweenMax.set(mPro.offlineNoSavesStaggerItem, {
                opacity: 0,
                x: mPro.staggerItemDistanceX,
                onComplete: function () {
                    TweenMax.staggerTo(mPro.offlineNoSavesStaggerItem, mPro.staggerItemDuration, {
                        x: 0,
                        opacity: 1,
                        ease: Expo.easeOut
                    }, mPro.staggerItemDelay);
                }
            });
        }
        break;

        //NAV 5 TAPPED
    case $(this).hasClass('more-nav-item'):
        mPro.workoutsSection.removeClass('left').removeClass('right').addClass('left');
        mPro.friendsSection.removeClass('left').removeClass('right').addClass('left');
        mPro.profileSection.removeClass('left').removeClass('right').addClass('left');
        mPro.offlineSection.removeClass('left').removeClass('right').addClass('left');

        mPro.moreFpo.removeClass('active-section').removeClass('inactive-section').addClass('active-section');
        mPro.moreFpo.siblings('.fpo').removeClass('active-section').removeClass('inactive-section').addClass('inactive-section');
        mPro.settingsSection.removeClass('active-section').removeClass('inactive-section').addClass('active-section');
        mPro.settingsSection.siblings('.section').removeClass('active-section').removeClass('inactive-section').addClass('inactive-section');
        if (mPro.settingsSection.hasClass('left')) {
            TweenMax.set(mPro.settingsStaggerItem, {
                opacity: 0,
                x: '-' + mPro.staggerItemDistanceX,
                onComplete: function () {
                    TweenMax.staggerTo(mPro.settingsStaggerItem, mPro.staggerItemDuration, {
                        x: 0,
                        opacity: 1,
                        ease: Expo.easeOut
                    }, mPro.staggerItemDelay);
                }
            });
        }
        if (mPro.settingsSection.hasClass('right')) {
            TweenMax.set(mPro.settingsStaggerItem, {
                opacity: 0,
                x: mPro.staggerItemDistanceX,
                onComplete: function () {
                    TweenMax.staggerTo(mPro.settingsStaggerItem, mPro.staggerItemDuration, {
                        x: 0,
                        opacity: 1,
                        ease: Expo.easeOut
                    }, mPro.staggerItemDelay);
                }
            });
        }
        break;
    }
});

//MENU OPEN TOUCH
mPro.gearTapRegion.on('touchstart', function () {
    mPro.menuActive = true;
    TweenMax.set(mPro.gearMenuContainer, {
        opacity: 1
    });
    TweenMax.set(mPro.logoutContainer, {
        opacity: 1
    });
    TweenMax.set(mPro.sectionContainer, {
        pointerEvents: 'none'
    });
    TweenMax.set(mPro.programContainer, {
        pointerEvents: 'none'
    });
    TweenMax.to(mPro.container, 0.3, {
        scale: 0.75,
        y: mPro.container.width() * 0.05,
        ease: Quad.easeOut,
        onComplete: function () {
            TweenMax.set(mPro.closeMenuRegion, {
                pointerEvents: 'auto'
            });
        }
    }, 0);
    TweenMax.to(mPro.container, 0.3, {
        x: mPro.container.width() * 0.61,
        ease: Quad.easeIn
    }, 0);
});

//MENU CLOSE TOUCH
mPro.closeMenuRegion.on('touchstart', function () {
    concealSecondary();
    mPro.menuActive = false;
    TweenMax.set(mPro.closeMenuRegion, {
        pointerEvents: 'none'
    });
    TweenMax.to(mPro.container, 0.3, {
        scale: 1,
        y: 0,
        ease: Quad.easeIn,
        onComplete: function () {
            TweenMax.set(mPro.gearMenuContainer, {
                opacity: 0
            });
            TweenMax.set(mPro.logoutContainer, {
                opacity: 0
            });
            TweenMax.set(mPro.sectionContainer, {
                pointerEvents: 'auto'
            });
            TweenMax.set(mPro.programContainer, {
                pointerEvents: 'auto'
            });
        }
    }, 0);
    TweenMax.to(mPro.container, 0.3, {
        x: 0,
        ease: Quad.easeOut,
        onComplete: function () {
            TweenMax.set(mPro.closeMenuRegion, {
                pointerEvents: 'none'
            });
        }
    }, 0);
});

//FILTER OPEN TOUCH
mPro.filterTapRegion.on('touchstart', function () {
    if (!mPro.filterActive) {
        mPro.filterActive = true;
        applyBlur();
    } else {
        mPro.filterActive = false;
        removeBlur();
    }
});

//ARROW ICON WHITE TOUCH
mPro.arrowTapRegion.on('touchstart', function () {
    if (!mPro.secondaryActive) {
        mPro.secondaryActive = true;
        console.log('true');
        revealSecondary();
    } else {
        mPro.secondaryActive = false;
        console.log('false');
        concealSecondary();
    }
});

//TILE OPEN TOUCH

//TWENTY-TWO MINUTE HARD CORPS TILE
mPro.twentyTwoMinuteHardCorpsTile.on('click', function () {
    mPro.programActive = true;
    TweenMax.set(mPro.gearTapRegion, {
        pointerEvents: 'none'
    });
    TweenMax.set(mPro.programContainer, {
        pointerEvents: 'auto'
    });
    TweenMax.set(mPro.twentyTwoMinuteHardCorpsProgram, {
        display: 'inline'
    });
    TweenMax.to(mPro.programContainer, 0.5, {
        x: 0,
        ease: Quart.easeOut
    }, 0);
    TweenMax.to(mPro.sectionContainer, 0.5, {
        x: '-' + mPro.container.width() * 0.5,
        ease: Quart.easeOut
    });
    TweenMax.to(mPro.backIcon, 0.5, {
        opacity: 1,
        onComplete: function () {
            TweenMax.set(mPro.backIcon, {
                pointerEvents: 'auto'
            });
            TweenMax.set(mPro.sectionContainer, {
                opacity: 0
            });
        }
    }, 0);
});

//TWENTY-ONE DAY FIX TILE
mPro.twentyOneDayFixTile.on('click', function () {
    mPro.programActive = true;
    TweenMax.set(mPro.gearTapRegion, {
        pointerEvents: 'none'
    });
    TweenMax.set(mPro.programContainer, {
        pointerEvents: 'auto'
    });
    TweenMax.set(mPro.twentyOneDayFixProgram, {
        display: 'inline'
    });
    TweenMax.to(mPro.programContainer, 0.5, {
        x: 0,
        ease: Quart.easeOut
    }, 0);
    TweenMax.to(mPro.sectionContainer, 0.5, {
        x: '-' + mPro.container.width() * 0.5,
        ease: Quart.easeOut
    });
    TweenMax.to(mPro.backIcon, 0.5, {
        opacity: 1,
        onComplete: function () {
            TweenMax.set(mPro.backIcon, {
                pointerEvents: 'auto'
            });
            TweenMax.set(mPro.sectionContainer, {
                opacity: 0
            });
        }
    }, 0);
});

//TILE CLOSE TOUCH
mPro.backIcon.on('click', function () {
    backToMain();
});

//PREMIUM UNLOCK TOUCH START
mPro.programPremiumDescriptionUnlockButton.on('touchstart', function () {
    TweenMax.to($(this), 0.25, {
        backgroundColor: 'rgba(' + mPro.bbBlueDarkRGB + ',1)'
    }, 0);
});

//PREMIUM UNLOCK TOUCH END
mPro.programPremiumDescriptionUnlockButton.on('touchend', function () {

    TweenMax.to($(this), 0.25, {
        backgroundColor: 'rgba(' + mPro.bbBlueRGB + ',1)'
    }, 0);
});

//PREMIUM UNLOCK CLICK
mPro.programPremiumDescriptionUnlockButton.on('click', function () {
    var that = $(this);
    //    switch (true) {
    //    case that.hasClass('tmhc-unlock'):
    //        mPro.tmhcUnlocked = true;
    //        console.log('TMHC Unlocked.');
    //        break;
    //    case that.hasClass('tdf-unlock'):
    //        mPro.tdfUnlocked = true;
    //        console.log('TDF Unlocked.');
    //        break;
    //    }
    if ($(this).hasClass('tmhc-unlock')) {
        console.log('trying to unlock tmhc');
        mPro.twentyTwoMinuteHardCorpsLevels.show();
    }
    if ($(this).hasClass('tdf-unlock')) {
        console.log('trying to unlock tdf');
        mPro.twentyOneDayFixLevels.show();
    }

    TweenMax.set(mPro.levelBackTapRegion, {
        display: 'inline',
        delay: 0.25
    });
    TweenMax.set(mPro.levelsContainer, {
        display: 'inline',
        pointerEvents: 'auto',
        delay: 0.25
    });
    TweenMax.to(mPro.levelsContainer, 0.5, {
        x: 0,
        ease: Quart.easeOut,
        delay: 0.25
    }, 0);
    TweenMax.to(mPro.programContainer, 0.5, {
        x: '-' + mPro.container.width() * 0.5,
        ease: Quart.easeOut,
        delay: 0.25
    });
});

//LEVEL BACK TOUCH START
mPro.levelBackTapRegion.on('touchstart', function () {
    TweenMax.to(mPro.levelsContainer, 0.5, {
        x: mPro.container.width(),
        ease: Quart.easeOut
    }, 0);
    TweenMax.to(mPro.programContainer, 0.5, {
        x: 0,
        ease: Quart.easeOut,
        onComplete: function () {
            mPro.levelBackTapRegion.hide();
            mPro.levelsContainer.hide();
            mPro.levels.hide();
        }
    });
});

//ADD BUTTON TOUCH START
mPro.addButton.on('touchstart', function () {
    TweenMax.to($(this), 0.5, {
        backgroundColor: 'rgba(' + mPro.bbBlueRGB + ',1)',
        color: 'rgba(' + mPro.whiteRGB + ',1)',
        ease: Expo.easeOut
    }, 0);
});

//ADD BUTTON TOUCH END
mPro.addButton.on('touchend', function () {
    TweenMax.to($(this), 0.5, {
        backgroundColor: 'rgba(' + mPro.whiteRGB + ',1)',
        color: 'rgba(' + mPro.addButtonTextRGB + ',1)',
        ease: Expo.easeOut
    }, 0);
});

//ADD BUTTON TOUCH CLICK
mPro.addButton.on('click', function () {
    TweenMax.set(mPro.confirmContainer, {
        opacity: 0,
        display: 'inline',
        pointerEvents: 'auto'
    });
    TweenMax.to(mPro.confirmContainer, 0.5, {
        opacity: 1
    }, 0);

    if ($(this).hasClass('tmhc-add')) {
        console.log('adding tmhc');
        TweenMax.set(mPro.twentyTwoMinuteHardCorpsConfirm, {
            scale: 1.5,
            opacity: 0,
            display: 'inline'
        });
        TweenMax.to(mPro.twentyTwoMinuteHardCorpsConfirm, 0.5, {
            scale: 1,
            opacity: 1,
            ease: Quart.easeOut,
            delay: 0.25
        }, 0);
    } else if ($(this).hasClass('tdf-add')) {
        console.log('adding tdf');
        TweenMax.set(mPro.twentyOneDayFixConfirm, {
            scale: 1.5,
            opacity: 0,
            display: 'inline'
        });
        TweenMax.to(mPro.twentyOneDayFixConfirm, 0.5, {
            scale: 1,
            opacity: 1,
            ease: Quart.easeOut,
            delay: 0.25
        }, 0);
    }
});

//CONFIRM BUTTON TOUCH START
mPro.confirmButton.on('touchstart', function () {
    TweenMax.set($(this), {
        backgroundColor: 'rgba(' + mPro.whiteRGB + ',0.76)'
    });
});

//CONFIRM BUTTON TOUCH END
mPro.confirmButton.on('touchend', function () {
    TweenMax.set($(this), {
        backgroundColor: 'rgba(' + mPro.whiteRGB + ',0.86)'
    });
});

//CONFIRM BUTTON CLICK
mPro.confirmButton.on('click', function () {
    var that = $(this);
    if (that.hasClass('tmhc-buy')) {
        mPro.tmhcUnlocked = true;
        console.log('TMHC Unlocked.');
    }
    if (that.hasClass('tdf-buy')) {
        mPro.tdfUnlocked = true;
        console.log('TDF Unlocked.');
    }
    TweenMax.to(mPro.confirm, 0.5, {
        opacity: 0,
        scale: 0.9,
        ease: Quart.easeOut
    }, 0);
    TweenMax.to(mPro.confirmContainer, 0.5, {
        opacity: 0,
        onComplete: function () {

            TweenMax.set(mPro.confirmContainer, {
                display: 'none',
                pointerEvents: 'none'
            });
            TweenMax.set(mPro.confirm, {
                display: 'none'
            });

            if (!(that.hasClass('cancel-button'))) {
                TweenMax.to(mPro.levelsContainer, 0.5, {
                    x: mPro.container.width(),
                    ease: Quart.easeOut
                }, 0);
                TweenMax.to(mPro.programContainer, 0.5, {
                    x: 0,
                    ease: Quart.easeOut,
                    onComplete: function () {
                        mPro.levelBackTapRegion.hide();
                        mPro.levelsContainer.hide();
                        mPro.levels.hide();
                    }
                });

                if (mPro.tmhcUnlocked) {
                    mPro.twentyTwoMinuteHardCorpsPremium.fadeOut();
                }

                if (mPro.tdfUnlocked) {
                    mPro.twentyOneDayFixPremium.fadeOut();
                }
            }

        }
    }, 0);
});

//PROFILE SECTION TAB BUTTON TOUCH START
mPro.profileSectionTab.on('touchstart', function () {
    $(this).removeClass('inactive-tab').removeClass('active-tab').addClass('active-tab');
    TweenMax.set($(this), {
        backgroundColor: 'rgba(' + mPro.bbBlueRGB + ',1)',
        color: 'rgba(' + mPro.whiteRGB + ',1)'
    });
    $(this).siblings('.profile-section-tab').removeClass('active-tab').removeClass('inactive-tab').addClass('inactive-tab');
    TweenMax.set($(this).siblings('.profile-section-tab'), {
        backgroundColor: 'rgba(' + mPro.inactiveTabRGB + ',1)',
        color: 'rgba(' + mPro.blackRGB + ',1)'
    });

    if ($(this).hasClass('recent-activity-tab')) {
        mPro.recentActivityTabActive = true;
        mPro.profileSectionRecentActivityRowContainer.show();
        mPro.profileSectionBodyBoardContainer.hide();
    }

    if ($(this).hasClass('body-board-tab')) {
        mPro.bodyBoardTabActive = true;
        mPro.profileSectionRecentActivityRowContainer.hide();
        mPro.profileSectionBodyBoardContainer.show();
    }

    if ($(this).hasClass('privacy-tab')) {
        mPro.privacyTabActive = true;
        mPro.profileSectionRecentActivityRowContainer.hide();
        mPro.profileSectionBodyBoardContainer.hide();
    }
});

////PROFILE SECTION TAB BUTTON TOUCH START
//mPro.profileSectionTab.on('touchstart', function () {
//    TweenMax.set($(this), {
//        backgroundColor: 'rgba(' + mPro.bbBlueRGB + ',1)',
//        color: 'rgba(' + mPro.whiteRGB + ',1)'
//    });
//});

////PROFILE SECTION TAB BUTTON TOUCH END
//mPro.profileSectionTab.on('touchend', function () {
//    if ($(this).hasClass('inactive-tab')) {
//        TweenMax.set($(this), {
//            backgroundColor: 'rgba(' + mPro.inactiveTabRGB + ',1)',
//            color: 'rgba(' + mPro.blackRGB + ',1)'
//        });
//    }
//});

//FRIENDS SECTION TAB BUTTON TOUCH START
mPro.friendsSectionTab.on('touchstart', function () {
    $(this).removeClass('inactive-tab').removeClass('active-tab').addClass('active-tab');
    TweenMax.set($(this), {
        backgroundColor: 'rgba(' + mPro.bbBlueRGB + ',1)',
        color: 'rgba(' + mPro.whiteRGB + ',1)'
    });
    $(this).siblings('.friends-section-tab').removeClass('active-tab').removeClass('inactive-tab').addClass('inactive-tab');
    TweenMax.set($(this).siblings('.friends-section-tab'), {
        backgroundColor: 'rgba(' + mPro.whiteRGB + ',1)',
        color: 'rgba(' + mPro.bbBlueRGB + ',1)'
    });

    if ($(this).hasClass('friends-tab')) {
        mPro.friendsTabActive = true;
        mPro.friendsSectionListsContainer.show();
        mPro.friendsSectionFeedContainer.hide();
    }

    if ($(this).hasClass('feed-tab')) {
        mPro.feedTabActive = true;
        mPro.friendsSectionListsContainer.hide();
        mPro.friendsSectionFeedContainer.show();
    }

    if ($(this).hasClass('groups-tab')) {
        mPro.groupsTabActive = true;
        mPro.friendsSectionListsContainer.hide();
        mPro.friendsSectionFeedContainer.hide();
    }
});

//ENTRY SECTION TAB BUTTON TOUCH START
mPro.entrySectionTab.on('touchstart', function () {
    $(this).removeClass('inactive-entry-tab').removeClass('active-entry-tab').addClass('active-entry-tab');
    TweenMax.set($(this), {
        backgroundColor: 'rgba(' + mPro.whiteRGB + ',1)',
        color: 'rgba(' + mPro.bbBlueEntryRGB + ',1)'
    });
    $(this).siblings('.entry-section-tab').removeClass('active-entry-tab').removeClass('inactive-entry-tab').addClass('inactive-entry-tab');
    TweenMax.set($(this).siblings('.entry-section-tab'), {
        backgroundColor: 'none',
        color: 'rgba(' + mPro.whiteRGB + ',1)'
    });

    if ($(this).hasClass('eating-in-tab')) {
        mPro.eatingInActive = true;
        mPro.eatingOutActive = false;
        $(this).parent('.entry-section-tabs').parent('.entry-section-header').siblings('.eating-in-section').show();
        $(this).parent('.entry-section-tabs').parent('.entry-section-header').siblings('.eating-out-section').hide();
    }

    if ($(this).hasClass('eating-out-tab')) {
        mPro.eatingInActive = false;
        mPro.eatingOutActive = true;
        $(this).parent('.entry-section-tabs').parent('.entry-section-header').siblings('.eating-in-section').hide();
        $(this).parent('.entry-section-tabs').parent('.entry-section-header').siblings('.eating-out-section').show();
    }
});

//NUTRITION SECTION TAB BUTTON TOUCH START
mPro.nutritionSectionTab.on('touchstart', function () {
    $(this).removeClass('inactive-nutrition-tab').removeClass('active-nutrition-tab').addClass('active-nutrition-tab');
    TweenMax.set($(this), {
        backgroundColor: 'rgba(' + mPro.bbBlueRGB + ',1)',
        color: 'rgba(' + mPro.whiteRGB + ',1)'
    });
    $(this).siblings('.nutrition-section-tab').removeClass('active-nutrition-tab').removeClass('inactive-nutrition-tab').addClass('inactive-nutrition-tab');
    TweenMax.set($(this).siblings('.nutrition-section-tab'), {
        backgroundColor: 'rgba(' + mPro.whiteRGB + ',1)',
        color: 'rgba(' + mPro.bbBlueRGB + ',1)'
    });

    if ($(this).hasClass('standard-tab')) {
        mPro.standardActive = true;
        mPro.containersActive = false;
        mPro.standard.show();
        mPro.containers.hide();
    }

    if ($(this).hasClass('containers-tab')) {
        mPro.standardActive = false;
        mPro.containersActive = true;
        mPro.standard.hide();
        mPro.containers.show();
    }
});

//LOGO CLICK
//mPro.logo.on('click', function () {
//    if (mPro.versionActive) {
//        mPro.versionActive = false;
//        mPro.versionNav.hide();
//        mPro.nav.show();
//    } else {
//        mPro.versionActive = true;
//        mPro.versionNav.show();
//        mPro.nav.hide();
//    }
//});

//DIARY ENTRY TOUCH START
mPro.diaryEntry.on('touchstart', function () {
    if (!($(this).hasClass('entry-added'))) {
        TweenMax.set($(this), {
            backgroundColor: 'rgba(255,255,255,1)'
        });
        TweenMax.set($(this).find('.diary-entry-title'), {
            color: 'rgba(14,117,222,1)'
        });
        TweenMax.set($(this).find('.diary-entry-icon'), {
            opacity: 0
        });
        TweenMax.set($(this).find('.diary-entry-icon-alt'), {
            opacity: 1
        });
    }
});

//DIARY ENTRY TOUCH END
mPro.diaryEntry.on('touchend', function () {
    if (!($(this).hasClass('entry-added'))) {
        TweenMax.set($(this), {
            backgroundColor: 'rgba(14,117,222,1)'
        });
        TweenMax.set($(this).find('.diary-entry-title'), {
            color: 'rgba(255,255,255,1)'
        });
        TweenMax.set($(this).find('.diary-entry-icon'), {
            opacity: 1
        });
        TweenMax.set($(this).find('.diary-entry-icon-alt'), {
            opacity: 0
        });
    }
});

//DIARY ENTRY CLICK
mPro.diaryEntry.on('click', function () {
    mPro.favoritesSection.hide();
    mPro.entrySectionTabs.show();
    mPro.eatingInSection.show();
    mPro.eatingOutSection.hide();
    mPro.entrySectionNavItemFavorites.removeClass('entry-nav-item-active').removeClass('entry-nav-item-inactive').addClass('entry-nav-item-inactive');
    mPro.entrySectionNavItemMeals.removeClass('entry-nav-item-active').removeClass('entry-nav-item-inactive').addClass('entry-nav-item-active');
    mPro.diaryEntrySectionContainer.show();
    mPro.eatingInTab.removeClass('inactive-entry-tab').removeClass('active-entry-tab').addClass('active-entry-tab');
    TweenMax.set(mPro.eatingInTab, {
        backgroundColor: 'rgba(' + mPro.whiteRGB + ',1)',
        color: 'rgba(' + mPro.bbBlueEntryRGB + ',1)'
    });
    mPro.eatingOutTab.removeClass('active-entry-tab').removeClass('inactive-entry-tab').addClass('inactive-entry-tab');
    TweenMax.set(mPro.eatingOutTab, {
        backgroundColor: 'none',
        color: 'rgba(' + mPro.whiteRGB + ',1)'
    });

    mPro.eatingInActive = true;
    mPro.eatingOutActive = false;
    //    TweenMax.to(mPro.container, mPro.diaryEntrySectionDuration, {
    //        top: '-' + mPro.container.height() * 0.25,
    //        ease: mPro.diaryEntrySectionEase
    //    }, 0);
    //    TweenMax.to(mPro.diaryEntrySectionContainerBackground, mPro.diaryEntrySectionDuration, {
    //        opacity: 1,
    //        ease: mPro.diaryEntrySectionEase
    //    }, 0);
    TweenMax.set(mPro.entrySectionNav, {
        bottom: 0
    });
    //    TweenMax.to(mPro.entrySectionNav, mPro.diaryEntrySectionDuration, {
    //        bottom: 0,
    //        ease: mPro.diaryEntrySectionEase
    //    }, 0);
});

//BREAKFAST ENTRY CLICK
mPro.breakfastEntry.on('click', function () {
    mPro.breakfastActive = true;
    mPro.breakfastSection.removeClass('inactive-section').removeClass('active-section').addClass('active-section');
    mPro.diaryEntrySection.not('#breakfast-section').removeClass('inactive-section').removeClass('active-section').addClass('inactive-section');
    TweenMax.set(mPro.breakfastSection, {
        top: 0
    });
    //    TweenMax.to(mPro.breakfastSection, mPro.diaryEntrySectionDuration, {
    //        top: 0,
    //        ease: mPro.diaryEntrySectionEase
    //    }, 0);
});

//LUNCH ENTRY CLICK
mPro.lunchEntry.on('click', function () {
    mPro.lunchActive = true;
    mPro.lunchSection.removeClass('inactive-section').removeClass('active-section').addClass('active-section');
    mPro.diaryEntrySection.not('#lunch-section').removeClass('inactive-section').removeClass('active-section').addClass('inactive-section');
    TweenMax.set(mPro.lunchSection, {
        top: 0
    });
    //    TweenMax.to(mPro.lunchSection, mPro.diaryEntrySectionDuration, {
    //        top: 0,
    //        ease: mPro.diaryEntrySectionEase
    //    }, 0);
});

//DINNER ENTRY CLICK
mPro.dinnerEntry.on('click', function () {
    mPro.dinnerActive = true;
    mPro.dinnerSection.removeClass('inactive-section').removeClass('active-section').addClass('active-section');
    mPro.diaryEntrySection.not('#dinner-section').removeClass('inactive-section').removeClass('active-section').addClass('inactive-section');
    TweenMax.set(mPro.dinnerSection, {
        top: 0
    });
    //    TweenMax.to(mPro.dinnerSection, mPro.diaryEntrySectionDuration, {
    //        top: 0,
    //        ease: mPro.diaryEntrySectionEase
    //    }, 0);
});

//SNACK ENTRY CLICK
mPro.snackEntry.on('click', function () {
    mPro.snackActive = true;
    mPro.snackSection.removeClass('inactive-section').removeClass('active-section').addClass('active-section');
    mPro.diaryEntrySection.not('#snack-section').removeClass('inactive-section').removeClass('active-section').addClass('inactive-section');
    TweenMax.set(mPro.snackSection, {
        top: 0
    });
    //    TweenMax.to(mPro.snackSection, mPro.diaryEntrySectionDuration, {
    //        top: 0,
    //        ease: mPro.diaryEntrySectionEase
    //    }, 0);
});

//DIARY ENTRY SECTION CONTAINER CLOSE TAP REGION CLICK
mPro.diaryEntrySectionContainerCloseTapRegion.on('click', function () {
    mPro.breakfastActive = false;
    mPro.lunchActive = false;
    mPro.dinnerActive = false;
    mPro.snackActive = false;
    if (mPro.totalBreakfastCalories !== 0) {
        mPro.breakfastEntry.addClass('entry-added');
        mPro.breakfastEntryCalories.html(mPro.totalBreakfastCalories);
        TweenMax.set(mPro.breakfastEntry, {
            backgroundColor: 'rgba(255,255,255,1)'
        });
        TweenMax.set(mPro.breakfastEntry.find('.diary-entry-title'), {
            color: 'rgba(' + mPro.bbBlueRGB + ',1)'
        });
        TweenMax.set(mPro.breakfastEntry.find('.diary-entry-calories'), {
            opacity: 1
        });
        TweenMax.set(mPro.breakfastEntry.find('.diary-entry-icon'), {
            opacity: 0
        });
        TweenMax.set(mPro.breakfastEntry.find('.diary-entry-icon-alt'), {
            opacity: 0
        });
    }
    if (mPro.totalLunchCalories !== 0) {
        mPro.lunchEntry.addClass('entry-added');
        mPro.lunchEntryCalories.html(mPro.totalLunchCalories);
        TweenMax.set(mPro.lunchEntry, {
            backgroundColor: 'rgba(255,255,255,1)'
        });
        TweenMax.set(mPro.lunchEntry.find('.diary-entry-title'), {
            color: 'rgba(' + mPro.bbBlueRGB + ',1)'
        });
        TweenMax.set(mPro.lunchEntry.find('.diary-entry-calories'), {
            opacity: 1
        });
        TweenMax.set(mPro.lunchEntry.find('.diary-entry-icon'), {
            opacity: 0
        });
        TweenMax.set(mPro.lunchEntry.find('.diary-entry-icon-alt'), {
            opacity: 0
        });
    }
    if (mPro.totalDinnerCalories !== 0) {
        mPro.dinnerEntry.addClass('entry-added');
        mPro.dinnerEntryCalories.html(mPro.totalDinnerCalories);
        TweenMax.set(mPro.dinnerEntry, {
            backgroundColor: 'rgba(255,255,255,1)'
        });
        TweenMax.set(mPro.dinnerEntry.find('.diary-entry-title'), {
            color: 'rgba(' + mPro.bbBlueRGB + ',1)'
        });
        TweenMax.set(mPro.dinnerEntry.find('.diary-entry-calories'), {
            opacity: 1
        });
        TweenMax.set(mPro.dinnerEntry.find('.diary-entry-icon'), {
            opacity: 0
        });
        TweenMax.set(mPro.dinnerEntry.find('.diary-entry-icon-alt'), {
            opacity: 0
        });
    }
    if (mPro.totalSnackCalories !== 0) {
        mPro.snackEntry.addClass('entry-added');
        mPro.snackEntryCalories.html(mPro.totalSnackCalories);
        TweenMax.set(mPro.snackEntry, {
            backgroundColor: 'rgba(255,255,255,1)'
        });
        TweenMax.set(mPro.snackEntry.find('.diary-entry-title'), {
            color: 'rgba(' + mPro.bbBlueRGB + ',1)'
        });
        TweenMax.set(mPro.snackEntry.find('.diary-entry-calories'), {
            opacity: 1
        });
        TweenMax.set(mPro.snackEntry.find('.diary-entry-icon'), {
            opacity: 0
        });
        TweenMax.set(mPro.snackEntry.find('.diary-entry-icon-alt'), {
            opacity: 0
        });
    }

    if ((mPro.foodHad === true) && (mPro.barAppeared === false)) {
        mPro.standardTab.removeClass('inactive-nutrition-tab').removeClass('active-nutrition-tab').addClass('active-nutrition-tab');
        TweenMax.set(mPro.standardTab, {
            backgroundColor: 'rgba(' + mPro.bbBlueRGB + ',1)',
            color: 'rgba(' + mPro.whiteRGB + ',1)'
        });
        mPro.containersTab.removeClass('active-nutrition-tab').removeClass('inactive-nutrition-tab').addClass('inactive-nutrition-tab');
        TweenMax.set(mPro.containersTab, {
            backgroundColor: 'rgba(' + mPro.whiteRGB + ',1)',
            color: 'rgba(' + mPro.bbBlueRGB + ',1)'
        });
        mPro.standardActive = true;
        mPro.containersActive = false;
        mPro.standard.show();
        mPro.containers.hide();
    }
    mPro.diaryEntrySectionContainer.hide();
    if ((mPro.foodHad === true) && (mPro.barAppeared === false)) {
        revealCalorieBreakdownBar();
    }
    //    TweenMax.to(mPro.container, mPro.diaryEntrySectionDuration, {
    //        top: 0,
    //        ease: mPro.diaryEntrySectionEase
    //    }, 0);
    //    TweenMax.to(mPro.diaryEntrySectionContainerBackground, mPro.diaryEntrySectionDuration, {
    //        opacity: 0,
    //        ease: mPro.diaryEntrySectionEase
    //    }, 0);
    TweenMax.to(mPro.entrySectionNav, mPro.diaryEntrySectionDuration, {
        bottom: '-' + mPro.container.width() * 0.13,
        ease: mPro.diaryEntrySectionEase
    }, 0);
})

mPro.entrySectionTile.on('click', function () {
    mPro.tileClicked = true;
    TweenMax.to(mPro.diaryEntrySectionContainer, 0.5, {
        x: '-' + mPro.container.width() * 0.5,
        ease: Quart.easeOut
    }, 0);
    TweenMax.to(mPro.diaryEntryItemContainer, 0.5, {
        x: 0,
        ease: Quart.easeOut
    }, 0);

    switch (true) {
    case $(this).hasClass('chicken-salad-tile'):
        TweenMax.set(mPro.chickenSaladDetails, {
            opacity: 1,
            pointerEvents: 'auto'
        });
        TweenMax.set(mPro.diaryEntryItem.not('#chicken-salad-details'), {
            opacity: 0,
            pointerEvents: 'none'
        });
        break;
    case $(this).hasClass('salmon-tile'):
        TweenMax.set(mPro.salmonDetails, {
            opacity: 1,
            pointerEvents: 'auto'
        });
        TweenMax.set(mPro.diaryEntryItem.not('#salmon-details'), {
            opacity: 0,
            pointerEvents: 'none'
        });
        break;
    case $(this).hasClass('meatballs-tile'):
        TweenMax.set(mPro.meatballsDetails, {
            opacity: 1,
            pointerEvents: 'auto'
        });
        TweenMax.set(mPro.diaryEntryItem.not('#meatballs-details'), {
            opacity: 0,
            pointerEvents: 'none'
        });
        break;
    }
});

mPro.diaryEntryItemContainerCloseTapRegion.on('click', function () {
    mPro.tileClicked = false;
    TweenMax.to(mPro.diaryEntrySectionContainer, 0.5, {
        x: 0,
        ease: Quart.easeOut
    }, 0);
    TweenMax.to(mPro.diaryEntryItemContainer, 0.5, {
        x: mPro.container.width(),
        ease: Quart.easeOut,
        onComplete: function () {
            TweenMax.set(mPro.diaryEntryItem, {
                opacity: 0,
                pointerEvents: 'none'
            });
        }
    }, 0);
});

//DIARY ENTRY ITEM ADD BUTTON ON TOUCH START
mPro.diaryEntryItemAddButton.on('touchstart', function () {
    TweenMax.set($(this).find('.diary-entry-item-add-button-bg-inactive'), {
        opacity: 0
    });
    TweenMax.set($(this).find('.diary-entry-item-add-button-bg-active'), {
        opacity: 1
    });
    TweenMax.set($(this).find('.diary-entry-item-add-button-plus'), {
        color: mPro.bbBlueColor
    });
});

//DIARY ENTRY ITEM ADD BUTTON ON TOUCH END
mPro.diaryEntryItemAddButton.on('touchend', function () {
    TweenMax.set($(this).find('.diary-entry-item-add-button-bg-inactive'), {
        opacity: 1
    });
    TweenMax.set($(this).find('.diary-entry-item-add-button-bg-active'), {
        opacity: 0
    });
    TweenMax.set($(this).find('.diary-entry-item-add-button-plus'), {
        color: mPro.whiteColor
    });
});

//DIARY ENTRY ITEM ADD BUTTON CLICK
mPro.diaryEntryItemAddButton.on('click', function () {
    mPro.foodHad = true;
    TweenMax.to($(this), 0.5, {
        scale: 0,
        ease: Back.easeIn,
        onComplete: function () {
            mPro.tileClicked = false;
            TweenMax.to(mPro.diaryEntrySectionContainer, 0.5, {
                x: 0,
                ease: Quart.easeOut
            }, 0);
            TweenMax.to(mPro.diaryEntryItemContainer, 0.5, {
                x: mPro.container.width(),
                ease: Quart.easeOut,
                onComplete: function () {
                    TweenMax.set(mPro.diaryEntryItemFpo, {
                        opacity: 0
                    });
                    TweenMax.set(mPro.diaryEntryItemAddButton, {
                        scale: 1
                    });
                }
            }, 0);
        }
    }, 0);

    switch (true) {
    case $(this).hasClass('chicken-add'):
        mPro.chickenSaladSelected = true;
        mPro.totalProtein += 27;
        mPro.totalFat += 12;
        mPro.totalCarbohydrates += 20;
        mPro.totalProteinCalories = mPro.totalProtein * 4;
        mPro.totalFatCalories = mPro.totalFat * 9;
        mPro.totalCarbohydratesCalories = mPro.totalCarbohydrates * 4;
        mPro.totalCalories = (mPro.totalProteinCalories + mPro.totalFatCalories + mPro.totalCarbohydratesCalories);
        mPro.totalProteinPercentage = Math.round((mPro.totalProteinCalories / mPro.totalCalories) * 100);
        mPro.totalFatPercentage = Math.round((mPro.totalFatCalories / mPro.totalCalories) * 100);
        mPro.totalCarbohydratesPercentage = Math.round((mPro.totalCarbohydratesCalories / mPro.totalCalories) * 100);

        console.log('Total Protein Grams:' + mPro.totalProtein);
        console.log('Total Fat Grams:' + mPro.totalFat);
        console.log('Total Carbohydrate Grams:' + mPro.totalCarbohydrates);
        console.log('Total Protein Calories:' + mPro.totalProteinCalories);
        console.log('Total Fat Calories:' + mPro.totalFatCalories);
        console.log('Total Carbohydrate Calories:' + mPro.totalCarbohydratesCalories);
        console.log('Total Calories:' + mPro.totalCalories);

        mPro.proteinPercentageText.html(mPro.totalProteinPercentage + '<span class="calorie-breakdown-bar-section-percentage-mark">%</span>');
        mPro.fatPercentageText.html(mPro.totalFatPercentage + '<span class="calorie-breakdown-bar-section-percentage-mark">%</span>');
        mPro.carbohydratesPercentageText.html(mPro.totalCarbohydratesPercentage + '<span class="calorie-breakdown-bar-section-percentage-mark">%</span>');

        TweenMax.set(mPro.calorieBreakdownBarProteinSection, {
            width: mPro.totalProteinPercentage + '%'
        });
        TweenMax.set(mPro.calorieBreakdownBarFatSection, {
            width: mPro.totalFatPercentage + '%'
        });
        TweenMax.set(mPro.calorieBreakdownBarCarbohydratesSection, {
            width: mPro.totalCarbohydratesPercentage + '%'
        });

        mPro.proteinCount.html(mPro.totalProtein + 'g');
        mPro.fatCount.html(mPro.totalFat + 'g');
        mPro.carbohydratesCount.html(mPro.totalCarbohydrates + 'g');
        switch (true) {
        case mPro.breakfastActive:
            mPro.totalBreakfastCalories += 296;
            break;
        case mPro.lunchActive:
            mPro.totalLunchCalories += 296;
            break;
        case mPro.dinnerActive:
            mPro.totalDinnerCalories += 296;
            break;
        case mPro.snackActive:
            mPro.totalSnackCalories += 296;
            break;
        }
        break;
    case $(this).hasClass('salmon-add'):
        mPro.salmonSelected = true;
        mPro.totalProtein += 30;
        mPro.totalFat += 9;
        mPro.totalCarbohydrates += 25;
        mPro.totalProteinCalories = mPro.totalProtein * 4;
        mPro.totalFatCalories = mPro.totalFat * 9;
        mPro.totalCarbohydratesCalories = mPro.totalCarbohydrates * 4;
        mPro.totalCalories = (mPro.totalProteinCalories + mPro.totalFatCalories + mPro.totalCarbohydratesCalories);
        mPro.totalProteinPercentage = Math.round((mPro.totalProteinCalories / mPro.totalCalories) * 100);
        mPro.totalFatPercentage = Math.round((mPro.totalFatCalories / mPro.totalCalories) * 100);
        mPro.totalCarbohydratesPercentage = Math.round((mPro.totalCarbohydratesCalories / mPro.totalCalories) * 100);

        console.log('Total Protein Grams:' + mPro.totalProtein);
        console.log('Total Fat Grams:' + mPro.totalFat);
        console.log('Total Carbohydrate Grams:' + mPro.totalCarbohydrates);
        console.log('Total Protein Calories:' + mPro.totalProteinCalories);
        console.log('Total Fat Calories:' + mPro.totalFatCalories);
        console.log('Total Carbohydrate Calories:' + mPro.totalCarbohydratesCalories);
        console.log('Total Calories:' + mPro.totalCalories);

        mPro.proteinPercentageText.html(mPro.totalProteinPercentage + '<span class="calorie-breakdown-bar-section-percentage-mark">%</span>');
        mPro.fatPercentageText.html(mPro.totalFatPercentage + '<span class="calorie-breakdown-bar-section-percentage-mark">%</span>');
        mPro.carbohydratesPercentageText.html(mPro.totalCarbohydratesPercentage + '<span class="calorie-breakdown-bar-section-percentage-mark">%</span>');

        TweenMax.set(mPro.calorieBreakdownBarProteinSection, {
            width: mPro.totalProteinPercentage + '%'
        });
        TweenMax.set(mPro.calorieBreakdownBarFatSection, {
            width: mPro.totalFatPercentage + '%'
        });
        TweenMax.set(mPro.calorieBreakdownBarCarbohydratesSection, {
            width: mPro.totalCarbohydratesPercentage + '%'
        });

        mPro.proteinCount.html(mPro.totalProtein + 'g');
        mPro.fatCount.html(mPro.totalFat + 'g');
        mPro.carbohydratesCount.html(mPro.totalCarbohydrates + 'g');
        switch (true) {
        case mPro.breakfastActive:
            mPro.totalBreakfastCalories += 301;
            break;
        case mPro.lunchActive:
            mPro.totalLunchCalories += 301;
            break;
        case mPro.dinnerActive:
            mPro.totalDinnerCalories += 301;
            break;
        case mPro.snackActive:
            mPro.totalSnackCalories += 301;
            break;
        }
        break;
    case $(this).hasClass('meatballs-add'):
        mPro.meatballsSelected = true;
        mPro.totalProtein += 27;
        mPro.totalFat += 12;
        mPro.totalCarbohydrates += 20;
        mPro.totalProteinCalories = mPro.totalProtein * 4;
        mPro.totalFatCalories = mPro.totalFat * 9;
        mPro.totalCarbohydratesCalories = mPro.totalCarbohydrates * 4;
        mPro.totalCalories = (mPro.totalProteinCalories + mPro.totalFatCalories + mPro.totalCarbohydratesCalories);
        mPro.totalProteinPercentage = Math.round((mPro.totalProteinCalories / mPro.totalCalories) * 100);
        mPro.totalFatPercentage = Math.round((mPro.totalFatCalories / mPro.totalCalories) * 100);
        mPro.totalCarbohydratesPercentage = Math.round((mPro.totalCarbohydratesCalories / mPro.totalCalories) * 100);

        console.log('Total Protein Grams:' + mPro.totalProtein);
        console.log('Total Fat Grams:' + mPro.totalFat);
        console.log('Total Carbohydrate Grams:' + mPro.totalCarbohydrates);
        console.log('Total Protein Calories:' + mPro.totalProteinCalories);
        console.log('Total Fat Calories:' + mPro.totalFatCalories);
        console.log('Total Carbohydrate Calories:' + mPro.totalCarbohydratesCalories);
        console.log('Total Calories:' + mPro.totalCalories);

        mPro.proteinPercentageText.html(mPro.totalProteinPercentage + '<span class="calorie-breakdown-bar-section-percentage-mark">%</span>');
        mPro.fatPercentageText.html(mPro.totalFatPercentage + '<span class="calorie-breakdown-bar-section-percentage-mark">%</span>');
        mPro.carbohydratesPercentageText.html(mPro.totalCarbohydratesPercentage + '<span class="calorie-breakdown-bar-section-percentage-mark">%</span>');

        TweenMax.set(mPro.calorieBreakdownBarProteinSection, {
            width: mPro.totalProteinPercentage + '%'
        });
        TweenMax.set(mPro.calorieBreakdownBarFatSection, {
            width: mPro.totalFatPercentage + '%'
        });
        TweenMax.set(mPro.calorieBreakdownBarCarbohydratesSection, {
            width: mPro.totalCarbohydratesPercentage + '%'
        });

        mPro.proteinCount.html(mPro.totalProtein + 'g');
        mPro.fatCount.html(mPro.totalFat + 'g');
        mPro.carbohydratesCount.html(mPro.totalCarbohydrates + 'g');
        switch (true) {
        case mPro.breakfastActive:
            mPro.totalBreakfastCalories += 296;
            break;
        case mPro.lunchActive:
            mPro.totalLunchCalories += 296;
            break;
        case mPro.dinnerActive:
            mPro.totalDinnerCalories += 296;
            break;
        case mPro.snackActive:
            mPro.totalSnackCalories += 296;
            break;
        }
        break;
    }
});

//ENTRY SECTION NAV ITEM FAVORITES CLICK
mPro.entrySectionNavItemFavorites.on('click', function () {
    mPro.favoritesSection.show();
    mPro.mealsSection.hide();
    mPro.entrySectionNavItemFavorites.removeClass('entry-nav-item-active').removeClass('entry-nav-item-inactive').addClass('entry-nav-item-active');
    mPro.entrySectionNavItemMeals.removeClass('entry-nav-item-active').removeClass('entry-nav-item-inactive').addClass('entry-nav-item-inactive');
});

//ENTRY SECTION NAV ITEM MEALS CLICK
mPro.entrySectionNavItemMeals.on('click', function () {
    mPro.favoritesSection.hide();
    mPro.entrySectionTabs.show();
    if (mPro.eatingInActive === true) {
        mPro.eatingInSection.show();
        mPro.eatingOutSection.hide();
    }
    if (mPro.eatingOutActive === true) {
        mPro.eatingInSection.hide();
        mPro.eatingOutSection.show();
    }
    mPro.entrySectionNavItemFavorites.removeClass('entry-nav-item-active').removeClass('entry-nav-item-inactive').addClass('entry-nav-item-inactive');
    mPro.entrySectionNavItemMeals.removeClass('entry-nav-item-active').removeClass('entry-nav-item-inactive').addClass('entry-nav-item-active');
});

//OFFLINE SECTION HEADER TAP REGION ON CLICK
mPro.offlineSectionHeaderTapRegion.on('click', function () {
    toggleOfflineSaves();
});

function toggleOfflineSaves() {

    switch (true) {
    case mPro.offlineSavesEmpty:
        TweenMax.set(mPro.offlineSectionHeaderSavedText, {
            color: 'rgba(' + mPro.bbBlueRGB + ',1)'
        });
        mPro.savedCurrentCount.html(mPro.offlineSectionSave.length);
        mPro.offlineSavesEmpty = false;
        console.log('offlineSavesEmpty: ' + mPro.offlineSavesEmpty);
        mPro.offlineSectionNoSavesContainer.hide();
        mPro.offlineSectionSavesContainer.show();
        break;
    case !mPro.offlineSavesEmpty:
        TweenMax.set(mPro.offlineSectionHeaderSavedText, {
            color: 'rgba(' + mPro.blackRGB + ',0.3)'
        });
        mPro.savedCurrentCount.html(0);
        mPro.offlineSavesEmpty = true;
        console.log('offlineSavesEmpty: ' + mPro.offlineSavesEmpty);
        mPro.offlineSectionNoSavesContainer.show();
        mPro.offlineSectionSavesContainer.hide();
        break;
    }
}

//WORKOUTS SECTION SIGN IN BUTTON ON TOUCH START
mPro.workoutsSectionSignInButton.on('touchstart', function () {
    TweenMax.to($(this), 0.25, {
        backgroundColor: 'rgba(' + mPro.bbBlueSignInDarkRGB + ',1)'
    }, 0);
});

//WORKOUTS SECTION SIGN IN BUTTON ON TOUCH END
mPro.workoutsSectionSignInButton.on('touchend', function () {
    TweenMax.to($(this), 0.25, {
        backgroundColor: 'rgba(' + mPro.bbBlueSignInRGB + ',1)'
    }, 0);
});

//WORKOUTS SECTION SIGN IN BUTTON ON CLICK
mPro.workoutsSectionSignInButton.on('click', function () {
    TweenMax.to(mPro.workoutsSectionSignInContainer, 0.75, {
        height: 0,
        ease: Expo.easeInOut,
        onComplete: function () {
            mPro.workoutsSectionSignInContainer.hide();
        }
    }, 0);
});

//POPULAR PROGRAMS HEADER TAP REGION ON CLICK
mPro.popularProgramsHeaderTapRegion.on('click', function () {
    mPro.workoutsListViewContainer.show();
    mPro.popularProgramsListView.show();
});

//PREMIUM CONTENT HEADER TAP REGION ON CLICK
mPro.premiumContentHeaderTapRegion.on('click', function () {
    mPro.workoutsListViewContainer.show();
    mPro.premiumContentListView.show();
});

//LIST VIEW HEADER TAP REGION ON CLICK
mPro.listViewHeaderTapRegion.on('click', function () {
    mPro.workoutsListViewContainer.hide();
    mPro.workoutsListView.hide();
    console.log('sdsd');
});

//LIGHT SAVE TILE ON CLICK
mPro.offlineSectionSaveTapRegion.on('click', function () {
    switch (true) {
    case $(this).hasClass('slide-active'):
        $(this).removeClass('slide-active');
        TweenMax.to($(this).siblings('.offline-section-save-thumb'), mPro.offlineSaveTileDuration, {
            x: 0,
            ease: mPro.offlineSaveTileEase
        }, 0);
        TweenMax.to($(this).siblings('.offline-section-save-text'), mPro.offlineSaveTileDuration, {
            x: 0,
            ease: mPro.offlineSaveTileEase
        }, 0);
        TweenMax.to($(this).siblings('.offline-section-save-delete-container'), mPro.offlineSaveTileDuration, {
            x: mPro.container.width() * 0.295,
            ease: mPro.offlineSaveTileEase
        }, 0);
        break;
    case !($(this).hasClass('slide-active')):
        $(this).addClass('slide-active');
        TweenMax.to($(this).siblings('.offline-section-save-thumb'), mPro.offlineSaveTileDuration, {
            x: '-' + mPro.container.width() * 0.295,
            ease: mPro.offlineSaveTileEase
        }, 0);
        TweenMax.to($(this).siblings('.offline-section-save-text'), mPro.offlineSaveTileDuration, {
            x: '-' + mPro.container.width() * 0.295,
            ease: mPro.offlineSaveTileEase
        }, 0);
        TweenMax.to($(this).siblings('.offline-section-save-delete-container'), mPro.offlineSaveTileDuration, {
            x: 0,
            ease: mPro.offlineSaveTileEase
        }, 0);
        break;
    }
});

//SAVE DELETE CONTAINER ON CLICK
mPro.offlineSectionSaveDeleteContainer.on('click', function () {
    $(this).parent('.offline-section-save').removeClass('save-active').addClass('save-inactive');
    animateOfflineSectionSaveBackgrounds();
    $(this).removeClass('slide-active');
    TweenMax.set($(this).parent('.offline-section-save'), {
        pointerEvents: 'none'
    });
    mPro.offlineSectionSaveCount--;
    TweenMax.to($(this).find('.offline-section-save-delete-bg'), mPro.offlineSaveTileDuration, {
        width: mPro.container.width(),
        ease: mPro.offlineSaveTileEase
    }, 0);
    TweenMax.to($(this).find('.offline-section-save-delete-content'), mPro.offlineSaveTileDuration, {
        opacity: 0,
        ease: mPro.offlineSaveTileEase
    }, 0);
    mPro.savedCurrentCount.html(mPro.offlineSectionSaveCount);
    if (mPro.offlineSectionSaveCount === 0) {
        console.log('empty');
        TweenMax.to(mPro.offlineSectionSavesContainer.find('#offline-section-saves-body'), 0.5, {
            opacity: 0
        }, 0);
        TweenMax.to(mPro.offlineSectionSavesContainer.find('#offline-section-saves-unavailable'), 0.5, {
            opacity: 0
        }, 0);
        TweenMax.to(mPro.offlineSectionHeaderSavedText, mPro.offlineSaveTileDuration, {
            color: 'rgba(' + mPro.blackRGB + ',0.3)',
            onComplete: function () {
                mPro.offlineSectionSavesContainer.hide();
                TweenMax.set(mPro.offlineSectionNoSavesContainer, {
                    opacity: 0
                });
                mPro.offlineSectionNoSavesContainer.show();
                TweenMax.to(mPro.offlineSectionNoSavesContainer, 0.5, {
                    opacity: 1
                }, 0);
            }
        }, 0);
        mPro.offlineSectionHeaderTapRegion.hide();
    } else {
        console.log('nope');
    }
    TweenMax.to($(this).parent('.offline-section-save'), mPro.offlineSaveTileDuration, {
        height: 0,
        ease: mPro.offlineSaveTileEase
    }, 0);
    TweenMax.to($(this).siblings('.offline-section-save-thumb'), mPro.offlineSaveTileDuration, {
        opacity: 0,
        ease: mPro.offlineSaveTileEase
    }, 0);
    TweenMax.to($(this).siblings('.offline-section-save-text'), mPro.offlineSaveTileDuration, {
        opacity: 0,
        ease: mPro.offlineSaveTileEase
    }, 0);
    TweenMax.to($(this).siblings('.offline-section-save-delete-container'), mPro.offlineSaveTileDuration, {
        x: mPro.container.width() * 0.295,
        ease: mPro.offlineSaveTileEase
    }, 0);
});

//OFFLINE SECTION SAVE DELETE BACKGROUND ON TOUCH START
mPro.offlineSectionSaveDeleteContainer.on('touchstart', function () {
    TweenMax.to($(this).find('.offline-section-save-delete-bg'), 0.5, {
        backgroundColor: 'rgba(179,44,41,1)',
        ease: Expo.easeOut
    }, 0);
});

//OFFLINE SECTION SAVE DELETE BACKGROUND ON TOUCH END
mPro.offlineSectionSaveDeleteContainer.on('touchend', function () {
    TweenMax.to($(this).find('.offline-section-save-delete-bg'), 0.5, {
        backgroundColor: 'rgba(252,62,57,1)',
        ease: Expo.easeOut
    }, 0);
});

//AB RIPPER B MINUTES ON CLICK
mPro.abRipperBMinutes.on('click', function () {
    console.log('ok');
    switch (true) {
    case $(this).hasClass('active-circle'):
        $(this).removeClass('active-circle');
        TweenMax.set($(this), {
            opacity: 0.5
        });
        $(this).find('.profile-section-recent-activity-minutes-count').html('---');
        break;
    case !($(this).hasClass('active-circle')):
        $(this).addClass('active-circle');
        TweenMax.set($(this), {
            opacity: 1
        });
        $(this).find('.profile-section-recent-activity-minutes-count').html(32);
        break;
    }
});

//AB RIPPER B CALORIES ON CLICK
mPro.abRipperBCalories.on('click', function () {
    console.log('ok');
    switch (true) {
    case $(this).hasClass('active-circle'):
        $(this).removeClass('active-circle');
        TweenMax.set($(this), {
            opacity: 0.5
        });
        $(this).find('.profile-section-recent-activity-calories-count').html('---');
        break;
    case !($(this).hasClass('active-circle')):
        $(this).addClass('active-circle');
        TweenMax.set($(this), {
            opacity: 1
        });
        $(this).find('.profile-section-recent-activity-calories-count').html(400);
        break;
    }
});

//AB RIPPER B EFFORT ON CLICK
mPro.abRipperBEffort.on('click', function () {
    console.log('ok');
    switch (true) {
    case $(this).hasClass('active-circle'):
        $(this).removeClass('active-circle');
        TweenMax.set($(this), {
            opacity: 0.5,
            paddingTop: mPro.container.width() * 0.07,
            height: mPro.container.width() * 0.225
        });
        TweenMax.set($(this).find('.profile-section-recent-activity-style-count'), {
            fontSize: mPro.container.width() * 0.08
        });
        TweenMax.set($(this).find('.profile-section-recent-activity-style-title'), {
            marginTop: mPro.container.width() * 0.015
        });
        $(this).find('.profile-section-recent-activity-style-count').html('---');
        break;
    case !($(this).hasClass('active-circle')):
        $(this).addClass('active-circle');
        TweenMax.set($(this), {
            opacity: 1,
            paddingTop: mPro.container.width() * 0.095,
            height: mPro.container.width() * 0.2
        });
        TweenMax.set($(this).find('.profile-section-recent-activity-style-count'), {
            fontSize: mPro.container.width() * 0.05
        });
        TweenMax.set($(this).find('.profile-section-recent-activity-style-title'), {
            marginTop: mPro.container.width() * 0.02
        });
        $(this).find('.profile-section-recent-activity-style-count').html('Medium');
        break;
    }
});

//SWEAT B MINUTES ON CLICK
mPro.sweatBMinutes.on('click', function () {
    console.log('ok');
    switch (true) {
    case $(this).hasClass('active-circle'):
        $(this).removeClass('active-circle');
        TweenMax.set($(this), {
            opacity: 0.5
        });
        $(this).find('.profile-section-recent-activity-minutes-count').html('---');
        break;
    case !($(this).hasClass('active-circle')):
        $(this).addClass('active-circle');
        TweenMax.set($(this), {
            opacity: 1
        });
        $(this).find('.profile-section-recent-activity-minutes-count').html(22);
        break;
    }
});

//SWEAT B CALORIES ON CLICK
mPro.sweatBCalories.on('click', function () {
    console.log('ok');
    switch (true) {
    case $(this).hasClass('active-circle'):
        $(this).removeClass('active-circle');
        TweenMax.set($(this), {
            opacity: 0.5
        });
        $(this).find('.profile-section-recent-activity-calories-count').html('---');
        break;
    case !($(this).hasClass('active-circle')):
        $(this).addClass('active-circle');
        TweenMax.set($(this), {
            opacity: 1
        });
        $(this).find('.profile-section-recent-activity-calories-count').html(359);
        break;
    }
});

//SWEAT B HEART RATE ON CLICK
mPro.sweatBHeartRate.on('click', function () {
    console.log('ok');
    switch (true) {
    case $(this).hasClass('active-circle'):
        $(this).find('.green-heartrate-ring').hide();
        $(this).removeClass('active-circle');
        TweenMax.set($(this), {
            opacity: 0.5
        });
        $(this).find('.profile-section-recent-activity-style-count').html('---');
        break;
    case !($(this).hasClass('active-circle')):
        $(this).find('.green-heartrate-ring').show();
        $(this).addClass('active-circle');
        TweenMax.set($(this), {
            opacity: 1
        });
        $(this).find('.profile-section-recent-activity-style-count').html(129);
        break;
    }
});

//PROGRAM CHAPTER ON CLICK
mPro.programChapter.on('click', function () {
    var currentArrow = $(this).find('.program-chapter-header-arrow');
    var currentChapterExpanded = $(this).next('.program-chapter-expanded');
    var currentChapterItems = currentChapterExpanded.find('.program-chapter-item');
    var currentChapterItemsLength = currentChapterItems.length;
    switch (true) {
    case !($(this).hasClass('expanded')):
        $(this).addClass('expanded');
        TweenMax.to(currentChapterExpanded, 0.5, {
            height: currentChapterItemsLength * currentChapterItems.outerHeight(),
            ease: Quart.easeInOut
        }, 0);
        TweenMax.to(currentArrow, 0.5, {
            scaleY: -1,
            ease: Quart.easeInOut
        }, 0);
        break;
    case $(this).hasClass('expanded'):
        $(this).removeClass('expanded');
        TweenMax.to(currentChapterExpanded, 0.5, {
            height: 0,
            ease: Quart.easeInOut
        }, 0);
        TweenMax.to(currentArrow, 0.5, {
            scaleY: 1,
            ease: Quart.easeInOut
        }, 0);
        break;
    }
});

//SETTINGS SECTION ROW SWITCH CONTAINER ON CLICK
mPro.settingsSectionRowSwitchContainer.on('click', function () {
    switch (true) {
    case $(this).hasClass('toggled'):
        $(this).removeClass('toggled');
        TweenMax.to($(this).find('.settings-section-row-switch-circle'), 0.5, {
            x: 0,
            ease: Expo.easeOut
        }, 0);
        TweenMax.to($(this).find('.settings-section-row-switch-bg'), 0.5, {
            scale: 0,
            ease: Expo.easeOut
        }, 0);
        TweenMax.to($(this), 0.5, {
            backgroundColor: 'rgba(14,117,222,1)'
        }, 0);
        break;
    case !($(this).hasClass('toggled')):
        $(this).addClass('toggled');
        TweenMax.to($(this).find('.settings-section-row-switch-circle'), 0.5, {
            x: '-' + (mPro.settingsSectionRowSwitchContainer.width() - mPro.settingsSectionRowSwitchCircle.width()),
            ease: Expo.easeOut
        }, 0);
        TweenMax.to($(this).find('.settings-section-row-switch-bg'), 0.5, {
            scale: 0.9,
            ease: Expo.easeOut
        }, 0);
        TweenMax.to($(this), 0.5, {
            backgroundColor: '#e5e5e5'
        }, 0);
        break;
    }
});

//PROGRAM DETAILS TAP REGION ON CLICK
mPro.programDetailsTapRegion.on('click', function () {
    switch (true) {
        //DETAILS COLLAPSE
    case $(this).hasClass('details-expanded'):
        $(this).removeClass('details-expanded');
        TweenMax.to($(this), 0.5, {
            height: mPro.container.width() * 0.677,
            ease: Expo.easeOut
        }, 0);
        TweenMax.to($(this).siblings('.program-details').find('.program-details-points'), 0.5, {
            opacity: 0,
            ease:Expo.easeOut
        }, 0);
        TweenMax.to($(this).siblings('.program-details'), 0.5, {
            height: mPro.container.width() * 0.077,
            ease: Expo.easeOut
        }, 0);
        TweenMax.to($(this).siblings('.program-details').find('.program-details-arrow'), 0.5, {
            scaleY: 1,
            ease:Expo.easeOut
        }, 0);
        TweenMax.to($(this).siblings('.program-details').find('.program-details-header'), 0.5, {
            opacity: 1,
            ease:Expo.easeOut
        }, 0);
        break;
        //DETAILS EXPAND
    case !($(this).hasClass('details-expanded')):
        $(this).addClass('details-expanded');
        TweenMax.to($(this), 0.5, {
            height: mPro.container.width() * 0.6 + ($(this).siblings('.program-details').find('.program-details-points').outerHeight() + mPro.container.width() * 0.04),
            ease: Expo.easeOut
        }, 0);
        TweenMax.to($(this).siblings('.program-details').find('.program-details-points'), 0.5, {
            opacity: 1,
            ease:Expo.easeOut
        }, 0);
        TweenMax.to($(this).siblings('.program-details'), 0.5, {
            height: ($(this).siblings('.program-details').find('.program-details-points').outerHeight() + mPro.container.width() * 0.04),
            ease: Expo.easeOut
        }, 0);
        TweenMax.to($(this).siblings('.program-details').find('.program-details-arrow'), 0.5, {
            scaleY: -1,
            ease:Expo.easeOut
        }, 0);
        TweenMax.to($(this).siblings('.program-details').find('.program-details-header'), 0.5, {
            opacity: 0,
            ease:Expo.easeOut
        }, 0);
        break;
    }
});

function setOfflineSaves() {

    switch (true) {
    case mPro.offlineSavesEmpty:
        TweenMax.set(mPro.offlineSectionHeaderSavedText, {
            color: 'rgba(' + mPro.blackRGB + ',0.3)'
        });
        mPro.savedCurrentCount.html(0);
        mPro.offlineSavesEmpty = true;
        console.log('offlineSavesEmpty: ' + mPro.offlineSavesEmpty);
        mPro.offlineSectionNoSavesContainer.show();
        mPro.offlineSectionSavesContainer.hide();
        break;
    case !mPro.offlineSavesEmpty:
        TweenMax.set(mPro.offlineSectionHeaderSavedText, {
            color: 'rgba(' + mPro.bbBlueRGB + ',1)'
        });
        mPro.savedCurrentCount.html(mPro.offlineSectionSave.length);
        mPro.offlineSavesEmpty = false;
        console.log('offlineSavesEmpty: ' + mPro.offlineSavesEmpty);
        mPro.offlineSectionNoSavesContainer.hide();
        mPro.offlineSectionSavesContainer.show();
        break;
    }
}

setOfflineSaves();

function setOfflineSectionSaveBackgrounds() {
    for (i = 0; i < mPro.offlineSectionSave.length; i++) {

        var currentSave = $('.save-active').eq(i);

        if (i % 2 === 0) {
            TweenMax.set(currentSave, {
                backgroundColor: '#e9eaef'
            });
        }

        if (i % 2 !== 0) {
            TweenMax.set(currentSave, {
                backgroundColor: '#ffffff'
            });
        }

    }
}

setOfflineSectionSaveBackgrounds();

function animateOfflineSectionSaveBackgrounds() {
    for (i = 0; i < mPro.offlineSectionSave.length; i++) {

        var currentSave = $('.save-active').eq(i);

        if (i % 2 === 0) {
            TweenMax.to(currentSave, 0.5, {
                backgroundColor: '#e9eaef'
            }, 0);
        }

        if (i % 2 !== 0) {
            TweenMax.to(currentSave, 0.5, {
                backgroundColor: '#ffffff'
            }, 0);
        }

    }
}

//
////PROFILE SECTION TAB BUTTON CLICK
//mPro.profileSectionTab.on('click', function () {
//    $(this).removeClass('inactive-tab').removeClass('active-tab').addClass('active-tab');
//    TweenMax.set($(this), {
//        backgroundColor: 'rgba(' + mPro.bbBlueRGB + ',1)',
//        color: 'rgba(' + mPro.whiteRGB + ',1)'
//    });
//    $(this).siblings('.profile-section-tab').removeClass('active-tab').removeClass('inactive-tab').addClass('inactive-tab');
//    TweenMax.set($(this).siblings('.profile-section-tab'), {
//        backgroundColor: 'rgba(' + mPro.inactiveTabRGB + ',1)',
//        color: 'rgba(' + mPro.blackRGB + ',1)'
//    });
//    
//    if ($(this).hasClass('recent-activity-tab')) {
//        mPro.recentActivityTabActive = true;
//    }
//    
//    if ($(this).hasClass('privacy-tab')) {
//        mPro.privacyTabActive = true;
//    }
//});

function backToMain() {
    mPro.programActive = false;
    TweenMax.set(mPro.sectionContainer, {
        opacity: 1
    });
    TweenMax.set(mPro.programContainer, {
        pointerEvents: 'none'
    });
    TweenMax.to(mPro.programContainer, 0.5, {
        x: mPro.container.width(),
        ease: Quart.easeOut,
        onComplete: function () {
            TweenMax.set(mPro.program, {
                display: 'none'
            });
            TweenMax.set(mPro.gearTapRegion, {
                pointerEvents: 'auto'
            });

            if (mPro.tmhcUnlocked) {
                console.log('tmhc is unlocked.');
                mPro.twentyTwoMinuteHardCorpsTile.siblings('.locked-tile-container').fadeOut();
            }

            if (mPro.tdfUnlocked) {
                console.log('tdf is unlocked.');
                mPro.twentyOneDayFixTile.siblings('.locked-tile-container').fadeOut();
            }

        }
    }, 0);
    TweenMax.to(mPro.sectionContainer, 0.5, {
        x: 0,
        ease: Quart.easeOut
    });
    TweenMax.to(mPro.backIcon, 0.5, {
        opacity: 0,
        pointerEvents: 'none'
    }, 0);
}

function backToMainInstant() {
    mPro.programActive = false;
    TweenMax.set(mPro.sectionContainer, {
        opacity: 1,
        x: 0
    });
    TweenMax.set(mPro.programContainer, {
        pointerEvents: 'none',
        x: mPro.container.width()
    });
    TweenMax.set(mPro.levelsContainer, {
        pointerEvents: 'none',
        display: 'none',
        x: mPro.container.width()
    });
    mPro.levels.hide();
    TweenMax.set(mPro.program, {
        display: 'none'
    });
    TweenMax.set(mPro.gearTapRegion, {
        pointerEvents: 'auto'
    });
    TweenMax.set(mPro.backIcon, {
        opacity: 0,
        pointerEvents: 'none'
    });

    if (mPro.tmhcUnlocked) {
        console.log('tmhc is unlocked.');
        mPro.twentyTwoMinuteHardCorpsTile.siblings('.locked-tile-container').fadeOut();
    }

    if (mPro.tdfUnlocked) {
        console.log('tdf is unlocked.');
        mPro.twentyOneDayFixTile.siblings('.locked-tile-container').fadeOut();
    }
}

//here you pass the filter to the DOM element
function applyBlur() {
    TweenMax.to(mPro.sectionContainer, 0.5, {
        scale: 1.1,
        ease: Expo.easeOut
    }, 0);
    TweenMax.to(mPro.programContainer, 0.5, {
        scale: 1.1,
        ease: Expo.easeOut
    }, 0);
    TweenMax.to(mPro.levelsContainer, 0.5, {
        scale: 1.1,
        ease: Expo.easeOut
    }, 0);
    TweenMax.to(mPro.filterContainer, 0.5, {
        pointerEvents: 'auto',
        opacity: 1,
        ease: Expo.easeOut
    }, 0);
    TweenMax.from(mPro.filterHeader, 0.5, {
        opacity: 0,
        y: mPro.container.width() * 0.2,
        ease: Expo.easeOut
    }, 0);
}

//here you pass the filter to the DOM element
function removeBlur() {
    TweenMax.to(mPro.sectionContainer, 0.5, {
        scale: 1,
        ease: Expo.easeOut
    }, 0);
    TweenMax.to(mPro.programContainer, 0.5, {
        scale: 1,
        ease: Expo.easeOut
    }, 0);
    TweenMax.to(mPro.levelsContainer, 0.5, {
        scale: 1,
        ease: Expo.easeOut
    }, 0);
    TweenMax.to(mPro.filterContainer, 0.5, {
        pointerEvents: 'none',
        opacity: 0,
        ease: Expo.easeOut
    }, 0);
};

function revealSecondary() {
    TweenMax.to(mPro.gearMenuMain, mPro.secondaryDuration, {
        x: '-' + mPro.container.width(),
        ease: mPro.secondaryEase
    }, 0);
    TweenMax.to(mPro.gearMenuSecondary, mPro.secondaryDuration, {
        x: '-' + mPro.container.width(),
        opacity: 1,
        ease: mPro.secondaryEase
    }, 0);
    TweenMax.to(mPro.arrowIconWhite, mPro.secondaryDuration, {
        x: '-' + mPro.container.width() * 0.47,
        rotation: 180,
        ease: mPro.secondaryEase
    }, 0);
    TweenMax.to(mPro.arrowTapRegion, mPro.secondaryDuration, {
        x: '-' + mPro.container.width() * 0.47,
        ease: mPro.secondaryEase
    }, 0);
};

function concealSecondary() {
    TweenMax.to(mPro.gearMenuMain, mPro.secondaryDuration, {
        x: 0,
        ease: mPro.secondaryEase
    }, 0);
    TweenMax.to(mPro.gearMenuSecondary, mPro.secondaryDuration, {
        x: 0,
        opacity: 0,
        ease: mPro.secondaryEase
    }, 0);
    TweenMax.to(mPro.arrowIconWhite, mPro.secondaryDuration, {
        x: 0,
        rotation: 0,
        ease: mPro.secondaryEase
    }, 0);
    TweenMax.to(mPro.arrowTapRegion, mPro.secondaryDuration, {
        x: 0,
        ease: mPro.secondaryEase
    }, 0);
};

function enableLockTap() {
    mPro.lockedTile.on('click', function () {
        var currentLock = $(this);
        if (currentLock.parent('.locked-tile-container').parent('.tile').hasClass('locked')) {
            TweenMax.to(currentLock, 0.5, {
                scale: 1.5,
                ease: Expo.easeOut
            }, 0);
            TweenMax.to(currentLock, 0.5, {
                opacity: 0,
                ease: Quad.easeIn,
                onComplete: function () {
                    TweenMax.set(currentLock.parent('.locked-tile-container'), {
                        display: 'none'
                    });
                }
            }, 0);
        } else {
            TweenMax.to(currentLock, 0.5, {
                opacity: 0,
                ease: Quad.easeIn,
                onComplete: function () {
                    TweenMax.set(currentLock.parent('.locked-tile-container'), {
                        display: 'none'
                    });
                }
            }, 0);
        }
    });
}

for (i = 0; i < mPro.tile.length; i++) {
    var currentTile = mPro.tile.eq(i);

    switch (true) {
    case currentTile.hasClass('locked'):
        currentTile.append('<div class="locked-tile-container"><img class="locked-tile" src="images/locked-tile-overlay.png"></div>');
        mPro.lockedTileContainer = $('.locked-tile-container');
        mPro.lockedTile = $('.locked-tile');

        TweenMax.set(mPro.lockedTileContainer, {
            width: mPro.tileBackground.width(),
            transformOrigin: 'center'
        });
        enableLockTap();
        break;
    case currentTile.hasClass('locked2'):
        currentTile.append('<div class="locked-tile-container"><img class="locked-tile" src="images/locked-tile-overlay2.png"></div>');
        mPro.lockedTileContainer = $('.locked-tile-container');
        mPro.lockedTile = $('.locked-tile');

        TweenMax.set(mPro.lockedTileContainer, {
            width: mPro.tileBackground.width(),
            transformOrigin: 'center'
        });
        enableLockTap();
        break;
    }
}

document.addEventListener("touchstart", function () {}, true);

TweenMax.set($('input'), {
    tapHighlightColor: 'rgba(0,0,0,0)'
});

TweenMax.set($('textarea'), {
    tapHighlightColor: 'rgba(0,0,0,0)'
});

TweenMax.set($('button'), {
    tapHighlightColor: 'rgba(0,0,0,0)'
});

TweenMax.set($('select'), {
    tapHighlightColor: 'rgba(0,0,0,0)'
});

TweenMax.set($('a'), {
    tapHighlightColor: 'rgba(0,0,0,0)'
});

//$(document).keypress(function (e) {
//    if (e.which == 49) {
//        mPro.versionActive = true;
//        mPro.versionNav.show();
//        mPro.nav.hide();
//    }
//    if (e.which == 50) {
//        mPro.versionActive = false;
//        mPro.versionNav.hide();
//        mPro.nav.show();
//    }
//    if (e.which == 51) {
//        mPro.offlineSavesEmpty = true;
//        console.log('offlineSavesEmpty: ' + mPro.offlineSavesEmpty);
//        mPro.offlineSectionNoSavesContainer.show();
//        mPro.offlineSectionSavesContainer.hide();
//    }
//    if (e.which == 52) {
//        mPro.offlineSavesEmpty = false;
//        console.log('offlineSavesEmpty: ' + mPro.offlineSavesEmpty);
//        mPro.offlineSectionNoSavesContainer.hide();
//        mPro.offlineSectionSavesContainer.show();
//    }
//});

for (i = 0; i < mPro.bodyBoardEntry.length; i++) {
    var currentEntry = mPro.bodyBoardEntry.eq(i);

    if (currentEntry.hasClass('light')) {
        TweenMax.set(currentEntry, {
            backgroundColor: mPro.white
        });
        TweenMax.set(currentEntry.find('.body-board-info-quotation-text'), {
            color: mPro.black
        });
        TweenMax.set(currentEntry.find('.body-board-info-like-text'), {
            color: mPro.black
        });
        TweenMax.set(currentEntry.find('.body-board-info-like-count'), {
            color: mPro.black
        });
        TweenMax.set(currentEntry.find('.body-board-info-button'), {
            color: mPro.black
        });
        TweenMax.set(currentEntry.find('.body-board-info-user-text'), {
            color: mPro.black
        });
        TweenMax.set(currentEntry.find('.body-board-info-quotation-mark-svg'), {
            fill: mPro.black
        });
        TweenMax.set(currentEntry.find('.body-board-info-like-icon-svg'), {
            fill: mPro.black
        });
    }

    if (currentEntry.hasClass('dark')) {
        TweenMax.set(currentEntry, {
            backgroundColor: mPro.black
        });
        TweenMax.set(currentEntry.find('.body-board-info-quotation-text'), {
            color: mPro.white
        });
        TweenMax.set(currentEntry.find('.body-board-info-like-text'), {
            color: mPro.white
        });
        TweenMax.set(currentEntry.find('.body-board-info-like-count'), {
            color: mPro.white
        });
        TweenMax.set(currentEntry.find('.body-board-info-button'), {
            color: mPro.white
        });
        TweenMax.set(currentEntry.find('.body-board-info-user-text'), {
            color: mPro.white
        });
        TweenMax.set(currentEntry.find('.body-board-info-quotation-mark-svg'), {
            fill: mPro.white
        });
        TweenMax.set(currentEntry.find('.body-board-info-like-icon-svg'), {
            fill: mPro.white
        });
    }
}

function centerNavIcons() {
    for (i = 0; i < mPro.navItemIcon.length; i++) {
        var currentIcon = mPro.navItemIcon.eq(i);

        TweenMax.set(currentIcon, {
            left: (currentIcon.parent('.nav-item').width() * 0.5) - (currentIcon.width() * 0.5)
        });
    }
}

function adjustQuotationHeight() {


    for (i = 0; i < mPro.bodyBoardInfoQuotationMark.length; i++) {
        var currentMark = mPro.bodyBoardInfoQuotationMark.eq(i);

        TweenMax.set(currentMark, {
            height: currentMark.siblings('.body-board-info-quotation-text').height() + 'px'
        });
    }
};

$(window).imagesLoaded(function () {
    mPro.diaryEntrySectionContainer.hide();
    TweenMax.set(mPro.diaryEntrySectionContainer, {
        zIndex: 970
    });
});

mPro.entrySectionSearchInputActual.on('focus', function () {
    TweenMax.set($(this), {
        opacity: 1
    });
    TweenMax.set($(this).siblings('.entry-section-search-icon'), {
        opacity: 0
    });
    TweenMax.set($(this).siblings('.entry-section-search-input'), {
        opacity: 0
    });
});

mPro.entrySectionSearchInputActual.on('blur', function () {
    if ($(this).val().length === 0) {
        TweenMax.set($(this), {
            opacity: 0
        });
        TweenMax.set($(this).siblings('.entry-section-search-icon'), {
            opacity: 1
        });
        TweenMax.set($(this).siblings('.entry-section-search-input'), {
            opacity: 1
        });
    }
});

mPro.entrySectionListSearchInputActual.on('focus', function () {
    TweenMax.set($(this), {
        opacity: 1
    });
    TweenMax.set($(this).siblings('.entry-section-list-search-icon'), {
        opacity: 0
    });
    TweenMax.set($(this).siblings('.entry-section-list-search-input'), {
        opacity: 0
    });
});

mPro.entrySectionListSearchInputActual.on('blur', function () {
    if ($(this).val().length === 0) {
        TweenMax.set($(this), {
            opacity: 0
        });
        TweenMax.set($(this).siblings('.entry-section-list-search-icon'), {
            opacity: 1
        });
        TweenMax.set($(this).siblings('.entry-section-list-search-input'), {
            opacity: 1
        });
    }
});

$(window).resize(function initial() {
    //    if ((!(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent))) || (/iPad/i.test(navigator.userAgent))) {
    //        mPro.mobileAlert.show();
    //        mPro.outerContainer.hide();
    //    } else {
    //        mPro.mobileAlert.hide();
    //        mPro.outerContainer.show();
    //    }

    TweenMax.set(mPro.lockedTileContainer, {
        width: mPro.tileBackground.width(),
        transformOrigin: 'center'
    });

    return initial;
}());

function revealCalorieBreakdownBar() {
    mPro.barAppeared = true;
    TweenMax.to(mPro.calorieBreakdownRowContainer, 1, {
        y: mPro.container.width() * 0.2,
        ease: Quint.easeInOut
    }, 0);
    TweenMax.set(mPro.calorieBreakdownBar, {
        height: mPro.container.width() * 0,
        transformOrigin: 'bottom'
    });
    TweenMax.to(mPro.calorieBreakdownBar, 1, {
        height: mPro.container.width() * 0.15,
        opacity: 1,
        ease: Quint.easeInOut
    }, 0);
}
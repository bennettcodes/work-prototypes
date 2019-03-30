var
    workoutsSectionListItemContainer = $('#workouts-section-list-item-container'),
    listItemContainer = $('.list-item-container'),

    tileRowWorkoutsCount = $('.tile-row-workouts-count'),

    purchasedProgramsRow = $('.purchased-programs-row'),
    purchasedProgramsRowCount = $('.purchased-programs-row-count'),

    memberLibraryRow = $('.member-library-row'),
    memberLibraryRowCount = $('.member-library-row-count'),

    programs = [
        {
            name: 'Core De Force',
            nameShortened: 'Core De Force',
            initial: 'CDF',
            author: 'Jericho McMatthews',
            genre: 'Cardio / Slim &amp; Tone',
            duration: '30-45',
            isSaving: false,
            description: 'Hit it hard with CORE DE FORCE™ -- the mixed martial arts-style workout that helps slash inches from your waist, sculpt every muscle, and blast calories!',
            saving: 'Saving... 61%',
            rail: 'Purchased Programs'
        },
        {
            name: '22 Minute Hard Corps',
            nameShortened: '22 Minute Hard Cor...',
            initial: '22HC',
            author: 'Tony Horton',
            genre: 'Cardio / Muscle Building',
            duration: '30',
            isSaving: false,
            description: 'Ready for EPIC results? Give Tony Horton 22 minutes a day for 8 weeks and get "Boot Camp Fit"—maybe even in the best shape of your life!',
            saving: 'Saving... 61%',
            rail: 'Purchased Programs'
        },
        {
            name: '21 Day Fix',
            nameShortened: '21 Day Fix',
            initial: '21D',
            author: 'Autumn Calabrese',
            genre: 'Slim &amp; Tone / Cardio',
            duration: '30',
            isSaving: false,
            description: 'Give us 21 days. Give us all the guts, drive, and intensity you’ve got, and we WILL get you the hardbody you’ve always wanted. Ready to get serious? 21 Day Fix EXTREME® is for you.',
            saving: 'Saving... 61%',
            rail: 'Purchased Programs'
        },
        {
            name: 'Cize',
            nameShortened: 'Cize',
            initial: 'CZ',
            author: 'Shaun T',
            genre: 'Dance / Cardio',
            duration: '30-50',
            isSaving: false,
            description: 'Exercise isn’t something you have to do, it’s something you’ll want to do. Dance your way to fit in just 30 days!',
            saving: 'Saving... 61%',
            rail: 'Purchased Programs'
        },
        {
            name: 'Country Heat',
            nameShortened: 'Country Heat',
            initial: 'CH',
            author: 'Autumn Calabrese',
            genre: 'Dance / Low Impact',
            duration: '30',
            isSaving: false,
            description: 'Already own Country Heat™? Join Autumn in two brand-new Country Heat dance workouts that crank up the fun with more great music and hot moves--exclusively on Beachbody® On Demand.',
            saving: 'Saving... 61%',
            rail: 'Purchased Programs'
        },
        {
            name: 'PiYo',
            nameShortened: 'PiYo',
            initial: 'BBPIYO',
            author: 'Chalene Johnson',
            genre: 'Slim &amp; Tone / Low-Impact',
            duration: '25-40',
            isSaving: false,
            description: 'Who says you have to punish your body to get results from your workout? It’s time for you to define yourself with a low-impact workout that will leave you stronger, longer, and leaner.',
            saving: 'Saving... 61%',
            rail: 'Purchased Programs'
        },
        {
            name: 'Body Beast',
            nameShortened: 'Body Beast',
            initial: 'BE',
            author: 'Sagi Kalev',
            genre: 'Muscle Building',
            duration: '11-53',
            isSaving: false,
            description: 'We’ve cracked the code for how to dial in the lean, chiseled physique everybody wants. And you can get it in 90 days, in as little as 30 minutes a day. Bottom line? You can do this.',
            saving: 'Saving... 61%',
            rail: 'Member Library'
        },
        {
            name: 'Insanity: Max 30',
            nameShortened: 'Insanity: Max 30',
            initial: 'IM',
            author: 'Shaun T',
            genre: 'Cardio',
            duration: '30',
            isSaving: false,
            description: 'It’s only 30 minutes. But it will get you the best results of your life. Shaun T gives you the tools to push yourself to your limit every day. For a body that’s absolutely insane.',
            saving: 'Saving... 61%',
            rail: 'Member Library'
        },
        {
            name: '3 Week Yoga Retreat',
            nameShortened: '3 Week Yoga Retreat',
            initial: '3YR',
            author: 'Various Instructors',
            genre: 'Yoga / Slim &amp; Tone',
            duration: '30',
            isSaving: false,
            description: 'Build a solid yoga foundation and experience the benefits of yoga in just 21 days. This program is designed to start on a Monday-check out the Class Calendar to get ready!',
            saving: 'Saving... 61%',
            rail: 'Member Library'
        },
        {
            name: 'Beachbody Yoga Studio',
            nameShortened: 'Beachbody Yoga St...',
            initial: 'BYS',
            author: 'Various Instructors',
            genre: 'Yoga / Slim &amp; Tone',
            duration: '10-90',
            isSaving: false,
            description: 'Improve strength and flexibility with a collection of yoga classes featuring Beachbody® Super Trainers and Yoga Experts. Find the class that’s right for you!',
            saving: 'Saving... 61%',
            rail: 'Member Library'
        },
        {
            name: 'Fixate',
            nameShortened: 'Fixate',
            initial: 'FIX',
            author: 'Various Instructors',
            genre: 'Cooking Show / Weight Loss',
            duration: '4-16',
            isSaving: false,
            description: 'The FIXATE™ Holiday Special is here! Tis the season for a delicious feast of classic holiday dishes you can enjoy guilt-free.',
            saving: 'Saving... 61%',
            rail: 'Member Library'
        },
        {
            name: 'T25',
            nameShortened: 'T25',
            initial: 'T25',
            author: 'Shaun T',
            genre: 'Cardio / Slim &amp; Tone',
            duration: '25',
            isSaving: false,
            description: 'No time to work out? Shaun T’s going to get you an hour’s worth of results in just 25 minutes. With FOCUS T25®, that’s all it takes to look better, feel better, change your life.',
            saving: 'Saving... 61%',
            rail: 'Member Library'
        },
        {
            name: '21 Day Fix Extreme',
            nameShortened: '21 Day Fix Extreme',
            initial: '21E',
            author: 'Autumn Calabrese',
            genre: 'Slim &amp; Tone / Cardio',
            duration: '30',
            isSaving: false,
            description: 'Give us 21 days. Give us all the guts, drive, and intensity you’ve got, and we WILL get you the hardbody you’ve always wanted. Ready to get serious? 21 Day Fix EXTREME® is for you.',
            saving: 'Saving... 61%',
            rail: 'Member Library'
        },
        {
            name: 'Master\'s Hammer &amp; Chisel',
            nameShortened: 'Master\'s Hammer &amp;...',
            initial: 'MHC',
            author: 'Sagi Kalev',
            genre: 'Muscle Building/Slim &amp; Tone',
            duration: '30-40',
            isSaving: false,
            description: 'Trainers Sagi and Autumn help you sculpt a strong, visually stunning physique in just 60 days with their expert resistance-training program. Free shipping for a limited time only!',
            saving: 'Saving... 61%',
            rail: 'Member Library'
        },
        {
            name: 'P90',
            nameShortened: 'P90',
            initial: 'P2',
            author: 'Tony Horton',
            genre: 'Cardio / Muscle Building',
            duration: '45-60',
            isSaving: false,
            description: 'Extreme fitness programs not for you? Whether you’re a beginner or an expert, you can still get dramatic, visible results in 90 days—without pushing your body past its limits—with Tony Horton’s P90®.',
            saving: 'Saving... 61%',
            rail: 'Member Library'
        },
        {
            name: 'P90X3',
            nameShortened: 'P90X3',
            initial: 'X3',
            author: 'Tony Horton',
            genre: 'Muscle Building / Slim &amp; Tone',
            duration: '30',
            isSaving: false,
            description: 'Get totally ripped in only 30 minutes a day. Tony uses Muscle Acceleration to get the most out of your “30-minute” window of change',
            saving: 'Saving... 61%',
            rail: 'Member Library'
        },
        {
            name: 'P90X2',
            nameShortened: 'P90X2',
            initial: 'X2',
            author: 'Tony Horton',
            genre: 'Muscle Building / Slim &amp; Tone',
            duration: '50-60',
            isSaving: false,
            description: 'P90X2 delivers the kind of results pro athletes insist on. Now you can use the same training techniques used by the pros, right in your home.',
            saving: 'Saving... 61%',
            rail: 'Member Library'
        },
        {
            name: 'P90X',
            nameShortened: 'P90X',
            initial: 'P90X',
            author: 'Tony Horton',
            genre: 'Muscle Building / Slim &amp; Tone',
            duration: '45-60',
            isSaving: false,
            description: 'Transform your body in 90 days with the original extreme home fitness program. With 4 million+ sold, it’s changed more bodies than just about any fitness program in history. Now it’s your turn to get absolutely ripped!',
            saving: 'Saving... 61%',
            rail: 'Member Library'
        },
        {
            name: 'P90X: One on One',
            nameShortened: 'P90X: One on One',
            initial: 'TH',
            author: 'Tony Horton',
            genre: 'Muscle Building / Slim &amp; Tone',
            duration: '30-70',
            isSaving: false,
            description: 'It’s just you and Tony Horton in these personal one-on-one training sessions designed to keep the momentum and intensity of P90X® going with new “muscle-confusing” workouts.',
            saving: 'Saving... 61%',
            rail: 'Member Library'
        },
        {
            name: 'The 20s',
            nameShortened: 'The 20s',
            initial: '20s',
            author: 'Various Instructors',
            genre: 'Cardio, Slim &amp; Tone, Muscle Bu...',
            duration: '20',
            isSaving: false,
            description: 'From Cardio to Barre to Abs, try 20 different 20-minute workouts from THE 20s Trainers. Plus, catch up on all of the episodes.',
            saving: 'Saving... 61%',
            rail: 'Member Library'
        },
        {
            name: '10 Minute Trainer',
            nameShortened: '10 Minute Trainer',
            initial: 'TM',
            author: 'Tony Horton',
            genre: 'Slim &amp; Tone',
            duration: '10',
            isSaving: false,
            description: 'What if it took only 10 minutes to get a great body? Tony Horton stacked his best moves into a series of 10-minute workouts, so you can get the body you want in the time you have.',
            saving: 'Saving... 61%',
            rail: 'Member Library'
        },
        {
            name: 'Brazil Butt Lift',
            nameShortened: 'Brazil Butt Lift',
            initial: 'BBL',
            author: 'Leandro Carvalho',
            genre: 'Dance / Cardio',
            duration: '10-50',
            isSaving: false,
            description: 'Get the booty you’ve always dreamed about with signature sculpting moves from supermodel trainer Leandro Carvalho. Lift, firm, and shape your perfect booty in just 60 days!',
            saving: 'Saving... 61%',
            rail: 'Member Library'
        },
        {
            name: 'Brazil Butt Lift Carnivale',
            nameShortened: 'Brazil Butt Lift Carn...',
            initial: 'CAR',
            author: 'Leandro Carvalho',
            genre: 'Dance / Cardio',
            duration: '15-30',
            isSaving: false,
            description: 'Join supermodel trainer Leandro Carvalho in this super-fun sculpting party! His new 30-minute circuit-style workouts can get you bikini-ready in just 30 days. Exclusively on BOD!',
            saving: 'Saving... 61%',
            rail: 'Member Library'
        },
        {
            name: 'Brazil Butt Lift Master Series',
            nameShortened: 'Brazil Butt Lift Mast...',
            initial: 'BBLM',
            author: 'Leandro Carvalho',
            genre: 'Dance / Cardio',
            duration: '25-35',
            isSaving: false,
            description: 'Train like a supermodel with Brazil Butt Lift® Master Series and let the “bum bum” expert Leandro Carvalho help you get bikini ready in 30 days with advanced booty-busting moves.',
            saving: 'Saving... 61%',
            rail: 'Member Library'
        },
        {
            name: 'Insanity',
            nameShortened: 'Insanity',
            initial: 'SAN',
            author: 'Shaun T',
            genre: 'Cardio',
            duration: '15-60',
            isSaving: false,
            description: 'Shaun T gets you a year’s worth of results in just 60 days. Are you ready to Dig Deep and take the INSANITY challenge?',
            saving: 'Saving... 61%',
            rail: 'Member Library'
        },
        {
            name: 'Insanity: The Asylum',
            nameShortened: 'Insanity: The Asylum',
            initial: 'ASY',
            author: 'Shaun T',
            genre: 'Slim &amp; Tone / Cardio',
            duration: '45-60',
            isSaving: false,
            description: 'Maximize your sports performance in just 30 days and let Shaun T take you inside the Athletic Matrix to amp up your agility, speed, and power with INSANITY: THE ASYLUM.',
            saving: 'Saving... 61%',
            rail: 'Member Library'
        },
        {
            name: 'Insanity: The Asylum Vol 2',
            nameShortened: 'Insanity: The Asylum...',
            initial: 'A2',
            author: 'Shaun T',
            genre: 'Muscle Building / Cardio',
            duration: '20-60',
            isSaving: false,
            description: 'Don’t just defeat the competition—CRUSH IT! INSANITY: THE ASYLUM® Volume 2 takes your Volume 1 skills to the next level with 30 more days of pro athlete training.',
            saving: 'Saving... 61%',
            rail: 'Member Library'
        },
        {
            name: 'Tai Cheng',
            nameShortened: 'Tai Cheng',
            initial: 'TC',
            author: 'Dr. Cheng',
            genre: 'Low Impact / Slim &amp; Tone',
            duration: '25-80',
            isSaving: false,
            description: 'Help renew your body’s youthful energy—the natural way. In 90 days, learn the basics of Tai Chi with a zero-impact program that can help you turn back the clock and feel fantastic.',
            saving: 'Saving... 61%',
            rail: 'Member Library'
        },
        {
            name: 'TurboFire',
            nameShortened: 'TurboFire',
            initial: 'TR',
            author: 'Chalene Johnson',
            genre: 'Cardio / Dance',
            duration: '10-55',
            isSaving: false,
            description: 'TurboFire® helps you burn up to 9X more fat and calories than regular cardio—and it’s a lot more fun! Get intense with Chalene Johnson and you’ll get results in just 90 days.',
            saving: 'Saving... 61%',
            rail: 'Member Library'
        },
        {
            name: 'Chalean Extreme',
            nameShortened: 'Chalean Extreme',
            initial: 'CE',
            author: 'Chalene Johnson',
            genre: 'Slim &amp; Tone / Cardio',
            duration: '30-45',
            isSaving: false,
            description: 'Shift your body’s fat-burning focus from cardio to resistance training with ChaLEAN Extreme, the program that’ll help you burn up to 60% of your body fat because MUSCLE BURNS FAT®.',
            saving: 'Saving... 61%',
            rail: 'Member Library'
        },
        {
            name: 'Hip Hop Abs',
            nameShortened: 'Hip Hop Abs',
            initial: 'HHA',
            author: 'Shaun T',
            genre: 'Dance / Cardio',
            duration: '25-45',
            isSaving: false,
            description: 'It doesn’t feel like working out when you’re dancing! Burn fat off your entire body and dance your way to hot, sexy abs without ever doing a single sit-up or crunch.',
            saving: 'Saving... 61%',
            rail: 'Member Library'
        },
        {
            name: 'Autumn\'s BOD Exclusives',
            nameShortened: 'Autumn\'s BOD Exclu...',
            initial: 'YTAC',
            author: 'Autumn Calabrese',
            genre: 'Slim &amp; Tone',
            duration: '5-45',
            isSaving: false,
            description: 'Switch it up daily with these A la\' Carte workouts from celebrity trainer Autumn Calabrese',
            saving: 'Saving... 61%',
            rail: 'Member Library'
        },
        {
            name: 'Tony\'s BOD Exclusives',
            nameShortened: 'Tony\'s BOD Exclusives',
            initial: 'YTTH',
            author: 'Tony Horton',
            genre: 'Muscle Building / Cardio',
            duration: '5-55',
            isSaving: false,
            description: 'One-off high intensity workouts from Tony Horton that activate all your muscle groups and carve a lean physique!',
            saving: 'Saving... 61%',
            rail: 'Member Library'
        },
        {
            name: 'Sagi\'s BOD Exclusives',
            nameShortened: 'Sagi\'s BOD Exclusives',
            initial: 'YTSK',
            author: 'Sagi Kalev',
            genre: 'Muscle Building',
            duration: '5-45',
            isSaving: false,
            description: 'Experience what it\'s like to get one on one training from Sagi Kalev in his BOD Exclusive workouts.',
            saving: 'Saving... 61%',
            rail: 'Member Library'
        },
        {
            name: 'Jericho\'s BOD Exclusives',
            nameShortened: 'Jericho\'s BOD Exclus...',
            initial: 'YTJM',
            author: 'Jericho McMatthews',
            genre: 'Yoga / Cardio',
            duration: '20-40',
            isSaving: false,
            description: 'Increase your range of motion while torching calories with these challenging workouts from one of our newest trainers, Jericho McMatthews.',
            saving: 'Saving... 61%',
            rail: 'Member Library'
        },
        {
            name: 'Joel\'s BOD Exclusives',
            nameShortened: 'Joel\'s BOD Exclusives',
            initial: 'YTJF',
            author: 'Joel Freeman',
            genre: 'Muscle Building',
            duration: '20-40',
            isSaving: false,
            description: 'Build up your strength, speed, and range of motion with these full body strength routines from one of our newest trainers, Joel Freeman.',
            saving: 'Saving... 61%',
            rail: 'Member Library'
        },
        {
            name: 'Active Maternity',
            nameShortened: 'Active Maternity',
            initial: 'ACAM',
            author: 'Autumn Calabrese',
            genre: 'Low-Impact',
            duration: '25-35',
            isSaving: false,
            description: 'Work out safely with trimester-targeted Active Maternity workouts—the series will even help you tone up after you’ve left the delivery room!',
            saving: 'Saving... 61%',
            rail: 'Member Library'
        },
        {
            name: 'The Master Trainers',
            nameShortened: 'The Master Trainers',
            initial: 'MT',
            author: 'Various Instructors',
            genre: 'Various Genres',
            duration: '20-30',
            isSaving: false,
            description: 'Beachbody® is giving away $2 million and you could qualify to split a piece of the prize pool! In the September Beachbody Health Bet, three out of four participants met their health and fitness goals, and now you can too.',
            saving: 'Saving... 61%',
            rail: 'Member Library'
        },
        {
            name: 'Slim in 6',
            nameShortened: 'Slim in 6',
            initial: 'SL6',
            author: 'Debbie Siebers',
            genre: 'Slim &amp; Tone / Cardio',
            duration: '25-60',
            isSaving: false,
            description: 'Reshape your body and lose up to 25 pounds in just 6 weeks with Debbie Siebers’ Slim in 6®, the low-impact program anyone can do.',
            saving: 'Saving... 61%',
            rail: 'Member Library'
        },
        {
            name: 'Rockin Body',
            nameShortened: 'Rockin Body',
            initial: 'RB',
            author: 'Shaun T',
            genre: 'Dance / Cardio',
            duration: '15-45',
            isSaving: false,
            description: 'Feel the beat while you feel the burn! Get a rockin’ body with Shaun T and burn up to 1,500 calories a day while you dance to timeless hits.',
            saving: 'Saving... 61%',
            rail: 'Member Library'
        },
        {
            name: 'Rev Abs',
            nameShortened: 'Rev Abs',
            initial: 'RA',
            author: 'Brett Hoebel',
            genre: 'Cardio / Slim &amp; Tone',
            duration: '25-80',
            isSaving: false,
            description: 'RevAbs is your 90-day ab solution. Burn off the fat, work your entire core from 6 different angles, and get that sexy six pack you’ve always wanted—FAST!',
            saving: 'Saving... 61%',
            rail: 'Member Library'
        },
        {
            name: 'TurboJam',
            nameShortened: 'TurboJam',
            initial: 'TJ',
            author: 'Chalene Johnson',
            genre: 'Cardio / Dance',
            duration: '20-45',
            isSaving: false,
            description: 'Burn up to 1,000 calories an hour with the workout that doesn’t feel like work. Set to high-energy music, Chalene Johnson’s Turbo Jam® scorches fat fast!',
            saving: 'Saving... 61%',
            rail: 'Member Library'
        },
        {
            name: 'Yoga Booty Ballet',
            nameShortened: 'Yoga Booty Ballet',
            initial: 'YBB',
            author: 'Gillian / Teigh',
            genre: 'Yoga / Low-Impact',
            duration: '10-60',
            isSaving: false,
            description: 'See a dramatic difference in your body after just two weeks with Yoga Booty Ballet®, a fusion of yoga, body sculpting, and cardio dance that’ll leave you long, lean, and sexy!',
            saving: 'Saving... 61%',
            rail: 'Member Library'
        },
        {
            name: 'Total Body Solution',
            nameShortened: 'Total Body Solution',
            initial: 'TBB',
            author: 'Debbie Siebers',
            genre: 'Low-Impact',
            duration: '15',
            isSaving: false,
            description: 'Relieve pain and prevent strain with Total Body Solution’s easy-to-follow drills that restore mobility and increase endurance strength in just 15 minutes!',
            saving: 'Saving... 61%',
            rail: 'Member Library'
        },
        {
            name: 'Power Half Hour',
            nameShortened: 'Power Half Hour',
            initial: 'PHH',
            author: 'Tony Horton',
            genre: 'Muscle Building / Slim &amp; Tone',
            duration: '30',
            isSaving: false,
            description: 'P90X® creator Tony Horton brings you five fast and effective workouts in Power Half Hour®, so you can target trouble zones, lose weight, and tone up in just 30 minutes a day.',
            saving: 'Saving... 61%',
            rail: 'Member Library'
        },
        {
            name: 'Power 90',
            nameShortened: 'Power 90',
            initial: 'P90',
            author: 'Tony Horton',
            genre: 'Slim &amp; Tone / Muscle Building',
            duration: '4-38',
            isSaving: false,
            description: 'Before P90X®, there was Power 90®—Tony Horton’s 90-day in-home boot camp for a total-body transformation.',
            saving: 'Saving... 61%',
            rail: 'Member Library'
        },
        {
            name: 'Kathy Smith\'s Project: You - Type 2',
            nameShortened: 'Kathy Smith\'s Proje...',
            initial: 'KS',
            author: 'Kathy Smith',
            genre: 'Cardio / Slim &amp; Tone',
            duration: '20-60',
            isSaving: false,
            description: 'Kathy Smith’s Project:YOU! Type 2® is the first all-in-one solution supported by the American Diabetes Association to help you fight type 2 diabetes and begin a healthy lifestyle.',
            saving: 'Saving... 61%',
            rail: 'Member Library'
        },
        {
            name: 'Great Body Guaranteed',
            nameShortened: 'Great Body Guarant...',
            initial: 'GB',
            author: 'Tony Horton',
            genre: 'Slim &amp; Tone',
            duration: '7-11',
            isSaving: false,
            description: 'Celebrity trainers Tony Horton and Debbie Siebers team up to get you a jaw-dropping body—guaranteed—in less than 10 minutes a day with Great Body Guaranteed!®',
            saving: 'Saving... 61%',
            rail: 'Member Library'
        },
        {
            name: 'Ho\'Ala ke Kino',
            nameShortened: 'Ho\'Ala ke Kino',
            initial: 'HOA',
            author: 'Tony Horton',
            genre: 'Yoga / Low-Impact',
            duration: '30',
            isSaving: false,
            description: 'Ho’Ala ke Kino™ means “awaken the body” and that’s exactly what you’ll do as you practice yoga, stretch your muscles, and relax your mind with Tony Horton in beautiful Hawaii.',
            saving: 'Saving... 61%',
            rail: 'Member Library'
        },
    ],
    programCount = programs.length,
    purchasedProgramsCount = 0,
    memberLibraryCount = 0

//listItemContainer.html(`<img class="wat" src="${programs[2].thumb.pin}">`)

listItemContainer.empty();

//purchasedProgramsRow.append(
//    `<div class="tile-row">
//        <div class="tile-container">
//
//        </div>
//    </div>`
//);
//purchasedProgramsRow.append(
//    `<div class="tile-row">
//        <div class="tile-container">
//            <div class="tile">
//                <img id="p90x-tile" class="tile-bg" src="images/tiles/popular-programs/Program_Thumbs_540x672_P90X.jpg">
//            </div>
//            <div class="tile">
//                <img id="turbo-fire-exclusives-tile" class="tile-bg" src="images/tiles/popular-programs/Program_Thumbs_540x672_Turbofire.jpg">
//            </div>
//            <div class="tile">
//                <img id="insanity-tile" class="tile-bg" src="images/tiles/popular-programs/Program_Thumbs_540x672_Insanity.jpg">
//            </div>
//            <div class="tile">
//                <img id="autumns-bod-exclusives-tile" class="tile-bg" src="images/tiles/popular-programs/Program_Thumbs_540x672_AutumnBODExclusive.jpg">
//            </div>
//            <div class="tile">
//                <img id="tonys-bod-exclusives-tile" class="tile-bg" src="images/tiles/popular-programs/Program_Thumbs_540x672_Tony_BodExclusive.jpg">
//            </div>
//            <div class="tile">
//                <img id="master-trainers-tile" class="tile-bg" src="images/tiles/popular-programs/Program_Thumbs_540x672_MasterTrainers.jpg">
//            </div>
//        </div>
//    </div>`
//);

programs.map(function (item, i) {

    var thisInitial = item.initial;

    switch (true) {
    case item.rail === 'Purchased Programs':
        purchasedProgramsCount++;
        //            purchasedProgramsRow.append(
        //                `<div class="tile">
        //                    <img id="p90x-tile" class="tile-bg" src="images/tiles/popular-programs/Program_Thumbs_540x672_P90X.jpg">
        //                </div>`
        //            )
        break;
    case item.rail === 'Member Library':
        memberLibraryCount++;

        break;
    }

    listItemContainer.append(
        `<div id="${thisInitial}" class="list-item">
            <div class="list-item-thumb">
                <img class="list-item-thumb-image" src="images/tiles/BOD_${thisInitial}_ProgramTiles_AllTrainers.jpg">
            </div>
            <div class="list-item-texts">
                <div class="list-item-title list-item-text ">${item.name}</div>
                <div class="list-item-author list-item-text">${item.author}</div>
                <div class="list-item-style list-item-text">${item.genre}</div>
                <div class="list-item-saving list-item-text">${item.isSaving ? item.saving : ''}</div>
            </div>
            <div class="list-item-duration list-item-text">${item.duration}<br><span class="list-item-minutes">mins</span></div>
            <img class="list-item-options" src="images/dots-fpo.png">
            <div class="list-item-break"></div>
        </div>`
    );
});



var
    tileContainer = $('.tile-container'),
    listItemTexts = $('.list-item-texts'),
    listItem = $('.list-item'),
    listItemThumb = $('.list-item-thumb'),
    tile = $('.tile'),

    programHero = $('.program-hero'),
    programHeroLogo = $('.program-hero-logo'),
    programHeroBackground = $('.program-hero-bg'),
    programHeroDescription = $('.program-hero-description'),
    programHeroDescriptionText = $('.program-hero-description-text')

function openProductPage() {
    if (!$(this).hasClass('no-click')) {
        var thisId = $(this).attr('id');
        programs.map(function (item, i) {
            if (item.initial === thisId) {
                cl('yes');
                programHeroDescriptionText.html(item.description);
                programHeroBackground.attr('src', `images/heroes/BOD_${item.initial}_ProgramHeroes_AllTrainers.jpg`);
            }
        });
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
        listItemThumb = $('.list-item-thumb')
    }
}

for (var i = 0; i < tileContainer.length; i++) {
    var current = tileContainer.eq(i);

    TweenMax.set(current, {
        width: current.find('.tile').length * current.find('.tile').outerWidth() + parseInt(current.find('.tile').css('padding-left'))
    });
}

for (var i = 0; i < listItemTexts.length; i++) {
    var current = listItemTexts.eq(i);

    TweenMax.set(current, {
        y: current.parent('.list-item').height() / 2 - current.height() / 2
    });
}

listItemThumb.imagesLoaded(function() {
for (var i = 0; i < listItemThumb.length; i++) {
    var current = listItemThumb.eq(i);

    TweenMax.set(current, {
        y: current.parent('.list-item').height() / 2 - current.height() / 2
    });
}
})

listItem.on('touchstart', function () {
    TweenMax.to($(this), 0.5, {
        backgroundColor: 'rgba(0,0,0,0.05)',
        ease: Expo.easeOut
    }, 0);
});

listItem.on('touchend', function () {
    TweenMax.to($(this), 0.5, {
        backgroundColor: 'rgba(0,0,0,0)',
        ease: Expo.easeOut
    }, 0);
});

listItem.on('click', openProductPage);

tile.on('click', openProductPage);

purchasedProgramsRowCount.html(`${purchasedProgramsCount} Programs`);
memberLibraryRowCount.html(`${memberLibraryCount} Programs`);

cl(`Purchased Programs Count: ${purchasedProgramsCount}`);
cl(`Member Library Count: ${memberLibraryCount}`);

function addTileOverlays() {
    for (var i = 0; i < mPro.tile.length; i++) {
        var current = mPro.tile.eq(i);
        
        current.append(`
            <div class="tile-duration-overlay"></div>
        `)
        if (i === mPro.tile.length - 1) {
            mPro.tileDurationOverlay = $('.tile-duration-overlay');
            TweenMax.set(mPro.tileDurationOverlay, {
                lineHeight: `${mPro.tileDurationOverlay.height()}px`
            })
        }
    }
    
    programs.map(function(item, i) {
        var currentDuration = item.duration,
            currentInitial = item.initial,
            currentTile = $(`.tile-${currentInitial}`)
        cl(currentTile)
        
        currentTile.find('.tile-duration-overlay').html(`${currentDuration} mins`)
        
        
    })
}
addTileOverlays();
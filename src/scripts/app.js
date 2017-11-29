/*
 * @Author: Mr.B 
 * @Date: 2017-11-27 12:17:37 
 * @Last Modified by: Nokey
 * @Last Modified time: 2017-11-29 23:46:01
 */
'use strict'; 

(function ($, win) {
    /**
     * Public Parameters
     */
    var _win = $(win),
        _win_height = _win.height(),
        _win_width = _win.width(),
        _ua = win.navigator.userAgent.toLowerCase(),
        _isMac = /macintosh|mac os x/.test(_ua),
        _isIphone = /iphone/.test(_ua),
        _isIpad = /ipad/.test(_ua),
        _isAndroid = /android|adr|linux/.test(_ua),
        _isMobile = /mobile|android|kindle|silk|midp|phone|(windows .+arm|touch)/.test(_ua),
        tap_event_name = _isMobile ? 'touchend' : 'click';

    var center_eles = $(".center-ele"),
        init_funcs = [];

    /**
     * Resize
     */
    function resizeAll(){
        _win_height = _win.height();
        _win_width = _win.width();

    }

    $(win).resize(function () {
        resizeAll();
    });

    /**
     * Custom
     */
    /******   IntroPage: parallax photo   *******/
    var sm_controller = new ScrollMagic.Controller(),
        wipe_animation = new TimelineMax()
            .to('#color_photo', 1, {x: '100%', ease: Linear.easeNone});

    new ScrollMagic.Scene({
            triggerElement: '.intro-page',
            triggerHook: 'onLeave',
            duration: _win_height
        })
        .setTween(wipe_animation)
        .addTo(sm_controller);

    /******  IntroPage: play introduction video  *******/
    var yt_video_box = $('#yt_video_box');

    $('#play_intro_video').click(function(e){
        !yt_video_box.hasClass('show') && yt_video_box.addClass('show');
        yt_video_box.find('.video-wrap').html(`
            <iframe src="https://www.youtube.com/embed/5ekUyxxpBt0?rel=0" frameborder="0" allowfullscreen>Loading...</iframe>
        `);
    })

    $('#close_intro_video').click(function(e){
        yt_video_box.hasClass('show') && yt_video_box.removeClass('show');
        yt_video_box.find('.video-wrap').html('');
    })

    /******   scroll to section   *******/
    $('#my_works').click(function(event){
        _win.scrollTo('#nav_bar', {
            duration: 300
        })
    })
    $('#nav_bar').on('click', 'li', function(e){
        var id = $(e.target).data('scroll-target');
        _win.scrollTo('#'+id, {
            duration: 300,
            offset: -80
        })
    })

    /******   pin navigation   *******/
    var pin_wrapper = $('#pin_wrapper').get(0),
        nav_bar = $('#nav_bar');

    _win.scroll(function(e){
        if(getBCR(pin_wrapper, 'top') < 0){
            !nav_bar.hasClass('pinned') && nav_bar.addClass('pinned');
        }else{
            nav_bar.hasClass('pinned') && nav_bar.removeClass('pinned');
        }
    }).trigger('scroll')

    /******   sub page template   *******/
    var sub_page_wrapper = $('#sub_page_wrapper');

    sub_page_wrapper.on('click', '.close-sub-page', function(e){
        var btn = $(e.target);

        sub_page_wrapper.hasClass('show') && sub_page_wrapper.removeClass('show');
        sub_page_wrapper.find('.content').html('');

        $('body').css({
            height: 'auto',
            overflow: 'auto'
        })
    })

    $('#projects_show').on('click', 'section', function(e){
        var section = $(e.currentTarget),
            no = section.data('no'),
            sub_page_html = '';

        switch (no) {
            case 1:
                sub_page_html = 
                `<h1 class="title">SLEEPING LAVENDER</h1>
                <h6 class="desc">DEC. 2015 -- JAN. 2016 / GROUP PROJECT</h6>
                <hr>
                <p>To improve the quality of sleeping, we designed a interactive night lamp. People can not only play with it before going to bed, but also can comfort by its violet light. lavendern aroma, white noise sound and warm temperature. We hope that it will allow the people who seek peaceful nights to regain sweet dreams.</p>
                <h1>PROBLEMS DISCOVERY</h1>
                <p>texte xttextt exte xttextte xtextte xttexte xttex ttexte xttextt extextte xttex text text</p>
                <img src="images/lavender/lavender1.png" alt="Test Image">
                <h1>OBJECTIVE</h1>
                <p>At that time, one of my roommates had been under a lot of stress in her relationship, so that her sleep is bad. A slight noise will make her awake, and last long insomnia made she feel terrible. After doing some research, I realized that modern people had various sleep problems in recent years. 
                So we decided to make an installation that can help people to regain good sleep. Take the meaning of lavender and lantern, we named it Lavendern. The fragrant essential oil for sleep, as well as the peaceful lavender light will bring people fairytale nights and sweet dreams.</p>
                <h1>CONCEPT</h1>
                <img src="images/lavender/lavender2.png" alt="Test Image">
                <p>To hold the Lavendern lamp, the user's action motion triggers a series interaction with devices.By combining the soft light,white noises sound, lavander aroma, warm temperature and other healing elements together, we want to make users relax from sight, smell, hearing and touch, so as to achieve a better cure effect.</p>
                <img src="images/lavender/lavender3.png" alt="Test Image">
                <h2>About Lavender</h2>
                <p>There was a study about to compare the effectiveness of lavender (Lavandula angustifolia) and sleep hygiene versus sleep hygiene alone on sleep quantity and sleep quality and to determine sustained effect at two-week follow-up.<br/>
                A randomized controlled trial with investigator blinding and steps taken to blind the participants. The setting was the participants usual sleep setting. Seventy-nine college students with self-reported sleep issues (difficulty falling asleep, frequent awakenings during the night, or daytime sleepiness). <br/>
                As a result, lavender and sleep hygiene together, and sleep hygiene alone to a lesser degree, improved sleep quality for college students with self-reported sleep issues, with an effect remaining at follow-up.<br/> 
                So, if we want to improve our sleep quality, we should practice good sleep hygiene, and lavender is also helpful. <br/>
                REFERENCE: J Altern Complement Med. 2015 Jul;21(7):430-8.</p>
                <img src="images/lavender/lavender4.png" alt="Test Image">
                <h2>Sketching</h2>
                <img src="images/lavender/lavender5.png" alt="Test Image">
                <h1>PROTOTYPING</h1>
                <h2>Gadgets</h2>
                <p><em>Base Bed:</em> 2mm plank * 6 / Model tree powder / sand table grass powder / lawn lamps * 4<br/>
                <em>Light:</em> Violet light diode * 35 / Photoresistance * 5 / purple woolen yarn<br/>
                <em>Smell:</em> Lavender oil and sponge / Motor and fan kits<br/>
                <em>Sound:</em> Electronic music box kit<br/>
                <em>Circuit:</em> Arduino open source platform / Bread Board / Some wires / AA battery in PRC * 4</p>
                <img src="images/lavender/lavender6.png" alt="Test Image">
                <h2>Workshop</h2>
                <p>Make the bed with 2mm thick wooden board and fix the motor on it.
                Connect the circuit board with a breadboard, and then connect the motor, fan, music box, photosensitive resistor, and purple led lights one by one.</p>
                <img src="images/lavender/lavender7.png" alt="Test Image">
                <p>Connect the battery to make sure that circuit access. Put the breadboard and the entire circuit into the base to fix them. Twist the bottle cap of the lavender oil and place the bottle into the corresponding groove.<br/>
                Drill the center of the bed cover and attach the sand table grass to the cover’s surface. Then pass led and photosensitive through the middle of the hole piercing, fix them at different heights. After that, bind the woolen yarn around the led and wires to make a look of lavender. And then put the lid on the box, and stick the grass lamps.<br/> 
                Finally, our project finished!</p>
                <img src="images/lavender/lavender8.png" alt="Test Image">
                <h2>Programming</h2>
                <img src="images/lavender/lavender9.png" alt="Test Image">
                <h2>Demo</h2>
                <p>Cover the roots of lavender——Trigger photoresistors——Diode lights turn on——Print the resistance value——Pass the motor signal——volatile essential oil——music box sound</p>
                <img src="images/lavender/lavender10.png" alt="Test Image">
                <div class="video-wrap">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/5ekUyxxpBt0?rel=0" frameborder="0" allowfullscreen>Loading...</iframe>
                </div>
                <h1>FINAL DESIGN</h1>
                <h2>Modeling</h2>
                <img src="images/lavender/lavender11.png" alt="Test Image">
                <h2>Usage Scenario</h2>
                <img src="images/lavender/lavender12.png" alt="Test Image">`.trim()
                break;

            case 2:
                sub_page_html = 
                `<h1 class="title">BIG NEWS ON EARTH</h1>
                <h6 class="desc">AUG. 2017 -- OCT. 2017 / PERSONAL PROJECT</h6>
                <hr>
                <p>Most children are curious and want to explore the limitations of the past and the future of the world. There's a problem. Only through Museum documentaries, pictures, drawings, earth science knowledge, children are difficult to understand. Fragmentation of knowledge allows children to accept the information disorder.</p>
                <h1>BACKGROUND</h1>
                <h2>World Science Education Development Map</h2>
                <img src="images/bignews/1.png" alt="Test Image">
                <p>In 2016, some experiments were conducted to collect relevant data about children's science education in china. The results show that the main purpose of science education for children in China is to cultivate scientific inquiry ability and satisfy children's curiosity. The main ways of education are explanation, demonstration and practice by children themselves.</p>
                <img src="images/bignews/2.png" alt="Test Image">
                <p>In 2011, Professor Kou Yuxia conducted an experiment on science enlightenment education in six kindergartens directly under the Heilongjiang province of china. The results show that preschool teachers have a lower mastery of scientific knowledge. At the same time, teachers have a correct understanding of the purpose of science education in kindergartens.</p>
                <img src="images/bignews/3.png" alt="Test Image">
                <p>However, preschool teachers are deficient in the methods of imparting scientific knowledge. Only some preschool teachers can design different teaching methods and different game content to instill knowledge. Most preschool teachers are relatively single in their teaching methods. For example, from the material situation, the material form is small, and some of the materials are unsafe and difficult to operate, such as: glass, iron nails, iron filings, etc.</p>
                <h1>RELATED PRODUCTS</h1>
                <img src="images/bignews/4.png" alt="Test Image">
                <h2>Existing Science Education Products and Ways</h2>
                <img src="images/bignews/5.png" alt="Test Image">
                <h1>EXPERIMENT</h1>
                <h3>Method</h3>
                <p>Each group had 30 minutes to play mobile phone app, read science books, or listen to teacher’s lecture to get science knowledge. After 30 minutes, they all need to answer a quick test, so that we can know the extent to which they acquire knowledge through different methods.</p>
                <h3>Population</h3>
                <p>There were 30 fourth grade students at Beijing Zhongguancun No.1 Primary School participated this experiment. Students’ ages are from 9 to 11. 30 students were divided into 3 groups, and each group include 10 students.</p>
                <img src="images/bignews/6.png" alt="Test Image">
                <p>From the three educational methods designed ten topics, considering the experimental students aged 9-11 years old, do not want to cause too much burden on the answer, so students only choose right and wrong.</p>
                <img src="images/bignews/7.png" alt="Test Image">
                <h2>Result</h2>
                <img src="images/bignews/8.png" alt="Test Image">
                <p>In group A, 1 students stopped using app in eighteenth minutes. All 6 students stopped using -25 for 20 minutes. Only 3 students play app all the time. 10 students scored an average of 8.1 points.</p>
                <img src="images/bignews/9.png" alt="Test Image">
                <p>In group B, 3 students did not read books in 10 minutes. 2 students stopped reading in 10-15 minutes. The remaining 5 students stopped reading in 15-20 minutes. 10 students scored an average of 5.8 points.</p>
                <img src="images/bignews/10.png" alt="Test Image">
                <p>In group C, from the tenth minute, and 2 students were not listening. 15-20 minutes, half of the students are not listening. In twenty-fifth minutes, only 1 students attended the lecture. 10 students scored an average of 6.3 points.</p>
                <img src="images/bignews/11.png" alt="Test Image">
                <h2>Conclusion</h2>
                <p>Students' attention time is significantly longer for interactive app. In the process of playing app, the amount of knowledge is relatively large. Pure text and pictures of book forms, students receive information is low, and no interest. Classroom instruction, although it allows students to obtain basic information, but no initiative in learning.</p>
                <h1>DESIGN OBJECTIVE</h1>
                <p>This project focuses on the development of the earth, and products can provide visual and interesting knowledge experience for teenagers. You can also take it with you and share it with your friends.</p>
                <img src="images/bignews/12.png" alt="Test Image">
                <h1>SKETCHING</h1>
                <img src="images/bignews/13.png" alt="Test Image">`.trim()
                break;

            case 3:
            sub_page_html = `
                <div class="content">
                    <img id="close_sub_page" class="close-sub-page" src="images/close-btn.png" alt="Close">
                    <h1 class="title">PROJRECT 3</h1>
                    <h6 class="desc">JULY 2016 -- AUGUST 2016 / PERSONAL PROJECT</h6>
                    <hr>
                    <h1>TITLE 1</h1>
                    <h2>Title 2</h2>
                    <h3>Title 3</h3>
                    <p>texte xttextt exte xttextte xtextte xttexte xttex ttexte xttextt extextte xttex text text</p>
                    <img src="images/test-img.jpg" alt="Test Image">
                    <div class="video-wrap">
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/5ekUyxxpBt0?rel=0" frameborder="0" allowfullscreen>Loading...</iframe>
                    </div>
                </div>
                `.trim()
                break;

            case 4:
                sub_page_html = `
                <div class="content">
                    <img id="close_sub_page" class="close-sub-page" src="images/close-btn.png" alt="Close">
                    <h1 class="title">PROJRECT 4</h1>
                    <h6 class="desc">JULY 2016 -- AUGUST 2016 / PERSONAL PROJECT</h6>
                    <hr>
                    <h1>TITLE 1</h1>
                    <h2>Title 2</h2>
                    <h3>Title 3</h3>
                    <p>texte xttextt exte xttextte xtextte xttexte xttex ttexte xttextt extextte xttex text text</p>
                    <img src="images/test-img.jpg" alt="Test Image">
                    <div class="video-wrap">
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/5ekUyxxpBt0?rel=0" frameborder="0" allowfullscreen>Loading...</iframe>
                    </div>
                </div>
                `.trim()
                break;

            case 5:
                sub_page_html = `
                <div class="content">
                    <img id="close_sub_page" class="close-sub-page" src="images/close-btn.png" alt="Close">
                    <h1 class="title">PROJRECT 5</h1>
                    <h6 class="desc">JULY 2016 -- AUGUST 2016 / PERSONAL PROJECT</h6>
                    <hr>
                    <h1>TITLE 1</h1>
                    <h2>Title 2</h2>
                    <h3>Title 3</h3>
                    <p>texte xttextt exte xttextte xtextte xttexte xttex ttexte xttextt extextte xttex text text</p>
                    <img src="images/test-img.jpg" alt="Test Image">
                    <div class="video-wrap">
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/5ekUyxxpBt0?rel=0" frameborder="0" allowfullscreen>Loading...</iframe>
                    </div>
                </div>
                `.trim()
                break;
        
            default:
                sub_page_html = 'No Project Content!'
                break;
        }

        sub_page_wrapper.find('.content').html(sub_page_html);

        !sub_page_wrapper.hasClass('show') && sub_page_wrapper.addClass('show');

        $('body').css({
            height: _win_height + 'px',
            overflow: 'hidden'
        })
    })


    /**************      Tool     **************/
    function getBCR(ele, type) {
        if (type !== undefined) {
        return ele.getBoundingClientRect()[type];
        } else {
        return ele.getBoundingClientRect();
        }
    }

    /**
     * Preload
     */
    // function init() {
    //     var indexID = 0,
    //         pre_files = [],
    //         loader = new createjs.LoadQueue();

    //     // add preload images
    //     $('body').find('img').each(function (i, e) {
    //         pre_files.push({
    //             "id": "img" + indexID++,
    //             "src": $(e).attr('src')
    //         });
    //     });

    //     loader.addEventListener("complete", handleComplete);
    //     loader.addEventListener('progress', handleProgress);
    //     loader.addEventListener('error', handleError);

    //     // Start loading
    //     loader.loadManifest(pre_files);

    //     function handleComplete() {
    //         // console.log('Loading complete...');
    //         resizeAll();

    //         init_funcs.forEach((e) => {
    //             e();
    //         });

    //     }

    //     function handleProgress(e) {
    //         var num = Math.floor(e.progress * 100);
    //         console.log(num);
    //     }

    //     function handleError(e) {
    //         console.error(e.title);
    //         console.dir(e.data);
    //     }

    // }
    // init();

}(jQuery, window));
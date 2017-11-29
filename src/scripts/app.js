/*
 * @Author: Mr.B 
 * @Date: 2017-11-27 12:17:37 
 * @Last Modified by: Nokey
 * @Last Modified time: 2017-11-29 00:16:07
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
                sub_page_html = `
                <div class="content">
                    <img id="close_sub_page" class="close-sub-page" src="images/close-btn.png" alt="Close">
                    <h1 class="title">PROJRECT 1</h1>
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

            case 2:
                sub_page_html = `
                <div class="content">
                    <img id="close_sub_page" class="close-sub-page" src="images/close-btn.png" alt="Close">
                    <h1 class="title">PROJRECT 2</h1>
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

        sub_page_wrapper.html(sub_page_html);

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
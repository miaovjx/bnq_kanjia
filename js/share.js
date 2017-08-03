/**
 * Created by json(610330335@qq.com) .
 */
// import '../css/gx-animate.min.css';
// import '../css/style.css';
// import '../js/jweixin-1.0.0.js';
// import '../js/zepto.min.js';
// import '../js/pxloader-images.min.js';
// import '../js/m.Tween.js';
// import '../js/PageSlider.js';
$(function() {
    //加载图
    var imgarr = ['images/bg1.jpg'];
    //app初始化
    var h5 = new PageSlider({
        pages: $('.page-wrap .page'),
        dev: 0, //
        // musicUrl: 'music/bg.mp3',
        baseUrl: 'http://baj.weiyihui.com.cn/bnq_bargain/'
    });
    ////默认分享
    var openid = $('.shareid').val();
    var state = $('.states').val();
    // console.log(openid,state)
    h5.wxShare('和我一起砍价！1元拿走爆款啦！', '我在百安居抢爆款啦，各种商品一砍到底，就等你来帮我！', '和我一起砍价！1元拿走爆款啦！', h5.baseUrl + 'index.php?mod=share&shareid=' + openid + '&state=' + state, h5.baseUrl + 'images/jsshare.jpg');
    h5._loadimg(imgarr, function() {
        setTimeout(function() {
            $('.loading').addClass('none');
            $('.page1').removeClass('none');
        }, 500);
    });
    var states = $('.states').val();
    countDown(); //倒计时开始
    var goodsLst = '';
    var numa = $('.numa').val();
    var numb = $('.numb').val();
    var numc = $('.numc').val();
    var goodsLst1 = [{ //第一波
        gtxt: "./images/gtxt1.png",
        goodsImg: "./images/goods1.png",
        formal_price: '176',
        now_price: '149',
        tag1: true,
        tag2: false,
        goodsDetail: './images/goods1_d.png',
        selloutImg: "./images/goodsout1.png",
        sellout: false
    }, {
        gtxt: "./images/gtxt2.png",
        goodsImg: "./images/goods2.png",
        formal_price: '1699',
        now_price: '1099',
        tag1: true,
        tag2: false,
        goodsDetail: './images/goods2_d.png',
        selloutImg: "./images/goodsout2.png",
        sellout: false
    }, {
        gtxt: "./images/gtxt3.png",
        goodsImg: "./images/goods3.png",
        formal_price: '19.9',
        now_price: '1',
        tag1: false,
        tag2: true,
        goodsDetail: './images/goods7_d.png',
        selloutImg: "./images/goodsout7.png",
        sellout: false
    }];
    var goodsLst2 = [{ //第二波
        gtxt: "./images/ntxt1.png",
        goodsImg: "./images/next1.png",
        formal_price: '1539',
        now_price: '999',
        tag1: true,
        tag2: false,
        goodsDetail: './images/goods3_d.png',
        selloutImg: "./images/nextsout1.png",
        sellout: false
    }, {
        gtxt: "./images/ntxt2.png",
        goodsImg: "./images/next2.png",
        formal_price: '1380',
        now_price: '999',
        tag1: true,
        tag2: false,
        goodsDetail: './images/goods4_d.png',
        selloutImg: "./images/nextsout2.png",
        sellout: false
    }, {
        gtxt: "./images/gtxt3.png",
        goodsImg: "./images/goods3.png",
        formal_price: '19.9',
        now_price: '1',
        tag1: false,
        tag2: true,
        goodsDetail: './images/goods7_d.png',
        selloutImg: "./images/goodsout7.png",
        sellout: false
    }];
    var goodsLst3 = [{ //第三波
        gtxt: "./images/ntxt4.png",
        goodsImg: "./images/next4.png",
        formal_price: '2099',
        now_price: '1999',
        tag1: true,
        tag2: false,
        goodsDetail: './images/goods5_d.png',
        selloutImg: "./images/nextsout4.png",
        sellout: false
    }, {
        gtxt: "./images/ntxt5.png",
        goodsImg: "./images/next5.png",
        formal_price: '2480',
        now_price: '1899',
        tag1: true,
        tag2: false,
        goodsDetail: './images/goods6_d.png',
        selloutImg: "./images/nextsout5.png",
        sellout: false
    }, {
        gtxt: "./images/gtxt3.png",
        goodsImg: "./images/goods3.png",
        formal_price: '19.9',
        now_price: '1',
        tag1: false,
        tag2: true,
        goodsDetail: './images/goods7_d.png',
        selloutImg: "./images/goodsout7.png",
        sellout: false
    }];
    if (numa >= 3000) {
        goodsLst1[0].sellout = true;
        goodsLst2[0].sellout = true;
        goodsLst3[0].sellout = true;
    }
    if (numb >= 3000) {
        goodsLst1[1].sellout = true;
        goodsLst2[1].sellout = true;
        goodsLst3[1].sellout = true;
    }
    if (numc >= 1000) {
        goodsLst1[2].sellout = true;
        goodsLst2[2].sellout = true;
        goodsLst3[2].sellout = true;
    }
    if (states == 1) {
        goodsLst = goodsLst1;
    } else if (states == 2) {
        goodsLst = goodsLst2;
    } else if (states == 3) {
        goodsLst = goodsLst3;
    }
    console.log('goodsLst:' + goodsLst);
    new Vue({
        el: ".mainwrap",
        data: {
            list: goodsLst,
            img: ''
        },
        methods: {
            show(item) { //
                if (!item.sellout) {
                    $('.tk_detail').removeClass('none');
                    this.img = item.goodsDetail
                }
            }
        }
    });
    /* 阻止ios默认活动*/
    document.addEventListener('touchmove', stopSlide, false);
    $('.page_my_not,.page_share').on('touchmove', function() { //释放默认事件
        document.removeEventListener('touchmove', stopSlide, false);
    }).on('touchend', function() {
        document.addEventListener('touchmove', stopSlide, false);
    });

    function stopSlide(e) { //阻止页面默认行为
        var e = window.event || e;
        e.stopPropagation();
        e.preventDefault();
    };
    var cut = $('.cut').val();
    var kanguo = false;
    console.log('cut' + cut);
    if (cut > 0) { //已帮忙砍过
        kanguo = true;
        $('.btn_share_help').removeClass('none');
    } else {
        kanguo = false;
        $('.btn_share_help').removeClass('none');
    }
    $.ajax({
        url: 'index.php?mod=share&ac=detail',
        type: 'POST',
        data: {
            shareid: openid
        },
        dataType: 'json',
        beforeSend: function() {
            $('.tk-load').removeClass('none');
        },
        success: function(data) {
            $('.tk-load').addClass('none');
            $('.kanmoney').html(data.allmoney);
            $('.userImg').attr('src', data.head);
            $('.user_name').html(data.nick);
            $('.kanfriend').html(data.num);
            var type = data.type;
            var res = data.res;
            var btn_frined_take = true;
            /*var res = [{
                headimgurl: 'images/user.jpg'
            }, {
                headimgurl: 'images/user.jpg'
            }, {
                headimgurl: 'images/user.jpg'
            }, {
                headimgurl: 'images/user.jpg'
            }, {
                headimgurl: 'images/user.jpg'
            },{
                headimgurl: 'images/user.jpg'
            }]*/
            console.log(type);
            $('.user_not').removeClass('none');
            $('.btn_share_help').removeClass('none');
            if (res) {
                var html = '';
                for (var i = 0; i < res.length; i++) {
                    html += '<li class="clearfix"><div class="col1"><img class="userImg" src="' + res[i].headimgurl + '" alt=""/></div><div class="col2">' + res[i].nickname + '</div><div class="col3">￥<strong>' + res[i].money + '</strong></div></li>'
                }
                $('.friend_lst').append(html);
            }
            if (type == 0) { //未集满
                btn_frined_take = false
            } else if (type == 1) { //已集满,可领券
                btn_frined_take = true
            }
            $('.btn_share_help').on('tap', function() {
                if (btn_frined_take) { //已集满
                    $('.tk').addClass('none');
                    $('.tk_kan2').removeClass('none');
                } else { //未集满
                    var shareid = $('.shareid').val();
                    $.ajax({
                        url: 'index.php?mod=index&ac=cut',
                        type: 'POST',
                        data: {
                            shareid: shareid
                        },
                        dataType: 'json',
                        beforeSend: function() {
                            $('.tk-load').removeClass('none');
                        },
                        success: function(data) {
                            $('.tk-load').addClass('none');
                            if (data.result == true) {
                                var money = data.money
                                $('.kans strong').html(money);
                                $('.tk').addClass('none');
                                $('.tk_kan1').removeClass('none');
                            } else {
                                if (data.error == 1) {
                                    alert('参数不全');
                                } else if (data.error == 2) {
                                    alert('您已经帮好友砍过价了');
                                    var ran = Math.random();
                                    window.location.href = "index.php?" + ran
                                } else if (data.error == 404) {
                                    alert('非法进入');
                                } else if (data.error == 3) {
                                    alert('已砍满额（可领券）');
                                } else if (data.error == 4) {
                                    alert('已砍满额（可领券）');
                                } else if (data.error == 5) {
                                    alert('入库失败');
                                }
                            }
                        }
                    })
                }
            });
        }
    })
    $('.btn_share_join,.btn_kan1,.btn_kan2,.btn_now').on('tap', function() {
        var ran = Math.random();
        window.location.href = "index.php?" + ran
    });
    $('.btn_close,.btn_leave').on('click', function() {
        $(this).closest('.tk').addClass('none');
    });
    $('.tk_kan1 .btn_close').on('click', function() {
        window.location.reload();
    });
    $('.btn_taken').on('tap', function() { //获取优惠券接口
        if (takenBtn) {
            takenBtn = false;
            if (numa >= 3000 && numb >= 3000 && numc >= 1000) {
                alert('优惠券已被领完！')
            } else {
                $.ajax({
                    url: 'index.php?mod=index&ac=getcoupon',
                    type: 'POST',
                    data: {},
                    dataType: 'json',
                    beforeSend: function() {
                        $('.tk-load').removeClass('none');
                    },
                    success: function(data) {
                        $('.tk-load').addClass('none');
                        takenBtn = true;
                        if (data.result == true) { //
                            // alert('领取成功！')
                            $('.tk_suc_taken').removeClass('none');
                        } else { //
                            if (data.error == 1) {
                                //alert('已领过券')
                                $('.tk_already').removeClass('none');
                            } else if (data.error == 2) {
                                alert('砍价金额未满')
                            } else if (data.error == 404) {
                                alert('非法进入')
                            } else if (data.error == 3) {
                                alert('未找到参与记录')
                            } else if (data.error == 4) {
                                alert('领券失败')
                            }
                        }
                    }
                })
            }
        } else {
            alert('请勿重复提交!')
        }
    });
    $('.btn_detail').on('tap', function(ev) {
        ev.stopPropagation();
        $('.tk_rule').removeClass('none');
    });
    //分享弹层
    $('.btn_share').on('tap', function(ev) {
        ev.stopPropagation();
        $('.tk_share').removeClass('none');
    });
    $(document).on('tap', function() {
        $('.tk_share').addClass('none')
    });
    //滚动效果
    (function() {
        var box = document.querySelector('#box');
        var inner = box.querySelector('#inner');
        var length = 10;
        var start = 0;
        var isEnd = false;
        setScroll();

        function setScroll() {
            mScroll({
                el: box,
                start: function(e) {
                    //console.log("手指按下要执行的函数");
                    var innerTop = Math.round(css(inner, "translateY")) - 5;
                    var minTop = box.clientHeight - inner.offsetHeight;
                    // console.log('minTop:' + minTop)
                    // console.log('innerTop:' + innerTop)
                    if (minTop >= innerTop) {
                        console.log("用户是在底部进行拖拽的");
                        isEnd = true;
                    } else {
                        isEnd = false;
                    }
                },
                offBar: false,
                move: function(e) {
                    //console.log("发生滚动的时候，执行的函数")
                },
                end: function(e) {
                    //console.log("手指抬起要执行的函数");
                    var innerTop = Math.round(css(inner, "translateY")) - 5;
                    var minTop = box.clientHeight - inner.offsetHeight;
                    if (isEnd && minTop >= innerTop) {
                        console.log("可以加载更多");
                        //clearInterval(inner.timer);//清除定时阻止滑屏函数回弹动画
                        document.querySelector('#scrollBar').style.opacity = 0;
                        isEnd = false;
                    }
                },
                over: function() {
                    //console.log("滚动结束");
                }
            });
        }

        function mScroll(init) {
            if (!init.el) {
                return;
            }
            var wrap = init.el;
            var inner = init.el.children[0];
            var scrollBar = document.createElement("div");
            var startPoint = 0;
            var startEl = 0;
            var lastY = 0;
            var lastDis = 0;
            var lastTime = 0;
            var lastTimeDis = 0;
            var back = document.documentElement.clientWidth / 8;
            // var back = 0;
            var maxTranslate = wrap.clientHeight - inner.offsetHeight;
            scrollBar.id = "scrollBar";
            if (!init.offBar) {
                var scale = wrap.clientHeight / inner.offsetHeight;
                var winH = $(window).height();
                console.log('winH' + winH)
                /*if (winH < 1000) {
                            inner.style.height = 1200 + 'px';
                            $('.iconsBom').css({
                                'bottom': '110px'
                            })
                        }*/
                inner.style.minHeight = "100%";
                scrollBar.style.cssText = "width:20px;background:rgba(0,0,0,.5);position:absolute;right:40px;top:0;border-radius:2px;opacity:0;transition:.3s opacity;";
                wrap.appendChild(scrollBar);
            }
            css(inner, "translateZ", 0.01);
            inner.addEventListener('touchstart', function(e) {
                maxTranslate = wrap.clientHeight - inner.offsetHeight;
                // console.log('clientHeight:'+wrap.clientHeight)
                // console.log('offsetHeight:'+inner.offsetHeight)
                // console.log('maxTranslate:'+maxTranslate)
                if (!init.offBar) {
                    if (maxTranslate >= 0) {
                        scrollBar.style.display = "none";
                    } else {
                        scrollBar.style.display = "block";
                    }
                    scale = wrap.clientHeight / inner.offsetHeight;
                    scrollBar.style.height = wrap.clientHeight * scale + "px";
                }
                clearInterval(inner.timer);
                startPoint = e.changedTouches[0].pageY;
                startEl = css(inner, "translateY");
                lastY = startEl;
                lastTime = new Date().getTime();
                lastTimeDis = lastDis = 0;
                (init.offBar) || (scrollBar.style.opacity = 1);
                init.start && init.start.call(box, e);
            });
            inner.addEventListener('touchmove', function(e) {
                var nowTime = new Date().getTime();
                var nowPoint = e.changedTouches[0].pageY;
                var dis = nowPoint - startPoint;
                var translateY = startEl + dis;
                if (translateY > back) {
                    translateY = back
                } else if (translateY < maxTranslate - back) {
                    translateY = maxTranslate - back;
                }
                css(inner, "translateY", translateY);
                (init.offBar) || css(scrollBar, "translateY", -translateY * scale);
                lastDis = translateY - lastY;
                lastY = translateY;
                lastTimeDis = nowTime - lastTime;
                lastTime = nowTime;
                init.move && init.move.call(box, e);
            });
            inner.addEventListener('touchend', function(e) {
                var type = "easeOut";
                var speed = Math.round(lastDis / lastTimeDis * 10);
                speed = lastTimeDis <= 0 ? 0 : speed;
                var target = Math.round(speed * 30 + css(inner, "translateY"));
                if (target > 0) {
                    target = 0;
                    type = "backOut";
                } else if (target < maxTranslate) {
                    target = maxTranslate;
                    type = "backOut";
                }
                // css(inner, "translateY",target);
                MTween({
                    el: inner,
                    target: {
                        translateY: target
                    },
                    time: Math.round(Math.abs(target - css(inner, "translateY")) * 0.8),
                    type: type,
                    callBack: function() {
                        (init.offBar) || (scrollBar.style.opacity = 0);
                        init.over && init.over.call(box, e); //滚动结束监听
                    },
                    callIn: function() {
                        var translateY = css(inner, "translateY");
                        init.offBar || css(scrollBar, "translateY", -translateY * scale);
                        init.move && init.move.call(box, e); //并发执行 滚动监听
                    }
                });
                init.end && init.end.call(box, e);
            });
        }
    })();

    function countDown() {
        var countNum = $('.countdownnum').val() || 86400;
        var timer = setInterval(function() {
            countNum -= 1;
            $('.countBox').html(timeStamp(countNum));
            if (countNum == 0) {
                clearInterval(timer);
            }
        }, 1000);
    }

    function timeStamp(second_time) {
        var time = parseInt(second_time);
        if (second_time < 60) {
            time = '<span class="day">00</span>' + " " + '<span class="hour">00</span>' + " " + '<span class="min">00</span>';
        } else {
            if (parseInt(second_time) > 60) {
                var second = parseInt(second_time) % 60;
                var min = parseInt(second_time / 60);
                time = '<span class="day">00</span>' + " " + '<span class="hour">00</span>' + " " + '<span class="min">' + toZero(min) + '</span>';
                if (min > 60) {
                    min = parseInt(second_time / 60) % 60;
                    var hour = parseInt(parseInt(second_time / 60) / 60);
                    time = '<span class="day">00</span>' + " " + '<span class="hour">' + toZero(hour) + '</span>' + " " + '<span class="min">' + toZero(min) + '</span>' + " ";
                    if (hour > 24) {
                        hour = parseInt(parseInt(second_time / 60) / 60) % 24;
                        var day = parseInt(parseInt(parseInt(second_time / 60) / 60) / 24);
                        time = '<span class="day">' + toZero(day) + '</span>' + " " + '<span class="hour">' + toZero(hour) + '</span>' + " " + '<span class="min">' + toZero(min) + '</span>';
                    }
                }
            }
        }
        return time;
    }

    function toZero(num) {
        if (num < 10) {
            return '0' + num;
        } else {
            return '' + num;
        }
    }
});
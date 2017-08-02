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
        dev: 1, //
        // musicUrl: 'music/bg.mp3',
        baseUrl: 'http://xk.guoxinad.com.cn/ad_invitation/'
    });
    ////默认分享
    h5.wxShare('宝贝性格测试，你是否真懂你的娃？', '解自家娃！', '宝贝性格测试，你是否真懂你的娃？', h5.baseUrl + 'index.html', h5.baseUrl + 'images/jsshare.jpg');
    var url = document.location.href;
    var pos = url.lastIndexOf("shareid=");
    var shareid = '';
    var realshareid = '';
    h5._loadimg(imgarr, function() {
        shareid = url.substr(pos + 8, url.length);
        //alert('shareid:'+shareid);
        var poss = shareid.indexOf("&");
        if (poss !== -1) {
            realshareid = shareid.substr(0, poss);
        } else {
            realshareid = shareid;
        }
        setTimeout(function() {
            $('.loading').addClass('none');
            $('.page1').removeClass('none');
        }, 500);
    });
    var btn_kanjia = false;
    var goodsLst = [{ //第一波
        gtxt: "./images/gtxt1.png",
        goodsImg: "./images/goods1.png",
        formal_price: '176',
        now_price: '149',
        tag1: true,
        tag2: false,
        goodsDetail: './images/goods1_d.png'
    }, {
        gtxt: "./images/gtxt2.png",
        goodsImg: "./images/goods2.png",
        formal_price: '1699',
        now_price: '1099',
        tag1: true,
        tag2: false,
        goodsDetail: './images/goods2_d.png'
    }, {
        gtxt: "./images/gtxt3.png",
        goodsImg: "./images/goods3.png",
        formal_price: '19.9',
        now_price: '1',
        tag1: false,
        tag2: true,
        goodsDetail: './images/goods7_d.png'
    }];
    /* var goodsLst = [{ //第二波
        gtxt: "./images/ntxt1.png",
        goodsImg: "./images/next1.png",
        formal_price: '1539',
        now_price: '999',
        tag1: true,
        tag2: false,
        goodsDetail: './images/goods3_d.png'
    }, {
        gtxt: "./images/ntxt2.png",
        goodsImg: "./images/next2.png",
        formal_price: '1380',
        now_price: '999',
        tag1: true,
        tag2: false,
        goodsDetail: './images/goods4_d.png'
    }, {
        gtxt: "./images/gtxt3.png",
        goodsImg: "./images/goods3.png",
        formal_price: '19.9',
        now_price: '1',
        tag1: false,
        tag2: true,
        goodsDetail: './images/goods7_d.png'
    }];*/
    /* var goodsLst = [{ //第三波
        gtxt: "./images/ntxt4.png",
        goodsImg: "./images/next4.png",
        formal_price: '2099',
        now_price: '1999',
        tag1: true,
        tag2: false,
        goodsDetail: './images/goods5_d.png'
    }, {
        gtxt: "./images/ntxt5.png",
        goodsImg: "./images/next5.png",
        formal_price: '2480',
        now_price: '1899',
        tag1: true,
        tag2: false,
        goodsDetail: './images/goods6_d.png'
    },{
        gtxt: "./images/gtxt3.png",
        goodsImg: "./images/goods3.png",
        formal_price: '19.9',
        now_price: '1',
        tag1: false,
        tag2: true,
        goodsDetail: './images/goods7_d.png'
    }];*/
    var nextLst = [{
        ntxt: "./images/ntxt1.png",
        nextImg: "./images/next1.png"
    }, {
        ntxt: "./images/ntxt2.png",
        nextImg: "./images/next2.png"
    }, {
        ntxt: "./images/ntxt3.png",
        nextImg: "./images/next3.png"
    }];
    new Vue({
        el: ".mainwrap",
        data: {
            list: goodsLst,
            nextLst: nextLst,
            img: ''
        },
        methods: {
            show(item) { //
                $('.tk_detail').removeClass('none');
                this.img = item.goodsDetail
            }
        }
    });
    $('.btn_now,.btn_join').on('tap', function(ev) {
        ev.stopPropagation();
        $('.tk_info').removeClass('none');
    });
    var tel = '';
    //加入会员，集客砍价
    $('.btn_vip').on('tap', function(ev) {
        ev.stopPropagation();
        tel = $('.phone').val();
        var check = $('.code').val();
        console.log('tel:' + tel, 'check:' + check);
        //第三方注册接口：
        $.ajax({
            url: 'http://gz2.bnq.com.cn/Web/register.html',
            type: 'POST',
            dataType: 'jsonp',
            jsonp: 'jsoncallback',
            data: {
                tel: tel,
                check: check,
                agree: 1
            },
            dataType: 'json',
            beforeSend: function() {
                $('.tk-load').removeClass('none');
            },
            success: function(data) {
                $('.tk-load').addClass('none');
                if (data.code == 1) {
                    alert('注册成功!');
                } else {
                    if (data.code == 0) {
                        alert('验证码不正确!');
                    } else if (data.code == 2) {
                        alert('您已经是会员了!');
                    }
                }
            }
        })
        $.ajax({
            url: 'index.php?mod=index&ac=info',
            type: 'POST',
            data: {
                phone: tel
            },
            dataType: 'json',
            beforeSend: function() {
                $('.tk-load').removeClass('none');
            },
            success: function(data) {
                $('.tk-load').addClass('none');
                if (data.result == true) {
                    //alert('注册成功!');
                } else {
                    if (data.error == 1) {
                        alert('参数不全!');
                    } else if (data.error == 2) {
                        alert('手机号格式错误!');
                    } else if (data.error == 3) {
                        alert('手机号已被使用!');
                    } else if (data.error == 4) {
                        alert('入库失败!');
                    }
                }
            }
        })
    });
    //短信验证码接口
    $('.btn_yz').on('tap', function(ev) {
        ev.stopPropagation();
        tel = $('.phone').val();
        console.log('tel:' + tel);
        $.ajax({
            url: 'http://gz2.bnq.com.cn/Code/send.html',
            type: 'POST',
            dataType: 'jsonp',
            jsonp: 'jsoncallback',
            data: {
                mobile: tel
            },
            dataType: 'json',
            beforeSend: function() {
                $('.tk-load').removeClass('none');
            },
            success: function(data) {
                $('.tk-load').addClass('none');
                if (data.state == 'success') {
                    alert('手机验证码发送成功!');
                } else {
                    alert('手机验证码发送失败，请稍后再试');
                }
            }
        })
    });
    //立即领券 
    $('.btn_taken').on('tap', function(ev) {
        ev.stopPropagation();
        var idNum = 8876;
        console.log('tel:' + tel);
        btn_kanjia = true;
        $('.tk').addClass('none');
        $.ajax({
            url: 'http://gz2.bnq.com.cn/Web/getMtDataWeb.html',
            type: 'POST',
            dataType: 'jsonp',
            jsonp: 'jsoncallback',
            data: {
                id: idNum,
                mobile: tel
            },
            dataType: 'json',
            beforeSend: function() {
                $('.tk-load').removeClass('none');
            },
            success: function(data) {
                $('.tk-load').addClass('none');
                if (data.status == 'success') {
                    // alert('优惠券发放成功!');
                    $('.tk_suc_taken').removeClass('none');
                } else {
                    if (data.status == 'SUCCESS') {
                        alert('手机验证码发送失败，请稍后再试');
                    } else if (data.status == 'FAIL') {
                        alert('最大领券次数为1次');
                    }
                }
            }
        })
    });
    $('.btn_close').on('tap', function() {
        $(this).closest('.tk').addClass('none');
    });
    $('.btn_detail').on('tap', function(ev) {
        ev.stopPropagation();
        $('.tk_rule').removeClass('none');
    });
    //砍价接口
    $('.btn_kan').on('tap', function(ev) {
        ev.stopPropagation();
        var shareid = '';
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
                } else {
                    if (data.error == 1) {
                        alert('参数不全');
                    } else if (data.error == 2) {
                        alert('已砍过');
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
        if (btn_kanjia) {
            $('.tk').addClass('none');
            $('.tk_already').removeClass('none');
        } else {
            $('.tk').addClass('none');
            $('.tk_suc').removeClass('none');
        }
    });
    $('.tk_suc').on('tap', function(ev) {
        ev.stopPropagation();
    });
    $('.tk_suc_taken .btn_close').on('tap', function() {
        h5.moveTo(1, false);
    });
    //分享弹层
    $('.btn_share').on('tap', function(ev) {
        ev.stopPropagation();
        $('.tk_share').removeClass('none');
    });
    $(document).on('tap', function() {
        $('.tk_share').addClass('none')
    });
    countDown()

    function countDown() {
        var countNum = $('#timecount').val() || 86400;
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
    //滚动效果
    (function() {
        // var box = document.querySelector('#box');
        // var inner = box.querySelector('#inner');
        // var list = inner.querySelector('#list');
        var length = 10;
        var start = 0;
        var isEnd = false;
        // setScroll();
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
                inner.style.minHeight = "100%";
                scrollBar.style.cssText = "width:4px;background:rgba(0,0,0,.5);position:absolute;right:0;top:0;border-radius:2px;opacity:0;transition:.3s opacity;";
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
    })()
});
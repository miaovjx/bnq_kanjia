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
        baseUrl: 'http://xk.guoxinad.com.cn/bnq_bargain/'
    });
    var openid = $('.openid').val();
    h5.wxShare('宝贝性格', '解自家娃！', '宝贝性格测试', h5.baseUrl + 'index.php?mod=share&shareid=' + openid, h5.baseUrl + 'images/jsshare.jpg');
    // var url = document.location.href;
    // var pos = url.lastIndexOf("shareid=");
    // var shareid = '';
    // var realshareid = '';
    //         shareid = url.substr(pos + 8, url.length);
    //alert('shareid:'+shareid);
    // var poss = shareid.indexOf("&");
    // if (poss !== -1) {
    //     realshareid = shareid.substr(0, poss);
    // } else {
    //     realshareid = shareid;
    // }
    var goodsLst = '';
    var numa = $('.numa').val();
    var numb =$('.numb').val();
    var numc =$('.numc').val(); 
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

    console.log('numa:'+numa)
     console.log('numb:'+numb)
      console.log('numc:'+numc)

    if(numa>=3000){
        goodsLst1[0].sellout=true;
        goodsLst2[0].sellout=true;
        goodsLst3[0].sellout=true;
    }
    if(numb>=3000){
        goodsLst1[1].sellout=true;
        goodsLst2[1].sellout=true;
        goodsLst3[1].sellout=true; 
    }
 if(numc>=1000){
        goodsLst1[2].sellout=true;
        goodsLst2[2].sellout=true;
        goodsLst3[2].sellout=true; 
    }




    var nextLst1 = [{
        ntxt: "./images/ntxt1.png",
        nextImg: "./images/next1.png"
    }, {
        ntxt: "./images/ntxt2.png",
        nextImg: "./images/next2.png"
    }, {
        ntxt: "./images/ntxt3.png",
        nextImg: "./images/next3.png"
    }];
    var nextLst2 = [{
        ntxt: "./images/ntxt4.png",
        nextImg: "./images/next4.png"
    }, {
        ntxt: "./images/ntxt5.png",
        nextImg: "./images/next5.png"
    }, {
        ntxt: "./images/gtxt3.png",
        nextImg: "./images/goods3.png"
    }];
    var nextLst3 = [];
    h5._loadimg(imgarr, function() {
        setTimeout(function() {
            $('.loading').addClass('none');
            $('.page1').removeClass('none');
            countDown(); //倒计时开始
            var states = $('.states').val();
            console.log("第" + states + "周");
            if (states == 1) {
                goodsLst = goodsLst1;
                nextLst = nextLst1
            } else if (states == 2) {
                goodsLst = goodsLst2;
                nextLst = nextLst2
            } else if (states == 3) {
                goodsLst = goodsLst3;
                nextLst = nextLst3
            }
            console.log(goodsLst);
            new Vue({
                el: ".mainwrap",
                data: {
                    list: goodsLst,
                    nextLst: nextLst,
                    img: ''
                },
                mounted: function() {},
                methods: {
                    show(item) { //
                        if (!item.sellout) {
                            $('.tk_detail').removeClass('none');
                            this.img = item.goodsDetail
                        }
                    }
                }
            });
        
            $('.btn_now,.btn_join').on('tap', function(ev) {
                var login = $('.login').val();
                var cut = $('.cut').val();
                // alert(cut)
                $('.tk_rule').addClass('none');
                if (login > 0) { //无需注册
                    $('.page-wrap').css('-webkit-transform', 'translate(0, -100%)');
                    if (cut > 0) {
                        $.ajax({
                            url: 'index.php?mod=index&ac=detail',
                            type: 'POST',
                            data: {},
                            dataType: 'json',
                            beforeSend: function() {
                                $('.tk-load').removeClass('none');
                            },
                            success: function(data) {
                                $('.tk-load').addClass('none');
                                $('.kanmoney').html(data.allmoney);
                                $('.kanfriend').html(data.num);
                                var type =  data.type;
                                var res = data.res;
                                console.log(res);
                                if (res) {
                                   
                                    for (var i = 0; i < res.length; i++) {
                                        $('.user_img_lst li:eq(i)').append('<img class="userImg fl" src="' + res[i][headimgurl] + '" alt=""/>');
                                    }
                                  //  $('.user_img_lst').append(html);
                                }
                                if (type == 0) { //不可领券
                                    $('.btn_taken').addClass('none');
                                    $('.btn_take').removeClass('none')
                                } else if (type == 1) { //可领券
                                    $('.btn_taken').removeClass('none');
                                    $('.btn_take').addClass('none')
                                }
                            }
                        })
                        $('.page-wrap').css('-webkit-transform', 'translate(0, -200%)');
                    }
                } else {
                    $('.tk_info').removeClass('none');
                }
            });
                        //立即领券 
           /* $('.btn_taken').on('tap', function(ev) {
                ev.stopPropagation();
                var idNum = 8876;
                console.log('tel:' + tel);
             
                $('.tk').addClass('none');
                $.ajax({
                    url: 'http://gz2.bnq.com.cn/Web/getMtDataWeb.html',
                    type: 'POST',
                    dataType: 'jsonp',
                    jsonp: 'callback',
                    data: {
                        id: idNum,
                        mobile: tel
                    },
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
            });*/
                $('.btn_taken').on('tap', function() { //获取优惠券接口
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
                            if (data.result == true) { //
                                alert('领取成功！')
                            } else { //
                                if(data.error==1){
                                 alert('已领过券')
                                }else if(data.error==2){
                                    alert('砍价金额未满')
                                }else if(data.error==404){
                                    alert('非法进入')
                                }else if(data.error==3){
                                    alert('未找到参与记录')
                                }else if(data.error==4){
                                    alert('领券失败')
                                }
                            }
                        }
                    })
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
                        if (winH < 1000) {
                            inner.style.height = 1200 + 'px';
                            $('.iconsBom').css({
                                'bottom': '110px'
                            })
                        }
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
            })();
            var jq = jQuery.noConflict();
            var tel = '';
            //加入会员，集客砍价
            jq('.btn_vip').on('tap', function(ev) {
                ev.stopPropagation();
                tel = jq('.phone').val();
                var check = jq('.code').val();
                console.log('tel:' + tel, 'check:' + check);
                //第三方注册接口：
                /*jq.ajax({
            url: 'http://gz2.bnq.com.cn/Web/register.html',
            type: 'POST',
            dataType: 'jsonp',
            jsonp: "callback",
            jsonpCallback: "jsonpCallback",
            data: {
                tel: tel,
                check: check,
                agree: 1
            },
            beforeSend: function() {
                jq('.tk-load').removeClass('none');
            },
            success: function(data) {
                jq('.tk-load').addClass('none');
                callback(data)
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
        })*/
                $.ajax({
                    url: 'index.php?mod=index&ac=info',
                    type: 'POST',
                    data: {
                        check: check,
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
                            $('.tk_info').addClass('none');
                            h5.moveTo(1, false);
                        } else {
                            if (data.error == 1) {
                                alert('参数不全!');
                            } else if (data.error == 2) {
                                alert('手机号格式错误!');
                            } else if (data.error == 3) {
                                alert('手机号已被使用!');
                            } else if (data.error == 4) {
                                alert('入库失败!');
                            } else if (data.error == 5) {
                                alert('注册失败!');
                            }
                        }
                    }
                })
            });
            //短信验证码接口
            var yzbtn =true;
            var yztimer =null;
            var yzcont = 5;
            jq('.btn_yz').on('tap', function(ev) {
                ev.stopPropagation();
                tel = jq('.phone').val();
                console.log('tel:' + tel);
                if(yzbtn){
                    yzbtn=false;
                    $('.btn_yz').addClass('gray');
                    yztimer=setInterval(function (){
                        if(yzcont<=0){
                            clearInterval(yztimer);
                            yzcont=60
                             $('.btn_yz').removeClass('gray');
                             $('.btn_yz').html('获取验证码');
                            yzbtn=true;
                        }else{
                            yzcont--
                             $('.btn_yz').html('获取验证码('+ yzcont +')');
                        }
                    },1000)
                    jq.ajax({
                    url: 'http://gz2.bnq.com.cn/Code/send.html',
                    type: 'POST',
                    dataType: 'jsonp',
                    jsonp: "callback",
                    data: {
                        mobile: tel
                    },
                    beforeSend: function() {
                        jq('.tk-load').removeClass('none');
                    },
                    success: function(data) {
                        jq('.tk-load').addClass('none');
                        if (data.state == 'success') {
                            alert('手机验证码发送成功!');
                        } else {
                            alert('手机验证码发送失败，请稍后再试');
                        }
                    }
                })
                }
                
            });

            jq('.btn_close').on('tap', function(ev) {
                ev.stopPropagation();
                jq(this).closest('.tk').addClass('none');
            });
            $('.btn_detail').on('tap', function(ev) {
                ev.stopPropagation();
                $('.tk_rule').removeClass('none');
            });
            //砍价接口
            $('.btn_kan').on('tap', function(ev) {
                ev.stopPropagation();
                var shareid = $('.openid').val();;
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
                            $('.tk').addClass('none');
                            $('.tk_suc').removeClass('none');
                            var money = data.money
                            $('.kans strong').html(money)
                        } else {
                            if (data.error == 1) {
                                alert('参数不全');
                            } else if (data.error == 2) {
                                alert('已砍过');
                                $('.page-wrap').css('-webkit-transform', 'translate(0, -200%)');
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

            });
            $('.tk_suc').on('tap', function(ev) {
                ev.stopPropagation();
                $('.tk_suc').addClass('none');
                $('.page-wrap').css('-webkit-transform', 'translate(0, -200%)');
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
        }, 500);
    });

    function countDown() {
        var countNum = $('.countdownnum').val() || 86400;
        console.log(countNum);
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
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
    ////默认分享
    h5.wxShare('宝贝性格测试，你是否真懂你的娃？', '解自家娃！', '宝贝性格测试，你是否真懂你的娃？', h5.baseUrl + 'index.html', h5.baseUrl + 'images/jsshare.jpg');
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

    if (states == 1) {
        goodsLst = goodsLst1;
    } else if (states == 2) {
        goodsLst = goodsLst2;
    } else if (states == 3) {
        goodsLst = goodsLst3;
    }
    console.log('goodsLst:'+goodsLst);

    var cut = $('.cut').val();
    console.log('cut'+cut)
    if(cut>0){ //已帮忙砍过
        $('.btn_share_help').addClass('none');
         $('.btn_share_help2').removeClass('none');
    }else{
         $('.btn_share_help').removeClass('none');
         $('.btn_share_help2').addClass('none');
    }
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
        $.ajax({
            url: 'index.php?mod=share&ac=detail',
            type: 'POST',
            data: {},
            dataType: 'json',
            beforeSend: function() {
                $('.tk-load').removeClass('none');
            },
            success: function(data) {
                $('.tk-load').addClass('none');
                $('.kanmoney').html(data.allmoney);
                $('.userImg').attr('src',data.head);
                $('.user_name').html(data.nick);  
                $('.kanfriend').html(data.num);
                var type = data.type;
                var res = data.res;
                console.log(type);
                if (res) {
                    var html = '';
                    for (var i = 0; i < res.length; i++) {
                        html += '<li class="clearfix"><div class="col1"><img class="userImg" src="'+ res[i].headimgurl+'" alt=""/></div><div class="col2">'+ res[i].nickname+'</div><div class="col3">￥<strong>'+ res[i].money+'</strong></div></li>'
                    }
                    $('.friend_lst').append(html);
                }
                if (type == 0) { //不可领券
                    $('.user_done').addClass('none');
                    $('.user_not').removeClass('none')
                } else if (type == 1) { //可领券
                    $('.user_done').removeClass('none');
                    $('.user_not').addClass('none')
                }
            }
        })



    $('.btn_share_join,.btn_kan1,.btn_kan2').on('tap', function() {
        var ran =Math.random();
        window.location.href="index.php?"+ran   
    });


    $('.btn_close,.btn_leave').on('tap', function() {
        $(this).closest('.tk').addClass('none');
    });

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



    $('.btn_detail').on('tap', function(ev) {
        ev.stopPropagation();
        $('.tk_rule').removeClass('none');
    });

    var btn_frined_take = false;
    $('.btn_share_help').on('tap', function() {
       
        /*if (btn_frined_take) {
            $('.tk').addClass('none');
            $('.tk_kan2').removeClass('none');
        } else {
            $('.tk').addClass('none');
            $('.tk_kan1').removeClass('none');
        }*/
        var shareid = $('.shareid').val();;
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
                            $('.tk_kan1').removeClass('none');
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
    //分享弹层
    $('.btn_share').on('tap', function(ev) {
        ev.stopPropagation();
        $('.tk_share').removeClass('none');
    });
    $(document).on('tap', function() {
        $('.tk_share').addClass('none')
    });
 

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
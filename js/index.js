$(function(){

    $('#cartDemo').fullpage({
        navigation:true,
        sectionsColor:['#f9dd67','#84a2d4','#ef674d','#ffeedd','#cf4759','#85d9ed','#8ac060','#84d9ed'],
        afterLoad:function(a,page){

            // 谁滚出来谁加一个animation,其他的删掉
            $('.section').eq(page-1).addClass('animation').siblings().removeClass('animation');

            // jQuery加的动画，其实都是改的行内样式，但我们默认没有行内样式
            // 所以只要把所有的行内样式删掉，它就恢复成了默认的样子
            $('.section>div div').removeAttr('style');
            $('.section>div img').removeAttr('style');

            //如果滚出来的是第二屏
            if(page == 2){  

                $('.section2 .search01').animate({
                    marginLeft:-111
                },1000,'easeOutBack',function(){

                    //动画完成后，把search01隐藏，search02显示出来
                    $('.section2 .search01').hide();
                    $('.section2 .search02').show().delay(500).animate({

                        marginBottom:143,
                        marginLeft:130,
                        width:148
                    },1000);

                    $('.section2 .sofas').delay(500).animate({

                        width:441
                    },1000);

                });
            }else if(page == 4){

                //如果是第四屏
                $('.section4 .carBox').animate({

                    marginLeft:1800
                },2500,'easeInElastic',function(){

                    $('.section4 .keyboard').fadeIn();
                });

            }else if(page == 6){

                //盒子往下掉
                $('.section6 .giftBox').animate({

                    top:20

                },1500);

                $('.section6 .street').delay(1500).animate({
                    backgroundPositionX:-1400

                },2500,function(){

                    $('.section6 .man').animate({

                        height:140
                        // 放大完了再往右
                    },1000,function(){

                        $('.section6 .man').animate({

                            right:-150

                        },1000,function(){

                            //当人走完后再显示门
                            $('.section6 .door').show();
                            $('.section6 .girl').show();
                        });
                    });
                });
            }

            
            $('.section8').mousemove(function(e){

                 $('.section8 .hand').css('left',e.clientX - 70); 
                 $('.section8 .hand').css('top',e.clientY); 


                 $('.section8 .again').click(function(){

                    // location.reload();

                    // fullpage注册的方法，代表滚到第几页，1就是第一页，2就是第二页
                    $.fn.fullpage.moveTo(1);
                 });
                
            });
        }
    });
})
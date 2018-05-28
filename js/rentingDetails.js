// 点击房屋详情 ，切换锚点
$('.menu ul li').on('click', function () {
  $(this).addClass('active').siblings().removeClass('active');
});
$(".select .selected").on('click',function() {
  $('.select .date-select').toggle()
});
$('.select .date-select li').on('click',function(){
  var txt=$(this).text()
  $('.selected span').text(txt);
  $('.select .date-select').hide();
});


//点击提交
$('.user-info button').on('click',function(ev){
  $('.tips').css('display','block');
  setTimeout(function(){
    $('.tips').css('opacity', 1);
  },10);
  ev.stopPropagation();
});

//提示关闭按钮
$('.tips span').on('click',function(){
  $('.tips').css('opacity', 0);
  $('.user-info').css('opacity', 0);
  setTimeout(function(){
    $('.tips').css('display', 'none');
    $('.user-info').css('display', 'none');
  },510);
});

//点击任意位置弹层消失
$(document).on('click',function(ev){
  $('.user-info').css('opacity', 0);
  setTimeout(function(){
    $('.user-info').css('display', 'none');
  },510);
  ev.stopPropagation();
});

//点击输入框不消失
$('.user-info li input').on('click',function(ev){
  ev.stopPropagation();
});
$('.user-info li textarea').on('click',function(ev){
  ev.stopPropagation();
});
$('.tips').on('click',function(ev){
  ev.stopPropagation();
});

//点击预约弹层出现
$('.yuyue').on('click',function(ev){
  $('.user-info').css('display','block');
  setTimeout(function(){
    $('.user-info').css('opacity', 1);
  },10);
  ev.stopPropagation();
});

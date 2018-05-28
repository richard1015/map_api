// 点击房屋详情 ，切换锚点
$('.menu ul li').on('click',function(){
  $(this).addClass('active').siblings().removeClass('active');
});

// 请选择持有货币类型
$(".select .selected").on('click', function () {
  $('.select .date-select').toggle()
});
$('.select .date-select li').on('click', function () {
  var txt = $(this).text()
  var txtId = $(this).attr('data-id')

  $('.selected span').text(txt);
  $('.selected span').attr('data-id', txtId)
  $('.select .date-select').hide();
});
// 请选择兑换货币类型
$(".exchangecurrency .exchangeed").on('click', function () {
  $('.exchangecurrency .currencyType').toggle()
});
$('.exchangecurrency .currencyType li').on('click', function () {
  var txt = $(this).text()
  var txtType = $(this).attr('data-type')
  $('.exchangeed span').text(txt);
  $('.exchangeed span').attr('data-type', txtType)
  $('.exchangecurrency .currencyType').hide();
});

// 点击计算时时汇率 的计算按钮
$('.pur-tool .first').on('click',function(){
  // 获取兑换金额 持有币种 兑换币种等值
  var convert = $('.exchange input').val()
  var havaCurrencyId = $('.select .selected span').attr("data-id")
  var convertCurrencyType = $('.exchangecurrency .exchangeed span').attr('data-type')
 
  
});
//点击计算房屋贷款按钮
$('.pur-tool .second').on('click', function () {
  // 获取贷款金额 贷款期限等值
  var loan = $('.enterAmount input').val()
  var loanDate = $('.loanDate input').val()
 


});
// 点击等额本息、等额本金
$('.type ul li').on('click',function(){
  $(this).addClass('active').siblings().removeClass('active');
  var i=$(this).index()
  $('.type ol').eq(i).show().siblings('ol').hide();
});

//点击提交
$('.user-info button').on('click', function (ev) {
  $('.tips').css('display', 'block');
  setTimeout(function () {
    $('.tips').css('opacity', 1);
  }, 10);
  ev.stopPropagation();
});

//提示关闭按钮
$('.tips span').on('click', function () {
  $('.tips').css('opacity', 0);
  $('.user-info').css('opacity', 0);
  setTimeout(function () {
    $('.tips').css('display', 'none');
    $('.user-info').css('display', 'none');
  }, 510);
});

//点击任意位置弹层消失
$(document).on('click', function (ev) {
  $('.user-info').css('opacity', 0);
  setTimeout(function () {
    $('.user-info').css('display', 'none');
  }, 510);
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
$('.yuyue').on('click', function (ev) {
  $('.user-info').css('display', 'block');
  setTimeout(function () {
    $('.user-info').css('opacity', 1);
  }, 10);
  ev.stopPropagation();
});
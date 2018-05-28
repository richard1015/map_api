// 点击选择国家、城市等选项
//租房or住房
$('.sel-way ol li').on('click', function () {
  $(this).addClass('active').siblings().removeClass('active');
});
//国家
$('.sel-country ol li').on('click', function () {
  $(this).addClass('active').siblings().removeClass('active');
});
//城市
$('.sel-city ol li').on('click', function () {
  $(this).addClass('active').siblings().removeClass('active');
});
//价格
$('.sel-price ol li').on('click', function () {
  $(this).addClass('active').siblings().removeClass('active');
});
//房屋需求
$('.sel-demand ol li').on('click', function () {
  $(this).addClass('active').siblings().removeClass('active');
});
//选择房租类型
$('.sel-room-style ol li').on('click', function () {
  $(this).addClass('active').siblings().removeClass('active');
});

// 点击排序
$('.sorting li').on('click', function () {
  $(this).addClass('active').siblings().removeClass('active');
});

//划过当前图片移到中间且变大
$('.industry img').on('mouseover', function () {

});
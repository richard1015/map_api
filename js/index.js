//购房猎手1
var iBtn1 = false;
$('.btn1').on('click',function(){
  if(!iBtn1){
    $('.check1').css('display', 'block');
    setTimeout(function(){
      $('.check1').css('opacity', 1);
    },10);
  }else{
    $('.check1').css('opacity', 0);
    setTimeout(function(){
      $('.check1').css('display', 'none');
    },510);
  }
  iBtn1 = !iBtn1;
});

$('.check1 li').on('click',function(){
  var val = $(this).text();
  $('.btn1 input').val(val);
  $('.check1').css('opacity', 0);
  setTimeout(function(){
    $('.check1').css('display', 'none');
  },510);
  iBtn1 = false;
});

//购房猎手2
var iBtn2 = false;
$('.btn2').on('click',function(){
  if(!iBtn2){
    $('.check2').css('display', 'block');
    setTimeout(function(){
      $('.check2').css('opacity', 1);
    },10);
  }else{
    $('.check2').css('opacity', 0);
    setTimeout(function(){
      $('.check2').css('display', 'none');
    },510);
  }
  iBtn2 = !iBtn2;
});

$('.check2 li').on('click',function(){
  var val = $(this).text();
  $('.btn2 input').val(val);
  $('.check2').css('opacity', 0);
  setTimeout(function(){
    $('.check2').css('display', 'none');
  },510);
  iBtn2 = false;
});

//购房猎手3
var iBtn3 = false;
$('.btn3').on('click',function(){
  if(!iBtn3){
    $('.check3').css('display', 'block');
    setTimeout(function(){
      $('.check3').css('opacity', 1);
    },10);
  }else{
    $('.check3').css('opacity', 0);
    setTimeout(function(){
      $('.check3').css('display', 'none');
    },510);
  }
  iBtn3 = !iBtn3;
});

$('.check3 li').on('click',function(){
  var val = $(this).text();
  $('.btn3 input').val(val);
  $('.check3').css('opacity', 0);
  setTimeout(function(){
    $('.check3').css('display', 'none');
  },510);
  iBtn3 = false;
});

//点击查询1
$('.tools-btn1').on('click',function(){
  $('.buy-tools1-con').css('margin-top','100px');
  $('.tools-btn1-con').css('display','block');
  setTimeout(function(){
    $('.tools-btn1-con').css('opacity', 1);
  },10);
});

//点击查询2
$('.tools-btn2').on('click',function(){
  $('.buy-tools2-con').css('margin-top','100px');
  $('.tools-btn2-con').css('display','block');
  setTimeout(function(){
    $('.tools-btn2-con').css('opacity', 1);
  },10);
});

//点击查询3
$('.tools-btn3').on('click',function(){
  $('.buy-tools3-con').css('margin-top','100px');
  $('.tools-btn3-con').css('display','block');
  setTimeout(function(){
    $('.tools-btn3-con').css('opacity', 1);
  },10);
});

//点击提交
$('.right button').on('click',function(){
  $('.tips').css('display','block');
  setTimeout(function(){
    $('.tips').css('opacity', 1);
  },10);
});

$('.tips span').on('click',function(){
  $('.tips').css('opacity', 0);
  setTimeout(function(){
    $('.tips').css('display', 'none');
  },510);
});


//地图
var aMapBtn = $('.map ol li.item');
for(var i=0; i<aMapBtn.length; i++){
  aMapBtn[i].btn = false;
  (function(index){
    $(aMapBtn).eq(index).on('click',function(){
      if(!aMapBtn[index].btn){
        $(this).find('ul').css('display','block');
        var _this = $(this);
        setTimeout(function(){
          $(_this).find('ul').css('opacity',1);
        },10);
      }else{
        $(this).find('ul').css('opacity',0);
        var _this = $(this);
        setTimeout(function(){
          $(_this).find('ul').css('display','none');
        },510);
      }
      aMapBtn[index].btn = !aMapBtn[index].btn
    });
  })(i);
}
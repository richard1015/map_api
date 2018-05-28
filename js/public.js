window.onload=function(){
  var oDiv=document.querySelector('.circle');
  var N=4;
  var iBtn1 = true;
  var iBtn2 = true;
  var aSrc = ['../imgs/zz.png', '../imgs/c.png', '../imgs/Y.png', '../imgs/l.png'];
  var aHref = [];
  //创建圆
  for(var i=0; i<N; i++){
    var oA=document.createElement('a');
    var oImg=document.createElement('img');
    oImg.src=aSrc[i];
    oA.href="javascript:;"
    oA.appendChild(oImg);
    oDiv.appendChild(oA);

  }

  var R=oDiv.offsetWidth/2;

  var aA=oDiv.children;
  for(var i=0; i<aA.length; i++){
    startMove(aA[i],360/N*i);
  }
  aA[0].onmouseover = function(){
    if(!iBtn1&&!iBtn2){
      return;
    }
    startMove(aA[0],180);
    startMove(aA[1],270);
    startMove(aA[2],360);
    startMove(aA[3],450);

    for(var i=0; i<aA.length; i++){
      if(i == 0){
        move(aA[i],{
          width: '500',
          height: '500',
          marginLeft: '-250',
          marginTop: '-250',
        })
      }else{
        move(aA[i],{
          width: '300',
          height: '300',
          marginLeft: '-150',
          marginTop: '-150',
        })
      }
    }
  };
  aA[1].onmouseover = function(){
    if(!iBtn1&&!iBtn2){
      return;
    }
    startMove(aA[0],90);
    startMove(aA[1],180);
    startMove(aA[2],270);
    startMove(aA[3],360);
    for(var i=0; i<aA.length; i++){
      if(i == 1){
        move(aA[i],{
          width: '500',
          height: '500',
          marginLeft: '-250',
          marginTop: '-250',
        })
      }else{
        move(aA[i],{
          width: '300',
          height: '300',
          marginLeft: '-150',
          marginTop: '-150',
        })
      }
    }
  };
  aA[2].onmouseover = function(){
    if(!iBtn1&&!iBtn2){
      return;
    }
    startMove(aA[0],0);
    startMove(aA[1],90);
    startMove(aA[2],180);
    startMove(aA[3],270);
    for(var i=0; i<aA.length; i++){
      if(i == 2){
        move(aA[i],{
          width: '500',
          height: '500',
          marginLeft: '-250',
          marginTop: '-250',
        })
      }else{
        move(aA[i],{
          width: '300',
          height: '300',
          marginLeft: '-150',
          marginTop: '-150',
        })
      }
    }
  };
  aA[3].onmouseover = function(){
    if(!iBtn1&&!iBtn2){
      return;
    }
    startMove(aA[0],-90);
    startMove(aA[1],0);
    startMove(aA[2],90);
    startMove(aA[3],180);
    for(var i=0; i<aA.length; i++){
      if(i == 3){
        move(aA[i],{
          width: '500',
          height: '500',
          marginLeft: '-250',
          marginTop: '-250',
        })
      }else{
        move(aA[i],{
          width: '300',
          height: '300',
          marginLeft: '-150',
          marginTop: '-150',
        })
      }
    }
  };

  function startMove(obj,iTarget){
    iBtn1 = false;
    iBtn2 = false;
    obj.a=obj.a || 0;
    var count=Math.floor(1000/30);
    var start=obj.a;
    var dis=iTarget-start;
    var n=0;
    clearInterval(obj.timer);
    obj.timer=setInterval(function(){
      n++;

      var b=1-n/count;
      obj.a=start+dis*(1-Math.pow(b,3));
      // obj.a=start+dis*(1-b);
      // console.log(obj.a)
      var x=R+Math.sin(obj.a*Math.PI/180)*R;
      var y=R-Math.cos(obj.a*Math.PI/180)*R;

      obj.style.left=x+'px';
      obj.style.top=y+'px';

      if(n==count){
        clearInterval(obj.timer);
      }
    },30);
    setTimeout(function(){
      iBtn1 = true;
      iBtn2 = true;
    },1000)
  }

  function getStyle(obj,name){
    return (obj.currentStyle || getComputedStyle(obj,false))[name];
  }

  function move(obj,json,options){
    iBtn1 = false;
    iBtn2 = false;
    options=options || {};
    options.duration=options.duration || 500;
    options.easing=options.easing || 'ease-out';

    var count=Math.ceil(options.duration/30);
    var start={};
    var dis={};
    for(var name in json){
      start[name]=parseFloat(getStyle(obj,name));

      if(isNaN(start[name])){
        switch(name){
          case 'left':
            start[name]=obj.offsetLeft;
            break;
          case 'top':
            start[name]=obj.offsetTop;
            break;
          case 'width':
            start[name]=obj.offsetWidth;
            break;
          case 'height':
            start[name]=obj.offsetHeight;
            break;
          case 'opacity':
            start[name]=1;
            break;
          case 'fontSize':
            start[name]=12;
            break;
          //.....
        }
      }

      dis[name]=json[name]-start[name];
    }

    var n=0;

    clearInterval(obj.timer1);
    obj.timer1=setInterval(function(){
      n++;

      for(var name in json){

        switch(options.easing){
          case 'linear':
            var a=n/count;
            var cur=start[name]+dis[name]*a;
            break;
          case 'ease-in':
            var a=n/count;
            var cur=start[name]+dis[name]*Math.pow(a,3);
            break;
          case 'ease-out':
            var a=1-n/count;
            var cur=start[name]+dis[name]*(1-Math.pow(a,3));
            break;
        }

        if(name=='opacity'){
          obj.style.opacity=cur;
          obj.style.filter='alpha(opacity:'+cur*100+')';
        }else{
          obj.style[name]=cur+'px';
        }
      }

      if(n==count){
        clearInterval(obj.timer1);
        options.complete && options.complete();
      }
    },30);

    setTimeout(function(){
      iBtn1 = true;
      iBtn2 = true;
    },1000)
  }
};
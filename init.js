(function () {
  //不同终端上的字体视觉大小统一为 = visualFontSize
  var visualFontSize = 12;
  var dpr = window.devicePixelRatio;
  var scale = 1 / dpr;
  var mstr = `initial-scale=${scale}, maximum-scale=${scale}, minimum-scale=${scale}, user-scalable=no`;
  document.getElementsByTagName("html")[0].style.fontSize = /Macintosh|Windows/i.test(navigator.userAgent) ?
    visualFontSize + "px" : dpr * visualFontSize + "px";
  document.getElementsByName("viewport")[0].content = mstr;
  console.log(navigator.userAgent)
  console.log(/Macintosh|Windows/i.test(navigator.userAgent))
})()
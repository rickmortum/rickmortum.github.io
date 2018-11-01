function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var secs = date.getSeconds();
  var day= date.getDate();
  var mon = date.getMonth()+1;
  var yr = date.getYear()
  var MS_PER_MINUTE = 60000;
  yr=yr-100
  var ampm = hours >= 12 ? 'PM' : 'AM';

  var start = new Date(date);
  var shours=start.getHours();
  var smin = start.getMinutes();
  
  shours = shours % 12;
  shours = shours ? shours : 12; // the hour '0' should be '12'
  smin = smin < 10 ? '0'+smin : smin;

  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  secs = secs < 10 ? '0'+secs : secs;
  day = day < 10 ? '0'+day : day;
  mon = mon < 10 ? '0'+mon : mon;
  var strTime = hours + ':' + minutes + ':' +  secs + ' ' + ampm + '<br>' + mon + '/' + day + '/' +yr;
  var startt = shours + ':' + smin + ' ' + ampm ;
  return [strTime,startt];
}
var datetimeNow = new Date();


$("#TIME").html(formatAMPM(datetimeNow)[0]);


//refresh time every second
setInterval(function() {
        var datetimeNow = new Date();
        $("#TIME").html(formatAMPM(datetimeNow)[0]);
    }, 1000);

//wait 500ms for time to appear to set the scrolling buffer
setTimeout(function(){
  var witth = $("#MOVE").outerWidth();
  $("#wrapper").css("padding-right", witth+"px");
  $("#TIME").css("opacity",1);
}, 300);
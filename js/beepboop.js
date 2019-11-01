$(document).ready(function() {
  $("form#boopform").submit(function(event) {

    var name = $("#name").val();
    var num = $("#num").val();
    var reverse = $("#reverse").checked;
    console.log(reverse);
    var beeps=['',' Beep! ',' Boop! '," I'm sorry, "+name+", I'm afraid I can't do that. "];

    var range = numRange(num);
    console.log(range);

    for (var i=0;i<num;i++){
      var buup = beeps[boopQuery(range[i])];
      if(buup) {
        range[i]=buup;
      }
    }
    // if (reverse === true) {
    //   console.log("test");
    // }
    var output = range.join(' ');
    $("#maxbooped").text(output);
    event.preventDefault();
  });

});
function numRange(num){
  var range=[];
  for (var i=0; i<=num;i++){
    range.push(i);
  } // for
  return range;
} // function numRange
function boopQuery(num){
  num = num.toString(10);
  var biip=0;
  for (var i=num.length; i>-1;i--){
    if (num[i] === '3') {
      biip=3;
    } else if ((biip < 2) && num[i] === '2') {
      biip=2;
    } else if ((biip < 1) && num[i] === '1') {
      biip=1;
    }
  } // for loop
  return biip;
}

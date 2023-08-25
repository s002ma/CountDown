// ============== navbar ==========================
$(".open").click(() => {
  if ($("#navbar").css("width") == "250px") {

    $("#navbar").width("0px");
    $("#homeInfo").css("margin-left", "0px");

  } else {
    $("#navbar").css("width", "250px");
    $("#homeInfo").css("margin-left", "250px");
  }
});

$(".close").click(() => {
  $("#navbar").width("0px");
  $("#homeInfo").css("margin-left", "0px");
});




$(".divColor").click(function(e){
  let color= $(e.target).css("backgroundColor");
  console.log($(".changeColor").css("backgroundColor"));
  $(".changeColor").css("backgroundColor",color);
  $(".firstA").css("color",color);

  console.log($(".changeColor").css("backgroundColor"));
})

// =============== offsetLink navbar ======================
$("a").click( ()=> {
  var aHref = $(this).attr("href");

  if ($(aHref).offset() != undefined) {
    var offsetLink = $(aHref).offset().top;

    $("html , body").animate(
      {
        scrollTop: offsetLink,
      },
      500
    );
  }
});
// ==================== singers ========================
$(document).ready( ()=> {
  $(".div_1").css("display", "block");
  $("#singers h3").click(function () {
    $(this).next().slideToggle(500);
    $("#singers div").not($(this).next()).slideUp(500);
  });
});
// ================= countDownDate ================================

let countDownDate= new Date("Dec 20 ,2022").getTime();

let counter =setInterval(()=>{
// get date now 
let dateNow=new Date().getTime();

// get differance Date( now --> countDown)
 let dateDiff= countDownDate-dateNow;

//  get Time ------
// days  hours   minutes   seconds
let day = Math.floor(dateDiff / (1000*60*60*24));
let hour =Math.floor(dateDiff % (1000*60*60*24)/(1000*60*60)); 
let minute =Math.floor(dateDiff%(1000*60*60)/(1000*60)); 
let second =Math.floor(dateDiff%(1000*60)/(1000)); 

document.getElementById("days").innerHTML=`${day} day`;
document.getElementById("hours").innerHTML=`${hour} hour`;
document.getElementById("minutes").innerHTML=`${minute} minute`;
document.getElementById("seconds").innerHTML=`${second} second`;

},1000)

/*===================== textarea ======================= */
$( ()=> {
  var num = 100;
  $("textarea").keyup(function () {
    var length = $(this).val().length;
    console.log(length)
    var character = num - length;
    if (character <= 0) {
      $("#char").text("your available character finished");
    } else {
      $("#char").text(character);
    }
  });
});
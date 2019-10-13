$(function() {
  $(".typed").typed({
    strings: [
      "load shiva.human<br/>" + 
      "><span class='caret'>$</span>work: Machine-Learning, computer vision, Kali-Linux<br/> ^100" +
      "><span class='caret'>$</span>hobbies: Basketball, solo travel, Music<br/> ^300" +
      "><span class='caret'>$</span> alias: None :p <br/>" +
      "><span class='caret'>$</span> highlight:  <a href='/projects/video-stab'>Non Frontal - Facial Recoginiton with CNN</a><br/>" +
      "><span class='caret'>$</span> education: Middler at TIET<br/> ^100" /*+
      "><span class='caret'>$</span> <a href='/timeline'>timeline</a> <a href='http://www.github.com/crearo/'>github</a> <a href='http://in.linkedin.com/in/bhardwajrish/'>linkedin</a> <a href='http://bhardwajrish.blogspot.com/'>blog</a><br/>"*/
    ],
    showCursor: true,
    cursorChar: '_',
    autoInsertCss: true,
    typeSpeed: 0.0009,
    startDelay: 70,
    loop: false,
    showCursor: false,
    onStart: $('.message form').hide(),
    onStop: $('.message form').show(),
    onTypingResumed: $('.message form').hide(),
    onTypingPaused: $('.message form').show(),
    onComplete: $('.message form').show(),
    onStringTyped: function(pos, self) {$('.message form').show();},
  });
  $('.message form').hide()
});
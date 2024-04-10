

var mybutton = document.getElementById("myBtn");

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};


$(function(){
    $(window).scroll(function(){
        $(".sec").each(function(){
        var x = $(window).scrollTop() + $(window).height();
        var y = $(this).offset().top + $(this).height() / 2;
        if(x >= y){
            $(this).addClass("active")      
        }
    }) 
    })
})

function aaa(nkar) { 
    var card = document.getElementById('imgdiv'); 
    card.src = nkar.src; 
    card.parentElement.style.display = 'block'; 
}


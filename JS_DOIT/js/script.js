$("#randmove").mouseenter(function () {

    $(this).animate({
        top: Math.random() * 250,
        left: Math.random() * 500
    }, 50);
  
});
$("#randmove").click(
()=>
alert("You, win!")
);
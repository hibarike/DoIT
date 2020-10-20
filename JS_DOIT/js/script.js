$("#randmove").mouseenter(function () {

    $(this).animate({
        top: Math.random() * 250
    }, 50);
    $(this).animate({
        left: Math.random() * 500
    }, 50);

});
$("#randmove").click(
()=>
alert("You, win!")
);
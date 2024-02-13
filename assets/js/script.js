$(function () { // wait for document ready
    // init controller
    var controller1 = new ScrollMagic.Controller({container: "#right"});

    // build scene
    var scene = new ScrollMagic.Scene({triggerElement: "#pinkdaysandbluedays"})
        .addTo(controller1)
        .setClassToggle("#reveal1", "visible")
        .addIndicators() // add indicators (requires plugin)

    var scene = new ScrollMagic.Scene({triggerElement: "#memoryofskin"})
        .addTo(controller1)
        .setClassToggle("#reveal2", "visible")
        .addIndicators() // add indicators (requires plugin)
});

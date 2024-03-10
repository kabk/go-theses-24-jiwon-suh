/* 
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
*/

const images = document.querySelectorAll( '.imagebox > div' );
const imageAnchors = document.querySelectorAll( '.image-anchor' );

const contentColumn = document.getElementById( 'center' );

const toggleVisibleImages = event => {
    const screenCenter = contentColumn.offsetHeight / 2;

    let activeAnchorLink = -1;
    imageAnchors.forEach( imageAnchor => {
        const imageTop = imageAnchor.offsetTop - contentColumn.scrollTop;

        if ( imageTop <= screenCenter )
            activeAnchorLink = imageAnchor.dataset.imageId;
    } );

    images.forEach( image => {
        const imageId = image.id;

        const showImage = ( imageId == activeAnchorLink );
        image.classList.toggle( 'visible', showImage );
    } );
}
contentColumn.addEventListener( 'scroll', toggleVisibleImages );



function toggleDivVisibility() {
    console.log("Window width:", window.innerWidth);

    var yourDivs = document.querySelectorAll('.image-container');

    // Loop through each matching element
    yourDivs.forEach(function(div) {
      if (window.innerWidth <= 767) {
        console.log("Showing the div");
        div.style.display = "block";
      } else {
        console.log("Hiding the div");
        div.style.display = "none";
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function() {
    // Initial call to set the initial state based on window width
    toggleDivVisibility();

    // Attach the function to the window resize event
    window.addEventListener("resize", toggleDivVisibility);
  });
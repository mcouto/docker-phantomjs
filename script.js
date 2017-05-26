// EXAMPLE

var page = require('webpage').create();
page.viewportSize = {
        width : 1024,
        height : 768
    };

page.open("http://google.com", function(status) {
  console.log("Status: " + status);

  window.setTimeout(function () {
    page.render('sample.png');
    phantom.exit();
  }, 200);

});

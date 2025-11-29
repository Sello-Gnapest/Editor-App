// js/app.js
let canvas;

window.onload = function() {
  canvas = new fabric.Canvas('editorCanvas', {
    backgroundColor: '#fff',
    preserveObjectStacking: true
  });

  // Load a default template background
  fabric.Image.fromURL('assets/templates/sample-template1.png', function(img) {
    img.scaleToWidth(canvas.width);
    canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas));
  });
};
    thumb.addEventListener("click", function() {
      const templatePath = this.getAttribute("data-template");
      fabric.Image.fromURL(templatePath, function(img) {
        img.scaleToWidth(canvas.width);
        canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas));
      });
    });
  });
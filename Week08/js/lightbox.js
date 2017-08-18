//code courtesy of dudley storey
// uses Google polyfill for dialog element in non-supporting browsers
// (https://github.com/GoogleChrome/dialog-polyfill)

//function to show image in lightbox.
function showImage(e) {
    e.preventDefault();
    coverimage.setAttribute("src", this.getAttribute("href"));
    coverimage.setAttribute("alt", this.querySelector("img").getAttribute("alt"));
    cover.showModal();
}
//to close the lightbox
document.getElementById("closecover").onclick = function() {
    coverimage.setAttribute("src", "");
    cover.close();
}

//getting the image links and dialog box
var imglinks = document.getElementById("thumbs").getElementsByTagName('a'),
    cover = document.getElementById("cover"),
    coverimage = cover.getElementsByTagName("img")[0],
    testdialog = document.createElement("dialog");
testdialog.setAttribute("open", "");

//calling polyfill if required.
if (!testdialog.open) {
    dialogPolyfill.registerDialog(cover);
}

//putting the call to the showImage function on the links
for (var i = 0; i < imglinks.length; i++) {
    imglinks[i].onclick = showImage;
}
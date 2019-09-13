// sizeControl fn to control the image size by scaling the grid
// make sure all buttons are in the format 'btn + id' i.e. 'btn3'
$(".sizeControl").click(function() {
    // get the id of the button
    var btnId = this.id;
    var btn = document.getElementById(btnId);
    // get the index of the id
    var index = btnId.slice(3, btnId.length);
    var imgId = 'img' + index;
    var descId = 'description' + index;

    var img = document.getElementById(imgId);
    var desc = document.getElementById(descId);

    if (btn.classList.contains('enlarge')) {
    	btn.classList.remove('enlarge', 'btn-outline-info');
    	btn.classList.add('shrink', 'btn-info');
    	btn.innerText="Shrink";
        img.classList.remove('col-md-4');
        img.classList.add('col-md-8');
        desc.classList.remove('col-md-8');
        desc.classList.add('col-md-4');
    } else {
        btn.classList.remove("shrink", "btn-info")
        btn.classList.add('enlarge', "btn-outline-info");
        btn.innerText="Enlarge";
        img.classList.remove('col-md-8');
        img.classList.add('col-md-4');
        desc.classList.remove('col-md-4');
        desc.classList.add('col-md-8');
    }

});
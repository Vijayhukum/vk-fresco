let images=['1.jpg','2.jpg','3.jpg'];
let img=document.getElementById('img')
let imgIndex=0;
let leftarrow=document.querySelector('.left')
let rightarrow=document.querySelector('.right')

leftarrow.onclick = function() {
    if (imgIndex > 0) {
        imgIndex -= 1;
        img.setAttribute('src', 'images/' + images[imgIndex]);
        rightarrow.style.display = 'block'; // Ensure right arrow is visible after clicking left
    }
    if (imgIndex == 0) {
        leftarrow.style.display = 'none';
    }
}


rightarrow.onclick = function() {
    if (imgIndex < images.length - 1) {
        imgIndex += 1;
        img.setAttribute('src', 'images/' + images[imgIndex]);
        leftarrow.style.display = 'block'; // Ensure left arrow is visible after clicking right
    }
    if (imgIndex == images.length - 1) {
        rightarrow.style.display = 'none';
    }
}

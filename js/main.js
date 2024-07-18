'use strict'
document.getElementById('scrollButton').addEventListener('click', function() {
    document.getElementById('projects').scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById('seeMoreTradeCnt').addEventListener('click', function() {
    var paragraph = document.getElementById('textTradeCnt');
    var additionalText = ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, nesciunt.';
    if (!paragraph.innerHTML.includes(additionalText)) {
        paragraph.innerHTML += additionalText;
    }
});
document.getElementById('seeMoreCommCnt').addEventListener('click', function() {
    var paragraph = document.getElementById('textCommCnt');
    var additionalText = ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, nesciunt.';
    if (!paragraph.innerHTML.includes(additionalText)) {
        paragraph.innerHTML += additionalText;
    }
});

document.getElementById('addPhotoButton').addEventListener('click', function() {
    var container = document.getElementById('photoContainer');
    if (!container.classList.contains('new-photos-added')) {
        var photoUrls = [
            '/assets/img/galerry/img_6.jpg',
            '/assets/img/galerry/img_7.png',
            '/assets/img/galerry/img_8.png',
            '/assets/img/galerry/img_9.png',
        ];
        photoUrls.forEach(function(url) {
            var img = document.createElement('img');
            img.src = url;
            img.classList.add('grid_photo', 'new-photo');
            container.appendChild(img);
        });
        container.classList.add('new-photos-added');
    }
});
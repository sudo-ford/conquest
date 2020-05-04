var photos = [
    'assets/img/gallery1.jpg',
    'assets/img/gallery2.jpg',
    'assets/img/gallery3.jpg',
    'assets/img/gallery4.jpg'
];
    
var thumbnails = document.querySelectorAll('.gallery__photo-preview');
var fullPhoto = document.querySelector('.gallery__full');

var addThumbnailClickHandler = function (thumbnail, photo) {
  thumbnail.addEventListener('click', function () {
    fullPhoto.src = photo;
  });
};

for (var i = 0; i < thumbnails.length; i++) {
  addThumbnailClickHandler(thumbnails[i], photos[i]);
} 
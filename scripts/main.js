let sky = document.querySelector('#sunrise');

sky.onclick = () => {
  if (sky.getAttribute('src') === 'images/sunrise.jpg')
    {
      sky.setAttribute('src', 'images/sunset.jpg');
} else {
  sky.setAttribute('src', 'images/sunrise.jpg');
}
};


let image = document.querySelector('#fullmoon');

image.onmouseenter = (e) => {
	// change image
   e.target.setAttribute('src', 'images/moon-full.jpg');
};

image.onmouseleave = (e) => {
// change image
   e.target.setAttribute('src', 'images/moon-half.jpg');
};

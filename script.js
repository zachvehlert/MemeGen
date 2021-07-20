form = document.querySelector('form');
topText = document.querySelector('#topText');
bottomText = document.querySelector('#bottomText');
imgURL = document.querySelector('#image');
gallery = document.querySelector('#gallery');
let counter = 1;

let addImg = function () {
	let container = document.createElement('div');
	let textLineOne = document.createElement('p');
	let textLineTwo = document.createElement('p');
	let deleteButton = document.createElement('button');

	deleteButton.innerHTML = 'Delete';

	if (topText.value === '' || imgURL.value === '' || bottomText.value === '') {
		alert('All fields are required!');
		return;
	} else {
		textLineOne.innerText = topText.value;
		textLineTwo.innerText = bottomText.value;

		textLineOne.setAttribute('class', 'topText');
		textLineTwo.setAttribute('class', 'bottomText');
		container.setAttribute('class', 'container');
		container.setAttribute('style', `background-image: url('${imgURL.value}')`);
		deleteButton.classList.add('deleteButton');

		deleteButton.addEventListener('click', function () {
			this.parentElement.remove();
		});

		container.append(textLineOne, textLineTwo, deleteButton);

		container.addEventListener('mouseenter', function () {
			deleteButton.setAttribute('style', 'opacity: 100%');
		});

		container.addEventListener('mouseleave', function () {
			deleteButton.setAttribute('style', 'opacity: 0%');
		});

		gallery.append(container);
	}
};

form.addEventListener('click', function (event) {
	event.preventDefault();
	if (event.target.name === 'submit') {
		addImg();
	}
});

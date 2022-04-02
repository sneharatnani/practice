import './styles/style.css';
import image from './assets/chocolate-donut.png';

// const container = document.querySelector('#content');

const donut = document.createElement('img');
donut.src = image;
donut.alt = 'donut image';

window.addEventListener('load', () => {
    document.body.append(donut);
})
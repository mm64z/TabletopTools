import Cookies from 'js-cookie';


Cookies.set('myCat', 'Pacman', { path: '/' });
console.log(Cookies.get('myCat')); // Pacman

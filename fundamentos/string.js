const escola = 'Cod3r';

console.log(escola.charAt(4));
console.log(escola.charAt(5));
console.log(escola.charCodeAt(3)); //mostra no terminal o codigo do unicode
console.log(escola.indexOf('3')); //mostra a posição do item que quer encontar na string no terminal caso ela exista

console.log(escola.substring(1)); 
console.log(escola.substring(0, 3));

console.log('Escola ' .concat(escola).concat('!'));
console.log(escola.replace(/\d/, 'e')); //substitui pela informação dentro das aspas (d = digito, /\w/g = a tudo)

console.log('Ana,Maria,Pedro'.split(','));

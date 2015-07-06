// Math.random() devuelve numero aleatorio entre 0 y 1.
var numero = Math.random();
if (numero <= 0.33)
  {
   console.log('\n' + numero + ' MENOR que 0.33 \n');
  }
else if (numero <= 0.66)
  {
   console.log('\n' + numero + ' MENOR que 0.66 \n');
  }
else
  {
   console.log('\n' + numero + ' MAYOR que 0.66 \n');
  }

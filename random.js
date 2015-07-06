/ Math.random() devuelve numero aleatorio entre 0 y 1.
var numero = Math.random();
var str =' MENOR que 0.66'
if (numero <= 0.33)
  {
   console.log('\n' + numero + str + '\n');
  }
else if (numero <= 0.66)
  {
   console.log('\n' + numero + str + '\n');
  }
else
  {str =' MAYOR que 0.66'
   console.log('\n' + numero + str +'\n');
  }

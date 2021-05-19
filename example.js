// funcion poco escalable
function createGodZilla (color, weight = 200, sound, powers) {
  // ...
}

createGodZilla('blue', undefined, ['lighting'])


/* 
Con más de dos parametros es interesante pasarselos como un objeto 
porque mantienes parametros por defecto sin necesidad de ingresarlos
y porque puedes modificar los parametros de forma muy simple
el mantenimiento también es mucho mejor
*/
const godzillaParams = {
  color: 'blue',
  material: 'plastic',
  sound: 'GROAARRR',
  powers: ['lighting', 'nuclear bomb']
}

function createGodZilla (
  {
    color, 
    material = 'metal', 
    weight= 200, 
    sound, 
    powers
  }) {
  // ...
}

createGodZilla(godzillaParams)

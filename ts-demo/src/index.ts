console.log('Hola Typescript');

// comentario;

/**
 * Comentario de documentación.
 * comentario multilínea.
 */
function loQueMeDaLaGana() {
  console.log('log');
  console.warn('warn');
  console.error('error');

  const obj = { msg: 'Dir: consologuea bonito el Obj.' };
  console.dir(obj);

  const arr: object[] = [{ msg: 'lista', prop: 1 }, { msg: 'lista', prop: 2 }];
  console.table(arr);
}

loQueMeDaLaGana();

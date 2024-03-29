const title = document.querySelector('.title');
const options = document.querySelector('.options');
const newFile = document.querySelector('.new--file');

const newFileBtn = document.querySelector('.new');
const save = document.querySelector('.save');
const open = document.querySelector('.open');

const textField = document.querySelector('textarea');

title.onclick = () => {
  options.classList.toggle('show');
};

newFileBtn.onclick = () => {
  if (textField.value !== '') {
    const decide = confirm('Esta seguro que desea crear un nuevo archivo?');

    if (decide) {
      textField.value = '';
    }
  } else {
    newFile.classList.toggle('show');
  }
};

save.onclick = () => {
  //Crea un elemento blob y le asigna el contenido del textarea
  const blob = new Blob([textField.value], {
    type: 'text/plain;charset=utf-8',
  });

  //Crea un vinculo del objeto creado
  const url = URL.createObjectURL(blob);
  //Agrega el atributo href al vinculo y le agrega el enlace del archivo creado
  save.setAttribute('href', url);
  //agrega el atributo download para descargar el archivo y, le asigna por defecto el nombre 'newFile'
  save.setAttribute('download', 'newFile');
};

open.onclick = () => {
  //Crea la etiqueta <input type="file">
  let fileInput = document.createElement('input');
  fileInput.type = 'file';
  //Agrega una clase para que el elemento no se muestre en pantalla
  fileInput.classList.add('none');
  //Agregar el elemento al body
  document.body.appendChild(fileInput);
  //Clickear automaticamente el elemento para mostrar la ui de sistema y cargar los archivos
  fileInput.click();

  //Cargarel archivo de manera asincrona, cuando el estado de la etiqueta <input>, cambie y tenga seleccionado el archivo
  fileInput.addEventListener('change', async () => {
    //Cargar el archivo
    const [file] = fileInput.files;

    if (file) {
      //Comprobar si la ventana de texto es visible o no
      if (window.getComputedStyle(newFile).display === 'none') {
        //Si no es visible, hacerla visible
        newFile.classList.toggle('show');
        //Colocar el contenido del archivo en el textarea (convirtiendolo a texto)
        textField.value = await file.text();
      } else {
        //Si esta visible, comprobar si esta vacio el textarea
        if (textField.value !== '') {
          //Si no esta vacio, preguntar al usuario si quiere cargar un archivo nuevo, borrando el contenido del textarea
          const decide = confirm(
            'Esta seguro que desea cargar el archivo? se perderan los datos no guardados'
          );
          if (decide) {
            textField.value = await file.text();
          }
          //En caso de que este vacio, mostrar el archivo
        } else textField.value = await file.text();
      }
    }
  });
  //Quitar el elemento el body cuando termine de cargar el archivo
  document.body.removeChild(fileInput);
};

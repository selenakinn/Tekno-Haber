console.log('hey');

function IconButton(btnText, btnColor, iconClass) {
  const button = document.createElement('button');
  button.classList.add('btn');
  button.classList.add('btn-' + btnColor);
  const i = document.createElement('i');
  i.className = iconClass;
  button.textContent = btnText;
  button.prepend(i);

  return button;
}

const buttonContainer = document.getElementById('icon-buttons');

const buttonAc = IconButton('Aç', 'blue', 'fa fa-folder-open');
buttonContainer.appendChild(buttonAc);

const buttonDuzenle = IconButton('Düzenle', 'orange', 'fa fa-pen');
buttonContainer.appendChild(buttonDuzenle);

const buttonSil = IconButton('Sil', 'red', 'fa fa-trash');
buttonContainer.appendChild(buttonSil);

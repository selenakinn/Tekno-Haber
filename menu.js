let menuElemanlari = [
  'Gündem',
  'Dünya',
  'Ekonomi',
  'Yazarlar',
  'Burç Yorumları',
  'Diğer',
];

// Menü elemanları
// Menü'de kullanacağımız haber başlıkları
// Menü'de kullanacağımız haber başlıkları

// MenuYapici componenti
function MenuYapici(menuList) {
  const menuDiv = document.createElement('div');
  menuDiv.classList.add('menu');

  const ul = document.createElement('ul');

  // Menü elemanlarını oluştur
  menuList.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
  });

  menuDiv.appendChild(ul);

  const menuButton = document.querySelector('div.header > .menu-button');

  menuButton.addEventListener('click', () => {
    menuDiv.classList.toggle('menu--open');
  });

  return menuDiv;
}

// Menüyü oluştur ve div.header içine ekle
const headerDiv = document.querySelector('div.header');
const menu = MenuYapici(menuElemanlari);
headerDiv.appendChild(menu);

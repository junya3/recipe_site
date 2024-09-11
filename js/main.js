'use strict';

{
  fetch('./parts/header.html')
    .then((Response) => Response.text())
    .then((data) => {
      const headers = document.querySelectorAll('.header');
      headers.forEach((header) => {
        header.innerHTML = data;
      });
    })
    .then(() => {
      const burgers = document.querySelectorAll('#burger');
      const close = document.querySelector('#close');
      const nav = document.querySelector('.smNav');

      const fh = document.querySelector('.headerFixed');
      console.log(burger);

      burgers.forEach((burger) => {
        burger.addEventListener('click', () => {
          fh.classList.remove('is-show');
          nav.classList.add('active');
        });
      });
      close.addEventListener('click', () => {
        nav.classList.remove('active');
      });

      const isUp = (function () {
        const scrollElement = document.scrollingElement;
        let flag, prePoint, scrollPoint;
        return function () {
          scrollPoint = scrollElement.scrollTop;
          flag = prePoint > scrollPoint ? true : false;
          prePoint = scrollPoint;
          return flag;
        };
      })();

      window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
          if (isUp()) {
            fh.classList.add('is-show');
          } else {
            fh.classList.remove('is-show');
          }
        } else {
          fh.classList.remove('is-show');
        }
      });
    });
  console.log('header確認');

  fetch('./parts/side.html')
    .then((Response) => Response.text())
    .then((data) => (document.getElementById('side').innerHTML = data));
  console.log('side確認');

  fetch('./parts/footer.html')
    .then((Response) => Response.text())
    .then((data) => (document.getElementById('footer').innerHTML = data));
  console.log('footer確認');
}

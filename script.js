let btn = document.querySelectorAll('.button');
let body = document.querySelector('body');

btn.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function (e) {
      console.log(e);
      console.log(e.target);
      if (e.target.id === 'red') {
        body.style.backgroundColor = e.target.id;
      }
      if (e.target.id === 'grey') {
        body.style.backgroundColor = e.target.id;
      }
      if (e.target.id === 'blue') {
        body.style.backgroundColor = e.target.id;
      }
      if (e.target.id === 'violet') {
        body.style.backgroundColor = e.target.id;
      }
      
    });
  });
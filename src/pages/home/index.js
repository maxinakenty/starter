const btn = document.querySelector('.btn-lazy');

async function getMessage() {
  const {
    sayHi,
  } = await import(/* webpackChunkName: "test" */ '../../components');
  return sayHi;
}

btn.addEventListener('click', () => {
  getMessage().then(sayHi => {
    sayHi();
  });
});

const { notify } = require('node-notifier');

module.exports = error => {
  notify({
    title: error.plugin,
    message: error.message,
  });

  console.error(`${error.plugin}: ${error.message}`);

  if (typeof this.emit === 'function') {
    this.emit('end');
  }
};

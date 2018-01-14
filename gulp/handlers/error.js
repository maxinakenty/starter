const notifier = require('node-notifier');

module.exports = error => {
  notifier.notify({
    title: error.plugin,
    message: error.message,
  });

  console.error(`${error.plugin}: ${error.message}`);

  if (typeof this.emit === 'function') {
    this.emit('end');
  }
};

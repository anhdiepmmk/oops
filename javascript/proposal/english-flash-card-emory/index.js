const notifier = require('node-notifier');

notifier.notify('Message');

notifier.notify({
	title: 'My notification',
	message: 'Hello, there!'
});

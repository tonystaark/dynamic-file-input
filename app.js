const fs = require('fs');
const actions = {};
const args = process.argv.slice(2);

fs.readdir('./actions', (err, files) => {
  files.forEach( file => {
    if (file === `template.js`) { return }
    const fileName = file.split('.')[0];
    actions[fileName] = require('./actions/' + file)
  });
  // return actions
  Object.keys(actions).indexOf(args[0]) >= 0 ? actions[args[0]](args) : 'incorrect command'
});

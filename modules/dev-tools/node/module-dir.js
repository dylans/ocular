import {resolve} from 'path';

// Prints the installed location of ocular-dev-tools
module.exports = function () {
  console.log(resolve(__dirname, '..'));
};

const { src, dest } = require('gulp');

const log = (done) => {
  console.log('Hello Gulp!');
  done();
};

exports.default = log;

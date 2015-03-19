var browserify = require('browserify');
var path = require('path');

var pubdir = path.join(__dirname, 'js');

var opt = {
    debug: false,
    basedir: pubdir
};

var bundle1 = browserify(opt);
var name = './foo.js';
bundle1.require(name, { entry: true, expose: name, basedir: pubdir });

var bundle2 = browserify({
    debug: false,
    basedir: pubdir,
    entries: [ path.join(pubdir,'baz.js') ]
});

bundle2.external('./foo.js');

bundle1.bundle(function(err,src) {
    if (err) {
        return console.error("bundle1 err", err)
    }
    console.log('bundle1 src='+src);
})


bundle2.bundle(function(err,src) {
    if (err) {
        return console.error("bundle2 err", err)
    }
    console.log('bundle2 src='+src);
})

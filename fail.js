var browserify = require('browserify');

var pubdir = __dirname;

var opt = {
    debug: true,
    basedir: pubdir,
    exposeAll: true
};

var bundle1 = browserify(opt);
var name = pubdir + '/js/foo.js';
bundle1.require(name, { entry: true, expose: name, basedir: pubdir });

var bundle2 = browserify({
    debug: true,
    basedir: pubdir,
    entries: [ pubdir + '/js/baz.js' ]
});

// adding and removing this line causes failure //
//bundle2.external(bundle1);

bundle2.bundle(function(err, src) {
    console.log(err, src);
});

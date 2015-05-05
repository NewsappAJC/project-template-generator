// Basic template description.
exports.description = 'Scaffolds out a basic project template including all necessary ' +
					  'front-end components such as AJC web fonts and styles, Foundation '+
					  'responsive framework, and jQuery. Also includes base gruntfile, as '+
					  'well as Bower for dependency management (and for adding additional ' +
					  'libraries such as Backbone, Marionette, Underscore, d3.js, etc.'+
					  '\n\n' +
					  'Template Wiki:'+
					  'https://github.com/NewsappAJC/Project-Template/wiki';

// Template-specific notes to be displayed after question prompts.
exports.after = 'You should now install project dependencies with _npm ' +
				'install_. After that, you may execute project tasks with _grunt_. For ' +
				'more information about installing and configuring Grunt, please see ' +
				'the Getting Started guide:' +
				'\n\n' +
				'http://gruntjs.com/getting-started';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {

	init.process({}, [
		// Prompt for these values.
		init.prompt('name'),
		init.prompt('title'),
		init.prompt('description'),
		init.prompt('version')

	], function(err, props) {
		// Files to copy (and process).
		var files = init.filesToCopy(props);

		// Actually copy (and process) files.
		init.copyAndProcess(files, props);

		// Empty folders won't be copied over so make them here
		grunt.file.mkdir('build');
		grunt.file.mkdir('src/data');
		grunt.file.mkdir('src/images');
		grunt.file.mkdir('src/scripts/lib');
		grunt.file.mkdir('src/style/lib');
		grunt.file.mkdir('test');


		// Generate package.json file, used by npm and grunt.
		init.writePackageJSON('package.json', {
			name: props.name,
			description: props.description,
			version: props.version,
			devDependencies: {
				"grunt": "~0.4.1",
			    "grunt-aws": "~0.4.0",
			    "grunt-contrib-copy": "~0.4.1",
			    "grunt-contrib-jshint": "~0.3.0",
			    "grunt-contrib-uglify": "~0.2.0",
			    "grunt-contrib-htmlmin": "~0.1.1",
			    "grunt-contrib-cssmin": "~0.5.0",
			    "grunt-contrib-concat": "~0.3.0",
			    "grunt-contrib-rename": "~0.0.3",
			    "grunt-contrib-watch": "~0.5.3",
			    "grunt-contrib-imagemin": "~0.7.0",
			    "grunt-processhtml": "~0.3.3",
			    "grunt-bowercopy": "~1.0.0",
			    "grunt-contrib-connect": "~0.7.1",
			    "grunt-express": "~1.3.5",
			    "grunt-open": "~0.2.3",
			    "grunt-contrib-watch": "~0.5.3",
			    "grunt-express": "~1.3.5",
			    "grunt-open": "~0.2.3",
			    "grunt-usemin": "~2.1.1",
			    "selenium-chromedriver": "0.0.1",
			    "selenium-webdriver": "^2.42.1"
			},
		});

		// All done!
		done();
	});
};

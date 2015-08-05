# AJC Project Template Generator

Uses grunt-init to scaffold out basic AJC project template skeleton with grunt and bower.

## Dependencies

1. [Node.js](https://nodejs.org/)
	
	See if you have Node.js installed
		
		$ npm --v
		
	If it's installed you'll get a version number. If it's not installed, install node

		$ brew install node

2. [Grunt CLI](http://gruntjs.com/getting-started)
	
	Once you have node, install Grunt-CLI

		$ npm install -g grunt-cli

	This will put the `` grunt `` command in your system path, allowing it to be run from any directory.

	Then you'll need to install the `` grunt-init `` scaffolding command

		$ npm install -g grunt-init

3. [Bower](http://bower.io/)
	
		$ npm install -g bower

4. [git-flow](http://danielkummer.github.io/git-flow-cheatsheet/)
	
		$ brew install git-flow


## Let's get to scaffoldin'

Clone the project template generator into a template folder within the `` ~./grunt-init `` folder which was created when you installed grunt-init above. You can name the folder whatever you want, but remember the name because that's how you'll reference the template in your ``grunt-init`` command. We'll call ours **ajc-project-template**.

	$ git clone git@github.com:NewsappAJC/project-template-generator.git ~/.grunt-init/ajc-project-template

All of your grunt-init scaffolding templates will live in this folder so you can create projects from anywhere on your machine.

Navigate to wherever you want to create your project. Make a new directory for your project, cd into the directory, then run the scaffolding command. It'll ask you some questions about your project along the way.
	
	$ mkdir my-project
	$ cd my-project
	$ grunt-init ajc-project-template
	
When it's done, run npm install to install all of the dependencies.

	$ npm install

Then you'll need to create your own version of the `` aws.json `` credentials file. Keep the example file so when you commit to github and the .gitignore ignores your config file, you and whoever else pulls your code will still have a reference to create a config file from. The next command will not run without a parseable `` aws.json `` file in the config directory.

	$ cd config
	$ cp aws.json.example aws.json

Once that finishes, install/update all your dependencies with the `` bowercopy `` grunt task:

	$ grunt bowercopy

Initalize git and git-flow for your project.

	$ git init
	$ git-flow init

Fire up the dev server...

	$ grunt server

...and your browser will open to [http://localhost:8000/](http://localhost:8000/).

Whenever you're ready to start building a new feature, start a new feature branch with git-flow.

	$ git-flow feature start feature-name

And whenever you're finished with that feature, close out the branch with git-flow, which will merge it back into develop.

	$ git-flow feature finish feature-name

You're ready to go! Get yourself some coffee  ☕️  and build something great!
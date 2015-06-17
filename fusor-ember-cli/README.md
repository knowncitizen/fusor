# fuser-ember-cli

This repo is the development environment to create [FusorUi](https://github.com/fusor/fusor/ui/) which a rails engine that is added to [Foreman](https://github.com/theforeman/foreman/).

[FusorUi](https://github.com/fusor/ui/) is essentially the output from this repo which is an [ember-cli](http://www.ember-cli.com/) project that contains assets such as javascript, stylesheets, images, and fonts.

## Important Note

The fuser-ember-cli/dist directory is the [.gitignore](https://github.com/fusor/fusor/blob/master/.gitignore) so you wont find it in this repository.

The fuser-ember-cli/dist distory is generated automatically by [ember-cli](http://www.ember-cli.com/) when you run `ember server` or `ember build` locally inside the this directory.

## Development Workflow

1. Ensure that your [Foreman settings.yaml](https://github.com/theforeman/foreman/) has `login: false`. Otherwise, API calls will not authenticate properly.
2. Clone [fusor](https://github.com/fusor/fusor/) to your local workstation.
3. `cd fusor-ember-cli`
4. In [controllers/application.js](https://github.com/fusor/fusor-ember-cli/blob/master/app/controllers/application.js#L8), change `deployAsPlugin` from `true` to `false`. If `false`, it shows a menu bar for development which is not needed when running inside Foreman/Katello.
5. Run $ ember server --proxy http://0.0.0.0:3000. This assumes you have a local Foreman/Katello instance on port 3000. This tells the ember server to proxy API calls to Foreman/Katello:
6. HAPPY HACKING!
7. BEFORE running next step, in [controllers/application.js](https://github.com/fusor/fusor-ember-cli/blob/master/app/controllers/application.js#L8), change `deployAsPlugin` back to `true`.
8. Run bash script [`./copy-fusor-ember-cli-to-ui-assets`](https://github.com/fusor/fusor-ember-cli/blob/master/copy-fusor-ember-cli-to-ui-assets) which copies files from `fusor/fusor-ember-cli/dist` to the `fusor/ui` repo
9. Git commit code
10. Send pull request. CAREFUL: Ensure that you're pull request does not include `deployAsPlugin: false`.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server --proxy http://foreman.url`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)


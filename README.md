# Sompasauna.fi

HTML templates are compiled with [Eta](https://eta.js.org/), because it supports partials and layouts and we don't want to repeat ourselves.

## Requirements

* Node.js 22+
* nvm for controlling versions of Node.js

## Development

* `nvm use` to use the specified Node.js version
* `npm install` to install dependencies
* `npm start` to start the development server

Make some changes and enjoy the site at http://localhost:8080

## Build

* `npm run build` to build a production bundle

Files in `dist` directory can be served with a selected web server
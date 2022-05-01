# PioneerNews

PioneerNews is a news app to test VueJS with a NodeJS backend.

---

## Heroku

This app has already been deployed on heroku at [http://pioneer-news.herokuapp.com/](http://pioneer-news.herokuapp.com/).

---

## Requirements

For development, you will only need Node.js, VueJS, and a node global package, Yarn, installed in your environment.

### Node

You can find information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node -v
    v14.18.0

    $ npm -v
    8.5.3

### Yarn installation

After installing node, this project will need yarn too, so just run the following command.

      $ npm install -g yarn

---

## Install

    $ git clone https://github.com/umarriqbal/pioneer-news-app.git
    $ cd pioneer-news-app
    $ yarn install

---

## Environment

Set up the environment by creating a .env file at the root dir, or by running the following command.

    $ export NEWS_API_KEY='<Your NEWS API key>'

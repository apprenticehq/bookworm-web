bookworm-web
===

Getting Start
---

Please clone this repository, and invoke `npm install`.

```sh
$ git clone git@github.com:apprenticehq/bookworm-web.git
$ cd bookworm-web
$ npm install
$ npm start
```

Configuration
---

We use [`dotenv`](https://github.com/motdotla/dotenv). You have to create `.env`file in root of directory.

```sh
$ cp .env{.sample,}
```

Development
---

We use ESLint to remain our codes clean.

```sh
# Lint your code. If your code is dirty, this command tells you.
$ npm run lint

# Lint your code. If that dirty code can be fixed with eslint, this command fix automatically.
$ npm run lint:fix
```

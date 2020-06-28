# LOTR Notebook Server
Backend server built with NodeJS, made to support "React Development & API Integration" teaching.

## Instalation

To install all module dependencies, run:
```bash
yarn install
```

To run the application server:
```sh
yarn start
```

NPM could be used instead, but YARN is recommended.

## Usage

### Documentation

The API docs can be found at `/api-docs`.

### Authentication

An authorization header is required for all the requests (except for docs), because of some external API requets. It should follow the format:
```
  Authorization: Bearer <YOUR_API_KEY>
```

Get a key at [https://the-one-api.herokuapp.com/sign-up](https://the-one-api.herokuapp.com/sign-up). Otherwise, **YOU SHALL NOT PASS!**

## Credits

The server makes use of a great LOTR API to fetch external data sometimes. See [https://the-one-api.herokuapp.com/](https://the-one-api.herokuapp.com/)

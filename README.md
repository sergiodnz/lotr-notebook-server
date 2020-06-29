# LOTR Notebook Server
Backend server built with NodeJS, made to support "React Development & API Integration" teaching.

As you should have seen, the theme is The Lord of The Rings (best book/movie ever).

## Instalation

To install all module dependencies, run:
```sh
yarn install
```

To run the application server:
```sh
yarn start
```

NPM could be used instead, but YARN is recommended. Server starts listening on PORT `5000`, if avaliable.

## Usage

### Documentation

The API docs can be found at `http://localhost:5000/api-docs`.

### Authentication

An authorization header is required for all the requests (except for docs), because of some third-party API. They should follow the format:
```
Authorization: Bearer <YOUR_API_KEY>
```

Get a key [here](https://the-one-api.herokuapp.com/sign-up). Otherwise, **YOU SHALL NOT PASS!**

## Credits

The server makes use of a great LOTR API to fetch external data sometimes. See [https://the-one-api.herokuapp.com](https://the-one-api.herokuapp.com/).

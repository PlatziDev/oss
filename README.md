# Platzi Open Source Software
The Platzi Open Source Software published packages.

## How use it
### Development
Install dependencies with:

```bash
npm i
```

Then run the server with:

```bash
npm start
```

### Production
Install dependencies with:

```bash
npm i
```

Then run the server for production with:

```bash
npm run start:prod
```

This will automatically run `npm run build` to generate the production ready files.

## Enviroment variables
- `NODE_ENV`: the envirment (default: `development`)
- `PORT`: the private port (default: `3000`)
- `HOST`: the private host (default: `localhost`)
- `P_PROT`: the public protocol (default: `http`)
- `P_PORT`: the public port (default: `3000`)
- `P_HOST`: the public host (default: `localhost`)

The private **port** and **host** are used to run the app inside a docker container.

The public **port**, **host** and **protocol** are used to fetch data from the server in the React application.

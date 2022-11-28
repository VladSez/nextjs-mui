# Next.js with TypeScript example

https://github.com/mui/material-ui/tree/master/examples/nextjs-with-typescript

## How to use

Install it and run:

```sh
npm install
npm run dev
```

or

```sh
pnpm install
pnpm dev
```

You have to provide your own `NEXT_PUBLIC_API_GITHUB_TOKEN` and put it in `.env.local` file to run the application locally.

## How to run e2e tests

```sh
npm run test:e2e
```

or

```sh
pnpm test:e2e
```

## The idea behind the example

The project uses [Next.js](https://github.com/vercel/next.js), which is a framework for server-rendered React apps.
It includes `@mui/material` and its peer dependencies, including `emotion`, the default style engine in MUI v5. If you prefer, you can [use styled-components instead](https://mui.com/material-ui/guides/interoperability/#styled-components).

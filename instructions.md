The package has been configured successfully!

Make sure to first define the mapping inside the `contracts/ally.ts` file as follows.

```ts
import { FortyTwo, FortyTwoConfig } from 'adonis-ally-42/build/standalone'

declare module '@ioc:Adonis/Addons/Ally' {
  interface SocialProviders {
    // ... other mappings
    fortyTwo: {
      config: FortyTwoConfig
      implementation: FortyTwo
    }
  }
}
```

Ally config relies on environment variables for the client id and secret. We recommend you to validate environment variables inside the env.ts file.

## Variables for 42 driver

```ts
FORTY_TWO_CLIENT_ID: Env.schema.string(),
FORTY_TWO_CLIENT_SECRET: Env.schema.string(),
```

## Ally config for Gitlab driver

```ts
const allyConfig: AllyConfig = {
  // ... other drivers
  fortyTwo: {
    driver: 'fortyTwo',
    clientId: Env.get('FORTY_TWO_CLIENT_ID'),
    clientSecret: Env.get('FORTY_TWO_CLIENT_SECRET'),
    callbackUrl: 'http://localhost:3333/42/callback',
  },
}
```

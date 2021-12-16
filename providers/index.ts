import type { ApplicationContract } from '@ioc:Adonis/Core/Application'

export default class FortyTwoProvider {
  constructor(protected app: ApplicationContract) {}

  public async boot() {
    const Ally = this.app.container.resolveBinding('Adonis/Addons/Ally')
    const { FortyTwoDriver } = await import('../src/FortyTwo')

    Ally.extend('fortyTwo', (_, __, config, ctx) => {
      return new FortyTwoDriver(ctx, config)
    })
  }
}

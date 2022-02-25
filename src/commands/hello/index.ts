import {Command, CliUx, Flags} from '@oclif/core'
import notifier = require('node-notifier');
import chalk = require('chalk');

export default class Hello extends Command {
  static enableJsonFlag = true;
  static description = 'Say hello'

  static examples = [
    `$ oex hello friend --from oclif
hello friend from oclif! (./src/commands/hello/index.ts)
`,
  ]

  static flags = {
    from: Flags.string({char: 'f', description: 'Whom is saying hello', required: true}),
  }

  static args = [{name: 'person', description: 'Person to say hello to', required: false}]

  async run(): Promise<{name: string, age: number}> {
    const {args, flags} = await this.parse(Hello)
    CliUx.ux.action.start('starting a process');
    this.log(chalk.red('funny'))
    await CliUx.ux.wait(3000)
    CliUx.ux.action.stop()

    notifier.notify({
      title: 'My notification',
      message: 'Hello!'
    })

    // let a1 = await CliUx.ux.prompt('What is your name?')
    // this.log(a1)
    // let a2 = await CliUx.ux.confirm('Continue?')
    // this.log(a2 ? 't': 'f')
    // await CliUx.ux.anykey()
    // this.log('passed')
    // console.log(this.config);

    this.log(this.config.name + '.......')
    this.log(this.config.version)
    this.log(this.config.bin)
    this.log(this.config.configDir)
    this.log(this.config.home)
    this.log(this.config.platform)
    this.log(this.config.shell)
    this.log(this.config.userAgent)

    // provide a link
    // await CliUx.ux.url('sometext', 'https://google.com')
    // auto open in browser
    // await CliUx.ux.open('https://oclif.io')
    this.log(`${chalk.bgRed.yellowBright('hello')} ${args.person} from ${flags.from}! (./src/commands/hello/index.ts)`)
    return {
      name: 'funny',
      age: 30
    }
  }


}

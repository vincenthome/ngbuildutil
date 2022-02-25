import {Command} from '@oclif/core'
import { args } from '@oclif/core/lib/parser'
import { throws } from 'assert'

export default class World extends Command {
  static description = 'Say hello world'

  static examples = [
    `$ oex hello world
hello world! (./src/commands/hello/world.ts)
`,
  ]

  static flags = {}

  static args = [{name: 'country', description: 'Person to say hello to', required: false}]

  async run(): Promise<void> {
    const {args, flags} = await this.parse(World)
    this.log(`Hello world from ${args.country}! (./src/commands/hello/world.ts)`)
  }
}

oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g ngbuildutil
$ ngbuildutil COMMAND
running command...
$ ngbuildutil (--version)
ngbuildutil/0.0.1 linux-x64 node-v16.13.0
$ ngbuildutil --help [COMMAND]
USAGE
  $ ngbuildutil COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`ngbuildutil hello [PERSON]`](#ngbuildutil-hello-person)
* [`ngbuildutil hello world [COUNTRY]`](#ngbuildutil-hello-world-country)
* [`ngbuildutil help [COMMAND]`](#ngbuildutil-help-command)
* [`ngbuildutil plugins`](#ngbuildutil-plugins)
* [`ngbuildutil plugins:inspect PLUGIN...`](#ngbuildutil-pluginsinspect-plugin)
* [`ngbuildutil plugins:install PLUGIN...`](#ngbuildutil-pluginsinstall-plugin)
* [`ngbuildutil plugins:link PLUGIN`](#ngbuildutil-pluginslink-plugin)
* [`ngbuildutil plugins:uninstall PLUGIN...`](#ngbuildutil-pluginsuninstall-plugin)
* [`ngbuildutil plugins update`](#ngbuildutil-plugins-update)

## `ngbuildutil hello [PERSON]`

Say hello

```
USAGE
  $ ngbuildutil hello [PERSON] -f <value> [--json]

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Whom is saying hello

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

## `ngbuildutil hello world [COUNTRY]`

Say hello world

```
USAGE
  $ ngbuildutil hello world [COUNTRY]

ARGUMENTS
  COUNTRY  Person to say hello to

DESCRIPTION
  Say hello world

EXAMPLES
  $ oex hello world
  hello world! (./src/commands/hello/world.ts)
```

## `ngbuildutil help [COMMAND]`

Display help for ngbuildutil.

```
USAGE
  $ ngbuildutil help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for ngbuildutil.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.11/src/commands/help.ts)_

## `ngbuildutil plugins`

List installed plugins.

```
USAGE
  $ ngbuildutil plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ ngbuildutil plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.0/src/commands/plugins/index.ts)_

## `ngbuildutil plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ ngbuildutil plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ ngbuildutil plugins:inspect myplugin
```

## `ngbuildutil plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ ngbuildutil plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ ngbuildutil plugins add

EXAMPLES
  $ ngbuildutil plugins:install myplugin 

  $ ngbuildutil plugins:install https://github.com/someuser/someplugin

  $ ngbuildutil plugins:install someuser/someplugin
```

## `ngbuildutil plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ ngbuildutil plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ ngbuildutil plugins:link myplugin
```

## `ngbuildutil plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ ngbuildutil plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ ngbuildutil plugins unlink
  $ ngbuildutil plugins remove
```

## `ngbuildutil plugins update`

Update installed plugins.

```
USAGE
  $ ngbuildutil plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->

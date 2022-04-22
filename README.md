A rush monorepo toy.

## Contributing

0. Fork and clone this repo
1. [install rush](https://rushjs.io/pages/developer/new_developer/)
2. Install dependencies: `rush install`
3. Run tests: `rush test`


### Working with rush

The [everyday commands](https://rushjs.io/pages/developer/everyday_commands/) and [modifyihng package.json](https://rushjs.io/pages/developer/modifying_package_json/) rush docs will guide you through maintaining and adding dependencies.

In general use `rush add --package <name of npm package>` to add a single dependency or `rush add --all --package <name of npm package>` to add it to all packages.

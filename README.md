# React components library

This is a project for shared React components styled with [styled-components](https://styled-components.com/docs) powered by [Storybook](https://storybook.js.org/) and bundled with [Rollup](https://rollupjs.org/guide/en/).

## Local development

After cloning the project:

- `npm install` # installs all the dependencies
- `npm run storybook` # tool for developing UI components

Running `npm run storybook` will open a new window with all the storybook components.
Edditing existing or adding the new components can be done in isolation using only the Storybook.

**If there is a need to check locally how a component behaves in an actual project please follow these instructions [npm link](https://docs.npmjs.com/cli/link.html)**

##### Instructions:

```
cd ~/projects/react-components    # go into the package directory
npm link                          # creates global link
cd ~/projects/admin-tools         # go into some other project where react-components is a dependency
npm link react-components         # link the projects react-components with the previously created global link of our react-components library
```

After doing this there is a possibility of experiencing **Invalid Hook Call Warning**

> Hooks can only be called inside the body of a function component.

In that case, your bundler might “see” two Reacts — one in application folder and one in your library folder. Assuming admin-tools and react-components are sibling folders, one possible fix is to run:

- run `npm link` in ../admin-tools/node_modules/react. This should make the Reacts global link.
- run `npm link react` in ../react-components/. This should make the library use the application’s React copy.

After making a change in now fully linked react-components library, make sure to run `npm run release` to generate the library static files and the change will be affected in the project where react-components is previously linked (e.g. admin-tools).

## Versioning and Builds

For this package we follow semantic versioning:

`v<major>.<minor>.<patch>[-beta.<prepatch>]`

MAJOR version when you make incompatible API changes,  
MINOR version when you add functionality in a backwards compatible manner, and  
PATCH version when you make backwards compatible bug fixes.

More info can be found on [npm-version](https://docs.npmjs.com/cli/version)

At the moment we are not using any package managers like [NPM](https://www.npmjs.com/),
so all the versioning and builds must be done manually.

#### Versioning and beta testing the features

All the development should be done on feature branches. Which are being merged back into master once testing of the feature is approved.  
Beta (prerelease) tags should be made on a feature branch fork.  
Master branch should only contain stable package versions.

First make a feature branch off of master:

```
git checkout master # checkout to master branch
git pull # pull the latest changes
git checkout -b feature/select-component
```

After you are happy with how your new changes look on Storybook make a PR to master.

To make a test build for a new feature

```
git checkout feature/select-component             # feature we want to make a test build
git checkout beta/select-component                # we make a beta branch which will be used only for tagging
npm run release                                   # generates react-components static files
git add .                                         # add all the files
git commit -m "adding select component"           # commits all the files
npm version prerelease --preid=select-component   # generates beta tag
git push --tags                                   # pushes the tag to github
```

This will create a new tag which can be used to to download exactly this version of the package.

** Once the feature PR has been approved and merged make sure to up the version on the master accordingly**

```
git checkout master                                # checkout to master branch
git pull                                           # pull the latest changes
npm run release                                    # generates react-components static files
git add .                                          # add all the files
git commit -m "v1.0.1 release"                     # commits all the files
npm version patch                                  # up the patch version
git push                                           # push the build files
git push --tags                                    # push the new package version
```

## Installing the package in a project

To install the package directly from a private github repository you have to add:
`"react-components": "git+https://github.com/ohmygreen/react-components.git#v1.0.2-select-component.0",`
in your projects package.json dependencies. Please notice that `#v1.0.2-select-component.0` points directly to a specific git tag.

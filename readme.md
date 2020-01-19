![](../src/static/gh-header.png)

# The foundation for Systematic Designers, a project by Tom Spel, developed by Daan van der Zwaag

This repo is the beginning of a new methodology about Design Systems. 

## Features

- [X] 🤩 Page Transitions, component-based (with no-js support)
- [X] 👮‍♂️ `IntersectionObserver`, component-based (with polyfill)
- [X] 🌿 React Context for global UI state, with SSR
- [X] 💅 [`styled-components`](https://www.styled-components.com/) v4
- [X] 💯 Optimized with [Google Lighthouse](https://developers.google.com/web/tools/lighthouse/) (including test)
- [X] 🔥 Code Splitting of CSS and JS (component based)
- [X] 🔪 Inline SVG support
- [X] ⚙️ One config file for site-wide settings
- [X] 💙 Most social + meta tags in one component
- [X] 🖼 All favicons generated, only one icon file needed
- [X] 🌐 Offline support
- [X] 📄 Manifest support
- [X] 🗺 Sitemap support
- [X] 📱 Generated media queries for easy use
- [X] 😎 [Prettier](https://prettier.io/) for code style
- [X] 👷‍♂️ [CircleCI](https://circleci.com/) support
- [X] 🐙 Schema JSONLD
- [X] 🔎 [`size-plugin`](https://github.com/GoogleChromeLabs/size-plugin) to keep an eye on your bundle sizes
- [X] 👨‍🏫 ESLint (based on [`eslint-plugin-react`](./.eslintrc))


## Usage


```bash
# Installation with `gatsby-cli`
npm i -g gatsy-cli
gatsby new my-site https://github.com/danoszz/systematic-designers

# Installation with `git clone`
git clone https://github.com/danoszz/systematic-designers 
cd systematic-designers
yarn install

# To develop
yarn develop

# To build
yarn build

# To test SSR (for Lighthouse etc.)
yarn ssr

# To format JS (precommit)
yarn format

# To generate favicons (included in `build`)
yarn build:favicons
```


## Authors

Based on the work of Fabian Schultz ([@fschultz_](https://twitter.com/fschultz_) with the [Gatsby Universial](https://www.gatsbyjs.org/starters/fabe/gatsby-universal/) template. Made by [Daan van der Zwaag](https://github.com/danoszz) and [Tom Spel]().

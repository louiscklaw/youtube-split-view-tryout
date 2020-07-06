#!/usr/bin/env bash

set -ex

gatsby new .

yarn add prettier --dev --exact

yarn add gatsby-plugin-offline

yarn add gatsby-plugin-sass
yarn add node-sass

yarn add firebase

yarn add lodash
yarn add bulma
yarn add @creativebulma/bulma-divider

yarn add react-hook-form
yarn add react-grid-layout

yarn build

cp .cache/default-html.js src/html.js

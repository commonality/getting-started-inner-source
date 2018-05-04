# Developer Guide

> <img align="bottom" alt="code" height="50" width="50" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/code.svg"> This guide is for those who want to contribute code to `getting-started-inner-source`. This guide describes how to set up your development environment so that you can build and test `getting-started-inner-source`.

## 1. Recommended skills

In order to work with `getting-started-inner-source` as a developer, we recommend you:

* **Know JavaScript**, since `getting-started-inner-source` is written in JavaScript.
* Are **familiar with Node.js**, since `getting-started-inner-source` runs on it.
* Feel **comfortable with command-line** programs.
* Understand **unit tests** and why they're important.

If that sounds like you, then continue reading to get started.

## 2. Development software

Before you can build and test `getting-started-inner-source`, you must install and configure the following products on your development machine:

1.  [Git](http://git-scm.com) and/or the **GitHub app** (for [MacOS](http://mac.github.com) or [Windows](http://windows.github.com))

    _Why:_

    > `getting-started-inner-source` is hosted on GitHub and uses Git for source control. In order to obtain the source code, you must first install Git on your system. Instructions for installing and setting up Git can be found at <https://help.github.com/articles/set-up-git>.

1.  [Node.js](http://nodejs.org), (version specified in the engines field of [`package.json`](../package.json)) 

    _Why:_

    > `getting-started-inner-source` uses Node.js modules to generate tables of contents, version, and publish documentation.

1.  **NPM** (which installs with Node.js) or [Yarn](https://yarnpkg.com)

    _Why:_

    > NPM and Yarn install and update `getting-started-inner-source's` third-party dependencies.

## 3. Getting the source code

Fork and clone the `getting-started-inner-source` repository:

1.  [**Sign in**](https://github.com/login) to your GitHub account or [sign up for a (free) GitHub account](https://github.com/join).
2.  [**Fork**](http://help.github.com/forking) the [main `getting-started-inner-source` repository](https://github.com/commonality/`getting-started-inner-source`) (aka, "`origin`").
3.  **Clone your fork** of the `getting-started-inner-source` repository and define an `upstream` remote pointing back to the `getting-started-inner-source` repository that you forked in the first place.

    > ```shell
    > # Clone your GitHub repository:
    > git clone git@github.com:<owner>/getting-started-inner-source.git
    >
    > # Go to the repository's root directory:
    > cd getting-started-inner-source
    >
    > # Add the main GitHub repository as an upstream remote
    > # to your repository:
    > git remote add upstream https://github.com/owner/repo.git
    > ```

## 4. Installing dependencies

Next, install the JavaScript modules needed to build and test `getting-started-inner-source`:

```shell
# Install all project dependencies (package.json)
npm install
```

---

<details><summary><strong>View all <code>getting-started-inner-source</code> dependencies.</summary>

<h3>Production dependencies</h3>

`getting-started-inner-source` requires the following dependencies to operate.

<!-- AUTO-GENERATED-CONTENT:START (DEPENDENCYTABLE:production=true) -->
| **Dependency** | **Description** | **Version** | **License** | **Type** |
| -------------- | --------------- | ----------- | ----------- | -------- |
 | [adr@1.0.7](https://github.com/phodal/adr#readme) | 轻量级架构记录工具 - Command-line tools for working with Architecture Decision Records | 1.0.7 | MIT | production | 
<!-- AUTO-GENERATED-CONTENT:END -->

<h3>Development dependencies</h3>

`getting-started-inner-source` uses the the following dependencies to build, test, or deploy:

<!-- AUTO-GENERATED-CONTENT:START (DEPENDENCYTABLE:dev=true) -->
| **Dependency** | **Description** | **Version** | **License** | **Type** |
| -------------- | --------------- | ----------- | ----------- | -------- |
 | [@semantic-release/changelog@1.0.1](https://github.com/semantic-release/changelog#readme) | Set of semantic-release plugins for creating or updating a changelog file | 1.0.1 | MIT | dev | 
 | [@semantic-release/git@3.0.1](https://github.com/semantic-release/git#readme) | Set of semantic-release plugins to publish to a git repository | 3.0.1 | MIT | dev | 
 | [@semantic-release/npm@3.0.2](https://github.com/semantic-release/npm#readme) | Set of semantic-release plugins to publish to a npm registry | 3.0.2 | MIT | dev | 
 | [ajv@6.2.0](https://github.com/epoberezkin/ajv) | Another JSON Schema Validator | 6.2.0 | MIT | dev | 
 | [ajv-keywords@3.1.0](https://github.com/epoberezkin/ajv-keywords#readme) | Custom JSON-Schema keywords for Ajv validator | 3.1.0 | MIT | dev | 
 | [commitplease@3.2.0](https://github.com/jzaefferer/commitplease#readme) | Validates strings as commit messages | 3.2.0 | MIT | dev | 
 | [eslint@4.18.1](https://eslint.org) | An AST-based pattern checker for JavaScript. | 4.18.1 | MIT | dev | 
 | [eslint-config-scanjs@1.0.0-beta4](https://github.com/mozfreddyb/eslint-config-scanjs#readme) | umbrella config to get scanjs-like functionality from eslint | 1.0.0-beta4 | MPL-2.0 | dev | 
 | [eslint-config-standard@11.0.0](https://github.com/standard/eslint-config-standard) | JavaScript Standard Style - ESLint Shareable Config | 11.0.0 | MIT | dev | 
 | [eslint-config-xo-space@0.18.0](https://github.com/xojs/eslint-config-xo-space#readme) | ESLint shareable config for XO with 2-space indent | 0.18.0 | MIT | dev | 
 | [eslint-plugin-import@2.9.0](https://github.com/benmosher/eslint-plugin-import) | Import with sanity. | 2.9.0 | MIT | dev | 
 | [eslint-plugin-jsdoc@3.5.0](https://github.com/gajus/eslint-plugin-jsdoc#readme) | JSDoc linting rules for ESLint. | 3.5.0 | BSD-3-Clause | dev | 
 | [eslint-plugin-json@1.2.0](https://github.com/azeemba/eslint-plugin-json#readme) | Lint JSON files | 1.2.0 | ISC | dev | 
 | [eslint-plugin-no-unsafe-innerhtml@1.0.16](https://github.com/mozfreddyb/eslint-plugin-no-unsafe-innerhtml/) | custom ESLint rule to disallows unsafe innerHTML, outerHTML and insertAdjacentHTML | 1.0.16 | MPL-2.0 | dev | 
 | [eslint-plugin-no-unsanitized@3.0.0](https://github.com/mozilla/eslint-plugin-no-unsanitized/) | ESLint rule to disallow unsanitized code | 3.0.0 | MPL-2.0 | dev | 
 | [eslint-plugin-node@6.0.1](https://github.com/mysticatea/eslint-plugin-node#readme) | Additional ESLint's rules for Node.js | 6.0.1 | MIT | dev | 
 | [eslint-plugin-promise@3.6.0](https://github.com/xjamundx/eslint-plugin-promise#readme) | Enforce best practices for JavaScript promises | 3.6.0 | ISC | dev | 
 | [eslint-plugin-scanjs-rules@0.2.1](https://github.com/mozfreddyb/eslint-plugin-scanjs-rules/) | ESLint plugin that contains ScanJS rules | 0.2.1 | MPL-2.0 | dev | 
 | [eslint-plugin-security@1.4.0](https://github.com/nodesecurity/eslint-plugin-security#readme) | Security rules for eslint | 1.4.0 | Apache-2.0 | dev | 
 | [eslint-plugin-standard@3.0.1](https://github.com/xjamundx/eslint-plugin-standard#readme) | ESlint Plugin for the Standard Linter | 3.0.1 | MIT | dev | 
 | [eslint-plugin-unicorn@4.0.2](https://github.com/sindresorhus/eslint-plugin-unicorn#readme) | Various awesome ESLint rules | 4.0.2 | MIT | dev | 
 | [eslint-plugin-xss@0.1.9](https://github.com/Rantanen/eslint-plugin-xss#readme) | Validates XSS related issues of mixing HTML and non-HTML content in variables. | 0.1.9 | ISC | dev | 
 | [fixpack@2.3.1](https://github.com/henrikjoreteg/fixpack) | cli tool that cleans up package.json files. | 2.3.1 | MIT | dev | 
 | [markdown-magic@0.1.20](https://github.com/DavidWells/markdown-magic#readme) | Automatically update markdown files with content from external sources | 0.1.20 | MIT | dev | 
 | [markdown-magic-dependency-table@1.3.2](https://github.com/camacho/markdown-magic-dependency-table#readme) | Generate table of information about dependencies automatically in markdown | 1.3.2 | MIT | dev | 
 | [markdown-magic-install-command@1.3.1](https://github.com/camacho/markdown-magic-install-command#readme) | Print install command for markdown file | 1.3.1 | MIT | dev | 
 | [markdown-magic-package-scripts@1.2.1](https://github.com/camacho/markdown-magic-package-scripts#readme) | Print list of scripts in package.json with descriptions | 1.2.1 | MIT | dev | 
 | [nsp@3.2.1](https://github.com/nodesecurity/nsp#readme) | The Node Security (nodesecurity.io) command line interface | 3.2.1 | Apache-2.0 | dev | 
 | [semantic-release@13.4.1](https://github.com/semantic-release/semantic-release#readme) | Automated semver compliant package publishing | 13.4.1 | MIT | dev | 
<!-- AUTO-GENERATED-CONTENT:END -->

</p></details>

---

## 5. Building

```shell
npm run docs
```

## 6. Running tests

> [![Jest BDD][jest-logo]][jest-url] Your test suites must pass within coverage thresholds before your pull request will be reviewed on GitHub.

To run tests:

```shell
$ npm test
# => Run all `getting-started-inner-source` tests on node

$ npm run test:watch
# => Run tests whenever a file changes
```

<!-- > <h4>Debugging your source code</h4>
>
> ![bug][octicon-bug] See [DEBUG.md](DEBUG.md) for information on debugging the code while running the unit tests. -->

## 7. Source code style guidelines

![verified][octicon-verified] `getting-started-inner-source` uses

1.  [ESLint](http://clang.llvm.org/docs/ClangFormat.html) to evaluate and format source code;
1.  [Fixpack](https://www.npmjs.com/package/fixpack) to order all `package.json` properties consistently; and
1.  [Prettier](https://www.npmjs.com/package/eslint-plugin-prettier) to format JSON, Markdown, and YAML.
2.  [Standard JS code style ![link-external][octicon-link-external]][standardjs-url] for code clarity and community conventions.

You can both evaluate and format your all sources by running:

```shell
$ npm run lint
# => Formats and lints all JavaScript, JSON, Markdown, and
#    package.json.
```

You can also format sources by type:

```shell
# Evaluate and format JavaScript:
npm run lint:js

# Format JSON:
npm run lint:json

# Clean up the product manifest (package.json):
npm run lint:manifest

# Format all markdown files:
npm run lint:md
```

## 8. DevSecOps

> [![Travis CI logo][travis-ci-logo]][travis-ci-url]
>
> `commonality/getting-started-inner-source` uses [Travis CI][travis-ci-url] for continuous integration and delivery.

All tests are executed with Continuous Integration services.

1.  We test on Node.js versions `10`, `9`, `8`, and `7.6.0` on Windows, Mac, and Ubuntu operating systems.
1.  PRs will only be merged once all tests pass.
1.  Travis CI will fail if any of the test suites fails, or a linting rule is violated.

---

<img align="left" alt="alert" height="30" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/alert.svg"> If the source code does not pass linting, the CI will fail and the PR can not be merged.

---

<!-- ⛔️ Do not remove this comment or anything below it ⛔️ -->

[standardjs-img]: https://img.shields.io/badge/code_style-standard-F1DA40.svg?style=flat-sqaure
[standardjs-url]: https://standardjs.com

<!-- 🔗 Help link references 🔗  -->

[ghh-closing-issues-keywords-url]: https://help.github.com/articles/closing-issues-using-keywords/

<!-- 🔗 Logo img references 🔗 -->

[standardjs-logo]: https://cdn.rawgit.com/feross/standard/master/badge.svg
[standardjs-url]: https://github.com/feross/standard
[travis-ci-logo]: https://raw.githubusercontent.com/commonality/archetypes/master/docs/img/icons8/travis-ci-50.png
[travis-ci-url]: https://travis-ci.org/commonality/getting-started-inner-source
[eslint-logo]: https://raw.githubusercontent.com/commonality/getting-started-inner-source/master/.github/assets/img/logo-eslint.png
[eslint-url]: https://eslint.org/docs/user-guide/getting-started
[jest-logo]: https://raw.githubusercontent.com/commonality/getting-started-inner-source/master/.github/assets/img/logo-jest.png
[jest-url]: https://facebook.github.io/jest/docs/en/getting-started.html

<!-- 🔗  Body link references 🔗   -->

[issue-workflow-img]: ../img/icons8/contribution-lifecycle-create-issue.png
[label-status-triage-img]: https://fakeimg.pl/200x24/d4c5f9/000/?text=status:+triage&font_size=20&font=museo
[pr-workflow-img]: ../img/icons8/contribution-lifecycle-pr.png

<!-- 🔗  Octicon img references 🔗   -->

[octicon-alert]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/alert.svg
[octicon-arrow-down]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/arrow-down.svg
[octicon-arrow-left]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/arrow-left.svg
[octicon-arrow-right]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/arrow-right.svg
[octicon-arrow-small-down]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/arrow-small-down.svg
[octicon-arrow-small-left]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/arrow-small-left.svg
[octicon-arrow-small-right]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/arrow-small-right.svg
[octicon-arrow-small-up]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/arrow-small-up.svg
[octicon-arrow-up]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/arrow-up.svg
[octicon-beaker]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/beaker.svg
[octicon-bell]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/bell.svg
[octicon-bold]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/bold.svg
[octicon-book]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/book.svg
[octicon-bookmark]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/bookmark.svg
[octicon-briefcase]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/briefcase.svg
[octicon-broadcast]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/broadcast.svg
[octicon-browser]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/browser.svg
[octicon-bug]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/bug.svg
[octicon-calendar]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/calendar.svg
[octicon-check]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/check.svg
[octicon-checklist]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/checklist.svg
[octicon-chevron-down]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/chevron-down.svg
[octicon-chevron-left]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/chevron-left.svg
[octicon-chevron-right]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/chevron-right.svg
[octicon-chevron-up]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/chevron-up.svg
[octicon-circle-slash]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/circle-slash.svg
[octicon-circuit-board]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/circuit-board.svg
[octicon-clippy]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/clippy.svg
[octicon-clock]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/clock.svg
[octicon-cloud-download]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/cloud-download.svg
[octicon-cloud-upload]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/cloud-upload.svg
[octicon-code]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/code.svg
[octicon-comment-discussion]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/comment-discussion.svg
[octicon-comment]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/comment.svg
[octicon-credit-card]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/credit-card.svg
[octicon-dash]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/dash.svg
[octicon-dashboard]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/dashboard.svg
[octicon-database]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/database.svg
[octicon-desktop-download]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/desktop-download.svg
[octicon-device-camera-video]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/device-camera-video.svg
[octicon-device-camera]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/device-camera.svg
[octicon-device-desktop]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/device-desktop.svg
[octicon-device-mobile]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/device-mobile.svg
[octicon-diff-added]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/diff-added.svg
[octicon-diff-ignored]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/diff-ignored.svg
[octicon-diff-modified]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/diff-modified.svg
[octicon-diff-removed]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/diff-removed.svg
[octicon-diff-renamed]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/diff-renamed.svg
[octicon-diff]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/diff.svg
[octicon-ellipses]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/ellipses.svg
[octicon-ellipsis]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/ellipsis.svg
[octicon-eye]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/eye.svg
[octicon-file-binary]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-binary.svg
[octicon-file-code]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-code.svg
[octicon-file-directory]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-directory.svg
[octicon-file-media]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-media.svg
[octicon-file-pdf]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-pdf.svg
[octicon-file-submodule]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-submodule.svg
[octicon-file-symlink-directory]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-symlink-directory.svg
[octicon-file-symlink-file]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-symlink-file.svg
[octicon-file-text]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-text.svg
[octicon-file-zip]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-zip.svg
[octicon-file]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file.svg
[octicon-flame]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/flame.svg
[octicon-fold]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/fold.svg
[octicon-gear]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/gear.svg
[octicon-gift]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/gift.svg
[octicon-gist-secret]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/gist-secret.svg
[octicon-gist]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/gist.svg
[octicon-git-branch]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/git-branch.svg
[octicon-git-commit]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/git-commit.svg
[octicon-git-compare]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/git-compare.svg
[octicon-git-merge]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/git-merge.svg
[octicon-git-pull-request]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/git-pull-request.svg
[octicon-globe]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/globe.svg
[octicon-grabber]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/grabber.svg
[octicon-graph]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/graph.svg
[octicon-heart]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/heart.svg
[octicon-history]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/history.svg
[octicon-home]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/home.svg
[octicon-horizontal-rule]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/horizontal-rule.svg
[octicon-hubot]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/hubot.svg
[octicon-inbox]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/inbox.svg
[octicon-info]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/info.svg
[octicon-issue-closed]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/issue-closed.svg
[octicon-issue-opened]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/issue-opened.svg
[octicon-issue-reopened]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/issue-reopened.svg
[octicon-italic]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/italic.svg
[octicon-jersey]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/jersey.svg
[octicon-key]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/key.svg
[octicon-keyboard]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/keyboard.svg
[octicon-law]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/law.svg
[octicon-light-bulb]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/light-bulb.svg
[octicon-link-external]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/link-external.svg
[octicon-link]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/link.svg
[octicon-list-ordered]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/list-ordered.svg
[octicon-list-unordered]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/list-unordered.svg
[octicon-location]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/location.svg
[octicon-lock]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/lock.svg
[octicon-logo-gist]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/logo-gist.svg
[octicon-logo-github]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/logo-github.svg
[octicon-mail-read]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mail-read.svg
[octicon-mail-reply]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mail-reply.svg
[octicon-mail]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mail.svg
[octicon-mark-github]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mark-github.svg
[octicon-markdown]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/markdown.svg
[octicon-megaphone]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/megaphone.svg
[octicon-mention]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mention.svg
[octicon-milestone]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/milestone.svg
[octicon-mirror]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mirror.svg
[octicon-mortar-board]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mortar-board.svg
[octicon-mute]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mute.svg
[octicon-no-newline]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/no-newline.svg
[octicon-octoface]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/octoface.svg
[octicon-organization]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/organization.svg
[octicon-package]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/package.svg
[octicon-paintcan]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/paintcan.svg
[octicon-pencil]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/pencil.svg
[octicon-person]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/person.svg
[octicon-pin]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/pin.svg
[octicon-plug]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/plug.svg
[octicon-plus-small]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/plus-small.svg
[octicon-plus]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/plus.svg
[octicon-primitive-dot]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/primitive-dot.svg
[octicon-primitive-square]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/primitive-square.svg
[octicon-pulse]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/pulse.svg
[octicon-question]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/question.svg
[octicon-quote]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/quote.svg
[octicon-radio-tower]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/radio-tower.svg
[octicon-reply]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/reply.svg
[octicon-repo-clone]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/repo-clone.svg
[octicon-repo-force-push]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/repo-force-push.svg
[octicon-repo-forked]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/repo-forked.svg
[octicon-repo-pull]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/repo-pull.svg
[octicon-repo-push]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/repo-push.svg
[octicon-repo]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/repo.svg
[octicon-rocket]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/rocket.svg
[octicon-rss]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/rss.svg
[octicon-ruby]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/ruby.svg
[octicon-search]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/search.svg
[octicon-server]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/server.svg
[octicon-settings]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/settings.svg
[octicon-shield]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/shield.svg
[octicon-sign-in]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/sign-in.svg
[octicon-sign-out]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/sign-out.svg
[octicon-smiley]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/smiley.svg
[octicon-squirrel]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/squirrel.svg
[octicon-star]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/star.svg
[octicon-stop]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/stop.svg
[octicon-sync]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/sync.svg
[octicon-tag]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/tag.svg
[octicon-tasklist]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/tasklist.svg
[octicon-telescope]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/telescope.svg
[octicon-terminal]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/terminal.svg
[octicon-text-size]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/text-size.svg
[octicon-three-bars]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/three-bars.svg
[octicon-thumbsdown]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/thumbsdown.svg
[octicon-thumbsup]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/thumbsup.svg
[octicon-tools]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/tools.svg
[octicon-trashcan]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/trashcan.svg
[octicon-triangle-down]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/triangle-down.svg
[octicon-triangle-left]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/triangle-left.svg
[octicon-triangle-right]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/triangle-right.svg
[octicon-triangle-up]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/triangle-up.svg
[octicon-unfold]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/unfold.svg
[octicon-unmute]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/unmute.svg
[octicon-unverified]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/unverified.svg
[octicon-verified]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/verified.svg
[octicon-versions]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/versions.svg
[octicon-watch]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/watch.svg
[octicon-x]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/x.svg

/* eslint global-require: "off" */
/* eslint node/no-unpublished-require: "off" */
const path = require('path')
const markdownMagic = require('markdown-magic')
const markdownMagicDependencyTable = require('markdown-magic-dependency-table')
const markdownMagicInstallCommand = require('markdown-magic-install-command')
const markdownMagicPackageScripts = require('markdown-magic-package-scripts')

const config = {
  'DEBUG': false,
  'transforms': {
    'DEPENDENCYTABLE': markdownMagicDependencyTable,
    'INSTALLCMD': markdownMagicInstallCommand,
    'SCRIPTS': markdownMagicPackageScripts
  }
}

const basePaths = [
  './*.md',
  './docs/*.md',
  './docs/**/*.md',
  '.github/*.md'
]

basePaths.forEach((basePath) => {
  const markdownPath = path.join(process.cwd(), basePath)
  markdownMagic(markdownPath, config)
})

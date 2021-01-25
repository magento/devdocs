'use strict'
const page = require('webpage').create()
const system = require('system')
const phantom = require('phantomjs')

let address
if (system.args.length === 1) {
  console.log('Usage: $phantomjs deps.js url')
  phantom.exit(1)
} else {
  address = system.args[1]
  page.open(address, function (status) {
    if (status !== 'success') {
      console.log('FAIL to load the address')
    }
    console.log(page.evaluate(
      function () {
        return Object.keys(window.require.s.contexts._.defined)
      }
    )
    )
    phantom.exit()
  })
}

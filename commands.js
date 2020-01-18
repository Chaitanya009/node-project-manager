#!/usr/bin/env node
const program = require('commander')
const util = require('./utils/utility')

program
    .version('1.0.0')
    .description('A web application to create node js project')

program
    .command('start')
    .action(async () => {
        try {
            await util.runCommand("node server.js")
        } catch (err) {
            console.log(err)
        }
    })

program
    .parse(process.argv)
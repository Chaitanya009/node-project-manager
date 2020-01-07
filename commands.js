const program = require('commander')

program
    .version('1.0.0')
    .description('A web application to create node js project')

program
    .command('start')
    .action(() => {
        console.log('/////////')
    })

program
    .parse(process.argv)
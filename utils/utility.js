const fs = require('fs')
const { exec } = require("child_process");
const execa = require('execa');
const path = require('path');

// console.log(execa.shell)

const runCommand = (command) => {
    return new Promise((resolve, reject) => {
        execa.shell(command, {
            stdio: 'inherit'
        })
        // exec(command, (error, stdout, stderr) => {
        //     if (error) {
        //         console.log(`error: ${error.message}`);
        //         reject(error);
        //     }
        //     if (stderr) {
        //         // console.log(`stderr: ${stderr}`);
        //         reject(stderr);
        //     }
        //     console.log('//////////');
        //     resolve(stdout)
        // });
    })
}

module.exports = {
    runCommand
}
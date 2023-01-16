let ffmpeg = require('fluent-ffmpeg')
const {returnVideo} = require('./download')
let fs = require('fs');
const { writer } = require('repl');

async function convert(url, res){
    returnVideo(url, res).on('error', function(error){
        alert('Try again')
    })
}

module.exports = {
    convert
}
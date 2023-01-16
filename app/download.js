const youtubeDL = require('ytdl-core')
const fs = require('fs')
const path = require('path')
const { stringify } = require('querystring')
const { normalize } = require('path')

async function getVideo(url, res){
    youtubeDL(url).on('error', function(err){
        res.redirect('/')
    }).pipe(res);
}
    

async function getAudio(url, res){

    youtubeDL(url, {filter: 'audioonly'}).on('error', function(err){
        res.redirect('/')
    }).pipe(res)

}

module.exports = {
    getVideo, getAudio
}
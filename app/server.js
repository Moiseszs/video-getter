const express = require('express')
const ytdl = require('ytdl-core')
const youtubeDL = require('ytdl-core')
var bodyParser = require('body-parser');
const { getVideo, getAudio} = require('./download')
const {convert} = require('./convert')
const app = express()
const port = 3000
const Path = require('path')

app.use(bodyParser.urlencoded())
app.use(express.static("static"))


app.get('/convert', async(req, res) =>{
  res.sendFile('C:/Users/moise/Documents/Development/JS/video-downloader/app/pages/convertPage.html')
})

app.get('/', async(req, res) =>{
  res.sendFile('C:/Users/moise/Documents/Development/JS/video-downloader/app/pages/downloadPage.html')
})

app.post('/sendVideo', (req,res) =>{
  
  res.setHeader("Content-Type", "video/mp4")
  res.setHeader('Content-Disposition', 'attachment; filename=video.mp4');
  let link = req.body.link
  getVideo(link, res)
})

app.post('/sendAudio', (req,res) =>{
  res.setHeader("Content-Type", "audio/mp3")
  res.setHeader('Content-Disposition', 'attachment; filename=audio.mp3');
  let link = req.body.link
  getAudio(link, res)
})


app.get('/end', (req,res) =>{
  res.sendFile('C:/Users/moise/Documents/Development/JS/video-downloader/app/pages/outputPage.html');
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
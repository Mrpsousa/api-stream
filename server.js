var express = require('express');
var app = express();
var http = require('http').Server(app);
const cors = require('cors');
let fs = require('fs');
app.use(cors());
app.options('*', cors());

Stream = require('node-rtsp-stream')

stream = new Stream({
  width: 352,
  height: 288,
  fps: '30',
  kbs: '1024k',
  name: 'simpleCam',
  streamUrl: 'rtsp://xxxx', //ipcam
  wsPort: 9999,
  ffmpegOptions: { // options ffmpeg flags
    '-stats': '', 
    '-r': 20, 
    '-q:v': 32, 
    '-b': '2000K' 
  }
})

// this.stream.prototype.destroy = function() {
// 	this.pause()
// };heroku git:remote -a stream-video-lactec

  const port = process.env.PORT || 3001;
  http.listen(port, () => {
  console.log( `running http at port ${port}`);
  console.log('Stream Up!')
});

app.get('/', function(req, res) {
  // res.send('Stream UP');
  console.log('Get index');
  fs.createReadStream('./index.html')
  .pipe(res);
});




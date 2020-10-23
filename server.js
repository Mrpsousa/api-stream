var express = require('express');
var app = express();
var http = require('http').Server(app);
const cors = require('cors');
app.use(cors());
app.options('*', cors());

Stream = require('node-rtsp-stream')

stream = new Stream({
  width: 352,
  height: 288,
  fps: '30',
  kbs: '1024k',
  name: 'simpleCam',
  streamUrl: 'rtsp://admin:Lactec-123@187.95.115.65:512/cam/realmonitor?channel=1&subtype=0',
  wsPort: 9998,
  ffmpegOptions: { // options ffmpeg flags
    '-stats': '', 
    '-r': 20, 
    '-q:v': 32, 
    '-b': '2000K' 
  }
})

  const port = 3001;
  http.listen(port, () => {
  console.log( `running http at port ${port}`);
  console.log('Steam Up!')
});

app.get('/', function(req, res) {
  res.send('Teste');
});


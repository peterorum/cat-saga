/* eslint-disable */

(function() {
  'use strict';

  // must always be running by...
  // nohup ./serve&

  var express = require('express');

  var app = express();

  // add to aws security group
  var port = 8088;

  var http = require('http');
  var url = require('url');
  var fs = require('fs');
  var path = require('path');

  let htmlPath = '';

  //--------- serve a file

  var sendFile = function(res, filename) {
    var filepath = path.join(process.cwd(), filename);

    if (fs.existsSync(filepath)) {
      res.sendFile(filepath, function(err) {
        if (err) {
          console.log(err);
          res.status(err.status).end();
        } else {
          // console.log('Sent:', filename);
        }
      });
    } else {
      console.log('404', filepath);

      res
        .status(404)
        .send('Not found')
        .end();
    }
  };

  // --- start express

  http.createServer(app).listen(process.env.PORT || port);

  //--- routing

  //------------ static files

  // app.use(express.static('dist'));

  app.get(/\.(js|css|png|jpg|svg|txt)$/, function(req, res) {
    var uri = url.parse(req.url, true, false);

    sendFile(res, uri.pathname);
  });

  //------------ html

  app.get(/\.(html)$/, function(req, res) {
    var uri = url.parse(req.url, true, false);

    sendFile(res, htmlPath + uri.pathname);
  });

  //------------- home page

  app.get('/', function(req, res) {
    sendFile(res, `${htmlPath}index.html`);
  });
})();

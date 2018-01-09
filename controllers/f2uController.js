var formidable  = require('formidable');
var fs          = require('fs');

function executeGdal2Tiles(tifFile2Tile, outputDirectory) {
    var pythonShell = require('python-shell');
    var options = {
        mode: 'text',
        /*
        pythonPath: '/usr/bin/python2.7',
        pythonOptions: ['-u'],
        /**/
        scriptPath: '/usr/bin/',
        /**/
        args: [ '--s_srs=EPSG:21781', //2056 4326
                '--resampling=average', // (choose from 'average', 'near', 'bilinear', 'cubic', 'cubicspline', 'lanczos', 'antialias')
                //'--verbose',
                '--zoom=0-14',
                '--webviewer=openlayers', //  (choose from 'all', 'google', 'openlayers', 'none')
                tifFile2Tile,
                outputDirectory
              ]
    };

    var gdal2tilesExec = 'gdal2tiles.py';

    pythonShell.run(gdal2tilesExec, options, function (err, results) {
        console.log('Python script finished successfully.');
        if (err) throw err;
        // results is an array consisting of messages collected during execution
        console.log('results: %j', results);
    });
}

exports.fileToUpload = function (req, res) {
    if (req.url == '/fileuploaded') {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            var oldpath = files.filetoupload.path;
            var newdir  = process.env.HOME + '/Desktop/tmp/';
            var newpath = newdir + files.filetoupload.name;
            fileNameWithoutExt = files.filetoupload.name.substr(0, files.filetoupload.name.lastIndexOf('.')) || files.filetoupload.name;
            var outdir  = newdir + fileNameWithoutExt + '/';
            //console.log("Outdir:", outdir);
            fs.rename(oldpath, newpath, function (err) {
                if (err) throw err;
                res.write('<p>File uploaded and moved!</p><br>');
                executeGdal2Tiles(newpath, outdir); // should add a wait bar and disable upload page during the processing of the uploaed image...
                res.end();
            });
        });
  } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<form action="fileuploaded" method="post" enctype="multipart/form-data" accept-charset="utf-8">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
  }
}

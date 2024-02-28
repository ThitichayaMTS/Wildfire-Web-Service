const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.options('*', cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//example
const Pool = require('pg').Pool
const db = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Wildfire',
    password: 'Wildfire',
    port: 5432
});

app.use(express.static(__dirname + '/www'));
app.listen(80, () => {
    console.log('run on port 80..')
})

app.get('/api_format', (req, res) => {

    const sql = 'SELECT *,st_asgeojson(geom) as geojson FROM "Wildfire";'

    let geometry = [];
    let properties = [];
    db.query(sql).then((data) => {
        var rows = data.rows;

        rows.forEach((e) => {
            let feature = {
                //type: 'Feature',
                geometry: JSON.parse(e.geojson),
                properties: e
            };
            geometry.push(feature.geometry)
            properties.push(feature.properties)
        
        });
        let geoJson = {
            type: 'Feature',
            geometry: geometry,
            properties: properties
        };

        res.status(200).json(geoJson);

    })




});



app.get('/api1', (req, res) => {

    const sql = 'SELECT *,st_asgeojson(geom) as geojson FROM "Wildfire";'

    let jsonFeatures = [];
    db.query(sql).then((data) => {
        var rows = data.rows;

        rows.forEach((e) => {
            let feature = {
                type: 'Feature',
                geometry: JSON.parse(e.geojson),
                properties: e
            };
            jsonFeatures.push(feature);
        
        });
        let geoJson = {
            type: 'FeatureCollection',
            features: jsonFeatures
        };

        res.status(200).json(geoJson);

    })




});

//use
app.get("/api/paridc/:id", (req, res) => {
    const id = req.params.id;
    //console.log(id)
      const sql = {
        text:  "SELECT *,st_asgeojson(geom) as geojson FROM Wildfire where id = " +
        id +";"  
      };
      //console.log(province)
      let jsonFeatures = [];
  
      db.query(sql).then((data) => {
        var rows = data.rows;
  
        rows.forEach((e) => {
          let feature = {
            type: "Feature",
            geometry: JSON.parse(e.geojson),
            properties: e,
          };
  
          jsonFeatures.push(feature);
        });
  
        let geoJson = {
            type: 'FeatureCollection',
            features: jsonFeatures
        };
  
        res.status(200).json(geoJson);
      });
    
  });

app.get('/api_wf', (req, res) => {

    const sql = "SELECT *,st_asgeojson(geom) as geojson FROM hotpot WHERE ct_en = 'Thailand'";
   
    let jsonFeatures = [];
    db.query(sql).then((data) => {
        var rows = data.rows;

        rows.forEach((e) => {
            let feature = {
                type: 'Feature',
                geometry: JSON.parse(e.geojson),
                properties: e
            };
            jsonFeatures.push(feature);
        
        });
        let geoJson = {
            type: 'FeatureCollection',
            features: jsonFeatures
        };

        res.status(200).json(geoJson);

    })




});

app.get("/api/hotpot/:id", (req, res) => {
    const id = req.params.id;
    //console.log(id)
      const sql = {
        text:  "SELECT *,st_asgeojson(geom) as geojson FROM hotpot where id = " +
        id +";"  
      };
      //console.log(province)
      let jsonFeatures = [];
  
      db.query(sql).then((data) => {
        var rows = data.rows;
  
        rows.forEach((e) => {
          let feature = {
            type: "Feature",
            geometry: JSON.parse(e.geojson),
            properties: e,
          };
  
          jsonFeatures.push(feature);
        });
  
        let geoJson = {
            type: 'FeatureCollection',
            features: jsonFeatures
        };
  
        res.status(200).json(geoJson);
      });
    
  });

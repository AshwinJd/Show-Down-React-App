var fs = require('fs');
var file = 'data.json';


fs.readFile('movie_metadata.csv','utf8', function (err, file) {
  if (err) throw err;
  var st = String(file);
  var lines = st.split("\n");

  var count = lines.length;
  var row=[];

  var list = lines.map(function(item){
    return row.push(item.split(","));
  });


  app(row);
  console.log(data);
  fs.writeFile('data.json',JSON.stringify(data) , (err) => {
        if (err) throw err;
        console.log('The File has been written.');
        });
});
var data = [];



function addEntry(a,b,c,d,e){

  data.push({
  movie_name: a,
  movie_duration: b,
  movie_genre: c,
  movie_likes: d,
  movie_year: e
  });

}

function app(row){
  var count = row.length;
  //var min = 0;


  for(var i = 1;i<count-1; i++){
    // console.log(row[i][11]+row[i][3]+row[i][9]+row[i][27]);
    addEntry(row[i][11],row[i][3],row[i][9].split('|'),row[i][27].replace(/\r/,""),row[i][23]);



  }
  }

  exports.data = data;

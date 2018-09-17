var axios = require('axios');
var fs = require('fs');

var file = fs.createWriteStream("file3.png");
var request = () => {
    
        return   axios({
                    method: 'GET',
                    url: 'https://s2.coinmarketcap.com/static/img/coins/32x32/1.png',
                    responseType: 'stream'
                })
                .then((response) => {
                    // console.log(response)
                    response.data.pipe(file);
                })
                .catch((err) => {
                    console.log(err);

                })


            }

request()
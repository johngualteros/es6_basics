import request from "request";

let coins = [];

request('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false', {json:true}, (err, response, body)=>{
    coins = response.body;
    console.log(coins);
});


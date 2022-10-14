import fetch from 'node-fetch';

let coinsAsync = [];
let coinsPromises = [];

const getDataAsync = async () => {
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`);
    const data = await response.json();
    coinsAsync = data;
    console.log(coinsAsync);
}

getDataAsync();

const getDataPromises = () => {
    fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
    .then(response => response.json())
    .then(data => {
        coinsPromises = data;
        console.log(coinsPromises);
    })
}

getDataPromises();
import axios from 'axios';

let coins = [];
let coinsAsync = [];
const getDataWithAxios = () => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(response=>{
        coins = response;
        console.log(coins);
    });
}

getDataWithAxios();

async function getCoins() {
    try {
      const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
      coinsAsync = response;
      console.log(coinsAsync);
    } catch (error) {
      console.error(error);
    }
}

getCoins();
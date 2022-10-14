let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const endpoint = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
function success(response) {
    console.log(JSON.parse(response));
}
function failed(status) {
    console.log(status);
}
function get_data(endpoint, success, failed) {
    // create object http
    let http = new XMLHttpRequest();
    // open connection
    http.open('GET', endpoint);
    // send request
    http.send();

    http.onload = () => {
        if(http.status === 200){
            success(http.responseText);
        }else{
            failed(http.status)
        }
    }

}

get_data(endpoint, success, failed);
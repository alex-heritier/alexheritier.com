async function getTicker(ticker) {
  const apiKey = "AKFVFZ0AER784PAGA34X";
  const secretKey = "pgsXZMUrKsdc3E6MS2MTBTtPgERsfoqTuGk1OXeC";

  console.log(apiKey, secretKey);

  const url = 'https://data.alpaca.markets';
  const options = {
    method: 'GET',
    headers: {
      "APCA-API-KEY-ID": apiKey,
      "APCA-API-SECRET-KEY": secretKey,
    },
  };

  fetch(url + `/v2/stocks/${ticker}/trades/latest`, options)
    .then( res => res.json() )
    .then( data => console.log(data) );
}

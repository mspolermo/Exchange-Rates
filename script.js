async function getCurrencies (){
  try {
    const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
    const  data = await response.json();

    const usdRate = data.Valute.USD.Value.toFixed(2);
    const eurRate = data.Valute.EUR.Value.toFixed(2);

    const usdElement=document.querySelector('#usd');
    const eurElement=document.querySelector('#eur');

    usdElement.innerText=usdRate;
    eurElement.innerText=eurRate;

  }catch{
console.log('Сервер не отвечает(')
  }
};

getCurrencies ();

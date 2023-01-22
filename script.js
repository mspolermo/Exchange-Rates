async function getCurrencies (){
  try {
    const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
    const  data = await response.json();

    let leftRate = data.Valute.USD.Value.toFixed(2);
    if (leftCurency.innerText === GBP.innerText) {
      leftRate = data.Valute.GBP.Value.toFixed(2);
    }else if (leftCurency.innerText === KZT.innerText) {
      leftRate = data.Valute.KZT.Value.toFixed(2);
    }else if (leftCurency.innerText === CNY.innerText) {
      leftRate = data.Valute.CNY.Value.toFixed(2);
    }else if (leftCurency.innerText === GEL.innerText) {
      leftRate = data.Valute.GEL.Value.toFixed(2);
    }

    const eurRate = data.Valute.EUR.Value.toFixed(2);

    const leftElement=document.querySelector('#usd');
    const eurElement=document.querySelector('#eur');

    leftElement.innerText=leftRate;
    eurElement.innerText=eurRate;

  }catch{
console.log('Сервер не отвечает(')
  }
};

getCurrencies ();



const leftCurency= document.querySelector("#currency-info-left");
const leftContainer = document.querySelector("#currency-container1");
const USD = document.querySelector("#USD");
const GBP = document.querySelector("#GBP");
const KZT = document.querySelector("#KZT");
const CNY = document.querySelector("#CNY");
const GEL = document.querySelector("#GEL");

leftCurency.addEventListener('click', function() {
    leftContainer.classList.remove('none')
});
USD.addEventListener('click', function(){
  leftContainer.classList.add('none')
  leftCurency.innerText = USD.innerText;
  getCurrencies ();
});
GBP.addEventListener('click', function(){
  leftContainer.classList.add('none')
  leftCurency.innerText = GBP.innerText;
  getCurrencies ();
});
KZT.addEventListener('click', function(){
  leftContainer.classList.add('none')
  leftCurency.innerText = KZT.innerText;
  getCurrencies ();
});
CNY.addEventListener('click', function(){
  leftContainer.classList.add('none')
  leftCurency.innerText = CNY.innerText;
  getCurrencies ();
});
GEL.addEventListener('click', function(){
  leftContainer.classList.add('none')
  leftCurency.innerText = GEL.innerText;
  getCurrencies ();
});


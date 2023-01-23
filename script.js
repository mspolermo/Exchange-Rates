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
    };

    let rightRate = data.Valute.EUR.Value.toFixed(2);
    if (rightCurency.innerText === PLN.innerText) {
      rightRate = data.Valute.PLN.Value.toFixed(2);
    }else if (rightCurency.innerText === INR.innerText) {
      rightRate = data.Valute.INR.Value.toFixed(2);
    }else if (rightCurency.innerText === TRY.innerText) {
      rightRate = data.Valute.TRY.Value.toFixed(2);
    }else if (rightCurency.innerText === KRW.innerText) {
      rightRate = data.Valute.KRW.Value.toFixed(2);
    };

    const leftElement=document.querySelector('#usd');
    const rightElement=document.querySelector('#eur');

    leftElement.innerText=leftRate;
    rightElement.innerText=rightRate;

  }catch{
console.log('Сервер не отвечает(')
  }
};


getCurrencies ();

const leftCurency= document.querySelector("#currency-info-left");
const leftContainer = document.querySelector("#currency-container-left");
const USD = document.querySelector("#USD");
const GBP = document.querySelector("#GBP");
const KZT = document.querySelector("#KZT");
const CNY = document.querySelector("#CNY");
const GEL = document.querySelector("#GEL");

function hideChangeTableLeft() {
  leftContainer.classList.add('none');
};

leftCurency.addEventListener('click', function(){
  leftContainer.classList.remove('none');
});

USD.addEventListener('click', function(){
  hideChangeTableLeft();
  leftCurency.innerText = USD.innerText;
  getCurrencies ();
});
GBP.addEventListener('click', function(){
  hideChangeTableLeft();
  leftCurency.innerText = GBP.innerText;
  getCurrencies ();
});
KZT.addEventListener('click', function(){
  hideChangeTableLeft();
  leftCurency.innerText = KZT.innerText;
  getCurrencies ();
});
CNY.addEventListener('click', function(){
  hideChangeTableLeft();
  leftCurency.innerText = CNY.innerText;
  getCurrencies ();
});
GEL.addEventListener('click', function(){
  hideChangeTableLeft();
  leftCurency.innerText = GEL.innerText;
  getCurrencies ();
});



const rightCurency= document.querySelector("#currency-info-right");
const rightContainer = document.querySelector("#currency-container-right");
const EUR = document.querySelector("#EUR");
const PLN = document.querySelector("#PLN");
const INR = document.querySelector("#INR");
const TRY = document.querySelector("#TRY");
const KRW = document.querySelector("#KRW");

function hideChangeTableRight() {
  rightContainer.classList.add('none');
};

rightCurency.addEventListener('click', function(){
  rightContainer.classList.remove('none');
});

EUR.addEventListener('click', function(){
  hideChangeTableRight();
  rightCurency.innerText = EUR.innerText;
  getCurrencies ();
});
PLN.addEventListener('click', function(){
  hideChangeTableRight();
  rightCurency.innerText = PLN.innerText;
  getCurrencies ();
});
INR.addEventListener('click', function(){
  hideChangeTableRight();
  rightCurency.innerText = INR.innerText;
  getCurrencies ();
});
TRY.addEventListener('click', function(){
  hideChangeTableRight();
  rightCurency.innerText = TRY.innerText;
  getCurrencies ();
});
KRW.addEventListener('click', function(){
  hideChangeTableRight();
  rightCurency.innerText = KRW.innerText;
  getCurrencies ();
});

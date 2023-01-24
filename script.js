async function getCurrencies (){
  try {
    const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
    const  data = await response.json();

    let leftRate = (data.Valute.USD.Value/data.Valute.USD.Nominal).toFixed(2);
    if (leftCurency.innerText === EUR.innerText) {
      leftRate = (data.Valute.EUR.Value/data.Valute.EUR.Nominal).toFixed(2);
    }else if (leftCurency.innerText === GBP.innerText) {
      leftRate = (data.Valute.GBP.Value/data.Valute.GBP.Nominal).toFixed(2);
    }else if (leftCurency.innerText === PLN.innerText) {
      leftRate = (data.Valute.PLN.Value/data.Valute.PLN.Nominal).toFixed(2);
    }else if (leftCurency.innerText === GEL.innerText) {
      leftRate = (data.Valute.GEL.Value/data.Valute.GEL.Nominal).toFixed(2);
    };

    let rightRate = (data.Valute.CNY.Value/data.Valute.CNY.Nominal).toFixed(2);
    if (rightCurency.innerText === INR.innerText) {
      rightRate = (data.Valute.INR.Value/data.Valute.INR.Nominal).toFixed(2);
    }else if (rightCurency.innerText === KRW.innerText) {
      rightRate = (data.Valute.KRW.Value/data.Valute.KRW.Nominal).toFixed(2);
    }else if (rightCurency.innerText === TRY.innerText) {
      rightRate = (data.Valute.TRY.Value/data.Valute.TRY.Nominal).toFixed(2);
    }else if (rightCurency.innerText === KZT.innerText) {
      rightRate = (data.Valute.KZT.Value/data.Valute.KZT.Nominal).toFixed(2);
    };

    const leftElement=document.querySelector('#currency-value-left');
    const rightElement=document.querySelector('#currency-value-right');

    leftElement.innerText=leftRate;
    rightElement.innerText=rightRate;

  }catch{
console.log('Сервер не отвечает(')
  }
};

getCurrencies ();

const leftCurency= document.querySelector("#currency-info-left");
const leftContainer = document.querySelector("#currency-container-left");
// const USD = document.querySelector("#USD");
// const EUR = document.querySelector("#EUR");
// const GBP = document.querySelector("#GBP");
// const PLN = document.querySelector("#PLN");
// const GEL = document.querySelector("#GEL");

leftCurency.addEventListener('click', function(){
  leftContainer.classList.remove('none');
});

function currencyClick (currency, container) {
  currency.addEventListener('click', function(){
    if (container == 'left') {
    leftContainer.classList.add('none');
    leftCurency.innerText = currency.innerText;
    getCurrencies ();
  }else if(container == 'right') {
    rightContainer.classList.add('none');
    rightCurency.innerText = currency.innerText;
    getCurrencies ();
  }
  ;
});
}

currencyClick(USD, 'left');
currencyClick(EUR, 'left');
currencyClick(GBP, 'left');
currencyClick(PLN, 'left');
currencyClick(GEL, 'left');


const rightCurency= document.querySelector("#currency-info-right");
const rightContainer = document.querySelector("#currency-container-right");

rightCurency.addEventListener('click', function(){
  rightContainer.classList.remove('none');
});

currencyClick(CNY, 'right');
currencyClick(INR, 'right');
currencyClick(KRW, 'right');
currencyClick(TRY, 'right');
currencyClick(KZT, 'right');

// EUR.addEventListener('mouseover', function(){
//   document.querySelector('#EUR').innerText = ('EUR');
// });
// EUR.addEventListener('mouseleave', function(){
//   document.querySelector('#EUR').innerText = ('€');
// });








// const CNY = document.querySelector("#CNY");
// const INR = document.querySelector("#INR");
// const KRW = document.querySelector("#KRW");
// const TRY = document.querySelector("#TRY");
// const KZT = document.querySelector("#KZT");








// CNY.addEventListener('click', function(){
//   hideChangeTableRight();
//   rightCurency.innerText = CNY.innerText;
//   getCurrencies ();
// });
// INR.addEventListener('click', function(){
//   hideChangeTableRight();
//   rightCurency.innerText = INR.innerText;
//   getCurrencies ();
// });
// KRW.addEventListener('click', function(){
//   hideChangeTableRight();
//   rightCurency.innerText = KRW.innerText;
//   getCurrencies ();
// });
// TRY.addEventListener('click', function(){
//   hideChangeTableRight();
//   rightCurency.innerText = TRY.innerText;
//   getCurrencies ();
// });
// KZT.addEventListener('click', function(){
//   hideChangeTableRight();
//   rightCurency.innerText = KZT.innerText;
//   getCurrencies ();
// });
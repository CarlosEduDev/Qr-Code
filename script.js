const container = document.querySelector('.container'),
qrinput = container.querySelector('.form input'),
generateBtn = container.querySelector('.form button'),
qrImg = container.querySelector('.qr-code .img');

generateBtn.addEventListener('click', () => {
   let qrValue = qrinput.value;
   if(!qrValue){
      alert('insira url ou texto para gerar Qr Code!');
      return;
   }
   generateBtn.innerText = "Gerando Qr Code..."
   qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=%24`

   qrImg.addEventListener('load', ()=> {
      generateBtn.innerText = "Gerar Qr Code"
      container.classList.add('active')
   })
})

qrinput.addEventListener('keyup', () => {
   if(!qrinput.value){
      container.classList.remove('active');
   }
})

const ApagarQrCode = document.querySelector('#apagarQrCode');

ApagarQrCode.addEventListener('click',() => {
   qrImg.src = '';
   
} )
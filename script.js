const container=document.querySelector('.container');

container.setAttribute('style','height:960px;width:960px');


function createDivs(n=16){
    const size=960/n;
    const divsCount=n*n;
    let a=0;
    for(let i =0;i<divsCount;i++){
        const div=document.createElement('div');
        div.classList.add('item');
        div.setAttribute('style',`height:${size}px;width:${size}px`);
        container.appendChild(div);
        div.addEventListener('mouseover',()=>{
            div.style.backgroundColor=getRandomRgb();
            div.style.opacity=a;
            a = a+0.1;
        });
    }
}

function getRandomRgb() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }
  


function buttonPopup(){
    const button=document.querySelector('.popup');
    button.addEventListener('click', ()=>{
        let n = prompt("enter a number of divs");
        if(n<=100){
            container.textContent='';
            createDivs(n);
        }
        else{
            alert("max divs are 100");
        }
    });

}


createDivs();
buttonPopup();

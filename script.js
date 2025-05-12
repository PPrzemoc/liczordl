var wygrane=0;
var now =1;
var kodpowstaly= new Set();
var kodpodany=[];
while (kodpowstaly.size < 5) {
    kodpowstaly.add(Math.floor(Math.random() * 10));
}
var kod=Array.from(kodpowstaly);
console.log(kod);
function kliknijnumer(numer) {
    if (now != 6 && now != 12 && now != 18 && now != 24 && now != 30) {
        let wczytobrazek= "grafika/liczba"+numer+".jpg";
        document.getElementById("l" + now).innerHTML = '<img src='+'"'+wczytobrazek+'"'+' width="50" height="50">';
        kodpodany.push(numer);
        now++;
    }
}
function onload()
{
document.getElementById("wygrane").innerHTML=wygrane+" wygranych";
}
document.addEventListener('keydown', function(event) {

    if (event.key === '1' || event.key === '2' || event.key === '3' || event.key === '4' ||
        event.key === '5' || event.key === '6' || event.key === '7' || event.key === '8' ||
        event.key === '9' || event.key === '0') {
            kliknijnumer(event.key);
    }
    if (event.keyCode === 8) {
        klius();
    }
    if (event.key === 'Enter') {
        klient();
    }
});

function klius()
{
    if(document.getElementById("l"+(now-1))==null) return;
    document.getElementById("l"+(now-1)).innerHTML=" ";
    now--;
    kodpodany.pop();
}
function spr(sprawdzanie)
{
   
    let licznik=0;
    console.log(sprawdzanie);
        for(let i =0;i<5;i++)
        {
            let  div = document.getElementById("l"+(i+sprawdzanie+1));
            if(kod[i]==kodpodany[i])
            {
                div.className='letter_good';
                licznik++;
            }
            else
            {
                
                for (let p = 0; p < 5; p++) {
                        if(kod[p]==kodpodany[i])
                        { 
                            div.className='letter_elsewhere';
                            break;
                        }       
                        else if(p==4)
                        {
                            div.className='letter_bad'; 
                        }}}
        }
        if(licznik==5)
            {
                setTimeout(()=>{
                alert("Gratulacje zgadłeś");
                alert("Wczytawanie kolejnej gry");
                now=1;
                kodpowstaly= new Set(); 
                kodpodany=[];
                while (kodpowstaly.size < 5) {
                    kodpowstaly.add(Math.floor(Math.random() * 10));
                } 
                document.getElementById("haslo").innerHTML=`<div id="haslo">
       <div class="row">
        <div class="letter" id="l1"></div>
        <div class="letter" id="l2"></div> 
        <div class="letter" id="l3"></div>
        <div class="letter" id="l4"></div>
        <div class="letter" id="l5"></div>

    </div>
    <div class="row">
        <div class="letter" id="l7"></div>
        <div class="letter" id="l8"></div> 
        <div class="letter" id="l9"></div>
        <div class="letter" id="l10"></div>
        <div class="letter" id="l11"></div>

    </div>
    <div class="row">
        <div class="letter" id="l13"></div>
        <div class="letter" id="l14"></div> 
        <div class="letter" id="l15"></div>
        <div class="letter" id="l16"></div>
        <div class="letter" id="l17"></div>

    </div>
    <div class="row">
        <div class="letter" id="l19"></div>
        <div class="letter" id="l20"></div> 
        <div class="letter" id="l21"></div>
        <div class="letter" id="l22"></div>
        <div class="letter" id="l23"></div>

    </div>
    <div class="row">
        <div class="letter" id="l25"></div>
        <div class="letter" id="l26"></div> 
        <div class="letter" id="l27"></div>
        <div class="letter" id="l28"></div>
        <div class="letter" id="l29"></div>

    </div> `;
                
                kod=Array.from(kodpowstaly);
                wygrane+=1;
                document.getElementById("wygrane").innerHTML=wygrane+"Wygrałeś ";
                console.log(kod);  
            },1000);
            
            }
        else if(now==30)
            {
            alert("Przegrałeś. Kod to "+ kod[0]+" "+ kod[1]+" "+ kod[2]+" "+ kod[3]+" "+ kod[4]);
            alert("Wczytawanie kolejnej gry");
            setTimeout(()=>{
                alert("Gratulacje zgadłeś");
                alert("Wczytawanie kolejnej gry");
                now=1;
                kodpowstaly= new Set();
                kodpodany=[];
                while (kodpowstaly.size < 5) {
                    kodpowstaly.add(Math.floor(Math.random() * 10));
                }
                kod=Array.from(kodpowstaly);
                
                console.log(kod);
                for(i=1;i<30;i++)           
                {
                    document.getElementById("l"+i).innerText=" ";
                    let  div = document.getElementById("l"+i);
                    div.className="letter";
                }                
            },1000)
            }
            
            kodpodany.length = 0;
         console.log(kodpodany);   
         now++;
        
}

function klient()
{    
switch(now){
    case 6:
    spr(0);break;
    case 12:
        spr(6);break; 
    case 18:
        spr(12);break;
    case 24:
        spr(18);
        break;
    case 30:
     spr(24);
     break;
    }}

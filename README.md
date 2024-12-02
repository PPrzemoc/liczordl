var kodpowstaly= new Set();
var now=1; 
let kodpodany=[];
while (kodpowstaly.size < 5) {
    kodpowstaly.add(Math.floor(Math.random() * 10));
}
var kod=Array.from(kodpowstaly);

console.log(kod);
function kliknijnumer(numer) {
    if (now != 6 && now != 12 && now != 18 && now != 24 && now != 230) {
        let wczytobrazek= "grafika/liczba"+numer+".jpg";
        document.getElementById("l" + now).innerHTML = '<img src='+'"'+wczytobrazek+'"'+' width="50" height="50">';
        kodpodany.push(numer);
        now++;
    }
}



function klius()
{
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
                alert("Gratulacje zgadłeś");
                alert("Wczytawanie kolejnej gry");
                location.reload();
            }
            kodpodany.length = 0;
         console.log(kodpodany);   
         now++;
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

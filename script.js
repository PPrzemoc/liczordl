var kod= new Set();
var now=1;
while (kod.size < 5) {
    kod.add(Math.floor(Math.random() * 10));
}
console.log(kod);
function kliknijnumer(numer) {
    if (now != 6 && now != 12 && now != 18 && now != 24 && now != 230) {
        document.getElementById("l" + now).innerHTML = numer;
        now++;
    }
}

function klius()
{
    if(now!=6&&now!=12&&now!=18&&now!=24&&now!=230)
 {   document.getElementById("l"+(now-1)).innerHTML=" ";
    now--;}
}
function spr(sprawdzanie)
{
    let kodpodany=[];
    let licznik=0;
    for(let i=0;i<5;i++)
        {
            let  div = document.getElementById("l"+(i+sprawdzanie+1));
            console.log(div);
            kodpodany[i]=div.textContent;
        }
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

const dayEl=document.getElementById("day");
const hoursEl=document.getElementById("hour");
const minutesEl=document.getElementById("minute");
const secEl=document.getElementById("second");
const newyeartime=new Date("Jan 1,2024 00:00:00").getTime();

updateCountdown();

function updateCountdown(){
    const now=new Date().getTime();
    const gap=newyeartime-now;

    const seconds=1000;
    const minutes=seconds*60;
    const hours=minutes*60;
    const day=hours*24;

    const d=Math.floor(gap/day);
    const h=Math.floor((gap%day)/hours);
    const m=Math.floor((gap%hours)/minutes);
    const s=Math.floor((gap%minutes)/seconds);

    dayEl.innerHTML=d;
    hoursEl.innerHTML=h;
    minutesEl.innerHTML=m;
    secEl.innerHTML=s;
    setTimeout(updateCountdown,1000);

}

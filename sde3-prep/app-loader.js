(async()=>{
  try {
    const res=await fetch('./sde3-prep/app-fixed.js?v=6',{cache:'no-store'});
    if(!res.ok) throw new Error('Could not load study-plan engine: '+res.status);
    let src=await res.text();
    const oldWeek="function currentWeek(){return weeks[0];}";
    const newWeek=`function currentWeek(){
      const params=new URLSearchParams(location.search);
      const forced=Number(params.get('week'));
      if(Number.isFinite(forced)&&forced>=1&&forced<=weeks.length) return weeks[forced-1];
      const start=new Date('2026-08-17T00:00:00+05:30');
      const now=new Date();
      const idx=Math.max(0,Math.min(weeks.length-1,Math.floor((now-start)/(7*24*60*60*1000))));
      return weeks[idx]||weeks[0];
    }`;
    if(!src.includes(oldWeek)) throw new Error('Study-plan version mismatch: currentWeek hook not found');
    src=src.replace(oldWeek,newWeek);
    src=src.replace("'+currentDay()+' · Week 1</span>'","'+currentDay()+' · Week '+currentWeek().n+'</span>'");
    const script=document.createElement('script');
    script.text=src;
    document.head.appendChild(script);
  } catch(err){
    const view=document.getElementById('view');
    if(view) view.innerHTML='<div class="error"><h2>Study plan failed to load</h2><p>'+String(err.message||err)+'</p><p>Try a hard refresh once. If it still fails, the page will show the exact error instead of silently hanging.</p><button onclick="location.reload()">Reload</button></div>';
  }
})();

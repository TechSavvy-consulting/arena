'use strict';

const worlds = [
  {name:'Foundry Complex', boss:'Foundry Warden', text:'Machine bays, linked yards and steel catwalks. Your introduction to the Kyleverse is anything but gentle.'},
  {name:'Flooded Transit', boss:'Transit Dredger', text:'Flooded train halls, maintenance loops and connected platforms. Cross the shallow water; steer clear of marked electrical danger.'},
  {name:'Mutation Laboratory', boss:'Tentacle Matriarch', text:'Linked containment rooms, lab wings and observation decks. The specimens have faces. And mounted weapons. And tentacles.'},
  {name:'Flooded Research Complex', boss:'Drowned Colossus', text:'A flooded research building with room-to-room routes, upper walkways and a central water hall. Something very large is waiting inside.'},
  {name:'Sky Docks', boss:'Sky Carrier', text:'Cargo terraces, hangar lanes and rooftop bridges. Watch your flanks, then look up: the flying Kyles have arrived.'},
  {name:'Alien Reactor Fortress', boss:'Kyle Abomination', text:'The largest battlefield: layered machinery, flanking corridors and the final boss court. Break its weapons, expose the core and finish the campaign.'}
];
const enemies = [
  ['Mini Rusher','mini','Small body. Big hurry.'],['Roller','roller','A tire with an attitude.'],['Spider','spider','Too many legs. Same Kyle.'],['Drone','drone','Trouble from above.'],['Shooter','shooter','Armed and familiar.'],['Sniper','sniper','Watch the firing lane.'],['Grenadier','grenadier','Move off marked ground.'],['Heavy','heavy','Break armor. Break guns.'],['Squid','squid','Sever the tentacles.'],['Artillery','artillery','Walking ground pressure.'],['Stalker','stalker','Fast claws. Faster decisions.'],['Behemoth','behemoth','A very large bad idea.']
];
const champions = [
  ['Foundry Enforcer',3,'Wave 03 · armored heavy'],['Transit Sentinel',8,'Wave 08 · siege walker'],['Lab Ravager',13,'Wave 13 · monster brute'],['Research Executioner',18,'Wave 18 · monster brute'],['Sky Marshal',23,'Wave 23 · siege walker'],['Reactor Warlord',28,'Wave 28 · armored heavy']
];
const $ = (query) => document.querySelector(query);
const dialog = $('#media-dialog');
const dialogImage = $('#dialog-image');
const dialogVideo = $('#dialog-video');
let posterPage = 0;

function openImage(src, caption, poster = false) {
  dialogVideo.pause(); dialogVideo.hidden = true;
  dialogImage.src = src; dialogImage.alt = caption; dialogImage.hidden = false;
  $('#media-caption').textContent = caption;
  $('.poster-nav').hidden = !poster;
  if (!dialog.open) dialog.showModal();
  $('#dialog-close').focus();
}
function closeMedia() { dialogVideo.pause(); dialog.close(); }
dialog.addEventListener('cancel', () => dialogVideo.pause());
// Native dialog close already restores focus synchronously. Re-focusing in its
// queued close event could steal focus from the visitor's next keyboard action.
dialog.addEventListener('close', () => dialogVideo.pause());
$('#dialog-close').addEventListener('click', closeMedia);
dialog.addEventListener('click', (event) => { if (event.target === dialog) { const r=dialog.getBoundingClientRect(); if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom) closeMedia(); } });
document.querySelectorAll('[data-image]').forEach(button => button.addEventListener('click', () => openImage(button.dataset.image, button.dataset.caption)));
document.querySelectorAll('[data-video]').forEach(button => button.addEventListener('click', () => {
  dialogImage.hidden = true; dialogVideo.hidden = false; $('.poster-nav').hidden = true;
  $('#media-caption').textContent = 'TechSavvy Arena v0.11 — new-build in-engine showcase';
  dialog.showModal(); dialogVideo.play().catch(() => {}); $('#dialog-close').focus();
}));
function openPoster(page) {
  posterPage = page;
  openImage(`assets/poster-${page}.webp`, page === 0 ? 'The Kyle enemy cast — illustrated cast poster, also in Pause → Characters.' : 'Guardians & champions — illustrated cast poster, also in Pause → Characters.', true);
  $('#poster-prev').disabled = page === 0; $('#poster-next').disabled = page === 1;
}
$('#poster-button').addEventListener('click', () => openPoster(0));
$('#poster-prev').addEventListener('click', () => openPoster(0));
$('#poster-next').addEventListener('click', () => openPoster(1));

function wireTabs(list, select) {
  list.addEventListener('keydown', event => {
    const tabs = [...list.querySelectorAll('[role=tab]')]; const current = tabs.indexOf(document.activeElement);
    if (current < 0 || !['ArrowLeft','ArrowRight','Home','End'].includes(event.key)) return;
    event.preventDefault(); let index = current;
    if(event.key === 'Home') index=0; else if(event.key === 'End') index=tabs.length-1;
    else index=(current+(event.key === 'ArrowRight'?1:-1)+tabs.length)%tabs.length;
    tabs[index].focus(); select(tabs[index]);
  });
}
const worldTabs = $('#world-tabs');
worlds.forEach((world,index) => {
  const button = document.createElement('button'); button.id=`world-tab-${index}`; button.type='button';
  button.setAttribute('role','tab'); button.setAttribute('aria-selected',String(index===0)); button.setAttribute('aria-controls','world-panel'); button.tabIndex=index===0?0:-1;
  const number=document.createElement('span'); number.textContent=`0${index+1}`; button.append(number, document.createTextNode(world.name));
  button.addEventListener('click',()=>selectWorld(index)); worldTabs.append(button);
});
function selectWorld(index) {
  const world=worlds[index];
  [...worldTabs.children].forEach((tab,i)=>{tab.setAttribute('aria-selected',String(i===index));tab.tabIndex=i===index?0:-1;});
  $('#world-panel').setAttribute('aria-labelledby',`world-tab-${index}`);
  $('#world-image').src=`assets/map-${index}.webp`; $('#world-image').alt=`${world.name}, actual v0.11 in-engine screenshot`;
  $('#world-name').textContent=world.name; $('#world-description').textContent=world.text; $('#world-boss').textContent=world.boss;
  $('#world-wave').textContent=`WAVES ${String(index*5+1).padStart(2,'0')}—${String(index*5+5).padStart(2,'0')}`;
  $('#world-image-button').onclick=()=>openImage(`assets/map-${index}.webp`,`${world.name} — waves ${index*5+1}–${index*5+5}, captured from v0.11.`);
  $('#world-boss-button').onclick=()=>openImage(`assets/boss-${index}.webp`,`${world.boss} — the guardian of ${world.name}, rendered from the current game.`);
}
wireTabs(worldTabs,tab=>selectWorld([...worldTabs.children].indexOf(tab)));
selectWorld(0);

function selectCast(group) {
  document.querySelectorAll('[data-cast]').forEach(tab=>{const active=tab.dataset.cast===group;tab.setAttribute('aria-selected',String(active));tab.tabIndex=active?0:-1;});
  const panel=$('#cast-panel'); panel.setAttribute('aria-labelledby',`cast-tab-${group}`); panel.replaceChildren();
  const entries=group==='enemies'?enemies.map(([name,id,text])=>({name,text,src:`assets/enemy-${id}.webp`})):
    group==='bosses'?worlds.map((world,index)=>({name:world.boss,text:`Guardian · wave ${(index+1)*5}`,src:`assets/boss-${index}.webp`})):
      champions.map(([name,wave,text])=>({name,text,src:`assets/champion-${wave}.webp`}));
  entries.forEach(entry=>{const button=document.createElement('button');button.className='cast-card';button.type='button';button.setAttribute('aria-label',`View ${entry.name}`);
    const img=document.createElement('img');img.src=entry.src;img.alt=entry.name+' in v0.11';img.loading='lazy';img.width=1280;img.height=720;
    const label=document.createElement('span');const name=document.createElement('b');name.textContent=entry.name;const text=document.createElement('small');text.textContent=entry.text;label.append(name,text);button.append(img,label);
    button.addEventListener('click',()=>openImage(entry.src,`${entry.name} — ${entry.text} Current v0.11 game-model render.`));panel.append(button);
  });
}
document.querySelectorAll('[data-cast]').forEach(tab=>tab.addEventListener('click',()=>selectCast(tab.dataset.cast)));
wireTabs($('#cast-tabs'),tab=>selectCast(tab.dataset.cast));
selectCast('enemies');
$('#share-button').addEventListener('click',async()=>{
  const url='https://techsavvy-consulting.github.io/arena/';
  try { await navigator.clipboard.writeText(url); $('#share-status').textContent='Link copied. Send in the Kyles.'; }
  catch { $('#share-status').textContent=url; }
});

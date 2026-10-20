'use strict';

const worlds = [
  {name:'Foundry Complex', boss:'Foundry Warden', view:'Furnace Gallery', other:'Casting Machinery', text:'Receiving airlock, furnace gallery and casting machinery across two floors. Restore power, explore the workshop branch and push into the Smelter Chamber.'},
  {name:'Flooded Transit', boss:'Transit Dredger', view:'Flooded Platform', other:'Drain Pumps', text:'A two-floor transit facility with flooded platforms, drainage services and upper dispatch rooms. Restore the pumps and unlock the route to the Freight Terminus.'},
  {name:'Mutation Laboratory', boss:'Tentacle Matriarch', view:'Observation Room', other:'Isolation Laboratory', text:'Three floors of containment, genetics and observation rooms. Find the power and quarantine controls; the specimens have mounted weapons and tentacles.'},
  {name:'Flooded Research Complex', boss:'Drowned Colossus', view:'Wet Laboratory', other:'Water Treatment', text:'Wet laboratories, emergency pumps and upper analysis rooms across three floors. Follow the control route through the building to the Pressure Chamber.'},
  {name:'Sky Docks', boss:'Sky Carrier', view:'Open-air Sky Control', other:'Upper exterior walkway', text:'Cargo sorting, hangars and upper flight-control rooms connect to rooftop supply routes. Work through the three-floor dock complex and face the Carrier.'},
  {name:'Alien Reactor Fortress', boss:'Kyle Abomination', view:'Reactor Heart', other:'Energy Storage', text:'Three floors of coolant services, armories and core-isolation rooms. Release security, reach the Reactor Heart and dismantle the final Abomination.'}
];
const enemies = [
  ['Mini Rusher','mini','Small body. Big hurry.'],['Roller','roller','A tire with an attitude.'],['Spider','spider','Too many legs. Same Kyle.'],['Drone','drone','Trouble from above.'],['Shooter','shooter','Armed and familiar.'],['Heavy','heavy','Break armor. Break guns.'],['Artillery','artillery','Walking ground pressure.'],['Behemoth','behemoth','A very large bad idea.']
];
const champions = [
  ['Research Executioner',18,'Wave 18 · monster brute'],['Sky Marshal',23,'Wave 23 · siege walker'],['Reactor Warlord',28,'Wave 28 · armored heavy']
];
const $ = (query) => document.querySelector(query);
const dialog = $('#media-dialog');
const dialogImage = $('#dialog-image');
let posterPage = 0;

function openImage(src, caption, poster = false) {
  dialogImage.src = src; dialogImage.alt = caption; dialogImage.hidden = false;
  $('#media-caption').textContent = caption;
  $('.poster-nav').hidden = !poster;
  if (!dialog.open) dialog.showModal();
  $('#dialog-close').focus();
}
function closeMedia() { dialog.close(); }
// Native dialog close already restores focus synchronously. Re-focusing in its
// queued close event could steal focus from the visitor's next keyboard action.
$('#dialog-close').addEventListener('click', closeMedia);
dialog.addEventListener('click', (event) => { if (event.target === dialog) { const r=dialog.getBoundingClientRect(); if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom) closeMedia(); } });
document.querySelectorAll('[data-image]').forEach(button => button.addEventListener('click', () => openImage(button.dataset.image, button.dataset.caption)));
function openPoster(page) {
  posterPage = page;
  openImage(`assets/poster-${page}.webp`, page === 0 ? 'The Kyle enemy cast — illustrated cast poster, also in Pause → Characters.' : 'More Kyles — illustrated cast poster, also in Pause → Characters.', true);
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
  const number=document.createElement('span'); number.className='world-tab-number'; number.textContent=String(index+1).padStart(2,'0');
  const name=document.createElement('strong'); name.className='world-tab-name'; name.textContent=world.name;
  const hint=document.createElement('span'); hint.className='world-tab-hint'; hint.textContent='View arena ↗';
  button.append(number,name,hint);
  button.addEventListener('click',()=>selectWorld(index)); worldTabs.append(button);
});
function selectWorld(index) {
  const world=worlds[index];
  [...worldTabs.children].forEach((tab,i)=>{tab.setAttribute('aria-selected',String(i===index));tab.tabIndex=i===index?0:-1;});
  $('#world-panel').setAttribute('aria-labelledby',`world-tab-${index}`);
  $('#world-image').src=`assets/v21-showcase/arena-variety-${index}.webp`; $('#world-image').alt=`${world.view} in ${world.name}, with staged Kyle enemies in the actual v2.1.0 environment`;
  $('#world-location').textContent=world.view;
  $('#world-name').textContent=world.name; $('#world-description').textContent=world.text; $('#world-boss').textContent=world.boss;
  $('#world-wave').textContent=`ENCOUNTERS ${String(index*5+1).padStart(2,'0')}—${String(index*5+5).padStart(2,'0')}`;
  $('#world-image-button').onclick=()=>openImage(`assets/v21-showcase/arena-variety-${index}.webp`,`${world.name} — ${world.view}. Actual v2.1.0 environment with staged enemies.`);
  $('#world-boss-button').onclick=()=>openImage(`assets/v21-showcase/boss-${index}.webp`,`${world.boss} — actual v2.1.0 game model, studio lighting and no room background.`);
  $('#world-room-button').textContent=`Visit ${world.other} ↗`;
  $('#world-room-button').onclick=()=>openImage(`assets/v21-showcase/arena-alternate-${index}.webp`,`${world.name} — ${world.other}. Actual v2.1.0 environment with staged enemies.`);
}
wireTabs(worldTabs,tab=>selectWorld([...worldTabs.children].indexOf(tab)));
selectWorld(0);

function renderCast() {
  const panel=$('#cast-panel'); panel.replaceChildren();
  const entries=[
    ...enemies.map(([name,id,text])=>({name,text,src:`assets/v21-showcase/enemy-${id}.webp`})),
    ...worlds.map((world,index)=>({name:world.boss,text:`Encounter ${String((index+1)*5).padStart(2,'0')} · ${world.name}`,src:`assets/v21-showcase/boss-${index}.webp`})),
    ...champions.map(([name,wave,text])=>({name,text,src:`assets/v21-showcase/champion-${wave}.webp`}))
  ];
  entries.forEach(entry=>{const button=document.createElement('button');button.className='cast-card';button.type='button';button.setAttribute('aria-label',`View ${entry.name}`);
    const portrait=document.createElement('div');portrait.className='cast-portrait';
    const img=document.createElement('img');img.src=entry.src;img.alt=entry.name+' — background-free view of the v2.1.0 game model';img.loading='lazy';img.width=1200;img.height=1200;portrait.append(img);
    const label=document.createElement('span');const name=document.createElement('b');name.textContent=entry.name;const text=document.createElement('small');text.textContent=entry.text;label.append(name,text);button.append(portrait,label);
    button.addEventListener('click',()=>openImage(entry.src,`${entry.name} — ${entry.text} · Actual v2.1.0 game model, studio lighting and no room background.`));panel.append(button);
  });
}
renderCast();
$('#share-button').addEventListener('click',async()=>{
  const url='https://techsavvy-consulting.github.io/arena/';
  try { await navigator.clipboard.writeText(url); $('#share-status').textContent='Link copied. Send in the Kyles.'; }
  catch { $('#share-status').textContent=url; }
});

// A small, optional archive picker. The direct release links remain available
// when JavaScript is disabled or the catalog cannot load.
async function loadBuildHistory() {
  try {
    const response = await fetch('assets/build-history.json?v=20261020');
    if (!response.ok) throw new Error('Archive catalog unavailable');
    const catalog = await response.json();
    const builds = catalog.builds.filter(build =>
      typeof build.label === 'string' &&
      /^https:\/\/github\.com\/TechSavvy-consulting\/arena\/releases\/download\/(?:build-history|v[\d.]+)\/TechSavvy-Arena-[A-Za-z0-9.-]+\.zip$/.test(build.url) &&
      /^https:\/\/github\.com\/TechSavvy-consulting\/arena\/releases\/tag\/(?:build-history|v[\d.]+)$/.test(build.notes));
    if (!builds.length) throw new Error('No archived builds');
    const select = $('#history-version');
    const groups = [
      ['full_release', 'Previous full games'],
      ['preview', 'Short previews'],
      ['experimental', 'Unshipped experiments']
    ];
    groups.forEach(([kind, label]) => {
      const group = document.createElement('optgroup'); group.label = label;
      builds.forEach((build, index) => {
        if (build.kind !== kind) return;
        const option = document.createElement('option');
        option.value = String(index); option.textContent = build.label; group.append(option);
      });
      if (group.children.length) select.append(group);
    });
    const update = () => {
      const build = builds[Number(select.value)];
      if (!build) return;
      $('#history-description').textContent = build.description;
      $('#history-download').href = build.url;
      $('#history-download').textContent = `Download ${build.label} ↓`;
      $('#history-notes').href = build.notes;
      $('#history-size').textContent = `${Math.round(build.bytes / 1000000)} MB ZIP · Windows 64-bit · Older build`;
    };
    select.addEventListener('change', update);
    update();
    $('#history-picker').hidden = false;
  } catch {
    // No broken button or spinner: ordinary release links work independently.
  }
}
loadBuildHistory();

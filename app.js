'use strict';

const RELEASE_VERSION = '2.6.0';
const CAST_CAPTURE_VERSION = '2.5.0';
const MEDIA_ROOT = 'assets/v25';
const WORLD_MEDIA_ROOT = 'assets/v26-locations-lit-20261023';

const worlds = [
  {name:'Foundry Complex', boss:'Foundry Warden', view:'Foundry Casting Hall', other:'Maintenance Gallery', text:'A larger casting arena adds machinery, conveyor lanes and two stair routes to connected maintenance galleries. Work through the furnace rooms, then use cover and height against the Foundry Warden.'},
  {name:'Flooded Transit', boss:'Transit Dredger', view:'Transit Freight Hall', other:'Dispatch Gallery', text:'Freight equipment and platform lanes fill a larger terminus arena. Take either stair route to the dispatch gallery, circle above the cargo and face the Transit Dredger.'},
  {name:'Mutation Laboratory', boss:'Tentacle Matriarch', view:'Containment Arena', other:'Observation Gallery', text:'Containment equipment breaks up a spacious laboratory arena beneath connected observation galleries. Operate the quarantine controls, change floors and keep moving around the Matriarch’s tentacles.'},
  {name:'Flooded Research Complex', boss:'Drowned Colossus', view:'Water Treatment Hall', other:'Dry Service Gallery', text:'Treatment hardware and shallow water surround the larger pressure arena. Dry service galleries connect both stair approaches, giving you a second route around the Drowned Colossus.'},
  {name:'Sky Docks', boss:'Sky Carrier', view:'Cargo Handling Arena', other:'Logistics Deck', text:'A broad cargo arena opens beneath the sky, with containers, handling equipment and raised logistics decks. Climb either side, use the freight as cover and dodge the Carrier’s marked bomb runs.'},
  {name:'Alien Reactor Fortress', boss:'Kyle Abomination', view:'Reactor Combat Hall', other:'Upper Reactor Gallery', text:'Capacitor machinery, coolant fittings and connected upper galleries frame the enlarged final arena. Release security, choose a stair approach and dismantle the Abomination.'}
];
const enemies = [
  ['Mini Rusher','mini','Small body. Big hurry.'],['Roller','roller','A tire with an attitude.'],['Spider','spider','Eight legs. Same Kyle.'],['Drone','drone','Ducted fans. Trouble from above.'],['Shooter','shooter','Armed and familiar.'],['Sniper','sniper','Long coat. Longer sightline.'],['Grenadier','grenadier','Blast gear and bad intentions.'],['Heavy','heavy','Broad armor. Mounted firepower.'],['Squid','squid','A mantle full of tentacles.'],['Artillery','artillery','Hydraulic walking ground pressure.'],['Stalker','stalker','A fast, raptor-like hunter.'],['Behemoth','behemoth','A horned, heavily built brute.']
];
const champions = [
  ['Foundry Enforcer',3,'Wave 03 · forge-armored champion'],
  ['Transit Sentinel',8,'Wave 08 · hydraulic siege walker'],
  ['Lab Ravager',13,'Wave 13 · close-range breaching brute'],
  ['Research Executioner',18,'Wave 18 · scythe-armed bone brute'],
  ['Sky Marshal',23,'Wave 23 · mortar tripod'],
  ['Reactor Warlord',28,'Wave 28 · reactor-armored gunner']
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
  $('#world-image').src=`${WORLD_MEDIA_ROOT}/arena-${index}.webp`; $('#world-image').alt=`${world.view} in ${world.name}, native v${RELEASE_VERSION} scene with Kyle enemies staged and lit for the website`;
  $('#world-location').textContent=world.view;
  $('#world-name').textContent=world.name; $('#world-description').textContent=world.text; $('#world-boss').textContent=world.boss;
  $('#world-wave').textContent=`ENCOUNTERS ${String(index*5+1).padStart(2,'0')}—${String(index*5+5).padStart(2,'0')}`;
  $('#world-image-button').onclick=()=>openImage(`${WORLD_MEDIA_ROOT}/arena-${index}.webp`,`${world.name} — ${world.view}. Native v${RELEASE_VERSION} scene, staged and lit for the website.`);
  $('#world-boss-button').onclick=()=>openImage(`${MEDIA_ROOT}/boss-${index}.webp`,`${world.boss} — v${CAST_CAPTURE_VERSION} studio portrait of the model retained in v${RELEASE_VERSION}; no room background.`);
  $('#world-room-button').textContent=`Visit ${world.other} ↗`;
  $('#world-room-button').onclick=()=>openImage(`${WORLD_MEDIA_ROOT}/arena-${index}-alt.webp`,`${world.name} — ${world.other}. Native v${RELEASE_VERSION} scene, staged and lit for the website.`);
}
wireTabs(worldTabs,tab=>selectWorld([...worldTabs.children].indexOf(tab)));
selectWorld(0);

function renderCast() {
  const panel=$('#cast-panel'); panel.replaceChildren();
  const entries=[
    ...enemies.map(([name,id,text])=>({name,text,src:`${MEDIA_ROOT}/enemy-${id}.webp`})),
    ...worlds.map((world,index)=>({name:world.boss,text:`Encounter ${String((index+1)*5).padStart(2,'0')} · ${world.name}`,src:`${MEDIA_ROOT}/boss-${index}.webp`})),
    ...champions.map(([name,wave,text])=>({name,text,src:`${MEDIA_ROOT}/champion-${wave}.webp`}))
  ];
  entries.forEach(entry=>{const button=document.createElement('button');button.className='cast-card';button.type='button';button.setAttribute('aria-label',`View ${entry.name}`);
    const portrait=document.createElement('div');portrait.className='cast-portrait';
    const img=document.createElement('img');img.src=entry.src;img.alt=entry.name+` — v${CAST_CAPTURE_VERSION} studio portrait; character retained in v${RELEASE_VERSION}`;img.loading='lazy';img.width=1280;img.height=1280;portrait.append(img);
    const label=document.createElement('span');const name=document.createElement('b');name.textContent=entry.name;const text=document.createElement('small');text.textContent=entry.text;label.append(name,text);button.append(portrait,label);
    button.addEventListener('click',()=>openImage(entry.src,`${entry.name} — ${entry.text} · v${CAST_CAPTURE_VERSION} studio portrait of the model retained in v${RELEASE_VERSION}; no room background.`));panel.append(button);
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
    const response = await fetch('assets/build-history.json?v=20261023-v26');
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

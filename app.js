// ===== Site logic: filters, cart, WhatsApp checkout & B2B inquiry =====

const catGrid = document.getElementById('catGrid');
catGrid.innerHTML = `<button class="cat active" style="--cc:var(--navy)" onclick="setCat('all',this)"><b>Everything</b><span>${P.length} products</span></button>` +
 CATS.map(c=>`<button class="cat" style="--cc:${c.c}" onclick="setCat('${c.id}',this)"><b>${c.name}</b><span>${c.note}</span></button>`).join('');

function setCat(id,el){cat=id;document.querySelectorAll('.cat').forEach(x=>x.classList.remove('active'));el.classList.add('active');render();document.getElementById('shop').scrollIntoView({behavior:'smooth'});}
function setBrand(b,el){brand=b;document.querySelectorAll('.pill[data-b]').forEach(x=>x.classList.remove('on'));el.classList.add('on');render();}
function toggleOTC(){otcOnly=!otcOnly;document.getElementById('otcPill').classList.toggle('on',otcOnly);render();}
function catOf(id){return CATS.find(c=>c.id===id);}
function inr(n){return '₹'+n.toLocaleString('en-IN');}

function render(){
  const q=document.getElementById('q').value.trim().toLowerCase();
  const list=P.filter(p=>
    (brand==='all'||p.b===brand) &&
    (cat==='all'||p.cat===cat) &&
    (!otcOnly||!p.rx) &&
    (!q || (p.n+' '+p.comp+' '+catOf(p.cat).name).toLowerCase().includes(q))
  );
  document.getElementById('empty').style.display=list.length?'none':'block';
  document.getElementById('grid').innerHTML=list.map((p)=>{
    const c=catOf(p.cat), i=P.indexOf(p);
    return `<article class="pcard" style="--cc:${c.c}">
      <div class="pcap"></div>
      <div class="pbody">
        <div class="ptags">
          <span class="tag tag-cat">${c.name}</span>
          <span class="tag tag-brand">${p.b}</span>
          ${p.rx?'<span class="tag tag-rx">Rx</span>':'<span class="tag tag-otc">OTC</span>'}
        </div>
        <h3>${p.n}</h3>
        <p class="comp">${p.comp}</p>
        <p class="pack">Pack: ${p.pk}</p>
        <div class="prow">
          <span class="price">${inr(p.pr)}<small>MRP incl. taxes</small></span>
          <button class="add" onclick="add(${i})">Add</button>
        </div>
        ${p.rx?'<p class="rx-note">⚕ Prescription required — attach at checkout</p>':''}
      </div>
    </article>`;
  }).join('');
}

function add(i){cart[i]=(cart[i]||0)+1;syncBadge();toast(P[i].n+' added');renderCart();}
function chg(i,d){cart[i]+=d;if(cart[i]<=0)delete cart[i];syncBadge();renderCart();}
function syncBadge(){document.getElementById('cartCount').textContent=Object.values(cart).reduce((a,b)=>a+b,0);}
function toast(m){const t=document.getElementById('toast');t.textContent=m;t.classList.add('show');clearTimeout(t._h);t._h=setTimeout(()=>t.classList.remove('show'),1800);}

let rxFile=false;
function renderCart(){
  const body=document.getElementById('cartBody');
  const keys=Object.keys(cart);
  let total=0, hasRx=false;
  if(!keys.length){body.innerHTML='<p style="color:var(--mut);padding:30px 0;text-align:center">Your cart is empty.<br>Add products from the catalog to get started.</p>';}
  else{
    body.innerHTML=keys.map(i=>{
      const p=P[i],c=catOf(p.cat),line=p.pr*cart[i];total+=line;if(p.rx)hasRx=true;
      return `<div class="citem" style="--cc:${c.c}">
        <div class="cchip"></div>
        <div style="flex:1">
          <b>${p.n} ${p.rx?'<span class="tag tag-rx">Rx</span>':''}</b>
          <small>${p.b} · ${p.pk}</small>
          <div class="qty"><button onclick="chg(${i},-1)" aria-label="Decrease">−</button>${cart[i]}<button onclick="chg(${i},1)" aria-label="Increase">+</button></div>
          <button class="rm" onclick="chg(${i},-999)">Remove</button>
        </div>
        <div class="amt">${inr(line)}</div>
      </div>`;
    }).join('');
    if(hasRx){
      body.innerHTML+=`<div class="rx-upload">
        <b>⚕ Prescription required</b>
        Your cart contains Schedule H medicine(s). Attach a clear photo of a valid prescription — our pharmacist verifies it before dispatch.
        <input type="file" accept="image/*,.pdf" onchange="rxFile=!!this.files.length;document.getElementById('rxok').style.display=rxFile?'block':'none'">
        <p class="rx-ok" id="rxok">✓ Prescription attached</p>
      </div>`;
    }
  }
  window._hasRx=hasRx;
  document.getElementById('cartTotal').textContent=inr(total);
}

function openCart(){renderCart();document.getElementById('drawer').classList.add('show');document.getElementById('overlay').classList.add('show');}
function closeCart(){document.getElementById('drawer').classList.remove('show');document.getElementById('overlay').classList.remove('show');}

function checkout(){
  const keys=Object.keys(cart);
  if(!keys.length){toast('Cart is empty');return;}
  if(window._hasRx&&!rxFile){toast('Attach a prescription for Rx items first');return;}
  let msg='Hello Orion Medicament, I would like to order:%0A';
  let total=0;
  keys.forEach(i=>{const p=P[i];total+=p.pr*cart[i];msg+=`%0A• ${encodeURIComponent(p.n)} (${p.b}) × ${cart[i]} — ${encodeURIComponent(inr(p.pr*cart[i]))}${p.rx?' [Rx — prescription attached]':''}`;});
  msg+=`%0A%0ATotal: ${encodeURIComponent(inr(total))}`;
  if(window._hasRx)msg+='%0A%0AI will share my prescription photo in this chat.';
  window.open(`https://wa.me/${WA}?text=${msg}`,'_blank');
}

function sendB2B(){
  const n=document.getElementById('bName').value.trim();
  const biz=document.getElementById('bBiz').value.trim();
  const t=document.getElementById('bType').value;
  const m=document.getElementById('bMsg').value.trim();
  if(!n||!biz){toast('Please fill your name and business');return;}
  const msg=`Hello Orion Medicament, this is a bulk/trade inquiry.%0A%0AName: ${encodeURIComponent(n)}%0ABusiness: ${encodeURIComponent(biz)}%0AType: ${encodeURIComponent(t)}%0ARequirement: ${encodeURIComponent(m||'Please share your rate list.')}`;
  window.open(`https://wa.me/${WA}?text=${msg}`,'_blank');
}

render();syncBadge();

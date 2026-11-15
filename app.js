// ============================================================================
// Fine ART – KÖ KLAUS | Exklusive Uhren, Schmuck & Taschen Showcase-App
// ============================================================================

const STORAGE_KEY_ITEMS = 'klaus_koe_items_v1';
const STORAGE_KEY_LIKES = 'klaus_koe_user_likes_v1';
const STORAGE_KEY_INQUIRIES = 'klaus_koe_inquiries_v1';

// Standard-Startartikel (Uhren, Schmuck, Taschen) für den ersten Prototyp
const DEFAULT_ITEMS = [
  {
    id: 'item-1',
    title: 'Rolex Cosmograph Daytona 116500LN',
    category: 'Uhren',
    price: 24900,
    condition: 'Full Set (Box & Papiere) • 2021 • Unpoliert',
    status: 'available', // available | reserved | sold
    likes: 42,
    inquiriesCount: 5,
    description: 'Traumhafte Rolex Daytona mit schwarzem Keramik-Lünettenring (Cerachrom). Komplettes Set inklusive Original-Box, Garantiekarte und Erstkaufrechnung. Persönlich von Klaus geprüft.',
    voiceText: 'Grüß euch, hier ist der Klaus! Schaut euch diese Daytona aus 2021 an: absolut unpoliert, scharfe Kanten, Keramiklünette ohne jeden Kratzer. Box und deutsche Papiere sind natürlich komplett dabei.',
    audioDataUrl: null,
    hasDemoVideo: true,
    videoDataUrl: null,
    images: [
      'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=1000&q=85'
    ],
    createdAt: Date.now() - 86400000 * 3
  },
  {
    id: 'item-2',
    title: 'Audemars Piguet Royal Oak Roségold 41mm',
    category: 'Uhren',
    price: 58500,
    condition: 'Neuwertig • 18k Roségold • Box & Zertifikat',
    status: 'available',
    likes: 67,
    inquiriesCount: 9,
    description: 'Ikonische Royal Oak in massivem 18 Karat Roségold mit blauem „Grande Tapisserie“-Zifferblatt. Ein echtes Sammlerstück mit beeindruckender Präsenz am Handgelenk.',
    voiceText: 'Hier spricht Klaus: Diese Royal Oak in 18 Karat Roségold ist mein persönliches Highlight der Woche. Das blaue Tapisserie-Blatt spielt im Licht wie kein zweites. Meldet euch gern direkt über das Formular!',
    audioDataUrl: null,
    hasDemoVideo: true,
    videoDataUrl: null,
    images: [
      'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=85'
    ],
    createdAt: Date.now() - 86400000 * 2
  },
  {
    id: 'item-3',
    title: 'Brillant-Tennisarmband 750er Weißgold (5,4 Karat)',
    category: 'Schmuck',
    price: 8900,
    condition: '18k Weißgold • 5,40 ct TW/VSI • Mit Gemmologie-Zertifikat',
    status: 'available',
    likes: 31,
    inquiriesCount: 3,
    description: 'Zeitloses Brillant-Tennisarmband in 750er Weißgold, besetzt mit 54 einzeln gefassten lupenreinen Brillanten von insgesamt 5,40 Karat. Sicherheitsacht-Verschluss.',
    voiceText: 'Ein Traum-Schmuckstück: Über 5 Karat feinste Brillanten in 750er Weißgold. Liegt seidenweich am Handgelenk und hat ein volles Gutachten dabei.',
    audioDataUrl: null,
    hasDemoVideo: true,
    videoDataUrl: null,
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1000&q=85'
    ],
    createdAt: Date.now() - 86400000 * 5
  },
  {
    id: 'item-4',
    title: 'Hermès Birkin 30 Togo Leder Schwarz / Gold-Hardware',
    category: 'Taschen',
    price: 18400,
    condition: 'Full Set • Staubbeutel, Schloss, Schlüssel & Box',
    status: 'reserved',
    likes: 54,
    inquiriesCount: 7,
    description: 'Klassische Birkin 30 in edlem schwarzem Togo-Kalbsleder mit vergoldeten Beschlägen. Exzellenter Zustand, Ecken unberührt, inklusive Originalzubehör.',
    voiceText: 'Für die Damen oder als perfektes Geschenk: Eine schwarze Birkin 30 mit Gold-Hardware in absolutem Bestzustand. Aktuell bereits für einen Kunden reserviert, aber schreibt mir gern bei Interesse.',
    audioDataUrl: null,
    hasDemoVideo: false,
    videoDataUrl: null,
    images: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=85'
    ],
    createdAt: Date.now() - 86400000 * 6
  },
  {
    id: 'item-5',
    title: 'Patek Philippe Nautilus 5711/1A Stahl',
    category: 'Uhren',
    price: 89000,
    condition: 'Sammlerzustand • Komplettset',
    status: 'sold',
    likes: 93,
    inquiriesCount: 14,
    description: 'Die legendäre Patek Philippe Nautilus 5711 mit blau-schwarzem Verlauf-Zifferblatt. Vor Kurzem an einen treuen Sammler verkauft – ähnliche Stücke auf Anfrage verfügbar.',
    voiceText: 'Unsere Nautilus 5711 hat bereits einen glücklichen neuen Besitzer gefunden. Wenn ihr ein ähnliches Modell sucht, gebt mir Bescheid!',
    audioDataUrl: null,
    hasDemoVideo: false,
    videoDataUrl: null,
    images: [
      'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&w=1000&q=85'
    ],
    createdAt: Date.now() - 86400000 * 9
  },
  {
    id: 'item-6',
    title: 'Solitär-Diamantring Platin 950 (2,10 Karat GIA)',
    category: 'Schmuck',
    price: 14200,
    condition: 'Neu & Ungetragen • GIA-Zertifikat',
    status: 'available',
    likes: 28,
    inquiriesCount: 2,
    description: 'Atemberaubender Solitär-Ring aus massivem 950er Platin mit einem 2,10 Karat Brillanten im Exzellent-Schliff (GIA-zertifiziert mit Lasergravur).',
    voiceText: 'Über zwei Karat mit offiziellem GIA-Zertifikat und exzellentem Schliff. Das Feuer dieses Steins seht ihr oben im Kurz-Video!',
    audioDataUrl: null,
    hasDemoVideo: true,
    videoDataUrl: null,
    images: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=85'
    ],
    createdAt: Date.now() - 86400000 * 1
  }
];

const DEFAULT_INQUIRIES = [
  {
    id: 'inq-1',
    itemId: 'item-1',
    itemTitle: 'Rolex Cosmograph Daytona 116500LN',
    customerName: 'Markus Weber',
    customerContact: '0172 / 489 22 10 • m.weber@beispiel.de',
    message: 'Guten Tag Herr Kö, ich habe mir gerade Ihre Sprachbeschreibung zur Daytona angehört. Wäre am Freitag eine persönliche Besichtigung möglich?',
    createdAt: 'Heute, 14:20 Uhr',
    done: false
  },
  {
    id: 'inq-2',
    itemId: 'item-2',
    itemTitle: 'Audemars Piguet Royal Oak Roségold 41mm',
    customerName: 'Dr. Stefan Lindner',
    customerContact: 's.lindner@kanzlei-beispiel.de',
    message: 'Hallo Klaus, wunderschöne Royal Oak! Nehmen Sie eventuell auch eine Rolex Submariner Date aus 2022 in Zahlung?',
    createdAt: 'Gestern, 19:05 Uhr',
    done: false
  }
];

// App State
let items = [];
let userLikes = [];
let inquiries = [];
let isAdmin = false;
let currentCategory = 'Alle';
let currentSort = 'newest';
let searchQuery = '';
let activeAudioItemId = null;
let currentAudioElement = null;
let footerLogoClicks = 0;
let footerClickTimer = null;

// Admin Recorder State
let mediaRecorder = null;
let recordedChunks = [];
let recordedAudioDataUrl = null;
let uploadedVideoDataUrl = null;
let uploadedImageUrls = [];
let recSeconds = 0;
let recInterval = null;

// Init App
document.addEventListener('DOMContentLoaded', () => {
  // Set Official Klaus Logo everywhere
  document.querySelectorAll('.klaus-logo-img').forEach(img => {
    img.src = window.KLAUS_LOGO_DATA_URI;
  });

  loadData();
  renderAll();

  // Check URL hash #admin
  if (window.location.hash === '#admin') {
    openAdminLoginModal();
  }
});

function loadData() {
  try {
    const savedItems = localStorage.getItem(STORAGE_KEY_ITEMS);
    items = savedItems ? JSON.parse(savedItems) : [...DEFAULT_ITEMS];

    const savedLikes = localStorage.getItem(STORAGE_KEY_LIKES);
    userLikes = savedLikes ? JSON.parse(savedLikes) : [];

    const savedInq = localStorage.getItem(STORAGE_KEY_INQUIRIES);
    inquiries = savedInq ? JSON.parse(savedInq) : [...DEFAULT_INQUIRIES];
  } catch (e) {
    items = [...DEFAULT_ITEMS];
    userLikes = [];
    inquiries = [...DEFAULT_INQUIRIES];
  }
}

function saveData() {
  try {
    localStorage.setItem(STORAGE_KEY_ITEMS, JSON.stringify(items));
    localStorage.setItem(STORAGE_KEY_LIKES, JSON.stringify(userLikes));
    localStorage.setItem(STORAGE_KEY_INQUIRIES, JSON.stringify(inquiries));
  } catch (e) {
    showToast('⚠️ Hinweis: Datei sehr groß – wurde für diese Sitzung im Speicher behalten.');
  }
}

function renderAll() {
  renderAdminBar();
  renderCatalog();
  updateProtoSwitcherUI();
}

// ============================================================================
// Katalog & Filter
// ============================================================================
function setCategory(cat) {
  currentCategory = cat;
  document.querySelectorAll('.cat-tab, .nav-pill').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.cat === cat);
  });
  renderCatalog();
}

function setSort(sortVal) {
  currentSort = sortVal;
  renderCatalog();
}

function setSearch(val) {
  searchQuery = val.trim().toLowerCase();
  renderCatalog();
}

function formatPrice(num) {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0
  }).format(num);
}

function getStatusBadgeHTML(status) {
  if (status === 'reserved') {
    return `<span class="status-badge status-reserved">⏳ Reserviert</span>`;
  }
  if (status === 'sold') {
    return `<span class="status-badge status-sold">✓ Verkauft</span>`;
  }
  return `<span class="status-badge status-available">● Sofort verfügbar</span>`;
}

function renderCatalog() {
  const grid = document.getElementById('productGrid');
  if (!grid) return;

  let filtered = items.filter(item => {
    const matchCat = currentCategory === 'Alle' || item.category === currentCategory;
    const matchSearch =
      !searchQuery ||
      item.title.toLowerCase().includes(searchQuery) ||
      item.description.toLowerCase().includes(searchQuery) ||
      item.category.toLowerCase().includes(searchQuery);
    return matchCat && matchSearch;
  });

  if (currentSort === 'popular') {
    filtered.sort((a, b) => b.likes - a.likes);
  } else if (currentSort === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (currentSort === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  } else {
    filtered.sort((a, b) => b.createdAt - a.createdAt);
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align:center; padding: 3.5rem 1rem; background: var(--bg-card); border-radius: 18px; border: 1px solid var(--border-subtle);">
        <h3 class="serif-title" style="margin-bottom:0.5rem; color: var(--gold-light);">Keine Stücke in dieser Auswahl gefunden</h3>
        <p style="color: var(--text-muted);">Wählen Sie eine andere Kategorie oder setzen Sie die Suche zurück.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered
    .map(item => {
      const isLiked = userLikes.includes(item.id);
      const isPlaying = activeAudioItemId === item.id;
      const hasVoice = Boolean(item.audioDataUrl || item.voiceText);
      const hasVideo = Boolean(item.videoDataUrl || item.hasDemoVideo);
      const coverImg = item.images && item.images.length ? item.images[0] : '';

      return `
      <article class="product-card">
        <div class="card-media" onclick="openDetailModal('${item.id}')">
          <img src="${coverImg}" alt="${escapeHtml(item.title)}" loading="lazy" />
          ${getStatusBadgeHTML(item.status)}
          <button class="like-btn ${isLiked ? 'liked' : ''}" onclick="event.stopPropagation(); toggleLike('${item.id}')" title="Gefällt mir / Beliebt">
            <span>${isLiked ? '❤️' : '🤍'}</span>
            <span>${item.likes}</span>
          </button>
          <div class="media-pills">
            ${hasVoice ? `<span class="media-pill">🎙️ Sprach-Expertise</span>` : ''}
            ${hasVideo ? `<span class="media-pill">🎥 Kurz-Video</span>` : ''}
            ${item.images && item.images.length > 1 ? `<span class="media-pill">📸 ${item.images.length} Fotos</span>` : ''}
          </div>
        </div>

        <div class="card-body">
          <div class="card-meta">
            <span>${escapeHtml(item.category)}</span>
            <span>${escapeHtml(item.condition.split('•')[0])}</span>
          </div>
          <h3 class="card-title serif-title" onclick="openDetailModal('${item.id}')">${escapeHtml(item.title)}</h3>
          <div class="card-price">${formatPrice(item.price)}</div>
          <p class="card-desc">${escapeHtml(item.description)}</p>

          ${
            hasVoice
              ? `
          <div class="voice-box">
            <button class="voice-play-btn" onclick="toggleVoicePlayback('${item.id}')" title="Klaus' Sprachbeschreibung abspielen">
              ${isPlaying ? '⏹' : '▶'}
            </button>
            <div class="voice-info">
              <strong>🎧 Klaus' Sprach-Expertise</strong>
              <span>${isPlaying ? 'Spielt gerade ab...' : 'Persönliche Vorstellung anhören'}</span>
            </div>
            <div class="soundwave ${isPlaying ? 'playing' : ''}">
              <i></i><i></i><i></i><i></i>
            </div>
          </div>`
              : ''
          }

          <div class="card-actions">
            <button class="btn btn-gold" onclick="openInquiryModal('${item.id}')" ${item.status === 'sold' ? 'style="opacity:0.75"' : ''}>
              ✉️ Interesse melden
            </button>
            <button class="btn btn-outline" onclick="openDetailModal('${item.id}')" title="Fotos & Video ansehen">
              🔍 Details ${hasVideo ? '& Video' : ''}
            </button>
          </div>

          ${
            isAdmin
              ? `
          <div class="card-admin-bar">
            <button class="btn btn-outline" onclick="cycleItemStatus('${item.id}')">
              🔄 Status: ${item.status === 'available' ? 'Verfügbar' : item.status === 'reserved' ? 'Reserviert' : 'Verkauft'}
            </button>
            <button class="btn btn-outline" onclick="openEditItemModal('${item.id}')">✏️ Bearbeiten</button>
            <button class="btn btn-danger" onclick="deleteItem('${item.id}')">🗑️ Löschen</button>
          </div>`
              : ''
          }
        </div>
      </article>
    `;
    })
    .join('');
}

// ============================================================================
// ❤️ Like / Herz-Funktion mit Zähler
// ============================================================================
function toggleLike(itemId) {
  const item = items.find(i => i.id === itemId);
  if (!item) return;

  const idx = userLikes.indexOf(itemId);
  if (idx === -1) {
    userLikes.push(itemId);
    item.likes += 1;
    showToast(`❤️ „${item.title}“ zu Ihren Favoriten hinzugefügt!`);
  } else {
    userLikes.splice(idx, 1);
    item.likes = Math.max(0, item.likes - 1);
  }

  saveData();
  renderAll();
}

// ============================================================================
// 🎧 Audio-Sprachbeschreibung abspielen (Echte Aufnahme oder deutsche Stimme)
// ============================================================================
function stopAllVoicePlayback() {
  if (currentAudioElement) {
    currentAudioElement.pause();
    currentAudioElement = null;
  }
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
  activeAudioItemId = null;
}

function toggleVoicePlayback(itemId) {
  if (activeAudioItemId === itemId) {
    stopAllVoicePlayback();
    renderCatalog();
    updateDetailModalVoiceUI(itemId);
    return;
  }

  stopAllVoicePlayback();
  const item = items.find(i => i.id === itemId);
  if (!item) return;

  activeAudioItemId = itemId;
  renderCatalog();
  updateDetailModalVoiceUI(itemId);

  // Wenn Klaus eine eigene Audio-Aufnahme hochgeladen/eingesprochen hat:
  if (item.audioDataUrl) {
    currentAudioElement = new Audio(item.audioDataUrl);
    currentAudioElement.onended = () => {
      activeAudioItemId = null;
      renderCatalog();
      updateDetailModalVoiceUI(itemId);
    };
    currentAudioElement.play().catch(() => {
      activeAudioItemId = null;
      renderCatalog();
    });
    return;
  }

  // Für die Beispiel-Uhren im Prototyp: Deutsche Sprachausgabe im Browser
  if ('speechSynthesis' in window && item.voiceText) {
    const utter = new SpeechSynthesisUtterance(item.voiceText);
    utter.lang = 'de-DE';
    utter.rate = 0.96;
    utter.pitch = 0.92;
    utter.onend = () => {
      activeAudioItemId = null;
      renderCatalog();
      updateDetailModalVoiceUI(itemId);
    };
    utter.onerror = () => {
      activeAudioItemId = null;
      renderCatalog();
      updateDetailModalVoiceUI(itemId);
    };
    window.speechSynthesis.speak(utter);
  } else {
    showToast(`🎧 Klaus sagt: "${item.voiceText}"`);
    setTimeout(() => {
      activeAudioItemId = null;
      renderCatalog();
    }, 4000);
  }
}

function updateDetailModalVoiceUI(itemId) {
  const btn = document.getElementById('detailVoiceBtn');
  if (!btn || btn.dataset.itemid !== itemId) return;
  const isPlaying = activeAudioItemId === itemId;
  btn.innerHTML = isPlaying
    ? '⏹ Sprach-Expertise stoppen'
    : '🎧 Klaus\' Sprach-Expertise anhören';
}

// ============================================================================
// 🔍 Detail-Ansicht mit Foto-Galerie & 🎥 Kurz-Video-Vorstellung
// ============================================================================
function openDetailModal(itemId) {
  const item = items.find(i => i.id === itemId);
  if (!item) return;

  const modal = document.getElementById('detailModal');
  const content = document.getElementById('detailModalContent');
  const hasVoice = Boolean(item.audioDataUrl || item.voiceText);
  const hasVideo = Boolean(item.videoDataUrl || item.hasDemoVideo);

  const thumbsHtml = [
    ...(item.images || []).map(
      (imgUrl, idx) =>
        `<button class="detail-thumb ${idx === 0 ? 'active' : ''}" onclick="switchDetailMedia('${item.id}', 'image', ${idx}, this)">
          📸 Foto ${idx + 1}
        </button>`
    ),
    hasVideo
      ? `<button class="detail-thumb" onclick="switchDetailMedia('${item.id}', 'video', 0, this)">
          🎥 Kurz-Video abspielen
        </button>`
      : ''
  ].join('');

  content.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:1rem; margin-bottom:0.8rem; padding-right:2.5rem;">
      <div>
        <span style="color:var(--gold); font-size:0.8rem; text-transform:uppercase; letter-spacing:0.1em;">${escapeHtml(item.category)} • ${escapeHtml(item.condition)}</span>
        <h2 class="serif-title" style="font-size:1.6rem; margin-top:0.2rem;">${escapeHtml(item.title)}</h2>
      </div>
      <div style="font-size:1.5rem; font-weight:700; color:var(--gold-light); white-space:nowrap;">
        ${formatPrice(item.price)}
      </div>
    </div>

    <div class="detail-media-stage" id="detailMediaStage">
      <img src="${item.images[0]}" alt="${escapeHtml(item.title)}" />
    </div>

    <div class="detail-thumbs">
      ${thumbsHtml}
    </div>

    <p style="color:var(--text-main); margin-bottom:1.25rem; font-size:0.96rem;">
      ${escapeHtml(item.description)}
    </p>

    ${
      hasVoice
        ? `
      <div style="background:rgba(212,175,55,0.1); border:1px solid var(--border-gold); border-radius:12px; padding:0.9rem 1rem; margin-bottom:1.25rem; display:flex; align-items:center; justify-content:space-between; gap:1rem; flex-wrap:wrap;">
        <div>
          <strong style="color:var(--gold-light); display:block;">🎙️ Persönliche Audio-Expertise von Klaus Kö</strong>
          <span style="font-size:0.85rem; color:var(--text-muted);">${escapeHtml(item.voiceText || 'Eigene Sprachaufnahme von Klaus abspielen')}</span>
        </div>
        <button id="detailVoiceBtn" data-itemid="${item.id}" class="btn btn-gold" onclick="toggleVoicePlayback('${item.id}')">
          ${activeAudioItemId === item.id ? '⏹ Sprach-Expertise stoppen' : '🎧 Klaus\' Sprach-Expertise anhören'}
        </button>
      </div>`
        : ''
    }

    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.8rem; padding-top:0.8rem; border-top:1px solid var(--border-subtle);">
      <button class="btn btn-outline" onclick="toggleLike('${item.id}'); openDetailModal('${item.id}');">
        ${userLikes.includes(item.id) ? '❤️ Gefällt Ihnen' : '🤍 Gefällt mir'} (${item.likes} Likes)
      </button>
      <button class="btn btn-gold" onclick="closeModal('detailModal'); openInquiryModal('${item.id}');">
        ✉️ Jetzt direkt in der App anfragen
      </button>
    </div>
  `;

  modal.classList.add('open');
}

function switchDetailMedia(itemId, type, index, btnEl) {
  const item = items.find(i => i.id === itemId);
  if (!item) return;

  document.querySelectorAll('#detailModalContent .detail-thumb').forEach(b => b.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');

  const stage = document.getElementById('detailMediaStage');
  if (!stage) return;

  if (type === 'image') {
    stage.innerHTML = `<img src="${item.images[index]}" alt="${escapeHtml(item.title)}" />`;
  } else if (type === 'video') {
    if (item.videoDataUrl) {
      stage.innerHTML = `<video src="${item.videoDataUrl}" controls autoplay style="width:100%; height:100%;"></video>`;
    } else {
      // Interaktive 360° Licht-Effekt-Video-Vorschau für die Demo-Artikel
      stage.innerHTML = `
        <div style="position:relative; width:100%; height:100%; display:flex; align-items:center; justify-content:center; overflow:hidden; background:#050608;">
          <img src="${item.images[0]}" style="width:88%; height:88%; object-fit:contain; animation: slowZoomPan 6s infinite alternate ease-in-out;" />
          <div style="position:absolute; bottom:14px; left:14px; background:rgba(11,12,14,0.85); border:1px solid var(--gold); padding:0.4rem 0.85rem; border-radius:999px; font-size:0.8rem; color:var(--gold-light);">
            🎥 Video-Präsentation: ${escapeHtml(item.title)} (Demo-Aufnahme)
          </div>
        </div>
        <style>
          @keyframes slowZoomPan {
            0% { transform: scale(1) rotate(-1deg); filter: brightness(1); }
            100% { transform: scale(1.12) rotate(1.5deg); filter: brightness(1.15); }
          }
        </style>
      `;
    }
  }
}

// ============================================================================
// ✉️ In-App Anfrage senden (100% innerhalb der eigenen App – ohne WhatsApp!)
// ============================================================================
function openInquiryModal(itemId) {
  const item = items.find(i => i.id === itemId);
  if (!item) return;

  document.getElementById('inquiryItemId').value = item.id;
  document.getElementById('inquiryItemPreview').innerHTML = `
    <img src="${item.images[0]}" alt="" style="width:64px; height:64px; border-radius:10px; object-fit:cover; border:1px solid var(--gold);" />
    <div>
      <div style="font-size:0.78rem; color:var(--gold); text-transform:uppercase;">Ihre unverbindliche Anfrage zu:</div>
      <strong style="font-size:1.05rem; color:#fff;">${escapeHtml(item.title)}</strong>
      <div style="color:var(--gold-light); font-weight:600;">${formatPrice(item.price)}</div>
    </div>
  `;
  document.getElementById('inqMessage').value = `Guten Tag Herr Kö, ich interessiere mich für „${item.title}“ (${formatPrice(item.price)}). Bitte kontaktieren Sie mich für weitere Details oder einen Besichtigungstermin.`;
  document.getElementById('inquiryModal').classList.add('open');
}

function submitInquiry(e) {
  e.preventDefault();
  const itemId = document.getElementById('inquiryItemId').value;
  const name = document.getElementById('inqName').value.trim();
  const contact = document.getElementById('inqContact').value.trim();
  const message = document.getElementById('inqMessage').value.trim();

  const item = items.find(i => i.id === itemId);
  if (!name || !contact || !message) return;

  inquiries.unshift({
    id: 'inq-' + Date.now(),
    itemId: item ? item.id : '',
    itemTitle: item ? item.title : 'Allgemeine Anfrage',
    customerName: name,
    customerContact: contact,
    message,
    createdAt: 'Gerade eben',
    done: false
  });

  if (item) {
    item.inquiriesCount = (item.inquiriesCount || 0) + 1;
  }

  saveData();
  closeModal('inquiryModal');
  document.getElementById('inquiryForm').reset();
  renderAll();
  showToast('✅ Vielen Dank! Ihre Nachricht wurde direkt im Postfach von Klaus Kö hinterlegt.');
}

// ============================================================================
// 🔐 Versteckter Admin-Zugang (Klaus Kö & Administrator)
// ============================================================================
function handleFooterSecretClick() {
  footerLogoClicks += 1;
  clearTimeout(footerClickTimer);
  footerClickTimer = setTimeout(() => {
    footerLogoClicks = 0;
  }, 1800);

  if (footerLogoClicks >= 3) {
    footerLogoClicks = 0;
    if (isAdmin) {
      showToast('🔓 Sie sind bereits als Administrator eingeloggt.');
    } else {
      openAdminLoginModal();
    }
  }
}

function openAdminLoginModal() {
  document.getElementById('adminPasswordInput').value = '';
  document.getElementById('adminLoginModal').classList.add('open');
}

async function sha256Hex(text) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
}

async function handleAdminLogin(e) {
  e.preventDefault();
  const pwd = document.getElementById('adminPasswordInput').value.trim();
  const secretFromIgnoredFile = window.ADMIN_SECRET_CONFIG && window.ADMIN_SECRET_CONFIG.adminPassword;
  // SHA-256 Hash als Fallback, damit das Klartext-Passwort NIEMALS im Git-Code steht
  const hash = await sha256Hex(pwd);
  const validHash = '8c82e7b93c9c907b64a6c0f86b27c7a0c154d9a3e4d7b2a6c2f0c5b1e2d3f4a5';

  if ((secretFromIgnoredFile && pwd === secretFromIgnoredFile) || hash === validHash) {
    isAdmin = true;
    closeModal('adminLoginModal');
    renderAll();
    showToast('🔓 Willkommen im Admin-Bereich (Klaus Kö & Administrator)!');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    showToast('❌ Falsches Passwort. (Das Passwort liegt geschützt in config.secret.js)');
  }
}

function quickSwitchRole(makeAdmin) {
  isAdmin = makeAdmin;
  renderAll();
  if (isAdmin) {
    showToast('🔐 Admin-Modus aktiviert: Sie können jetzt Artikel hinzufügen, löschen & Anfragen lesen.');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    showToast('👁️ Kunden-Ansicht aktiviert: Alle Admin-Knöpfe sind jetzt komplett unsichtbar.');
  }
}

function renderAdminBar() {
  const bar = document.getElementById('adminTopbar');
  if (!bar) return;
  bar.classList.toggle('active', isAdmin);

  const openInquiriesCount = inquiries.filter(i => !i.done).length;
  const badge = document.getElementById('adminNotifCount');
  if (badge) {
    badge.textContent = openInquiriesCount;
    badge.style.display = openInquiriesCount > 0 ? 'inline-block' : 'none';
  }
}

function updateProtoSwitcherUI() {
  const custBtn = document.getElementById('protoBtnCustomer');
  const admBtn = document.getElementById('protoBtnAdmin');
  if (!custBtn || !admBtn) return;

  if (isAdmin) {
    admBtn.className = 'btn btn-gold';
    custBtn.className = 'btn btn-outline';
  } else {
    custBtn.className = 'btn btn-gold';
    admBtn.className = 'btn btn-outline';
  }
}

// ============================================================================
// ➕ Artikel hinzufügen / bearbeiten (inkl. 🎙️ Mikrofon & 🎥 Video-Upload)
// ============================================================================
function openNewItemModal() {
  resetItemForm();
  document.getElementById('itemModalTitle').textContent = '➕ Neues Stück einstellen (Uhr, Schmuck oder Tasche)';
  document.getElementById('editItemId').value = '';
  document.getElementById('itemFormModal').classList.add('open');
}

function openEditItemModal(itemId) {
  const item = items.find(i => i.id === itemId);
  if (!item) return;

  resetItemForm();
  document.getElementById('itemModalTitle').textContent = '✏️ Artikel bearbeiten';
  document.getElementById('editItemId').value = item.id;
  document.getElementById('itemTitle').value = item.title;
  document.getElementById('itemCategory').value = item.category;
  document.getElementById('itemPrice').value = item.price;
  document.getElementById('itemStatus').value = item.status;
  document.getElementById('itemCondition').value = item.condition;
  document.getElementById('itemDesc').value = item.description;
  document.getElementById('itemVoiceText').value = item.voiceText || '';

  uploadedImageUrls = [...(item.images || [])];
  recordedAudioDataUrl = item.audioDataUrl || null;
  uploadedVideoDataUrl = item.videoDataUrl || null;

  renderUploadedImagesPreview();
  if (recordedAudioDataUrl) {
    const audioPrev = document.getElementById('recordedAudioPreview');
    audioPrev.src = recordedAudioDataUrl;
    audioPrev.style.display = 'block';
  }
  if (uploadedVideoDataUrl) {
    const vidPrev = document.getElementById('uploadedVideoPreview');
    vidPrev.src = uploadedVideoDataUrl;
    vidPrev.style.display = 'block';
  }

  document.getElementById('itemFormModal').classList.add('open');
}

function resetItemForm() {
  document.getElementById('itemForm').reset();
  stopRecordingIfActive();
  recordedAudioDataUrl = null;
  uploadedVideoDataUrl = null;
  uploadedImageUrls = [];
  document.getElementById('uploadedImagesPreview').innerHTML = '';
  const audioPrev = document.getElementById('recordedAudioPreview');
  audioPrev.style.display = 'none';
  audioPrev.src = '';
  const vidPrev = document.getElementById('uploadedVideoPreview');
  vidPrev.style.display = 'none';
  vidPrev.src = '';
  document.getElementById('recStatusText').textContent = 'Bereit für Sprachaufnahme per Mikrofon';
}

function handleImageFilesSelected(input) {
  const files = Array.from(input.files || []);
  files.forEach(file => {
    const reader = new FileReader();
    reader.onload = e => {
      uploadedImageUrls.push(e.target.result);
      renderUploadedImagesPreview();
    };
    reader.readAsDataURL(file);
  });
}

function renderUploadedImagesPreview() {
  const wrap = document.getElementById('uploadedImagesPreview');
  if (!wrap) return;
  wrap.innerHTML = uploadedImageUrls
    .map(
      (url, idx) => `
      <div style="position:relative; width:74px; height:74px; border-radius:10px; overflow:hidden; border:1px solid var(--gold);">
        <img src="${url}" style="width:100%; height:100%; object-fit:cover;" />
        <button type="button" onclick="removeUploadedImage(${idx})" style="position:absolute; top:2px; right:2px; background:rgba(0,0,0,0.8); color:#fff; border:none; width:20px; height:20px; border-radius:50%; font-size:0.7rem; cursor:pointer;">✕</button>
      </div>
    `
    )
    .join('');
}

function removeUploadedImage(idx) {
  uploadedImageUrls.splice(idx, 1);
  renderUploadedImagesPreview();
}

// 🎙️ Live-Mikrofon Sprachaufnahme für Klaus
async function toggleMicRecording() {
  const btn = document.getElementById('micRecBtn');
  const statusEl = document.getElementById('recStatusText');
  const audioPrev = document.getElementById('recordedAudioPreview');

  if (mediaRecorder && mediaRecorder.state === 'recording') {
    mediaRecorder.stop();
    btn.innerHTML = '🎙️ Sprachaufnahme starten';
    btn.className = 'btn btn-gold';
    clearInterval(recInterval);
    return;
  }

  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    recordedChunks = [];
    mediaRecorder = new MediaRecorder(stream);

    mediaRecorder.ondataavailable = e => {
      if (e.data.size > 0) recordedChunks.push(e.data);
    };

    mediaRecorder.onstop = () => {
      const blob = new Blob(recordedChunks, { type: 'audio/webm' });
      const reader = new FileReader();
      reader.onload = ev => {
        recordedAudioDataUrl = ev.target.result;
        audioPrev.src = recordedAudioDataUrl;
        audioPrev.style.display = 'block';
        statusEl.innerHTML = '✅ Sprachbeschreibung erfolgreich aufgenommen!';
      };
      reader.readAsDataURL(blob);
      stream.getTracks().forEach(t => t.stop());
    };

    mediaRecorder.start();
    recSeconds = 0;
    btn.innerHTML = '⏹ Aufnahme beenden';
    btn.className = 'btn btn-danger';
    statusEl.innerHTML = `<span class="rec-dot"></span> Klaus spricht... (0:00)`;

    recInterval = setInterval(() => {
      recSeconds += 1;
      const mins = Math.floor(recSeconds / 60);
      const secs = String(recSeconds % 60).padStart(2, '0');
      statusEl.innerHTML = `<span class="rec-dot"></span> Klaus spricht... (${mins}:${secs})`;
    }, 1000);
  } catch (err) {
    statusEl.textContent = '⚠️ Kein Mikrofon-Zugriff im Browser – Sie können rechts eine Audio-Datei auswählen oder unten den Sprechtext eingeben.';
  }
}

function stopRecordingIfActive() {
  if (mediaRecorder && mediaRecorder.state === 'recording') {
    mediaRecorder.stop();
  }
  clearInterval(recInterval);
}

function handleAudioFileSelected(input) {
  const file = input.files && input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    recordedAudioDataUrl = e.target.result;
    const audioPrev = document.getElementById('recordedAudioPreview');
    audioPrev.src = recordedAudioDataUrl;
    audioPrev.style.display = 'block';
    document.getElementById('recStatusText').textContent = `✅ Audio-Datei geladen: ${file.name}`;
  };
  reader.readAsDataURL(file);
}

// 🎥 Kurz-Video auswählen
function handleVideoFileSelected(input) {
  const file = input.files && input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    uploadedVideoDataUrl = e.target.result;
    const vidPrev = document.getElementById('uploadedVideoPreview');
    vidPrev.src = uploadedVideoDataUrl;
    vidPrev.style.display = 'block';
  };
  reader.readAsDataURL(file);
}

function saveItemForm(e) {
  e.preventDefault();
  stopRecordingIfActive();

  const editId = document.getElementById('editItemId').value;
  const title = document.getElementById('itemTitle').value.trim();
  const category = document.getElementById('itemCategory').value;
  const price = Number(document.getElementById('itemPrice').value) || 0;
  const status = document.getElementById('itemStatus').value;
  const condition = document.getElementById('itemCondition').value.trim() || 'Original geprüfte Luxusware';
  const description = document.getElementById('itemDesc').value.trim();
  const voiceText = document.getElementById('itemVoiceText').value.trim();

  const fallbackImg =
    category === 'Schmuck'
      ? 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1000&q=85'
      : category === 'Taschen'
      ? 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=85'
      : 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=1000&q=85';

  const finalImages = uploadedImageUrls.length > 0 ? uploadedImageUrls : [fallbackImg];

  if (editId) {
    const existing = items.find(i => i.id === editId);
    if (existing) {
      existing.title = title;
      existing.category = category;
      existing.price = price;
      existing.status = status;
      existing.condition = condition;
      existing.description = description;
      existing.voiceText = voiceText;
      existing.images = finalImages;
      existing.audioDataUrl = recordedAudioDataUrl;
      existing.videoDataUrl = uploadedVideoDataUrl;
    }
    showToast(`✅ „${title}“ wurde aktualisiert!`);
  } else {
    items.unshift({
      id: 'item-' + Date.now(),
      title,
      category,
      price,
      condition,
      status,
      likes: 1,
      inquiriesCount: 0,
      description,
      voiceText,
      audioDataUrl: recordedAudioDataUrl,
      hasDemoVideo: Boolean(uploadedVideoDataUrl),
      videoDataUrl: uploadedVideoDataUrl,
      images: finalImages,
      createdAt: Date.now()
    });
    showToast(`✨ „${title}“ wurde neu ins Schaufenster gestellt!`);
  }

  saveData();
  closeModal('itemFormModal');
  renderAll();
}

function cycleItemStatus(itemId) {
  const item = items.find(i => i.id === itemId);
  if (!item) return;
  const order = ['available', 'reserved', 'sold'];
  const next = order[(order.indexOf(item.status) + 1) % order.length];
  item.status = next;
  saveData();
  renderAll();
  const label = next === 'available' ? 'Sofort verfügbar' : next === 'reserved' ? 'Reserviert' : 'Verkauft';
  showToast(`🔄 Status geändert auf: ${label}`);
}

function deleteItem(itemId) {
  const item = items.find(i => i.id === itemId);
  if (!item) return;
  items = items.filter(i => i.id !== itemId);
  saveData();
  renderAll();
  showToast(`🗑️ „${item.title}“ wurde aus dem Katalog gelöscht.`);
}

// ============================================================================
// 📊 Admin Postfach (Kunden-Benachrichtigungen) & Beliebtheits-Ranking
// ============================================================================
function openAdminDashboardModal(tab = 'inquiries') {
  renderAdminDashboardContent(tab);
  document.getElementById('adminDashboardModal').classList.add('open');
}

function renderAdminDashboardContent(tab) {
  const container = document.getElementById('adminDashboardContent');
  const totalLikes = items.reduce((sum, i) => sum + (i.likes || 0), 0);
  const openInq = inquiries.filter(i => !i.done).length;

  const rankedItems = [...items].sort((a, b) => b.likes - a.likes);

  container.innerHTML = `
    <h2 class="serif-title" style="margin-bottom:1rem; color:var(--gold-light);">
      👑 Klaus Kö – Internes Cockpit & Benachrichtigungen
    </h2>

    <div class="stats-grid">
      <div class="stat-card">
        <div class="num">${items.length}</div>
        <div class="lbl">Exponate im Katalog</div>
      </div>
      <div class="stat-card">
        <div class="num">❤️ ${totalLikes}</div>
        <div class="lbl">Gesamte Kunden-Likes</div>
      </div>
      <div class="stat-card">
        <div class="num">🔔 ${openInq}</div>
        <div class="lbl">Offene Kunden-Anfragen</div>
      </div>
    </div>

    <div style="display:flex; gap:0.6rem; margin-bottom:1.25rem;">
      <button class="btn ${tab === 'inquiries' ? 'btn-gold' : 'btn-outline'}" onclick="renderAdminDashboardContent('inquiries')">
        📬 Kunden-Anfragen (${inquiries.length})
      </button>
      <button class="btn ${tab === 'ranking' ? 'btn-gold' : 'btn-outline'}" onclick="renderAdminDashboardContent('ranking')">
        🏆 Beliebteste Stücke (❤️ Zähler)
      </button>
    </div>

    ${
      tab === 'inquiries'
        ? inquiries.length === 0
          ? `<p style="color:var(--text-muted); padding:1.5rem 0;">Aktuell liegen keine Anfragen vor.</p>`
          : inquiries
              .map(
                inq => `
            <div class="inquiry-item ${inq.done ? 'done' : ''}">
              <div style="flex:1; min-width:240px;">
                <div style="font-size:0.78rem; color:var(--gold); margin-bottom:0.2rem;">
                  ${escapeHtml(inq.createdAt)} • Betrifft: <strong>${escapeHtml(inq.itemTitle)}</strong>
                </div>
                <div style="font-weight:700; font-size:1.02rem; color:#fff;">
                  👤 ${escapeHtml(inq.customerName)} <span style="font-weight:400; color:var(--gold-light);">(${escapeHtml(inq.customerContact)})</span>
                </div>
                <p style="font-size:0.9rem; color:var(--text-main); margin-top:0.4rem;">
                  „${escapeHtml(inq.message)}“
                </p>
              </div>
              <div style="display:flex; flex-direction:column; gap:0.4rem; justify-content:center;">
                <button class="btn btn-outline" onclick="toggleInquiryDone('${inq.id}')">
                  ${inq.done ? '↩ Als offen markieren' : '✓ Als erledigt markieren'}
                </button>
                <button class="btn btn-danger" onclick="deleteInquiry('${inq.id}')">🗑️ Löschen</button>
              </div>
            </div>
          `
              )
              .join('')
        : `
          <div>
            ${rankedItems
              .map(
                (it, idx) => `
              <div style="display:flex; align-items:center; justify-content:space-between; gap:1rem; padding:0.75rem 1rem; background:var(--bg-card); border:1px solid var(--border-subtle); border-radius:12px; margin-bottom:0.6rem;">
                <div style="display:flex; align-items:center; gap:0.85rem;">
                  <strong style="font-size:1.2rem; color:var(--gold-light); width:28px;">#${idx + 1}</strong>
                  <img src="${it.images[0]}" style="width:48px; height:48px; border-radius:8px; object-fit:cover;" />
                  <div>
                    <strong style="color:#fff; display:block;">${escapeHtml(it.title)}</strong>
                    <span style="font-size:0.8rem; color:var(--text-muted);">${escapeHtml(it.category)} • ${formatPrice(it.price)}</span>
                  </div>
                </div>
                <div style="display:flex; gap:1rem; align-items:center;">
                  <span style="background:rgba(185,28,28,0.22); border:1px solid #f87171; padding:0.3rem 0.75rem; border-radius:999px; font-weight:700;">
                    ❤️ ${it.likes} Likes
                  </span>
                  <span style="background:rgba(212,175,55,0.15); border:1px solid var(--gold); padding:0.3rem 0.75rem; border-radius:999px; font-size:0.85rem; color:var(--gold-light);">
                    ✉️ ${it.inquiriesCount || 0} Anfragen
                  </span>
                </div>
              </div>
            `
              )
              .join('')}
          </div>
        `
    }
  `;
}

function toggleInquiryDone(inqId) {
  const inq = inquiries.find(i => i.id === inqId);
  if (!inq) return;
  inq.done = !inq.done;
  saveData();
  renderAdminBar();
  renderAdminDashboardContent('inquiries');
}

function deleteInquiry(inqId) {
  inquiries = inquiries.filter(i => i.id !== inqId);
  saveData();
  renderAdminBar();
  renderAdminDashboardContent('inquiries');
}

// ============================================================================
// Hilfsfunktionen & Modals
// ============================================================================
function closeModal(modalId) {
  const el = document.getElementById(modalId);
  if (el) el.classList.remove('open');
  if (modalId === 'itemFormModal') {
    stopRecordingIfActive();
  }
}

function openLegalModal(type) {
  const modal = document.getElementById('legalModal');
  const body = document.getElementById('legalModalBody');
  if (type === 'impressum') {
    body.innerHTML = `
      <h2 class="serif-title" style="color:var(--gold-light); margin-bottom:0.8rem;">Impressum (Platzhalter – wird später ergänzt)</h2>
      <p style="color:var(--text-muted); margin-bottom:1rem;">Angaben gemäß § 5 DDG:</p>
      <p><strong>Fine ART – KÖ KLAUS Uhren & Schmuckhandel</strong><br/>Inhaber: Klaus Kö<br/>[Straße & Hausnummer folgen]<br/>[PLZ & Ort folgen]</p>
      <p style="margin-top:1rem;"><strong>Kontakt:</strong><br/>Telefon: [folgt]<br/>E-Mail: [folgt]</p>
    `;
  } else {
    body.innerHTML = `
      <h2 class="serif-title" style="color:var(--gold-light); margin-bottom:0.8rem;">Datenschutzerklärung (Platzhalter – wird später ergänzt)</h2>
      <p style="color:var(--text-muted);">
        Alle Anfragen über diese App werden ausschließlich zur Bearbeitung Ihres Kaufinteresses direkt an Klaus Kö übermittelt und nicht an Dritte oder externe Dienste wie WhatsApp weitergegeben.
      </p>
    `;
  }
  modal.classList.add('open');
}

function showToast(msg) {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  container.appendChild(t);
  setTimeout(() => {
    t.remove();
  }, 3600);
}

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

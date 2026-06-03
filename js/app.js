/* ======================== CONFIGURATION ======================== */
const CONFIG = {
  whatsapp: '+56976295343',
  email: 'almaoutdoorchile@gmail.com',
  flowToken: 'EFEF013DC8DBDF1CD2D90ADA4EF8FAA0500E961Z',
  flowUrl: 'https://www.flow.cl/app/web/pay.php',
  adminEmail: 'almaoutdoorchile@gmail.com',
  adminPass: '123456',
  winter: { startHour: 12, endHour: 16, days: [3, 4, 5, 6, 0] },
  summer: { startHour: 11, endHour: 20, days: [3, 4, 5, 6, 0] }
};

const SERVICES = [
  { id: 1, name: 'Vuelo Individual', price: 65000, desc: 'Vuelo en parapente para una persona. Incluye equipo completo y seguro.', badge: 'Popular', image: 'GS010036_1765600136075.jpg' },
  { id: 2, name: 'Vuelo x 2', price: 119980, desc: 'Vuelo en tándem para dos personas. Perfecto para parejas o amigos.', badge: 'Recomendado', image: 'GS020042_1765680608780.jpg' },
  { id: 3, name: 'Fotos GoPro 360', price: 20000, desc: 'Captura cada momento con video y fotos 360° profesional.', badge: 'Oferta', image: 'Snapshot_202512338_151208.jpg' },
  { id: 4, name: 'Curso Piloto Parapente', price: 1500000, desc: 'Curso completo para obtener tu licencia de piloto de parapente.', badge: 'Premium', image: 'GS010044_1765714794127.jpg' }
];

const ADVENTURE_IMAGES = [];
const GALLERY_BATCH_SIZE = 20;

const CHILE_DATA = {
  regiones: {
    'Región Metropolitana': ['Santiago', 'Providencia', 'Las Condes', 'Vitacura', 'Lo Barnechea', 'Ñuñoa', 'La Reina', 'Peñalolén', 'Macul', 'San Miguel', 'Maipú', 'Pudahuel', 'Quilicura', 'Renca', 'Independencia', 'Conchalí', 'Huechuraba', 'Recoleta', 'Cerro Navia', 'Lo Prado', 'Quinta Normal', 'Estación Central', 'Cerrillos', 'Pedro Aguirre Cerda', 'San Joaquín', 'La Granja', 'La Florida', 'El Bosque', 'San Ramón', 'La Pintana', 'Puente Alto', 'San Bernardo', 'Colina', 'Lampa', 'Til-Til', 'Pirque', 'San José de Maipo', 'Buin', 'Paine', 'Calera de Tango', 'Isla de Maipo', 'El Monte', 'Talagante', 'Peñaflor', 'Padre Hurtado', 'Melipilla', 'María Pinto', 'Curacaví', 'Alhué', 'San Pedro'],
    'Región de Valparaíso': ['Valparaíso', 'Viña del Mar', 'Concón', 'Quilpué', 'Villa Alemana', 'Limache', 'Olmué', 'Quillota', 'La Cruz', 'La Calera', 'Nogales', 'Hijuelas', 'San Felipe', 'Los Andes', 'Calle Larga', 'Rinconada', 'Putaendo', 'Santa María', 'Panquehue', 'Llaillay', 'San Antonio', 'Cartagena', 'El Quisco', 'El Tabo', 'Algarrobo', 'Santo Domingo'],
    'Región de Coquimbo': ['La Serena', 'Coquimbo', 'Andacollo', 'La Higuera', 'Paiguano', 'Vicuña', 'Illapel', 'Canela', 'Los Vilos', 'Salamanca', 'Ovalle', 'Combarbalá', 'Monte Patria', 'Punitaqui', 'Río Hurtado'],
    'Región del Maule': ['Talca', 'Constitución', 'Cauquenes', 'Chanco', 'Pelluhue', 'Curicó', 'Hualañé', 'Licantén', 'Molina', 'Rauco', 'Romeral', 'Sagrada Familia', 'Teno', 'Vichuquén', 'Linares', 'Colbún', 'Longaví', 'Parral', 'Retiro', 'San Javier', 'Villa Alegre', 'Yerbas Buenas'],
    'Región del Biobío': ['Concepción', 'Talcahuano', 'Hualpén', 'Chiguayante', 'San Pedro de la Paz', 'Coronel', 'Lota', 'Penco', 'Tomé', 'Florida', 'Hualqui', 'Santa Juana', 'Los Ángeles', 'Lebu', 'Arauco', 'Cañete', 'Contulmo', 'Curanilahue', 'Los Álamos', 'Tirúa', 'Nacimiento', 'Laja', 'San Rosendo', 'Yumbel', 'Cabrero', 'Quilleco', 'Santa Bárbara', 'Mulchén', 'Negrete'],
    'Región de La Araucanía': ['Temuco', 'Padre Las Casas', 'Villarrica', 'Pucón', 'Angol', 'Collipulli', 'Ercilla', 'Lonquimay', 'Los Sauces', 'Lumaco', 'Purén', 'Renaico', 'Traiguén', 'Victoria', 'Curacautín', 'Lautaro', 'Perquenco', 'Galvarino', 'Nueva Imperial', 'Carahue', 'Freire', 'Gorbea', 'Loncoche', 'Pitrufquén', 'Saavedra', 'Teodoro Schmidt', 'Toltén'],
    'Región de Los Lagos': ['Puerto Montt', 'Puerto Varas', 'Llanquihue', 'Frutillar', 'Fresia', 'Los Muermos', 'Maullín', 'Calbuco', 'Cochamó', 'Ancud', 'Castro', 'Chonchi', 'Curaco de Vélez', 'Dalcahue', 'Puqueldón', 'Queilén', 'Quellón', 'Quemchi', 'Quinchao', 'Osorno', 'Purranque', 'Río Negro', 'San Juan de la Costa', 'San Pablo'],
    'Región de Los Ríos': ['Valdivia', 'Corral', 'Lanco', 'Los Lagos', 'Máfil', 'Mariquina', 'Paillaco', 'Panguipulli', 'La Unión', 'Futrono', 'Lago Ranco', 'Río Bueno']
  }
};

/* ======================== STATE ======================== */
let state = {
  cart: [],
  selectedDate: null,
  selectedTime: null,
  currentMonth: new Date().getMonth(),
  currentYear: new Date().getFullYear(),
  bookings: {},
  user: null,
  lightboxIndex: 0,
  galleryImages: [],
  chatStep: 0,
  chatContext: {},
  admGallery: [],
  admReports: []
};

function loadState() {
  try {
    const saved = localStorage.getItem('almaoutdoor_state');
    if (saved) {
      const parsed = JSON.parse(saved);
      state.cart = parsed.cart || [];
      state.bookings = parsed.bookings || {};
      state.user = parsed.user || null;
    }
  } catch (e) { }
}
function saveState() {
  try {
    localStorage.setItem('almaoutdoor_state', JSON.stringify({
      cart: state.cart,
      bookings: state.bookings,
      user: state.user
    }));
  } catch (e) { }
}

loadState();

/* ======================== UTILITIES ======================== */
function formatCurrency(n) { return '$' + Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.'); }
function getSeason() {
  const m = new Date().getMonth();
  return (m >= 11 || m <= 2) ? 'summer' : 'winter';
}
function getAvailableHours() {
  const season = getSeason();
  const cfg = season === 'summer' ? CONFIG.summer : CONFIG.winter;
  const hours = [];
  for (let h = cfg.startHour; h <= cfg.endHour; h++) {
    hours.push(h.toString().padStart(2, '0') + ':00');
  }
  return hours;
}
function isAvailableDay(date) {
  const day = date.getDay();
  const cfg = getSeason() === 'summer' ? CONFIG.summer : CONFIG.winter;
  return cfg.days.includes(day);
}
function isBookedSlot(dateStr, time) {
  return state.bookings[dateStr] && state.bookings[dateStr].includes(time);
}
function getImagePath(name) { return 'img/aventura/' + name; }

function showToast(msg, type = 'info') {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  const t = document.createElement('div');
  t.className = 'toast ' + type;
  t.innerHTML = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 4000);
}

function openModal(id) {
  document.getElementById(id).classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal(id) {
  document.getElementById(id).classList.remove('open');
  document.body.style.overflow = '';
}

/* ======================== HERO SLIDESHOW ======================== */
function initHeroSlideshow() {
  const container = document.getElementById('heroSlideshow');
  const files = ['GS010036_1765600136075.jpg', 'GS020042_1765680608780.jpg', 'GS010044_1765714794127.jpg', 'GS019998_1765250449439.jpg', 'GS020035_1765401348906.jpg'];
  files.forEach((f, i) => {
    const div = document.createElement('div');
    div.className = 'slide' + (i === 0 ? ' active' : '');
    div.innerHTML = '<img src="' + getImagePath(f) + '" alt="Vuelo parapente">';
    container.appendChild(div);
  });
  let idx = 0;
  setInterval(() => {
    const slides = container.querySelectorAll('.slide');
    slides[idx].classList.remove('active');
    idx = (idx + 1) % slides.length;
    slides[idx].classList.add('active');
  }, 5000);
}

/* ======================== SERVICES ======================== */
function renderServices() {
  const grid = document.getElementById('servicesGrid');
  grid.innerHTML = SERVICES.map(s => {
    const inCart = state.cart.find(c => c.id === s.id);
    return `
      <div class="service-card reveal">
        <div class="service-card-image">
          <img src="${getImagePath(s.image)}" alt="${s.name}" loading="lazy">
          <div class="watermark-overlay"><img src="img/logo/Logo_AlmaOutdoor2.png" alt="AlmaOutdoor"></div>
          ${s.badge ? '<div class="service-card-badge">' + s.badge + '</div>' : ''}
        </div>
        <div class="service-card-body">
          <h3>${s.name}</h3>
          <p>${s.desc}</p>
          <div class="service-card-footer">
            <div class="service-price">${formatCurrency(s.price)}</div>
            <button class="btn btn-primary btn-sm add-to-cart" data-id="${s.id}">
              ${inCart ? '<i class="fas fa-check"></i> Agregado' : '<i class="fas fa-plus"></i> Agregar'}
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

/* ======================== GALLERY ======================== */
function initGallery() {
  const knownImages = [
    'GS010036_1765600136075.jpg', 'GS020042_1765680608780.jpg', 'GS010044_1765714794127.jpg', 'GS019998_1765250449439.jpg', 'GS020035_1765401348906.jpg',
    'GS020044_1765714963381.jpg', 'GS010044_1765714834902.jpg', 'GS010036_1765600175864.jpg', '945156C2-827F-4027-A170-1C4210C2A3C9.jpeg',
    'D338A627-819A-4FDD-8BF4-EDFC3095B711.jpeg', 'E9A688E9-5946-4FFB-AD21-1152CB708D99.jpeg', 'CDF648BC-2582-4912-8778-4C5A1D06F58E.jpeg',
    '75ED75CD-5C93-42CC-B053-59890F532DF0.jpeg', '779AC7D9-0E89-4A68-AD32-FE66F3946BCB.jpeg', '7D7B33CE-5026-452C-890B-5238925FE494.jpeg',
    '81568D74-FAAE-4A4C-9B09-9B847DDB776F.jpeg', '8DD0D3E4-339E-4626-9BEC-806A66A03021.jpeg', 'AEB3C9F9-CA48-4E37-8531-E6FFE26D3167.jpeg',
    'DEF3C70A-AF40-41BA-BE09-3004A4ED2D72.jpeg', 'E46E6376-00C7-4146-804E-03C5C03C35A6.jpeg', 'D281BA16-71FD-44B3-837B-D78E4090B33B.jpeg',
    '9CDCAD44-0417-488C-B103-A8B17C2B434D.jpeg', '21626A53-F261-49BC-BB8B-0DFEDB377798.jpeg', '5405DDF8-7177-4E1A-A8CA-A109338BFE91.jpeg',
    '4A158554-8416-4A84-8E16-8272DAB787BD.jpeg', '647B56D1-53E4-4B5B-A73D-CC7F1CBE92DF.jpeg', '497C1C77-8A48-4850-AD43-505B78EDBC65.jpeg',
    '6D730F15-B727-446C-947B-F86B8AF1C13E.jpeg', '204A79EC-E600-452E-ABE9-084A13365C99.jpeg', '18ED948F-D583-4AA0-BCD3-E29B688C718C.jpeg',
    'www.jpg', 'Snapshot_202512338_151210.jpg', 'Snapshot_202512338_151208.jpg'
  ];
  state.galleryImages = knownImages;
  const grid = document.getElementById('galleryGrid');
  grid.innerHTML = knownImages.slice(0, GALLERY_BATCH_SIZE).map((img, i) => `
    <div class="gallery-item reveal watermarked" data-index="${i}" style="position:relative;">
      <img src="${getImagePath(img)}" alt="Vuelo parapente" loading="lazy">
      <div class="watermark-overlay"><img src="img/logo/Logo_AlmaOutdoor2.png" alt="AlmaOutdoor"></div>
      <div class="gallery-item-overlay"><span><i class="fas fa-expand"></i> Ver imagen</span></div>
    </div>
  `).join('');
}

/* ======================== LIGHTBOX ======================== */
function openLightbox(index) {
  state.lightboxIndex = index;
  const el = document.getElementById('lightbox');
  const content = document.getElementById('lightboxContent');
  content.innerHTML = '<img src="' + getImagePath(state.galleryImages[index]) + '" alt="Galería">';
  el.classList.add('open');
  document.body.style.overflow = 'hidden';
}

/* ======================== CALENDAR ======================== */
function renderCalendar() {
  const { currentMonth: month, currentYear: year } = state;
  const title = document.getElementById('calendarMonthYear');
  const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  title.textContent = months[month] + ' ' + year;

  const grid = document.getElementById('calendarDays');
  grid.innerHTML = '';
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = new Date();

  for (let i = 0; i < firstDay; i++) {
    const d = document.createElement('button');
    d.className = 'calendar-day disabled';
    d.disabled = true;
    grid.appendChild(d);
  }
  for (let d = 1; d <= daysInMonth; d++) {
    const date = new Date(year, month, d);
    const btn = document.createElement('button');
    btn.className = 'calendar-day';
    btn.textContent = d;
    const dateStr = formatDate(date);

    if (date < new Date(today.getFullYear(), today.getMonth(), today.getDate())) {
      btn.classList.add('disabled');
      btn.disabled = true;
    } else if (!isAvailableDay(date)) {
      btn.classList.add('disabled');
      btn.disabled = true;
    } else {
      btn.classList.add('available');
      btn.dataset.date = dateStr;
      btn.addEventListener('click', () => selectDate(dateStr));
    }

    if (dateStr === formatDate(today)) btn.classList.add('today');
    if (state.selectedDate === dateStr) btn.classList.add('selected');

    grid.appendChild(btn);
  }
}

function formatDate(date) {
  return date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0') + '-' + String(date.getDate()).padStart(2, '0');
}

function selectDate(dateStr) {
  state.selectedDate = dateStr;
  state.selectedTime = null;
  renderCalendar();
  renderTimeSlots();
  updateBookingSummary();
}

function renderTimeSlots() {
  const grid = document.getElementById('timeSlotsGrid');
  grid.innerHTML = '';
  if (!state.selectedDate) {
    document.querySelector('#timeSlotsContainer h3').textContent = '\u{1F550} Horarios Disponibles';
    return;
  }
  document.querySelector('#timeSlotsContainer h3').textContent = '\u{1F550} Horarios para ' + state.selectedDate;
  const hours = getAvailableHours();
  hours.forEach(h => {
    const btn = document.createElement('button');
    btn.className = 'time-slot';
    btn.textContent = h;
    if (isBookedSlot(state.selectedDate, h)) {
      btn.classList.add('disabled');
      btn.disabled = true;
    } else {
      btn.addEventListener('click', () => {
        state.selectedTime = h;
        renderTimeSlots();
        updateBookingSummary();
      });
    }
    if (state.selectedTime === h) btn.classList.add('selected');
    grid.appendChild(btn);
  });
}

/* ======================== BOOKING SUMMARY ======================== */
function updateBookingSummary() {
  const items = document.getElementById('bookingSummaryItems');
  const total = document.getElementById('bookingTotal');
  let html = '';
  let t = 0;

  state.cart.forEach(c => {
    const s = SERVICES.find(x => x.id === c.id);
    if (s) {
      html += '<div class="booking-summary-item"><span>' + s.name + ' x' + c.qty + '</span><span>' + formatCurrency(s.price * c.qty) + '</span></div>';
      t += s.price * c.qty;
    }
  });

  if (state.selectedDate) {
    html += '<div class="booking-summary-item"><span>Fecha</span><span>' + state.selectedDate + '</span></div>';
  }
  if (state.selectedTime) {
    html += '<div class="booking-summary-item"><span>Hora</span><span>' + state.selectedTime + '</span></div>';
  }

  if (!html) {
    html = '<p style="color:var(--text-muted);font-size:0.9rem;">Selecciona servicios y fecha para continuar</p>';
  }
  items.innerHTML = html;
  total.textContent = formatCurrency(t);
}

/* ======================== CART ======================== */
function renderCart() {
  const items = document.getElementById('cartItems');
  const count = document.getElementById('cartCount');
  const total = document.getElementById('cartTotalAmount');
  let html = '';
  let t = 0;

  if (state.cart.length === 0) {
    html = '<div class="cart-empty"><i class="fas fa-shopping-bag"></i><p>Tu carrito está vacío</p></div>';
  } else {
    state.cart.forEach((c, i) => {
      const s = SERVICES.find(x => x.id === c.id);
      if (s) {
        html += '<div class="cart-item">';
        html += '<img src="' + getImagePath(s.image) + '" alt="' + s.name + '" class="cart-item-image">';
        html += '<div class="cart-item-info"><h4>' + s.name + '</h4><p>' + s.desc.substring(0, 60) + '...</p></div>';
        html += '<div style="text-align:right;"><div class="cart-item-price">' + formatCurrency(s.price * c.qty) + '</div><button class="cart-item-remove" data-index="' + i + '"><i class="fas fa-times"></i></button></div>';
        html += '</div>';
        t += s.price * c.qty;
      }
    });
  }

  items.innerHTML = html;
  count.textContent = state.cart.reduce((a, c) => a + c.qty, 0);
  total.textContent = formatCurrency(t);
  updateBookingSummary();
  saveState();
}

/* ======================== PAYMENT ======================== */
function showPaymentStep(step) {
  document.querySelectorAll('.payment-step').forEach(el => el.style.display = 'none');
  document.getElementById('paymentStep' + step).style.display = 'block';
  document.querySelectorAll('.step').forEach(s => {
    s.classList.remove('active');
    if (parseInt(s.dataset.step) <= step) s.classList.add('active');
    if (parseInt(s.dataset.step) < step) s.classList.add('completed');
  });
}

function selectPayment(el) {
  document.querySelectorAll('.payment-method').forEach(m => m.classList.remove('selected'));
  el.classList.add('selected');
}

function loadBillingSelects() {
  const pais = document.getElementById('billingPais');
  pais.innerHTML = '<option value="">Seleccionar país</option><option value="CL" selected>Chile</option><option value="AR">Argentina</option><option value="PE">Perú</option><option value="BO">Bolivia</option><option value="CO">Colombia</option><option value="MX">México</option><option value="ES">España</option><option value="US">Estados Unidos</option><option value="OTRO">Otro</option>';

  const region = document.getElementById('billingRegion');
  region.innerHTML = '<option value="">Seleccionar región</option>';
  Object.keys(CHILE_DATA.regiones).forEach(r => {
    region.innerHTML += '<option value="' + r + '">' + r + '</option>';
  });

  pais.addEventListener('change', function () {
    const reg = document.getElementById('billingRegion');
    const com = document.getElementById('billingComuna');
    if (this.value === 'CL') {
      reg.innerHTML = '<option value="">Seleccionar región</option>';
      Object.keys(CHILE_DATA.regiones).forEach(r => {
        reg.innerHTML += '<option value="' + r + '">' + r + '</option>';
      });
      reg.disabled = false;
    } else {
      reg.innerHTML = '<option value="">No aplica</option>';
      reg.disabled = true;
      com.innerHTML = '<option value="">No aplica</option>';
      com.disabled = true;
    }
  });

  region.addEventListener('change', function () {
    const com = document.getElementById('billingComuna');
    if (this.value && CHILE_DATA.regiones[this.value]) {
      com.innerHTML = '<option value="">Seleccionar comuna</option>';
      CHILE_DATA.regiones[this.value].forEach(c => {
        com.innerHTML += '<option value="' + c + '">' + c + '</option>';
      });
      com.disabled = false;
    } else {
      com.innerHTML = '<option value="">No aplica</option>';
      com.disabled = true;
    }
  });
}

function processPayment() {
  const selected = document.querySelector('.payment-method.selected');
  if (!selected) {
    showToast('Por favor selecciona un método de pago', 'error');
    return;
  }
  const btn = document.getElementById('payBtn');
  btn.innerHTML = '<span class="spinner"></span> Procesando...';
  btn.disabled = true;

  setTimeout(() => {
    const total = state.cart.reduce((a, c) => {
      const s = SERVICES.find(x => x.id === c.id);
      return a + (s ? s.price * c.qty : 0);
    }, 0);

    if (state.selectedDate && state.selectedTime) {
      const ds = state.selectedDate;
      if (!state.bookings[ds]) state.bookings[ds] = [];
      state.bookings[ds].push(state.selectedTime);
    }

    const flowUrl = CONFIG.flowUrl + '?token=' + CONFIG.flowToken;
    window.open(flowUrl, '_blank', 'width=800,height=700');

    const confDetails = document.getElementById('confirmationDetails');
    let itemsHtml = '<h4 style="margin-bottom:12px;">Resumen de tu compra:</h4>';
    state.cart.forEach(c => {
      const s = SERVICES.find(x => x.id === c.id);
      if (s) itemsHtml += '<div style="display:flex;justify-content:space-between;padding:6px 0;"><span>' + s.name + ' x' + c.qty + '</span><span>' + formatCurrency(s.price * c.qty) + '</span></div>';
    });
    if (state.selectedDate) itemsHtml += '<div style="display:flex;justify-content:space-between;padding:6px 0;"><span>Fecha</span><span>' + state.selectedDate + '</span></div>';
    if (state.selectedTime) itemsHtml += '<div style="display:flex;justify-content:space-between;padding:6px 0;"><span>Hora</span><span>' + state.selectedTime + '</span></div>';
    itemsHtml += '<div style="display:flex;justify-content:space-between;padding:8px 0;border-top:1px solid var(--border);font-weight:800;font-size:1.1rem;"><span>Total pagado</span><span style="color:var(--primary);">' + formatCurrency(total) + '</span></div>';
    itemsHtml += '<div style="margin-top:16px;padding:12px;background:var(--primary);color:#fff;border-radius:var(--radius-sm);text-align:center;">';
    itemsHtml += '<p>Método de pago: ' + selected.dataset.method + '</p>';
    itemsHtml += '<p style="font-size:0.85rem;margin-top:4px;">ID Transacción: ALC-' + Date.now().toString(36).toUpperCase() + '</p></div>';
    itemsHtml += '<div style="margin-top:12px;font-size:0.85rem;color:var(--text-muted);"><i class="fas fa-envelope"></i> Te enviamos los detalles a tu correo<br><i class="fab fa-whatsapp"></i> También recibirás confirmación por WhatsApp</div>';
    confDetails.innerHTML = itemsHtml;

    const salesData = {
      client: document.getElementById('billingNombres').value + ' ' + document.getElementById('billingApellidos').value,
      services: state.cart.map(c => { const s = SERVICES.find(x => x.id === c.id); return s ? s.name + ' x' + c.qty : ''; }).join(', '),
      date: state.selectedDate || new Date().toISOString().split('T')[0],
      time: state.selectedTime || new Date().toTimeString().split(' ')[0].substring(0, 5),
      total: total,
      method: selected.dataset.method,
      email: document.getElementById('billingEmail').value
    };
    const sales = JSON.parse(localStorage.getItem('almaoutdoor_sales') || '[]');
    sales.push(salesData);
    localStorage.setItem('almaoutdoor_sales', JSON.stringify(sales));

    sendConfirmation(total, selected.dataset.method, salesData);

    showPaymentStep(3);
    state.cart = [];
    renderCart();
    saveState();
    renderCalendar();
    renderTimeSlots();

    btn.innerHTML = '<i class="fas fa-lock"></i> Pagar con Flow';
    btn.disabled = false;

    showToast('\u2705 Reserva confirmada! Revisa tu correo y WhatsApp', 'success');
  }, 2000);
}

function sendConfirmation(total, method, salesData) {
  const email = document.getElementById('billingEmail').value;
  const nombre = document.getElementById('billingNombres').value;
  const apellido = document.getElementById('billingApellidos').value;
  const nombreCompleto = nombre + ' ' + apellido;

  const servicesList = salesData ? salesData.services : (
    state.cart.map(c => {
      const s = SERVICES.find(x => x.id === c.id);
      return s ? s.name + ' x' + c.qty + ' (' + formatCurrency(s.price * c.qty) + ')' : '';
    }).join('\n')
  );

  const bookingInfo = state.selectedDate && state.selectedTime ? '\nFecha: ' + state.selectedDate + '\nHora: ' + state.selectedTime : '';
  const msg = encodeURIComponent(
    '\u2708 *Nueva Reserva AlmaOutdoor Chile*\n\n' +
    'Cliente: ' + nombreCompleto + '\n' +
    'Email: ' + email + '\n' +
    'Teléfono: ' + (document.getElementById('billingTelefono').value || 'No registrado') + '\n' +
    'Servicios:\n' + servicesList + '\n' +
    'Total: ' + formatCurrency(total) + '\n' +
    'Método de pago: ' + method + '\n' +
    bookingInfo + '\n\n' +
    '\u2705 *Reserva Confirmada*'
  );

  window.open('https://wa.me/' + CONFIG.whatsapp + '?text=' + msg, '_blank');

  const mailto = 'mailto:' + email + '?cc=' + CONFIG.email + '&subject=' + encodeURIComponent('Confirmación de Reserva - AlmaOutdoor Chile') + '&body=' + encodeURIComponent(
    'Hola ' + nombreCompleto + ',\n\n' +
    'Tu reserva en AlmaOutdoor Chile ha sido confirmada.\n\n' +
    'Servicios:\n' + servicesList + '\n' +
    'Total pagado: ' + formatCurrency(total) + '\n' +
    'Método de pago: ' + method + '\n' +
    bookingInfo + '\n\n' +
    '¡Gracias por elegirnos!\n' +
    'Equipo AlmaOutdoor Chile\n' +
    CONFIG.whatsapp + ' | ' + CONFIG.email
  );
  const ma = document.createElement('a');
  ma.href = mailto;
  ma.style.display = 'none';
  document.body.appendChild(ma);
  ma.click();
  setTimeout(() => ma.remove(), 1000);
}

/* ======================== AUTH SYSTEM ======================== */
function initAuth() {
  document.querySelectorAll('.auth-tab').forEach(tab => {
    tab.addEventListener('click', function () {
      document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
      this.classList.add('active');
      document.getElementById(this.dataset.tab + 'Form').classList.add('active');
    });
  });

  document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value.trim();
    const code = document.getElementById('loginCode').value.trim();

    if (email === CONFIG.adminEmail && code === CONFIG.adminPass) {
      state.user = { email, role: 'admin', name: 'Administrador' };
      saveState();
      closeModal('authModal');
      showToast('\u2705 Bienvenido Administrador', 'success');
      window.location.href = 'admin.html';
      return;
    }

    const users = JSON.parse(localStorage.getItem('almaoutdoor_users') || '[]');
    const user = users.find(u => u.email === email);
    if (!user) {
      showToast('Email no registrado. Solicita un código primero.', 'error');
      return;
    }
    if (code === user.code) {
      state.user = { email: user.email, role: 'user', name: user.name };
      saveState();
      closeModal('authModal');
      showToast('\u2705 Bienvenido ' + user.name, 'success');
      window.location.href = 'user.html';
    } else {
      showToast('Código incorrecto. Intenta nuevamente.', 'error');
    }
  });

  document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const inputs = this.querySelectorAll('input');
    const name = inputs[0].value.trim() + ' ' + inputs[1].value.trim();
    const email = inputs[2].value.trim();
    const phone = inputs[3].value.trim();

    const code = Math.floor(100000 + Math.random() * 900000).toString();
    const users = JSON.parse(localStorage.getItem('almaoutdoor_users') || '[]');
    if (users.find(u => u.email === email)) {
      showToast('Este email ya está registrado', 'error');
      return;
    }
    users.push({ name, email, phone, code });
    localStorage.setItem('almaoutdoor_users', JSON.stringify(users));

    const msg = encodeURIComponent('Tu código de acceso a AlmaOutdoor Chile es: ' + code + '\n\nIngresa con tu email: ' + email);
    window.open('https://wa.me/' + CONFIG.whatsapp + '?text=' + msg, '_blank');

    const mailto = 'mailto:' + email + '?subject=' + encodeURIComponent('Código de Acceso - AlmaOutdoor Chile') + '&body=' + encodeURIComponent(
      'Hola ' + name + ',\n\nTu código de acceso a AlmaOutdoor Chile es: ' + code + '\n\nIngresa con tu email: ' + email + '\n\n¡Gracias por registrarte!'
    );
    const ma = document.createElement('a');
    ma.href = mailto;
    ma.style.display = 'none';
    document.body.appendChild(ma);
    ma.click();
    setTimeout(() => ma.remove(), 1000);

    showToast('Código enviado a tu correo y WhatsApp', 'success');
    document.querySelector('[data-tab="login"]').click();
    document.getElementById('loginEmail').value = email;
  });

  document.getElementById('requestCodeLink').addEventListener('click', function (e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value.trim();
    if (!email) { showToast('Ingresa tu email primero', 'error'); return; }

    const users = JSON.parse(localStorage.getItem('almaoutdoor_users') || '[]');
    const user = users.find(u => u.email === email);
    if (!user) { showToast('Email no registrado. Regístrate primero.', 'error'); return; }

    const code = Math.floor(100000 + Math.random() * 900000).toString();
    user.code = code;
    localStorage.setItem('almaoutdoor_users', JSON.stringify(users));

    const msg = encodeURIComponent('Tu nuevo código de acceso a AlmaOutdoor Chile es: ' + code);
    window.open('https://wa.me/' + CONFIG.whatsapp + '?text=' + msg, '_blank');

    const mailto = 'mailto:' + email + '?subject=' + encodeURIComponent('Nuevo Código de Acceso - AlmaOutdoor Chile') + '&body=' + encodeURIComponent('Tu nuevo código de acceso es: ' + code);
    const ma = document.createElement('a');
    ma.href = mailto;
    ma.style.display = 'none';
    document.body.appendChild(ma);
    ma.click();
    setTimeout(() => ma.remove(), 1000);

    showToast('Nuevo código enviado a tu correo y WhatsApp', 'success');
  });
}

/* ======================== WHATSAPP CHAT BOT ======================== */
const CHAT_FLOW = {
  0: {
    msg: '¡Hola! Soy el asistente de AlmaOutdoor Chile. ¿En qué puedo ayudarte?', options: [
      { text: '\u2708 Ver servicios y precios', next: 1 },
      { text: '\u{1F4C5} Consultar disponibilidad', next: 2 },
      { text: '\u{1F91D} Hablar con un asesor', next: 3 }
    ]
  },
  1: {
    msg: 'Estos son nuestros servicios:\n\n\u2708 Vuelo Individual: $65.000\n\u2708 Vuelo x 2: $119.980\n\u{1F4F7} Fotos GoPro 360: $20.000\n\u{1F393} Curso Piloto: $1.500.000\n\n¿Quieres reservar alguno?', options: [
      { text: '\u{1F4C5} Consultar disponibilidad', next: 2 },
      { text: '\u{1F4B3} Ir al carrito', next: 0, action: 'cart' }
    ]
  },
  2: {
    msg: 'Nuestros horarios son:\n\n\u2744\ufe0f Invierno (Jun-Ago): Mié-Dom 12:00-16:00\n\u2600\ufe0f Verano (Dic-Feb): Mié-Dom 11:00-20:00\n\nPuedes revisar el calendario en nuestra web para fechas exactas.', options: [
      { text: '\u{1F519} Volver al inicio', next: 0 },
      { text: '\u{1F4B3} Ir a pagar ahora', next: 0, action: 'checkout' }
    ]
  },
  3: {
    msg: 'Te conectamos con un asesor en WhatsApp para atención personalizada.', options: [
      { text: '\u{1F4AC} Ir a WhatsApp', next: 0, action: 'whatsapp' }
    ]
  }
};

function addChatMessage(text, type = 'bot') {
  const msgs = document.getElementById('chatMessages');
  const div = document.createElement('div');
  div.className = 'chat-msg ' + type;
  div.textContent = text;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function addChatOptions(options) {
  const msgs = document.getElementById('chatMessages');
  const div = document.createElement('div');
  div.className = 'chat-msg bot';
  div.style.background = 'transparent';
  div.style.border = 'none';
  div.style.padding = '4px 0';
  options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'btn btn-secondary btn-sm';
    btn.style.margin = '4px';
    btn.style.fontSize = '0.85rem';
    btn.textContent = opt.text;
    btn.addEventListener('click', () => handleChatOption(opt));
    div.appendChild(btn);
  });
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function handleChatOption(opt) {
  addChatMessage(opt.text, 'user');
  if (opt.action === 'cart') {
    openModal('cartModal');
  } else if (opt.action === 'checkout') {
    document.querySelector('#reservas a').click();
    closeModal('paymentModal');
    window.location.hash = '#reservas';
  } else if (opt.action === 'whatsapp') {
    window.open('https://wa.me/' + CONFIG.whatsapp, '_blank');
  }
  state.chatStep = opt.next;
  setTimeout(() => {
    const flow = CHAT_FLOW[opt.next];
    if (flow) {
      addChatMessage(flow.msg);
      if (flow.options) addChatOptions(flow.options);
    }
  }, 500);
}

function handleChatMessage(text) {
  const lower = text.toLowerCase();
  if (lower.includes('hola') || lower.includes('buenas') || lower.includes('hey')) {
    state.chatStep = 0;
    const flow = CHAT_FLOW[0];
    addChatMessage('¡Hola! ¿Cómo estás?');
    setTimeout(() => {
      addChatMessage(flow.msg);
      addChatOptions(flow.options);
    }, 500);
  } else if (lower.includes('precio') || lower.includes('servicio') || lower.includes('costo')) {
    handleChatOption({ text: '\u2708 Ver servicios y precios', next: 1 });
  } else if (lower.includes('dispon') || lower.includes('horario') || lower.includes('fecha')) {
    handleChatOption({ text: '\u{1F4C5} Consultar disponibilidad', next: 2 });
  } else if (lower.includes('asesor') || lower.includes('persona') || lower.includes('hablar')) {
    handleChatOption({ text: '\u{1F91D} Hablar con un asesor', next: 3 });
  } else if (lower.includes('gracias') || lower.includes('bye') || lower.includes('chao')) {
    addChatMessage('¡Gracias a ti! Vuelve cuando quieras. \u2708\u2728');
    setTimeout(() => {
      addChatMessage(CHAT_FLOW[0].msg);
      addChatOptions(CHAT_FLOW[0].options);
      state.chatStep = 0;
    }, 1000);
  } else {
    addChatMessage('No entendí bien. ¿Puedes elegir una opción?');
    setTimeout(() => {
      const flow = CHAT_FLOW[state.chatStep] || CHAT_FLOW[0];
      addChatOptions(flow.options);
    }, 500);
  }
}

/* ======================== THEME ======================== */
function initTheme() {
  const saved = localStorage.getItem('almaoutdoor_theme');
  const html = document.documentElement;
  const btn = document.getElementById('themeToggle');
  if (saved) html.dataset.theme = saved;
  btn.innerHTML = html.dataset.theme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';

  btn.addEventListener('click', () => {
    const isDark = html.dataset.theme === 'dark';
    html.dataset.theme = isDark ? 'light' : 'dark';
    btn.innerHTML = isDark ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
    localStorage.setItem('almaoutdoor_theme', html.dataset.theme);
    window.location.reload();
  });
}

/* ======================== SCROLL REVEAL ======================== */
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ======================== EVENT BINDING ======================== */
function bindEvents() {
  // Hamburger
  document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('nav').classList.toggle('open');
  });

  // Nav links - close mobile menu
  document.querySelectorAll('.nav a').forEach(a => {
    a.addEventListener('click', () => {
      document.getElementById('nav').classList.remove('open');
    });
  });

  // Cart button
  document.getElementById('cartBtn').addEventListener('click', () => {
    renderCart();
    openModal('cartModal');
  });

  // Login button
  document.getElementById('loginBtn').addEventListener('click', () => {
    openModal('authModal');
  });

  // Calendar nav
  document.getElementById('prevMonth').addEventListener('click', () => {
    state.currentMonth--;
    if (state.currentMonth < 0) { state.currentMonth = 11; state.currentYear--; }
    renderCalendar();
  });
  document.getElementById('nextMonth').addEventListener('click', () => {
    state.currentMonth++;
    if (state.currentMonth > 11) { state.currentMonth = 0; state.currentYear++; }
    renderCalendar();
  });

  // Add to cart
  document.addEventListener('click', function (e) {
    const btn = e.target.closest('.add-to-cart');
    if (btn) {
      const id = parseInt(btn.dataset.id);
      const existing = state.cart.find(c => c.id === id);
      if (existing) {
        existing.qty++;
      } else {
        state.cart.push({ id, qty: 1 });
      }
      renderCart();
      saveState();
      showToast('Agregado al carrito', 'success');
      renderServices();
    }

    // Cart remove
    if (e.target.closest('.cart-item-remove')) {
      const idx = parseInt(e.target.closest('.cart-item-remove').dataset.index);
      state.cart.splice(idx, 1);
      renderCart();
      saveState();
    }

    // Modal close buttons
    if (e.target.dataset.close) {
      closeModal(e.target.dataset.close);
    }

    // Gallery click
    const galleryItem = e.target.closest('.gallery-item');
    if (galleryItem) {
      const idx = parseInt(galleryItem.dataset.index);
      if (!isNaN(idx)) openLightbox(idx);
    }
  });

  // Cart checkout
  document.getElementById('cartCheckoutBtn').addEventListener('click', () => {
    if (state.cart.length === 0) { showToast('Agrega servicios al carrito', 'error'); return; }
    closeModal('cartModal');
    openCheckout();
  });

  // Booking checkout
  document.getElementById('bookingCheckoutBtn').addEventListener('click', () => {
    if (state.cart.length === 0) { showToast('Agrega servicios al carrito primero', 'error'); return; }
    if (!state.selectedDate) { showToast('Selecciona una fecha', 'error'); return; }
    if (!state.selectedTime) { showToast('Selecciona un horario', 'error'); return; }
    openCheckout();
  });

  // Pay button
  document.getElementById('payBtn').addEventListener('click', processPayment);

  // WhatsApp float
  document.getElementById('whatsappFloat').addEventListener('click', () => {
    document.getElementById('chatWidget').classList.toggle('open');
    if (document.getElementById('chatWidget').classList.contains('open')) {
      state.chatStep = 0;
    }
  });

  document.getElementById('chatClose').addEventListener('click', () => {
    document.getElementById('chatWidget').classList.remove('open');
  });

  document.getElementById('chatSend').addEventListener('click', sendChatMessage);
  document.getElementById('chatInput').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') sendChatMessage();
  });

  // Contact form
  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    showToast('Mensaje enviado. Te responderemos a la brevedad.', 'success');
    this.reset();
  });

  // Billing form
  document.getElementById('billingForm').addEventListener('submit', function (e) {
    e.preventDefault();
    showPaymentStep(2);
    renderPaymentSummary();
  });

  // Lightbox
  document.getElementById('lbPrev').addEventListener('click', () => {
    state.lightboxIndex = (state.lightboxIndex - 1 + state.galleryImages.length) % state.galleryImages.length;
    document.getElementById('lightboxContent').innerHTML = '<img src="' + getImagePath(state.galleryImages[state.lightboxIndex]) + '" alt="Galería">';
  });
  document.getElementById('lbNext').addEventListener('click', () => {
    state.lightboxIndex = (state.lightboxIndex + 1) % state.galleryImages.length;
    document.getElementById('lightboxContent').innerHTML = '<img src="' + getImagePath(state.galleryImages[state.lightboxIndex]) + '" alt="Galería">';
  });

  // Keyboard navigation for lightbox
  document.addEventListener('keydown', function (e) {
    if (document.getElementById('lightbox').classList.contains('open')) {
      if (e.key === 'ArrowLeft') document.getElementById('lbPrev').click();
      if (e.key === 'ArrowRight') document.getElementById('lbNext').click();
      if (e.key === 'Escape') closeModal('lightbox');
    }
  });
}

function sendChatMessage() {
  const input = document.getElementById('chatInput');
  const text = input.value.trim();
  if (!text) return;
  input.value = '';
  handleChatMessage(text);
}

function openCheckout() {
  loadBillingSelects();
  const total = state.cart.reduce((a, c) => {
    const s = SERVICES.find(x => x.id === c.id);
    return a + (s ? s.price * c.qty : 0);
  }, 0);

  document.getElementById('paymentTotal').textContent = formatCurrency(total);
  showPaymentStep(1);
  openModal('paymentModal');
}

function renderPaymentSummary() {
  const items = document.getElementById('paymentSummaryItems');
  let html = '';
  state.cart.forEach(c => {
    const s = SERVICES.find(x => x.id === c.id);
    if (s) html += '<div style="display:flex;justify-content:space-between;padding:6px 0;"><span>' + s.name + ' x' + c.qty + '</span><span>' + formatCurrency(s.price * c.qty) + '</span></div>';
  });
  if (state.selectedDate) html += '<div style="display:flex;justify-content:space-between;padding:6px 0;color:var(--text-muted);"><span>Fecha</span><span>' + state.selectedDate + '</span></div>';
  if (state.selectedTime) html += '<div style="display:flex;justify-content:space-between;padding:6px 0;color:var(--text-muted);"><span>Hora</span><span>' + state.selectedTime + '</span></div>';
  items.innerHTML = html;

  const total = state.cart.reduce((a, c) => {
    const s = SERVICES.find(x => x.id === c.id);
    return a + (s ? s.price * c.qty : 0);
  }, 0);
  document.getElementById('paymentTotal').textContent = formatCurrency(total);
  document.getElementById('paymentSummaryItems').innerHTML = items.innerHTML;
}

/* ======================== INIT ======================== */
function init() {
  initTheme();
  initHeroSlideshow();
  renderServices();
  initGallery();
  renderCalendar();
  renderTimeSlots();
  updateBookingSummary();
  renderCart();
  bindEvents();
  initReveal();
  initAuth();

  // Start chat
  setTimeout(() => {
    const flow = CHAT_FLOW[0];
    addChatOptions(flow.options);
  }, 1000);
}

document.addEventListener('DOMContentLoaded', init);

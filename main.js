// ═══════════ DATA ═══════════
const products = [
  {
    id: 0, icon: '🔨', emoji: '🔩',
    name: 'Manual Rolling Shutters',
    tagline: 'Reliable, low-cost security for everyday use',
    desc: 'Sturdy manual shutters with chain-pulley or push-up operation – perfect for shops, offices and low-budget projects.',
    longDesc: 'Our manual rolling shutters are the workhorses of everyday security. Fabricated from heavy-gauge galvanized iron (GI) or mild steel (MS), they offer robust protection with minimal maintenance. Ideal for shops, small offices, and residential garages where automation isn\'t required. The chain-pulley mechanism ensures smooth, effortless operation even for wide openings.',
    benefits: ['Heavy-duty GI or MS construction', 'Smooth chain-pulley or spring-assisted operation', 'Customizable to any opening width or height', 'Powder-coated or enamel paint finish options', 'Low maintenance – no electricity needed', 'Cost-effective security solution'],
    applications: ['Retail shops and small showrooms', 'Office entrances', 'Residential garages', 'Godowns and storage rooms', 'Pharmacy and medical stores'],
    specs: [
      ['Width Range', 'Up to 20 ft (custom)'],
      ['Height Range', 'Up to 14 ft (custom)'],
      ['Material', 'GI (Galvanized Iron) / MS (Mild Steel)'],
      ['Operation', 'Chain-pulley / Push-up / Spring-assisted'],
      ['Finish', 'Powder-coated / Enamel / Galvanized'],
      ['Locking', 'Bottom latch with padlock provision'],
      ['Slat Profile', '80mm or 100mm curved'],
      ['Warranty', '1 year on installation']
    ]
  },
  {
    id: 1, icon: '⚡', emoji: '🤖',
    name: 'Motorized / Automatic Shutters',
    tagline: 'Push-button convenience with premium security',
    desc: 'Fully automated shutters with remote control, app integration, and safety sensors for commercial and high-traffic areas.',
    longDesc: 'Motorized rolling shutters combine the security of heavy-gauge steel with the convenience of fully automatic operation. Powered by premium tubular motors with soft start/stop technology, they\'re perfect for high-traffic commercial spaces, showroom fronts, and large industrial openings where manual operation isn\'t practical.',
    benefits: ['Remote control and smartphone app integration', 'Soft start/stop for quiet, smooth operation', 'Auto-stop safety sensors to prevent accidents', 'Fire-safety override option available', 'Backup battery for power-cut operation', 'Anti-theft coded remote system'],
    applications: ['Retail showrooms and malls', 'Bank branches and ATMs', 'Hospitals and healthcare facilities', 'High-traffic commercial buildings', 'Large industrial and warehouse gates'],
    specs: [
      ['Width Range', 'Up to 25 ft (custom)', ],
      ['Height Range', 'Up to 16 ft'],
      ['Motor Type', 'Tubular / Side-mount motor'],
      ['Motor Brands', 'Crompton / Havells / Imported'],
      ['Control', 'Remote / Wall switch / App / Loop detector'],
      ['Power', '220V AC / Battery backup'],
      ['Safety', 'Auto-stop / Obstacle sensor'],
      ['Warranty', '2 years motor, 1 year installation']
    ]
  },
  {
    id: 2, icon: '🏠', emoji: '🔐',
    name: 'Residential Shutters',
    tagline: 'Secure, quiet shutters for homes and garages',
    desc: 'Low-noise, lightweight shutters designed for residential garages, building entrances, and home security applications.',
    longDesc: 'Our residential rolling shutters are specifically designed for homes – quieter operation, sleeker profiles, and finish options that complement your building\'s aesthetic. Available in both manual and motorized versions, they\'re perfect for garages, building gates, terrace openings, and shop-at-home fronts.',
    benefits: ['Low-noise spring or motor mechanism', 'Slim, sleek profile for residential aesthetics', 'Weather-sealed bottom bar for dust/water resistance', 'Corrosion-resistant aluminium or GI options', 'Multiple colour and finish options', 'Child-safe auto-stop feature (motorized)'],
    applications: ['Home garages and parking areas', 'Residential building entrances', 'Bungalow gates and perimeters', 'Shop-from-home front openings', 'Terrace and balcony enclosures'],
    specs: [
      ['Width Range', 'Up to 15 ft'],
      ['Height Range', 'Up to 10 ft'],
      ['Material', 'Aluminium / GI'],
      ['Operation', 'Spring / Manual / Motorized'],
      ['Noise Level', 'Low (spring-balanced)'],
      ['Finish', 'Any powder-coat colour'],
      ['Lock', 'Built-in cylinder lock option'],
      ['Warranty', '1 year']
    ]
  },
  {
    id: 3, icon: '🏪', emoji: '🏬',
    name: 'Commercial Shutters',
    tagline: 'Premium security for shops, malls & showrooms',
    desc: 'Heavy-duty shutters engineered for daily commercial use – stylish, strong, and built for high footfall environments.',
    longDesc: 'Commercial rolling shutters face the toughest daily workload – hundreds of open/close cycles, exposure to weather, and the need for reliable security after hours. Our commercial-grade shutters use thicker slat profiles, heavy-duty guides, and industrial-grade hardware to handle this demand year after year.',
    benefits: ['Extra-thick slat profiles for heavy-duty use', 'High-cycle rated (500,000+ cycles)', 'Smooth operation under daily commercial use', 'Visibility options – punched or perforated slats', 'Full-height vision panel option', 'Grille shutters for ventilation and visibility'],
    applications: ['Retail shops and boutiques', 'Showroom and gallery fronts', 'Shopping mall unit shutters', 'Restaurant and food court fronts', 'Hotel and hospitality entrances'],
    specs: [
      ['Width Range', 'Up to 22 ft'],
      ['Height Range', 'Up to 14 ft'],
      ['Slat Type', 'Solid / Perforated / Vision'],
      ['Material', 'MS / GI / Aluminium'],
      ['Operation', 'Chain / Motorized'],
      ['Cycle Rating', '500,000+ open/close cycles'],
      ['Guides', 'Heavy-duty rolled steel guide channels'],
      ['Warranty', '2 years']
    ]
  },
  {
    id: 4, icon: '🏭', emoji: '⚙️',
    name: 'Industrial Shutters',
    tagline: 'Heavy-duty doors for factories & warehouses',
    desc: 'Large-span industrial shutters built from heavy-gauge MS for warehouses, factories, loading docks, and fire-rated applications.',
    longDesc: 'Industrial rolling shutters are built for extreme conditions – large openings, heavy use, and demanding environments. We fabricate industrial shutters using heavy-gauge mild steel with robust spring or gear-motor mechanisms, capable of spanning openings up to 30 feet wide. Available with fire-rated options for regulatory compliance.',
    benefits: ['Heavy-gauge MS for maximum security', 'Spans up to 30 ft wide openings', 'Fire-rated options available (90/120 min)', 'Insulated options for temperature control', 'High-speed industrial motor options', 'Forklift-safe bottom bar design'],
    applications: ['Warehouses and godowns', 'Factory and production unit entrances', 'Loading bays and truck docks', 'Cold storage and refrigeration units', 'Fire-exit and emergency shutters'],
    specs: [
      ['Width Range', 'Up to 30 ft (custom)'],
      ['Height Range', 'Up to 20 ft'],
      ['Material', 'Heavy-gauge MS (1.2–2.0mm)'],
      ['Spring / Motor', 'Industrial-rated gear motor'],
      ['Fire Rating', '90 / 120 min FR option'],
      ['Wind Load', 'Engineered for high wind zones'],
      ['Finish', 'Primer + Industrial paint'],
      ['Warranty', '2 years on material & installation']
    ]
  },
  {
    id: 5, icon: '🔧', emoji: '🛠️',
    name: 'Parts & Accessories',
    tagline: 'Genuine parts, springs, locks, motors & more',
    desc: 'We supply original spare parts for all shutter types – springs, side guides, locks, motors, remote controls, and full repair kits.',
    longDesc: 'Keep your rolling shutter operating at its best with genuine replacement parts and accessories. We stock and supply a comprehensive range of spare parts for all shutter types – whether you need a replacement spring, a new motor, a set of side guides, or a remote control for your automated shutter.',
    benefits: ['Genuine parts for all brands and types', 'Same-day delivery for in-stock items', 'Experienced repair technicians available', 'Annual Maintenance Contracts (AMC)', 'Remote and app upgrade kits', 'Emergency repair service – 24 hours'],
    applications: ['Spring replacement for manual shutters', 'Motor and remote upgrade kits', 'Side guide and bottom bar replacement', 'Lock and latch repair/replacement', 'Full shutter overhaul and refurbishment', 'AMC service for housing societies'],
    specs: [
      ['Springs', 'Torsion / Extension – all sizes'],
      ['Motors', 'Tubular 100N / 150N / 200N'],
      ['Remotes', '2/4-channel rolling code remotes'],
      ['Guides', 'Rolled steel, all standard sizes'],
      ['Locks', 'Mortise / Padlock-latch / Cylinder'],
      ['Bottom Bars', 'T-section / Angle bar / Weatherseal'],
      ['Service Hours', '9am – 7pm, Mon–Sat'],
      ['Emergency', '24-hour repair available']
    ]
  }
];

const projects = [
  { cat: 'shops', icon: '🏪', title: 'Motorized Shutters for Textile Showroom', location: 'Dadar, Mumbai', desc: 'Installed 3 automated MS shutters with remote control and bottom safety sensor for a busy textile retail store.' },
  { cat: 'industrial', icon: '🏭', title: 'Heavy-Duty Industrial Gate', location: 'Bhiwandi, Thane', desc: '20-ft wide industrial rolling shutter with gear motor for a large logistics warehouse.' },
  { cat: 'homes', icon: '🏠', title: 'Residential Garage Shutters', location: 'Thane West', desc: 'Motorized aluminium shutter with 2-channel remote and battery backup for residential garage.' },
  { cat: 'commercial', icon: '🏢', title: 'Mall Unit Shutters – 12 Units', location: 'Navi Mumbai', desc: 'Supplied and installed commercial perforated shutters for all 12 retail units in a new mall development.' },
  { cat: 'shops', icon: '🔐', title: 'Manual Security Shutter – Pharmacy', location: 'Andheri, Mumbai', desc: 'Robust MS manual shutter with anti-theft bottom latch for a ground-floor pharmacy.' },
  { cat: 'industrial', icon: '⚙️', title: 'Fire-Rated Shutter – Factory', location: 'Pune Industrial Zone', desc: 'Installed a 90-minute fire-rated rolling shutter for a pharmaceutical manufacturing unit.' },
  { cat: 'commercial', icon: '🏬', title: 'Vision Panel Shutters – Showroom', location: 'Lower Parel, Mumbai', desc: 'Half-vision commercial shutters for a premium automobile showroom – stylish and secure.' },
  { cat: 'homes', icon: '🏡', title: 'Building Gate – 4 Shutters', location: 'Mulund, Mumbai', desc: 'Residential building compound gate with 4 manual shutters and central locking.' },
  { cat: 'shops', icon: '☕', title: 'Cafe Front – Manual Shutter', location: 'Bandra, Mumbai', desc: 'Slim-profile manual rolling shutter in custom RAL colour to match the café\'s branding.' },
];

const blogPosts = [
  {
    id: 0, icon: '📖', category: 'Buying Guide',
    date: 'Dec 2024',
    title: 'How to Choose the Right Rolling Shutter for Your Shop',
    excerpt: 'Not all shutters are equal. Here\'s how to evaluate material, size, operation type, and cost to get the best shutter for your needs.',
    content: `
      <p>Choosing a rolling shutter for your shop is not as simple as picking the cheapest quote. The right shutter depends on your opening size, daily usage, security requirements, and budget. Here's a structured guide to help you decide.</p>
      <h2>1. Determine Your Opening Size</h2>
      <p>Measure the width and height of your opening accurately. Add 6–8 inches on each side for the guide channels. The larger the opening, the heavier the shutter – and the more important it becomes to use a spring-balanced or motorized mechanism for easy operation.</p>
      <h2>2. Choose the Right Material</h2>
      <p>For most shops, galvanized iron (GI) or mild steel (MS) are the best choices. GI is corrosion-resistant and great for coastal areas. MS is stronger but needs a quality paint finish. Aluminium is ideal for aesthetics and lightweight residential use, but less suitable for high-security commercial applications.</p>
      <h2>3. Manual vs Motorized</h2>
      <p>For single-shift shops with low traffic, a manual chain-pulley shutter works perfectly well. If you open and close your shutter more than 5–6 times daily, or if it's a wide shutter (over 12 ft), we strongly recommend motorizing. The motor pays for itself in convenience and reduced wear.</p>
      <h2>4. Consider Security Features</h2>
      <p>Always ask your installer to include: bottom latch with padlock provision for manual shutters, anti-tamper guide channels to prevent shutter lifting, floor-anchor bolt for additional security, and remote anti-coding for motorized shutters.</p>
      <h2>5. Ask About After-Sales Service</h2>
      <p>A shutter is a long-term investment. Always choose a supplier who offers AMC contracts, spare parts availability, and emergency repair service. Goyal Rolling Shutters offers all three – get in touch to discuss.</p>
    `
  },
  {
    id: 1, icon: '⚡', category: 'Comparison',
    date: 'Nov 2024',
    title: 'Automatic vs Manual Shutters: Which is Better for You?',
    excerpt: 'A practical comparison of manual and motorized rolling shutters – cost, convenience, maintenance, and when to choose which.',
    content: `
      <p>The most common question we get from shop and property owners is: "Should I go manual or motorized?" Here's an honest comparison to help you decide.</p>
      <h2>Manual Shutters</h2>
      <p>Manual shutters use a chain-pulley system (for heavier shutters) or a spring-pull mechanism (for lighter ones). They require no electricity and have fewer parts that can fail. Maintenance is minimal – just occasional lubrication of the guides and spring.</p>
      <p>Manual shutters are the right choice when: the opening is under 10 ft wide, the shutter is opened/closed 1–3 times daily, power cuts are frequent in your area, and budget is a primary concern.</p>
      <h2>Motorized Shutters</h2>
      <p>Motorized shutters run on a tubular or side-mounted motor with remote control. High-quality motors (Crompton, Havells, or imported brands) are rated for 500,000+ cycles and will last 10–15 years with basic maintenance.</p>
      <p>Motorized shutters are the right choice when: the opening is over 12 ft, the shutter is operated frequently, the property is commercial with multiple users, or you want smartphone/app control and safety sensors.</p>
      <h2>Cost Comparison</h2>
      <p>Manual shutter: Lower upfront cost, minimal running cost. Motorized shutter: Higher upfront cost, small electricity cost. Long-term: Motorized systems pay off in convenience and reduced physical wear.</p>
      <h2>Our Recommendation</h2>
      <p>For shops, showrooms, and commercial properties: go motorized. For small residential garages and budget shop applications: manual is perfectly fine. If you're unsure, call us – we'll give you a no-pressure recommendation based on your specific situation.</p>
    `
  },
  {
    id: 2, icon: '🔧', category: 'Maintenance',
    date: 'Oct 2024',
    title: 'Maintenance Tips to Keep Your Rolling Shutter Running Smoothly',
    excerpt: 'Simple, practical maintenance steps any shop or home owner can follow to extend the life of their rolling shutter.',
    content: `
      <p>A rolling shutter is a mechanical system – and like any machine, it performs better and lasts longer with regular maintenance. Here's what you should do (and when).</p>
      <h2>Monthly: Visual Inspection</h2>
      <ul>
        <li>Check for bent or damaged slats and replace promptly</li>
        <li>Inspect guide channels for debris, rust, or deformation</li>
        <li>Check the bottom bar weatherseal for wear</li>
        <li>Test the lock mechanism for smooth operation</li>
      </ul>
      <h2>Quarterly: Lubrication</h2>
      <p>Apply a light machine oil or dry lubricant (avoid heavy grease which attracts dust) to: guide channels on both sides, spring shaft bearings (for manual shutters), motor drive shaft (for motorized), and lock mechanism. Do not oil the slats themselves – this will attract dust and grime.</p>
      <h2>Annually: Professional Service</h2>
      <p>Once a year, have a qualified shutter technician inspect your shutter. They'll check spring tension, motor operation, electrical connections, safety sensors, and guide channel alignment. Our AMC (Annual Maintenance Contract) covers this annual visit plus two emergency call-outs per year.</p>
      <h2>Signs You Need Immediate Repair</h2>
      <ul>
        <li>Shutter feels heavy or unbalanced when opening</li>
        <li>Unusual squeaking or grinding noise</li>
        <li>Shutter doesn't stay up when raised (spring issue)</li>
        <li>Motor stalls or makes a humming noise</li>
        <li>Visible rust, cracks, or bent slats</li>
      </ul>
      <p>If you notice any of these, call us immediately. Deferred repairs almost always lead to higher costs. Goyal Rolling Shutters offers 24-hour emergency repair service.</p>
    `
  },
  {
    id: 3, icon: '🛡️', category: 'Safety',
    date: 'Sep 2024',
    title: 'Safety Features to Consider in Automatic Rolling Shutters',
    excerpt: 'Motorized shutters can be hazardous without proper safety features. Here\'s what to insist on when buying or upgrading.',
    content: `
      <p>Automatic rolling shutters are incredibly convenient, but they can cause serious injury or property damage without proper safety features. Here's what every motorized shutter should have.</p>
      <h2>1. Obstacle Detection Sensor</h2>
      <p>An infrared or contact-based sensor at the bottom of the shutter stops and reverses the shutter if it detects an obstruction while closing. This is non-negotiable for any shutter where people or vehicles pass through. Always ask your installer to include this – it's an inexpensive add-on that prevents accidents.</p>
      <h2>2. Mechanical Auto-Stop</h2>
      <p>Every motorized shutter should have mechanical limit switches that stop the motor when the shutter reaches fully open or fully closed positions. Without these, the motor will stall against the end stops, causing damage and overheating.</p>
      <h2>3. Thermal Motor Protection</h2>
      <p>Quality tubular motors include built-in thermal protection that cuts power if the motor overheats. This protects both the motor and your wiring from fire risk.</p>
      <h2>4. Battery Backup</h2>
      <p>During power cuts, motorized shutters become a problem without battery backup. A UPS/battery module keeps the motor operational for 10–15 cycles during outages. Essential for security-critical applications.</p>
      <h2>5. Fire Safety Override</h2>
      <p>For commercial and industrial applications, a fire safety interface connects your shutter to the building's fire alarm system. When triggered, the shutter automatically closes (or opens, depending on configuration) to contain fire or allow evacuation.</p>
      <h2>6. Anti-Tamper Bottom Bar</h2>
      <p>The guide channels should include anti-lift locks that prevent someone from manually raising a closed motorized shutter from outside. This prevents break-ins targeting the gap between the shutter and the floor.</p>
    `
  }
];

// ═══════════ PAGE ROUTING ═══════════
let currentPage = 'home';
function showPage(page) {
  // Get the current path to determine relative paths
  const currentPath = window.location.pathname;
  const isInPages = currentPath.includes('/pages/');

  // Map page names to their respective HTML files with proper relative paths
  let pageMap;
  if (isInPages) {
    // When in pages/ directory, use ../ to go up one level
    pageMap = {
      'home': '../index.html',
      'products': 'products.html',
      'projects': 'projects.html',
      'about': 'about.html',
      'blog': 'blog.html',
      'contact': 'contact.html'
    };
  } else {
    // When in root directory, use pages/ prefix
    pageMap = {
      'home': 'index.html',
      'products': 'pages/products.html',
      'projects': 'pages/projects.html',
      'about': 'pages/about.html',
      'blog': 'pages/blog.html',
      'contact': 'pages/contact.html'
    };
  }

  // If the page exists in the map, navigate to that HTML file
  if (pageMap[page]) {
    window.location.href = pageMap[page];
  } else {
    // Fallback for any unmapped pages
    console.warn('Page not found:', page);
  }
}
function scrollToQuote() {
  // Get the current path to determine the correct path to index.html
  const currentPath = window.location.pathname;
  const isInPages = currentPath.includes('/pages/');

  // Navigate to home page with a hash to scroll to quote section
  const homePath = isInPages ? '../index.html' : 'index.html';
  window.location.href = homePath + '#quoteSection';
}
function toggleMobile() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

// ═══════════ RENDER PRODUCTS ═══════════
function renderProducts() {
  const grids = ['productGrid', 'allProductsGrid'];
  grids.forEach(gridId => {
    const grid = document.getElementById(gridId);
    if (!grid) return;
    grid.innerHTML = products.map(p => `
      <div class="product-card" onclick="openProduct(${p.id})">
        <div class="product-card-img">
          <div style="position:relative;z-index:1;font-size:52px">${p.icon}</div>
        </div>
        <div class="product-card-body">
          <div class="product-card-title">${p.name}</div>
          <div class="product-card-desc">${p.desc}</div>
          <span class="link-arrow">View Details →</span>
        </div>
      </div>
    `).join('');
  });
}

function openProduct(id) {
  const p = products[id];
  showPage('products');
  const allProd = document.getElementById('allProductsGrid');
  const detailSec = document.getElementById('productDetailSection');
  if (allProd) allProd.style.display = 'none';
  if (detailSec) {
    detailSec.classList.remove('hidden');
    document.getElementById('productDetailContent').innerHTML = `
      <div style="background:var(--primary);padding-top:68px;">
        <div style="max-width:1200px;margin:0 auto;padding:60px 24px 80px;display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;">
          <div>
            <div style="font-family:var(--font-sub);font-size:12px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:var(--accent);margin-bottom:12px;display:flex;align-items:center;gap:10px;">
              <div style="width:24px;height:2px;background:var(--accent);"></div>
              <span onclick="showProductList()" style="cursor:pointer;opacity:0.6;">Products</span>
              <span style="opacity:0.3;">/</span>
              <span>${p.name}</span>
            </div>
            <h1 style="font-family:var(--font-head);font-size:clamp(40px,5vw,64px);font-weight:900;color:white;line-height:1.0;margin-bottom:16px;">${p.name}</h1>
            <p style="font-size:16px;color:rgba(255,255,255,0.6);line-height:1.75;margin-bottom:32px;font-weight:300;">${p.tagline}</p>
            <div style="display:flex;gap:12px;flex-wrap:wrap;">
              <a class="btn btn-primary" onclick="scrollToProductQuote()">Get Quote for This →</a>
              <a class="btn btn-outline-white" onclick="showProductList()">← All Products</a>
            </div>
          </div>
          <div style="height:340px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);border-radius:6px;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;">
            <div style="position:absolute;inset:0;background:repeating-linear-gradient(0deg,rgba(255,255,255,0.03) 0,rgba(255,255,255,0.03) 1px,transparent 1px,transparent 22px);"></div>
            <div style="position:relative;z-index:1;font-size:80px;">${p.icon}</div>
          </div>
        </div>
      </div>

      <section style="padding:80px 0;">
        <div style="max-width:1200px;margin:0 auto;padding:0 24px;">
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:start;">
            <div>
              <div class="tag">Overview</div>
              <h2 class="section-title" style="margin-bottom:24px;">${p.name}</h2>
              <p style="font-size:16px;color:var(--text-muted);line-height:1.8;margin-bottom:20px;">${p.longDesc}</p>
              <div style="margin-top:32px;">
                <div class="tag">Applications</div>
                <ul style="list-style:none;display:flex;flex-direction:column;gap:8px;margin-top:12px;">
                  ${p.applications.map(a => `<li style="display:flex;align-items:center;gap:10px;font-size:14px;color:var(--text);">
                    <span style="color:var(--accent);font-size:16px;">✓</span> ${a}
                  </li>`).join('')}
                </ul>
              </div>
            </div>
            <div>
              <div class="tag">Key Benefits</div>
              <ul class="benefit-list" style="margin-top:12px;">
                ${p.benefits.map(b => `<li class="benefit-item">
                  <span class="benefit-icon">⚡</span>
                  <span>${b}</span>
                </li>`).join('')}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section style="padding:64px 0;background:var(--secondary);">
        <div style="max-width:1200px;margin:0 auto;padding:0 24px;">
          <div class="tag">Technical Specifications</div>
          <h2 class="section-title" style="margin-bottom:32px;">Specifications</h2>
          <table class="spec-table">
            <thead><tr><th>Parameter</th><th>Specification</th></tr></thead>
            <tbody>
              ${p.specs.map(s => `<tr><td><strong>${s[0]}</strong></td><td>${s[1]}</td></tr>`).join('')}
            </tbody>
          </table>
        </div>
      </section>

      <section id="productQuoteSection" style="padding:80px 0;background:var(--primary);">
        <div style="max-width:900px;margin:0 auto;padding:0 24px;">
          <div style="text-align:center;margin-bottom:48px;">
            <div class="tag" style="background:rgba(249,115,22,0.15);">Free Quote</div>
            <h2 style="font-family:var(--font-head);font-size:clamp(32px,4vw,52px);font-weight:900;color:white;margin-top:8px;">Get a Quote for ${p.name}</h2>
          </div>
          <form onsubmit="submitQuote(event)" style="display:flex;flex-direction:column;gap:16px;">
            <input type="hidden" value="${p.name}">
            <div class="form-grid">
              <div class="form-group"><label>Name *</label><input type="text" placeholder="Your name" required></div>
              <div class="form-group"><label>Phone *</label><input type="tel" placeholder="+91 98765 43210" required></div>
              <div class="form-group"><label>Location</label><input type="text" placeholder="City / Area"></div>
              <div class="form-group"><label>Approximate Size</label><input type="text" placeholder="e.g. 10 ft × 8 ft"></div>
              <div class="form-group full"><label>Additional Details</label><textarea placeholder="Tell us about your requirement..."></textarea></div>
            </div>
            <button type="submit" class="btn btn-primary btn-lg" style="justify-content:center;">Request Quote for ${p.name} →</button>
          </form>
        </div>
      </section>
    `;
  }
}
function showProductList() {
  const allProd = document.getElementById('allProductsGrid');
  const detailSec = document.getElementById('productDetailSection');
  if (allProd) allProd.style.display = '';
  if (detailSec) detailSec.classList.add('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function scrollToProductQuote() {
  const el = document.getElementById('productQuoteSection');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// ═══════════ RENDER PROJECTS ═══════════
function renderProjects(filter = 'all') {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;
  const filtered = filter === 'all' ? projects : projects.filter(p => p.cat === filter);
  grid.innerHTML = filtered.map(p => `
    <div class="project-card">
      <div class="project-img">
        <div class="gallery-bg-slats"></div>
        <div class="project-tag">${p.cat.charAt(0).toUpperCase() + p.cat.slice(1)}</div>
        <div style="position:relative;z-index:1;font-size:52px;">${p.icon}</div>
      </div>
      <div class="project-body">
        <div class="project-title">${p.title}</div>
        <div class="project-location">📍 ${p.location}</div>
        <div class="project-desc">${p.desc}</div>
      </div>
    </div>
  `).join('');
}
function initFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      renderProjects(this.dataset.filter);
    });
  });
}

// ═══════════ RENDER BLOG ═══════════
function renderBlog() {
  const grid = document.getElementById('blogGrid');
  if (!grid) return;
  grid.innerHTML = blogPosts.map(p => `
    <div class="blog-card" onclick="openBlogPost(${p.id})">
      <div class="blog-img">
        <div class="blog-category">${p.category}</div>
        <div style="font-size:48px;position:relative;z-index:1;">${p.icon}</div>
      </div>
      <div class="blog-body">
        <div class="blog-date">${p.date}</div>
        <div class="blog-title">${p.title}</div>
        <div class="blog-excerpt">${p.excerpt}</div>
        <span class="link-arrow" style="margin-top:16px;display:inline-flex;">Read Article →</span>
      </div>
    </div>
  `).join('');
}
function openBlogPost(id) {
  const post = blogPosts[id];
  const bg = document.getElementById('blogGrid');
  const bpv = document.getElementById('blogPostView');
  const bpc = document.getElementById('blogPostContent');
  if (bg) bg.style.display = 'none';
  if (bpv) bpv.classList.remove('hidden');
  if (bpc) bpc.innerHTML = `
    <div style="background:var(--primary);padding-top:68px;">
      <div style="max-width:900px;margin:0 auto;padding:60px 24px 80px;">
        <div style="font-family:var(--font-sub);font-size:12px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:rgba(255,255,255,0.4);margin-bottom:20px;display:flex;align-items:center;gap:8px;">
          <span onclick="closeBlogPost()" style="cursor:pointer;color:var(--accent);">Resources</span>
          <span>›</span>
          <span>${post.category}</span>
        </div>
        <div class="tag">${post.category}</div>
        <h1 style="font-family:var(--font-head);font-size:clamp(32px,4vw,58px);font-weight:900;color:white;margin-top:8px;line-height:1.1;">${post.title}</h1>
        <p style="margin-top:16px;font-size:16px;color:rgba(255,255,255,0.5);font-weight:300;line-height:1.7;">${post.excerpt}</p>
        <div style="margin-top:20px;font-family:var(--font-sub);font-size:13px;color:rgba(255,255,255,0.3);display:flex;align-items:center;gap:16px;">
          <span>📅 ${post.date}</span>
          <span>•</span>
          <span>Goyal Rolling Shutters</span>
          <span>•</span>
          <span>5 min read</span>
        </div>
      </div>
    </div>
    <div style="max-width:780px;margin:0 auto;padding:64px 24px;">
      <div class="blog-post-content">
        ${post.content}
      </div>
      <div style="margin-top:64px;padding:40px;background:var(--accent);border-radius:6px;text-align:center;">
        <h3 style="font-family:var(--font-head);font-size:28px;font-weight:900;color:white;margin-bottom:10px;">Need Help Choosing a Shutter?</h3>
        <p style="color:rgba(255,255,255,0.8);margin-bottom:24px;">Talk to our experts – free consultation and quote within 24 hours.</p>
        <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
          <a class="btn btn-lg" style="background:white;color:var(--accent);" onclick="scrollToQuote();closeBlogPost()">Request a Quote</a>
          <a href="tel:+919876543210" class="btn btn-outline-white btn-lg">📞 Call Now</a>
        </div>
      </div>
      <div style="margin-top:40px;text-align:center;">
        <a onclick="closeBlogPost()" class="link-arrow" style="font-size:15px;cursor:pointer;">← Back to All Articles</a>
      </div>
    </div>
  `;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function closeBlogPost() {
  const bg = document.getElementById('blogGrid');
  const bpv = document.getElementById('blogPostView');
  if (bg) bg.style.display = '';
  if (bpv) bpv.classList.add('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ═══════════ FORMS ═══════════
function submitQuote(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type=submit]');
  btn.innerHTML = '✓ Quote Request Sent!';
  btn.style.background = '#16a34a';
  setTimeout(() => { btn.innerHTML = 'Request Free Quote →'; btn.style.background = ''; }, 3000);
}
function submitContact(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type=submit]');
  btn.innerHTML = '✓ Message Sent!';
  btn.style.background = '#16a34a';
  setTimeout(() => { btn.innerHTML = 'Send Message →'; btn.style.background = ''; }, 3000);
}

// ═══════════ SCROLL EFFECTS ═══════════
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 20) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
});

// ═══════════ INIT ═══════════
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  renderProjects();
  renderBlog();
  initFilters();
});
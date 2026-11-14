/* One Crest Kharghar – site script (no libraries) */
(function () {
  'use strict';

  /* ---------- Settings: fill before launch ---------- */
  var CONFIG = {
    phone: '+91 97026 73966',  // shown on the call buttons (empty = hidden)
    whatsapp: '919702673966',   // digits only with country code (empty = hidden)
    recoApiUrl: 'https://api.recoproperty.com/api', // RECO CRM API (same as the other landing sites)
    recoApiKey: 'lp_4703be68ffab37e956ff008d',     // the NEW landing page's lp_ key: create the Landing Page record in the CRM at launch, then paste it here
    brochureUrl: '/assets/brochure/one-crest-kharghar-brochure.pdf',
    breakdownUrl: '/assets/data/cost-breakdown.json',
    rememberHours: 48,  // a visitor who filled a form is not asked again for 2 days
    promptEverySec: 10, // pop-up again this many seconds after the last one was closed, until the form is filled
                        // (desktop: form pop-up; phones: small slide-up card). Advice: 30 is safer for Google Ads quality.
    exitMinSec: 12      // desktop exit-intent pop-up only after this many seconds on the page
  };
  var IS_LOCAL = /^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname);
  var IS_PHONE = window.matchMedia('(max-width: 767px)').matches;
  var REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.dataLayer = window.dataLayer || [];
  function track(event, extra) { var o = { event: event }; for (var k in extra) o[k] = extra[k]; window.dataLayer.push(o); }
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }

  /* ---------- Remember a visitor who already filled a form (this browser only, 2 days) ---------- */
  var STORE = 'oc_lead_v1';
  function getLead() {
    try {
      var l = JSON.parse(localStorage.getItem(STORE) || 'null');
      if (l && Date.now() - l.t < CONFIG.rememberHours * 3600e3) return l;
      localStorage.removeItem(STORE);
    } catch (e) {}
    return null;
  }
  function saveLead(d) { try { localStorage.setItem(STORE, JSON.stringify({ name: d.name, phone: d.phone, email: d.email, t: Date.now() })); } catch (e) {} }
  function session(k, v) { try { if (v === undefined) return sessionStorage.getItem(k); sessionStorage.setItem(k, v); } catch (e) { return null; } }

  /* ---------- Toast ---------- */
  var toastEl = $('#toast'), toastTimer;
  function toast(text) {
    toastEl.textContent = text; toastEl.hidden = false;
    clearTimeout(toastTimer); toastTimer = setTimeout(function () { toastEl.hidden = true; }, 4500);
  }

  /* ---------- Top bar: solid once scrolled ---------- */
  var bar = $('.topbar');
  function onScroll() { bar.classList.toggle('scrolled', window.scrollY > 40); }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  /* ---------- Phone / WhatsApp buttons (only shown when a number is set) ---------- */
  if (CONFIG.phone) {
    var tel = 'tel:' + CONFIG.phone.replace(/[^\d+]/g, '');
    $$('.js-call').forEach(function (a) { a.href = tel; a.textContent = 'Call ' + CONFIG.phone; a.hidden = false; });
    $$('.js-call-text').forEach(function (a) { a.href = tel; a.textContent = CONFIG.phone; });
    $$('.js-phone-line').forEach(function (s) { s.hidden = false; });
  }
  if (CONFIG.whatsapp) {
    var wa = 'https://wa.me/' + CONFIG.whatsapp + '?text=' + encodeURIComponent('Hi, I would like details of One Crest Kharghar.');
    $$('.js-whatsapp').forEach(function (a) { a.href = wa; a.target = '_blank'; a.rel = 'noopener'; a.hidden = false; });
  }
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a');
    if (!a) return;
    if (a.href.indexOf('tel:') === 0) track('phone_click');
    else if (a.href.indexOf('wa.me') > -1) track('whatsapp_click');
  });

  /* ---------- Hero video: loads after the page is ready, fades in when playing ---------- */
  window.addEventListener('load', function () {
    var v = $('.hero-video');
    if (!v) return;
    var src = IS_PHONE ? v.dataset.mobile : v.dataset.desktop;
    var c = navigator.connection || {};
    if (!src || c.saveData || /(^|-)2g$/.test(c.effectiveType || '') || REDUCED) return; // keep the zoom image
    setTimeout(function () {
      v.src = src;
      v.addEventListener('playing', function () { v.classList.add('is-playing'); }, { once: true });
      var p = v.play(); if (p && p.catch) p.catch(function () {});
    }, 800);
  });

  /* ---------- What each form is for ---------- */
  var TEXT = {
    price: { title: 'Get the One Crest price list', button: 'Send me the price list' },
    brochure: { title: 'Download the One Crest brochure', button: 'Download the brochure' },
    'video-film': { title: 'Get the One Crest project film', button: 'Send me the video', done: 'Our team will send the project film on WhatsApp shortly.' },
    'video-sample': { title: 'Get the sample flat walkthrough', button: 'Send me the video', done: 'Our team will send the sample flat walkthrough on WhatsApp shortly.' },
    plan: { title: 'See the full floor plan', note: 'Fill this once to see all floor plans.', button: 'Show me the plan' },
    exit: { title: 'Before you go: get the price list', note: 'All 5 One Crest home types with the full cost breakdown.', button: 'Send me the price list' },
    // Extra offers used only by the repeating prompt (rotated at random, never the same one twice in a row)
    visit: { title: 'Book a free site visit', note: 'Visit One Crest at Sector 20, Kharghar, near Shilp Chowk.', button: 'Book my visit', done: 'Our team will call you to fix a visit time.' },
    'brochure-wa': { title: 'Get the brochure on WhatsApp', button: 'Send me the brochure', done: 'Our team will send the brochure on WhatsApp shortly.' },
    details: { title: 'Get One Crest details & video', note: 'Home types, amenities and the project film.', button: 'Send me the details', done: 'Our team will send the project details and film on WhatsApp shortly.' },
    expert: { title: 'Talk to our One Crest expert', note: 'A free call about prices, plans and payment.', button: 'Call me back', done: 'Our expert will call you shortly.' },
    offer: { title: 'Ask about spot booking offer', note: 'Available only when you book at the site. We will share the details and fix a visit.', button: 'Tell me about the offer', done: 'Our team will call you with the offer details and a visit time.' }
  };
  // Short text for the small card on phones (same offers as above)
  var CARD = {
    price: { line: 'All 5 home types with the full cost breakdown.', button: 'Get it now' },
    visit: { line: 'See One Crest at Sector 20, Kharghar.', button: 'Book now' },
    'brochure-wa': { line: 'The full brochure, sent on WhatsApp.', button: 'Send it' },
    details: { line: 'Project film and details on WhatsApp.', button: 'Send it' },
    expert: { line: 'A free call about prices, plans and payment.', button: 'Call me' },
    offer: { line: 'Available only when you book at the site.', button: 'Ask now' }
  };
  var OFFER_ENDS = Date.parse('2027-01-01T00:00:00+05:30'); // spot booking offer runs till 31 Dec 2026 (IST), then drops out by itself
  var OFFERS = Object.keys(CARD).filter(function (o) { return o !== 'offer' || Date.now() < OFFER_ENDS; }), lastOffer = '';
  function nextOffer() {
    var pool = OFFERS.filter(function (o) { return o !== lastOffer; });
    lastOffer = pool[Math.floor(Math.random() * pool.length)];
    return lastOffer;
  }

  var dlg = $('#lead-dialog');
  var dlgForm = $('form', dlg);
  var pending = null; // extra details for the current request (e.g. which plan)

  // Keeps the pop-up heading on one line: shrinks the text a little if it is too wide for the screen
  function fitTitle(h) {
    h.style.fontSize = '';
    var fs = parseFloat(getComputedStyle(h).fontSize);
    while (h.scrollWidth > h.clientWidth + 1 && fs > 12) { fs -= 0.5; h.style.fontSize = fs + 'px'; }
  }
  function openForm(intent, extra) {
    pending = extra || null;
    var lead = getLead();
    if (lead) { // already filled in the last 2 days: don't ask again
      deliver(intent, lead, true);
      submitLead({ name: lead.name, phone: lead.phone, email: lead.email, interest: '', intent: intent, detail: pending && pending.title || '' }).catch(function () {});
      track('repeat_request', { form_intent: intent });
      return;
    }
    var tx = TEXT[intent] || TEXT.price;
    dlgForm.dataset.intent = intent;
    $('h2', dlg).textContent = tx.title;
    var note = $('.dlg-note', dlg); note.textContent = tx.note || ''; note.hidden = !tx.note;
    $('[type=submit]', dlgForm).textContent = tx.button;
    $('.form-msg', dlgForm).textContent = '';
    hideNudge();
    if (dlg.showModal) { if (!dlg.open) dlg.showModal(); } else dlg.setAttribute('open', '');
    fitTitle($('h2', dlg));
    track('form_open', { form_intent: intent });
  }
  $$('[data-open-form]').forEach(function (b) {
    b.addEventListener('click', function () { openForm(b.getAttribute('data-open-form')); });
  });
  $('.dlg-close', dlg).addEventListener('click', function () { dlg.close(); });
  dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });

  /* ---------- What happens after a form (or straight away for a remembered visitor) ---------- */
  function deliver(intent, data, repeat) {
    var first = String(data.name || '').trim().split(' ')[0];
    if (intent === 'brochure') {
      track('brochure_download');
      var a = document.createElement('a'); a.href = CONFIG.brochureUrl; a.download = ''; document.body.appendChild(a); a.click(); a.remove();
      if (repeat) toast('Your brochure download is starting.');
    } else if (TEXT[intent] && TEXT[intent].done) { // videos, site visit, WhatsApp brochure, details, expert call, offer
      if (repeat) toast('Thanks, ' + first + '. ' + TEXT[intent].done);
    } else if (intent === 'plan') {
      var full = pending && pending.full;
      if (full) showImage(full, pending.title);
      else toast('Thanks, ' + first + '. Our team will send the full plan on WhatsApp shortly.');
    } else { // price, exit
      renderBreakdown();
      if (repeat) toast('Welcome back, ' + first + '. Here is the full cost breakdown.');
    }
  }

  /* ---------- Form check + send ---------- */
  function clean(s) { return String(s || '').trim(); }
  function checkForm(d) {
    if (clean(d.name).length < 2) return 'Please enter your name.';
    var p = clean(d.phone).replace(/[\s-]/g, '').replace(/^(\+91|91|0)/, '');
    if (!/^[6-9]\d{9}$/.test(p)) return 'Please enter a valid 10-digit mobile number.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean(d.email))) return 'Please enter a valid email.';
    d.phone = p; d.name = clean(d.name); d.email = clean(d.email);
    return '';
  }

  /* ---------- RECO CRM (same calls and fields as the other landing sites) ---------- */
  var IS_TEST = /(^|[?&])reco_test(=|&|$)/.test(location.search);   // test leads: saved and routed, hidden from Campaign Analytics
  var INTENT_LABEL = {
    price: 'Price list', exit: 'Price list (exit prompt)', brochure: 'Brochure download',
    'video-film': 'Project film video', 'video-sample': 'Sample flat walkthrough video', plan: 'Floor plan',
    visit: 'Free site visit', 'brochure-wa': 'Brochure on WhatsApp', details: 'Project details and video',
    expert: 'Talk to expert (call back)', offer: 'Spot booking offer (site visit)'
  };
  function getUtmParams() {
    var params = new URLSearchParams(location.search);
    var keys = ['utm_source','utm_medium','utm_campaign','utm_id','utm_term','utm_content','utm_device','utm_network','adgroupid','matchtype','feeditemid','gclid'];
    var utm = {};
    keys.forEach(function (k) { if (params.get(k)) utm[k] = params.get(k); });
    if (!utm.utm_source) utm.utm_source = 'direct';
    if (!utm.utm_medium) utm.utm_medium = 'none';
    return utm;
  }
  var CRM_READY = !IS_LOCAL && CONFIG.recoApiUrl && CONFIG.recoApiKey;
  var recoVisitorId = null;
  function trackRecoVisitor() {
    if (!CRM_READY) return;
    fetch(CONFIG.recoApiUrl + '/visitors/track', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ apiKey: CONFIG.recoApiKey, utm: getUtmParams(), referrer: document.referrer, pageUrl: location.href })
    }).then(function (r) { return r.json(); }).then(function (d) {
      if (d && d.visitorId) { recoVisitorId = d.visitorId; session('reco_vid', d.visitorId); }
    }).catch(function () {});
  }
  trackRecoVisitor();

  /* Sends one lead. On localhost it only pretends (the CRM refuses localhost), so local tests never create leads. */
  function submitLead(data) {
    var label = INTENT_LABEL[data.intent] || data.intent;
    if (IS_LOCAL) { console.warn('[One Crest] localhost: lead NOT sent (demo only):', label, data.detail || ''); return Promise.resolve(); }
    if (!CRM_READY) return Promise.reject(new Error('crm-not-configured'));
    var custom = {
      cta_heading: label,
      service_type: 'Property Enquiry',
      source: label + ' one crest landing page',
      interest: data.interest || '',
      request_detail: data.detail || ''
    };
    if (IS_TEST) custom.reco_test = 'true';
    return fetch(CONFIG.recoApiUrl + '/landing-leads', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        apiKey: CONFIG.recoApiKey,
        name: data.name, phone: data.phone, email: data.email || '', countryCode: '+91',
        message: (IS_TEST ? 'reco_test · ' : '') + 'Requested: ' + label + (data.detail ? ' (' + data.detail + ')' : '') + (data.interest ? ' · Interested in ' + data.interest : ''),
        customFields: custom,
        utm: getUtmParams(),
        visitorId: recoVisitorId || session('reco_vid')
      })
    }).then(function (r) { return r.json(); }).then(function (d) {
      if (!d || !d.success) throw new Error((d && d.message) || 'crm-error');
      return d;
    });
  }

  function renderBreakdown() {
    var box = $('#breakdown');
    if (!box) return;
    if (!box.hidden) { box.scrollIntoView({ behavior: 'smooth', block: 'start' }); return; }
    fetch(CONFIG.breakdownUrl, { cache: 'no-store' }).then(function (r) { return r.json(); }).then(function (j) {
      var h = '<h3>Full cost breakdown (' + j.floor + ', as on ' + j.asOn + ')</h3><div class="table-scroll"><table><thead><tr><th scope="col"></th>';
      j.columns.forEach(function (c) { h += '<th scope="col">' + c + '</th>'; });
      h += '</tr></thead><tbody>';
      j.rows.forEach(function (row) {
        h += '<tr' + (row.total ? ' class="total"' : '') + '><th scope="row">' + row.label + '</th>';
        row.values.forEach(function (v) { h += '<td>' + v + '</td>'; });
        h += '</tr>';
      });
      h += '</tbody></table></div><p class="small">' + j.note + '</p>';
      box.innerHTML = h; box.hidden = false;
      box.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }).catch(function () {});
  }

  $$('.lead-form').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var msg = $('.form-msg', form);
      var btn = $('[type=submit]', form);
      var fd = new FormData(form);
      var intent = form.dataset.intent || 'price';
      var data = { name: fd.get('name'), phone: fd.get('phone'), email: fd.get('email'), interest: fd.get('interest') || '', intent: intent, detail: pending && pending.title || '' };
      var err = checkForm(data);
      msg.className = 'form-msg' + (err ? ' error' : '');
      msg.textContent = err;
      if (err) return;
      btn.disabled = true; msg.textContent = 'Sending…';
      submitLead(data).then(function () {
        saveLead(data);
        track('form_submit_success', { form_intent: intent, interest: data.interest });
        var first = data.name.split(' ')[0];
        var done = TEXT[intent] && TEXT[intent].done;
        msg.textContent = 'Thank you, ' + first + '. ' +
          (done ? done : intent === 'brochure' ? 'Your download is starting.' : intent === 'plan' ? '' : 'Here is the full cost breakdown.');
        form.reset();
        var closeDelay = done ? 2500 : 900;
        if (dlg.open) setTimeout(function () { dlg.close(); deliver(intent, data, false); }, closeDelay);
        else deliver(intent, data, false);
      }).catch(function () {
        msg.className = 'form-msg error';
        msg.textContent = 'Sorry, that did not go through. Please try again in a moment.';
      }).then(function () { btn.disabled = false; });
    });
  });

  /* ---------- Floor plans: zoom icon → form (once) → full plan ---------- */
  $$('.zoom-tile').forEach(function (b) {
    b.addEventListener('click', function () {
      openForm('plan', { title: b.getAttribute('data-plan-title'), full: b.getAttribute('data-plan-full') });
    });
  });
  $$('.js-plan-btn').forEach(function (b) {
    b.addEventListener('click', function () {
      var name = $('figcaption strong', b.closest('figure'));
      openForm('plan', { title: 'One Crest Kharghar ' + (name ? name.textContent : '') + ' floor plan', full: '' });
    });
  });
  var moreBtn = $('#more-plans-btn'), more = $('#more-plans');
  if (moreBtn) moreBtn.addEventListener('click', function () {
    var open = more.hidden; more.hidden = !open;
    moreBtn.setAttribute('aria-expanded', String(open));
    moreBtn.textContent = open ? 'Show fewer floor plans' : 'Show all floor plans (5 more)';
  });

  /* ---------- Image viewer (gallery + full plans) ---------- */
  var viewer = $('#viewer');
  function showImage(src, alt) {
    var v = $('img', viewer); v.src = src; v.alt = alt || '';
    if (viewer.showModal) viewer.showModal(); else viewer.setAttribute('open', '');
  }
  $('.dlg-close', viewer).addEventListener('click', function () { viewer.close(); });
  viewer.addEventListener('click', function (e) { if (e.target === viewer) viewer.close(); });

  /* ---------- Gallery: auto-slide, arrows, pauses when touched ---------- */
  var gal = $('.gallery');
  if (gal) {
    var tiles = $$('.g', gal);
    tiles.forEach(function (b) {
      b.addEventListener('click', function () { var img = $('img', b); showImage(img.currentSrc || img.src, img.alt); });
    });
    function step(dir) {
      var w = tiles[0].getBoundingClientRect().width + 12;
      var atEnd = gal.scrollLeft + gal.clientWidth >= gal.scrollWidth - 4;
      var atStart = gal.scrollLeft <= 4;
      if (dir > 0 && atEnd) gal.scrollTo({ left: 0, behavior: 'smooth' });
      else if (dir < 0 && atStart) gal.scrollTo({ left: gal.scrollWidth, behavior: 'smooth' });
      else gal.scrollBy({ left: dir * w, behavior: 'smooth' });
    }
    $('.g-prev').addEventListener('click', function () { pause(); step(-1); });
    $('.g-next').addEventListener('click', function () { pause(); step(1); });
    var timer = null, resume = null, visible = false;
    function play() { if (REDUCED || timer || !visible) return; timer = setInterval(function () { step(1); }, 4000); }
    function stop() { clearInterval(timer); timer = null; }
    function pause() { stop(); clearTimeout(resume); resume = setTimeout(play, 8000); }
    ['pointerdown', 'touchstart', 'focusin', 'wheel'].forEach(function (ev) { gal.addEventListener(ev, pause, { passive: true }); });
    gal.addEventListener('mouseenter', stop); gal.addEventListener('mouseleave', function () { pause(); });
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (en) { visible = en[0].isIntersecting; if (visible) play(); else stop(); }, { threshold: 0.4 }).observe(gal);
    }
  }

  /* ---------- Video tiles: drift only while on screen (saves battery) ---------- */
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (en) {
      en.forEach(function (e) { e.target.classList.toggle('in-view', e.isIntersecting); });
    }, { threshold: 0.2 });
    $$('.play-tile').forEach(function (t) { io.observe(t); });
  } else { $$('.play-tile').forEach(function (t) { t.classList.add('in-view'); }); }

  /* ---------- Map loads only when asked ---------- */
  var mapBtn = $('#show-map');
  if (mapBtn) mapBtn.addEventListener('click', function () {
    var f = document.createElement('iframe');
    f.src = 'https://maps.google.com/maps?q=19.04713,73.0731347&z=16&output=embed';
    f.title = 'Map of One Crest, Sector 20, Kharghar'; f.loading = 'lazy'; f.referrerPolicy = 'no-referrer-when-downgrade';
    $('#map').prepend(f); mapBtn.remove();
  });

  /* ---------- Prompts: timed + exit intent (never for someone who already filled a form) ----------
     Phones get a small slide-up card, not a full pop-up (Google lowers mobile rankings for pop-ups that cover the page). */
  var nudge = $('#nudge');
  function hideNudge() { nudge.hidden = true; }
  function showNudge(offer) {
    var t = TEXT[offer], c = CARD[offer];
    $('.nudge-title', nudge).textContent = t.title;
    $('.nudge-line', nudge).textContent = c.line;
    var b = $('[data-open-form]', nudge); b.setAttribute('data-open-form', offer); b.textContent = c.button;
    nudge.setAttribute('aria-label', t.title);
    nudge.hidden = false;
  }
  $('.nudge-close', nudge).addEventListener('click', function () { hideNudge(); track('prompt_close'); schedulePrompt(); });
  function canPrompt() { return !getLead() && !dlg.open && !viewer.open; }

  // Repeats: the next prompt comes promptEverySec after the last one was closed; stops once a form is filled.
  var promptTimer = null;
  function typing() { var a = document.activeElement; return a && /^(INPUT|SELECT|TEXTAREA)$/.test(a.tagName); }
  function schedulePrompt() {
    clearTimeout(promptTimer);
    if (getLead()) return;
    promptTimer = setTimeout(function () {
      if (getLead()) return;
      if (!canPrompt() || typing() || !nudge.hidden || document.hidden) { schedulePrompt(); return; }
      var offer = nextOffer();
      if (IS_PHONE) { showNudge(offer); track('prompt_show', { prompt: 'timed_card', offer: offer }); }
      else { openForm(offer); track('prompt_show', { prompt: 'timed_popup', offer: offer }); }
    }, CONFIG.promptEverySec * 1000);
  }
  dlg.addEventListener('close', schedulePrompt);
  viewer.addEventListener('close', schedulePrompt);
  schedulePrompt();

  var startedAt = Date.now();
  if (!IS_PHONE) document.addEventListener('mouseout', function (e) {
    if (e.relatedTarget || e.clientY > 0) return;                  // only when the mouse leaves through the top
    if (Date.now() - startedAt < CONFIG.exitMinSec * 1000) return;
    if (!canPrompt() || session('oc_exit')) return;
    session('oc_exit', '1');
    openForm('exit'); track('prompt_show', { prompt: 'exit_intent' });
  });
})();

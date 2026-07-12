;(function () {
  "use strict"

  /* ─── Config ──────────────────────────────────────────────────── */

  var STORAGE_KEY = "portfolio_egg_hunt_v2"
  var COMBO_WINDOW = 10000

  var EGGS = [
    { id: "egg-1",  points: 10, label: "The Spark"    },
    { id: "egg-2",  points: 15, label: "The Coder"    },
    { id: "egg-3",  points: 20, label: "The Mark"     },
    { id: "egg-4",  points: 20, label: "The Key"      },
    { id: "egg-5",  points: 25, label: "The Bolt"     },
    { id: "egg-6",  points: 25, label: "The Orbit"    },
    { id: "egg-7",  points: 30, label: "The Star"     },
    { id: "egg-8",  points: 30, label: "The Turn"     },
    { id: "egg-9",  points: 40, label: "The Infinite" },
    { id: "egg-10", points: 50, label: "The Legend"   },
  ]

  var TOTAL = EGGS.length
  var CONFETTI_COLORS = ["#FF6B6B","#FFD93D","#6BCB77","#4D96FF","#FF9FF3","#F7B731","#A29BFE","#00CEC9","#FF6B9D","#C3F0CA"]

  /* ─── State ───────────────────────────────────────────────────── */

  var state = {
    found: [],
    score: 0,
    comboCount: 0,
    comboBest: 1,
    lastFindTime: 0,
    startTime: 0,
    completed: false,
    submitted: false,
  }

  function loadState() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY)
      if (!raw) return
      var s = JSON.parse(raw)
      state.found      = Array.isArray(s.found) ? s.found : []
      state.score      = s.score      || 0
      state.comboBest  = s.comboBest  || 1
      state.lastFindTime = s.lastFindTime || 0
      state.startTime  = s.startTime  || 0
      state.completed  = !!s.completed
      state.submitted  = !!s.submitted
    } catch (e) {}
  }

  function saveState() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)) } catch (e) {}
  }

  /* ─── HUD ─────────────────────────────────────────────────────── */

  var hud = null
  var hudScoreEl = null
  var hudCountEl = null
  var prevScore = 0

  function buildHUD() {
    if (document.getElementById("egg-hud")) return
    hud = document.createElement("div")
    hud.id = "egg-hud"
    hud.innerHTML =
      '<div class="egg-hud-inner">' +
        '<span class="egg-hud-egg">🥚</span>' +
        '<span class="egg-hud-found"><span id="egg-hud-count">0</span>&thinsp;/&thinsp;' + TOTAL + '</span>' +
        '<span class="egg-hud-sep">·</span>' +
        '<span class="egg-hud-score-label"><span id="egg-hud-score">0</span>&thinsp;pts</span>' +
      '</div>'
    document.body.appendChild(hud)
    hudScoreEl = document.getElementById("egg-hud-score")
    hudCountEl = document.getElementById("egg-hud-count")
    prevScore = state.score

    if (state.found.length > 0) {
      hud.classList.add("egg-hud-visible")
      syncHUD(false)
    }
  }

  function syncHUD(animate) {
    if (!hudCountEl || !hudScoreEl) return
    hudCountEl.textContent = state.found.length
    if (animate) {
      animateNumber(hudScoreEl, prevScore, state.score, 650)
    } else {
      hudScoreEl.textContent = state.score
    }
    prevScore = state.score
  }

  function showHUD() {
    if (!hud) return
    hud.classList.add("egg-hud-visible")
  }

  function bounceHUD() {
    if (!hud) return
    hud.classList.remove("egg-hud-bounce")
    void hud.offsetWidth
    hud.classList.add("egg-hud-bounce")
  }

  function animateNumber(el, from, to, duration) {
    var start = performance.now()
    function tick(now) {
      var p = Math.min((now - start) / duration, 1)
      var e = 1 - Math.pow(1 - p, 3)
      el.textContent = Math.round(from + (to - from) * e)
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }

  /* ─── Attach ──────────────────────────────────────────────────── */

  function attachListeners() {
    var els = document.querySelectorAll(".easter-egg")
    els.forEach(function (el) {
      var id = el.getAttribute("data-egg")
      if (!id) return
      if (state.found.indexOf(id) !== -1) el.setAttribute("data-found", "true")

      el.setAttribute("tabindex", "0")
      el.setAttribute("role", "button")
      el.setAttribute("aria-label", "Something hidden…")

      if (el._eggBound) return
      el._eggBound = true

      el.addEventListener("click", function () { findEgg(id, el) })
      el.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); findEgg(id, el) }
      })
    })
  }

  /* ─── Find egg ────────────────────────────────────────────────── */

  function findEgg(id, el) {
    if (state.found.indexOf(id) !== -1) return

    var egg = null
    for (var i = 0; i < EGGS.length; i++) {
      if (EGGS[i].id === id) { egg = EGGS[i]; break }
    }
    if (!egg) return

    var now = Date.now()
    if (!state.startTime) state.startTime = now

    var timeSinceLast = state.lastFindTime ? now - state.lastFindTime : Infinity
    if (timeSinceLast < COMBO_WINDOW) {
      state.comboCount++
    } else {
      state.comboCount = 1
    }
    state.lastFindTime = now

    var multiplier = 1
    if (state.comboCount >= 3) multiplier = 2
    else if (state.comboCount >= 2) multiplier = 1.5
    if (state.comboCount > state.comboBest) state.comboBest = state.comboCount

    var points = Math.round(egg.points * multiplier)
    state.found.push(id)
    state.score += points
    saveState()
    updateFoundStyles()

    if (state.found.length === 1) showHUD()
    syncHUD(true)
    bounceHUD()

    floatPoints(el, points, multiplier)
    popEl(el)

    if (multiplier > 1) showCombo(multiplier)

    if (state.found.length === TOTAL) {
      state.completed = true
      saveState()
      setTimeout(function () {
        launchConfetti()
        setTimeout(showModal, 1400)
      }, 300)
    }
  }

  /* ─── Floating points ─────────────────────────────────────────── */

  function floatPoints(el, points, multiplier) {
    var rect = el.getBoundingClientRect()
    var tip = document.createElement("div")
    tip.className = "egg-float-pts"
    tip.textContent = (multiplier > 1 ? multiplier + "× " : "") + "+" + points
    tip.style.left = (rect.left + window.scrollX + rect.width / 2) + "px"
    tip.style.top  = (rect.top  + window.scrollY - 6) + "px"
    document.body.appendChild(tip)
    tip.animate(
      [
        { opacity: 1, transform: "translateX(-50%) translateY(0)" },
        { opacity: 0, transform: "translateX(-50%) translateY(-40px)" },
      ],
      { duration: 950, easing: "ease-out", fill: "forwards" }
    ).onfinish = function () { tip.remove() }
  }

  /* ─── Pop ─────────────────────────────────────────────────────── */

  function popEl(el) {
    el.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(1.7) rotate(-10deg)" },
        { transform: "scale(0.8) rotate(5deg)" },
        { transform: "scale(1.1)" },
        { transform: "scale(1)" },
      ],
      { duration: 480, easing: "ease-in-out" }
    )
  }

  /* ─── Combo badge ─────────────────────────────────────────────── */

  function showCombo(multiplier) {
    var badge = document.createElement("div")
    badge.className = "egg-combo-badge"
    badge.innerHTML = "<span>" + multiplier + "×</span><span class='egg-combo-label'>COMBO</span>"
    document.body.appendChild(badge)
    badge.animate(
      [
        { opacity: 0, transform: "translateX(-50%) scale(0.5)" },
        { opacity: 1, transform: "translateX(-50%) scale(1.08)" },
        { opacity: 1, transform: "translateX(-50%) scale(1)" },
        { opacity: 1, transform: "translateX(-50%) scale(1)" },
        { opacity: 0, transform: "translateX(-50%) scale(0.9)" },
      ],
      { duration: 1700, easing: "ease-in-out", fill: "forwards", offset: [0, 0.15, 0.25, 0.7, 1] }
    ).onfinish = function () { badge.remove() }
  }

  /* ─── Confetti ────────────────────────────────────────────────── */

  function launchConfetti() {
    var cx = window.innerWidth / 2
    var cy = window.innerHeight * 0.45
    for (var i = 0; i < 120; i++) {
      ;(function (delay) {
        setTimeout(function () { spawnPiece(cx, cy) }, delay)
      })(i * 7)
    }
  }

  function spawnPiece(cx, cy) {
    var piece = document.createElement("div")
    piece.style.cssText = [
      "position:fixed",
      "z-index:9998",
      "pointer-events:none",
      "left:" + cx + "px",
      "top:"  + cy + "px",
      "width:" + (5 + Math.random() * 8) + "px",
      "height:" + (Math.random() > 0.5 ? (3 + Math.random() * 3) : (5 + Math.random() * 8)) + "px",
      "border-radius:" + (Math.random() > 0.5 ? "50%" : "2px"),
      "background:" + CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
    ].join(";")

    var angle = Math.random() * Math.PI * 2
    var speed = 200 + Math.random() * 420
    var vx = Math.cos(angle) * speed
    var vy = Math.sin(angle) * speed - 80
    var rot = Math.random() * 720 - 360
    var dur = 1100 + Math.random() * 900

    piece.animate(
      [
        { opacity: 1, transform: "translate(0,0) rotate(0deg)" },
        { opacity: 1, transform: "translate(" + vx * 0.5 + "px," + vy * 0.5 + "px) rotate(" + rot * 0.4 + "deg)" },
        { opacity: 0, transform: "translate(" + vx + "px," + (vy + 350) + "px) rotate(" + rot + "deg)" },
      ],
      { duration: dur, easing: "cubic-bezier(0,.9,.57,1)", fill: "forwards" }
    ).onfinish = function () { piece.remove() }

    document.body.appendChild(piece)
  }

  /* ─── Modal ───────────────────────────────────────────────────── */

  function getRank(score) {
    if (score >= 400) return { label: "Legend",   emoji: "🏆" }
    if (score >= 290) return { label: "Detective", emoji: "🕵️" }
    if (score >= 200) return { label: "Explorer",  emoji: "🔭" }
    return                  { label: "Rookie",     emoji: "🐣" }
  }

  function showModal() {
    if (document.getElementById("egg-modal-overlay")) return
    var rank = getRank(state.score)

    var overlay = document.createElement("div")
    overlay.id = "egg-modal-overlay"
    overlay.className = "egg-modal-overlay"

    var formHTML = state.submitted
      ? '<p class="egg-modal-done">✓ You\'re already on the wall.</p>'
      : [
          '<form id="egg-hunt-form" class="egg-modal-form" novalidate>',
            '<input type="text"  id="eh-name"  placeholder="Your name (optional)" autocomplete="name" />',
            '<input type="email" id="eh-email" placeholder="Email *" required autocomplete="email" />',
            '<button type="submit" id="eh-submit">Add me to the wall →</button>',
            '<p id="eh-error" class="egg-modal-error" style="display:none">Something went wrong — try again.</p>',
          '</form>',
        ].join("")

    overlay.innerHTML = [
      '<div class="egg-modal" role="dialog" aria-modal="true" aria-labelledby="egg-modal-title">',
        '<button class="egg-modal-close" aria-label="Close">✕</button>',
        '<div class="egg-modal-body">',
          '<div class="egg-modal-trophy">' + rank.emoji + '</div>',
          '<p class="egg-modal-rank">' + rank.label + '</p>',
          '<h2 id="egg-modal-title" class="egg-modal-title">You found all 10 eggs!</h2>',
          '<p class="egg-modal-score">Final score: <strong>' + state.score + ' pts</strong></p>',
          '<p class="egg-modal-subtitle">Leave your name on the Wall of Hunters.</p>',
          formHTML,
          '<p class="egg-modal-privacy">',
            'No spam, ever. Your email is only used to confirm your spot on the wall.',
            ' <a href="#privacy-note" onclick="document.getElementById(\'egg-modal-overlay\').remove()">Privacy note ↓</a>',
          '</p>',
        '</div>',
      '</div>',
    ].join("")

    document.body.appendChild(overlay)

    overlay.querySelector(".egg-modal-close").addEventListener("click", function () { overlay.remove() })
    overlay.addEventListener("click", function (e) { if (e.target === overlay) overlay.remove() })

    if (!state.submitted) {
      var form = document.getElementById("egg-hunt-form")
      var submitBtn = document.getElementById("eh-submit")
      var errorEl = document.getElementById("eh-error")

      form.addEventListener("submit", function (e) {
        e.preventDefault()
        var name  = document.getElementById("eh-name").value.trim()
        var email = document.getElementById("eh-email").value.trim()
        if (!email) return

        submitBtn.disabled = true
        submitBtn.textContent = "Sending…"
        if (errorEl) errorEl.style.display = "none"

        submitHunter(name, email)
          .then(function () {
            state.submitted = true
            saveState()
            var formEl = document.getElementById("egg-hunt-form")
            if (formEl) {
              formEl.outerHTML = '<p class="egg-modal-done">✓ You\'re on the wall. Thanks' + (name ? ", " + name : "") + '!</p>'
            }
          })
          .catch(function () {
            submitBtn.disabled = false
            submitBtn.textContent = "Add me to the wall →"
            if (errorEl) errorEl.style.display = ""
          })
      })
    }

    requestAnimationFrame(function () { overlay.classList.add("egg-modal-open") })
  }

  function submitHunter(name, email) {
    var cfg = window.EGG_HUNT_CONFIG || {}
    if (!cfg.emailjsServiceId || !cfg.emailjsTemplateId || !cfg.emailjsPublicKey) {
      return Promise.resolve()
    }
    return fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service_id:  cfg.emailjsServiceId,
        template_id: cfg.emailjsTemplateId,
        user_id:     cfg.emailjsPublicKey,
        template_params: {
          from_name:  name || "Anonymous Hunter",
          from_email: email,
          message: [
            "🥚 Egg Hunt Completed!",
            "Score: "       + state.score,
            "Eggs: "        + state.found.length + "/" + TOTAL,
            "Best combo: "  + state.comboBest + "×",
          ].join("\n"),
        },
      }),
    }).then(function (r) { if (!r.ok) throw new Error("send failed") })
  }

  /* ─── Persistent found-state via injected <style> (survives React re-renders) */

  var foundStyleEl = null

  function updateFoundStyles() {
    if (!foundStyleEl) {
      foundStyleEl = document.createElement("style")
      foundStyleEl.id = "egg-hunt-found-styles"
      document.head.appendChild(foundStyleEl)
    }
    if (state.found.length === 0) { foundStyleEl.textContent = ""; return }
    var sel = state.found.map(function (id) { return '.easter-egg[data-egg="' + id + '"]' }).join(",")
    foundStyleEl.textContent = sel + "{opacity:.45!important;pointer-events:none!important;text-decoration:line-through!important;text-decoration-thickness:1px!important;cursor:default!important}"
  }

  /* ─── Init ────────────────────────────────────────────────────── */

  function init() {
    if (!document.querySelector(".easter-egg")) return

    loadState()
    buildHUD()
    attachListeners()
    updateFoundStyles()

    if (state.completed && !state.submitted) {
      setTimeout(showModal, 900)
    }
  }

  /* ─── Public API ──────────────────────────────────────────────── */

  window.EggHunt = {
    init: init,
    reset: function () {
      state = { found: [], score: 0, comboCount: 0, comboBest: 1, lastFindTime: 0, startTime: 0, completed: false, submitted: false }
      try { localStorage.removeItem(STORAGE_KEY) } catch (e) {}
      var h = document.getElementById("egg-hud")
      var m = document.getElementById("egg-modal-overlay")
      if (h) h.remove()
      if (m) m.remove()
      hud = null; hudScoreEl = null; hudCountEl = null; prevScore = 0
      if (foundStyleEl) { foundStyleEl.textContent = ""; foundStyleEl = null }
      document.querySelectorAll(".easter-egg").forEach(function (el) { el._eggBound = false })
      init()
    },
    getScore: function () { return state.score },
    getProgress: function () { return state.found.length + "/" + TOTAL },
  }

  /* ─── Boot ────────────────────────────────────────────────────── */

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () { setTimeout(init, 350) })
  } else {
    setTimeout(init, 350)
  }
})()

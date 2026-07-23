(function () {
  'use strict';

  // ---- Prevent double-init ----
  if (window.__varsaflowLoaded) return;
  window.__varsaflowLoaded = true;

  // ---- CONFIG ----
  var WEBHOOK_URL = "https://harshjot717.app.n8n.cloud/webhook-test/caf4f8c2-8b16-4d1b-869a-0b75982b372e";

  // ---- Inject CSS ----
  var style = document.createElement('style');
  style.textContent = [
    '#varsaflow-chat-widget,#varsaflow-chat-widget *{box-sizing:border-box}',
    '#varsaflow-chat-widget{--vf-navy-900:#0d1526;--vf-navy-800:#142238;--vf-blue:#3d6ee0;--vf-teal:#17c6c6;--vf-ink:#16213e;--vf-bg-soft:#f5f7fb;--vf-border:#e4e8f1;--vf-text:#1c2333;--vf-text-mute:#7c869c;position:fixed;bottom:20px;right:20px;z-index:999999;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif}',
    '.vf-bubble-btn{width:58px;height:58px;border-radius:50%;border:none;cursor:pointer;padding:0;outline:none;background:linear-gradient(135deg,var(--vf-navy-900) 0%,var(--vf-ink) 100%);display:flex;align-items:center;justify-content:center;box-shadow:0 8px 24px rgba(13,21,38,.35);transition:transform .25s cubic-bezier(.34,1.56,.64,1),box-shadow .25s ease}',
    '.vf-bubble-btn:hover{transform:scale(1.06);box-shadow:0 10px 28px rgba(13,21,38,.45)}',
    '.vf-bubble-btn:active{transform:scale(.94)}',
    '.vf-bubble-icon{width:34px;height:34px;object-fit:contain;border-radius:50%}',
    '.vf-window{position:absolute;bottom:74px;right:0;width:360px;height:520px;max-height:75vh;background:#fff;border-radius:18px;box-shadow:0 16px 48px rgba(13,21,38,.22),0 4px 14px rgba(13,21,38,.1);display:flex;flex-direction:column;overflow:hidden;transform-origin:bottom right;animation:vf-pop .28s cubic-bezier(.34,1.56,.64,1)}',
    '@keyframes vf-pop{from{opacity:0;transform:translateY(16px) scale(.96)}to{opacity:1;transform:translateY(0) scale(1)}}',
    '.hidden{display:none!important}',
    '.vf-header{background:linear-gradient(135deg,var(--vf-navy-900) 0%,var(--vf-ink) 60%,#0f3460 100%);padding:14px 16px;display:flex;align-items:center;justify-content:space-between;flex-shrink:0}',
    '.vf-header-left{display:flex;align-items:center;gap:10px;min-width:0}',
    '.vf-header-mark{width:34px;height:34px;border-radius:9px;object-fit:contain;background:rgba(255,255,255,.04);flex-shrink:0}',
    '.vf-header-text{display:flex;flex-direction:column;min-width:0}',
    '.vf-header-name{color:#fff;font-size:15px;font-weight:600;letter-spacing:.1px;line-height:1.2}',
    '.vf-header-status{display:flex;align-items:center;gap:5px;font-size:11.5px;color:#a9b4cc;line-height:1.4}',
    '.vf-header-status i{width:6px;height:6px;border-radius:50%;background:#2ee6a6;display:inline-block;box-shadow:0 0 0 3px rgba(46,230,166,.18)}',
    '.vf-close-btn{background:none;border:none;color:#c3cbdb;cursor:pointer;width:30px;height:30px;border-radius:8px;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background .2s ease,color .2s ease}',
    '.vf-close-btn:hover{background:rgba(255,255,255,.08);color:#fff}',
    '.vf-messages{flex:1;overflow-y:auto;padding:16px 14px;display:flex;flex-direction:column;gap:12px;background:var(--vf-bg-soft)}',
    '.vf-messages::-webkit-scrollbar{width:5px}',
    '.vf-messages::-webkit-scrollbar-track{background:transparent}',
    '.vf-messages::-webkit-scrollbar-thumb{background:#cfd6e4;border-radius:3px}',
    '.vf-message{display:flex;align-items:flex-end;gap:8px;max-width:100%;animation:vf-fade-in .25s ease-out}',
    '@keyframes vf-fade-in{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}',
    '.vf-avatar{width:22px;height:22px;border-radius:50%;object-fit:contain;background:var(--vf-navy-900);flex-shrink:0}',
    '.vf-bubble{max-width:78%;padding:10px 13px;border-radius:14px;font-size:13.5px;line-height:1.45;word-wrap:break-word}',
    '.vf-bot .vf-bubble{background:#fff;color:var(--vf-text);border:1px solid var(--vf-border);border-bottom-left-radius:4px}',
    '.vf-user{justify-content:flex-end}',
    '.vf-user .vf-bubble{background:linear-gradient(135deg,var(--vf-blue) 0%,var(--vf-teal) 100%);color:#fff;border-bottom-right-radius:4px}',
    '.vf-typing{display:flex;align-items:flex-end;gap:8px;padding:0 14px 8px}',
    '.vf-typing-bubble{display:flex;align-items:center;gap:4px;padding:11px 14px}',
    '.vf-typing-bubble span{width:6px;height:6px;border-radius:50%;background:#b7c0d4;animation:vf-bounce 1.2s infinite ease-in-out}',
    '.vf-typing-bubble span:nth-child(2){animation-delay:.15s}',
    '.vf-typing-bubble span:nth-child(3){animation-delay:.3s}',
    '@keyframes vf-bounce{0%,60%,100%{transform:translateY(0);opacity:.5}30%{transform:translateY(-4px);opacity:1}}',
    '.vf-input-area{display:flex;align-items:center;gap:8px;padding:12px;background:#fff;border-top:1px solid var(--vf-border);flex-shrink:0}',
    '.vf-input{flex:1;border:1px solid var(--vf-border);border-radius:22px;padding:10px 15px;font-size:13.5px;outline:none;font-family:inherit;color:var(--vf-text);background:var(--vf-bg-soft);transition:border-color .2s ease,box-shadow .2s ease,background .2s ease}',
    '.vf-input:focus{border-color:var(--vf-blue);background:#fff;box-shadow:0 0 0 3px rgba(61,110,224,.12)}',
    '.vf-input::placeholder{color:var(--vf-text-mute)}',
    '.vf-send-btn{width:38px;height:38px;border-radius:50%;border:none;background:linear-gradient(135deg,var(--vf-blue) 0%,var(--vf-teal) 100%);color:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:transform .15s ease,box-shadow .15s ease;box-shadow:0 3px 10px rgba(61,110,224,.3)}',
    '.vf-send-btn:hover{transform:scale(1.06)}',
    '.vf-send-btn:active{transform:scale(.92)}',
    '.vf-send-btn:disabled{opacity:.5;cursor:default;transform:none}',
    '.vf-footer{text-align:center;font-size:10.5px;color:var(--vf-text-mute);padding:6px 0 10px;background:#fff;flex-shrink:0}',
    '.vf-footer strong{color:#4a5a7a}',

    /* ---- Component Styles ---- */

    /* Buttons */
    '.vf-buttons-row{display:flex;flex-wrap:wrap;gap:7px;padding:4px 0 2px 30px;animation:vf-fade-in .25s ease-out}',
    '.vf-btn{display:inline-flex;align-items:center;justify-content:center;padding:7px 14px;border-radius:20px;border:1.5px solid var(--vf-blue);background:#fff;color:var(--vf-blue);font-size:12.5px;font-weight:500;cursor:pointer;font-family:inherit;transition:background .18s ease,color .18s ease,transform .15s ease,box-shadow .15s ease;white-space:nowrap;box-shadow:0 1px 4px rgba(61,110,224,.1)}',
    '.vf-btn:hover{background:var(--vf-blue);color:#fff;transform:translateY(-1px);box-shadow:0 4px 12px rgba(61,110,224,.25)}',
    '.vf-btn:active{transform:translateY(0);box-shadow:none}',
    '.vf-btn.used{opacity:.5;cursor:default;pointer-events:none}',

    /* Quick Replies */
    '.vf-quick-replies-row{display:flex;flex-wrap:wrap;gap:6px;padding:4px 0 2px 30px;animation:vf-fade-in .25s ease-out}',
    '.vf-qr{display:inline-flex;align-items:center;justify-content:center;padding:6px 13px;border-radius:16px;border:1.5px solid var(--vf-teal);background:#fff;color:#0d9e9e;font-size:12px;font-weight:500;cursor:pointer;font-family:inherit;transition:background .18s ease,color .18s ease,transform .15s ease;white-space:nowrap}',
    '.vf-qr:hover{background:var(--vf-teal);color:#fff;transform:translateY(-1px)}',
    '.vf-qr:active{transform:translateY(0)}',
    '.vf-qr.used{opacity:.5;cursor:default;pointer-events:none}',

    /* Carousel */
    '.vf-carousel-wrapper{padding:4px 0 2px 30px;animation:vf-fade-in .25s ease-out;overflow:hidden}',
    '.vf-carousel{display:flex;gap:10px;overflow-x:auto;padding-bottom:8px;scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch}',
    '.vf-carousel::-webkit-scrollbar{height:4px}',
    '.vf-carousel::-webkit-scrollbar-track{background:transparent}',
    '.vf-carousel::-webkit-scrollbar-thumb{background:#cfd6e4;border-radius:2px}',
    '.vf-carousel-card{flex:0 0 180px;background:#fff;border-radius:14px;border:1px solid var(--vf-border);overflow:hidden;scroll-snap-align:start;box-shadow:0 2px 10px rgba(13,21,38,.08);transition:transform .2s ease,box-shadow .2s ease}',
    '.vf-carousel-card:hover{transform:translateY(-2px);box-shadow:0 6px 18px rgba(13,21,38,.14)}',
    '.vf-carousel-img{width:100%;height:110px;object-fit:cover;background:linear-gradient(135deg,#e8edf5 0%,#d0d8ea 100%);display:flex;align-items:center;justify-content:center;font-size:28px}',
    '.vf-carousel-img img{width:100%;height:100%;object-fit:cover}',
    '.vf-carousel-body{padding:10px 10px 12px}',
    '.vf-carousel-title{font-size:12.5px;font-weight:600;color:var(--vf-text);margin:0 0 4px;line-height:1.3}',
    '.vf-carousel-price{font-size:13px;font-weight:700;color:var(--vf-blue);margin:0 0 8px}',
    '.vf-carousel-btn{width:100%;padding:7px 0;border-radius:10px;border:none;background:linear-gradient(135deg,var(--vf-blue) 0%,var(--vf-teal) 100%);color:#fff;font-size:12px;font-weight:600;cursor:pointer;font-family:inherit;transition:opacity .18s ease,transform .15s ease}',
    '.vf-carousel-btn:hover{opacity:.88;transform:translateY(-1px)}',
    '.vf-carousel-btn:active{transform:translateY(0)}',

    '@media(max-width:480px){#varsaflow-chat-widget{bottom:14px;right:14px}.vf-window{width:calc(100vw - 24px);height:min(72vh,560px);bottom:70px;right:-6px}.vf-bubble-btn{width:54px;height:54px}}'
  ].join('');
  document.head.appendChild(style);

  // ---- Inject HTML ----
  var container = document.createElement('div');
  container.id = 'varsaflow-chat-widget';
  container.innerHTML = [
    '<button id="varsaflow-chat-bubble" class="vf-bubble-btn" aria-label="Open chat">',
    '  <img src="https://i.ibb.co/1YH0F6F0/image-5.png" alt="" class="vf-bubble-icon">',
    '</button>',
    '<div id="varsaflow-chat-window" class="vf-window hidden" role="dialog" aria-label="Varsaflow chat">',
    '  <div class="vf-header">',
    '    <div class="vf-header-left">',
    '      <img src="https://i.ibb.co/1YH0F6F0/image-5.png" alt="" class="vf-header-mark">',
    '      <div class="vf-header-text">',
    '        <span class="vf-header-name">Varsaflow</span>',
    '        <span class="vf-header-status"><i></i>Online</span>',
    '      </div>',
    '    </div>',
    '    <button id="varsaflow-close-btn" class="vf-close-btn" aria-label="Close chat">',
    '      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',
    '    </button>',
    '  </div>',
    '  <div id="varsaflow-chat-messages" class="vf-messages">',
    '    <div class="vf-message vf-bot">',
    '      <img src="https://i.ibb.co/1YH0F6F0/image-5.png" alt="" class="vf-avatar">',
    '      <div class="vf-bubble">Hi there \uD83D\uDC4B Welcome to Varsaflow. How can I help you today?</div>',
    '    </div>',
    '  </div>',
    '  <div id="varsaflow-typing" class="vf-typing hidden">',
    '    <img src="https://i.ibb.co/1YH0F6F0/image-5.png" alt="" class="vf-avatar">',
    '    <div class="vf-bubble vf-typing-bubble"><span></span><span></span><span></span></div>',
    '  </div>',
    '  <div class="vf-input-area">',
    '    <input type="text" id="varsaflow-input" class="vf-input" placeholder="Type your message\u2026" autocomplete="off" maxlength="500">',
    '    <button id="varsaflow-send-btn" class="vf-send-btn" aria-label="Send message">',
    '      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>',
    '    </button>',
    '  </div>',
    '  <div class="vf-footer">Powered by <strong>Varsaflow.ai</strong></div>',
    '</div>'
  ].join('');
  document.body.appendChild(container);

  // ---- Wire up events ----
  var bubble      = document.getElementById('varsaflow-chat-bubble');
  var win         = document.getElementById('varsaflow-chat-window');
  var closeBtn    = document.getElementById('varsaflow-close-btn');
  var input       = document.getElementById('varsaflow-input');
  var sendBtn     = document.getElementById('varsaflow-send-btn');
  var messages    = document.getElementById('varsaflow-chat-messages');
  var typingIndicator = document.getElementById('varsaflow-typing');

  bubble.addEventListener('click', function () {
    win.classList.toggle('hidden');
    if (!win.classList.contains('hidden')) input.focus();
  });

  closeBtn.addEventListener('click', function () {
    win.classList.add('hidden');
  });

  sendBtn.addEventListener('click', sendMessage);
  input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });

  // ---- Core message renderer ----
  function addMessage(text, sender) {
    var row = document.createElement('div');
    row.className = 'vf-message ' + (sender === 'user' ? 'vf-user' : 'vf-bot');
    var bubbleHtml = '<div class="vf-bubble"></div>';
    if (sender === 'bot') {
      row.innerHTML = '<img src="https://i.ibb.co/1YH0F6F0/image-5.png" alt="" class="vf-avatar">' + bubbleHtml;
    } else {
      row.innerHTML = bubbleHtml;
    }
    row.querySelector('.vf-bubble').textContent = text;
    messages.appendChild(row);
    scrollToBottom();
  }

  // ---- Component renderers ----

  /**
   * Render a row of action buttons.
   * Each item: { text: string, value: string }
   * Clicking a button sends its value as a user message and disables the row.
   */
  function renderButtons(items) {
    var row = document.createElement('div');
    row.className = 'vf-buttons-row';
    items.forEach(function (item) {
      var btn = document.createElement('button');
      btn.className = 'vf-btn';
      btn.textContent = item.text || item.value || '';
      btn.addEventListener('click', function () {
        // Disable all buttons in this row
        var siblings = row.querySelectorAll('.vf-btn');
        siblings.forEach(function (b) { b.classList.add('used'); });
        // Send the value as a user message
        var sendValue = item.value || item.text || '';
        addMessage(item.text || sendValue, 'user');
        dispatchMessage(sendValue);
      });
      row.appendChild(btn);
    });
    messages.appendChild(row);
    scrollToBottom();
  }

  /**
   * Render quick reply chips.
   * Each item is a plain string.
   * Clicking sends that string as a user message and disables the row.
   */
  function renderQuickReplies(items) {
    var row = document.createElement('div');
    row.className = 'vf-quick-replies-row';
    items.forEach(function (item) {
      var chip = document.createElement('button');
      chip.className = 'vf-qr';
      chip.textContent = item;
      chip.addEventListener('click', function () {
        var siblings = row.querySelectorAll('.vf-qr');
        siblings.forEach(function (c) { c.classList.add('used'); });
        addMessage(item, 'user');
        dispatchMessage(item);
      });
      row.appendChild(chip);
    });
    messages.appendChild(row);
    scrollToBottom();
  }

  /**
   * Render a horizontally scrollable carousel.
   * Each item: { title, image, price, button }
   * Clicking the card button sends the title as a user message.
   */
  function renderCarousel(items) {
    var wrapper = document.createElement('div');
    wrapper.className = 'vf-carousel-wrapper';

    var track = document.createElement('div');
    track.className = 'vf-carousel';

    items.forEach(function (item) {
      var card = document.createElement('div');
      card.className = 'vf-carousel-card';

      // Image area
      var imgWrap = document.createElement('div');
      imgWrap.className = 'vf-carousel-img';
      if (item.image && item.image !== '...') {
        var img = document.createElement('img');
        img.src = item.image;
        img.alt = item.title || '';
        imgWrap.appendChild(img);
      } else {
        // Placeholder emoji when no real image
        imgWrap.textContent = '\uD83D\uDDBC\uFE0F';
      }

      // Body
      var body = document.createElement('div');
      body.className = 'vf-carousel-body';

      if (item.title) {
        var title = document.createElement('p');
        title.className = 'vf-carousel-title';
        title.textContent = item.title;
        body.appendChild(title);
      }

      if (item.price) {
        var price = document.createElement('p');
        price.className = 'vf-carousel-price';
        price.textContent = item.price;
        body.appendChild(price);
      }

      if (item.button) {
        var cardBtn = document.createElement('button');
        cardBtn.className = 'vf-carousel-btn';
        cardBtn.textContent = item.button;
        cardBtn.addEventListener('click', function () {
          addMessage(item.button, 'user');
          dispatchMessage(item.title || item.button);
        });
        body.appendChild(cardBtn);
      }

      card.appendChild(imgWrap);
      card.appendChild(body);
      track.appendChild(card);
    });

    wrapper.appendChild(track);
    messages.appendChild(wrapper);
    scrollToBottom();
  }

  // ---- Render full bot response (reply text + components) ----
  function renderBotResponse(data) {
    // 1. Render the text reply (if present)
    var replyText = data.reply || data.message || data.text || null;
    if (replyText) {
      addMessage(replyText, 'bot');
    }

    // 2. Render each component in order
    var components = data.components;
    if (Array.isArray(components)) {
      components.forEach(function (component) {
        switch (component.type) {
          case 'buttons':
            if (Array.isArray(component.items) && component.items.length) {
              renderButtons(component.items);
            }
            break;
          case 'quick_replies':
            if (Array.isArray(component.items) && component.items.length) {
              renderQuickReplies(component.items);
            }
            break;
          case 'carousel':
            if (Array.isArray(component.items) && component.items.length) {
              renderCarousel(component.items);
            }
            break;
          default:
            // Unknown component type — silently skip
            break;
        }
      });
    }
  }

  // ---- Dispatch a message to the webhook (used by component clicks) ----
  function dispatchMessage(text) {
    sendBtn.disabled = true;
    showTyping(true);
    var params = new URLSearchParams({
      message: text,
      timestamp: new Date().toISOString()
    });
    fetch(WEBHOOK_URL + '?' + params.toString(), { method: 'GET' })
      .then(function (res) { return res.json(); })
      .then(function (data) {
        showTyping(false);
        renderBotResponse(data);
      })
      .catch(function () {
        showTyping(false);
        addMessage('Sorry, something went wrong. Please try again in a moment.', 'bot');
      })
      .finally(function () {
        sendBtn.disabled = false;
      });
  }

  function showTyping(show) {
    typingIndicator.classList.toggle('hidden', !show);
    scrollToBottom();
  }

  function scrollToBottom() {
    messages.scrollTop = messages.scrollHeight;
  }

  // ---- Main send handler ----
  function sendMessage() {
    var text = input.value.trim();
    if (!text) return;
    addMessage(text, 'user');
    input.value = '';
    input.focus();
    dispatchMessage(text);
  }

})();

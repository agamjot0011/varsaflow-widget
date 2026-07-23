
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
    '.vf-button-group{display:flex;flex-wrap:wrap;gap:8px;max-width:78%}',
    '.vf-chat-button{padding:9px 14px;border-radius:999px;border:1px solid var(--vf-border);background:#fff;color:var(--vf-text);font-size:13px;cursor:pointer;transition:background .2s ease,color .2s ease,border-color .2s ease}',
    '.vf-chat-button:hover{background:var(--vf-blue);border-color:var(--vf-blue);color:#fff}',
    '.vf-carousel{display:flex;overflow-x:auto;gap:12px;max-width:100%;padding-bottom:4px}',
    '.vf-carousel::-webkit-scrollbar{height:5px}',
    '.vf-carousel::-webkit-scrollbar-thumb{background:#cfd6e4;border-radius:3px}',
    '.vf-card{min-width:150px;max-width:150px;background:#fff;border:1px solid var(--vf-border);border-radius:12px;padding:10px;flex-shrink:0}',
    '.vf-card-image{width:100%;height:90px;object-fit:cover;border-radius:8px;background:var(--vf-bg-soft)}',
    '.vf-card-title{font-size:13px;font-weight:600;color:var(--vf-text);margin-top:8px;line-height:1.3}',
    '.vf-card-price{font-size:12.5px;color:var(--vf-text-mute);margin-top:2px}',
    '.vf-card-btn{width:100%;margin-top:8px;padding:8px;border-radius:8px;border:none;background:linear-gradient(135deg,var(--vf-blue) 0%,var(--vf-teal) 100%);color:#fff;font-size:12.5px;cursor:pointer}',
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
  var bubble = document.getElementById('varsaflow-chat-bubble');
  var win    = document.getElementById('varsaflow-chat-window');
  var closeBtn = document.getElementById('varsaflow-close-btn');
  var input    = document.getElementById('varsaflow-input');
  var sendBtn  = document.getElementById('varsaflow-send-btn');
  var messages = document.getElementById('varsaflow-chat-messages');
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

  function showTyping(show) {
    typingIndicator.classList.toggle('hidden', !show);
    scrollToBottom();
  }

  function scrollToBottom() {
    messages.scrollTop = messages.scrollHeight;
  }

  function sendMessage() {
    var text = input.value.trim();
    if (!text) return;
    addMessage(text, 'user');
    input.value = '';
    input.focus();
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
        renderResponse(data);
      })
      .catch(function () {
        showTyping(false);
        addMessage("Sorry, something went wrong. Please try again in a moment.", 'bot');
      })
      .finally(function () {
        sendBtn.disabled = false;
      });
  }

  // ---- Component rendering (buttons / quick replies / carousel) ----

  function renderResponse(data) {
    if (data && data.reply) {
      addMessage(data.reply, 'bot');
    }

    if (!data || !data.components || !Array.isArray(data.components)) return;

    data.components.forEach(function (component) {
      switch (component.type) {
        case 'buttons':
          renderButtons(component.items || []);
          break;
        case 'quick_replies':
          renderQuickReplies(component.items || []);
          break;
        case 'carousel':
          renderCarousel(component.items || []);
          break;
      }
    });
  }

  function sendComponentValue(value, label) {
    addMessage(label || value, 'user');
    sendBtn.disabled = true;
    showTyping(true);

    var params = new URLSearchParams({
      message: value,
      timestamp: new Date().toISOString()
    });

    fetch(WEBHOOK_URL + '?' + params.toString(), { method: 'GET' })
      .then(function (res) { return res.json(); })
      .then(function (data) {
        showTyping(false);
        renderResponse(data);
      })
      .catch(function () {
        showTyping(false);
        addMessage("Sorry, something went wrong. Please try again in a moment.", 'bot');
      })
      .finally(function () {
        sendBtn.disabled = false;
      });
  }

  function renderButtons(items) {
    var row = document.createElement('div');
    row.className = 'vf-message vf-bot';
    row.innerHTML = '<img src="https://i.ibb.co/1YH0F6F0/image-5.png" alt="" class="vf-avatar"><div class="vf-button-group"></div>';

    var group = row.querySelector('.vf-button-group');

    items.forEach(function (item) {
      var b = document.createElement('button');
      b.className = 'vf-chat-button';
      b.innerText = item.text;
      b.onclick = function () {
        row.remove();
        sendComponentValue(item.value, item.text);
      };
      group.appendChild(b);
    });

    messages.appendChild(row);
    scrollToBottom();
  }

  function renderQuickReplies(items) {
    renderButtons(items.map(function (i) {
      return { text: i, value: i };
    }));
  }

  function renderCarousel(items) {
    var row = document.createElement('div');
    row.className = 'vf-message vf-bot';
    row.innerHTML = '<img src="https://i.ibb.co/1YH0F6F0/image-5.png" alt="" class="vf-avatar"><div class="vf-carousel"></div>';

    var wrap = row.querySelector('.vf-carousel');

    items.forEach(function (card) {
      var el = document.createElement('div');
      el.className = 'vf-card';
      el.innerHTML =
        '<img class="vf-card-image">' +
        '<div class="vf-card-title"></div>' +
        '<div class="vf-card-price"></div>' +
        '<button class="vf-card-btn"></button>';

      el.querySelector('.vf-card-image').src = card.image;
      el.querySelector('.vf-card-title').textContent = card.title;
      el.querySelector('.vf-card-price').textContent = card.price;
      el.querySelector('.vf-card-btn').textContent = card.button;
      el.querySelector('button').onclick = function () {
        sendComponentValue(card.title, card.button);
      };

      wrap.appendChild(el);
    });

    messages.appendChild(row);
    scrollToBottom();
  }
})();

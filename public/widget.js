(function() {
  'use strict';

  // Widget styles
  const styles = `
    .onetech-widget-container {
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 9999;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }

    .onetech-chat-bubble {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: linear-gradient(135deg, #00ff87, #60efff);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 12px rgba(0, 255, 135, 0.4);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .onetech-chat-bubble:hover {
      transform: scale(1.1);
      box-shadow: 0 6px 20px rgba(0, 255, 135, 0.6);
    }

    .onetech-chat-bubble svg {
      width: 28px;
      height: 28px;
      fill: #0a0a0a;
    }

    .onetech-chat-window {
      position: fixed;
      bottom: 100px;
      right: 20px;
      width: 380px;
      height: 600px;
      max-height: calc(100vh - 140px);
      background: #ffffff;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
      display: none;
      flex-direction: column;
      overflow: hidden;
      z-index: 9998;
    }

    .onetech-chat-window.open {
      display: flex;
      animation: slideUp 0.3s ease;
    }

    @keyframes slideUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .onetech-chat-header {
      background: linear-gradient(135deg, #0a0a0a, #1a1a2e);
      color: white;
      padding: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .onetech-chat-header h3 {
      margin: 0;
      font-size: 18px;
      font-weight: 600;
    }

    .onetech-chat-header p {
      margin: 4px 0 0 0;
      font-size: 12px;
      opacity: 0.8;
    }

    .onetech-close-btn {
      background: none;
      border: none;
      color: white;
      cursor: pointer;
      padding: 4px;
      opacity: 0.8;
      transition: opacity 0.2s;
    }

    .onetech-close-btn:hover {
      opacity: 1;
    }

    .onetech-chat-messages {
      flex: 1;
      overflow-y: auto;
      padding: 20px;
      background: #f8f9fa;
    }

    .onetech-message {
      margin-bottom: 16px;
      display: flex;
      gap: 8px;
    }

    .onetech-message.user {
      flex-direction: row-reverse;
    }

    .onetech-message-content {
      max-width: 75%;
      padding: 12px 16px;
      border-radius: 12px;
      font-size: 14px;
      line-height: 1.5;
    }

    .onetech-message.bot .onetech-message-content {
      background: white;
      color: #0a0a0a;
      border: 1px solid #e9ecef;
    }

    .onetech-message.user .onetech-message-content {
      background: linear-gradient(135deg, #00ff87, #60efff);
      color: #0a0a0a;
    }

    .onetech-chat-input-container {
      padding: 16px;
      background: white;
      border-top: 1px solid #e9ecef;
    }

    .onetech-chat-input {
      width: 100%;
      padding: 12px 16px;
      border: 1px solid #e9ecef;
      border-radius: 24px;
      font-size: 14px;
      outline: none;
      transition: border-color 0.2s;
    }

    .onetech-chat-input:focus {
      border-color: #00ff87;
    }

    .onetech-typing-indicator {
      display: none;
      align-items: center;
      gap: 4px;
      padding: 12px 16px;
      background: white;
      border-radius: 12px;
      width: fit-content;
      border: 1px solid #e9ecef;
    }

    .onetech-typing-indicator.active {
      display: flex;
    }

    .onetech-typing-dot {
      width: 6px;
      height: 6px;
      background: #00ff87;
      border-radius: 50%;
      animation: typing 1.4s infinite;
    }

    .onetech-typing-dot:nth-child(2) {
      animation-delay: 0.2s;
    }

    .onetech-typing-dot:nth-child(3) {
      animation-delay: 0.4s;
    }

    @keyframes typing {
      0%, 60%, 100% {
        opacity: 0.3;
        transform: translateY(0);
      }
      30% {
        opacity: 1;
        transform: translateY(-8px);
      }
    }

    @media (max-width: 480px) {
      .onetech-chat-window {
        width: calc(100vw - 40px);
        height: calc(100vh - 140px);
        bottom: 100px;
        right: 20px;
      }
    }
  `;

  // Inject styles
  const styleSheet = document.createElement('style');
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);

  // Create widget HTML
  const widgetHTML = `
    <div class="onetech-widget-container">
      <div class="onetech-chat-bubble" id="onetech-bubble">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
          <path d="M7 9h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z"/>
        </svg>
      </div>
      <div class="onetech-chat-window" id="onetech-window">
        <div class="onetech-chat-header">
          <div>
            <h3>O.N.E.Tech Assistant</h3>
            <p>We typically reply in a few minutes</p>
          </div>
          <button class="onetech-close-btn" id="onetech-close">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div class="onetech-chat-messages" id="onetech-messages">
          <div class="onetech-message bot">
            <div class="onetech-message-content">
              👋 Hi! I'm the O.N.E.Tech AI Assistant. How can I help you automate your business today?
            </div>
          </div>
        </div>
        <div class="onetech-chat-input-container">
          <input 
            type="text" 
            class="onetech-chat-input" 
            id="onetech-input" 
            placeholder="Type your message..."
          />
        </div>
      </div>
    </div>
  `;

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    const container = document.createElement('div');
    container.innerHTML = widgetHTML;
    document.body.appendChild(container);

    const bubble = document.getElementById('onetech-bubble');
    const chatWindow = document.getElementById('onetech-window');
    const closeBtn = document.getElementById('onetech-close');
    const input = document.getElementById('onetech-input');
    const messagesContainer = document.getElementById('onetech-messages');

    // Toggle chat window
    bubble.addEventListener('click', () => {
      chatWindow.classList.toggle('open');
      if (chatWindow.classList.contains('open')) {
        input.focus();
      }
    });

    closeBtn.addEventListener('click', () => {
      chatWindow.classList.remove('open');
    });

    // Handle message send
    input.addEventListener('keypress', async (e) => {
      if (e.key === 'Enter' && input.value.trim()) {
        const message = input.value.trim();
        input.value = '';

        // Add user message
        addMessage(message, 'user');

        // Show typing indicator
        const typingIndicator = document.createElement('div');
        typingIndicator.className = 'onetech-message bot';
        typingIndicator.innerHTML = `
          <div class="onetech-typing-indicator active">
            <div class="onetech-typing-dot"></div>
            <div class="onetech-typing-dot"></div>
            <div class="onetech-typing-dot"></div>
          </div>
        `;
        messagesContainer.appendChild(typingIndicator);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;

        // Simulate AI response
        setTimeout(() => {
          typingIndicator.remove();
          const response = generateResponse(message);
          addMessage(response, 'bot');
        }, 1500);
      }
    });

    function addMessage(text, sender) {
      const messageDiv = document.createElement('div');
      messageDiv.className = `onetech-message ${sender}`;
      messageDiv.innerHTML = `<div class="onetech-message-content">${escapeHtml(text)}</div>`;
      messagesContainer.appendChild(messageDiv);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    function generateResponse(message) {
      const lowerMessage = message.toLowerCase();
      
      if (lowerMessage.includes('demo') || lowerMessage.includes('book')) {
        return "Great! I'd be happy to schedule a demo for you. Please visit our contact page or email us at support@onetechautomation.com to book a time that works for you.";
      }
      
      if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('pricing')) {
        return "Our pricing varies based on your needs. We offer plans starting from €299/month for boutique businesses up to enterprise solutions. Would you like to schedule a demo to discuss the best plan for your business?";
      }
      
      if (lowerMessage.includes('real estate')) {
        return "Our AI Real Estate Automation helps agencies capture leads 24/7, qualify buyers, match properties, and book viewings automatically. It can increase your lead capture by 40% and conversion rates by 5-15%. Interested in learning more?";
      }
      
      if (lowerMessage.includes('ecommerce') || lowerMessage.includes('shop')) {
        return "We help ecommerce brands automate sales on WhatsApp, Instagram, and Telegram - turning conversations into revenue. Our systems handle product recommendations, abandoned cart recovery, and customer support 24/7.";
      }
      
      if (lowerMessage.includes('whatsapp') || lowerMessage.includes('instagram') || lowerMessage.includes('telegram')) {
        return "Yes! We build AI automation for WhatsApp, Instagram DMs, and Telegram. Our systems respond instantly, qualify leads, and guide customers through purchase - all automatically. Want to see how it works?";
      }
      
      if (lowerMessage.includes('beauty') || lowerMessage.includes('clinic') || lowerMessage.includes('salon')) {
        return "Our AI Receptionist for beauty clinics handles bookings 24/7, recovers 20-40% of missed calls via SMS, and syncs everything to your calendar. Perfect for aesthetic clinics, salons, and wellness centers.";
      }
      
      if (lowerMessage.includes('lead')) {
        return "Our AI Lead Capture System works across your website, WhatsApp, and Instagram to capture and qualify leads instantly. It remembers returning visitors and scrapes your website to answer questions accurately.";
      }

      if (lowerMessage.includes('how') || lowerMessage.includes('work')) {
        return "Our AI systems integrate with your existing platforms (website, WhatsApp, Instagram, Telegram) and handle customer conversations automatically - capturing leads, answering questions, booking appointments, and recovering lost sales 24/7.";
      }

      if (lowerMessage.includes('help') || lowerMessage.includes('support')) {
        return "I'm here to help! You can ask me about our AI automation services for real estate, ecommerce, beauty clinics, or lead capture. Or you can reach our team at support@onetechautomation.com";
      }

      return "Thanks for your message! Our AI automation services help businesses capture more leads, book more appointments, and increase revenue through automated conversations. Would you like to schedule a demo or learn more about a specific solution?";
    }

    function escapeHtml(text) {
      const div = document.createElement('div');
      div.textContent = text;
      return div.innerHTML;
    }
  }
})();
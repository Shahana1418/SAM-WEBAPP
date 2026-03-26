/**
 * SAM Platform — AI AGENT (Secure Edition)
 * Optimized for GitHub Pages with Local-First AI Fallbacks
 */

window.toggleAIChat = function() {
    const win = document.getElementById('ai-chat-window');
    win.style.display = (win.style.display === 'none' || win.style.display === '') ? 'flex' : 'none';
};

window.sendAIChat = async function() {
    const input = document.getElementById('ai-chat-input');
    const msg = input.value.trim();
    if (!msg) return;

    appendMessage('You', msg, 'user');
    input.value = '';

    const loadingId = 'ai-loading-' + Date.now();
    appendMessage('SAM AI', 'Processing...', 'ai', loadingId);
    const loadingEl = document.getElementById(loadingId);

    // Initial Security Check (Local)
    const isMalicious = /<script|javascript:|SELECT|UNION ALL|DROP TABLE/i.test(msg);
    if (isMalicious) {
        loadingEl.textContent = "🛡️ AI Security Alert: Your input contains patterns blocked by our security brains. Please keep it academic!";
        return;
    }

    try {
        // Use window.API_BASE or fallback to empty string
        const base = window.API_BASE || (typeof API_BASE !== 'undefined' ? API_BASE : '');
        console.log('[SAM-AI] Attempting backend fetch at:', base + '/api/ai/chat');

        // --- 1. ATTEMPT BACKEND PROXY ---
        const response = await fetch(base + '/api/ai/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: msg })
        });

        if (response.ok) {
            const data = await response.json();
            console.log('[SAM-AI] Backend response received:', data);
            if (data.response) {
                loadingEl.innerHTML = formatAIResponse(data.response);
                return;
            }
        }
        throw new Error('Backend responded with error: ' + response.status);
    } catch (e) {
        // --- 2. FALLBACK: LOCAL BROWSER AI (Transformers.js) ---
        console.warn('[SAM-AI] Backend connection failed. Falling back to Local AI. Error:', e.message);
        
        if (window.TransformersAI && window.TransformersAI.pipeline) {
            loadingEl.textContent = "🧠 Running local security brain (Offline mode)...";
            try {
                const classifier = await window.TransformersAI.pipeline('text-classification', 'Xenova/distilbert-base-uncased-finetuned-sst-2-english');
                const result = await classifier(msg);
                
                const label = result[0].label;
                let responseText = `[Offline Mode] Your message analyzed: "${label}". `;
                
                if (msg.toLowerCase().includes('roadmap') || msg.toLowerCase().includes('career')) {
                    responseText += "To get full career maps, open our dedicated 'Career Dashboard' on the main portal! (Backend is currently waking up on Render)";
                } else {
                    responseText += "I am currently running in privacy-mode directly in your browser tab because the backend is sleeping.";
                }
                
                loadingEl.textContent = responseText;
            } catch (err) {
                loadingEl.textContent = "Local AI is initializing. Please wait a moment.";
            }
        } else {
             loadingEl.textContent = "Backend Offline. If you just saved, please wait 60 seconds for Render to wake up.";
        }
    }

    const chatMessages = document.getElementById('ai-chat-messages');
    chatMessages.scrollTop = chatMessages.scrollHeight;
};

// Formatting helper for long AI responses
function formatAIResponse(text) {
    return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
               .replace(/\n/g, '<br>');
}

function appendMessage(sender, text, type, id = '') {
    const chatMessages = document.getElementById('ai-chat-messages');
    const msgDiv = document.createElement('div');
    
    msgDiv.style.padding = '12px 16px';
    msgDiv.style.borderRadius = '12px';
    msgDiv.style.fontSize = '0.9rem';
    msgDiv.style.maxWidth = '85%';
    msgDiv.style.lineHeight = '1.5';
    
    if (type === 'user') {
        msgDiv.style.background = 'var(--primary)';
        msgDiv.style.color = '#fff';
        msgDiv.style.alignSelf = 'flex-end';
        msgDiv.style.borderBottomRightRadius = '4px';
    } else {
        msgDiv.style.background = '#fff';
        msgDiv.style.color = '#374151';
        msgDiv.style.border = '1px solid #e5e7eb';
        msgDiv.style.alignSelf = 'flex-start';
        msgDiv.style.borderBottomLeftRadius = '4px';
    }
    
    if (id) msgDiv.id = id;
    msgDiv.innerHTML = text; // Allow formatted HTML for AI messages
    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

/**
 * SAM Platform — AI AGENT
 * Handles Local AI (Transformers.js) and Secure Backend AI Chat
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
    appendMessage('SAM AI', 'Typing...', 'ai', loadingId);

    try {
        // --- SECURE BACKEND CHAT ---
        // We use the proxy route to hide our API key on the backend
        const response = await fetch((typeof API_BASE !== 'undefined' ? API_BASE : '') + '/api/ai/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: msg })
        });

        const data = await response.json();
        const loadingEl = document.getElementById(loadingId);
        
        if (data.response) {
            loadingEl.textContent = data.response;
        } else {
            // --- FALLBACK: LOCAL AI (Transformers.js) ---
            // If backend is unavailable or fails, we use local browser AI
            if (window.TransformersAI && window.TransformersAI.pipeline) {
                loadingEl.textContent = "Backend busy. Using local analyzer...";
                const classifier = await window.TransformersAI.pipeline('text-classification', 'Xenova/distilbert-base-uncased-finetuned-sst-2-english');
                const result = await classifier(msg);
                loadingEl.textContent = "[Local AI Result] Your message sentiment is: " + result[0].label + " (" + Math.round(result[0].score * 100) + "% confidence).";
            } else {
                loadingEl.textContent = "AI services are currently offline. Check backend connection.";
            }
        }
    } catch (e) {
        console.error('AI Chat Error:', e);
        document.getElementById(loadingId).textContent = "Error connecting to AI. Make sure backend is running on :5000";
    }

    const chatMessages = document.getElementById('ai-chat-messages');
    chatMessages.scrollTop = chatMessages.scrollHeight;
};

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
    msgDiv.textContent = text;
    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

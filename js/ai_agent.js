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
        // --- 1. ATTEMPT BACKEND PROXY ---
        const response = await fetch((typeof API_BASE !== 'undefined' ? API_BASE : '') + '/api/ai/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: msg })
        });

        if (response.ok) {
            const data = await response.json();
            if (data.response) {
                loadingEl.textContent = data.response;
                return;
            }
        }
        throw new Error('Backend unavailable');
    } catch (e) {
        // --- 2. FALLBACK: LOCAL BROWSER AI (Transformers.js) ---
        console.log('[SAM-AI] Backend not found or on GitHub Pages. Falling back to Local AI.');
        
        if (window.TransformersAI && window.TransformersAI.pipeline) {
            loadingEl.textContent = "🧠 Running local security brain (no backend)...";
            try {
                const classifier = await window.TransformersAI.pipeline('text-classification', 'Xenova/distilbert-base-uncased-finetuned-sst-2-english');
                const result = await classifier(msg);
                
                const label = result[0].label;
                let responseText = `[Offline Mode] Your message analyzed: "${label}". `;
                
                if (msg.toLowerCase().includes('roadmap') || msg.toLowerCase().includes('career')) {
                    responseText += "To get full career maps, open our dedicated 'Career Dashboard' on the main portal!";
                } else {
                    responseText += "I am currently running in privacy-mode directly in your browser tab.";
                }
                
                loadingEl.textContent = responseText;
            } catch (err) {
                loadingEl.textContent = "Local AI is initializing. Please wait a moment and try again.";
            }
        } else {
             loadingEl.textContent = "Backend Offline. Note: GitHub Pages doesn't run Node.js backends. To enable full AI, run the backend folder locally on Port 5000.";
        }
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

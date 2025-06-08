

document.getElementById("myButton").addEventListener("click", function() {
    // Replace 'path/to/your/document.pdf' with the actual file path or URL
    window.open("documents/Touch Screen.pdf", "_blank");
});

// Add click event to all "Read More" buttons
document.querySelectorAll(".read-more").forEach(button => {
    button.addEventListener("click", function() {
        alert("You clicked 'Read More'!"); // Replace with your desired action
        // Example: Redirect to another page
        // window.location.href = "https://example.com/blog-post";
    });
});



  

/// whats app in the left///
    function toggleChat() {
      const popup = document.getElementById('chatPopup');
      popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
    }
    // Chat elements
    const chatToggle = document.getElementById('chatToggle');
    const chatWindow = document.querySelector('.chat-window');
    const chatInput = document.getElementById('chatInput');
    const sendButton = document.getElementById('sendButton');
    const chatMessages = document.getElementById('chatMessages');
    const typingIndicator = document.getElementById('typingIndicator');
    const notificationDot = document.querySelector('.notification-dot');
    const toggleIcon = chatToggle.querySelector('span');
    
    // Toggle chat window
    chatToggle.addEventListener('click', () => {
      chatWindow.classList.toggle('active');
      toggleIcon.classList.toggle('chat-icon');
      toggleIcon.classList.toggle('close-icon');
      
      if (chatWindow.classList.contains('active')) {
        chatInput.focus();
        notificationDot.classList.remove('active');
      }
    });
    
    // Enable/disable send button based on input
    chatInput.addEventListener('input', () => {
      sendButton.disabled = chatInput.value.trim() === '';
    });
    
    // Send message on Enter key
    chatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && chatInput.value.trim() !== '') {
        sendMessage();
      }
    });
    
    // Send button click
    sendButton.addEventListener('click', sendMessage);
    
    // Send message function
    function sendMessage() {
      const messageText = chatInput.value.trim();
      if (messageText === '') return;
      
      // Add user message
      addMessage(messageText, 'user');
      chatInput.value = '';
      sendButton.disabled = true;
      
      // Show typing indicator
      setTimeout(() => {
        typingIndicator.classList.add('active');
        scrollToBottom();
        
        // Auto-response after delay
        setTimeout(() => {
          typingIndicator.classList.remove('active');
          const responses = [
            "Thanks for your message! Let me check that for you.",
            "I understand your concern. Let me see how I can help you with that.",
            "Great question! Here's what you need to know...",
            "I'll look into this and get back to you as soon as possible.",
            "Thanks for reaching out! Based on your question, I'd recommend...",
            "I appreciate your patience. Let me check our system for more information."
          ];
          
          // Select random response
          const randomResponse = responses[Math.floor(Math.random() * responses.length)];
          addMessage(randomResponse, 'support');
        }, 1500);
      }, 500);
    }
    
    // // Add message to chat
    // function addMessage(text, sender) {
    //   const messageDiv = document.createElement('div');
    //   messageDiv.classList.add('message', sender);
      
    //   // Format message text
    //   messageDiv.textContent = text;
      
    //   // Add timestamp
    //   const timeDiv = document.createElement('div');
    //   timeDiv.classList.add('message-time');
    //   timeDiv.textContent = getCurrentTime();
    //   messageDiv.appendChild(timeDiv);
      
    //   // Add to chat
    //   chatMessages.appendChild(messageDiv);
    //   scrollToBottom();
      
    //   // If chat is closed and message is from support, show notification
    //   if (sender === 'support' && !chatWindow.classList.contains('active')) {
    //     notificationDot.classList.add('active');
    //   }
    // }
    
    // // Get current time in 12-hour format
    // function getCurrentTime() {
    //   const now = new Date();
    //   let hours = now.getHours();
    //   const minutes = now.getMinutes().toString().padStart(2, '0');
    //   const ampm = hours >= 12 ? 'PM' : 'AM';
    //   hours = hours % 12;
    //   hours = hours ? hours : 12; // Convert 0 to 12
    //   return `${hours}:${minutes} ${ampm}`;
    // }
    
    // // Scroll chat to bottom
    // function scrollToBottom() {
    //   chatMessages.scrollTop = chatMessages.scrollHeight;
    // }
    
    // // Simulate an initial customer support message after 3 seconds
    // setTimeout(() => {
    //   if (!chatWindow.classList.contains('active')) {
    //     notificationDot.classList.add('active');
    //   }
    // }, 3000);


   
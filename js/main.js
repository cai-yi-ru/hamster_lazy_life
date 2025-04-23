
// Script to handle image fallback
document.getElementById('profileImage').addEventListener('error', function() {
    this.style.display = 'none';
    document.getElementById('fallbackAvatar').style.display = 'flex';
});

// Share button functionality
document.getElementById('shareButton').addEventListener('click', function() {
    // Check if the Web Share API is supported
    if (navigator.share) {
        navigator.share({
            title: '蒟蒻🐹的可愛倉庫🧺',
            text: '蒟蒻貼圖｜倉鼠用品｜療癒小物 全部連結都在這裡👉',
            url: window.location.href
        })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing:', error));
    } else {
        // Fallback for browsers that don't support the Web Share API
        alert('Share this page: ' + window.location.href);
        
        // Optional: Create a temporary input to copy the URL
        const tempInput = document.createElement('input');
        document.body.appendChild(tempInput);
        tempInput.value = window.location.href;
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        
        alert('Link copied to clipboard!');
    }
});
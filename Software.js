function submitReview() {
    const name = document.getElementById('name').value;
    const review = document.getElementById('review').value;
    if (name && review) {
        const reviewContainer = document.createElement('div');
        reviewContainer.className = 'review';
        reviewContainer.innerHTML = `<h3>${name}</h3><p>${review}</p>`;
        document.getElementById('reviews').appendChild(reviewContainer);
        document.getElementById('name').value = '';
        document.getElementById('review').value = '';
    } else {
        alert('Please enter both name and review!');
    }
}

function selectRating(rating) {
    document.getElementById('rating').value = rating;
    const emojis = document.querySelectorAll('.emoji');
    emojis.forEach(emoji => emoji.style.opacity = 0.5); // Dim other emojis
    event.target.style.opacity = 1; // Highlight selected emoji
}

function submitReview() {
    const name = document.getElementById('name').value;
    const review = document.getElementById('review').value;
    const rating = document.getElementById('rating').value;
    
    if (name && review && rating) {
        const reviewContainer = document.createElement('div');
        reviewContainer.className = 'review';
        reviewContainer.innerHTML = `<h3>${name} ${rating}</h3><p>${review}</p>`;
        document.getElementById('reviews').appendChild(reviewContainer);
        document.getElementById('name').value = '';
        document.getElementById('review').value = '';
        document.getElementById('rating').value = '';
    } else {
        alert('Please enter your name, review, and select a rating!');
    }
}

function selectRating(rating) {
    document.getElementById('rating').value = rating;
    const emojis = document.querySelectorAll('.emoji');
    emojis.forEach(emoji => emoji.style.opacity = 0.5); // Dim other emojis
    event.target.style.opacity = 1; // Highlight selected emoji
}

function submitReview() {
    const name = document.getElementById('name').value;
    const review = document.getElementById('review').value || ''; // Default to empty string if not provided
    const rating = document.getElementById('rating').value;

    if (name && rating) {
        const reviewContainer = document.createElement('div');
        reviewContainer.className = 'review';
        reviewContainer.innerHTML = `<h3>${name} ${rating}</h3><p>${review}</p>`;
        document.getElementById('reviews').appendChild(reviewContainer);
        document.getElementById('name').value = '';
        document.getElementById('review').value = '';
        document.getElementById('rating').value = '';
    } else {
        alert('Please enter your name and select a rating!');
    }
}

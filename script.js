function respondYes() {
    alert("Meet me at Lingayen 7:30 PM\n \n \n \n                                                                        - Mark Vargas ❤️");
    
    // Hide the buttons after the alert
    const yesButton = document.querySelector('.yes');
    const noButton = document.querySelector('.no');
    yesButton.style.display = 'none';
    noButton.style.display = 'none';
    

    // Show the GIF
    const gif = document.getElementById('celebration-gif');
    gif.style.display = 'block'; // Show the GIF
    
    
    
}

function moveNoButton() {
    const noButton = document.querySelector('.no');
    const container = document.querySelector('.container');
    
    // Get the dimensions of the container
    const containerRect = container.getBoundingClientRect();
    
    // Calculate the maximum X and Y positions for the button
    const maxX = containerRect.width - noButton.offsetWidth;
    const maxY = containerRect.height - noButton.offsetHeight;

    // Generate random positions within the container
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    // Move the button to the new random position
    noButton.style.position = 'absolute';
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
}
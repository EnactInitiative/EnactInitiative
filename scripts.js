document.getElementById('clickMe').addEventListener('click', function() {
    document.getElementById('output').textContent = 'Button clicked! This is interactive!';
});

const image = document.getElementById('moving-image');

document.addEventListener('mousemove', function(e) {
    image.style.position = 'absolute';
    image.style.left = e.pageX + 'px'; // Moves image along X-axis
    image.style.top = e.pageY + 'px'; // Moves image along Y-axis
});

function showLove() {
    alert("YAY! ❤️ Love you forever!");
    document.body.style.backgroundColor = '#ffcccb';
}

function moveNoButton() {
    let noButton = document.querySelector('.no-button');
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 100);
    noButton.style.left = x + 'px';
    noButton.style.top = y + 'px';
}

window.onload = function() {
    let text = "Will You Be My Valentine? ❤️";
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            document.getElementById("question").innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    typeWriter();
};

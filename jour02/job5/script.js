window.addEventListener("scroll", function() {
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = scrollTop / scrollHeight;

    const red = Math.round(255 * scrollPercent);
    const blue = 255 - red;
    
    document.querySelector("footer").style.backgroundColor = `rgb(${red}, 0, ${blue})`;
});
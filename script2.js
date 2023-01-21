let btn = document.getElementsByClassName("btn")[0];
let text = document.getElementsByTagName("textarea")[0];
btn.addEventListener('click', function() {
    localStorage.setItem("feedback", text.value);
})
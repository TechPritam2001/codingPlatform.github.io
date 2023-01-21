async function liveData() {
    await fetch("https://kontests.net/api/v1/all").then((responce) => {
        return responce.json();
    }).then((responce) => {
        for (let item in responce) {
            for (let i = parseInt(item); i <= parseInt(item); i++) {
                document.getElementsByClassName("grid")[0].innerHTML += "<div class = 'card'></div>";
                document.getElementsByClassName("card")[i].innerHTML += `<img src='https://media.geeksforgeeks.org/wp-content/uploads/20190529122828/bs21.png' alt='Coding image'>`;
                document.getElementsByClassName("card")[i].innerHTML += "<div class = 'down'></div>";
                document.getElementsByClassName("down")[i].innerHTML += "<p class='name'>Name : </p>";
                document.getElementsByClassName("name")[i].innerHTML += responce[i].name;
                document.getElementsByClassName("down")[i].innerHTML += "<p class='status'>Status : </p>";
                document.getElementsByClassName("status")[i].innerHTML += responce[i].status;
                document.getElementsByClassName("down")[i].innerHTML += "<p class='aboutFullTime'>In 24 Hours : </p>";
                document.getElementsByClassName("aboutFullTime")[i].innerHTML += responce[i].in_24_hours;
                document.getElementsByClassName("down")[i].innerHTML += "<p class='start_time'>Starts at : </p>";
                document.getElementsByClassName("start_time")[i].innerHTML += responce[i].start_time;
                document.getElementsByClassName("down")[i].innerHTML += "<p class='end_time'>Ends at : </p>";
                document.getElementsByClassName("end_time")[i].innerHTML += responce[i].end_time;
                document.getElementsByClassName("down")[i].innerHTML += `<a href='${responce[i].url}' class='visit_site'>Visit Site</a>`;
            }
        }
    })
}
liveData();
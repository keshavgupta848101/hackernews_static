const section = document.getElementById("mainSection")
// button1 = document.getElementById("page1")
// button2 = document.getElementById("page1")
// button3 = document.getElementById("page1")
// button4 = document.getElementById("page1")
// button5 = document.getElementById("page1")
var btnValue = 1;
let url = `https://hn.algolia.com/api/v1/search/?page=${btnValue}`

const buttonText = (ele) => {
    btnValue = ele.innerText;
    url = `https://hn.algolia.com/api/v1/search/?page=${btnValue}`
    section.innerHTML = "";
    fetchData()
}


const fetchData = async () => {


    const data = await fetch(url)
        .then((data) => {
            return data.json()
        })
        .then((realData) => {
            const temp = realData.hits;
            console.log(temp);
            for (let i = 0; i < temp.length; i++) {
                var article = document.createElement("article");
                var h5 = document.createElement("h5");
                var a = document.createElement("a");
                var a2 = document.createElement("a");
                var p = document.createElement("p");


                var text = document.innerText = temp[i].title;
                // console.log(typeof (text));
                var urlText = document.innerText = temp[i].url;
                var pointsNumber = document.innerText = temp[i].points;
                var authorName = document.innerText = temp[i].author;
                var time = document.innerText = temp[i].created_at_i;

                var date = new Date(time);
                date = date.toDateString();
                date = date.slice(0, 8)

                if (text && urlText && pointsNumber && authorName) {
                    h5.innerText = text + " ";
                    a2.textContent = authorName;
                    a.href = urlText;
                    p.innerText = pointsNumber + " points by ";
                    p.appendChild(a2)
                    a.href = urlText
                    var str = new URL(urlText);
                    a.textContent = str.hostname
                    h5.appendChild(a);
                    article.appendChild(h5);
                    article.appendChild(p);
                    section.appendChild(article)
                }



            }

        })

}

fetchData()
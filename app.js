// API

const API_URL = "https://jsonplaceholder.typicode.com";
const wrapper = document.querySelector(".wrapper");
const loading = document.querySelector(".loading");

async function fetchUsers(api) {
    let apiUsers = await fetch(`${api}/users`);

    apiUsers
        .json()
        .then((res) => createCard(res))
        .catch((err) => console.log(err))
        .finally(() => {
            loading.style.display = "none";
        });
}

fetchUsers(API_URL);

const IMAGES = [
    "https://www.westernunion.com/staticassets/content/dam/wu/jm/responsive/send-money-in-person-from-jamaica-resp.png",
    "https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2021/01/family-portrait-ideas-headshots.jpg?resize=1500%2C1200&ssl=1",
    "https://images.unsplash.com/photo-1623366302587-b38b1ddaefd9?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXQlMjBtYW58ZW58MHx8MHx8fDA%3D",
    "https://media.istockphoto.com/id/1182617834/photo/photo-of-young-curly-girl.jpg?s=612x612&w=0&k=20&c=bndgkjjP80rTMupB7AH4IZLczG1b1iuqzXUsPsJlx-s=",
    "https://chronicle.lu/images/2020/Aug/20200803_tiara-headshot-Alfonso-Salguiero-600-500.jpg",
    "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
    "https://static.vecteezy.com/system/resources/thumbnails/026/829/465/small_2x/beautiful-girl-with-autumn-leaves-photo.jpg",
    "https://i.pinimg.com/originals/fb/c3/25/fbc325bf7245981c3036f59719b2a59a.jpg",
    "https://images.squarespace-cdn.com/content/v1/5b9fbb28ee1759803459c790/1567601449557-M2SXQB8UBS5MBBC1ZTBO/Elegant+timeless+portrait+of+a+young+girl.jpg",
    "https://image1.masterfile.com/getImage/NjEwOC0wNzk2OTUxM2VuLjAwMDAwMDAw=AEecMh/6108-07969513en_Masterfile.jpg",
];

const item = document.querySelector(".item");

function createCard(data) {
    data.forEach((user, index) => {
        let card = document.createElement("div");
        card.classList.add("item");
        card.innerHTML = `
        <img class="picture" src="${IMAGES[index]}" alt="">
         <div class="js__box">
         <div>
        <h3>${user.name}</h3>
        <h3>${user.username}</h3>
         </div>
         <a class="email" href="mailto:${user.email}">Email: ${user.email}</a>
         <div class="use-box">
         <p class="text-name">Phone:
         <p class="js-text">${user.phone}</p>
         </p>
         <p class="text-name">Website:
         <p class="js-text">${user.website}</p>
         </p>
         <p class="text-name">Address:
         <p class="js-text">${user.address.street} ${user.address.city}</p>
         </p>
         <p class="text-name">Company name:
         <p class="js-text">${user.company.name}</p>
         </p>
         </div>
         <a class="more__link" href="#">View More</a>
         </div>
        `;
        wrapper.appendChild(card);
    });
}
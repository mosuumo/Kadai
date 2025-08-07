const loading = document.querySelector('#loading');

window.addEventListener('load', () => {
    loading.classList.add('loaded');
});


const photo = document.querySelector('#photo');

const lists = [
    {
        img: 'field.png',
    },
    {
        img: 'cow.png',
    },
];

for(let i = 0; i < lists.length; i++){
    const {name, img} = lists[i];
    const content = `<div><img src="img/${img}"></div>`;
    photo.insertAdjacentHTML('beforeend',content);
}

const translations = {
    JP:{
        title: "夏のサバイバルサーバー",
        photo: "サーバー内画像",
    },
    EN:{
        title: "Survival Server in Summer",
        photo: "Photos in the server",
    }
};

document.getElementById("language").addEventListener("change", (e) => {
    const lang = La.target.value;
    console.log("選択された言語:", lang);
    document.querySelectorAll("[data-key]").forEach(el => {
        const key = el.dataset.key;
        console.log("キー:", key); 
        el.innerHTML = translations[lang][key];
    });
});
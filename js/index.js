const loading = document.querySelector('#loading');

window.addEventListener('load', () => {
    loading.classList.add('loaded');
});

const translations = {
    JP:{
        title: "夏のサバイバルサーバー",
        while: "開催期間",
        server: "サーバー",
        about: "マイクラJava版最新versionでマルチサバイバル<br>難易度はノーマル",
        join: "参加フォーム",
        photo: "サーバー内画像",
    },
    EN:{
        title: "Survival Server in Summer",
        while: "While",
        server: "Server",
        about: "Multi survival in the latest version of Minecraft <br>Difficulty is normal",
        join: "Let's join",
        photo: "Photos in this server",
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
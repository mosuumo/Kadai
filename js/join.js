const loading = document.querySelector('#loading');

window.addEventListener('load', () => {
    loading.classList.add('loaded');
});

const translations = {
    JP:{
        title: "夏のサバイバルサーバー",
        userID: "マイクラ内のID",
        submit: "送信",
    },
    EN:{
        title: "Survival Server in Summer",
        userID: "Your user ID of Minecraft",
        submit: "submit",
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

document.getElementById("myform").addEventListener("submit", function(e) {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    fetch(form.action, {
        method: form.method,
        body: data,
    })
    .then(response => {
        if(response.ok){
            alert("送信完了 Submitted\nIP: xxx.xxx.xx.xx.x.x");
            form.reset();
        }else{
            alert("失敗 ERROR");
        }
    })
    .catch(() => {
        alert("送信エラー ERROR");
    });
});
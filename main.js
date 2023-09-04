const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sg = document.querySelector("#sg");
setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;
    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sg.style.transform = `rotateZ(${ss}deg)`;
    // Relógio Digital
    let horas = document.getElementById('horas');
    let minutos = document.getElementById('minutos');
    let segundos = document.getElementById('segundos');
    let ampm = document.getElementById('ampm');
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    var am = h >= 12 ? 'PM' : 'AM';
    //Converter 24 horas em 12 horas com indicador AM PM
    if (h > 12) {
        h = h - 12;
    }
    // Adicione zero antes de números unitário
    h = (h < 10) ? "0" + h : h
    m = (m < 10) ? "0" + m : m
    s = (s < 10) ? "0" + s : s
    horas.innerHTML = h;
    minutos.innerHTML = m;
    segundos.innerHTML = s;
    ampm.innerHTML = am
})



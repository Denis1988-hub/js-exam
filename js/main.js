window.addEventListener('DOMContentLoaded', function () {
//  Отделочные работы

//Получаем жлементы
// Площадь пола
    let plosadiPola = document.querySelector('.metr'),
        //половое покрытие
        polovoePokrytie = document.getElementById('sum-polovoe-pokritie'),
        //площадь стен
        ploshadiSten = document.querySelector('.walls'),
        //Отделка стен
        otdelkaSten = document.getElementById('otdelka-sten'),
        //Площадь потолка
        ploshadiPotolka = document.querySelector('.ceiling'),
        //Материал потолочного покрытия
        potolok = document.getElementById('potolok'),
        //Демонтадные работы
        dem = document.querySelector('.dem'),
        totalSumm = document.getElementsByClassName('total-sum')[0];

// Считаем
    let sum = 0.0,
        metr = 0.0;
    polovoePokrytie.addEventListener('change', () => {
        let m = +plosadiPola.value,
        s = plosadiPola.value * polovoePokrytie.value;
        sum = totalSumm.textContent = s;
        metr += m;
        plosadiPola.readOnly = true
    });

    otdelkaSten.addEventListener('change', () => {
        let m = +ploshadiSten.value,
            s = ploshadiSten.value * otdelkaSten.value;
        sum += s;
        totalSumm.textContent = sum;
        metr += m;
        ploshadiSten.readOnly = true
    });


    potolok.addEventListener('change', () => {
        let m = +ploshadiPotolka.value,
            s = ploshadiPotolka.value * potolok.value;
        sum += s;
        totalSumm.textContent = sum;
        metr += m;
        ploshadiPotolka.readOnly = true;
    });

    dem.addEventListener('click', () => {
        let s;
        s = dem.value * metr;
        if (dem.checked === true) {
            sum += s;
            totalSumm.textContent = sum;

        } else if (dem.checked === false) {
            sum -= s;
            totalSumm.textContent = sum;
        }

    });


//  Электромонтажные работы

//Получение эл-тов

    let outlet = document.querySelector('.qty-outlet'),
        cable = document.querySelector('.qty-cable'),
        lamp = document.querySelector('.qty-lamp'),
        chandelier = document.querySelector('.qty-chandelier');

    outlet.addEventListener('input', () => {
        const price = 20;
        let s = +outlet.value * price;
        sum += s;
        totalSumm.textContent = sum;
    });

    cable.addEventListener('input', () => {
        const price = 10;
        let s = +cable.value * price;
        sum += s;
        totalSumm.textContent = sum;
    });

    lamp.addEventListener('input', () => {
        const price = 20;
        let s = +lamp.value * price;
        sum += s;
        totalSumm.textContent = sum;
    });

    chandelier.addEventListener('input', () => {
        const price = 100;
        let s = +chandelier.value * price;
        sum += s;
        totalSumm.textContent = sum;

    });


    //  Сантехнические работы
//Получение эл-тов
    let pipe = document.querySelector('.pipe'),
        counter = document.querySelector('.qty-counter'),
        bath = document.querySelector('.bath'),
        sink = document.querySelector('.sink'),
        bowl = document.querySelector('.toilet-bowl');

    counter.addEventListener('input', () => {
        const price = 100;
        let s = +counter.value * price;
        sum += s;
        totalSumm.textContent = sum;
    });

    pipe.addEventListener('click', () => {
        let s = +pipe.value;
        if (pipe.checked === true) {
            sum += s;
            totalSumm.textContent = sum;

        } else if (pipe.checked === false) {
            sum -= s;
            totalSumm.textContent = sum;
        }
    });

    bath.addEventListener('click', () => {
        let s = +bath.value;
        if (bath.checked === true) {
            sum += s;
            totalSumm.textContent = sum;

        } else if (bath.checked === false) {
            sum -= s;
            totalSumm.textContent = sum;
        }
    });

    sink.addEventListener('click', () => {
        let s = +sink.value;
        if (sink.checked === true) {
            sum += s;
            totalSumm.textContent = sum;

        } else if (sink.checked === false) {
            sum -= s;
            totalSumm.textContent = sum;
        }
    });

    bowl.addEventListener('click', () => {
        let s = +bowl.value;
        if (bowl.checked === true) {
            sum += s;
            totalSumm.textContent = sum;

        } else if (bowl.checked === false) {
            sum -= s;
            totalSumm.textContent = sum;
        }
    });
});
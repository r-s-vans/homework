(() => {

    const $counter = document.getElementById("js-counter");
    const buttons = document.getElementsByClassName("js-button");


    const setCrazyMode = (isCrazy) => {
        for (let btn of buttons) {
            if (isCrazy) {
                btn.classList.add("crazy-button");
            } else {
                btn.classList.remove("crazy-button");
            }
        }
    };



    const updateCounter = (delta) => {
        let currentCount = parseInt($counter.textContent);
        currentCount += delta;
        $counter.textContent = currentCount;

        if (currentCount !== 0 && currentCount % 3 === 0) {
            setCrazyMode(true);
        } else {
            setCrazyMode(false);
        }
    };

    // +- ボタンにイベント追加
    for (let btn of buttons) {
        btn.addEventListener("click", (e) => {
            const value = e.currentTarget.textContent === "+" ? 1 : -1;
            updateCounter(value);
        });
    }


})();



let submit = document.querySelector(".submit-btn");
let ratingBtns = document.querySelectorAll(".btn");
let ratingContainer =  document.querySelector(".rating-container");
let tyContainer =  document.querySelector(".ty-container");
let ratingText = document.querySelector(".rating-text");
let active = null;
let rating = 0;

ratingBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        let btnNum = (btn.classList.length > 1) ? btn.classList[1] : null;
        let clickedBtn = document.querySelector("." + btnNum);

        // Remove active state of previously clicked button.
        if(active === btnNum){
            let previous_active = document.querySelector("." + active);
            console.log(previous_active);
            btnChangeColors('hsl(213, 19%, 22%)', "hsl(217, 12%, 63%)", previous_active);
            previous_active.classList.add('btn-hover');
            rating = 0;
        }
        else{
            //Revert previous active button to its normal form.
            if(active != null){
                let previous_active = document.querySelector("." + active);
                btnChangeColors('hsl(213, 19%, 22%)', "hsl(217, 12%, 63%)", previous_active);
                previous_active.classList.add('btn-hover');
            }
           // Change colors of clicked button.
            btnChangeColors('hsl(25, 97%, 53%)', "white", clickedBtn);
            active = btnNum;
            rating = clickedBtn.innerHTML;
            clickedBtn.classList.remove('btn-hover');
            }
    });
});

submit.addEventListener("click", ()=>{
    ratingContainer.style.visibility = "hidden";
    tyContainer.style.visibility = "visible";
    ratingText.innerHTML = ratingText.innerHTML.replace("#", rating);
});

function btnChangeColors(bgColor, fontColor, btn){
    btn.style.backgroundColor = bgColor;
    btn.style.color = fontColor;
}
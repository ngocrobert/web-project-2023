const optionMenu = document.querySelector(".m-dropdown"),
        mSelectBtn =  optionMenu.querySelector(".m-dropdown-select i"),
        mOptions = optionMenu.querySelectorAll(".m-option"),
        selected_txt = optionMenu.querySelector(".select-txt");

mSelectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));

mOptions.forEach(option => {
    option.addEventListener("click", () => {
        let selectedOption = option.querySelector(".m-option-text").innerText;
        selected_txt.innerText = selectedOption;
        // console.log(selectedOption);

        optionMenu.classList.remove("active");
    })
})
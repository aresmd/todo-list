const menu = document.querySelector("#ulId1");
const hidden = document.querySelector(".hideen");
const btnUl = document.querySelector(".header--content__btn");
const title = document.querySelector(".section--1__text--title");
const btnSave = document.querySelector(".section--1__btn");
const textarea = document.querySelector(".section--1__text--title--2");
const containerSectionTwo = document.querySelector(".section--2__div--2");
const catAll= document.querySelector(".header--ul__li1")
btnSave.addEventListener("click",(e)=>{
    const numberRandom = Math.trunc(Math.random() * 100)
    const line = `<ul class="section--2__div--2--ul" id="${numberRandom}">
                    <li class="section--2__div--2__ul--li1" id="${numberRandom}">
                        ${title.value}
                    </li>
                    <li class="section--2__div--2__ul--li1" id="${numberRandom}">
                        ${textarea.value}
                    </li>
                    <input type="checkbox" name="doneornote" id="checkbox--done${numberRandom}" data-done-or-not="notdone">
                    <button class="section--2__btn" id="${numberRandom}">delete</button>
                </ul>`; 
    containerSectionTwo
    .insertAdjacentHTML('afterbegin',line);

const btnDelete = document.querySelector(".section--2__btn");
const todoUl = document.getElementById(`${numberRandom}`)
const checker = document.querySelector(`#checkbox--done${numberRandom}`);
btnDelete.addEventListener("click",(e)=>{

    todoUl.remove()
})
checker.addEventListener("change",()=>{
        if (checker.checked) {
            checker.dataset.doneOrNot = "done";
        } else {
            checker.dataset.doneOrNot = "notdone";
        }
})
});
 
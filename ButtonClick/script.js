const btnclick = document.querySelector('button');
const spanclick = document.querySelector('span');
btnclick.addEventListener('click',()=>
{
    const name =prompt("Enter your Name");
    spanclick.textContent=name;
});
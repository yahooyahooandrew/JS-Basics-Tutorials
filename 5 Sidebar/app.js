const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");
console.log(toggleBtn.classList);
console.log(closeBtn.classList);
console.log(sidebar.classList);


toggleBtn.addEventListener('click', function(){
    sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener('click',function(){
    sidebar.classList.remove("show-sidebar");
});
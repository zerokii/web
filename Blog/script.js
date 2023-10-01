function changeText() {
    var replaceText = document.getElementsByClassName("mini-text");
    replaceText[0].innerHTML = "Scroll to see";
    document.getElementId("icon-up").style.display = "none";
    document.getElementId("icon-down").style.display = "block";
}
var btnSubmit = document.querySelector(".submit");
var modal = document.querySelector(".modal-container");
if (btnSubmit) {
    btnSubmit.addEventListener("click", function () {
        modal.classList.add("show");
        const next = document.querySelector(".next");
        next.setAttribute("value","https://nowayyoutookthislol.netlify.app/contact.html");
    });} 
    var codingProjects = document.querySelectorAll(".project"); 
    codingProjects.forEach (project =>{
        project.dataset.aos="fade-up";
    })
    var aboutSkills = document.querySelectorAll(".skill-item");
    aboutSkills.forEach ((skill,index) =>{
        skill.dataset.aos="fade-down";
        skill.dataset.aosDuration="2000";
        skill.dataset.aosDelay=index*300
    })
    var aboutActivity = document.querySelectorAll(".activity-item");
    aboutActivity.forEach ((activity,index) =>{
        activity.dataset.aos="zoom-in";
        activity.dataset.aosDelay=index*300
    })
    AOS.init();
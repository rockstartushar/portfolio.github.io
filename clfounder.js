const header1 = document.getElementById("header1");
const header2 = document.getElementById("header2");
const animating_Elem = document.querySelectorAll(".animate-onload");
const mainPage = document.getElementById("main");
const myselfPage = document.getElementById("myself");
const projectPage = document.getElementById("project");
const myselfLink = document.getElementById("myself-link");
const projectLink = document.getElementById("project-link");
const achieveLink = document.getElementById("achieve-link");
var clicked="";
const backArea = document.getElementById("back-area");
myselfLink.addEventListener('click', () => {
  mainPage.style.display = "none";
  myselfPage.style.display = "block";
  backArea.style.display = "block";
  cliked="myself";
});
projectLink.addEventListener('click', () => {
  mainPage.style.display = "none";
  projectPage.style.display = "block";
  backArea.style.display = "block";
  cliked="project";
});
achieveLink.addEventListener('click', () => {
  alert("Under development!!");
});
backArea.addEventListener('click', () => {
  mainPage.style.display = "grid";
  if(  cliked=="myself") {
    myselfPage.style.display = "none";
  } else {
    projectPage.style.display = "none";
  }
  backArea.style.display = "none";
});
import "./styles.css";
import createHomePage from "./modules/home";
import createMenuPage from "./modules/menu";
import createAboutPage from "./modules/about";
const content=document.getElementById("content")

const navBar = document.querySelector("nav");

function clearPage() {
  content.innerHTML=""
}

navBar.addEventListener("click", (event) => {
  const target = event.target;
  if (target.tagName !== "BUTTON") return;
  const navButtons = navBar.querySelectorAll("button");
  navButtons.forEach((btn) => btn.classList.remove("active"));

  // Add active class to the clicked button
  target.classList.add("active");

  switch (target.textContent) {
    case "Home":
      clearPage();
      createHomePage();
      break;
    case "Menu":
      clearPage();
      createMenuPage();
      break;
    case "About":
      clearPage();
      createAboutPage();
      break;
    default:
      createHomePage()
      break;
  }
});

createHomePage();
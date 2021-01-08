//^ openHamburger
const openHamBtn = document
  .querySelector(".openHamburger")
  .addEventListener("click", () => {
    let hideOpenBtn = document.querySelector(".hideOpenBtn");
    console.log(hideOpenBtn);
    if ((hideOpenBtn.style.display = "block")) {
      hideOpenBtn.style.display = "none";
    }
    let hamBG = document.querySelector(".hamBG");
    if (hamBG.style.display != "flex") {
      hamBG.style.display = "flex";
    }
    const closeHamBtn = document.querySelector(".closeHamburger");
    if ((closeHamBtn.style.display = "none")) {
      closeHamBtn.style.display = "flex";
    } else {
      closeHamBtn.style.display = "none";
    }
  });

//^ closeHamburger
const closeHamBtn = document
  .querySelector(".closeHamburger")
  .addEventListener("click", () => {
    let hamBG = document.querySelector(".hamBG");
    if ((hamBG.style.display = "flex")) {
      hamBG.style.display = "none";
    }
    let hideOpenBtn = document.querySelector(".hideOpenBtn");
    // if ((closeHamBtn.style.display = "flex")) {
    //   closeHamBtn.style.display = "none";
    // }
    hideOpenBtn.style.display = "block";
  });

//open hamburger menu
function mobileMenu(){
  let el = document.querySelector(".mobile-nav");
  el.classList.remove('closed-menu')
  el.classList.add("open-menu")
  console.log("working")
}

//clase hamburger menu
function closeMenu(){
  let el = document.querySelector(".mobile-nav");
  el.classList.remove('open-menu')
  el.classList.add("closed-menu")
}



var backdrop = document.querySelector(".backdrop")
var modal = document.querySelector(".modal")
var modalNoButton = document.querySelector(".modal__action--negative")
var selectPlanButton = document.querySelectorAll(".plan button")
var toggleButton = document.querySelector(".toggle-button")
var mobileNav = document.querySelector(".mobile-nav")

for (var i = 0; i < selectPlanButton.length; i++) {
  selectPlanButton[i].addEventListener("click", function () {
    modal.classList.add("open")
    backdrop.classList.add("open")
  })
}

backdrop.addEventListener("click", function () {
  mobileNav.classList.remove("open")
  closeModal()
})
if (modalNoButton) {
  modalNoButton.addEventListener("click", closeModal)
}

toggleButton.addEventListener("click", function () {
  mobileNav.classList.add("open")
  backdrop.classList.add("open")
})

function closeModal() {
  if (modal) {
    modal.classList.remove("open")
  }

  if (backdrop) {
    backdrop.classList.remove("open")
  }
}

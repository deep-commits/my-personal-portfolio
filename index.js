const tabs = document.querySelectorAll('.header-nav-tab');
const highlight = document.querySelector('.highlight');
const mobileNavBarIcon = document.getElementById("mobile-nav-bar-icon");
const headerNavList = document.getElementById("header-nav-list");
const firstTab = tabs[0];
const modeChangeBtn = document.getElementById("mode-change");



const left = firstTab.offsetLeft;
const width = firstTab.offsetwidth;


highlight.style.left = `${left}px`;
highlight.style.width = `${width}px`;

tabs.forEach(tab => {
    tab.addEventListener('click', function() {
        const index = this.dataset.index;

        const left = this.offsetLeft;
        const width = this.offsetWidth;

        
        highlight.style.left = `${left}px`;
        highlight.style.width = `${width}px`;

        tabs.forEach(tab => tab.classList.remove('active'));
        this.classList.add('active');
    });
});

document.getElementById("mode-change").addEventListener("click", function() {
  document.body.classList.toggle("dark-theme");
});


mobileNavBarIcon.onclick = function() {
  if(mobileNavBarIcon.className=="fa-solid fa-bars"){
    mobileNavBarIcon.className="fa-solid fa-close";
    headerNavList.style.display = "flex";
    headerNavList.style.transform = "translateX(0)";
  }else{
    headerNavList.style.display = "none";
    mobileNavBarIcon.className="fa-solid fa-bars";
    headerNavList.style.transform = "translateX(200%)";
  }

}


const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(event) {
  event.preventDefault();
  
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  
  const formData = new FormData();
  formData.append("name", name);
  formData.append("email", email);
  formData.append("message", message);
  
  fetch("send-email.php", {
    method: "POST",
    body: formData
  })
  .then(response => {
    if(response.ok) {
      alert("Your message has been sent.");
      contactForm.reset();
    } else {
      alert("An error occurred. Please try again later.");
    }
  })
  .catch(error => {
    alert("An error occurred. Please try again later.");
  });
});

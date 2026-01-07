document.addEventListener("DOMContentLoaded", () => {

  const nextBtn = document.getElementById("nextPage");
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      window.location.href = "nextpage.html";
    });
  }

  const backBtn = document.getElementById("backToHome");
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  }

});

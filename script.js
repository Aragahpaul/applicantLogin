document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("preload-modal");
  const mainContent = document.getElementById("main-content");
  const closeModalButton = document.getElementById("close-modal");

  closeModalButton.addEventListener("click", () => {
    modal.style.display = "none"; // Hide the modal
    mainContent.classList.remove("hidden"); // Show the main content
  });
});

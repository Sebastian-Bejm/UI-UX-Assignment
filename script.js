// JavaScript to open/close modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "flex";
    }
}
  
function closeModal(button) {
    const modal = button.closest(".modal");
    if (modal) {
        modal.style.display = "none";
    }
}  

function toggleDetails(card) {
    card.classList.toggle('active');
}
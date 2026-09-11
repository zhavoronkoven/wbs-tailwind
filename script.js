const modal = document.getElementById('discount-modal')
const closeBtn = document.getElementById('discount-modal-close')
const ctaBtn = document.getElementById('discount-modal-cta')

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    modal.showModal()
  }, 3000)
})

closeBtn.addEventListener('click', () => modal.close())
ctaBtn.addEventListener('click', () => modal.close())

modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.close()
})
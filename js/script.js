document.getElementById('bookingForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.');
  this.reset();
});

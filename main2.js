const countDays2 = document.getElementById('countDays2');
const now = document.getElementById('now');
const startDate2 = new Date('2024-04-10 00:00:00');
const today2 = new Date();
const diff2 = today2 - startDate2;
const days2 = Math.floor(diff2 / (1000 * 60 * 60 * 24));
countDays2.textContent = "Racha: " + days2 + " dias 🔥💪";

const options = { year: 'numeric', month: 'long', day: 'numeric' };
now.textContent = new Date().toLocaleDateString('es-ES', options);

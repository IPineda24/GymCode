const now = document.getElementById('now');
const countDays = document.getElementById('countDays');
const phrase = document.getElementById('phrase');

//ramdom phrases to show
const phrases = [
    "Tu cuerpo puede soportar casi cualquier cosa. ¡Es tu mente la que necesitas convencer!",
    "No te preocupes por los resultados. Concéntrate en el esfuerzo, y los resultados cuidarán de sí mismos.",
    "El dolor que sientes hoy será la fuerza que sientas mañana.",
    "Cada paso que das es un paso más cerca de tu objetivo.",
    "La única mala sesión de entrenamiento es la que no tuviste.",
    "No te compares con los demás. Compara tu hoy con tu ayer.",
    "Lo difícil lleva tiempo; lo imposible, un poco más.",
    "El progreso no es instantáneo. Sé paciente, pero persistente.",
    "No importa cuántas veces hayas fallado, siempre puedes levantarte y seguir adelante.",
    "El éxito no es para los rápidos ni para los fuertes, sino para aquellos que pueden seguir adelante a pesar de los obstáculos.",
    "Tu cuerpo es el reflejo de tu estilo de vida.",
    "El mejor proyecto en el que trabajar eres tú.",
    "Sé el programador de tu propia vida.",
    "Escribe código, no excusas.",
    "El único código que siempre funciona es el que escribiste hace dos semanas y ya no recuerdas cómo funciona.",
];


const excercises = [
    "https://leetcode.com/problems/two-sum/description/",
    "https://leetcode.com/problems/palindrome-number/description/",
    "https://leetcode.com/problems/roman-to-integer/",
    "https://leetcode.com/problems/longest-common-prefix",
    "https://leetcode.com/problems/valid-parentheses/",
    "https://leetcode.com/problems/merge-two-sorted-lists/",
    "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
    "https://leetcode.com/problems/remove-element/",
    "https://leetcode.com/problems/implement-strstr/",
    "https://leetcode.com/problems/search-insert-position/",
    "https://leetcode.com/problems/count-and-say/",
    "https://leetcode.com/problems/maximum-subarray/",
    "https://leetcode.com/problems/length-of-last-word/",
    "https://leetcode.com/problems/plus-one/",
    "https://leetcode.com/problems/add-binary/",
    "https://leetcode.com/problems/sqrtx/",
    "https://leetcode.com/problems/valid-palindrome/",
    "https://leetcode.com/problems/reverse-integer/",
    "https://leetcode.com/problems/palindrome-number/",
    "https://leetcode.com/problems/roman-to-integer/",
    "https://leetcode.com/problems/longest-common-prefix/",
    "https://leetcode.com/problems/valid-parentheses/",
    "https://leetcode.com/problems/merge-two-sorted-lists/",

];


phrase.textContent = phrases[Math.floor(Math.random() * phrases.length)];

// mostrar la fecha actual
// que la fecha se muestre sin hora
// y que se muestre en español
const options = { year: 'numeric', month: 'long', day: 'numeric' };
now.textContent = new Date().toLocaleDateString('es-ES', options);


// contador de dias que inicie desde 04/01/2024
const startDate = new Date('2024-04-01');
const today = new Date();
const diff = today - startDate;
const days = Math.floor(diff / (1000 * 60 * 60 * 24));
countDays.textContent = "Racha: " + days + " dias 🔥💪";

const excercise = document.getElementById('excersice');
// agregar el ejerciicio al href del enlace
excercise.href = excercises[days];
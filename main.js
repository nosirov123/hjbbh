let randomNumber = Math.floor(Math.random() * 100) + 1;
alert(`Sizda hozir random sonlar chiqishni boshlandi: ${randomNumber}`);
let userConfirmed = confirm("Biz random sonni 2 ga ko'paytirmoqchimiz va bo'lamiz. Davom etasizmi?");

if (userConfirmed) {
    let multiplied = randomNumber * 2;
    let divided = Math.floor(randomNumber / 2);
    let remainder = randomNumber % 3;
    alert(`Random orqali chiqqan son: ${randomNumber}\n` +
          `Biz uni 2 ga ko'paytirdik: ${multiplied}\n` +
          `Va shu sonni 2 ga bo'ldik: ${divided}\n` +
          `Va shu sonni 3 ga bo'lgandagi qoldiq: ${remainder}`);
} 

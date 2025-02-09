confirm("Sizda hozir random sonlar chiqishni boshlaydi 😁");

const randomNumber = Math.floor(Math.random() * 100);
const randomSon = randomNumber * 2; 
const randomBolish = randomSon / 2; 
const qoldiq = randomBolish % 3 ;

confirm("Random orqali chiqqan son: " + randomNumber);
confirm("Biz random sonni 2 ga ko'paytirmoqchimiz va keyin bo'lmoqchimiz!");

alert(
    "Random orqali chiqqan son: " + randomNumber + "\n" +
    "Biz uni 2 ga ko'paytirib " + randomSon + " sonini chiqardik,\n" +
    "Va uni 2 ga bo'lib: " + randomBolish + " sonini chiqardik,\n" +
    "Va shu sonni 3 ga bo'lgandagi qoldiq: " + qoldiq + " sonini chiqardik"
);
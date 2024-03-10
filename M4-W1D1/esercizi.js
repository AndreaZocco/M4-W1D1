// 1)  Funzione per controllare due numeri interi:

function checkNumbers(x, y) {
    if (x === 50 || y === 50 || x + y === 50) {
      return true;
    } else {
      return false;
    }
  }

// 2)  Funzione per rimuovere un carattere in una stringa:

function removeCharacter(str, position) {
    if (position > str.length - 1) {
      return str;
    }
    return str.substring(0, position) + str.substring(position + 1);
  }

// 3)  Funzione per controllare se due numeri sono compresi tra 40 e 60 o tra 70 e 100:

function checkRange(x, y) {
    if ((x >= 40 && x <= 60 && y >= 40 && y <= 60) || (x >= 70 && x <= 100 && y >= 70 && y <= 100)) {
      return true;
    } else {
      return false;
    }
  }

// 4)  Funzione per restituire il nome di una città se inizia con Los o New:

function checkCityName(city) {
    if (city.startsWith("Los") || city.startsWith("New")) {
      return city;
    } else {
      return false;
    }
  }
console.log(checkCityName("Los Angeles"));
console.log(checkCityName("New York")); 
console.log(checkCityName("Chicago")); // false

// 4) Funzione per calcolare la somma di tutti gli elementi di un array:

function sumArray(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }

// 5) Funzione per controllare che un array non contenga i numeri 1 o 3:

function checkArray(arr) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === 1 || arr[i] === 3) {
        return false;
      }
    }
    return true;
  }

// 6) Funzione per trovare il tipo di un angolo:

function angleType(angle) {
    if (angle < 90) return "acuto";
    if (angle === 90) return "retto";
    if (angle > 90 && angle < 180) return "ottuso";
    if (angle === 180) return "piatto";
  }
console.log(angleType(45)); // acuto
console.log(angleType(90)); // retto
console.log(angleType(120)); // ottuso
console.log(angleType(180)); // piatto

// 7) Funzione per creare un acronimo a partire da una frase:

function createAcronym(phrase) {
    return phrase.split(' ').map(word => word[0]).join('').toUpperCase();
  }
console.log(createAcronym("Fabbrica Italiana Automobili Torino"));
console.log(createAcronym("Light Amplification Stimulated Emission Radiation"));
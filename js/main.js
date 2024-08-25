function contarVocales() {
    let continuar = true;

    while (continuar) {
        let palabra = prompt("Ingresá una o varias palabras para conocer cuántas vocales contienen:");
        let contador = 0;

        for (let i = 0; i < palabra.length; i++) {
            let letra = palabra[i].toLowerCase();

            if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
                contador++;
            }
        }

        alert(palabra + " contiene " + contador + " vocales.");

        // Preguntar si desea analizar otra palabra
        continuar = confirm("¿Querés analizar otra palabra?");
    }

    alert("¡Gracias por utilizar el contador de vocales!");
}

contarVocales();
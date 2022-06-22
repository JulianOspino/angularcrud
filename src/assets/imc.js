function calcular() {
  try {
    var peso = parseFloat(document.getElementById("peso").value) || 0,
        altura = parseFloat(document.getElementById("altura").value) || 0;

    var imc = (peso/(altura*altura))
        document.getElementById("imc").value = imc.toFixed(2);
  } catch (error) {

  }
}

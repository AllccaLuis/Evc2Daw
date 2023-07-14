$(document).ready(function () {
  // Validación en tiempo real al cambiar el valor de los campos
  $("#nombre").on("input", function () {
    var nombre = $(this).val().trim();
    var isValid = nombre !== "";
    showFeedback(this, isValid);
  });

  $("#apellido").on("input", function () {
    var apellido = $(this).val().trim();
    var isValid = apellido !== "";
    showFeedback(this, isValid);
  });

  $("#correo").on("input", function () {
    var correo = $(this).val().trim();
    var isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
    showFeedback(this, isValid);
  });

  $("#fechaNacimiento").on("input", function () {
    var fechaNacimiento = $(this).val().trim();
    var fechaActual = new Date();
    var selectedDate = new Date(fechaNacimiento);

    var isValid = selectedDate < fechaActual;
    showFeedback(this, isValid);
  });

  $("#urlImagen").on("input", function () {
    var urlImagen = $(this).val().trim();
    var isValid = isValidUrl(urlImagen);
    showFeedback(this, isValid);
  });
  
  $("#clienteForm").on("submit", function(event) {
    event.preventDefault(); // Evitar el envío automático del formulario

    // Validar los campos del formulario
    var nombre = $("#nombre").val().trim();
    var apellido = $("#apellido").val().trim();
    var correo = $("#correo").val().trim();
    var fechaNacimiento = $("#fechaNacimiento").val().trim();
    var urlImagen = $("#urlImagen").val().trim();

    if (nombre === "" || apellido === "" || correo === "" || fechaNacimiento === "" || urlImagen === "") {
      // Mostrar alerta si hay campos vacíos
      alert("Por favor, complete todos los campos.");
    } else {
      // Mostrar alerta de envío correcto
      alert("Formulario enviado correctamente.");
    }
  });

  // Función para mostrar u ocultar el mensaje de feedback
  function showFeedback(element, isValid) {
    var validFeedback = $(element).siblings(".valid-feedback");
    var invalidFeedback = $(element).siblings(".invalid-feedback");

    if (isValid) {
      $(element).removeClass("is-invalid").addClass("is-valid");
      validFeedback.show();
      invalidFeedback.hide();
    } else {
      $(element).removeClass("is-valid").addClass("is-invalid");
      validFeedback.hide();
      invalidFeedback.show();
    }
  }
});

function mostrarImagen(url) {
  var imagen = document.getElementById("imagenPre");
  if (url.trim() === "") {
    imagen.src =
      "https://1.bp.blogspot.com/_vrSyhLoesHU/TPkHq0hmdOI/AAAAAAAABR8/zbsB-WWhf4g/s1600/cargao.gif";
  } else {
    imagen.onerror = function () {
      imagen.src =
        "https://media.tenor.com/5mz52kzlg6IAAAAi/bloodbros-search.gif";
    };
    imagen.src = url;
  }
}

function isValidUrl(url) {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // Protocolo
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // Dominio
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // O dirección IP
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // Puerto y ruta
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // Parámetros de consulta
      "(\\#[-a-z\\d_]*)?$", // Fragmento de la URL
    "i"
  );
  return pattern.test(url);
}

function validarCorreo(correo) {
  // Aquí puedes agregar tu lógica de validación de correo electrónico
  return /^\S+@\S+\.\S+$/.test(correo);
}

function limpiarFormulario() {
  // Restablecer estilos de validación y mensajes de error
  const form = document.getElementById("clienteForm");
  const inputs = form.querySelectorAll("input, textarea");

  inputs.forEach((input) => {
    input.classList.remove("is-valid");
    input.classList.remove("is-invalid");
    input.value = ""; // Restablecer el valor del campo
    input.nextElementSibling.style.display = "none";
  });

  const invalidFeedback = form.querySelectorAll(".invalid-feedback");
  invalidFeedback.forEach((element) => {
    element.style.display = "none";
  });
}

  

// Cambio de color de los botones en la página 2

$(document).ready(function() {
    // Cambio de color de los botones en la página 2
    $("#btnRojo").click(function() {
        $(this).removeClass().addClass("btn btn-danger");
    });

    $("#btnAzul").click(function() {
        $(this).removeClass().addClass("btn btn-primary");
    });

    $("#btnVerde").click(function() {
        $(this).removeClass().addClass("btn btn-success");
    });

    $("#btnNaranja").click(function() {
        $(this).removeClass().addClass("btn btn-warning");
    });
    $("#btnExtra").click(function() {
        var $button = $(this);
        var currentIndex = 0;
        var colors = [
            "rgb(255, 0, 0)",
            "rgb(255, 50, 0)",
            "rgb(255, 100, 0)",
            "rgb(255, 150, 0)",
            "rgb(255, 200, 0)",
            "rgb(255, 250, 0)",
            "rgb(200, 255, 0)",
            "rgb(150, 255, 0)",
            "rgb(100, 255, 0)",
            "rgb(50, 255, 0)",
            "rgb(0, 255, 0)",
            "rgb(0, 255, 50)",
            "rgb(0, 255, 100)",
            "rgb(0, 255, 150)",
            "rgb(0, 255, 200)",
            "rgb(0, 255, 250)",
            "rgb(0, 200, 255)",
            "rgb(0, 150, 255)",
            "rgb(0, 100, 255)",
            "rgb(0, 50, 255)",
            "rgb(0, 0, 255)",
            "rgb(50, 0, 255)",
            "rgb(100, 0, 255)",
            "rgb(150, 0, 255)",
            "rgb(200, 0, 255)",
            "rgb(250, 0, 255)",
            "rgb(255, 0, 200)",
            "rgb(255, 0, 150)",
            "rgb(255, 0, 100)",
            "rgb(255, 0, 50)"
        ];

        function changeColor() {
            $button.css("background-color", colors[currentIndex]);
            $button.css("border-color", colors[currentIndex]);
            $button.css("box-shadow", "0 0 5px " + colors[currentIndex]);
            currentIndex = (currentIndex + 1) % colors.length;
        }

        setInterval(changeColor, 100);
    });

    $("#cajaTexto").on("change", function() {
        var valorAnterior = $(this).data("valorAnterior");
        var nuevoValor = $(this).val();
    
        if (valorAnterior !== nuevoValor) {
            alert("El contenido de la caja de texto ha cambiado.");
        }
    
        $(this).data("valorAnterior", nuevoValor);
    });

});
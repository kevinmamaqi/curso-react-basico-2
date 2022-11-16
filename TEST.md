# Introducción

Crear un formulario de 3 partes con validación en cada paso.
Usar react-hook-form.
Crear una página nueva de FormularioTest.jsx.
En cada parte hay un botón de siguiente, que al pincharse debe de validar los campos presentes para poder continuar.

## Primera parte.

* Nombre de usuario (requerido)
* Email (requerido)
* Confimar email (requerido), y tiene que coincidir con el Email
* Contraseña (requerido)
* Confirmar contraseña (requerido). Además tiene que tener números y una letra mayuscula por lo menos.

## Segunda parte.

Dirección de envio.

* Dirección (requerido)
* Dirección segunda linea (opcional)
* Código postal (requerido) 5 caracteres.
* Provincia (requerido)
* País (requerido)
* Teléfono (opcional, pero comprobar que es un telefono)
* IVA (opcional)

* Checkbox si usar la misma dirección de envio que de facturación.

Dirección de facturación (opcional)

## Tercera parte

Código de descuento (opcional).
Confirmar y enviar.
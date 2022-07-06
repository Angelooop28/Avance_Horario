<template>
<div class="registro">
  <body>
    <main>
        <form id="caja-registro" action="@/components/HelloWorld.vue" method="post" name="form1">
            <h4>Ingrese sus datos para registrarse</h4>
            <input class="controls" type="text" name="nombres" id="nombres" placeholder="Nombres" required>
            <span id="n-error" aria-live="assertive"></span>
    
            <input class="controls" type="text" name="apellidos" id="apellidos" placeholder="Apellidos" required>
            <span id="a-error" aria-live="assertive"></span>
    
            <input class="controls" type="email" name="correo" id="correo" placeholder="E-mail" required>
            <span id="c-error" aria-live="assertive"></span>
    
            <input class="controls" type="password" name="contrasena" id="contrasena" placeholder="Contraseña" required>
            <span id="p-error" aria-live="assertive"></span>
    
            <input class="controls" type="password" name="contrasena2" id="contrasena2" placeholder="Confirmar contraseña" required>
            <span id="p2-error" aria-live="assertive"></span>
    
            <input class="controls" type="text" name="direccion" id="direccion" placeholder="Dirección" required>
            <span id="d-error" aria-live="assertive"></span>
    
            <label> <p> <input type="checkbox" id="terminos"> Estoy de acuerdo con <a href="#">Términos y Condiciones</a> </p></label>
            <span id="t-error" aria-live="assertive"></span>
    
            <input type="submit" class="send-button" value="Registrar">
        </form>
        <br><center><img src="http://uleam-portafolioorganizacion.weebly.com/uploads/5/9/1/3/59139831/1507566_orig.png" width="320" height="80" ></center>
           </main>
    <footer class="footer">
        <section class="footer__copy container">
            <div class="footer__social">
                <a href="https://www.facebook.com/Facci.Uleam/" class="footer__icons"><img src="../assets/facebook.svg" class="footer__img"></a>
                <a href="https://twitter.com/facciuleam" class="footer__icons"><img src="../assets/twitter.svg" class="footer__img"></a>
                <a href="https://www.youtube.com/channel/UCOferC0PjpEUegrVq8Re-TQ" class="footer__icons"><img src="../assets/youtube.svg" class="footer__img"></a>
            </div>
            <h3 class="footer__copyright">Derechos reservados &copy; HorariosFacci</h3>
        </section>
    </footer>
</body>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
body{
  font-family: "Time new roman";
  /*background-image: url('../assets/degradacion1.jpg');*/
  background-color: rgb(118, 195, 244);
}

.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--padding-container);
}

.hero {
  width: 100%;
  position: relative;
  display: grid;
  grid-template-rows: 100px 1fr;
  color: #fff;
}

.hero::before {
  content: "";
  position: absolute;
  z-index: -1;
}
/* Main */

#caja-registro {
  width: 450px;
  background: #bbc0be85;
  padding: 30px;
  margin: auto;
  margin-top: 100px;
  border-radius: 4px;
  font-family: "Time new roman";
  color: white;
}

#caja-registro h4 {
  font-size: 22px;
  margin-bottom: 20px;
}

.controls {
  width: 100%;
  background: #ffffffbb;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 16px;
  border: 1px solid #96badd;
  font-family: "Time new roman";
  font-size: 18px;
  color: rgb(0, 0, 0);
}

#caja-registro p {
  height: 40px;
  text-align: center;
  font-size: 18px;
  line-height: 40px;
}

#caja-registro a {
  color: white;
  text-decoration: none;
}

#caja-registro a:hover {
  color: white;
  text-decoration: underline;
}

.send-button {
  padding: 15px 25px;
  margin: 20px;
  font-size: 16px;
  border: 2px solid rgb(52, 89, 124);
  color: white;
  cursor: pointer;
  background: linear-gradient(to right, transparent 50%, rgb(52, 89, 124) 50%);
  background-size: 200%;
  background-position: left;
  transition: background-position 0.5s;
  display: inline-block;
  text-align: center;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}

.send-button:hover {
  background-position: right;
  color: white;
  font-weight: 700;
}

/* Footer */

.footer {
  background-color: #1D293F;
  margin-top: 185px;
}

.footer__copy {
  padding: 25px;
  text-align: center;
  color: #fff;
}

.footer__copyright {
  font-weight: 300px;
}

.footer__icons {
  margin-bottom: 10px;
}

.footer__img {
  width: 30px;
}
</style>
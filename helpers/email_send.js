const nodemailer = require("nodemailer");

require('dotenv').config();


const enviarEmail = async (data, email) => {
  let testAccount = await nodemailer.createTestAccount();

  let htmlFull = `

  <body>
  <div class="contenido_full" style="  
  width: 100%;
  height: 100%;
  display: grid;
  justify-content: center;
  align-content: center;
  gap: 20px;">


    <div
    class="contendio"
    style="
      box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
        rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
      display: grid;
      justify-content: center;
      width: auto;
      height: auto;
      align-content: center;
      font-family: 'Poppins', sans-serif;
      font-weight: 500;
    "
  >
    <div
      class="mensaje"
      style="
        display: grid;

        justify-items: start;
        align-items: center;
        margin: 20px;
      "
    >
      <img
        style="width: 80px;  place-self: center;"
        src="https://firebasestorage.googleapis.com/v0/b/node-chat-destruccion.appspot.com/o/sawa-imagenes%2Flogo%2Fsawa-new.png?alt=media&token=26d3af2d-2adc-4d9a-9bc2-d221f264df10"
        alt=""
      />
      <div class="contaco" style="  place-self: center;
      text-align: start;">
        <p>Enviado por: <b>${data.nombre}</b></p>
        <p>Su email es: <b>${data.email}</b></p>
        <p>Su telefono: <b>${
            data.telefono == "" || data.telefono == null
              ? ""
              : data.telefono
          }</b></p>
      </div>

      <div class="texto" style=" width: 400px;">
        <h3 style=" text-align: center;">Mensaje:</h3>
        <p>
         ${data.mensaje}
        </p>
      </div>
    </div>
  </div>

  </div>
  </body>
    `;

  let transporter = nodemailer.createTransport({
    host: process.env.HOST_EMAIL,
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.USER_EMAIL, // generated ethereal user
      pass: process.env.PASS_EMAIL, // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  let info = await transporter.sendMail({
    from: '"Formulario de consulta WEB" <consultas@tomasgit.com.ar>', // sender address
    to: email, // list of receivers
    subject: "Consultas WEB", // Subject line
    html: htmlFull,
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
};

module.exports = enviarEmail;

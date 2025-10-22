export default async function handler(req, res) {
  try {
    const msg = req.query.msg || "sin_mensaje";

    // URL base de Firebase (sin .json)
    const firebaseURL = "https://tesis-rutas-default-rtdb.firebaseio.com";

    // Datos a enviar
    const data = {
      mensaje: msg,
      fecha: new Date().toISOString()
    };

    // Envío POST a Firebase
    const response = await fetch(`${firebaseURL}/datos.json`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    res.status(200).json({
      status: "OK",
      enviado: data,
      firebase_response: result
    });
  } catch (error) {
    res.status(500).json({
      status: "ERROR",
      message: error.message
    });
  }
}

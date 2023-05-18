const express = require('express');
const connection = require('./connectionDb');
const casoRoutes = require('./routes/casoRouter');
const itinerarioRoutes = require('./routes/itinerarioRoute');
const path = require('path');
require('dotenv').config();



connection.connect(function (error) {
    if (error) {
        console.error('Error de conexión: ' + error.stack);
        process.exit(1);
    }

    console.log('Conectado a la base de datos MySQL.');
});





const app = express();

const port = process.env.PORT || 5000;

if (!port) {
    console.error('Please set PORT in .env file');
    process.exit(1);
}

app.use('/api/v1/caso', casoRoutes);
app.use('/api/v1/itinerario', itinerarioRoutes)

app.use(express.static(path.join(__dirname, 'client/build')))
app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
})


app.listen(port, () => {

    console.log(`Server is running on port: ${port}`);
})


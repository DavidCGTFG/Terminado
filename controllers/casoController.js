const connection = require('../connectionDb');

exports.getCasoById = function (req, res) {
    let idCaso = req.params.id;
    let itinerario = req.query.itinerario;
    console.log('ITINERARIO: ', itinerario);
    let query = `SELECT * FROM casos JOIN itinerario_caso ON casos.id = itinerario_caso.id_caso WHERE id_itinerario = ${itinerario} AND casos.id = ${idCaso}`;

    connection.query(query, (error, results, fields) => {
        if (error) {
            console.error(error);
        } else {
            res.json({
                status: 200,
                data: results,
            });
        }
    });
};




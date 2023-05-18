const connection = require('../connectionDb');

exports.getLastItinerario = function (req, res) {

    let lastItinerario = 'select max(id_Itinerario) from itinerario_caso;'
    connection.query(lastItinerario, (error, results, fields) => {
        if (error) {
            console.error(error);
        } else {
            lastItinerario = results[0]['max(id_Itinerario)'];
            // console.log(lastItinerario);
            let query = `select id_Caso from itinerario_caso where id_Itinerario=${lastItinerario};`
            connection.query(query, (error, results, fields) => {
                if (error) {
                    console.error(error);
                } else {
                    res.json({
                        status: 200,
                        data: {
                            idCasos: results.map((element) => element.id_Caso),
                            idItinerario: lastItinerario
                        }
                    });
                }
            });
        }
    });
}  
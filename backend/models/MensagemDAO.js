const con = require("../db.js");

const MensagemDAO = {
    get(limit) {
        return new Promise((res, rej) => { 
            con.query(`SELECT * FROM Mensagem`, (err, result) => {
                if (err) rej(err);
                res(result);
            });

        });
    }
}

module.exports = MensagemDAO;
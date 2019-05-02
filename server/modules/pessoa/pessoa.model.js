

exports.insertSql = "INSERT INTO webclinica.tb001_pessoa " +
    " (no_pessoa, rg_pessoa, cpf_pessoa, dt_nasc_pessoa, " +
    " tp_sangui_pessoa, dt_cadastro, no_usuario, sh_usuario) " +
    " VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING cod_pessoa ";

const { USUARIO_EMPRESTIMO_MAXIMO, USUARIO_MULTA_MAXIMA } = require("../../Utils/Constantes");

 class ServicoEmprestimo {
    static validaEmprestimo(usuario, livro){
        const usuarioAtivo = this.validarUsuario(usuario)
        if (!usuarioAtivo){
            return false
        }
        return true;
    }

    static validarUsuario(usuario){
        if(!usuario.ativo) return false
        if (usuario.emprestimoAtivos >= USUARIO_EMPRESTIMO_MAXIMO) return false
        if(usuario.multa > USUARIO_MULTA_MAXIMA) return false
        return true 
    }
};

module.exports = 
    ServicoEmprestimo


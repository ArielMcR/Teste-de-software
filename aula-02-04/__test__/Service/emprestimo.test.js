const ServicoEmprestimo = require("../../../src/Model/Service/ServicoEmprestimo")
const Usuario = require("../../../src/Model/Usuario/Usuario")
const Livro = require("../../../src/Model/Livro/Livro")
// public void static main (String[]args){}
test(
    'teste',
        () => { 
         //Arrange
         const u = new Usuario({
            id: 1, 
            nome: "Ariel", 
            ativo: true, 
            emprestimosAtivos: 2, 
            multaPendente: 0
         });
         const l = new Livro({
            id: 1, 
            titulo: "Vasco da gama o livro", 
            disponivel: true
            }
         )
         //Act
         const r = ServicoEmprestimo.validaEmprestimo(u, l)

         //Assert
         expect(true).toBe(r)

         }
)
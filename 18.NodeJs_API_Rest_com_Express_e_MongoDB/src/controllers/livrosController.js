import livros from "../models/Livro.js";

class LivroController {
  static listarLivros = (req, res) => {
    livros.find()
      .populate('autor')
      .exec()
      .then(livros => {
        res.status(200).json(livros);
      })
      .catch(err => {
        res.status(500).send({ message: `${err.message} - falha ao cadastrar livro.` });
      });
  }

  static listarLivroPorId = async (req, res) => {
    try {
      const id = req.params.id;
      const livro = await livros.findById(id)
        .populate('autor', 'nome')
        .exec()
      res.status(200).send(livro)
    } catch (err) {
      res.status(400).send({ message: `${err.message} - Esse livro não está cadastrado no banco de dados.` });
    }
  }

  static cadastrarLivro = async (req, res) => {
    try {
      let livro = new livros(req.body);
      await livro.save();
      res.status(201).send(livro.toJSON());
    } catch (err) {
      res.status(500).send({ message: `${err.message} - falha ao cadastrar livro.` });
    }
  };
  
  static atualizarLivro = async (req, res) => {
    try {
      const id = req.params.id;
      await livros.findByIdAndUpdate(id, { $set: req.body });
      res.status(200).send({ message: 'Livro atualizado com sucesso!' })
    } catch (err) {
      res.status(500).send({ message: `${err.message} - falha ao atualizar livro.` });
    }
  }

  static excluirLivro = async (req, res) => {
    try {
      const id = req.params.id;
      await livros.findByIdAndDelete(id);
      res.status(200).send({ message: 'Livro apagado com sucesso!' })
    } catch (err) {
      res.status(500).send({ message: `${err.message} - Esse livro não está cadastrado no banco de dados.` });
    }
  }

  static listarLivroPorEditora = async (req, res) => {
    try {
      const editora = req.query.editora;
      const livrosEncontrados = await livros.find({ 'editora': editora }, {})
      res.status(200).send(livrosEncontrados)
    } catch (err) {
      res.status(500).send({ message: `${err.message} - Esse livro não está cadastrado no banco de dados.` });
    }
  }
}

export default LivroController
import autores from "../models/Autor.js";

class AutorController {
  static listarAutores = (req, res) => {
    autores.find()
    .then(autores => {
      res.status(200).json(autores);
    })
    .catch(err => {
      res.status(500).send({ message: `${err.message} - falha ao cadastrar autor.` });
    });
  }

  static listarAutorPorId = async (req, res) => {
    try {
      const id = req.params.id;
      const autor = await autores.findById(id);
      res.status(200).send(autor)
    } catch (err) {
      res.status(400).send({ message: `${err.message} - Esse autor não está cadastrado no banco de dados.` });
    }
  }

  static cadastrarAutor = async (req, res) => {
    try {
      let autor = new autores(req.body);
      await autor.save();
      res.status(201).send(autor.toJSON());
    } catch (err) {
      res.status(500).send({ message: `${err.message} - falha ao cadastrar autor.` });
    }
  };
  
  static atualizarAutor = async (req, res) => {
    try {
      const id = req.params.id;
      await autores.findByIdAndUpdate(id, { $set: req.body });
      res.status(200).send({ message: 'Autor atualizado com sucesso!' })
    } catch (err) {
      res.status(500).send({ message: `${err.message} - falha ao atualizar autor.` });
    }
  }

  static excluirAutor = async (req, res) => {
    try {
      const id = req.params.id;
      await autores.findByIdAndDelete(id);
      res.status(200).send({ message: 'Autor apagado com sucesso!' })
    } catch (err) {
      res.status(500).send({ message: `${err.message} - Esse autor não está cadastrado no banco de dados.` });
    }
  }
}

export default AutorController
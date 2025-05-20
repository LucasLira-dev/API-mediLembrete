import MedicamentosRepository from '../repositories/MedicamentosRepository.js';

class MedicamentosController{
    async index(req, res){
        const row =  await MedicamentosRepository.findAll(); //chamar o método findAll do repositório
        res.json(row);

    }

    async show(req, res){
        const id = req.params.id;
        const row = await MedicamentosRepository.findById(id)

        res.json(row);
    }

    async store(req, res){
        try {
            const { nome, dosagem, horario } = req.body;
            const row = await MedicamentosRepository.create(nome, dosagem, horario);
            res.json(row);
        } catch (error) {
            res.status(500).json({ error: error.message || 'Erro ao cadastrar medicamento' });
        }
    }

    async update(req, res){
        try{
            const { nome, dosagem, horario } = req.body;
            const id = req.params.id;
            const row = await MedicamentosRepository.update(id, nome, dosagem, horario);
            res.json(row);
        }
        catch (error) {
            res.status(500).json({ error: error.message || 'Erro ao atualizar medicamento' });
        }
        
    }
    async delete(req, res){
        try{
            const id = req.params.id;
            const row = await MedicamentosRepository.delete(id);
            res.json(row);
        }
        catch (error) {
            res.status(500).json({ error: error.message || 'Erro ao deletar medicamento' });
        }
    }
}

export default new MedicamentosController();
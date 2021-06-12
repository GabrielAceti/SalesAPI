import {Request, Response} from 'express';
import Costumer from '../models/costumer';
import { CostumerInterface } from '../models/costumer';

class CostumerController{

    async  create(req: Request, res: Response){
        const {date, name, address, telephone, observation} = req.body;
        
        try{
            const createdCostumer: CostumerInterface = await Costumer.create({date, name, address, telephone, observation });
            return res.status(200).json(createdCostumer);
        }
        catch(err){
            res.status(400).json(err);
        }
    }

    async get(req: Request, res: Response){
        try{
            const costumers = await Costumer.find();
            res.status(200).json(costumers);
        }
        catch(err){
            res.status(400).json(err);
        }
    }

    async show(req: Request, res: Response){

        const { _id } = req.params;
        try{
            const costumer = await Costumer.findOne({ _id });
            res.status(200).json(costumer);
        }
        catch(err){
            res.status(400).json(err);
        }
    }

    async delete(req: Request, res: Response){
        const { _id } = req.params;

        try{
            const deletedCostumer = await Costumer.deleteOne({ _id });
            res.status(200).json(deletedCostumer);
        }
        catch(err){
            res.status(400).json(err);
        }
    }

    async update(req: Request, res: Response){
        const { _id } = req.params;

        try{
            const updatedCostumer = await Costumer.updateOne({ _id }, req.body);
            res.status(200).json(updatedCostumer);
        }
        catch(err){
            res.status(400).json(err);
        }
    }
}

export default CostumerController



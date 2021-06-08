import {Request, Response} from 'express';
import Sale from '../models/sale'
import { SaleInterface } from '../models/sale'

class SalesController {

    async create(req: Request, res: Response){
        const {date, costumer, product, price, description} = req.body;

        try{
            const createdSale: SaleInterface = await Sale.create({date, costumer, product, price, description});
            return res.status(200).json(createdSale);
        }
        catch(err){
            return res.status(400).json(err);
        }
    }

    async delete(req: Request, res: Response){
        const { _id } = req.params;

        try{
            const deletedSale: SaleInterface = await Sale.deleteOne({_id}) as SaleInterface; 
            return res.status(200).json(deletedSale);
        }
        catch(err){
            return res.status(400).json(err);
        }
    }

    async get(req: Request, res: Response){
        try{
            const sales = await Sale.find();
            return res.status(200).json(sales);
        }
        catch(err){
            return res.status(400).json(err);
        }
    }

    async show(req: Request, res: Response){
        const {_id} = req.params;

        try{
            const sale = await Sale.findOne({ _id });
            return res.status(200).json(sale);
        }
        catch(err){
            return res.status(200).json(err);
        }
    }

    async updateOnde(req: Request, res: Response){
        const { _id } = req.params;

        try{
            const updatedSale = await Sale.updateOne({ _id }, req.body);
            return res.status(200).json(updatedSale);
        }
        catch(err){
            return res.status(400).json(err);
        }
    }
}

export default SalesController;


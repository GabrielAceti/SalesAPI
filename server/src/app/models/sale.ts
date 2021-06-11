import {Document, Model } from 'mongoose';
import mongoose from '../../data/index';

export interface SaleInterface extends Document {
    date: Date;
    costumer: String;
    product: String;
    price: Number;
    description?: String;    
}

const SaleSchema = new mongoose.Schema({
    date: {type: Date, required: true},
    costumer: {type: String, required: true},
    product: {type: String, required: true},
    price: {type: Number, required: true},
    description: {type: String, required: false}
});

const Sale: Model<SaleInterface> = mongoose.model('Sale', SaleSchema);

export default Sale;
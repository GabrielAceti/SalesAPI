import { Document, Model } from "mongoose";
import mongoose from "../../data";

export interface CostumerInterface extends Document{
    date: Date;
    name: String;
    address?: String;
    telehpone?: String;
    observation?: String;
}

const CostumerSchema = new mongoose.Schema({
    date: {type: Date, require: true},
    name: {type: String, require: true},
    address: {type: String, require: false},
    telephone: {type: String, require: false},
    observation: {type: String, require: false}
});

const Costumer: Model<CostumerInterface> = mongoose.model('Costumer', CostumerSchema);

export default Costumer;
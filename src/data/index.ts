import mongoose, { mongo } from 'mongoose';

mongoose.connect(process.env.MONGODB_HOST || 'mongodb://localhost/Sales')
mongoose.Promise = global.Promise;
export default mongoose;
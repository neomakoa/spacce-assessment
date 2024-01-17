import mongoose from "mongoose";
import keys from "../configs/key_dev.js";

mongoose.set("strictQuery", true);
mongoose.connect(keys.stringConnection);

export default mongoose;
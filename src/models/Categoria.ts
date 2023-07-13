import mongoose, { Schema } from "mongoose";

export interface Categories{
    name: string
}

const CategorySchema = new Schema<Categories>({
    name: {type:String}
},

{
    timestamps:true,
}

)

const categories = mongoose.model<Categories>("Categories", CategorySchema)

export default categories
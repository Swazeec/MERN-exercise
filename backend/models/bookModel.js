import mongoose from "mongoose"

const bookSchema = mongoose.Schema(
    {
        title:{
            type:String,
            required:true
        },
        author:{
            type:String,
            required:true
        },
        publishYear:{
            type:Number,
            required:true
        }
    },
    {
        // permet d'avoir ces informations automatiquement :
        // "createdAt": "2024-01-08T11:05:51.532Z",
        // "updatedAt": "2024-01-08T11:05:51.532Z",
        timestamps: true
    }
)
export const Book = mongoose.model('Book',bookSchema)
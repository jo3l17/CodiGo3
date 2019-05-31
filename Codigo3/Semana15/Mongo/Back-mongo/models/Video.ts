var mongoose = require('mongoose');
var Schema = mongoose.Schema;

export var videoSchema = new Schema({
    vid_titu: String,
    vid_desc: String,
    vid_link: String,
    vid_img: String,
    vid_likes:[
        {
            usu_nom:String,
            usu_email:{
                type:String
            }
        }
    ],
    vid_coments:[
        {
            usu_email:String,
            usu_nom:String,
            comment:String
        }
    ]
}, { versionKey: false });


videoSchema.methods.nombreApellido = function () {
    return this.usu_nom + " " + this.usu_ape;
};
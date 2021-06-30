const client = require("../redis");

const homeController = {

    get:(req,res,next)=>{
        const {prop} = req.params;
        client.get(prop,(err,result)=>{
            if(err){
                return next();
            }
            res.json(result);
        });       
    },

    set:(req,res,next)=>{
        const {key,value} = req.body;
        client.set(key,value,(err,result)=>{
            if(err){
                return next();
            }
            res.status(201).json(result);
            
        })
    }

}

module.exports = homeController;
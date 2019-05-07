const jwt = require('jsonwebtoken');

export const verificarToken = (token:any)=>{
    
    try {
        let data = jwt.verify(token,'sape',{algorithm:'RS256'});
        return data
    } catch (error) {
        console.log(error.message)
    }
    
}
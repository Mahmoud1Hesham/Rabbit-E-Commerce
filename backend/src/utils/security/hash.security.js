
import bcrypt from 'bcrypt'

// functions to generate hashes using bcrypt.
export const generateHash = ({
    plainText=" ",
    salt = process.env.SALT
}={}) =>{
    const hash = bcrypt.hashSync(plainText, parseInt(salt))
    return hash;
}

// functions to  compare hashes using bcrypt.

export const compareHash = ({ plaintext = "", hashValue = "" } = {})=>{
const match = bcrypt.compareSync(plaintext, hashValue);
return match;
}
    
    
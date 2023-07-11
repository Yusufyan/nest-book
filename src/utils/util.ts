import * as bcrypt from 'bcrypt'

export function generatedId(code, num){
    let pad = "0000"
    num = pad.substring(0, pad.length - num.toString().length) + num.toString()
    return code + num
}

export async function hashPassword(data){
    const hash =  await bcrypt.hash(data, 10)
    return hash
}
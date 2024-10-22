import bcrypt from 'bcrypt';


const hash = await bcrypt.hash('abc123', 10) // pull password instead of abc123
console.log(hash)
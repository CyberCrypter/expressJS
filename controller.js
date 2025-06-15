export const usernameController = (req,res)=> {
    const username = req.params.name;
    res.send(`Hello ${username}`);
}

export const searchController = (req,res)=>{
    const word = req.query.keyword;
    res.send(`searching for ${word}`)
}
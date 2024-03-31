const express = require("express");
const app = express();
const port = 3001;

function calculatesum (n){
    let ans =0;
    for (let i = 0; i < n; i++) {
         ans = ans + i;       
    }
    return ans; 
}

app.get('/', (req,res) => {
    const n = req.query.n;

    const ans= calculatesum(n);
    res.send(ans.toString());
})

app.listen(port, () => {
    console.log(`port listening on port ${port}`);
})
module.exports = {
    apiResultFunc: function(req, res){
        return function(err, result){
            if(err) res.status(500).send('DB Operation Error: ', err);
                else res.status(200).json(result);
        };
    }
};

module.exports = (app, db, ussd) => {
    app.post("/ussd",  (req,  res) => {
    
            const params = {
                sessionId: req.body.sessionId,
                serviceCode: req.body.serviceCode,
                phoneNumber: req.body.phoneNumber,
                text: req.body.text
            };
            ussd.handler(params, next(err))

            if (params.text ===" ") {
                res.send(`CON Africa's Talking Setup\n
                1.  Africa\n
                2. Chuka`)
            }
            else if(params.text === "1") {
                res.send(`END Africa is a continent `)
            }

            else if(params.text === "2") {
                res.send(`Chuka built this app `)
            }


            
    })

    



}
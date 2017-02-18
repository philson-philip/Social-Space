app.get('/webhook', function(req, res) {
  if (req.query['hub.mode'] === 'subscribe' &&
      req.query['hub.verify_token'] === EAADrz3zZCBuEBAGzWhgV6hKL9L65ZAupUqcb5ie4ylO8HZB9FsTEcO7hJCsZAtjM8ENGWvRifphMlZCRN6e5mYjCNkZBV62LvJAYizgdzzt7qJjANRjsLTdwPufZAngTtU0IwR8BiUXgsnfS8vTKCkS4LJb2mn1Dxyum61qBTZAZCSwZDZD) {
    console.log("Validating webhook");
    res.status(200).send(req.query['hub.challenge']);
  } else {
    console.error("Failed validation. Make sure the validation tokens match.");
    res.sendStatus(403);          
  }  
});
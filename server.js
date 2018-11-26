let express = require("express");
let bodyParser = require("body-parser");
let morgan = require("morgan");
let app = express();
let pg = require("pg");
const path = require("path");

let pool = new pg.Pool({
  user: "hqdfysvblucuug",
  database: "db3n8ggd2h1j24",
  password: "3f88fe5f63ee83e10064b6c6483746b5527a29cd20e9c8e7cf390c8ba6fa375c",
  host: "ec2-54-83-27-165.compute-1.amazonaws.com",
  port: 5432,
  max: 10
});
pg.defaults.ssl = true;

app.use(express.static(path.join(__dirname, "/client", "/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client", "/build/index.html"));
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan("dev"));

app.use(function(request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  request.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.post("/api/login", function(req, res) {
  // console.log(request);
  var user_email = req.body.email;
  var user_pass = req.body.password;
  var id = 1;

  pool.connect((err, db, done) => {
    if (err) {
      return console.log(err);
    } else {
      db.query(
        "SELECT * from salesforceonegc.onegc_citizen_profile__c where one_gc_email__c = $1",
        [user_email],
        (err, table) => {
          done();
          if (err) {
            return console.log(err);
          } else if (!table.rows.length) {
            res.status(200).send({ message: "User Not found in Database" });
          } else {
            console.log(table.rows[0].one_gc_email__c);
            console.log(table.rows[0].name);
            if (user_email == table.rows[0].one_gc_email__c) {
              console.log(true);
              res.send(true);
              
            } else {
              console.log(false);
              res.send(false);
            }
          }
        }
      );
    }
  });
});

app.post('/api/verify_details', function(req, res){
  pool.connect((err, db, done) => {
  if(err){
    return console.log(err);
  } else {
  db.query('SELECT * from salesforceonegc.onegc_citizen_profile__c where sfid = $1',['a780b000000AKaFAAW'], (err, table) =>{
      done();
      if(err){
        return console.log(err);
      } 
      else if (!table.rows.length) {
        res.status(200).send({message: 'User Not found in Database!!'});
      }
      else {
        console.log(table.rows[0].one_gc_email__c);
        console.log(table.rows[0].name);
        res.status(200).send(table.rows);
        
      }
    })
  }
})  
});

app.post("/api/account_history", function(req, res) {
  console.log('in api account notifications');
  var userId = req.body.userId;
  console.log(userId);
  pool.connect((err, db, done) => {
    if (err) {
      return console.log(err);
    } else {
      db.query(
        "SELECT * from salesforceonegc.onegc_account_history__c where onegc_citizen_profile__c = $1 Limit 3",
        [userId],
        (err, table) => {
          done();
          if (err) {
            return console.log(err);
          } else if (!table.rows.length) {
            res.status(200).send({ message: "No account notifications found for this user" });
          } else {
            console.log(table.rows[0].onegc_status__c);
            console.log(table.rows[0].onegc_citizen_profile__c);
              console.log(true);
              res
                .status(200)
                .send({
                  Notifications: table.rows
                });
          }
        }
      );
    }
  });
});

app.post("/api/notifications", function(req, res) {
  var userId = req.body.userId;
  pool.connect((err, db, done) => {
    if (err) {
      return console.log(err);
    } else {
      db.query(
        "SELECT * from salesforceonegc.onegc_account_notifcations__c where onegc_citizen_profile__c = $1 Limit 3",
        [userId],
        (err, table) => {
          done();
          if (err) {
            return console.log(err);
          } else if (!table.rows.length) {
            res.status(200).send({ message: "No account notifications found for this user" });
          } else {
            console.log(table.rows[0].onegc_status__c);
            console.log(table.rows[0].onegc_citizen_profile__c);
              console.log(true);
              res
                .status(200)
                .send({
                  Notifications: table.rows
                });
          }
        }
      );
    }
  });
});

app.post("/api/benefits", function(req, res) {
  var userId = req.body.userId;
  pool.connect((err, db, done) => {
    if (err) {
      return console.log(err);
    } else {
      db.query(
        "SELECT * from salesforceonegc.onegc_subscribed_benefits__c INNER JOIN salesforceonegc.onegc_program__c on salesforceonegc.onegc_subscribed_benefits__c.onegc_program__c = salesforceonegc.onegc_program__c.sfid  where onegc_citizen_profile__c = $1 Limit 3",
        [userId],
        (err, table) => {
          done();
          if (err) {
            return console.log(err);
          } else if (!table.rows.length) {
            res.status(200).send({ message: "No account notifications found for this user" });
          } else {
              res
                .status(200)
                .send({
                  Benefits: table.rows
                });
          }
        }
      );
    }
  });
});


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

app.post("/api/enroll", function(req, res) {
    var enroll_id = getRandomInt(100000);
    pool.connect((err, db, done) => {
        if (err) {
            // return console.log(err);
        } else {
            //for insertion
            const enroll_query = 'INSERT INTO salesforceonegc.onegc_benefit_enrollment (id, territory, age, marital_status, income_low, employment_situation, health_situation, i_am) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id'
            const values = [enroll_id, req.body.province, req.body.ageValue, req.body.maritalValue, req.body.incomeValue, req.body.employmentValue, req.body.healthValue, req.body.checkValue]

            db.query(enroll_query, values, (err, res) => {
                if (err) {
                    // console.log(err.stack)
                } else {
                    // console.log(res.rows[0]);
                    setTimeout(function update_status() {
                        //for updation
                        const enroll_query_upd = 'UPDATE salesforceonegc.onegc_benefit_enrollment SET status=($1) WHERE id=($2)'
                        const values = ['Approved', enroll_id]
                        db.query(enroll_query_upd, values, (err, res) => {
                            if (err) {
                                return 'error';
                            } else {
                                console.log('success');
                            }
                        });
                    }, 5000);

                }
            });
            res
                .status(200)
                .send({
                    status: 'success'
                });
        }
    })
})
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Listening on port " + PORT));

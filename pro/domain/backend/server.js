const express = require("express");
const app = express();
var dns = require("dns");

app.get("/", (req, res) => {
  res.send("hello in get");
});

var checkDomain = require("check-domain");

var options = {
  domain: "priyankmadan.com",
  majesticKey: "",
  whois: {
    user: "",
    password: ""
  },
  semrushKey: ""
};

checkDomain(options, function(error, result) {
  console.log("My Result", result); // see the complete result structure
  console.log(result.isDNSFound);
  console.log(result.ip);
  console.log(result.isAlive);
  console.log(result.isAvailable);
  console.log(result.majestic); // see the json structure provided by http://developer-support.majestic.com/api/commands/get-index-item-info.shtml
  console.log(result.whois); // see the json structure provided by http://www.whoisxmlapi.com

  console.log(result.semrush); // The Semrush datas

  console.log(result.primaryIndex);
  console.log(result.googleIndex);
  console.log(result.secondaryIndex);

  // We add extra fields in the whois structure
  console.log(result.whois.isValidDomain);
  console.log(result.whois.missingData); // The whois database doesn't contain info for this domain
  console.log(result.whois.isPendingDelete);
  console.log(result.whois.isRedemptionPeriod);
  console.log(result.whois.createdDate);
  console.log(result.whois.expiresDate);
  console.log(result.whois.expiredWaitingTime);
});

app.listen(8080);

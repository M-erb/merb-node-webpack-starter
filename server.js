const express = require('express')
const app = express()
const os = require('os')

app.set('view engine', 'ejs')
app.use('/', express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  res.render('index')
})

// require('./ctrls/consumablesCtrl')(app)

app.listen(3000)
console.log('Server Started, listening on port 3000')
console.log('visit: http://localhost:3000')

// -------------------
// to display local network address to test on other devices
// -------------------
var ifaces = os.networkInterfaces();
Object.keys(ifaces).forEach(function (ifname) {
  var alias = 0;

  ifaces[ifname].forEach(function (iface) {
    if ('IPv4' !== iface.family || iface.internal !== false) {
      // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
      return;
    }

    if (alias >= 1) {
      // this single interface has multiple ipv4 addresses
      // console.log(ifname + ':' + alias, iface.address);
      console.log(`visit: http://${iface.address}:3000`)
    } else {
      // this interface has only one ipv4 adress
      // console.log(ifname, iface.address);
      console.log(`visit: http://${iface.address}:3000`)
    }
    ++alias;
  });
});
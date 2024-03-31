const dns = require('dns');

// Perform a DNS lookup for a specific domain
const domainToLookup = 'www.example.com';

dns.lookup(domainToLookup, (err, address, family) => {
  if (err) {
    console.error(`DNS lookup failed: ${err.message}`);
    return;
  }

  console.log(`IP address for ${domainToLookup}: ${address} (IPv${family})`);
});

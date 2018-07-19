module.exports = {
  env : 'development',
  url: process.env.URL || "http://localhost:3000", //enter flux auth callback url here.
  port: 3000,
  session: {
    secret: 'topSecret'
  },
  NBS_clientId: process.env.NBS_ID || "c7c6dbf5-4df9-4a13-ab89-3b1970af7a2c", //enter client.id from NBS here
  NBS_clientSecret: process.env.NBS_SECRET || "e54ed1d1-fdbe-488a-9ae5-fc95a2027a68" //enter client.secret from NBS here
}

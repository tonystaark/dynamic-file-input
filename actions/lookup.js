const banks = require("../banks.js");

const lookup = (args) => {
  if (args.length < 2 ){
    console.log('Bank is undefined')
  } else {
    try {
      const res = banks.find(b => b.abbrev === args[1])
      console.log(res.name)
    }
    catch(err){
      console.log('Requested bank is not found!')
    }
  }
}

module.exports = lookup

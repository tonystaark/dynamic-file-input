const calculate = (args) => {
  if (args.length < 4 ){
    console.log('Not enough information to calculate.')
    return 'Not enough information to calculate.'
  } else if (args.length > 4 ){
    console.log('Invalid information to calculate.')
  } else {
    try {
      const monthly_salary = args[2]
      const credit_spend = args[3]
      if (monthly_salary >= 5000 && monthly_salary > credit_spend){
        console.log('UOB One');
        return 'UOB One'
      } else if (monthly_salary > credit_spend) {
        console.log('OCBC 360')
        return 'OCBC 360'
      } else if (monthly_salary > 1000 && credit_spend > 1000){
        console.log('DBS Multiplier')
        return 'DBS Multiplier'
      } else {
        console.log('CIMB FastSaver')
        return 'CIMB FastSaver'
      }
    }
    catch(err){
      console.log(err)
    }
  }
}

module.exports = calculate
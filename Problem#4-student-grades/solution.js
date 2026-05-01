((grades) => {
  const roundUpArr = grades.map(el => {
    if (el >= 38) {
      let nextMultiple = Math.ceil(el/5) *5
      if ((nextMultiple - el) < 3) {
        return nextMultiple
      } else {
        return el
      }
    } 
    return el
  })
  return roundUpArr
})([73,67,38,33])
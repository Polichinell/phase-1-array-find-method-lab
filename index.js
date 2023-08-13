const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]

  const superbowlWin = arr => {
   let win = arr.find(obj => obj.result === 'W')

   return win ? win.year : undefined
  }
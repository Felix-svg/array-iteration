const couponLocations = [
    { room: 'Living room', amount: 5 },
    { room: 'Kitchen', amount: 2 },
    { room: 'Bathroom', amount: 1 },
    { room: 'Master bedroom', amount: 7 }
  ];

  function ourReduce(arr, reducer, init) {
    let accum = init
    for (const element of arr){
        accum = reducer(accum, element)
    }
    return accum
  }

  function couponCounter(totalAmount, location){
    return totalAmount + location.amount
  }

 console.log(ourReduce(couponLocations, couponCounter, 0))
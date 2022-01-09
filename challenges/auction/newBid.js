/**
 KOMI TECHNICAL TEST: Bid Price

 We are launching an auctioning product for selling memorabilia and need a calculator for the following condition.

 Customers can bid on items up until the auction closing time by pre-determined increments.
 As bids increase, the price increment (tick size) gets larger depending on the price band.
 The following describes the criteria to determine the tick size:

 bid >= £100 & bid < £200 -> £1 i.e bids can only be whole integers [£100, £101, £102 ... £197, £198, £199]
 bid >= £200 & bid < £300 -> £2 i.e bids can only be multiples of £2 [£200, £202, £204 ... £294, £296, £298]
 bid >= £300 & bid < £400 -> £5 i.e bids can only be multiples of £5 [£300, £305, £310 ... £385, £390, £395]
 bid >= £400 & bid < £600 -> £10 i.e bids can only be multiples of £10 [£400, £410, £420 ... £570, £580, £590]
 bid >= £600 & bid <= £1,000 -> £20 i.e bids can only be multiples of £20 [£600, £620, £640 ... £960, £980, £1000]

 Bids can not be accepted for prices lower than £100 or greater than £1,000

 Create a function that
  accepts two parameters: current bid, number of ticks to increase the bid by
  returns: new bid as determined by the price band criteria

 For example
  current bid = 220
  no. of ticks = 3
  new bid = 226
  workings: 220 + (3 x 2) = 226
 **/

function newBid(currentBid, noOfTicks) {
  return currentBid + (noOfTicks * 2)
}

module.exports = newBid

// const AISLE=0;
// const MIDDLE=1;
// const WINDOW=2;

 enum SeatChoice{
    AISLE="aisle", //default value of AISLE is 0, MIDDLE is 1 and WINDOW is 2, but we can change the value of AISLE to 10 and the rest will be incremented by 1
    MIDDLE="middle",
    WINDOW="window",
    FOURTH=0
}

const hcSeat=SeatChoice.AISLE;

// if(seat==AISLE){
//     console.log("You got an aisle seat");
// }



// code your solution here
const record = [
    { year: "2018", result: "N/A" },
    { year: "2017", result: "N/A" },
    { year: "2016", result: "N/A" },
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" },
    { year: "2012", result: "N/A" },
    { year: "2011", result: "N/A" },
    { year: "2010", result: "N/A" },
    { year: "2009", result: "N/A" },
    { year: "2008", result: "N/A" },
    { year: "2007", result: "N/A" },
    { year: "2006", result: "N/A" },
    { year: "2005", result: "N/A" },
    { year: "2004", result: "N/A" },
    { year: "2003", result: "N/A" },
    { year: "2002", result: "N/A" },
    { year: "2001", result: "N/A" },
    { year: "2000", result: "N/A" },
    { year: "1999", result: "N/A" },
    { year: "1998", result: "W" },
    { year: "1997", result: "W" },
    { year: "1996", result: "N/A" },
    { year: "1995", result: "N/A" },
    { year: "1994", result: "N/A" },
    { year: "1993", result: "N/A" },
    { year: "1992", result: "N/A" },
    { year: "1991", result: "N/A" },
    { year: "1990", result: "N/A" },
    { year: "1989", result: "L" },
    { year: "1988", result: "N/A" },
    { year: "1987", result: "L" },
    { year: "1986", result: "L" },
    { year: "1985", result: "N/A" },
    { year: "1984", result: "N/A" },
    { year: "1983", result: "N/A" },
    { year: "1982", result: "N/A" },
    { year: "1981", result: "N/A" },
    { year: "1980", result: "N/A" },
    { year: "1979", result: "N/A" },
    { year: "1978", result: "N/A" },
    { year: "1977", result: "N/A" },
    { year: "1976", result: "L" },
    { year: "1975", result: "N/A" },
    { year: "1974", result: "N/A" },
    { year: "1973", result: "N/A" },
    { year: "1972", result: "N/A" },
    { year: "1971", result: "N/A" },
    { year: "1970", result: "N/A" },
    { year: "1969", result: "N/A" },
    { year: "1968", result: "N/A" },
    { year: "1967", result: "N/A" },
    { year: "1966", result: "N/A" },
    { year: "1965", result: "N/A" },
    { year: "1964", result: "N/A" },
    { year: "1963", result: "N/A" },
    { year: "1962", result: "N/A" },
    { year: "1961", result: "N/A" },
    { year: "1960", result: "N/A" }
]

function superbowlWin(record) {
    const yearCheck = record.find((winCheck) => winCheck.result === "W")
    if (yearCheck) { return yearCheck.year }
};









// const superbowlWin = function (record) {
//     const broncosWin = record.find((winYear) => winYear.result === "W")

//     if (broncosWin) {
//         return broncosWin.year
//     }

// };


// function superbowlWin(record) {
//     const broncosWin = record.find((winYear) => winYear.result === "W");
//     if (broncosWin) {
//         return broncosWin.year;
//     }
// };















// function superbowlWin(record) {
//     const broncosWin = record.find((winYear) => winYear.result === "W")
//     if (broncosWin) {
//         return broncosWin.year
//     }
// };







// const findWin = superbowlWin(record);
// console.log(findWin);

// returns both win and year
// function superbowlWin(year) {
//     if (year.result === "W") { return year.result }
// }


// function isWin(record) {
//     let findWin = 
//     for (let year of record) {
//         return record(find(year.result === "W"))
//     }
//     let(findWin = year.result === "W")

//     return findWin
// };


// console.log(record.find(superbowlWin))



























// //record.indexOf


// // function isOdd(element, index, array) {
// //     return (element % 2 === 1);
// //   }

// //   [4, 6, 8, 10].find(isOdd); //=> undefined, not found
// //   [4, 5, 8, 10].find(isOdd); //=> 5
// //   [4, 5, 7, 8, 10].find(isOdd); //=> 5
// //   [4, 7, 5,  8, 10].find(isOdd); //=> 7

// // const record = [
// //     { year: "2015", result: "W" },
// //     { year: "2014", result: "N/A" },
// //     { year: "2013", result: "L" },
// //     //...
// // ]






// function superbowlWin(record) {
//     const winObject = record.find(item => item.result === "W");

//     if (winObject) {
//         return winObject.year;
//     } else {
//         return undefined;
//     }
// }

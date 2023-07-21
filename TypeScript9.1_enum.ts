// Enum
// use to define constants.
enum Weekday {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

let today: string = Weekday[Weekday.Monday]
let favoriteDay: Weekday = Weekday.Friday

console.log('Today is', Weekday[today])
console.log('My favorite day is', Weekday[favoriteDay])

switch (today) {
  case Weekday[Weekday.Monday]:
    console.log("It's Monday, the start of the week.")
    break
  case Weekday[Weekday.Friday]:
    console.log("It's Friday, the end of the week. Time to relax!")
    break
  default:
    console.log("It's another weekday.")
}

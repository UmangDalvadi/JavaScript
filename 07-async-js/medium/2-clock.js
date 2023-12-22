// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)


setInterval(() => {

    const currentTime = new Date();

    console.log(currentTime.getHours() + ":" + currentTime.getMinutes() + ":" + currentTime.getSeconds());

    let meridiem = currentTime.getHours() >= 12 && currentTime.getHours() < 24 ? " PM" : " AM";
    ISTHour = Math.floor(currentTime.getHours() % 12)

    console.log((ISTHour < 10 ? "0" + ISTHour : ISTHour) + ":" + currentTime.getMinutes() + ":" + currentTime.getSeconds() + meridiem);

}, 1000);

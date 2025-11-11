import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    // starting on current date
    // const today = new Date();

    //modify date to specify a specific day.
    const today = new Date("June 23, 2023 11:13:00");

    const day = today.getDay();
    console.log(day);
    let type = "a weekday";
    let adv = "it's time to work hard";

    if (day === 0 || day === 6) {
        type = "the weekend";
        adv = "it's time to have some fun!"
    }


    /* res.render("index.ejs", {
        dayType: "a weekday", 
        advice: "it's time to work hard on " + day }) */

    res.render("index.ejs", {
        dayType: type, 
        advice: adv, })    
    });


app.listen(port, () => {
    console.log(`Server running on port ${port}.`)
});

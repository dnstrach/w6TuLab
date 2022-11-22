//importing by
const {By} = require('selenium-webdriver')

const crossMovie = async (driver) => {
    await driver.findElement(By.xpath('//li/span')).click()

    let crossedMovie = await driver.findElement(By.xpath('//li/span[@class="checked"]'))

    const displayed = crossedMovie.isDisplayed()

    expect(displayed).toBeTruthy()
}


module.exports = {
    crossMovie
}
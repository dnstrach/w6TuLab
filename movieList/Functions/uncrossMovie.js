//importing by
const {By} = require('selenium-webdriver')

const uncrossMovie = async (driver) => {
    await driver.findElement(By.xpath('//span[@class="checked"]')).click()

    let uncrossedMovie = await driver.findElement(By.xpath('//span'))

    const displayed = uncrossedMovie.isDisplayed()

    expect(displayed).toBeTruthy()
}


module.exports = {
    uncrossMovie 
}
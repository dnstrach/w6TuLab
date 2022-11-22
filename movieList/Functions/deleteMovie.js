//importing by
const {By} = require('selenium-webdriver')

const deleteMovie = async (driver) => {
    await driver.findElement(By.xpath('//button[@id="Avatar"]')).click()

    // let deletedMovie = await driver.findElement(By.xpath('//aside[@class=hide]'))

    // const displayed = deletedMovie.toBeDisplayed()

    // expect(displayed).ToBeTruthy()

}

module.exports = {
    deleteMovie
}
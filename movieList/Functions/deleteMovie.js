//importing by
const {By} = require('selenium-webdriver')

const deleteMovie = async (driver) => {
    await driver.findElement(By.xpath('(//button)[2]')).click()

    //await driver.findElement(By.xpath('(//button)[2]')).click();

    //const displayed = await driver.findElement(By.xpath('//ul[contains(text(), "")]'))

    //expect(displayed).ToBeTruthy()

    const ul = await driver.findElement(By.xpath('//ul'))

    expect(ul.hasChildren).toBeFalsy()

}

module.exports = {
    deleteMovie
}
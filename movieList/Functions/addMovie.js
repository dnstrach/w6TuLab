const {By} = require('selenium-webdriver')

const addMovie = async (driver) => {
    await driver.findElement(By.xpath(`//input`)).sendKeys('Avatar')

    //await driver.sleep(3000)

    await driver.findElement(By.xpath("//button")).click()

    //await driver.sleep(3000)

    //confirm movie was added
    const movie = await driver.findElement(By.xpath('//li'))

    //check if movie element is displayed on page will equal T or F
    const displayed = movie.isDisplayed()

    expect(displayed).toBeTruthy()
}

//same as controller file, placement is different
module.exports = {
    addMovie
}
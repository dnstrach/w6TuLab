//destructure 
const {Builder, Capabilities} = require('selenium-webdriver')

const { addMovie } = require('../Functions/addMovie')
const { crossMovie } = require('../functions/crossMovie')
const { uncrossMovie } = require('../Functions/uncrossMovie')
const { deleteMovie } = require('../Functions/deleteMovie')

require('chromedriver')

//creating driver to act as user
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

//opens .html
beforeAll(async () => {
    await driver.get('http://127.0.0.1:5502/movieList/index.html')
})

//closes .html browser
afterAll(async () => {
    await driver.quit()
})

describe('Movie Functions', () => {
    test('Add a movie', async () => {
        await addMovie(driver)
    
        await driver.sleep(3000)
    });

    test('Cross off a movie', async () => {
        await crossMovie(driver)

        await driver.sleep(3000)
    });

    test('Uncross a movie', async () => {
        await uncrossMovie(driver)

        await driver.sleep(3000)
    });

    test('Delete a movie', async () => {
        await deleteMovie(driver)

        await driver.sleep(3000)
    })

})
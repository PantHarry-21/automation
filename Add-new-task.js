const { Builder, By, Key, WebElement } = require("selenium-webdriver");
const {WebDriverWait} = require ("selenium-webdriver")
driver = require('selenium-webdriver');
async function add_task() {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get("https://test.mloflo.com/")
    await driver.manage().window().maximize();
    await driver.sleep(5000);
    await driver.findElement(By.name('email')).sendKeys('himanshupant.qa@gmail.com');
    await driver.sleep(3000);
    await driver.findElement(By.name('password')).sendKeys('Pant@123');
    await driver.sleep(3000);
    button = await driver.findElement(By.xpath('//*[@id="submit"]'));
    button.click()
    await driver.sleep(12000);
    button1 = await driver.findElement(By.xpath('//*[@id="content"]/div[2]/div[1]/div/div/div[1]/button'));
    button1.click()
    await driver.sleep(2000);
    await driver.findElement(By.xpath('//*[@id="content"]/div[2]/div[1]/div/div/div[3]/div/section/div[2]/article/div/form/div[1]/div/div[1]/input')).sendKeys('Automate the world');
    await driver.sleep(3000);
    desc = await driver.findElement(By.xpath('//*[@id="content"]/div[2]/div[1]/div/div/div[3]/div/section/div[2]/article/div/form/div[1]/div/div[2]/div/div[1]/div/div[4]/div[1]'));
    desc.sendKeys("Are you tired of 'Hello World' examples? Learn how to write automated tests through working real-world examples.");
    await driver.sleep(3000);
    datepick =  await driver.findElement(By.xpath('//*[@id="content"]/div[2]/div[1]/div/div/div[3]/div/section/div[2]/article/div/form/div[1]/div/div[3]/div/div[1]/div/div/input'));
    datepick.sendKeys('07/14/2022')
    await driver.sleep(3000);
    reminder =  await driver.findElement(By.xpath('//*[@id="content"]/div[2]/div[1]/div/div/div[3]/div/section/div[2]/article/div/form/div[1]/div/div[4]/div/div[1]/div/div/input'));
    reminder.sendKeys('07/14/2022 08:00 PM')
    await driver.sleep(3000);
    save = await driver.findElement(By.className('badge__blue-light-bg'));
    save.click()
    console.log('Task added...Great')
}
add_task()

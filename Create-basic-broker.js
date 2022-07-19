const { Builder, By, Key, WebElement } = require("selenium-webdriver");
const {WebDriverWait} = require ("selenium-webdriver")
driver = require('selenium-webdriver');
async function add_basic_broker() {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get("https://test.mloflo.com/")
    await driver.manage().window().maximize();
    await driver.sleep(5000);
    await driver.findElement(By.name('email')).sendKeys('masteradmin1@mloflo.com');
    await driver.sleep(5000);
    await driver.findElement(By.name('password')).sendKeys('123456');
    await driver.sleep(5000);
    button = await driver.findElement(By.xpath('//*[@id="submit"]'));
    button.click()
    await driver.sleep(3000);
    await driver.get('https://test.mloflo.com/master-admin/loanOfficers');
    await driver.sleep(5000);
    button1 = await driver.findElement(By.xpath('//*[@id="content"]/div[1]/div/div/ul/div/button'));
    button1.click();
    await driver.sleep(2000);
    await driver.findElement(By.name('firstName')).sendKeys('Albert');
    await driver.sleep(2000);
    await driver.findElement(By.name('lastName')).sendKeys('Brown');
    await driver.sleep(2000);
    await driver.findElement(By.name('email')).sendKeys('Albert@mailinator.com');
    await driver.sleep(2000);
    await driver.findElement(By.xpath('//*[@id="content"]/div[3]/section/div[2]/article/div/div[2]/div/form/fieldset/div[1]/div[4]/input')).sendKeys('658452');
    await driver.sleep(2000);
    await driver.findElement(By.name('companyName')).sendKeys("Albert's");
    await driver.sleep(2000);
    await driver.findElement(By.name('loanOfficer.numberOfSeats')).sendKeys("2");
    await driver.sleep(3000);
    await driver.findElement(By.className('badge__blue-light-bg')).click()

}
add_basic_broker()

const { Builder, By, Key, WebElement } = require("selenium-webdriver");
const {WebDriverWait} = require ("selenium-webdriver")
driver = require('selenium-webdriver');
async function login_add_borrower() {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get("https://test.mloflo.com/")
    await driver.manage().window().maximize();
    await driver.sleep(5000);
    await driver.findElement(By.name('email')).sendKeys('himanshupant.qa@gmail.com');
    await driver.sleep(5000);
    await driver.findElement(By.name('password')).sendKeys('Pant@123');
    await driver.sleep(5000);
    button = await driver.findElement(By.xpath('//*[@id="submit"]'))
    button.click()
    await driver.sleep(8000);
    await driver.get("https://test.mloflo.com/loan-officer/contacts")
    await driver.sleep(5000);
    contact = await driver.findElement(By.className('button-cm'))
    contact.click()
    await driver.sleep(5000);
    select = await driver.findElement(By.xpath('//*[@id="content"]/div/div[2]/div[1]/section/div[2]/article/div/form/div[1]/div[1]/div[2]/div/select/option[4]'));
    select.click()
    await driver.sleep(3000);
    await driver.findElement(By.xpath('//*[@id="content"]/div/div[2]/div[1]/section/div[2]/article/div/form/div[1]/div[2]/div[1]/input')).sendKeys('Manish');
    await driver.sleep(3000);
    await driver.findElement(By.xpath('//*[@id="content"]/div/div[2]/div[1]/section/div[2]/article/div/form/div[1]/div[2]/div[2]/input')).sendKeys('Kumar');
    await driver.sleep(3000);
    await driver.findElement(By.xpath('//*[@id="content"]/div/div[2]/div[1]/section/div[2]/article/div/form/div[1]/div[2]/div[3]/input')).sendKeys('7895642563');
    await driver.sleep(3000);
    await driver.findElement(By.xpath('//*[@id="content"]/div/div[2]/div[1]/section/div[2]/article/div/form/div[1]/div[2]/div[4]/input')).sendKeys('manish@mailinator.com');
    await driver.sleep(3000);
    toggle = await driver.findElement(By.css('#content > div > div:nth-child(2) > div:nth-child(1) > section > div.modal-box > article > div > form > div.modal-box--dialog__container-body.scrollbar-thin > div:nth-child(3) > div.form-group.col-lg-12.px-1 > div > div > input'))
    toggle.click()
    await driver.sleep(3000);
    create = await driver.findElement(By.xpath('//*[@id="content"]/div/div[2]/div[1]/section/div[2]/article/div/form/div[2]/div/div/button'))
    create.click()
}
login_add_borrower(); 

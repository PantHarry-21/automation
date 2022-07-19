// Importing important elements
const { Builder, By, Key, WebElement } = require("selenium-webdriver");
const {WebDriverWait} = require ("selenium-webdriver")
driver = require('selenium-webdriver');
async function login_add_borrower() {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get("https://test.mloflo.com/")
    await driver.manage().window().maximize();
    await driver.sleep(5000);
    await driver.findElement(By.name('email')).sendKeys('smith@mailinator.com');
    await driver.sleep(5000);
    await driver.findElement(By.name('password')).sendKeys('Smith@123');
    await driver.sleep(5000);
    button = await driver.findElement(By.xpath('//*[@id="submit"]'))
    button.click()
    await driver.sleep(8000);
    await driver.get("https://test.mloflo.com/loan-officer/contacts")
    await driver.sleep(3000);
    contact = await driver.findElement(By.className('button-cm'))
    contact.click()
    await driver.sleep(2000);
    select = await driver.findElement(By.xpath('//*[@id="content"]/div/div[2]/div[1]/section/div[2]/article/div/form/div[1]/div[1]/div[2]/div/select/option[4]'));
    select.click()
    await driver.sleep(3000);
    const Xpath1 = {elemA:'//*[@id="content"]/div/div[2]/div[1]/section/div[2]/article/div/form/div[1]/div[1]/div[1]/div/select/option[1]'};
    const Xpath2 = {elemA:'//*[@id="content"]/div/div[2]/div[1]/section/div[2]/article/div/form/div[1]/div[1]/div[1]/div/select/option[2]'};
    const Xpath3 = {elemA:'//*[@id="content"]/div/div[2]/div[1]/section/div[2]/article/div/form/div[1]/div[1]/div[1]/div/select/option[3]'};
    const Xpath4 = {elemA:'//*[@id="content"]/div/div[2]/div[1]/section/div[2]/article/div/form/div[1]/div[1]/div[1]/div/select/option[4]'};
    const Xpath5 = {elemA:'//*[@id="content"]/div/div[2]/div[1]/section/div[2]/article/div/form/div[1]/div[1]/div[1]/div/select/option[5]'};
    const Xpath6 = {elemA:'//*[@id="content"]/div/div[2]/div[1]/section/div[2]/article/div/form/div[1]/div[1]/div[1]/div/select/option[6]'};
    Xpath = [Xpath1,Xpath2,Xpath3,Xpath4,Xpath5,Xpath6];
    var element = Xpath[Math.floor(Math.random() * 6)];
    await driver.findElement(By.xpath(element.elemA)).click();
    await driver.sleep(3000);

    // Relationship with primary borrower

    const Spouse = {path:'//*[@id="content"]/div/div[2]/div[1]/section/div[2]/article/div/form/div[1]/div[3]/div[1]/div/div/select/option[2]'}
    const Partner = {path:'//*[@id="content"]/div/div[2]/div[1]/section/div[2]/article/div/form/div[1]/div[3]/div[1]/div/div/select/option[3]'}
    const Parent = {path:'//*[@id="content"]/div/div[2]/div[1]/section/div[2]/article/div/form/div[1]/div[3]/div[1]/div/div/select/option[5]'}
    const Child = {path:'//*[@id="content"]/div/div[2]/div[1]/section/div[2]/article/div/form/div[1]/div[3]/div[1]/div/div/select/option[5]'}
    const Relative = {path:'//*[@id="content"]/div/div[2]/div[1]/section/div[2]/article/div/form/div[1]/div[3]/div[1]/div/div/select/option[6]'}
    const Friend = {path:'//*[@id="content"]/div/div[2]/div[1]/section/div[2]/article/div/form/div[1]/div[3]/div[1]/div/div/select/option[8]'}
    const Other = {path:'//*[@id="content"]/div/div[2]/div[1]/section/div[2]/article/div/form/div[1]/div[3]/div[1]/div/div/select/option[8]'}

relations = [Spouse,Partner,Parent,Child,Relative,Friend,Other];
var secondary = relations[Math.floor(Math.random() * 6)];

    async function code1() {
        const user = {firstName:'Borrower', lastName:'One', email:'one@mailinator.com', phone:'837-465-7483'};
        const user1 = {firstName:'Borrower', lastName:'Two', email:'Two@mailinator.com', phone:'837-465-7485'};
        const user2 = {firstName:'Borrower', lastName:'Three', email:'Three@mailinator.com', phone:'837-565-7483'};
        const user3 = {firstName:'Borrower', lastName:'Four', email:'Four@mailinator.com', phone:'837-965-7483'};
        const user4 = {firstName:'Borrower', lastName:'Five', email:'Five@mailinator.com', phone:'677-465-7483'};
        Users = [user,user1,user2,user3,user4];
        var borrower = Users[Math.floor(Math.random() * 5 + 1)];
        await driver.sleep(3000);
        await driver.findElement(By.xpath('//*[@id="content"]/div/div[2]/div[1]/section/div[2]/article/div/form/div[1]/div[2]/div[1]/input')).sendKeys(borrower.firstName);
        await driver.sleep(3000);
        await driver.findElement(By.xpath('//*[@id="content"]/div/div[2]/div[1]/section/div[2]/article/div/form/div[1]/div[2]/div[2]/input')).sendKeys(borrower.lastName);
        await driver.sleep(3000);
        await driver.findElement(By.xpath('//*[@id="content"]/div/div[2]/div[1]/section/div[2]/article/div/form/div[1]/div[2]/div[3]/input')).sendKeys(borrower.phone);
        await driver.sleep(3000);
        await driver.findElement(By.xpath('//*[@id="content"]/div/div[2]/div[1]/section/div[2]/article/div/form/div[1]/div[2]/div[4]/input')).sendKeys(borrower.email);
        await driver.sleep(3000);
        toggle = await driver.findElement(By.css('#content > div > div:nth-child(2) > div:nth-child(1) > section > div.modal-box > article > div > form > div.modal-box--dialog__container-body.scrollbar-thin > div:nth-child(3) > div.form-group.col-lg-12.px-1 > div > div > input'))
        toggle.click()
        await driver.sleep(3000);
    }
    async function code2(){
        const user = {firstName:'Borrower', lastName:'One', email:'one@mailinator.com', phone:'837-465-7483'};
        const user1 = {firstName:'Borrower', lastName:'Two', email:'Two@mailinator.com', phone:'837-465-7485'};
        const user2 = {firstName:'Borrower', lastName:'Three', email:'Three@mailinator.com', phone:'837-565-7483'};
        const user3 = {firstName:'Borrower', lastName:'Four', email:'Four@mailinator.com', phone:'837-965-7483'};
        const user4 = {firstName:'Borrower', lastName:'Five', email:'Five@mailinator.com', phone:'677-465-7483'};
        Users = [user,user1,user2,user3,user4];
        var borrower = Users[Math.floor(Math.random() * 5 + 1)];
        await driver.sleep(3000);
        await driver.findElement(By.xpath('//*[@id="content"]/div/div[2]/div[1]/section/div[2]/article/div/form/div[1]/div[2]/div[1]/input')).sendKeys(borrower.firstName);
        await driver.sleep(3000);
        await driver.findElement(By.xpath('//*[@id="content"]/div/div[2]/div[1]/section/div[2]/article/div/form/div[1]/div[2]/div[2]/input')).sendKeys(borrower.lastName);
        await driver.sleep(3000);
        await driver.findElement(By.xpath('//*[@id="content"]/div/div[2]/div[1]/section/div[2]/article/div/form/div[1]/div[2]/div[3]/input')).sendKeys(borrower.phone);
        await driver.sleep(3000);
        await driver.findElement(By.xpath('//*[@id="content"]/div/div[2]/div[1]/section/div[2]/article/div/form/div[1]/div[2]/div[4]/input')).sendKeys(borrower.email);
        await driver.sleep(3000);
        toggle = await driver.findElement(By.css('#content > div > div:nth-child(2) > div:nth-child(1) > section > div.modal-box > article > div > form > div.modal-box--dialog__container-body.scrollbar-thin > div:nth-child(3) > div.form-group.col-lg-12.px-1 > div > div > input'))
        toggle.click()
        await driver.sleep(3000);
        await driver.findElement(By.xpath(secondary.path)).click();
        await driver.sleep(3000);
        await driver.findElement(By.name('coBorrower[0].firstName')).sendKeys(borrower.firstName);
        await driver.sleep(3000);
        await driver.findElement(By.name('coBorrower[0].lastName')).sendKeys(borrower.lastName);
        await driver.sleep(3000);
        await driver.findElement(By.name('coBorrower[0].phone')).sendKeys(borrower.phone);
        await driver.sleep(3000);
        await driver.findElement(By.name('coBorrower[0].email')).sendKeys(borrower.email);
        await driver.sleep(3000);
        toggle = await driver.findElement(By.css('#content > div > div:nth-child(2) > div:nth-child(1) > section > div.modal-box > article > div > form > div.modal-box--dialog__container-body.scrollbar-thin > div:nth-child(4) > div.form-group.col-lg-12.px-1 > div > div > input'));
        toggle.click()
        await driver.sleep(3000);
    }
    async function code3() {
        const user = {firstName:'Borrower', lastName:'One', email:'one@mailinator.com', phone:'837-465-7483'};
        const user1 = {firstName:'Borrower', lastName:'Two', email:'Two@mailinator.com', phone:'837-465-7485'};
        const user2 = {firstName:'Borrower', lastName:'Three', email:'Three@mailinator.com', phone:'837-565-7483'};
        const user3 = {firstName:'Borrower', lastName:'Four', email:'Four@mailinator.com', phone:'837-965-7483'};
        const user4 = {firstName:'Borrower', lastName:'Five', email:'Five@mailinator.com', phone:'677-465-7483'};
        Users = [user,user1,user2,user3,user4];
        var borrower = Users[Math.floor(Math.random() * 5 + 1)];
        await driver.sleep(3000);
        await driver.findElement(By.xpath('//*[@id="content"]/div/div[2]/div[1]/section/div[2]/article/div/form/div[1]/div[2]/div[1]/input')).sendKeys(borrower.firstName);
        await driver.sleep(3000);
        await driver.findElement(By.xpath('//*[@id="content"]/div/div[2]/div[1]/section/div[2]/article/div/form/div[1]/div[2]/div[2]/input')).sendKeys(borrower.lastName);
        await driver.sleep(3000);
        await driver.findElement(By.xpath('//*[@id="content"]/div/div[2]/div[1]/section/div[2]/article/div/form/div[1]/div[2]/div[3]/input')).sendKeys(borrower.phone);
        await driver.sleep(3000);
        await driver.findElement(By.xpath('//*[@id="content"]/div/div[2]/div[1]/section/div[2]/article/div/form/div[1]/div[2]/div[4]/input')).sendKeys(borrower.email);
        await driver.sleep(3000);
        toggle = await driver.findElement(By.css('#content > div > div:nth-child(2) > div:nth-child(1) > section > div.modal-box > article > div > form > div.modal-box--dialog__container-body.scrollbar-thin > div:nth-child(3) > div.form-group.col-lg-12.px-1 > div > div > input'))
        toggle.click()
        await driver.sleep(3000);
        await driver.findElement(By.xpath(secondary.path)).click();
        await driver.sleep(3000);
        await driver.findElement(By.name('coBorrower[0].firstName')).sendKeys(borrower.firstName);
        await driver.sleep(3000);
        await driver.findElement(By.name('coBorrower[0].lastName')).sendKeys(borrower.lastName);
        await driver.sleep(3000);
        await driver.findElement(By.name('coBorrower[0].phone')).sendKeys(borrower.phone);
        await driver.sleep(3000);
        await driver.findElement(By.name('coBorrower[0].email')).sendKeys(borrower.email);
        await driver.sleep(3000);
        toggle = await driver.findElement(By.css('#content > div > div:nth-child(2) > div:nth-child(1) > section > div.modal-box > article > div > form > div.modal-box--dialog__container-body.scrollbar-thin > div:nth-child(4) > div.form-group.col-lg-12.px-1 > div > div > input'));
        toggle.click()
        await driver.sleep(3000);
        await driver.findElement(By.xpath(secondary.path)).click();
        await driver.sleep(3000);
        await driver.findElement(By.name('coBorrower[1].firstName')).sendKeys(borrower.firstName);
        await driver.sleep(3000);
        await driver.findElement(By.name('coBorrower[1].lastName')).sendKeys(borrower.lastName);
        await driver.sleep(3000);
        await driver.findElement(By.name('coBorrower[1].phone')).sendKeys(borrower.phone);
        await driver.sleep(3000);
        await driver.findElement(By.name('coBorrower[1].email')).sendKeys(borrower.email);
        await driver.sleep(3000);
        toggle = await driver.findElement(By.css('#content > div > div:nth-child(2) > div:nth-child(1) > section > div.modal-box > article > div > form > div.modal-box--dialog__container-body.scrollbar-thin > div:nth-child(5) > div.form-group.col-lg-12.px-1 > div > div > input'));
        toggle.click()
        await driver.sleep(3000);
    
    }
    
    async function code4() {
        const user = {firstName:'Borrower', lastName:'One', email:'one@mailinator.com', phone:'837-465-7483'};
        const user1 = {firstName:'Borrower', lastName:'Two', email:'Two@mailinator.com', phone:'837-465-7485'};
        const user2 = {firstName:'Borrower', lastName:'Three', email:'Three@mailinator.com', phone:'837-565-7483'};
        const user3 = {firstName:'Borrower', lastName:'Four', email:'Four@mailinator.com', phone:'837-965-7483'};
        const user4 = {firstName:'Borrower', lastName:'Five', email:'Five@mailinator.com', phone:'677-465-7483'};
        Users = [user,user1,user2,user3,user4];
        var borrower = Users[Math.floor(Math.random() * 5 + 1)];
        await driver.sleep(3000);
        await driver.findElement(By.xpath('//*[@id="content"]/div/div[2]/div[1]/section/div[2]/article/div/form/div[1]/div[2]/div[1]/input')).sendKeys(borrower.firstName);
        await driver.sleep(3000);
        await driver.findElement(By.xpath('//*[@id="content"]/div/div[2]/div[1]/section/div[2]/article/div/form/div[1]/div[2]/div[2]/input')).sendKeys(borrower.lastName);
        await driver.sleep(3000);
        await driver.findElement(By.xpath('//*[@id="content"]/div/div[2]/div[1]/section/div[2]/article/div/form/div[1]/div[2]/div[3]/input')).sendKeys(borrower.phone);
        await driver.sleep(3000);
        await driver.findElement(By.xpath('//*[@id="content"]/div/div[2]/div[1]/section/div[2]/article/div/form/div[1]/div[2]/div[4]/input')).sendKeys(borrower.email);
        await driver.sleep(3000);
        toggle = await driver.findElement(By.css('#content > div > div:nth-child(2) > div:nth-child(1) > section > div.modal-box > article > div > form > div.modal-box--dialog__container-body.scrollbar-thin > div:nth-child(3) > div.form-group.col-lg-12.px-1 > div > div > input'))
        toggle.click()
        await driver.sleep(3000);
        await driver.findElement(By.xpath(secondary.path)).click();
        await driver.sleep(3000);
        await driver.findElement(By.name('coBorrower[0].firstName')).sendKeys(borrower.firstName);
        await driver.sleep(3000);
        await driver.findElement(By.name('coBorrower[0].lastName')).sendKeys(borrower.lastName);
        await driver.sleep(3000);
        await driver.findElement(By.name('coBorrower[0].phone')).sendKeys(borrower.phone);
        await driver.sleep(3000);
        await driver.findElement(By.name('coBorrower[0].email')).sendKeys(borrower.email);
        await driver.sleep(3000);
        toggle = await driver.findElement(By.css('#content > div > div:nth-child(2) > div:nth-child(1) > section > div.modal-box > article > div > form > div.modal-box--dialog__container-body.scrollbar-thin > div:nth-child(4) > div.form-group.col-lg-12.px-1 > div > div > input'));
        toggle.click()
        await driver.sleep(3000);
        await driver.findElement(By.xpath(secondary.path)).click();
        await driver.sleep(3000);
        await driver.findElement(By.name('coBorrower[1].firstName')).sendKeys(borrower.firstName);
        await driver.sleep(3000);
        await driver.findElement(By.name('coBorrower[1].lastName')).sendKeys(borrower.lastName);
        await driver.sleep(3000);
        await driver.findElement(By.name('coBorrower[1].phone')).sendKeys(borrower.phone);
        await driver.sleep(3000);
        await driver.findElement(By.name('coBorrower[1].email')).sendKeys(borrower.email);
        await driver.sleep(3000);
        toggle = await driver.findElement(By.css('#content > div > div:nth-child(2) > div:nth-child(1) > section > div.modal-box > article > div > form > div.modal-box--dialog__container-body.scrollbar-thin > div:nth-child(5) > div.form-group.col-lg-12.px-1 > div > div > input'));
        toggle.click()
        await driver.sleep(3000);
        await driver.findElement(By.xpath(secondary.path)).click();
        await driver.sleep(3000);
        await driver.findElement(By.name('coBorrower[2].firstName')).sendKeys(borrower.firstName);
        await driver.sleep(3000);
        await driver.findElement(By.name('coBorrower[2].lastName')).sendKeys(borrower.lastName);
        await driver.sleep(3000);
        await driver.findElement(By.name('coBorrower[2].phone')).sendKeys(borrower.phone);
        await driver.sleep(3000);
        await driver.findElement(By.name('coBorrower[2].email')).sendKeys(borrower.email);
        await driver.sleep(3000);
        toggle = await driver.findElement(By.css('#content > div > div:nth-child(2) > div:nth-child(1) > section > div.modal-box > article > div > form > div.modal-box--dialog__container-body.scrollbar-thin > div:nth-child(5) > div.form-group.col-lg-12.px-1 > div > div > input'));
        toggle.click()
        await driver.sleep(3000);
    
    }
    async function code5() {
        const user = {firstName:'Borrower', lastName:'One', email:'one@mailinator.com', phone:'837-465-7483'};
            const user1 = {firstName:'Borrower', lastName:'Two', email:'Two@mailinator.com', phone:'837-465-7485'};
            const user2 = {firstName:'Borrower', lastName:'Three', email:'Three@mailinator.com', phone:'837-565-7483'};
            const user3 = {firstName:'Borrower', lastName:'Four', email:'Four@mailinator.com', phone:'837-965-7483'};
            const user4 = {firstName:'Borrower', lastName:'Five', email:'Five@mailinator.com', phone:'677-465-7483'};
            Users = [user,user1,user2,user3,user4];
            var borrower = Users[Math.floor(Math.random() * 5 + 1)];
            await driver.sleep(3000);
            await driver.findElement(By.xpath('//*[@id="content"]/div/div[2]/div[1]/section/div[2]/article/div/form/div[1]/div[2]/div[1]/input')).sendKeys(borrower.firstName);
            await driver.sleep(3000);
            await driver.findElement(By.xpath('//*[@id="content"]/div/div[2]/div[1]/section/div[2]/article/div/form/div[1]/div[2]/div[2]/input')).sendKeys(borrower.lastName);
            await driver.sleep(3000);
            await driver.findElement(By.xpath('//*[@id="content"]/div/div[2]/div[1]/section/div[2]/article/div/form/div[1]/div[2]/div[3]/input')).sendKeys(borrower.phone);
            await driver.sleep(3000);
            await driver.findElement(By.xpath('//*[@id="content"]/div/div[2]/div[1]/section/div[2]/article/div/form/div[1]/div[2]/div[4]/input')).sendKeys(borrower.email);
            await driver.sleep(3000);
            toggle = await driver.findElement(By.css('#content > div > div:nth-child(2) > div:nth-child(1) > section > div.modal-box > article > div > form > div.modal-box--dialog__container-body.scrollbar-thin > div:nth-child(3) > div.form-group.col-lg-12.px-1 > div > div > input'))
            toggle.click()
            await driver.sleep(3000);
            await driver.findElement(By.xpath(secondary.path)).click();
            await driver.sleep(3000);
            await driver.findElement(By.name('coBorrower[0].firstName')).sendKeys(borrower.firstName);
            await driver.sleep(3000);
            await driver.findElement(By.name('coBorrower[0].lastName')).sendKeys(borrower.lastName);
            await driver.sleep(3000);
            await driver.findElement(By.name('coBorrower[0].phone')).sendKeys(borrower.phone);
            await driver.sleep(3000);
            await driver.findElement(By.name('coBorrower[0].email')).sendKeys(borrower.email);
            await driver.sleep(3000);
            toggle = await driver.findElement(By.css('#content > div > div:nth-child(2) > div:nth-child(1) > section > div.modal-box > article > div > form > div.modal-box--dialog__container-body.scrollbar-thin > div:nth-child(4) > div.form-group.col-lg-12.px-1 > div > div > input'));
            toggle.click()
            await driver.sleep(3000);
            await driver.findElement(By.xpath(secondary.path)).click();
            await driver.sleep(3000);
            await driver.findElement(By.name('coBorrower[1].firstName')).sendKeys(borrower.firstName);
            await driver.sleep(3000);
            await driver.findElement(By.name('coBorrower[1].lastName')).sendKeys(borrower.lastName);
            await driver.sleep(3000);
            await driver.findElement(By.name('coBorrower[1].phone')).sendKeys(borrower.phone);
            await driver.sleep(3000);
            await driver.findElement(By.name('coBorrower[1].email')).sendKeys(borrower.email);
            await driver.sleep(3000);
            toggle = await driver.findElement(By.css('#content > div > div:nth-child(2) > div:nth-child(1) > section > div.modal-box > article > div > form > div.modal-box--dialog__container-body.scrollbar-thin > div:nth-child(5) > div.form-group.col-lg-12.px-1 > div > div > input'));
            toggle.click()
            await driver.sleep(3000);
            await driver.findElement(By.xpath(secondary.path)).click();
            await driver.sleep(3000);
            await driver.findElement(By.name('coBorrower[2].firstName')).sendKeys(borrower.firstName);
            await driver.sleep(3000);
            await driver.findElement(By.name('coBorrower[2].lastName')).sendKeys(borrower.lastName);
            await driver.sleep(3000);
            await driver.findElement(By.name('coBorrower[2].phone')).sendKeys(borrower.phone);
            await driver.sleep(3000);
            await driver.findElement(By.name('coBorrower[2].email')).sendKeys(borrower.email);
            await driver.sleep(3000);
            toggle = await driver.findElement(By.css('#content > div > div:nth-child(2) > div:nth-child(1) > section > div.modal-box > article > div > form > div.modal-box--dialog__container-body.scrollbar-thin > div:nth-child(5) > div.form-group.col-lg-12.px-1 > div > div > input'));
            toggle.click()
            await driver.sleep(3000);
            await driver.findElement(By.xpath(secondary.path)).click();
            await driver.sleep(3000);
            await driver.findElement(By.name('coBorrower[3].firstName')).sendKeys(borrower.firstName);
            await driver.sleep(3000);
            await driver.findElement(By.name('coBorrower[3].lastName')).sendKeys(borrower.lastName);
            await driver.sleep(3000);
            await driver.findElement(By.name('coBorrower[3].phone')).sendKeys(borrower.phone);
            await driver.sleep(3000);
            await driver.findElement(By.name('coBorrower[3].email')).sendKeys(borrower.email);
            await driver.sleep(3000);
            toggle = await driver.findElement(By.css('#content > div > div:nth-child(2) > div:nth-child(1) > section > div.modal-box > article > div > form > div.modal-box--dialog__container-body.scrollbar-thin > div:nth-child(5) > div.form-group.col-lg-12.px-1 > div > div > input'));
            toggle.click()
            await driver.sleep(3000);
    }
    async function code6() {
        const user = {firstName:'Borrower', lastName:'One', email:'one@mailinator.com', phone:'837-465-7483'};
            const user1 = {firstName:'Borrower', lastName:'Two', email:'Two@mailinator.com', phone:'837-465-7485'};
            const user2 = {firstName:'Borrower', lastName:'Three', email:'Three@mailinator.com', phone:'837-565-7483'};
            const user3 = {firstName:'Borrower', lastName:'Four', email:'Four@mailinator.com', phone:'837-965-7483'};
            const user4 = {firstName:'Borrower', lastName:'Five', email:'Five@mailinator.com', phone:'677-465-7483'};
            Users = [user,user1,user2,user3,user4];
            var borrower = Users[Math.floor(Math.random() * 5 + 1)];
            await driver.sleep(3000);
            await driver.findElement(By.xpath('//*[@id="content"]/div/div[2]/div[1]/section/div[2]/article/div/form/div[1]/div[2]/div[1]/input')).sendKeys(borrower.firstName);
            await driver.sleep(3000);
            await driver.findElement(By.xpath('//*[@id="content"]/div/div[2]/div[1]/section/div[2]/article/div/form/div[1]/div[2]/div[2]/input')).sendKeys(borrower.lastName);
            await driver.sleep(3000);
            await driver.findElement(By.xpath('//*[@id="content"]/div/div[2]/div[1]/section/div[2]/article/div/form/div[1]/div[2]/div[3]/input')).sendKeys(borrower.phone);
            await driver.sleep(3000);
            await driver.findElement(By.xpath('//*[@id="content"]/div/div[2]/div[1]/section/div[2]/article/div/form/div[1]/div[2]/div[4]/input')).sendKeys(borrower.email);
            await driver.sleep(3000);
            toggle = await driver.findElement(By.css('#content > div > div:nth-child(2) > div:nth-child(1) > section > div.modal-box > article > div > form > div.modal-box--dialog__container-body.scrollbar-thin > div:nth-child(3) > div.form-group.col-lg-12.px-1 > div > div > input'))
            toggle.click()
            await driver.sleep(3000);
            await driver.findElement(By.xpath(secondary.path)).click();
            await driver.sleep(3000);
            await driver.findElement(By.name('coBorrower[0].firstName')).sendKeys(borrower.firstName);
            await driver.sleep(3000);
            await driver.findElement(By.name('coBorrower[0].lastName')).sendKeys(borrower.lastName);
            await driver.sleep(3000);
            await driver.findElement(By.name('coBorrower[0].phone')).sendKeys(borrower.phone);
            await driver.sleep(3000);
            await driver.findElement(By.name('coBorrower[0].email')).sendKeys(borrower.email);
            await driver.sleep(3000);
            toggle = await driver.findElement(By.css('#content > div > div:nth-child(2) > div:nth-child(1) > section > div.modal-box > article > div > form > div.modal-box--dialog__container-body.scrollbar-thin > div:nth-child(4) > div.form-group.col-lg-12.px-1 > div > div > input'));
            toggle.click()
            await driver.sleep(3000);
            await driver.findElement(By.xpath(secondary.path)).click();
            await driver.sleep(3000);
            await driver.findElement(By.name('coBorrower[1].firstName')).sendKeys(borrower.firstName);
            await driver.sleep(3000);
            await driver.findElement(By.name('coBorrower[1].lastName')).sendKeys(borrower.lastName);
            await driver.sleep(3000);
            await driver.findElement(By.name('coBorrower[1].phone')).sendKeys(borrower.phone);
            await driver.sleep(3000);
            await driver.findElement(By.name('coBorrower[1].email')).sendKeys(borrower.email);
            await driver.sleep(3000);
            toggle = await driver.findElement(By.css('#content > div > div:nth-child(2) > div:nth-child(1) > section > div.modal-box > article > div > form > div.modal-box--dialog__container-body.scrollbar-thin > div:nth-child(5) > div.form-group.col-lg-12.px-1 > div > div > input'));
            toggle.click()
            await driver.sleep(3000);
            await driver.findElement(By.xpath(secondary.path)).click();
            await driver.sleep(3000);
            await driver.findElement(By.name('coBorrower[2].firstName')).sendKeys(borrower.firstName);
            await driver.sleep(3000);
            await driver.findElement(By.name('coBorrower[2].lastName')).sendKeys(borrower.lastName);
            await driver.sleep(3000);
            await driver.findElement(By.name('coBorrower[2].phone')).sendKeys(borrower.phone);
            await driver.sleep(3000);
            await driver.findElement(By.name('coBorrower[2].email')).sendKeys(borrower.email);
            await driver.sleep(3000);
            toggle = await driver.findElement(By.css('#content > div > div:nth-child(2) > div:nth-child(1) > section > div.modal-box > article > div > form > div.modal-box--dialog__container-body.scrollbar-thin > div:nth-child(5) > div.form-group.col-lg-12.px-1 > div > div > input'));
            toggle.click()
            await driver.sleep(3000);
            await driver.findElement(By.xpath(secondary.path)).click();
            await driver.sleep(3000);
            await driver.findElement(By.name('coBorrower[3].firstName')).sendKeys(borrower.firstName);
            await driver.sleep(3000);
            await driver.findElement(By.name('coBorrower[3].lastName')).sendKeys(borrower.lastName);
            await driver.sleep(3000);
            await driver.findElement(By.name('coBorrower[3].phone')).sendKeys(borrower.phone);
            await driver.sleep(3000);
            await driver.findElement(By.name('coBorrower[3].email')).sendKeys(borrower.email);
            await driver.sleep(3000);
            toggle = await driver.findElement(By.css('#content > div > div:nth-child(2) > div:nth-child(1) > section > div.modal-box > article > div > form > div.modal-box--dialog__container-body.scrollbar-thin > div:nth-child(5) > div.form-group.col-lg-12.px-1 > div > div > input'));
            toggle.click()
            await driver.sleep(3000);
            await driver.findElement(By.xpath(secondary.path)).click();
            await driver.sleep(3000);
            await driver.findElement(By.name('coBorrower[4].firstName')).sendKeys(borrower.firstName);
            await driver.sleep(3000);
            await driver.findElement(By.name('coBorrower[4].lastName')).sendKeys(borrower.lastName);
            await driver.sleep(3000);
            await driver.findElement(By.name('coBorrower[4].phone')).sendKeys(borrower.phone);
            await driver.sleep(3000);
            await driver.findElement(By.name('coBorrower[4].email')).sendKeys(borrower.email);
            await driver.sleep(3000);
            toggle = await driver.findElement(By.css('#content > div > div:nth-child(2) > div:nth-child(1) > section > div.modal-box > article > div > form > div.modal-box--dialog__container-body.scrollbar-thin > div:nth-child(5) > div.form-group.col-lg-12.px-1 > div > div > input'));
            toggle.click()
            await driver.sleep(3000);
    }
if (JSON.stringify(element) === JSON.stringify(Xpath1)) {
  code1();
} else if (JSON.stringify(element) === JSON.stringify(Xpath2)) {
    code2();
} else if (JSON.stringify(element) === JSON.stringify(Xpath3)) {
    code3();
} else if (JSON.stringify(element) === JSON.stringify(Xpath4)) {
    code4();
} else if (JSON.stringify(element) === JSON.stringify(Xpath5)) {
    code5();
} else if (JSON.stringify(element) === JSON.stringify(Xpath6)) {
    code6();
}


    // select = await driver.findElement(By.xpath('//*[@id="content"]/div/div[2]/div[1]/section/div[2]/article/div/form/div[1]/div[1]/div[2]/div/select/option[4]'));
    // select.click()
    // await driver.sleep(3000);
    // const user = {firstName:'Borrower', lastName:'One', email:'one@mailinator.com', phone:'837-465-7483'};
    // const user1 = {firstName:'Borrower', lastName:'Two', email:'Two@mailinator.com', phone:'837-465-7485'};
    // const user2 = {firstName:'Borrower', lastName:'Three', email:'Three@mailinator.com', phone:'837-565-7483'};
    // const user3 = {firstName:'Borrower', lastName:'Four', email:'Four@mailinator.com', phone:'837-965-7483'};
    // const user4 = {firstName:'Borrower', lastName:'Five', email:'Five@mailinator.com', phone:'677-465-7483'};
    // Users = [user,user1,user2,user3,user4];
    // var borrower = Users[Math.floor(Math.random() * 5 + 1)];
    // await driver.sleep(3000);
    // await driver.findElement(By.xpath('//*[@id="content"]/div/div[2]/div[1]/section/div[2]/article/div/form/div[1]/div[2]/div[1]/input')).sendKeys(borrower.firstName);
    // await driver.sleep(3000);
    // await driver.findElement(By.xpath('//*[@id="content"]/div/div[2]/div[1]/section/div[2]/article/div/form/div[1]/div[2]/div[2]/input')).sendKeys(borrower.lastName);
    // await driver.sleep(3000);
    // await driver.findElement(By.xpath('//*[@id="content"]/div/div[2]/div[1]/section/div[2]/article/div/form/div[1]/div[2]/div[3]/input')).sendKeys(borrower.phone);
    // await driver.sleep(3000);
    // await driver.findElement(By.xpath('//*[@id="content"]/div/div[2]/div[1]/section/div[2]/article/div/form/div[1]/div[2]/div[4]/input')).sendKeys(borrower.email);
    // await driver.sleep(3000);
    // toggle = await driver.findElement(By.css('#content > div > div:nth-child(2) > div:nth-child(1) > section > div.modal-box > article > div > form > div.modal-box--dialog__container-body.scrollbar-thin > div:nth-child(3) > div.form-group.col-lg-12.px-1 > div > div > input'))
    // toggle.click()
    // await driver.sleep(3000);

    // const user = {email:'himanshupant.qa@gmail.com', password: 'Pant@123', phone:'837-465-7483'};
    // const user1 = {email:'testermail320@gmail.com', password: 'Larry@123'};
    // const user2 = {email:'pant.qa@outlook.com', password: 'Pant@123'};
    // const user3 = {email:'smith@mailinator.com', password: 'Smith@123'};
    // Users = [user,user1,user2,user3];
    // var UseEmail = Users[Math.floor(Math.random() * 3) + 1];
    // await driver.findElement(By.name('email')).sendKeys(UseEmail.email);
    // await driver.sleep(3000);    
    // await driver.findElement(By.name('password')).sendKeys(UseEmail.password);
    // await driver.sleep(3000);    
    // console.log('Hurrahhhh!!!!!!')
    // var email = ['himanshupant.qa@gmail.com','pant.qa@outlook.com','testermail320@gmail.com','smith@mailinator.com',''];
    // var UseEmail = email[Math.floor(Math.random() * 3) + 1];
    // console.log(Math.floor(Math.random() * 3) + 1, 'Kaam ban gya');

}
login_add_borrower()
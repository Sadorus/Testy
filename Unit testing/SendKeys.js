var webdriver = require ('selenium-webdriver'),

By = webdriver.By,
until = webdriver.until;

var driver = new webdriver.Builder().forBrowser('chrome').build();

driver.get('https://library-app.firebaseapp.com');

var submitBtn = driver.findElement(By.css('.btn-lg'));
driver.findElement(By.css('input')).sendKeys('us');

driver.wait(function(){
  return submitBtn.getCssValue('opacity').then(function(result){

    return result == 1;
  })
}, 10000);

submitBtn.click();

//driver.wait(until.elementLocated(By.css('.alert-success')), 100000);
//driver.findElement(By.css('.alert-success'));

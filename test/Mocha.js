var webdriver = require ('selenium-webdriver'),

{} = require('selenium-webdriver/testing')

By = webdriver.By,
until = webdriver.until;

describe('library app scenarios', function(){
  beforeEach(function(){

    var driver = new webdriver.Builder().forBrowser('chrome').build();
    driver.get('https://library-app.firebaseapp.com');

  });

  afterEach(function(){
    driver.quit();
  });

  it('Changes Button opacity upon email being fille out', function(){
    var submitBtn = driver.findElement(By.css('.btn-lg'));
    driver.findElement(By.css('input')).sendKeys('us@mail.com');

    driver.wait(function(){
      return submitBtn.getCssValue('opacity').then(function(result){

        return result == 1;
      })
    }, 5000);
  });

  it('works with mocha', function(){
    var submitBtn = driver.findElement(By.css('.btn-lg'));
    driver.findElement(By.css('input')).sendKeys('usmail.com');
    submitBtn.click();

    driver.wait(until.elementLocated(By.css('.alert-success')), 100000);
    driver.findElement(By.css('.alert-success'));
  });

  it('works with mocha', function(){
    driver.findElement(By.css('nav')).getText().then(function(txt){
      console.log(txt);
    });
  });
})

Feature('Registration');

Scenario('test registration', ({ I }) => {
    I.amOnPage('/');
    I.click('Register');
    I.fillField('Username', 'adrtest1');
    I.fillField('First Name', 'Adriana');
    I.fillField('Last Name', 'Test');
    I.fillField('E-Mail', 'jiralac665@keagenan.com');
    I.selectOption('Country', 'Ukraine');
    I.fillField('Password', 'text123')
    pause();
});

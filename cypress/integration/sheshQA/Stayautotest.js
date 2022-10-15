
   describe('автотесты для формы логина и пароля', function () {
   it('авторизация мои заказы', function () {
        cy.visit('https://staya.dog/');
        cy.get('.cookie-notification__button > .s-button__content').click();
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('vis-sergej-sheshkin@qa.studio');
        cy.get('.auth-form > form > [type="password"]').type('Stayashesha1990');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.contains('Мои заказы');
        cy.get('button.profile__nav-link').click();
        cy.get('.box__button_ok > .s-button__content').click();
  })

it('неправильный пароль', function () {
        cy.visit('https://staya.dog/');
        cy.get('.cookie-notification__button > .s-button__content').click();
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('vis-sergej-sheshkin@qa.studio');
        cy.get('.auth-form > form > [type="password"]').type('Stayashesha19');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.contains('Невозможно войти с предоставленными учетными данными.');
})
})
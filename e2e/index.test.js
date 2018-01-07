import { Selector } from 'testcafe';

const TEST_URL = process.env.TEST_URL;

fixture('/').page(`${TEST_URL}/`);

// What should We test?
// What are some common user interactions?
// How about frequent error cases that you expect most users to encounter?
///register :
//1. should display the registration form
//2. should allow a user to register
//3. should throw an error if the username is taken
//4. should throw an error if the email address is taken
///login :
//1. should display the sign in form
//2. should allow a user to sign in
//3. should throw an error if the credentials are incorrect
///logout :
//1. should log a user out
///status :
//1. should display user info if a user is logged in
//2. should not display user info if a user is not logged in
/// :
//1. should display the page correctly if a user is not logged in

// supposed to delete but leaving for future reference
//test(`users should be able to view the '/' page`, async (t) => {
//    await t
//    .navigateTo(TEST_URL)
//    .expect(Selector('H1').withText('All Users').exists).ok()
//});

// Added in place of previous test 'users should be able to view the '/' page'
test(`should display the page correctly if a user is not logged in`, async (t) => {
    await t
        .navigateTo(TEST_URL)
        .expect(Selector('H1').withText('All Users').exists).ok()
        .expect(Selector('a').withText('User Status').exists).notOk()
        .expect(Selector('a').withText('Log Out').exists).notOk()
        .expect(Selector('a').withText('Register').exists).ok()
        .expect(Selector('a').withText('Log In').exists).ok()
});

import { Selector } from 'testcafe';

const TEST_URL = process.env.TEST_URL;

fixture('/').page(`${TEST_URL}/`);

test(`users should be able to view the '/' page`, async (t) => {
    await t
    .navigateTo(TEST_URL)
    .expect(Selector('H1').withText('All Users').exists).ok()
});

test('Navigate to the About page', async t => {
    await t
        .click('.navbar-nav li:nth-child(2n) a')
        .expect(Selector('H1').withText('About').exists).ok()
});

test('Verify Login form submit', async t => {
    await t
        .click('.navbar-right li:nth-child(2n) a')
        .typeText(Selector('input[type=email]'), 'michael@mherman.org')
        .typeText(Selector('input[type=password]'), 'test')
        .click(Selector('input[type=submit]'))
        .expect(Selector('.navbar-right li:nth-child(1n) a').withText('Log Out').exists).ok()
});

test('Verify a successful Logout', async t => {
    await t
        .click('.navbar-right li:nth-child(2n) a')
        .typeText(Selector('input[type=email]'), 'michael@mherman.org')
        .typeText(Selector('input[type=password]'), 'test')
        .click(Selector('input[type=submit]'))
        .click(Selector('.navbar-right li:nth-child(1n) a'))
        .expect(Selector('.col-md-6 p').withText('You are now logged out. Click here to log back in.')).ok()
});

test('Verify User Status Login information', async t => {
    await t
        .click('.navbar-right li:nth-child(2n) a')
        .typeText(Selector('input[type=email]'), 'michael@mherman.org')
        .typeText(Selector('input[type=password]'), 'test')
        .click(Selector('input[type=submit]'))
        .click('.navbar-nav li:nth-child(3n) a')
        .expect(Selector('.col-md-6 ul li:nth-child(2n)').withText('Email: michael@mherman.org').exists).ok()
});
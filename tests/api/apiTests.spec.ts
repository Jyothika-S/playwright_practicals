import { expect, test } from '@playwright/test';

let userId : string;
let isbn: string;

test.describe('user', () => {
test.beforeEach("create user", async ({ request }) => {
    const response = await request.post('https://demoqa.com/Account/v1/User', {
        data: {
            "userName": "alphya",
            "password": "Tomiii12!"
        }
    });

    expect(response.status()).toBe(201);
    expect(response.ok()).toBeTruthy();

    const responseUser = await response.json();
    userId = responseUser.userID;
    console.log('userId: ', userId);
});

//authorize
// test("authorize user", async ({ request }) => {
//     const response = await request.post('https://demoqa.com/Account/v1/Authorized', {
//         data: {
//             "userName": "alphy",
//             "password": "Tomiii12!"
//         }
//     });

//     expect(response.status()).toBe(201);
//     expect(response.ok()).toBeTruthy();

//     const authorizeUser = await response.json();
//     console.log('responseUser: ', authorizeUser);
// });

//token generation
// test("token generation", async ({ request }) => {
//     const response = await request.post('https://demoqa.com/Account/v1/GenerateToken', {
//         data: {
//             "userName": "alphy",
//             "password": "Tomiii12!"
//         }
//     });

//     expect(response.status()).toBe(201);
//     expect(response.ok()).toBeTruthy();

//     const user = await response.json();
//     console.log('responseUser: ', user);
// });
});

// GET API Request
test('API Get request - get all books', async({request}) =>{
    const response = await request.get('https://demoqa.com/BookStore/v1/Books')

    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();
    
    //parsing json response data
    console.log("response data - ", await response.json());


})

//create book
// test('add book', async ({ request }) => {
//     const response = await request.post('https://demoqa.com/BookStore/v1/Books', {
        
//         data: {
//             "userId": userId,
//             "collectionOfIsbns": [
//                 {
//                     "isbn": isbn
//                 }
//             ]
//         },
//     });
//     console.log('userId from post:', userId);
//     expect(response.status()).toBe(201);
//     expect(response.ok()).toBeTruthy();

//     const responseBody = await response.json();
//     console.log('response body:', responseBody);
// });

// delete user
// test('delete user', async ({ request }) => {
    
//     const response = await request.delete(`https://demoqa.com/Account/v1/User/${userId}`);

//     expect(response.status()).toBe(204);
// });

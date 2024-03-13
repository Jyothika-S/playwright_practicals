import { expect, test } from '@playwright/test';

let userId : string;
let username: string;
let isbn: string;

test.describe('user', () => {
    test.beforeAll("create user", async ({ request }) => {
        const response = await request.post('https://demoqa.com/Account/v1/User', {
            data: {
                "userName": "john",
                "password": "Tomiii12!"
            }
        });

        expect(response.status()).toBe(201);
        expect(response.ok()).toBeTruthy();

        const responseUser = await response.json();
        userId = responseUser.userID;
        console.log('userId: ', userId);
        console.log('responseUser: ', responseUser);
    });

    //token generation
    test("token generation", async ({ request }) => {
        const response = await request.post('https://demoqa.com/Account/v1/GenerateToken', {
            data: {
                "userName": "john",
                "password": "Tomiii12!"
            }
        });

        expect(response.status()).toBe(200);
        expect(response.ok()).toBeTruthy();

        const user = await response.json();
        const token = user.token;
        console.log("token: ", token)
        console.log('responseUser: ', user);
    });

    // authorize
    test("authorize user", async ({ request }) => {
        const response = await request.post('https://demoqa.com/Account/v1/Authorized', {
            data: {
                "userName": "john",
                "password": "Tomiii12!"
            }
        });

        expect(response.status()).toBe(200);
        expect(response.ok()).toBeTruthy();

        const authorizeUser = await response.json();
        console.log('responseUser: ', authorizeUser);
    });

    //Delete user
    test('delete user', async ({ request }) => {
    console.log('userid: ', userId);
        const response = await request.delete(`https://demoqa.com/Account/v1/User/${userId}`);
    
        expect(response.status()).toBe(204);
    }); 

    // GET API Request
    test('API Get request - get all books', async({request}) =>{
        const response = await request.get('https://demoqa.com/BookStore/v1/Books')

        expect(response.status()).toBe(200);
        expect(response.ok()).toBeTruthy();
        
        //parsing json response data
        console.log("response data - ", await response.json());


    })

    // //create book
    // test('create book', async ({ request }) => {
    //     // Check if userId is defined
    //     console.log('userId from post:', userId); 
    //     if (!userId) {
    //         throw new Error('userId is not defined');
    //     }

    //     const payload = {
    //         "userId": userId,
    //         "collectionOfIsbns": [
    //             {
    //                 "isbn": 9781449325862
    //             }
    //         ]
    //     };

    //     const response = await request.post('https://demoqa.com/BookStore/v1/Books', {
    //         data: payload
    //     });

    //     expect(response.status()).toBe(201);
    //     expect(response.headers()['content-type']).toContain('application/json');

    //     console.log('Response body:', await response.json());
    // });

});




//post
// test('create book', async ({ request }) => {
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


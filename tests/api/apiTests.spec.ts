import { expect, test } from '@playwright/test';

let userId : string;
let username: string;
let isbn: string;

test("create user", async ({ request }) => {
    const response = await request.post('https://demoqa.com/Account/v1/User', {
        data: {
            "userName": "thommu",
            "password": "Tomiii12!"
        }
    });

    expect(response.status()).toBe(201);
    expect(response.ok()).toBeTruthy();

    const responseUser = await response.json();
    console.log('responseUser: ', responseUser);
});

// GET API Request
test('API Get request - get all books', async({request}) =>{
    const response = await request.get('https://demoqa.com/BookStore/v1/Books')

    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();
    
    //parsing json response data
    console.log("response data - ", await response.json());


})

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
//         }
//     });

//     expect(response.status()).toBe(201);
//     expect(response.ok()).toBeTruthy();

//     const responseBody = await response.json();
//     console.log('response body:', responseBody);
// });


//POST API request
// test('API Post request', async ({request}) =>{
//     const response = await request.post('https://demoqa.com/BookStore/v1/Books',{
//         data:{
//             "books": [
//                 {
//                   "userId": userId,
//                   "username": username,
//                   "isbn": "9781449331810",
//                   "title": "Harry potter",
//                   "subTitle": "And the philosophers stone",
//                   "author": "J.K. Rowling",
//                   "publish_date": "2020-06-04T08:48:39.000Z",
//                   "publisher": "penguin",
//                   "pages": 300,
//                   "description": "Magic",
//                   "website": "https://en.wikipedia.org/wiki/Harry_Potter_and_the_Philosopher%27s_Stone"
//                 }
//               ]
//         }
//     })
//     // response code assertion - validate status code
//     expect(response.status()).toBe(201);

//     const resdata = await response.text();
//     expect(resdata).toContain('Harry potter');
    
//     // parsing json response data
//     console.log("response data - ", await response.json());
// })
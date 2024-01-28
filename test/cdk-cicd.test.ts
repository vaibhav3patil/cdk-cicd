import { handler } from "../services/hello";



describe('Hello Describe',()=>{

    test('handler should return 200', async()=>{
        const result = await handler({}, {});
        expect(result.statusCode).toBe(200);
    })
})
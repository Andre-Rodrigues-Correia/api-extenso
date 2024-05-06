import app from "../../src/app.js";
import request from "supertest";


describe('Should test numero post route', function () {

    test('Should return the number in full', () => {

        const body = {
            numero: 1039
        }

        return request(app).post('/numero/extenso').send(body).then((res) => {
            expect(res.status).toEqual(200)
            expect(res.body.message).toEqual('mil e trinta e nove');

        });
    })
});
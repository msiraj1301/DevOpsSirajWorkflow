const request = require("supertest");
const app = require("./server");

test("GET /api/user", async () => {
    const response = await request(app).get("/api/user");

    expect(response.statusCode).toBe(200);
    expect(response.body.name).toBe("Sohaib");
    expect(response.body.age).toBe(19);
});

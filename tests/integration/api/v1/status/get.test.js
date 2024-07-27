describe("Get /api/status", () => {
  it("should return 200 if the backend is initialize correct", async () => {
    const result = await fetch("http:localhost:3000/api/v1/status");

    expect(result.status).toBe(200);
  });
});

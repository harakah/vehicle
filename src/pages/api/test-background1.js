export default async function handler(req, res) {
    try {
        setTimeout(() => {
            res.statusCode = 200
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify(posts))
        }, 15000);
    } catch (err) {
        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Hello World" }),
        };
    }
}

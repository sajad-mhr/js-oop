function response(res, status, body) {
    res.writeHead(status, {"Content-Type": "application/json"});
    res.write(typeof body === "string" ? body : JSON.stringify(body));
    res.end();
}

module .exports = response
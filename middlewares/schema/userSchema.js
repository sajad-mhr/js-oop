const schema = {
    type: "object",
    properties: {
        id: {type: "integer"},
        name: {type: "string"},
        age: {type: "integer"},
    },
    required: ["id","name","age"],
    additionalProperties: false,
}

module .exports = schema;
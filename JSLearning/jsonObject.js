let obj1 = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "url" : "www.amazon.in",
    "properties": {
        "billing_address": { "$ref": "#/url" },
        "shipping_address": { "$ref": "#/definitions/address" }
    }
};

console.log(obj1.properties.billing_address);
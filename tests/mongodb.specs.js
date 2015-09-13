describe("MongoDB", function() {
    it("is there a server running", function(next) {
        var MongoClient = require('mongodb').MongoClient;

        MongoClient.connect('mongodb://127.0.0.1:27017/dbtest', function(err, db) {
            if (err) {
                console.log('there is err');
            }
            expect(err).toBe(12);

        });
    });
});

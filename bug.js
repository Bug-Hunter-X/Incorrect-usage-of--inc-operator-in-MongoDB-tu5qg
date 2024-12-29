```javascript
//Incorrect usage of $inc operator
db.collection.updateOne({"_id":ObjectId("someId")},{$inc:{counter:1}});
//Correct usage of $inc operator
db.collection.updateOne({"_id":ObjectId("someId")},{$inc:{counter:1}},{upsert:true});
```
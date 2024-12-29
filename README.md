# Incorrect Usage of $inc Operator in MongoDB
This repository demonstrates a common error when using the `$inc` operator in MongoDB. The `$inc` operator is used to increment a numerical field by a specified value. However, if the document does not exist, the operation fails unless the `upsert` option is set to `true`.

## Bug
The bug lies in the incorrect usage of `$inc` in the `updateOne` method. If a document with the specified `_id` does not exist, the operation fails without creating a new document.  This can lead to unexpected behavior in your application. 

## Solution
The solution is to add the `upsert: true` option to the `updateOne` method. This ensures that if a document with the specified `_id` does not exist, a new document will be created before incrementing the counter. 
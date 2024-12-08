```javascript
function findDocuments(field, value) {
  if (!value || value.length === 0) {
    // Handle empty array case, return all documents if you intend to
    return db.collection.find({});
  } else {
    return db.collection.find({ field: { $in: value } });
  }
}
```
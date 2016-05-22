function collect_same_elements(collection_a, object_b) {

   return  buildSameElements(collection_a, object_b)
}

function buildSameElements(collection_a, object_b) {
    var resultArray = [];

    collection_a.forEach(function (object_a) {
        if (getSameElements(object_a, object_b)) {
            resultArray.push(object_a.key);
        }
    });

    return resultArray;
}

function getSameElements(object_a, object_b) {
    for (var j = 0; j < object_b.value.length; j++)
        if (object_a.key === object_b.value[j]) {

            return 1;
        }
}

module.exports = collect_same_elements;

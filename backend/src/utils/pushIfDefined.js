const pushIfDefined = (fields, values, column, value) => {
    if (value !== undefined) {
        fields.push(`${column} = $${fields.length + 1}`);
        values.push(value);
    }
}

module.exports = { pushIfDefined };  
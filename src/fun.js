function calculateTopValues(intelData) {
    // Using reduce to get the counts of each attribute's values
    const attributeCount = intelData.reduce((attr, entry) => {
        for (const [key, value] of Object.entries(entry)) {
            if (key !== 'ioc') { // Exclude the 'ioc' field
                if (!attr[key]) {
                    attr[key] = {};
                }

                if (!attr[key][value]) {
                    attr[key][value] = 0;
                }

                attr[key][value]++;
            }
        }
        return attr;
    }, {});

    // Extract the top 3 values for each attribute
    const topValues = Object.entries(attributeCount).reduce((result, [key, values]) => {
        const sortedValues = Object.entries(values)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 3); // Get top 3 values

        result[key] = {};
        sortedValues.forEach(([value, count]) => {
            result[key][value] = count;
        });

        return result;
    }, {});

    return topValues;
}


// Sample data
const intelData = [
  {ioc: "1.2.3.4",
   threat: "low",
  countryCode: "us",
  seenBy: ["usSS", "whiteHatsAnon"],
  lastSeen: 1650309845083},
  {ioc: "1.2.3.5",
  threat: "high",
  countryCode: "us",
  seenBy: ["usSS"],
  lastSeen: 1650307825088
  },
  {ioc: "gougle.com",
  threat: "high",
  countryCode: "ca",
  seenBy: ["usSS", "whiteHatsAnon", "ruWatch", "privateInc", "angiesList"],
  lastSeen: 1650609845087},
  {ioc: "goople.com",
  threat: "high",
  countryCode: "ru",
  seenBy: ["usSS", "whiteHatsAnon", "angiesList"],
  lastSeen: 1650109815283},
  {ioc: "goople45.com",
  threat: "high",
  countryCode: "ru",
  seenBy: ["usSS", "whiteHatsAnon", "angiesList"],
  lastSeen: 1650109815283},
  {ioc: "goople12.com",
  threat: "high",
  countryCode: "ru",
  seenBy: ["usSS", "whiteHatsAnon", "angiesList"],
  lastSeen: 1650109815283},
];

console.log(calculateTopValues(intelData));


async function createRecord(type, userId, date) {
  fetch('http://localhost:8081/records', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userId,
      type,
      date,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(`Record created:\n ${data}`);
    })
    .catch((err) => {
      console.log(`Failed to create record: ${err}`);
    });
}

module.exports = createRecord;

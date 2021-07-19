console.log('Hi');

const DEVICE_ACCESS_TOKEN = 'ivLHm803VQhSUfrPNUXL'
// const DEVICE_ACCESS_TOKEN = 'oHFMvpuEhtAA14VbtAoH'
const URL = `http://localhost:8080/api/v1/${DEVICE_ACCESS_TOKEN}/telemetry`

var intervalId = null
function onInit() {
  startInterval()
}

function sendData(val) {
  const data = { temperature: val }

  fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
}

function startInterval() {
  stopInterval()
  console.log('Interval is runnig');
  setInterval(() => {
    const val = getRandVal()
    sendData(val)
  }, 1000)
}

function stopInterval() {
  clearInterval(intervalId)
  intervalId = null
}

function getRandVal() {
  return Math.floor(Math.random() * 50)
}
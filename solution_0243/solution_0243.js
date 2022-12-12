// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

function humanReadable(seconds) {
  let hours = Math.floor(seconds / 60 / 60)
  let remainder = seconds - hours * 60 * 60
  let minutes = Math.floor(remainder / 60)
  let second = remainder - minutes * 60

  return (
    hours.toString().padStart(2, '0') +
    ':' +
    minutes.toString().padStart(2, '0') +
    ':' +
    second.toString().padStart(2, '0')
  )
}

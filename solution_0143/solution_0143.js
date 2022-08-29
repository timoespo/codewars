// You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.
function countDevelopers(list) {
  return list.filter((dev) => {
    return dev.continent == 'Europe' && dev.language == 'JavaScript'
  }).length
}

console.log(
  countDevelopers([
    {
      firstName: 'Noah',
      lastName: 'M.',
      country: 'Switzerland',
      continent: 'Europe',
      age: 19,
      language: 'JavaScript',
    },
    {
      firstName: 'Maia',
      lastName: 'S.',
      country: 'Tahiti',
      continent: 'Oceania',
      age: 28,
      language: 'JavaScript',
    },
    {
      firstName: 'Shufen',
      lastName: 'L.',
      country: 'Taiwan',
      continent: 'Asia',
      age: 35,
      language: 'HTML',
    },
    {
      firstName: 'Sumayah',
      lastName: 'M.',
      country: 'Tajikistan',
      continent: 'Asia',
      age: 30,
      language: 'CSS',
    },
  ]),
  1
)

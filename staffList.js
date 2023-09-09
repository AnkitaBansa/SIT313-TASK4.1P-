import faker from "@faker-j/faker"
const staffList = [
  {
    key: 0,
    image: faker.internet.avatar(),
    name: faker.person.firstName(),
    position: faker.person.jobTitle()
  },
  {
    key: 1,
    image: faker.internet.avatar(),
    name: faker.person.firstName(),
    position: faker.person.jobTitle()
  },
  {
    key: 2,
    image: faker.internet.avatar(),
    name: faker.person.firstName(),
    position: faker.person.jobTitle()
  },
  {
    key: 3,
    image: faker.internet.avatar(),
    name: faker.person.firstName(),
    position: faker.person.jobTitle()
  },
]

export default staffList

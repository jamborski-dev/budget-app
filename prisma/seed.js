const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

async function main() {
  const user1 = await prisma.user.upsert({
    where: { email: "daszewskaz@gmail.com" },
    update: {},
    create: {
      id: 0,
      name: "Zuza",
      email: "daszewskaz@gmail.com",
      accounts: {
        create: [
          {
            bankName: "Monzo",
            color: "rgb(190, 132, 80)"
          },
          {
            bankName: "Santander",
            color: "rgb(190, 80, 80)"
          }
        ]
      }
    }
  })
  const user2 = await prisma.user.upsert({
    where: { email: "rsjamborski@gmail.com" },
    update: {},
    create: {
      id: 1,
      name: "Rob",
      email: "rsjamborski@gmail.com",
      accounts: {
        create: [
          {
            bankName: "Monzo",
            color: "rgb(155, 35, 75)"
          },
          {
            bankName: "Alior",
            color: "rgb(109, 80, 190)",
            currentBalance: 67.32,
            currencyCode: "PLN",
            currencySymbol: "zł"
          }
        ]
      }
    }
  })

  const joint = await prisma.account.upsert({
    where: { id: 5 },
    update: {},
    create: {
      bankName: "Monzo Joint",
      accountHolders: {
        connect: [{ id: 0 }, { id: 1 }]
      },
      color: "rgb(80, 190, 190)"
    }
  })

  // prettier-ignore
  const repeatDay = await prisma.transactionRepeatPeriod.upsert({ where: { label: "every day" }, update: {}, create: { label: "every day" } })
  // prettier-ignore
  const repeatWeek = await prisma.transactionRepeatPeriod.upsert({ where: { label: "every week" }, update: {}, create: { label: "every week" } })
  // prettier-ignore
  const repeatMonth = await prisma.transactionRepeatPeriod.upsert({ where: { label: "every month" }, update: {}, create: { label: "every month" } })
  // prettier-ignore
  const repeatYear = await prisma.transactionRepeatPeriod.upsert({ where: { label: "every year" }, update: {}, create: { label: "every year" } })

  // prettier-ignore
  const category1 = await prisma.category.upsert({ where: { label: "self" }, update: {},        create: { label: "self",        color: "rgb(113, 80, 190)" } })
  // prettier-ignore
  const category2 = await prisma.category.upsert({ where: { label: "groceries" }, update: {},   create: { label: "groceries",   color: "rgb(80, 190, 190)" } })
  // prettier-ignore
  const category3 = await prisma.category.upsert({ where: { label: "home" }, update: {},        create: { label: "home",        color: "rgb(80, 190, 123)" } })
  // prettier-ignore
  const category4 = await prisma.category.upsert({ where: { label: "debt" }, update: {},        create: { label: "debt",        color: "rgb(190, 132, 80)" } })
  // prettier-ignore
  const category5 = await prisma.category.upsert({ where: { label: "car" }, update: {},         create: { label: "car",         color: "rgb(190, 80, 80)" } })
  // prettier-ignore
  const category6 = await prisma.category.upsert({ where: { label: "eating out" }, update: {},  create: { label: "eating out",  color: "rgb(190, 80, 178)" } })
  // prettier-ignore
  const category7 = await prisma.category.upsert({ where: { label: "fitness" }, update: {},     create: { label: "fitness",     color: "rgb(176, 190, 80))" } })
  // prettier-ignore
  const category8 = await prisma.category.upsert({ where: { label: "baby" }, update: {},        create: { label: "baby",        color: "rgb(190, 168, 80)" } })

  console.log({
    user1,
    user2,
    joint,
    repeatDay,
    repeatWeek,
    repeatMonth,
    repeatYear,
    category1,
    category2,
    category3,
    category4,
    category5,
    category6,
    category7,
    category8
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async e => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

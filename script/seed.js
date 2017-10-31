/**
 * Welcome to the seed file! This seed file uses a newer language feature called...
 *
 *                  -=-= ASYNC...AWAIT -=-=
 *
 * Async-await is a joy to use! Read more about it in the MDN docs:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 *
 * Now that you've got the main idea, check it out in practice below!
 */
const db = require('../server/db')
//const {User} = require('../server/db/models')
//const Promise = require('bluebird');
const { Cats, User, Orders, Reviews } = require('../server/db/models');

var data = {
  cats: [
    {
      name: 'Adam Driver',
      description: 'Off-beat, broody type who experiences random bouts of energy and self-loathing',
      breed: 'Javanese',
      age: 3,
      color: 'Brown and White Tabby',
      hairLength: 'short',
      profession: 'Drama Queen',
      price: 673.96,
      image: '/images/adam-driver.png',
      quantity: 3
    },
    {
      name: 'Adolf Kitler',
      description: 'Blossoming artist who needs nurturing and love to prevent his dark side from emerging',
      breed: 'Domestic Shorthair',
      age: 34,
      color: 'White and Black',
      hairLength: 'short',
      profession: 'Painter (fingers-crossed)',
      price: 345.87,
      image: '/images/Adolf-Kitler.png',
      quantity: 14
    },   {
      name: 'David Bowie',
      description: 'Gender-queer starcat who is constantly reinventing their image and enjoys singing along to music',
      breed: 'British Shorthair',
      age: 7,
      color: 'White',
      hairLength: 'short',
      profession: 'Howler',
      price: 783.96,
      image: '/images/david-bowie.png',
      quantity: 0
    },   {
      name: 'Emma Stone',
      description: 'Large-eyed showcat who fits in perfectly as one of the guys.',
      breed: 'Domestic Shorthair',
      age: 4,
      color: 'Red Grey Tabby',
      hairLength: 'short',
      profession: 'Drama Queen',
      price: 562.95,
      image: '/images/emma-stone.png',
      quantity: 7
    },   {
      name: 'Stranger Things Gatten Matarazzo',
      description: 'Delightfully curious almost-adult, who loves to hunt monsters, and who\'s sense of adventure often leads him into trouble',
      breed: 'Selkirk Rex',
      age: 1,
      color: 'Grey and Brown',
      hairLength: 'long',
      profession: 'Spazzer',
      price: 496.11,
      image: '/images/gatten-matarazzo.jpg',
      quantity: 11
    },   {
      name: 'Dame Maggie Smith',
      description: 'Dame Maggie Smith... obviously',
      breed: 'Sphynx',
      age: 19,
      color: 'Tan',
      hairLength: 'short',
      profession: 'Drama Queen',
      price: 850.81,
      image: '/images/maggie-smith.jpg',
      quantity: 1
    },   {
      name: 'Mythbusters\' Jamie Hyneman',
      description: 'A very analytical cat with a dry sense of humor and an affinity for caps',
      breed: 'Persian',
      age: 6,
      color: 'Orange',
      hairLength: 'long',
      profession: 'Spazzer',
      price: 379.18,
      image: '/images/mythbusters-jamie-hyneman.jpg',
      quantity: 6
    },   {
      name: 'Nick Offerman',
      description: 'Grumpy loner tomcat with a strong sense of schaddenfreude and a heart of gold',
      breed: 'Exotic Shorthair',
      age: 8,
      color: 'Grey Tabby',
      hairLength: 'medium',
      profession: 'Spazzer',
      price: 478.12,
      image: '/images/Nick-offerman.png',
      quantity: 5
    },   {
      name: 'Nikki Minaj',
      description: 'Boss-ass-bitch (bitch, bitch, bitch, bitch, bitch)',
      breed: 'Persian',
      age: 6,
      color: 'White',
      hairLength: 'long',
      profession: 'Howler',
      price: 841.92,
      image: '/images/nikki-minaj.jpg',
      quantity: 3
    },   {
      name: 'Ozzy Osbourne',
      description: 'Enjoys spending time in the dark, eating bats, and screaming at you from another room',
      breed: 'Russian Blue',
      age: 10,
      color: 'Grey',
      hairLength: 'short',
      profession: 'Howler',
      price: 2,
      image: '/images/ozzy-osbourne.jpg',
      quantity: 33
    },   {
      name: 'Peter Dinklage',
      description: 'Even though his limbs are tiny, this lil stinker pulls it off with confidence and a hint of judgement',
      breed: 'Munchkin',
      age: 5,
      color: 'Brown and Tan',
      hairLength: 'short',
      profession: 'Drama Queen',
      price: 1048.82,
      image: '/images/peter-dinklage.jpg',
      quantity: 9
    },   {
      name: 'Ron Perlman',
      description: 'A face you can\'t place, but a voice you know and love.  Also look at that chin!',
      breed: 'Ragamuffin',
      age: 7,
      color: 'Orange Tabby',
      hairLength: 'long',
      profession: 'Drama Queen',
      price: 299.73,
      image: '/images/ron-perlman.jpg',
      quantity: 4
    },   {
      name: 'Steve Buscemi',
      description: 'Very uncomfortable-looking, yet enigmatic sleezeball',
      breed: 'Domestic Shorthair',
      age: 10,
      color: 'White and Grey',
      hairLength: 'short',
      profession: 'Spazzer',
      price: 451.92,
      image: 'images/Steve-Buscemi.jpg',
      quantity: 7
    },   {
      name: 'Teagan and Sara',
      description: 'Twin sisters who are virtually indistinguishable and also gay',
      breed: 'American Shorthair',
      age: 19,
      color: 'WHite',
      hairLength: 'short',
      profession: 'Howler',
      price: 948.19,
      image: 'images/tegan-and-sara.jpg',
      quantity: 2
    },   {
      name: 'Ryan Gosling',
      description: 'Hey Girl',
      breed: 'Russian Blue',
      age: 4,
      color: 'Grey',
      hairLength: 'short',
      profession: 'Drama Queen',
      price: 837.66,
      image: 'images/Ryan-Gosling.jpg',
      quantity: 9
    },   {
      name: 'William Howard Taft',
      description: 'Hearty appetite and a deep-seated enmity with Teddy Bears',
      breed: 'American Shorthair',
      age: 14,
      color: 'Brown Tabby',
      hairLength: 'short',
      profession: 'Man of the People',
      price: 635.98,
      image: '/images/fatter-taft.jpg',
      quantity: 12
    }
  ],
  user: [
    {
      userName: 'WheelsOfYarn14',
      email: 'wheelsofyarn14@meowcity.com',
      address: '174 Nostrand Ave #7, Brooklyn, NY 12211',
      password: 'mittens',
      isAdmin: false
    },
    {
      userName: 'ILoveSprinkles',
      email: 'ilovesprinkles@herekitty.com',
      address: '2493 Pemberton Drive, Hanover, PA 45987',
      password: 'pretzels',
      isAdmin: false
    },
    {
      userName: 'GimmeTots',
      email: 'gimmetots@pedroforpresident.com',
      address: '824 White Road St, Cattleland, OK 82274',
      password: 'pinata',
      isAdmin: false
    },
    {
      userName: 'CloneAllCats',
      email: 'cloneallcats@catladiesrus.com',
      address: 'N/A',
      password: 'shannonisawesome',
      isAdmin: true
    },
    {
      userName: 'SpreadLove',
      email: 'spreadlove@catladiesrus.com',
      address: 'N/A',
      password: 'asarechristinaandpriya',
      isAdmin: true
    }
  ],
  orders: [
    {
      userId: 1,
      cart: [4, 8],
      status: 'Completed',
      totalPrice: 37
    },
    {
      userId: 2,
      cart: [9, 11, 6],
      status: 'Processing',
      totalPrice: 37
    },
    {
      userId: 3,
      cart: [5],
      status: 'Created',
      totalPrice: 37
    },
    {
      userId: 1,
      cart: [3, 3],
      status: 'Created',
      totalPrice: 37
    },
    {
      userId: 2,
      cart: [10, 13],
      status: 'Completed',
      totalPrice: 37
    }
  ],
  reviews: [
    {
      catId: 6,
      userId: 2,
      description: 'Great cat',
      stars: 3
    },
    {
      catId: 14,
      userId: 1,
      description: 'Love this fricken cat',
      stars: 4
    },
    {
      catId: 9,
      userId: 3,
      description: 'I want moar',
      stars: 4
    },
    {
      catId: 15,
      userId: 1,
      description: 'best descision ever',
      stars: 5
    },
    {
      catId: 7,
      userId: 2,
      description: 'I made a mistake',
      stars: 1
    }
  ]
};


async function seed () {
  await db.sync({force: true})
  console.log('db synced!')
  // Whoa! Because we `await` the promise that db.sync returns, the next line will not be
  // executed until that promise resolves!

  const catters = await Promise.all(data.cats.map(cat => Cats.create(cat)))
  const users = await Promise.all(data.user.map(user => User.create(user)))
  const orders = await Promise.all(data.orders.map(order => Orders.create(order)))
  const reviews = await Promise.all(data.reviews.map(review => Reviews.create(review)))
  // Wowzers! We can even `await` on the right-hand side of the assignment operator
  // and store the result that the promise resolves to in a variable! This is nice!
  console.log(`seeded ${catters.length} cats`)
  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${orders.length} orders`)
  console.log(`seeded ${reviews.length} reviews`)
  console.log(`seeded successfully`)
}

// Execute the `seed` function
// `Async` functions always return a promise, so we can use `catch` to handle any errors
// that might occur inside of `seed`
seed()
  .catch(err => {
    console.error(err.message)
    console.error(err.stack)
    process.exitCode = 1
  })
  .then(() => {
    console.log('closing db connection')
    db.close()
    console.log('db connection closed')
  })

/*
 * note: everything outside of the async function is totally synchronous
 * The console.log below will occur before any of the logs that occur inside
 * of the async function
 */
console.log('seeding...')

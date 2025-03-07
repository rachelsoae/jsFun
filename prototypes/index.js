const { kitties } = require('./datasets/kitties');
const { puppers } = require('./datasets/puppers');
const { mods } = require('./datasets/mods');
const { cakes } = require('./datasets/cakes');
const { classrooms } = require('./datasets/classrooms');
const { breweries } = require('./datasets/breweries');
const { nationalParks } = require('./datasets/nationalParks');
const { weather } = require('./datasets/weather');
const { boardGames } = require('./datasets/boardGames');
const { instructors, cohorts } = require('./datasets/turing');
const { bosses, sidekicks } = require('./datasets/bosses');
const { constellations, stars } = require('./datasets/astronomy');
const { weapons, characters } = require('./datasets/ultima');
const { dinosaurs, humans, movies } = require('./datasets/dinosaurs');



// SINGLE DATASETS
// =================================================================

// DATASET: kitties from ./datasets/kitties
const kittyPrompts = {
  orangePetNames(pets) {
    // Return an array of just the names of kitties who are orange e.g.
        // ['Tiger', 'Snickers']

    const orangePets = pets.filter(pet => pet.color === 'orange');
    return orangePets.map(pet => pet.name);

    // Annotation:
    // filter array to only get objects back that are orange cats
    // map to get a new array of only names
  },

  sortByAge(pets) {
    // Sort the kitties by their age

    return pets.sort((a, b) => b.age - a.age);

    // Annotation:
    // sort an array
    // if return of callbackfn is positive, sort b first
    // if return of callbackfn is negative, sort a first
  },

  growUp(pets) {
    // Return an array of kitties who have all grown up by 2 years e.g.
    // [{
    //   name: 'Felicia',
    //   age: 4,
    //   color: 'grey'
    // },
    // {
    //   name: 'Tiger',
    //   age: 7,
    //   color: 'orange'
    // },
    // ...etc]

    pets.map(pet => pet.age += 2)
    return pets;
  }
};

// PLEASE READ-----------------------
// Currently, your functions are probably using the `kitties` global import variable.
// refactor the above functions using arguments and parameters so that
// they can perform the same utility
// for the kitties or puppers datasets, depending on what arguments you send through.


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: clubs from ./datasets/clubs
const clubPrompts = {
  membersBelongingToClubs(clubs) {
    // Your function should access the clubs data through a parameter (it is being passed as an argument in the test file)
    // Create an object whose keys are the names of people, and whose values are
    // arrays that include the names of the clubs that person is a part of. e.g.
    // {
    //   Louisa: ['Drama', 'Art'],
    //   Pam: ['Drama', 'Art', 'Chess'],
    //   ...etc
    // }
    
    const membersClubs = clubs.reduce((students, currentClub) => {
      currentClub.members.forEach(member => {
        students[member] ? students[member].push(currentClub.club) : students[member] = [currentClub.club];
      });
      return students;
    }, {});

    return membersClubs;

    // Annotation:
    // use reduce to consolidate an array of objects to a single object
    // iterate through the array of clubs using reduce
    // initial value is an empty object which will represent the accumulator (students' clubs)
    // at the end of each iteration, expect the accumulator to have created a new key (student) with a value pushed in (club), or just push in a value (club)
    // for each club, iterate through the array of members using forEach
    // if the accumulator has a key that matches the current member, push in the current club
    //  if the accuumulator does not already have the key, then create a key with that member name and push in the club
  }
}






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: mods from ./datasets/mods
const modPrompts = {
  studentsPerMod() {
    // Return an array of objects where the keys are mod (the number of the module)
    // and studentsPerInstructor (how many students per instructor there are for that mod) e.g.
    // [
    //   { mod: 1, studentsPerInstructor: 9 },
    //   { mod: 2, studentsPerInstructor: 11 },
    //   { mod: 3, studentsPerInstructor: 10 },
    //   { mod: 4, studentsPerInstructor: 8 }
    // ]

   mods.forEach(mod => {
    mod.studentsPerInstructor = (mod.students / mod.instructors);
    delete mod.students;
    delete mod.instructors;
   });

   return mods;

    // Annotation:
    // students per instructor = students / instructors
    // map adding that key
    // delete the other keys
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: cakes from ./datasets/cakes
const cakePrompts = {
  stockPerCake() {
    // Return an array of objects that include just the flavor of the cake and how
    // much of that cake is in stock e.g.
    // [
    //    { flavor: 'dark chocolate', inStock: 15 },
    //    { flavor: 'yellow', inStock: 14 },
    //    ..etc
    // ]

    const cakeStock = cakes.map(cake => {
      return {
        flavor: cake.cakeFlavor,
        inStock: cake.inStock
      }
    });

    return cakeStock;

    // Annotation:
    // create new objects using map
  },

  onlyInStock() {
    // Return an array of only the cakes that are in stock
    // e.g.
    // [
    //   {
    //   cakeFlavor: 'dark chocolate',
    //   filling: null,
    //   frosting: 'dark chocolate ganache',
    //   toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
    //   inStock: 15
    // },
    // {
    //   cakeFlavor: 'yellow',
    //   filling: 'citrus glaze',
    //   frosting: 'chantilly cream',
    //   toppings: ['berries', 'edible flowers'],
    //   inStock: 14
    // },
    // ..etc
    // ]

    return cakes.filter(cake => cake.inStock);
    

    // Annotation:
    // Write your annotation here as a comment
  },

  totalInventory() {
    // Return the total amount of cakes in stock e.g.
    // 59

    /* CODE GOES HERE */

    const cakesInStock = cakes.filter(cake => cake.inStock);
    return cakesInStock.reduce((totalCakes, currentCake) => {
      totalCakes += currentCake.inStock
      return totalCakes;
    }, 0);
  
    // Annotation:
    // Write your annotation here as a comment
  },

  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]

    return cakes.reduce((newArray, currentCake) => {
      currentCake.toppings.forEach(topping => {
        newArray.includes(topping) ? newArray : newArray.push(topping);
      })
      return newArray;
    }, [])

    // Annotation:
    // Iterate over the array of cakes
    // for each cake, iterate over the array of toppings
    // if the new array contains the current topping, return the new array
    // if the new array does not contain the current topping, push the topping into the new array and return the new array
  },

  groceryList() {
    // I need to make a grocery list. Please give me an object where the keys are
    // each topping, and the values are the amount of that topping I need to buy e.g.
    // {
    //    'dutch process cocoa': 1,
    //    'toasted sugar': 3,
    //    'smoked sea salt': 3,
    //    'berries': 2,
    //    ...etc
    // }

    /* CODE GOES HERE */

    return cakes.reduce((newObject, currentCake) => {
      currentCake.toppings.forEach(topping => {
        newObject[topping] ? newObject[topping] += 1 : newObject[topping] = 1
      })
      return newObject;
    }, {});

    // Annotation:
    // use reduce to create a new singular object
    // keys are ingredients
    // values are the number of times they appear in the cakes array (how many cakes need this ingredient)
    // accumulator is newObject
    // currentValue is current cake
    // iterate over the toppings array of each cake
    // if newObject.currentTopping does not exist, create it with a value of 1
    // if newObject.currentTopping does exist, increment the value += 1
    // return the newObject
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: classrooms from ./datasets/classrooms
const classPrompts = {
  feClassrooms() {
    // Create an array of just the front-end classrooms. e.g.
    // [
    //   { roomLetter: 'A', program: 'FE', capacity: 32 },
    //   { roomLetter: 'C', program: 'FE', capacity: 27 },
    //   { roomLetter: 'E', program: 'FE', capacity: 22 },
    //   { roomLetter: 'G', program: 'FE', capacity: 29 }
    // ]

    return classrooms.filter(classroom => classroom.program === 'FE')

    // Annotation:
    // Write your annotation here as a comment
  },

  totalCapacities() {
    // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    // {
    //   feCapacity: 110,
    //   beCapacity: 96
    // }

    return classrooms.reduce((newObject, classroom) => {
      if (classroom.program === 'FE') {
        newObject.feCapacity ? newObject.feCapacity += classroom.capacity : newObject.feCapacity = classroom.capacity;
      } else {
        newObject.beCapacity ? newObject.beCapacity += classroom.capacity : newObject.beCapacity = classroom.capacity;
      }
      return newObject;
    }, {})

    // Annotation:
    // init is new Object
    // if the current classroom's program is FE,
    //  check to see if the new object contains the key feCapacity
    //    if so, assign it the value of itself += the current classroom's capacity 
    //    if not, create the key and assign it the value of the current classroom's capacity
    // repeat for BE
    // refactor
  },

  sortByCapacity() {
    // Return the array of classrooms sorted by their capacity (least capacity to greatest)

    return classrooms.sort((a, b) => a.capacity - b.capacity)

    // Annotation:
    // Write your annotation here as a comment
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: books from './datasets/books

const bookPrompts = {
  removeViolence(bookArray) {
    // Your function should access the books data through a parameter (it is being passed as an argument in the test file)
    // return an array of all book titles that are not horror or true crime. Eg:

    //  ['1984', 'The Great Gatsby', 'Lord of the Flies', 'Harry Potter and the Sorcerer\'s Stone',
    //   'The Hitchhiker\'s Guide to the Galaxy', 'Flowers for Algernon', 'Slaughterhouse-Five',
    //   'The Handmaid\'s Tale', 'The Metamorphosis', 'Brave New World', 'Life of Pi',
    //   'The Curious Incident of the Dog in the Night - Time', 'The Bell Jar',
    //   'Catch-22', 'Treasure Island']

    const nonViolentBooks = bookArray.filter(book => book.genre !== 'Horror' && book.genre !== 'True Crime');
    return nonViolentBooks.map(book => book.title)

    // Annotation:
    // map
    // if genre of current book is not horror or true trime, map the name of the book

  },
  getNewBooks(bookArray) {
    // return an array of objects containing all books that were
    // published in the 90's and 00's. Inlucde the title and the year Eg:

    // [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
    //  { title: 'Life of Pi', year: 2001 },
    //  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]

    const modernBooks = bookArray.filter(book => book.published > 1989)
    
    return modernBooks.map(book => ({ title: book.title, year: book.published }))
    


    // Annotation:
    // Write your annotation here as a comment
  },

  getBooksByYear(books, year) {
    // return an array of objects containing all books that were
    // published after the specified year without the author or genre data. 
    // The published property should be changed to year for the returned books.
    // e.g. given 1990, return

    // [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
    //  { title: 'Life of Pi', year: 2001 },
    //  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]

    const selectedBooks = books.filter(book => book.published > year);
    return selectedBooks.map(book => ({title: book.title, year: book.published}))

    // Annotation:
    // Write your annotation here as a comment
  }

};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: weather from './datasets/weather

const weatherPrompts = {
  getAverageTemps() {
    // return an array of all the average temperatures. Eg:
    // [ 40, 40, 44.5, 43.5, 57, 35, 65.5, 62, 14, 46.5 ]

    return weather.map(location => {
      return average = (location.temperature.high + location.temperature.low) / 2;
    })

    // Annotation:
    // iterate over array of objects
    // for each object, calculate the average temperater
      // add high plus low and divide by 2
    // return an array with average tempes - use map iterator
  },

  findSunnySpots() {
    // Return an array of sentences of the locations that are sunny
    // and mostly sunny. Include the location and weather type. Eg:
    // [ 'Atlanta, Georgia is sunny.',
    // 'New Orleans, Louisiana is sunny.',
    // 'Raleigh, North Carolina is mostly sunny.' ]

    return weather.reduce((newArray, currentPlace) => {
      if (currentPlace.type.includes('sunny')) {
        newArray.push(`${currentPlace.location} is ${currentPlace.type}.`)
      }
      return newArray;
    }, [])

    // Annotation:
    // iterate over array of objects
    // if weather type includes sunny, return an interpolated string with the name and weather type
  },

  findHighestHumidity() {
    // Return the location with the highest humidity. Eg:
    // {
    //   location: 'Portland, Oregon',
    //   type: 'cloudy',
    //   humidity: 84,
    //   temperature: { high: 49, low: 38 }
    // }

    return weather.reduce((mostHumid, currentPlace) => {
      if (currentPlace.humidity > mostHumid.humidity) {
        mostHumid = currentPlace;
      }
      return mostHumid;
    }, weather[0])

    // Annotation:
    // iterate over array of objects
    // sort in descending order by humidity and return the first item
    // or reduce and check if the currentValue is higher than the last

  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------


// DATASET: nationalParks from ./datasets/nationalParks

const nationalParksPrompts = {
  getParkVisitList() {
    /// Return an object containing the names of which parks I need to visit
    // and the ones I have already visited eg:
    // {
    //   parksToVisit: ["Yellowstone", "Glacier", "Everglades"],
    //   parksVisited: ["Rocky Mountain", "Acadia", "Zion"]
    //}

    return nationalParks.reduce((newObject, currentPark) => {
      if (currentPark.visited) {
        newObject.parksVisited || (newObject.parksVisited = []);
        newObject.parksVisited.push(currentPark.name);
      } else {
        newObject.parksToVisit || (newObject.parksToVisit = []);
        newObject.parksToVisit.push(currentPark.name);
      }
      return newObject;
    }, {})

    // Annotation:
    // use reduce
    // if true
      // add key if it doesn't exist
      // push park name to array
    // if false
      // same
    // return newObject
  },

  getParkInEachState() {
    // Return an array of objects where the key is the state and the value is its National Park
    // eg: [ { Colorado: 'Rocky Mountain' },
    // { Wyoming: 'Yellowstone' },
    // { Montana: 'Glacier' },
    // { Maine: 'Acadia' },
    // { Utah: 'Zion' },
    // { Florida: 'Everglades' } ]

    return nationalParks.map(park => {
      return {[park.location]: park.name}
    })

    // Annotation:
    // map a new array of objects
  },

  getParkActivities() {
    // Return an array of all the activities I can do
    // in a National Park. Make sure to exclude duplicates. eg:
    // [ 'hiking',
    //   'shoeshoing',
    //   'camping',
    //   'fishing',
    //   'boating',
    //   'watching wildlife',
    //   'cross-country skiing',
    //   'swimming',
    //   'bird watching',
    //   'canyoneering',
    //   'backpacking',
    //   'rock climbing' ]

    return nationalParks.reduce((newArray, currentPark) => {
      currentPark.activities.forEach(activity => {
        if (!newArray.includes(activity)) {
          newArray.push(activity);
        }
      })
      return newArray
    }, [])

    // Annotation:
    // reduce to a new array
    // iterate over each park's activities
    // if new array does not include the activity, push it in
  }
};



// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: breweries from ./datasets/breweries
const breweryPrompts = {
  getBeerCount() {
    // Return the total beer count of all beers for every brewery e.g.
    // 40

    return breweries.reduce((numBeers, currentBrewery) => {
      numBeers += currentBrewery.beers.length;
      return numBeers
    }, 0)

    // Annotation:
    // reduce to a single number
    // start at 0
    // add the length of each beers array
  },

  getBreweryBeerCount() {
    // Return an array of objects where each object has the name of a brewery
    // and the count of the beers that brewery has e.g.
    // [
    //  { name: 'Little Machine Brew', beerCount: 12 },
    //  { name: 'Ratio Beerworks', beerCount: 5},
    // ...etc.
    // ]

    return breweries.map(brewery => {
      return {
        name: brewery.name,
        beerCount: brewery.beers.length
      }
    })

    // Annotation:
    // map to return array of objects
    // for each brewery, return a new object
  },

  getSingleBreweryBeerCount(breweryName) {
    // Return a number that is the count of beers that the specified
    // brewery has e.g.
    // given 'Ratio Beerworks', return 5

    const brewery = breweries.find(brewery => brewery.name === breweryName);
    return brewery.beers.length;

    // Annotation:
    // iterate over array of breweries
    // if brewery name matches, return length of beers array
  },

  findHighestAbvBeer() {
    // Return the beer which has the highest ABV of all beers
    // e.g.
    // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }

    return breweries.reduce((highestAbv, currentBrewery) =>  {
      currentBrewery.beers.forEach(beer => {
        if (beer.abv > highestAbv.abv) {
          highestAbv = beer;
        }
      })
      return highestAbv
    }, breweries[0].beers[0])

    // Annotation:
    // reduce to a single beer
    // set starting value equal to the first beer in the first brewery
    // for each brewery, iterate through array of beers
    // for each beer, compare its abv to the abv of the accumulator
    // if the currentBeers abv is higher than the accumulators abv, reassign the accumulator to the currentBeer
    // return accumulator
    
  }
};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: weather from './datasets/boardGames

const boardGamePrompts = {
  listGames(type) {
    // Return an array of just the names of the games within a specified type. 
    // e.g. given an argument of "strategy", return
    // ["Chess", "Catan", "Checkers", "Pandemic", "Battle Ship", "Azul", "Ticket to Ride"]

    return boardGames[type].map(game => game.name)

    // Annotation:
    // Write your annotation here as a comment
  },

  listGamesAlphabetically(type) {
    // Return an array of just the names of the games within a specified 
    // type, sorted alphabetically. 
    // e.g. given an argument of "childrens", return
    // ["Candy Land", "Connect Four", "Operation", "Trouble"]

    const names = boardGames[type].map(game => game.name);
    return names.sort();

    // Annotation:
    // Write your annotation here as a comment
  },

  findHighestRatedGamesByType(type) {
    // Return an object which is the highest rated game within the specified type.
    // e.g. given the argument of 'party', return
    // { name: 'Codenames', rating: 7.4, maxPlayers: 8 },

    return boardGames[type].reduce((highestRated, currentGame) => {
      if (currentGame.rating > highestRated.rating) {
        highestRated = currentGame;
      }
      return highestRated;
    })

    // Annotation:
    // Write your annotation here as a comment
  },

  averageScoreByType(type) {
    // Return the average score for the specified type.
    // e.g. given the argument of "strategy", return 7
    // note: do not worry about rounding your result.

    const total = boardGames[type].reduce((ratingsAcc, currentGame) => {
      ratingsAcc += currentGame.rating
      return ratingsAcc
    }, 0)

    return total / boardGames[type].length;

    // Annotation:
    // Write your annotation here as a comment
  },

  averageScoreByTypeAndPlayers(type, maximumPlayers) {
    // Return the average score of any games that match the specified type
    // and maximum number of players.
    // e.g. given the arguments of "strategy" and 2, return 6.16666666667
    // note: do not worry about rounding your result.

    const matchPlayers = boardGames[type].filter(game => game.maxPlayers === maximumPlayers);

    const totalRating = matchPlayers.reduce((ratingsAcc, currentGame) => {
      ratingsAcc += currentGame.rating
      return ratingsAcc
    }, 0)

    return totalRating / matchPlayers.length

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DOUBLE DATASETS
// =================================================================

// DATASET: instructors, cohorts from ./datasets/turing
const turingPrompts = {
  studentsForEachInstructor() {
    // Return an array of instructors where each instructor is an object
    // with a name and the count of students in their module. e.g.
    // [
    //  { name: 'Pam', studentCount: 21 },
    //  { name: 'Robbie', studentCount: 18 }
    // ]

    return instructors.map(instructor => {
      let numStudents;
      
      cohorts.forEach(cohort => {
        if (cohort.module === instructor.module) {
          return numStudents = cohort.studentCount;
        }
      })
      
      return {
        name: instructor.name,
        studentCount: numStudents
      }
    })

    // Annotation:
    // map a new array of objects from  teachers
    // for each teacher, iterate over cohorts
    // if module of current cohort matches current instructor's cohort, set instructorsStudents equal to the student count for the current cohort
    // return an object with the current instructor's name and the instructorsStudents
  },

  studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    // {
    // cohort1806: 9,
    // cohort1804: 10.5
    // }

    const instructorsByCohort = instructors.reduce((newObject, currentInstructor) => {
      newObject[currentInstructor.module] || (newObject[currentInstructor.module] = []);
      newObject[currentInstructor.module].push(currentInstructor.name)
      return newObject
    }, {})

    return cohorts.reduce((newObject, currentCohort) => {
      newObject[`cohort${currentCohort.cohort}`] = (currentCohort.studentCount / instructorsByCohort[currentCohort.module].length)
      return newObject;
    }, {});

    // Annotation:
    // reduce to a new object
    // iterate over cohorts
    // for each cohort, create the key or set it equal to a number
    // the number is studentCount divided by the number of teachers that teach that cohort
    // the number of teachers taht teach the cohort will be in the new object as newObject[module].length

    // to find the number of teachers that teach each cohort:
    // reduce instructors to a new object
    // check to see if the current instructor's module is a key, if not create it and set it equal to an array
    // push the name of the instructor into the array
    // return the new object
  },

  modulesPerTeacher() {
    // Return an object where each key is an instructor name and each value is
    // an array of the modules they can teach based on their skills. e.g.:
    // {
    //     Pam: [2, 4],
    //     Brittany: [2, 4],
    //     Nathaniel: [2, 4],
    //     Robbie: [4],
    //     Leta: [2, 4],
    //     Travis: [1, 2, 3, 4],
    //     Louisa: [1, 2, 3, 4],
    //     Christie: [1, 2, 3, 4],
    //     Will: [1, 2, 3, 4]
    //   }

    return instructors.reduce((newObject, currentInstructor) => {
      let modsByTeacher = [];
      cohorts.forEach(cohort => {
        cohort.curriculum.forEach(subject => {
          if (currentInstructor.teaches.includes(subject) && !modsByTeacher.includes(cohort.module)) {
            return modsByTeacher.push(cohort.module)
          }
        })
      })
      
      newObject[currentInstructor.name] = modsByTeacher;
      return newObject;
    }, {})

    // Annotation:
    // reduce to a new object
    // iterate over instructors array
    // for each instructor, add their name as a key to the new object
    // set them equal to the modules they can teach
    // to get the modules they can teach, iterate over cohorts
    // for each cohort, iterate over curriculum
    // for each subject, check to see if the instructor's subjects include that subject
    // if yes, return that module - as long as it's not already in the array (no dupes)
  },

  curriculumPerTeacher() {
    // Return an object where each key is a curriculum topic and each value is
    // an array of instructors who teach that topic e.g.:
    // {
    //   html: [ 'Travis', 'Louisa' ],
    //   css: [ 'Travis', 'Louisa' ],
    //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
    //   recursion: [ 'Pam', 'Leta' ]
    // }

    return cohorts.reduce((newObject, currentCohort) => {
      currentCohort.curriculum.forEach(subject => {
        newObject[subject] || (newObject[subject] = [])
      
        instructors.forEach(instructor => {
          if (instructor.teaches.includes(subject) && !newObject[subject].includes(instructor.name)) {
            newObject[subject].push(instructor.name)
          }
        })
      })
      return newObject;
    }, {})

    // Annotation:
    // reduce to new object
    // iterate over cohorts
    // for each cohort, iterate over curriculum
    // if newObject does not already contain subject as a key, create it and set equal to an empty array
    // iterate over instructors
    // for each instructor, if teaches includes subject, push name of teacher into new object at key of subject
    // return new object
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: bosses, sidekicks from ./datasets/bosses
const bossPrompts = {
  bossLoyalty() {
    // Create an array of objects that each have the name of the boss and the sum
    // loyalty of all their sidekicks. e.g.:
    // [
    //   { bossName: 'Jafar', sidekickLoyalty: 3 },
    //   { bossName: 'Ursula', sidekickLoyalty: 20 },
    //   { bossName: 'Scar', sidekickLoyalty: 16 }
    // ]

    const bossNames = Object.keys(bosses);
    
    return bossNames.map(boss => {
      let bossName = bosses[boss].name;
      let combinedLoyalty = bosses[boss].sidekicks.reduce((totalLoyalty, currentSidekick) => {
        sidekicks.forEach(sidekick => {
          if (sidekick.name === currentSidekick.name) {
            totalLoyalty += sidekick.loyaltyToBoss;
          }
        })
        return totalLoyalty
      }, 0);

      return {
        bossName: bossName,
        sidekickLoyalty: combinedLoyalty
      };
    });

    // Annotation:
    // get array of boss keys = bosses
    // iterate over bosses array
    // map new array
    // for each boss, add their name as a value
    // for each boss, reduce all sidekick loyalty to a single number
    // iterate over their sidekicks
    // for each sidekick, iterate over the sidekicks array
    // if the current sidekicks name matches the bosses sidekick, create a key that has their loyalty
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: constellations, stars } from ./datasets/astronomy
const astronomyPrompts = {
  starsInConstellations() {
    // Return an array of all the star objects that appear in any of the constellations
    // listed in the constellations object e.g.
    // [
    //   { name: 'Rigel',
    //     visualMagnitude: 0.13,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 860,
    //     color: 'blue' 
    //   },
    //   {
    //     name: 'Achernar',
    //     visualMagnitude: 0.46,
    //     constellation: 'The Plow',
    //     lightYearsFromEarth: 140,
    //     color: 'blue'
    //   },
    //   { name: 'Betelgeuse',
    //     visualMagnitude: 0.5,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 640,
    //     color: 'red' 
    //   },
    //   {
    //     name: 'Hadar',
    //     visualMagnitude: 0.61,
    //     constellation: 'The Little Dipper',
    //     lightYearsFromEarth: 350,
    //     color: 'blue'
    //   }
    // ]

    const constellationNames = Object.keys(constellations)
    const allStars = constellationNames.reduce((newArray, currentConst) => {
      constellations[currentConst].starNames.forEach(star => {
        if (!newArray.includes(star)) {
          newArray.push(star);
        }
      })
      return newArray;
    }, [])

    return stars.filter(star => (allStars.includes(star.name)))  

    // Annotation:
    // reduce star names to a single array
    // filter stars array
    // if star names array includes that star's name, return the star
  },

  starsByColor() {
    // Return an object with keys of the different colors of the stars,
    // whose values are arrays containing the star objects that match e.g.
    // {
    //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
    //   white: [{obj}, {obj}],
    //   yellow: [{obj}, {obj}],
    //   orange: [{obj}],
    //   red: [{obj}]
    // }

    return stars.reduce((newObject, currentStar) => {
      newObject[currentStar.color] || (newObject[currentStar.color] = []);
      newObject[currentStar.color].push(currentStar)
      return newObject;
    }, {})

    // Annotation:
    // Write your annotation here as a comment
  },

  constellationsStarsExistIn() {
    // Sort the stars by brightness and return an array of the star's constellation names
    // Brightest Stars are indicated by visualMagnitude - the lower the number, the brighter the star
    // e.g.
    //  [ "Canis Major",
    //    "Carina",
    //    "Boötes",
    //    "Auriga",
    //    "Orion",
    //    "Lyra",
    //    "Canis Minor",
    //    "The Plow",
    //    "Orion",
    //    "The Little Dipper" ]


    return stars.sort((a, b) => a.visualMagnitude - b.visualMagnitude).filter(star => star.constellation.length).map(star => star.constellation);

    // Annotation:
    // sort stars by visual magnitude
    //map constellations
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: charaters, weapons from ./datasets/ultima
const ultimaPrompts = {
  totalDamage() {

    // Return the sum of the amount of damage for all the weapons that our characters can use
    // Answer => 113

    return characters.reduce((totalDamage, currentChar) => {
      currentChar.weapons.forEach(weapon => {
        totalDamage += weapons[weapon].damage
      })
      return totalDamage
    }, 0)

    // Annotation:
    // reduce characters to a single object
    // iterate over each weapons array
    // for each weapon, add the damage to the total damage
    // return total damage
  },

  charactersByTotal() {

    // Return the sum damage and total range for each character as an object.
    // ex: [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}

    return characters.map(character => {
      const weaponsObject = character.weapons.reduce((newObject, currentWeapon) => {
        newObject.damage += weapons[currentWeapon].damage;
        newObject.range += weapons[currentWeapon].range;
        return newObject;
      }, {damage: 0, range: 0})
      
      return {
        [character.name]: weaponsObject
      }
    })

    // Annotation:
    // map a new array of characters
    // key is name
    // value is a new object
    // reduce character's weapons to new object
    // for each weapon, add its damage and range to the object;
  },
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: dinosaurs, humans, movies from ./datasets/dinosaurs
const dinosaurPrompts = {
  countAwesomeDinosaurs() {
    // Return an object where each key is a movie title and each value is the
    // number of awesome dinosaurs in that movie. e.g.:
    // {
    //   'Jurassic Park': 5,
    //   'The Lost World: Jurassic Park': 8,
    //   'Jurassic Park III': 9,
    //   'Jurassic World': 11,
    //   'Jurassic World: Fallen Kingdom': 18
    // }

    return movies.reduce((newObject, currentMovie) => {
      newObject[currentMovie.title] || (newObject[currentMovie.title] = currentMovie.dinos.reduce((numAwesome, currentDino) => {
        if (dinosaurs[currentDino].isAwesome) {
          numAwesome += 1;
        }
        return numAwesome
      }, 0))
      return newObject;
    }, {})
 
    // Annotation:
    // reduce movies to a single object
    // key is movie title
    // value is number awesome dinos
    // reduce movie dinos to a single number
    // for each dino, if it is awesome add 1 to the number
    // return the number
    //return new object
  },

  averageAgePerMovie() {
    /* Return an object where each key is a movie director's name and each value is
        an object whose key is a movie's title and whose value is the average age
        of the cast on the release year of that movie.
      e.g.:
      {
        'Steven Spielberg':
          {
            'Jurassic Park': 34,
            'The Lost World: Jurassic Park': 37
          },
        'Joe Johnston':
          {
            'Jurassic Park III': 44
          },
        'Colin Trevorrow':
          {
            'Jurassic World': 56
           },
        'J. A. Bayona':
          {
            'Jurassic World: Fallen Kingdom': 59
          }
      }
    */

    return movies.reduce((newObject, currentMovie) => {
      newObject[currentMovie.director] || (newObject[currentMovie.director] = movies.reduce((innerObj, innerMovie) => {
        if (innerMovie.director === currentMovie.director) {
          let totalAge;
          
          totalAge = innerMovie.cast.reduce((total, currentCast) => {
            let castAge = parseInt(innerMovie.yearReleased) - parseInt(humans[currentCast].yearBorn)
            total += castAge;
            return total
          }, 0);

          innerObj[innerMovie.title] = Math.floor(totalAge /(innerMovie.cast.length));
        }
        return innerObj;
      }, {})
      )
      return newObject;
    }, { })

    // Annotation:
    // reduce movies to a new object
    // create a key that is the director's name (if it does not already exist)
    // value - reduce movies to another new object
    // for each movie at the current director's name, create a key for that movie
    // calculate the average age of the cast
    //  iterate over the cast array
    //  access humans at cast member
    //  add (2023 - year born) to total age
    //  divide total age by length of cast array
    // assign average age as value
  },

  uncastActors() {
    /*
    Return an array of objects that contain the names of humans who have not been cast in a Jurassic Park movie (yet), their nationality, and their imdbStarMeterRating. The object in the array should be sorted alphabetically by nationality.

    e.g.
      [{
        name: 'Justin Duncan',
        nationality: 'Alien',
        imdbStarMeterRating: 0
      },
      {
        name: 'Karin Ohman',
        nationality: 'Chinese',
        imdbStarMeterRating: 0
      },
      {
        name: 'Tom Wilhoit',
        nationality: 'Kiwi',
        imdbStarMeterRating: 1
      }, {
        name: 'Jeo D',
        nationality: 'Martian',
        imdbStarMeterRating: 0
      }]
    */

    const humanNames = Object.keys(humans);
    const humansInMovies = movies.reduce((newArray, currentMovie) => {
      currentMovie.cast.forEach(castMember => {
        if (!newArray.includes(castMember)) {
          newArray.push(castMember);
        }
      })
      return newArray;
    }, [])
    const uncastHumans = humanNames.filter(human => !humansInMovies.includes(human))

    const uncastActors = uncastHumans.map(human => {
      return {
        name: human,
        nationality: humans[human].nationality,
        imdbStarMeterRating: humans[human].imdbStarMeterRating
      }
    })

    return uncastActors.sort((a, b) => (a.nationality > b.nationality) ? 1 : -1)

    // Annotation:
    // filter humans
    // iterate over movies array
    // for each movie, if the cast array does not contain the current human's name, return the human
    // map a new array - delete their yearBorn and sort alphabetically by nationality
  },

  actorsAgesInMovies() {
    /*
    Return an array of objects for each human and the age(s) they were in the movie(s) they were cast in, as an array of age(s). Only include humans who were cast in at least one movie.

    e.g.
    [ { name: 'Sam Neill', ages: [ 46, 54 ] },
      { name: 'Laura Dern', ages: [ 26, 34 ] },
      { name: 'Jeff Goldblum', ages: [ 41, 45, 63, 66 ] },
      { name: 'Richard Attenborough', ages: [ 70, 74, 92, 95 ] },
      { name: 'Ariana Richards', ages: [ 14, 18 ] },
      { name: 'Joseph Mazello', ages: [ 10, 14 ] },
      { name: 'BD Wong', ages: [ 33, 55, 58 ] },
      { name: 'Chris Pratt', ages: [ 36, 39 ] },
      { name: 'Bryce Dallas Howard', ages: [ 34, 37 ] } ]
    */

    const actors = movies.reduce((newArray, currentMovie) => {
      currentMovie.cast.forEach(person => {
        newArray.includes(person) || newArray.push(person);
      })
      return newArray;
    }, []);
    
    return actors.map(currentActor => {
      let newObject = {
        name: currentActor,
        ages: []
      }
      movies.forEach(movie => {
        if (movie.cast.includes(currentActor)) {
          newObject.ages.push(parseInt(movie.yearReleased - humans[currentActor].yearBorn))
        }
      })
      return newObject;
    });

    // Annotation:
    // reduce movies to an array of actors with no repeats
    // map array to an array of objects
    // for each actor, let a key/value be their name
    // for each actor, let a key be their ages
    // to get ages value:
    //  iterate over movies array
    //  if cast includes the actor's name
    //  subtract year born from year released to get release age
    //  push release age into ages array
    // return new object
  }
};

module.exports = {
  breweryPrompts,
  turingPrompts,
  clubPrompts,
  bossPrompts,
  classPrompts,
  modPrompts,
  kittyPrompts,
  cakePrompts,
  astronomyPrompts,
  ultimaPrompts,
  nationalParksPrompts,
  weatherPrompts,
  bookPrompts,
  dinosaurPrompts,
  boardGamePrompts,
};

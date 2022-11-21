import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'
import { httpService } from './http.service.js'


// const toy = {
//     "_id": "t101",
//     "name": "Talking Doll",
//     "price": 123,
//     "labels": ["Doll", "Battery Powered", "Baby"],
//     "createdAt": 1631031801011,
//     "inStock": true
// }

// const labels = [
//     "On wheels",
//     "Box game",
//     "Art",
//     "Baby",
//     "Doll",
//     "Puzzle",
//     "Outdoor",
//     "Battery Powered"
// ]

const reviews = [
    {
        txt: 'Great toy!',
        createdAt: 1631531801011,
        rate: 4
    },
    {
        txt: 'Great toy!',
        createdAt: 1631531801011,
        rate: 4
    },
    {
        txt: 'Great toy!',
        createdAt: 1631531801011,
        rate: 4
    },
]

const TOY_KEY = 'toysDB'
const TOY_URL = '/api/toy/'

function query() {
    return storageService.queryWithDelay(TOY_KEY).then(toys => {
        // console.log('toys:', toys)
        if (!toys || !toys.length) {
            toys = _createToys()
            storageService.postMany(TOY_KEY, toys)
        }
        return toys
    })
    // return httpService.get(TOY_URL).then(res => res.data)
}

function save(toy) {
    return toy._id ? _update(toy) : _add(toy)
}

function _add(addedToy) {
    debugger
    const newToy = _createToy({ ...addedToy })
    return storageService.post(TOY_KEY, newToy)
    // return axios.post(TOY_URL, addedToy).then(res => res.data)
}

function _update(updatedToy) {
    // updatedToy.modifiedAt = Date.now()
    return storageService.put(TOY_KEY, updatedToy)
    // return axios.put(TOY_URL + updatedToy._id, updatedToy).then(res => res.data)
}

function remove(toyId) {
    return storageService.remove(TOY_KEY, toyId)
    // return axios.delete(TOY_URL + toyId).then(res => res.data)
}

function getById(toyId) {
    return storageService.get(TOY_KEY, toyId)
        .then(toy => {
            const toyCopy = JSON.parse(JSON.stringify(toy))
            toyCopy.reviews = reviews
        })
    // return axios.get(TOY_URL + toyId).then(res => res.data)
}

export default {
    query,
    getById,
    save,
    remove,
    getEmptyToy
}

function getEmptyToy() {
    return {
        _id: '',
        name: '',
        price: 0,
        labels: [],
        createdAt: null,
        inStock: true
    }
}




function _createToys() {
    return [
        _createToy('Talking Doll', 123, ['Doll', 'Battery Powered', 'Baby'], 1631031801011, true),
        _createToy('Dinosaur', 50, ['Doll', 'Battery Powered'], 1631031801011, true),
        _createToy('Talisman', 100, ['Box game'], 1631031801011, false),
        _createToy('1000pc Sunset Puzzle', 149, ['Puzzle', 'Art'], 1631031801011, true),
        _createToy('Playdough', 15, ['Outdoor', 'Art', 'Baby'], 1631031801011, true),
        _createToy('G.I. Joe', 25, ['Doll', 'Battery Powered'], 1631031801011, false),
        _createToy('Racing Car', 35, ['On wheels', 'Battery Powered'], 1631031801011, true),
    ]
}

function _createToy({ name, price, labels, createdAt, inStock }) {
    return {
        _id: utilService.makeId(),
        name,
        price,
        labels,
        createdAt,
        inStock
    }
}
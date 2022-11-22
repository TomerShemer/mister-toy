import toyService from '../../services/toy.service.js'

const PAGE_SIZE = 3

export default {
    state: {
        toys: null,
        filterBy: {
            txt: '',
            inStock: false,
            labels: [],
            sort: '',
        },
        labels: toyService.getLabels()
    },
    getters: {
        toys(state) {
            return state.toys
        },
        getLabels(state) {
            return state.labels
        },
        getPricePerLabel(state) {
            if (!state.toys) return
            const avg = toyService.getLabels().map(label => {
                const total = state.toys.reduce((acc, toy) => {
                    if (toy.labels.includes(label)) {
                        acc.sum += toy.price
                        acc.toys++
                    }
                    return acc
                }, { toys: 0, sum: 0 })
                return (total.sum / total.toys).toFixed(2)
            })
            return avg
        },
        getToysInStockByLabel(state) {
            if (!state.toys) return
            const toysInStock = toyService.getLabels().map(label => {
                const total = state.toys.reduce((acc, toy) => {
                    if (toy.labels.includes(label)) {
                        acc.toys++
                        if (toy.inStock) acc.inStock++
                    }
                    return acc
                }, { toys: 0, inStock: 0 })
                return (total.inStock / total.toys * 100).toFixed()
            })
            return toysInStock
        },
        getLabelsSelect(state) {
            return state.labels.map(label => {
                return { value: label, label }
            })
        }
    },
    mutations: {
        setToys(state, { toys }) {
            state.toys = toys
        },
        setFilter(state, { filterBy }) {
            state.filterBy = filterBy
        },
        saveToy({ toys }, { toy }) {
            const idx = toys.findIndex(currToy => currToy._id === toy._id)
            if (idx !== -1) toys.splice(idx, 1, toy)
            else toys.unshift(toy)
        },
        removeToy({ toys }, { toyId }) {
            const idx = toys.findIndex((toy) => toy._id === toyId)
            if (idx === -1) {
                console.log("Can't remove toy " + toyId)
                return
            }
            toys.splice(idx, 1)
        },
    },
    actions: {
        loadToys({ commit, state }) {
            toyService.query(state.filterBy).then((toys) => {
                commit({ type: 'setToys', toys })
            })
        },
        saveToy({ commit, dispatch }, { toy }) {
            console.log('Saving')
            // const isEdit = toy._id
            // return toyService.save(toy).then(toy => {
            //     const type = isEdit ? 'updateToy' : 'addToy'
            //     // if (isEdit) commit({ type: 'updateToy', toy })
            //     // else commit({ type: 'addToy', toy })
            //     commit({ type, toy })
            // })
            toyService.save(toy).then((toy) => {
                commit({ type: 'saveToy', toy })
            })
        },
        removeToy({ commit, dispatch }, { toyId }) {
            console.log('Store remove toyId', toyId)
            // return toyService.remove(toyId).then(removedToy => {
            //     commit({ type: 'removeToy', toyId })
            //     // dispatch({ type: 'setUserActivities', txt: 'Toy was removed', toy: removedToy })
            // })
            toyService.remove(toyId).then(() => {
                commit({ type: 'removeToy', toyId })
            })
        },
        getToyById(context, { toyId }) {
            // console.log(context)
            return toyService.getById(toyId)
        },
        setFilter(context, { filterBy }) {
            // console.log(filterBy)
            context.commit({ type: 'setFilter', filterBy })
            context.dispatch({ type: 'loadToys' })
        },
    },
}

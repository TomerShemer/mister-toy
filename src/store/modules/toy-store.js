import toyService from '../../services/toy.service.js'

const PAGE_SIZE = 3

export default {
    state: {
        toys: null,
        // filterBy: {
        //     txt: '',
        //     inStock: false,
        //     labels: [],
        //     sort: '',
        // },
    },
    getters: {
        toys(state) {
            return state.toys
        },
        toysForDisplay(state) {
            if (!state.toys) return
            const asc = state.sortBy?.isAsc ? -1 : 1
            let filteredToys
            // if (!state.filterBy.txt && state.filterBy.status === 'All') filteredToys = JSON.parse(JSON.stringify(state.toys))
            // else {
            //     if (state.filterBy.status === 'Active') {
            //         filteredToys = state.toys.filter(toy => toy.isActive)
            //     } else if (state.filterBy.status === 'Done') {
            //         filteredToys = state.toys.filter(toy => !toy.isActive)
            //     } else {
            //         filteredToys = state.toys
            //     }
            //     filteredToys = filteredToys.filter(toy => new RegExp(state.filterBy.txt, 'i').test(toy.txt))
            // }
            // PAGING
            let startIdx = state.filterBy.page * PAGE_SIZE
            let endIdx = startIdx + PAGE_SIZE

            const sortBy = state.sortBy?.val
            // return filteredToys?.slice(startIdx, endIdx).sort((t1, t2) => (t1[sortBy] > t2[sortBy] ? 1 * asc : -1 * asc))
            return filteredToys?.slice(startIdx, endIdx)
        },
        getLabels() {
            return toyService.getLabels()
        }
    },
    mutations: {
        setToys(state, toys) {
            state.toys = toys
        },
        updateToy({ toys }, { toy }) {
            const idx = toys.findIndex(_toy => _toy._id === toy._id)
            if (idx === -1) {
                console.log("Can't update toy " + toy._id)
                return
            }
            toys.splice(idx, 1, toy)
        },
        addToy({ toys }, { toy }) {
            console.log('Adding!!')
            toys.push(toy)
        },
        // setFilterBy(state, { filterBy }) {
        //     state.filterBy = { ...state.filterBy, ...filterBy }
        //     console.log(state.filterBy)
        // },
        // setSortBy(state, { sortBy }) {
        //     state.sortBy = sortBy
        // },
        setPage(state, { diff }) {
            const toyLength = state.toys?.length
            let maxPage = toyLength / PAGE_SIZE
            if (Number.isInteger(toyLength / PAGE_SIZE)) maxPage--
            else maxPage = Math.floor(maxPage)

            let page = state.filterBy.page + diff
            if (page < 0) state.filterBy.page = maxPage
            else if (page > maxPage) state.filterBy.page = 0
            else state.filterBy.page = page
        },
        removeToy({ toys }, { toyId }) {
            const idx = toys.findIndex(toy => toy._id === toyId)
            if (idx === -1) {
                console.log("Can't remove toy " + toyId)
                return
            }
            toys.splice(idx, 1)
        },
    },
    actions: {
        loadToys({ commit }) {
            toyService.query().then(toys => {
                console.log("🚀 ~ file: toy-store.js ~ line 84 ~ toyService.query ~ toys", toys)
                commit('setToys', toys)

            })
        },
        saveToy({ commit, dispatch }, { toy }) {
            debugger
            console.log('Saving')
            const isEdit = toy._id
            return toyService.save(toy).then(toy => {
                const type = isEdit ? 'updateToy' : 'addToy'
                // if (isEdit) commit({ type: 'updateToy', toy })
                // else commit({ type: 'addToy', toy })
                commit({ type, toy })
            })
        },
        removeToy({ commit, dispatch }, { toyId }) {
            console.log('Store remove toyId', toyId)
            return toyService.remove(toyId).then(removedToy => {
                commit({ type: 'removeToy', toyId })
                // dispatch({ type: 'setUserActivities', txt: 'Toy was removed', toy: removedToy })
            })
        },
        getToyById(context, { toyId }) {
            console.log(context)
            return toyService.getById(toyId)
        },
    },
}

<template>
    <section class="toy-app">
        <h1>Toy App</h1>
        <button @click="goToEdit">Add a new toy</button>
        <keep-alive>
            <toy-filter @setFilter="setFilter" />
        </keep-alive>
        <toy-list @removeToy="removeToy" v-if="toys" :toys="toysToShow" />
    </section>
</template>

<script>
import toyFilter from '../components/toy-filter.vue'
import toyList from '../components/toy-list.vue'
export default {
    name: 'toy-app',
    props: [],
    data() {
        return {
            filterBy: null
        }
    },
    created() { },
    methods: {
        goToEdit() {
            this.$router.push('/toy/edit')
        },
        removeToy(toyId) {
            this.$store.dispatch({ type: 'removeToy', toyId })
        },
        setFilter(filterBy) {
            this.filterBy = filterBy
        }
    },
    computed: {
        toys() {
            return this.$store.getters.toys
        },
        toysToShow() {
            // return this.toys
            if (!this.filterBy) return this.toys

            let filteredToys = JSON.parse(JSON.stringify(this.toys))
            const { txt, inStock, labels, sort } = this.filterBy
            if (inStock) {
                filteredToys = filteredToys.filter(toy => {
                    return toy.inStock
                })
            }

            if (txt) {
                const regex = new RegExp(this.filterBy.txt, 'i')
                filteredToys = filteredToys.filter(toy => {
                    return regex.test(toy.name)
                })
            }

            // if (labels.length) {
            //     filteredToys = filteredToys.filter(toy => {

            //     })
            // }

            if (sort) {
                if (sort === 'name') filteredToys.sort((a, b) => {
                    return a.name.localeCompare(b.name)
                })
                else if (sort === 'price') {
                    filteredToys.sort((a, b) => a.price - b.price)
                } else if (sort === 'created') {
                    filteredToys.sort((a, b) => a.createdAt - b.createdAt)
                }
            }
            return filteredToys
        }
    },
    components: {
        toyList,
        toyFilter
    }
}
</script>

<style lang="scss" scoped>

</style>
<template>
    <section class="toy-filter">
        <h1>Toy Filter</h1>
        <input v-model="filterBy.txt" @input="setFilter" type="text" placeholder="Search by name" />
        <div>
            <input @change="setFilter" v-model="filterBy.inStock" type="checkbox" id="inStockCheckbox" />
            <label for="inStockCheckbox"> In stock</label>
        </div>
        <div>
            <label for="sort">Sort: </label>
            <select @change="setFilter" v-model="filterBy.sort" id="sort">
                <option value="">No sort</option>
                <option value="name">Name</option>
                <option value="price">Price</option>
                <option value="created">Created</option>
            </select>
        </div>
    </section>
</template>

<script>
// import multiSelect from './multi-select.vue';
export default {
    data() {
        return {
            filterBy: {
                txt: '',
                inStock: false,
                labels: [],
                sort: '',
            }
        }
    },
    components: {
        // multiSelect
    },
    methods: {
        setFilter() {
            this.$emit('setFilter', this.filterBy)
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
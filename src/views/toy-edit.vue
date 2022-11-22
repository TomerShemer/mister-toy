<template>
    <section v-if="toyToEdit" className='toy-edit'>
        <button @click="goBack">Go Back</button>
        <h1>Toy Edit</h1>
        <form @submit.prevent="saveToy">
            <label for="txt">
                Name:
                <input type="text" v-model="toyToEdit.name" id="txt" placeholder="Toy name">
            </label>
            <label for="price">
                Price:
                <input type="number" v-model="toyToEdit.price" id="price" placeholder="Price">
            </label>
            <label>
                In stock:
                <select v-model="toyToEdit.inStock">
                    <option :value="true">Yes</option>
                    <option :value="false">No</option>
                </select>
            </label>
            <label for="labels">
                Labels:
                <multi-select @updateLabel="updateLabel" :toyToEdit="toyToEdit" />
            </label>
            <button>Save</button>
        </form>
    </section>
</template>

<script>
import toyService from '../services/toy.service'
import multiSelect from '../components/multi-select.vue'
export default {
    name: 'toy-edit',
    data() {
        return {
            toyToEdit: null
        }
    },
    created() {
        const { id } = this.$route.params
        if (id) {
            toyService.getById(id).then((toy) => {
                this.toyToEdit = (toy)
            })
        } else this.toyToEdit = toyService.getEmptyToy()
    },
    methods: {
        saveToy() {
            if (!this.toyToEdit.createdAt) this.toyToEdit.createdAt = Date.now()
            this.$store.dispatch({ type: 'saveToy', toy: this.toyToEdit }).then(() => {
                this.$router.push('/toy')
            })
        },
        goBack() {
            this.$router.push('/toy')
        },
        updateLabel(labels) {
            this.toyToEdit.labels = labels
        }
    },
    computed: {},
    components: {
        multiSelect
    }
}
</script>
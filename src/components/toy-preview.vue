<template>
    <li v-if="toy" class="toy-preview">
        <custom-preview>
            <template #header>
                <p><span>Name:</span> {{ toy.name }}</p>
                <p><span>Price:</span> {{ toy.price }}</p>
                <p><span>Labels:</span> {{ getLabels }}</p>
                <!-- <p><span>Labels:</span> {{ toy.labels }}</p> -->
                <p><span>Created:</span> {{ getDate }}</p>
                <p><span>In Stock:</span> {{ toy.inStock }}</p>
            </template>

            <template #footer>
                <div class="preview-actions">
                    <button @click="goToDetails">Details</button>
                    <button @click="goToEdit">Edit</button>
                    <button @click="removeToy(toy._id)">X</button>
                </div>
            </template>
        </custom-preview>
    </li>
</template>

<script>
import customPreview from './custom-preview.vue';
export default {
    name: 'toy-preview',
    props: {
        toy: {
            type: Object,
            required: true
        }
    },
    components: {
        customPreview
    },
    computed: {
        getDate() {
            const d = new Date(this.toy.createdAt)
            return d.toLocaleDateString('he-IL')
        },
        getLabels() {
            return this.toy.labels.map(label => label).join(', ')
        }
    },
    methods: {
        goToDetails() {
            this.$router.push(`/toy/${this.toy._id}`)
        },
        goToEdit() {
            this.$router.push(`/toy/edit/${this.toy._id}`)
        },
        removeToy(toyId) {
            this.$emit('removeToy', toyId)
        }
    }
}
</script>
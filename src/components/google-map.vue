<template>
    <GoogleMap :api-key="process.env['secret-special-key']" style="width: 100%; height: 500px" :center="center"
        :zoom="10">
        <Marker @click="center = m.position" v-for="m in markers" :options="m">
            <InfoWindow>
                <div id="contet">
                    <div id="siteNotice"></div>
                    <h1 id="firstHeading" class="firstHeading">{{ m.title }}</h1>
                    <div id="bodyContent">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </InfoWindow>
        </Marker>
    </GoogleMap>
</template>
  
<script>
import { defineComponent } from 'vue'
import { GoogleMap, Marker, InfoWindow } from 'vue3-google-map'

export default defineComponent({
    components: { GoogleMap, Marker, InfoWindow },
    data() {
        return {
            center: { lat: 32.0853, lng: 34.7818 },
            markers: [
                {
                    id: 101,
                    title: 'TLV Mall',
                    label: 'TLV',
                    position: { lat: 32.06840135765523, lng: 34.7835729372922 }
                },
                {
                    id: 102,
                    title: 'Eilat Mall Hayam',
                    label: 'ELT',
                    position: { lat: 29.549946314888714, lng: 34.953885740973654 }
                },
                {
                    id: 103,
                    title: '7 Star Mall',
                    label: '7STR',
                    position: { lat: 32.16526917042715, lng: 34.8239289698393 }
                },
                {
                    id: 104,
                    title: 'Jerusalem',
                    label: 'JRS',
                    position: { lat: 31.7683, lng: 35.2137 }
                },
                {
                    id: 105,
                    title: 'Lod Mall Center',
                    label: 'LOD',
                    position: { lat: 31.946187994787085, lng: 34.89164137941423 }
                },
            ]
        }
    },
})
</script>
<template>
    <div>
        <h1>Create Streams</h1>
        <form v-on:submit.prevent = "createUser">
            <p>name: <input type="text" v-model="stream.name"></p>
            <p>platform: <input type="text" v-model="stream.platform"></p>
            <p>quality: <input type="text" v-model="stream.quality"></p>
            <p>price: <input type="text" v-model="stream.price"></p>
            <p>language sub: <input type="text" v-model="stream.language_sub"></p>
            <p>language dub: <input type="text" v-model="stream.language_dub"></p>
            <p><button type="submit">create stream</button></p>
        </form>
        <hr>
        <div>
            <p>name: {{ stream.name }}</p>
            <p>platform: {{ stream.platform }}</p>
            <p>quality: {{ stream.quality }}</p>
            <p>price: {{ stream.price }}</p>
            <p>language sub: {{ stream.language_sub }}</p>
            <p>language dub: {{ stream.language_dub }}</p>
        </div>
    </div>
</template>
<script>
import UserService from '@/services/UserService'
export default {
    data () {
        return {
            stream: {
                name: '',
                platform: '',
                quality: '',
                price: '',
                language_sub: '',
                language_dub: '',
                status: 'active'
            }
        }
    },
    methods: {
        async createUser () {
            try {
                await UserService.post(this.stream)
                this.$router.push({
                    name: 'streams'
                })
            } catch (err) {
                console.log(err)
            }
        }
    }
}
</script>
<style scoped>
</style>
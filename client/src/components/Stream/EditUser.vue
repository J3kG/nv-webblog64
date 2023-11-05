<template>
    <div>
        <h1>แก้ไขข้อมูล</h1>
        <form v-on:submit.prevent="editUser">
            <p>name: <input type="text" v-model="stream.name"></p>
            <p>platform: <input type="text" v-model="stream.platform"></p>
            <p>quality: <input type="text" v-model="stream.quality"></p>
            <p>price: <input type="text" v-model="stream.price"></p>
            <p>language sub: <input type="text" v-model="stream.language_sub"></p>
            <p>language dub: <input type="text" v-model="stream.language_dub"></p>
            <p><button type="submit">edit stream</button></p>
        </form>
    </div>
</template>
<script>
import UserService from '@/services/UserService'
export default {
    data() {
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
        async editUser() {
            try {
                await UserService.put(this.stream)
                this.$router.push({
                    name: 'streams'
                })
            } catch (err) {
                console.log(err)
            }
        }
    },
    async created() {
        try {
            let streamId = this.$forceUpdate.params.streamId
            this.stream = (await UserService.show(streamId)).data
        } catch (error) {
            console.log(error)
        }
    }
}
</script>
<style scoped></style>
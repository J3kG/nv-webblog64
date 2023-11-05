<template>
    <div>
        <h1>Show Streaming</h1>
        <p>id: {{ stream.id }}</p>
        <p>ชื่อ: {{ stream.name }}</p>
        <p>platform: {{ stream.platform }}</p>
        <p>quality: {{ stream.quality }}</p>
        <p>price: {{ stream.price }}</p>
        <p>language sub: {{ stream.language_sub }}</p>
        <p>language dub: {{ stream.language_dub }}</p>
    </div>
</template>
<script>
import UserService from '@/services/UserService'
export default {
    data () {
        return {
            stream: null
        }
    },
    async created () {
        try {
        let streamId = this.$route.params.streamId
        this.stream = (await UserService.show(streamId)).data
        } catch (error) {
            console.log (error)
        }
    }
}
</script>
<style scoped>
</style>
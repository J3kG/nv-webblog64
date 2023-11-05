<template>
    <div>
        <h1>ข้อมูลบริการ Streaming</h1>
        <div>จำนวนบริการ {{ streams.length }} </div>
        <div v-for="stream in streams" v-bind:key="stream.id">
            <p>ID: {{ stream.id }}</p>
            <p>ชื่อ: {{ stream.name }}</p>
            <p>Platform: {{ stream.platform }}</p>
            <p>Quality: {{ stream.quality }}</p>
            <p>Price: {{ stream.price }}</p>
            <p>Language Sub: {{ stream.language_sub }}</p>
            <p>Language Dub: {{ stream.language_dub }}</p>
            <p>
                <button v-on:click="navigateTo('/stream/' + stream.id)">ดูข้อมูลบริการ</button>
                <button v-on:click="navigateTo('/stream/create/')">สร้างข้อมูล</button>
                <button v-on:click="navigateTo('/stream/edit/' + stream.id)">แก้ไขข้อมูล</button>
                <button v-on:click="deleteUser(stream)">ลบข้อมูล</button>
            </p>
            <hr />
        </div>
    </div>
</template>
<script>
import UserService from '@/services/UserService';

export default {
    data() {
        return {
            streams: []
        }
    },
    async created() {
        this.streams = (await UserService.index()).data;
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        },
        async deleteUser(stream) {
            let result = confirm("Want to delete?");
            if (result) {
                try {
                    await UserService.delete(stream);
                    this.refreshData()
                } catch (err) {
                    console.log(err);
                }
            }
        },
        async refreshData() {
            this.streams = (await UserService.index()).data;
        }
    }
}
</script>
<style scoped></style>
<template>
    <div>
        <h1>Get All Users</h1>
        <div>จำนวนผู้ใช้งาน{{ users.length }} </div>
        <div v-for="user in users" v-bind:key="user.id">
            <p>id: {{ users[0].id }}</p>
            <p>ชื่อ-นามสกุล {{ users[0].name }} - {{ user[0].lastname }}</p>
            <p>email: {{ users[0].email }}</p>
            <p>password: {{ users[0].password }}</p>
            <p><button>ดูข้อมูลผู้ใช้งาน</button></p>
            <p><button v-on:click="logut">Logout</button></p>
        </div>
    </div>
</template>
<script>
import UserService from '@/services/UserService'

export default {
    data () {
        return {
            users: []
        }
    },
    async created () {
        try {
        let results = (await UserService.index()).data
        console.log(results)
        } catch (error) {
            console.log (error)
        }
    },
    methods: {
        navigateTo (route) {
            this.$router.push(route)
        },
    }
}
</script>
<style scoped>

</style>
<template>
    <div>
        <h1>Get All Users</h1>
        <div v-if="users.length">
            <div>จำนวนผู้ใช้งาน{{ users.length }} </div>
            <div>id: {{ users[0].id }}</div>
            <div>ชื่อ-นามสกุล {{ users[0].name }} - {{ user[0].lastname }}</div>
            <div>email: {{ users[0].email }}</div>
            <div>password: {{ users[0].password }}</div>
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
        let results = (await UserService.index()).data
        console.log(results)
    }
}
</script>
<style scoped>

</style>
<template>
    <div>
        <h1>Edit User</h1>
        <form v-on:submit.prevent = "editUser">
            <p>name: <input type="text" v-model="user.name"></p>
            <p>lastname: <input type="text" v-model="user.lastname"></p>
            <p>email: <input type="text" v-model="user.email"></p>
            <p>password: <input type="text" v-model="user.password"></p>
            <p><button v-on:click="navigateTo('/user/'+ user.id)">ดูข้อมูลผู้ใช้งาน</button>
            <button v-on:click="navigateTo('/user/edit/'+     user.id)">แก้ไขข้อมูล</button></p>
            <hr>
            <h4>จำนวนผู้ใช้งาน{{ user.length }}</h4>
            <p><button v-on:click="navigateTo('/user/create')">สร้างผู้ใช้</button></p>
            <div v-for="user in users" v-bind:key="user.id"></div>
        </form>
    </div>
    <hr>
    <div>
        <p>name: {{ user.name }}</p>
        <p>lastname: {{ user.lastname }}</p>
        <p>email: {{ user.email }}</p>
        <p>password: {{ user.password }}</p>
        <p></p>
    </div>
</template>
<script>
import UserService from '@/services/UserService'
export default {
    data () {
        return {
            user: {
                name: '',
                lastname: '',
                email: '',
                password: '',
                status: 'active'
            }
        }
    },
    methods: {
        async editUser () {
            try {
                await UserService.put(this.user)
                this.$router.push({
                    name: 'users'
                })
            } catch (err) {
                console.log(err)
            }
        }
    },
    async created () {
        try {
            let userId = this.$forceUpdate.params.userId
            this.user = (await UserService.show(userId)).data
        } catch (error) {
            console.log(error)
        }
    }
}
</script>
<style scoped>
</style>
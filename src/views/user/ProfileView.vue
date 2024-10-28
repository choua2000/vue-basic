<script setup>
import UserLayout from '@/layouts/userLayout.vue'
import { ref, onMounted, reactive } from 'vue'
import { useEventStore } from '@/stores/Event'

const eventStore = useEventStore()
const userForm = [
  { name: 'Email', field: 'email' },
  { name: 'Name', field: 'name' }
]

const userData = reactive({
  imageUrl: 'https://mikelopster.dev/mikelopster.da6b9a03.webp',
  email: '',
  name: ''
})


onMounted(() => {
  const savedUserProfile = localStorage.getItem('user-profile')
  if (savedUserProfile) {
    const userProfile = JSON.parse(savedUserProfile)
    userData.imageUrl = userProfile.imageUrl
    userData.email = userProfile.email
    userData.name = userProfile.name
  }
})
const profileImageURL = ref({})
const handleFileChange = (event) => {
  const file = event.target.files[0]

  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      userData.imageUrl = e.target.result
    }
    reader.readAsDataURL(file)
  }
}

const updateProfile = () => {
  localStorage.setItem('user-profile', JSON.stringify(userData))
  eventStore.popupMessage('Success update profile')
}
</script>


<template>
    <UserLayout>
        <div class="mx-auto max-w-2xl p-4 bg-base-100 my-4 border border-base-200 shadow-md">
            <div class="font-bold text-2xl">Profile</div>

            <div class="flex flex-col items-center">
                <div class="avatar">
                    <div class="w-24 rounded-full">
                        <img class="w-24"
                            :src="userData.imageUrl"/>
                    </div>
                </div>
                <input type="file" @change="handleFileChange"><input>
                <div v-for="item in userForm" class="form-control w-full ">
                    <label class="label">
                        <span class="label-text">{{ item.name }}</span>
                    </label>
                    <input v-model="userForm[item.field]" type="text" placeholder="Type your data ..." class="input input-bordered w-full " />
                </div>
                <button class="btn btn-primary w-full mt-4" @click="updateProfile">Update profile</button>
            </div>
        </div>
    </UserLayout>
</template>



<style lang="scss" scoped></style>
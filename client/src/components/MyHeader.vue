<template>
    <guest-header v-if="authenticated"></guest-header>
    <user-header v-else></user-header>
</template>

<script>
import GuestHeader from '@/components/GuestHeader'
import UserHeader from '@/components/UserHeader'
export default {
    name: 'MyHeader',
    components: {GuestHeader, UserHeader},
    computed: {
        authenticated: () => {
            return true;
        }
    }
}
</script>


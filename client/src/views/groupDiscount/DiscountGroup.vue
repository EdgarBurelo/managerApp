<template>
    <div>Discount Group</div>
</template>

<script>
export default {
    name: 'DiscountGroup',
    props: {
        groupId: {
            type: String,
            required: true
        }
    },
    created () {
        // eslint-disable-next-line
        console.log(this.groupId)
    }
}
</script>

<style scoped>

</style>
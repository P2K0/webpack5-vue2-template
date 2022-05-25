<template>
  <div class="container">
    <p>Home</p>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  mounted() {
    this.getGood();
    this.getBad();
  },
  methods: {
    async getGood() {
      const [err, res] = await this.catchError(this.$api.test.getGood());
      if (err) return;

      console.log(`%c ${res}`, "font-size:20px; color:#00ff00;");
    },
    async getBad() {
      const [err] = await this.catchError(this.$api.test.getBad());
      if (err) console.error(err);
    }
  }
};
</script>

<style scoped lang="scss"></style>

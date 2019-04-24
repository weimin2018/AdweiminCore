<template>
  <div class="hello">
    <img
      alt="freelyman's logo"
      src="../assets/logome.png"
      id="freelymanlogo"
    >
    <div id="logoText">
      <h3>{{ msg }}</h3>
      <small>{{ msg_en }}</small>
    </div>
  </div>
</template>

<script>
export default {
  name: "LogoInfo",
  props: {
    msg: String,
    msg_en: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#freelymanlogo {
  height: 60px;
  width: 60px;
  display: inline-block;
  vertical-align: text-bottom;
}

#logoText {
  margin-left: 5px;
  display: inline-block;
}
h3 {
  margin: 10px 0 0;
}
small {
  font-family: Impact, Haettenschweiler, "Arial Narrow", sans-serif;
}
</style>

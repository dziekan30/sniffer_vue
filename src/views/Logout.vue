<template>
  <div class="logout">
  </div>
</template>

<script>
import axios from "axios";

export default {
  created: function() {
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    this.$parent.userId = "";
    localStorage.removeItem("userId");
    this.$router.push("/");
  }
};
</script>
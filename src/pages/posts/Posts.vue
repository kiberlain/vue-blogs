<template>
  <h1>Все посты - posts.vue</h1>


</template>


<script>

import { supabase } from "../../supabase";
import postsApi from "../../service/postsApi";


export default {
  setup() {
    postsApi.load()
  }
};
</script>

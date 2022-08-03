<template>
  <h1>Все посты - Infoposts.vue</h1>

  {{ posts }}
</template>

<script>
import ApiService from "../../service/ApiService";
import { supabase } from "../../supabase"


export default {
  
  setup() {
    ApiService.getAllPosts();
  }

};
</script>

<template>
  <form class="profile" @submit.prevent="updateProfile">
    <div class="profile-avatar">
      <Avatar v-model:path="avatar_url" @upload="updateProfile" />
    </div>
    <div class="profile-fields">
      <div class="profile-row">
        <label for="email">Email</label>
        <input id="email" type="text" :value="store.user.email" disabled />
      </div>
      <div class="profile-row">
        <label for="username">Имя</label>
        <input id="username" type="text" v-model="username" />
      </div>
      <div class="profile-row">
        <label for="info">Обо мне</label>
        <input id="info" type="info" v-model="info" />
      </div>

      <div class="profile-row">
        <b></b>
        <div class="profile-buttons">
          <input
            type="submit"
            :value="loading ? 'Загрузка ...' : 'Сохранить'"
            :disabled="loading"
          /><br />
          <button @click="signOut" :disabled="loading">Выйти</button>
        </div>
      </div>
    </div>
    <section class="profile-stats">
      <h2>Статистика</h2>
      <section class="stats-row">
        <dl class="stats">
          <dt><strong>2</strong> в процессе</dt>
          <dd>
            <ul>
              <li><router-link to="/post">Роутинг Vue</router-link></li>
              <li><router-link to="/post">Порталы</router-link></li>
            </ul>
          </dd>
        </dl>
        <dl class="stats">
          <dt><strong>3</strong> прочтено</dt>
          <dd>
            <ul>
              <li>
                <router-link to="/post">Паттерны проектирования</router-link>
              </li>
              <li><router-link to="/post">Философия React</router-link></li>
              <li><router-link to="/post">React хуки</router-link></li>
            </ul>
          </dd>
        </dl>
        <dl class="stats">
          <dt><strong>1</strong> в избранном</dt>
          <dd>
            <ul>
              <li><router-link to="/post">Всякие штуки</router-link></li>
            </ul>
          </dd>
        </dl>
      </section>
      <br />
      <hr />
      <br />

      <section class="journal">
        <h2>Журнал</h2>

        <ul>
          <li>
            Добавлен пост <router-link to="/post">Роутинг Vue</router-link>
          </li>
          <li>
            Изменён пост <router-link to="/post">Типы процессоров</router-link>
          </li>
          <li>
            <router-link to="/user">burzui</router-link> добавил ваш пост
            <router-link to="/post">Хуки</router-link> в избранное
          </li>
          <li>
            <router-link to="/user">burzui</router-link> оставил комментарий к
            посту
            <router-link to="/post">Хуки</router-link>
          </li>
          <li>Вы удалили пост "Японские иномарки"</li>
          <li>
            <router-link to="/user">burzui</router-link>,
            <router-link to="/user">laika</router-link> и
            <router-link to="/user">subzero</router-link> добавили вас в игнор
          </li>
        </ul>
      </section>
    </section>
  </form>
</template>

<script>
import { supabase } from "../supabase";
import { store } from "../store";
import { onMounted, ref } from "vue";
import Avatar from "../components/Avatar.vue";

export default {
  components: {
    Avatar,
  },
  setup() {
    const loading = ref(true);
    const username = ref("");
    const info = ref("");
    const avatar_url = ref("");

    async function getProfile() {
      try {
        loading.value = true;
        store.user = supabase.auth.user();

        let { data, error, status } = await supabase
          .from("profiles")
          .select(`username, info, avatar_url`)
          .eq("id", store.user.id)
          .single();

        if (error && status !== 406) throw error;

        if (data) {
          username.value = data.username;
          info.value = data.info;
          avatar_url.value = data.avatar_url;
        }
      } catch (error) {
        alert(error.message);
      } finally {
        loading.value = false;
      }
    }

    async function updateProfile() {
      try {
        loading.value = true;
        store.user = supabase.auth.user();

        const updates = {
          id: store.user.id,
          username: username.value,
          info: info.value,
          avatar_url: avatar_url.value,
          updated_at: new Date(),
        };

        let { error } = await supabase.from("profiles").upsert(updates, {
          returning: "minimal",
        });

        if (error) throw error;
      } catch (error) {
        alert(error.message);
      } finally {
        loading.value = false;
      }
    }

    async function signOut() {
      try {
        loading.value = true;
        let { error } = await supabase.auth.signOut();
        if (error) throw error;
      } catch (error) {
        alert(error.message);
      } finally {
        loading.value = false;
      }
    }

    onMounted(() => {
      getProfile();
    });

    return {
      store,
      loading,
      username,
      info,
      avatar_url,
      updateProfile,
      signOut,
    };
  },
};
</script>

<style scoped>
.stats-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0;
  gap: 0.5rem;
}
.stats dt:not(:first-child) {
  padding-top: 1rem;
}
.stats dd {
  display: flex;
  align-items: center;
  margin: 0;
  gap: 2rem;
}
.stats ul {
  margin: 0;
}

.profile li::before {
  top: 3px;
}

.profile {
  display: grid;
  grid-template-columns: 19em 1fr;
  grid-template-rows: 10em 1fr;
  grid-template-areas: "avatar stats" "fields stats";
  grid-gap: 3rem;
}

.profile-avatar {
  grid-area: avatar;
}
.profile-fields {
  grid-area: fields;
}
.profile-stats {
  grid-area: stats;
}

.profile-row {
  padding: 0.5rem 0;
}
.profile-row input {
  margin: 0;
}
.profile-row label {
  text-align: right;
}
.profile-buttons {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.profile-buttons input,
.profile-buttons button {
  margin: 0;
  height: 45px;
  border-radius: 5px;
}

#email:disabled {
  background-color: transparent;
  cursor: not-allowed;
  border: none;
  padding: 0;
  font-weight: bolder;
  font-size: 1.2em;
}

.stats ul:not(.reset-list) dd li::before {
  top: 0;
}
.stats dt {
  font-size: 1.5rem;
}

.stats dt strong {
  font-weight: 900;
  color: orangered;
}
</style>

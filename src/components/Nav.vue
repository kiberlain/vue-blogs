<template>
  <nav>
    <strong>Категории</strong>
    <ul>
      <li>
        <router-link to="/category">JavaScript</router-link>
      </li>
      <li>
        <router-link to="/category">React</router-link>
      </li>
      <li>
        <router-link to="/category">Patterns</router-link>
      </li>
      <li>
        <router-link to="/category">Vue</router-link>
      </li>
    </ul>
    <hr />
    <strong>Добавить</strong>
    <ul>
      <li>
        <router-link to="/create-category">категорию</router-link>
      </li>
      <li>
        <router-link to="/create-post">пост</router-link>
      </li>
    </ul>

    <br />
  </nav>
</template>

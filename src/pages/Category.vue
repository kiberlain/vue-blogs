<style scoped>
.articles-list {
  margin: 0;
}
.articles-list li {
  padding: 1rem 0;
}
.articles-list li + li {
  border-top: 1px solid lightblue;
}
.articles-list li::before {
  display: none;
}
</style>

<template>
  <header>
    <h1>Категория ReactJS</h1>
  </header>
  <ul class="articles-list">
    <!-- Здесь как я понимаю будет вывод какой-то информации?
      можно подготовить один шаблон для вывода и вынести информацию в articleData и выводить через v-for
       -->
    <li>
      <article class="article">
        <p class="article-header">
          <router-link to="/category">проектирование</router-link>,
          <router-link to="/category">паттерны</router-link> Автор:
          <router-link to="/user">naysy</router-link> 5/10/2022
        </p>
        <h2 class="article-title">
          <router-link to="/post">Паттерн фабрика</router-link>
        </h2>
        <p>
          <i
            >Фабричный метод — это порождающий паттерн проектирования, который
            определяет общий интерфейс для создания объектов в суперклассе,
            позволяя подклассам изменять тип создаваемых объектов.</i
          >
        </p>
        <p><small>12 просмотров | 5 комментариев</small></p>
      </article>
    </li>
    <li>
      <article class="article">
        <p class="article-header">
          <a href="">tag1</a>, <a href="">tag2</a>, <a href="">tag3</a> Автор:
          <a href="">naysy</a> 5/10/2022
        </p>
        <h2 class="article-title">
          <router-link to="/post">Название поста</router-link>
        </h2>
        <p>
          <i
            >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
            totam quo. Porro error, quia exercitationem nulla impedit officiis
            ipsum perspiciatis, iure, voluptatibus reiciendis reprehenderit
            quasi ipsa molestias quidem deleniti officia.</i
          >
        </p>
        <p><small>12 просмотров | 5 комментариев</small></p>
      </article>
    </li>
  </ul>
</template>

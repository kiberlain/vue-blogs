<template>
  <h1>Новый пост</h1>

  <form action="">
    <table>
      <tr>
        <td colspan="2">
          <input type="text" placeholder="Название поста" />
        </td>
      </tr>
      <tr>
        <td>
          <input
            list="list-of-categories"
            id="new-category"
            name="new-category"
            placeholder="Названия категорий через запятую"
          />
          <datalist id="list-of-categories">
            <option value="JavaScript" />
            <option value="React" />
            <option value="Хуки" />
            <option value="Что то ещё" />
          </datalist>
        </td>
        <td>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Краткое описание"
            style="max-height: 60px"
          ></textarea>
        </td>
      </tr>
      <tr>
        <td colspan="2">
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Здесь будет содержимое вашего поста"
          ></textarea>
        </td>
      </tr>
      <tr>
        <td colspan="2">
          <label for="weblink"
            >Также вы можете указать откуда взяли данную информацию</label
          >
          <input id="weblink" type="url" placeholder="ссылка на источник" />
        </td>
      </tr>
      <tr>
        <td colspan="2">
          <router-link to="/posts">Отменить</router-link> |
          <router-link to="/post">Добавить</router-link>
        </td>
      </tr>
    </table>
  </form>
</template>

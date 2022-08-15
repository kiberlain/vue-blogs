<template>
  <h1>Список пользователей</h1>

  <table>
    <thead>
      <tr>
        <th colspan="2">Юзернейм</th>
        <th>Дата регистрации</th>
        <th>Кратко</th>
        <th>Интересы</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td width="40">
          <img
            src="https://pbs.twimg.com/profile_images/670918459539202048/lA9k80ez_400x400.jpg"
            width="40"
            height="40"
            alt="Laika"
          />
        </td>
        <td>
          <router-link to="/">Laika</router-link>
        </td>
        <td>12.10.2022 16:01</td>
        <td>Не пониманю чё вообще происходит</td>
        <td>
          <router-link to="/category">приколы</router-link>,
          <router-link to="/category">всякая муть</router-link>,
          <router-link to="/category">vuejs</router-link>,
        </td>
      </tr>
      <tr>
        <td width="40">
          <img
            src="https://i.stack.imgur.com/33N8q.jpg?s=256&g=1"
            width="40"
            height="40"
            alt="burzuy"
          />
        </td>
        <td>
          <router-link to="/">burzuy</router-link>
        </td>
        <td>11.10.2022 16:01</td>
        <td>ТрудовыЕбудни</td>
        <td>
          <router-link to="/category">еда</router-link>,
          <router-link to="/category">reactjs</router-link>
        </td>
      </tr>
      <tr>
        <td width="40">
          <img
            src="https://i.stack.imgur.com/33N8q.jpg?s=256&g=1"
            width="40"
            height="40"
            alt="татарин"
          />
        </td>
        <td>
          <router-link to="/">татарин</router-link>
        </td>
        <td>1.10.2022 16:01</td>
        <td>
          Вы кто такие? Я вас не звал! Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Obcaecati harum tenetur impedit itaque esse
          inventore sit, mollitia voluptate suscipit voluptas similique ut
          fugiat voluptatibus iure odit cumque numquam. Explicabo, ex!
        </td>
        <td>
          <router-link to="/category">еда</router-link>,
          <router-link to="/category">reactjs</router-link>
        </td>
      </tr>
    </tbody>
  </table>
</template>

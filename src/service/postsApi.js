import { supabase } from "../supabase";

console.log(supabase)

const load = async () => {
  console.log('load')
  try {
    const { data, error, status } = await supabase
      .from("themes")
      .select(
        `id, 
          created_at, 
          folder, 
          title, 
          description, 
          user_id, 
          num_views, 
          num_comments`
      )
      .single();
    if (error && status !== 406) throw error;

    console.log('посты!')
    console.log(data)
    console.log('----')

    return data;
  } catch (error) {
    alert(error.message);
  }
};

const create = async (postData) => {
  console.log('create')
  const user = supabase.auth.user();
  if (!user) return;
  try {
    const { data, error } = await supabase
      .from("themes")
      .insert([postData])
      .single();
    if (error) throw error;
    return data;
  } catch (e) {
    throw e;
  }
};

// для обновления поста
const update = async (data) => {
  console.log('update')
  const user = supabase.auth.user();
  if (!user) return;
  try {
    const { data: _data, error } = await supabase
      .from("themes")
      .update({ ...postData })
      .match({ id: data.id, user_id: user.id });
    if (error) throw error;
    return _data;
  } catch (e) {
    throw e;
  }
};

// для удаления поста
const remove = async (id) => {
  console.log('remove')
  const user = supabase.auth.user();
  if (!user) return;
  try {
    // удаляем пост
    const { error } = await supabase
      .from("themes")
      .delete()
      .match({ id, user_id: user.id });
    if (error) throw error;
    if (_error) throw _error;
  } catch (e) {
    throw e;
  }
};

const postsApi = { load, create, update, remove };

export default postsApi;

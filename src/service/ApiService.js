import { supabase } from "../supabase";

export default class ApiService {
  async getPosts() {
    try {
      let { data, error, status } = await supabase
        .from("themes")
        .select(
          `id, created_at, folder, title, description, user_id, num_views, num_comments`
        )
        .single();

      if (error && status !== 406) throw error;
      return data;
    } catch (error) {
      alert(error.message);
    }
  }
}
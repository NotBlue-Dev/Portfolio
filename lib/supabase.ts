import { createClient } from "@supabase/supabase-js";

// A Supabase client object for making requests to a Supabase server.
export const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_KEY!
);

/**
 * Asynchronously fetches all projects from the database where the 'pinned' column is set to true.
 * The results are sorted by the 'created_at' column in descending order.
 */
export async function getProjects() {
  let { data: projects, error } = await supabase
    .from("projects")
    .select("*")
    .eq("pinned", "true")
    .order("date", { ascending: false });

  return {
    projects,
    error: error !== null,
  };
}

/*
 * This function will retrieve the individual custom data from the supabase such as linkedin data
 */
export async function getUserDataValue(key: string) {
  let { data, error } = await supabase
    .from("user_data")
    .select("value")
    .eq("key", key)
    .limit(1)
    .order("created_at", { ascending: false });
  if (data?.length === 0) {
    return {
      data: null,
      error: null,
    };
  }

  return {
    data: data,
    error: error !== null,
  };
}

export async function setUserDataValue(key: string, value1: any) {
  const { data, error } = await supabase
    .from("user_data")
    .update({ value: value1 })
    .eq("key", key)
    .select();
  if (data?.length === 0) {
    return {
      data: null,
      error: null,
    };
  }
  return {
    data: data![0].value,
    error: error !== null,
  };
}
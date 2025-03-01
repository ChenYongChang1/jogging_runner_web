
export const getCategory = async () => {
  const result = await useFetchGet("/api/jogging/wb/category");
  return result.data;
};

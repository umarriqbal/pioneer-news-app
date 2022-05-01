const handleFetchErrors = (response: Response) => {
  if (!response.ok) {
    return { success: false };
  }
  return response.json();
};
const doGet = async (inputUrl: string) => {
  const apiResponse = await fetch(inputUrl).then(handleFetchErrors);
  return apiResponse;
};

export const getHeadlines = async (pg: number) => {
  return await doGet(`/api/news/headlines?page=${pg}`);
};

export const getNews = async (q: string, pg: number) => {
  return await doGet(`/api/news?query=${q}&page=${pg}`);
};

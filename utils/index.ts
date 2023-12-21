export const options: RequestInit = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY  ?? '',
    "X-RapidAPI-Host": "bayut.p.rapidapi.com",
  },
};

import { Data } from "@/types";

export const options: RequestInit = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY ?? "",
    "X-RapidAPI-Host": "bayut.p.rapidapi.com",
  },
};

export const fetchData = async ({
  purpose,
  minPrice,
  maxPrice,
  paying,
  type,
  hitsPerPage,
}: Data) => {
  try {
    const url = `https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002%2C6020&purpose=${purpose}&hitsPerPage=${hitsPerPage}&lang=en&rentFrequency=${paying}&priceMin=${minPrice}&priceMax=${maxPrice}&categoryExternalID=${type}`;

    console.log("Fetching data from:", url);

    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Fetch failed with status ${response.status}`);
    }

    const data = await response.json();
    console.log("Fetched data:", data);
    return data?.hits;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const updateSearchParams = (type: string, value: string) => {
  // Get the current URL search params
  const searchParams = new URLSearchParams(window.location.search);

  // Set the specified search parameter to the given value
  searchParams.set(type, value);

  // Set the specified search parameter to the given value
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};

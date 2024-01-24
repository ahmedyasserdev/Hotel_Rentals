import { Data, DataProps } from "@/types";

export const options: RequestInit = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.API_KEY!,
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

    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`failed to fetch data ${response.status}`);
    }

    const data = await response.json();
    return data?.hits;
  } catch (error) {
    throw new Error(`Fetch failed ${error}`);
  }
};

export const fetchDetails = async (id: number): Promise<DataProps> => {
  try {
    const url = `https://bayut.p.rapidapi.com/properties/detail?externalID=${id}`;
    const response = await fetch(url, options);

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch details ${error} `);
  }
};

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(type, value);

  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};

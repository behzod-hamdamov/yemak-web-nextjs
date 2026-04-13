"use client";

import { useEffect, useState } from "react";

import { fetchData } from "@/utils/helper";
import { RestaurantItem } from "./";

interface IRestaurantItem {
  id: number;
  name: string;
  logotype: string;
  image: string;
  tags: string[];
}

interface IRestaurants {
  ok: string;
  data: { restaurants: IRestaurantItem[] };
}

export const Restaurants = () => {
  const [restaurants, setRestaurants] = useState<IRestaurants | null>(null);

  useEffect((): void => {
    fetchData<IRestaurants>("https://api.yemak.uz/user/restaurant").then(
      (data): void => {
        setRestaurants(data);
      }
    );
  }, []);

  return (
    <ul className="grid grid-cols-3 gap-5">
      {restaurants?.data.restaurants.map((item) => (
        <RestaurantItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

"use client"

import { useEffect, useState } from "react"

import {fetchData} from "../../utils/helper"
import { CategoryItem } from "../CategoryItem/CategoryItem"

interface ICategory {
  id: number,
  slug: string,
  title: string,
  icon: string,
  "icon_white": string,
  "seo_text": string
}

interface ICategories {
  ok: "string"
  data?: ICategory[],
}

export const Categories = () => {
  const [categories, setCategories] = useState<ICategories | null>(null)

  useEffect((): void => {
    fetchData<ICategories>("https://api.yemak.uz/user/category")
      .then((data) => {
        setCategories(data)
      })
  }, [])

  return (
    <ul className="flex gap-1 overflow-y-scroll [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden max-w-249.5 bg-white p-2 rounded-xl">
      {categories && categories.data?.map((item) => <CategoryItem item={item} key={item.id} /> )}
    </ul>
  )
}

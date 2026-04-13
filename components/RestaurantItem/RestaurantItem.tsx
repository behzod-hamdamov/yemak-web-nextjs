import Image from "next/image"
import Link from "next/link"

interface IRestaurantItem {
  id: number
  name: string
  logotype: string
  image: string
  tags: string[]
}

export const RestaurantItem = ({item}: {item: IRestaurantItem}) => {
  return (
    <li className="flex flex-col bg-white border-[#F0F0F0] border rounded-2xl">
      <Link href={"/" + item.id}>
        <Image src={item.image} width={344} loading="eager" height={179} alt="restaurant-image" className="w-auto h-auto rounded-2xl" />
      </Link>
      <div className="p-[12px_16px_16px] flex flex-col gap-4">
        <div className="flex gap-5 items-center">
          <Image src={item.logotype} loading="eager" width={30} height={30} alt="logotype" className="w-auto h-auto rounded-md border border-[#12282F1F]" />
          <h5 className="text-[#12282F] font-semibold text-[22px] leading-3.75">{item.name}</h5>
        </div>
        <div className="flex flex-wrap text-[#12282F] font-semibold text-[12px] leading-3.75">
          {item.tags.join(", ")}
        </div>
      </div>
    </li>
  )
}

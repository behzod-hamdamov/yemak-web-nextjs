import { Categories, Restaurants } from "@/components";

export default function page() {
  return (
    <main className="grow p-[24px_0_40px]">
      <div className="max-w-290 w-full p-[0_40px] m-[0_auto] flex flex-col gap-5">
        <h1 className="font-bold text-[32px] leading-10.5 text-[#12282F]">Restoranlar</h1>
        <div className="flex flex-col gap-8">
          <Categories />
          <Restaurants />
        </div>
      </div>
    </main>
  )
}

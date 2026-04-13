export const CategoryItem = ({ item }: any) => {
  return (
    <li className="p-[6px_12px] font-semibold leading-5 text-sm text-[#12282F] pr-0 shrink-0 cursor-pointer">
      <p className="border-[#F0F0F0] border-r pr-4 leading-4">{item.title}</p>
    </li>
  );
};

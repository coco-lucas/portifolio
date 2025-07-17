interface CardProps {
  icon: SVGAElement | any;
  stackName: string;
  techIcons: string[]
};

export default function StackCard({ icon, stackName, techIcons }: CardProps) {
  return(
    <div className="bg-(--card) flex flex-col items-baseline rounded-3xl border border-(--border) py-6 px-6 shadow-2xs gap-2 min-w-[320px] min-h-[244px] min max-w-[300px]">
    <div className="flex items-center justify-center bg-(--muted) min-h-12 min-w-12 w-fit rounded-full">
      {icon}
    </div>
      <h4>{stackName}</h4>
    <div className="w-full flex justify-center mb-2">
      <hr className="border-1 border-(--border) w-full rounded-full" />
    </div>
    <div className="flex flex-row flex-wrap gap-4 justify-baseline items-flex-start w-full text-2xl">
      {techIcons.map((iconClass, idx) => (
        <i key={idx} className={iconClass}></i>
      ))}
    </div>
    </div>
  )
};
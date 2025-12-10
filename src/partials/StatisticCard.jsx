function StatisticCard({ number, title }) {
    return (
        <div
            className="
      relative
      before:content-['']
      before:absolute
      before:bg-[rgba(63,81,181,0.3)]
      before:w-[90px]
      before:h-[90px]
      before:rounded-full
      before:top-[-8px]
      before:left-[-25px]
      before:z-0
      w-1/2
  "
        >
                <span class="text-7xl font-bold relative z-50">{number}<i>+</i></span>
            <span class="block text-lg font-medium mt-8 text-gray-300">{title}</span>
        </div>
    )
}

export default StatisticCard;
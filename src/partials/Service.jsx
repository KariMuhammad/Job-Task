function Service({ image, description }) {
    return (
        <div
    className="
        group
        w-[380px] h-[300px]
        rounded-3xl pb-10 overflow-hidden cursor-pointer
        bg-cover bg-left
        transition-all duration-[6000ms] ease-linear
    "
    style={{ backgroundImage: `url(${image})` }}
>
    <div
    className="
        group
        w-[380px] h-[300px]
        rounded-3xl overflow-hidden cursor-pointer
        bg-cover bg-no-repeat
        bg-[0%]                      /* start fully left */
        transition-all duration-[8000ms] ease-linear
        group-hover:bg-[100%]        /* move fully right */
    "
    style={{ backgroundImage: `url(${image})` }}
></div>


    <div className="px-4">
        <p className="text-center text-white text-md my-4 font-bold">
            {description}
        </p>
    </div>
</div>
    )
}

export default Service;
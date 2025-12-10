function Aboutus({Component}){
    return(
        <div className="md:flex mt-28 gap-16 w-[80%] m-auto">
            {<Component/>}
            <div className="p-6 order-1 basis-1/2">
                <video className="w-full h-full" autoPlay loop muted src="http://pixontechs.com/wp-content/uploads/2025/06/about-us.mp4"></video>
            </div>
        </div>

    )
}
export default Aboutus
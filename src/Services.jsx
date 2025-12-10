import Service from "./partials/Service";

function Services(props){
    return(

        <div className="mt-28">
            <div className="">
                <h1 className="tracking-widest text-center font-medium text-4xl my-8
                    bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
                    bg-[200%_200%] bg-clip-text text-transparent
                    animate-gradientMove">
                        {props.head}
                </h1>
                {<props.Component></props.Component>}
            </div>
        </div>
    )
}
export default Services
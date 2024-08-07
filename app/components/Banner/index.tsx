import Image from "next/image";

const Banner = () => {
    return (
        <div className='mx-auto max-w-7xl my-10 sm:py-10 px-6 lg:px-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 my-16'>

                {/* COLUMN-1 */}

                <div className="mx-auto sm:mx-0">
                    <div className='py-3 text-center lg:text-start'>
                        <button className='text-blue bg-lightblue hover:shadow-xl text-sm md:text-lg font-bold px-6 py-1 rounded-3xl tracking-wider hover:text-white hover:bg-black'>Construction Services</button>
                    </div>
                    <div className="py-3 text-center lg:text-start">
                        <h1 className='text-6xl lg:text-80xl font-bold text-darkpurple'>
                        Repair <br /> Maintenance <br /> Painting.
                        </h1>
                    </div>
                    <div className="py-3 text-center lg:text-start">
                        <p className='text-lg sm:text-xl text-black'>
                        Check out our work at <a href="https://www.instagram.com/mario_constructin/" className="text-blue hover:underline">Mario Construction</a>.
                        </p>
                    </div>
                    {/* <div className='my-7 text-center lg:text-start'>
                        <button className='text-sm md:text-xl font-semibold hover:shadow-xl bg-blue text-white py-3 px-6 md:py-5 md:px-14 rounded-full hover:bg-hoblue'>
                        Get Started
                        </button>
                    </div> */}
                    </div>

                {/* COLUMN-2 */}

                <div className='m-0 pt-5 lg:m-0 lg:pt-10'>
                <Image
                    src="/images/banner/mario.png"
                    alt="hero-image"
                    width={800}  
                    height={600} 
                    className="w-full h-auto object-cover"
                />
                </div>

            </div>
        </div>
    )
}

export default Banner;

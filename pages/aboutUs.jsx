
const aboutUs = () => {
    return (
        <div className="relative h-screen"> {/* Full viewport height container */}
            {/* Background image */}
            <img
                src='/about-us-bg.png'
                alt="About Us Background"
                className="absolute inset-0 w-full h-full object-cover z-10"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black opacity-40 z-20"></div>

            {/* Content container - centered */}
            <div className="relative z-30 h-full flex flex-col justify-center items-center text-center px-4">
                {/* Title */}
                <h1 className="text-5xl text-white mb-8">Who are we</h1>

            </div>
            {/* Description */}
            <div className="max-w-[50%]"> {/* Changed from max-w-1/2 */}
                <h2 className="text-orange-400 text-2xl">
                    Here, we believe online shopping should be fast, reliable, and stress-free.
                    Our mission is simple: deliver top-quality products at unbeatable prices,
                    right to your doorstep.
                    <br /><br />
                    We're committed to excellent customer service, secure payments, and fast shipping.
                    Whether you're looking for the latest tech, fashion trends, home essentials,
                    or unique finds — we've got you covered.
                    <br /><br />
                    Trusted by thousands, we're here to make your shopping experience better every day.
                </h2>
            </div>
        </div>
    )
}

export default aboutUs;
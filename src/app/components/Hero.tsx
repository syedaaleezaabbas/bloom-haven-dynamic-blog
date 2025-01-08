export default function Hero() {
    return (
        <section className="bg-[url('/bg-img.avif')] bg-cover w-full min-h-[400px] md:min-h-[500px] py-12 max-w-screen-2xl mx-auto">

            <div className="container mx-auto px-4 flex justify-center items-center">
                <div className="md:w-1/2 text-left md:mr-80">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 md:mb-10 font-dancing text-shadow style={{ textShadow: '4px 4px 10px rgba(0, 0, 0, 0.9)' }}">Welcome to Bloom Haven</h1>
                    <p className="text-2xl md:text-3xl text-white mb-4 md:mb-6 font-dancing text-shadow style={{ textShadow: '4px 4px 10px rgba(0, 0, 0, 0.8)' }}">Discover the captivating world of flowers, from timeless roses to exotic blooms. Join us in celebrating {"nature's"} artistry, one petal at a time.</p>
                    <button className="bg-gray-700 text-white px-6 py-2 md:px-9 md:py-3 rounded-full font-serif shadow-lg hover:bg-gray-800 transition">EXPLORE NOW</button>
                </div>
            </div>
        </section>
    )
}
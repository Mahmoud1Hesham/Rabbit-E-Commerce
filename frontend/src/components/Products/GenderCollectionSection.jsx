import { Link } from "react-router-dom"
import menCollectionImage from "../../assets/mens-collection.webp"
import womenCollectionImage from "../../assets/womens-collection.webp"
const GenderCollectionSection = () => {
    return <>
        <section className="py-16 px-4 lg:px-0">
            <div className="container flex flex-col md:flex-row gap-8">
                {/* Women's Collection */}
                <div className="relative flex-1 overflow-hidden">
                    <img src={womenCollectionImage} alt="women's collection" className="w-full h-[700px] object-cover hover:scale-125  hover:rotate-12 blur-sm hover:blur-none transition-all duration-700 ease-in-out" />
                    <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 p-4 
                      hover:bg-black hover:text-white transition-colors duration-300

                        group
                        text-center">
                        <h2 className="text-2xl group-hover:text-white  font-bold text-gray-900 mb-3">Women's Collection</h2>
                        <Link to="collections/all?gender=Women" className="text-gray-900  group-hover:text-white underline">Shop Now!</Link>
                    </div>
                </div>
                {/* Men's Collection */}
                <div className="relative flex-1 overflow-hidden">
                    <img src={menCollectionImage} alt="women's collection" className="w-full h-[700px] object-cover hover:scale-125 hover:rotate-12 blur-sm hover:blur-none transition-all duration-700 ease-in-out" />
                    <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 p-4 
                       hover:bg-black hover:text-white transition-colors duration-300
                           group  
                        text-center">
                        <h2 className="text-2xl  group-hover:text-white  font-bold text-gray-900 mb-3">Men's Collection</h2>
                        <Link to="collections/all?gender=Men" className="text-gray-900  group-hover:text-white underline">Shop Now!</Link>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default GenderCollectionSection
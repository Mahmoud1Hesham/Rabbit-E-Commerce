import { Link } from "react-router-dom"
import menCollectionImage from "../../assets/mens-collection.webp"
import womenCollectionImage from "../../assets/womens-collection.webp"
const GenderCollectionSection = () => {
    return <>
        <section className="py-16 px-4 lg:px-0">
            <div className="container flex flex-col md:flex-row gap-8">
                {/* Women's Collection */}
                <div className="relative flex-1">
                    <img src={womenCollectionImage} alt="women's collection" className="w-full h-[700px] object-cover" />
                    <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 p-4 
                        duration-500 
                        transition-all
                        origin-bottom-left
                        hover:bottom-24 
                        hover:scale-x-[2.8]
                        md:hover:scale-x-[3.3]
                        hover:scale-y-[4.5] 
                        hover:bg-opacity-60
                        hover:bg-black
                        group
                        hover:flex hover:flex-col hover:justify-center hover:items-center 
                        text-center">
                        <h2 className="text-2xl group-hover:text-white group-hover:text-lg font-bold text-gray-900 mb-3">Women's Collection</h2>
                        <Link to="collections/all?gender=Women" className="text-gray-900 group-hover:text-lg group-hover:text-white underline">Shop Now!</Link>
                    </div>
                </div>
                {/* Men's Collection */}
                <div className="relative flex-1">
                    <img src={menCollectionImage} alt="women's collection" className="w-full h-[700px] object-cover" />
                    <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 p-4 
                        duration-500 
                        transition-all
                        origin-bottom-left
                        hover:bottom-24 
                        hover:scale-x-[3.24]
                        md:hover:scale-x-[3.88] 
                        hover:scale-y-[4.5] 
                        hover:bg-opacity-60
                        hover:bg-black
                        group
                        hover:flex hover:flex-col hover:justify-center hover:items-center 
                        text-center">
                        <h2 className="text-2xl group-hover:text-lg group-hover:text-white  font-bold text-gray-900 mb-3">Men's Collection</h2>
                        <Link to="collections/all?gender=Men" className="text-gray-900 group-hover:text-lg group-hover:text-white underline">Shop Now!</Link>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default GenderCollectionSection
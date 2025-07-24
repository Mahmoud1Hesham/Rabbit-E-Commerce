import Hero from '../components/Layout/Hero'
import FeaturedCollection from '../components/Products/FeaturedCollection.jsx'
import FeaturesSection from '../components/Products/FeaturesSection.jsx'
import GenderCollectionSection from '../components/Products/GenderCollectionSection'
import NewArrivals from '../components/Products/NewArrivals'
import ProductDetails from '../components/Products/ProductDetails'
import ProductGrid from '../components/Products/ProductGrid.jsx'
import Login from './Login.jsx'

const placeholderProducts = [
    {
        _id: 1,
        name: "Stylish Jacket",
        price: 120,
        images: [
            {
                url: "https://picsum.photos/500/500?random=4",
                altText: "Stylish Jacket 1",
            },

        ]
    },
    {
        _id: 2,
        name: "Stylish Jacket",
        price: 120,
        images: [
            {
                url: "https://picsum.photos/500/500?random=5",
                altText: "Stylish Jacket 1",
            },

        ]
    },
    {
        _id: 3,
        name: "Stylish Jacket",
        price: 120,
        images: [
            {
                url: "https://picsum.photos/500/500?random=6",
                altText: "Stylish Jacket 1",
            },

        ]
    },
    {
        _id: 4,
        name: "Stylish Jacket",
        price: 120,
        images: [
            {
                url: "https://picsum.photos/500/500?random=7",
                altText: "Stylish Jacket 1",
            },

        ]
    },
    {
        _id: 5,
        name: "Stylish Jacket",
        price: 120,
        images: [
            {
                url: "https://picsum.photos/500/500?random=8",
                altText: "Stylish Jacket 1",
            },

        ]
    },
    {
        _id: 6,
        name: "Stylish Jacket",
        price: 120,
        images: [
            {
                url: "https://picsum.photos/500/500?random=9",
                altText: "Stylish Jacket 1",
            },

        ]
    },
    {
        _id: 7,
        name: "Stylish Jacket",
        price: 120,
        images: [
            {
                url: "https://picsum.photos/500/500?random=10",
                altText: "Stylish Jacket 1",
            },

        ]
    },
    {
        _id: 8,
        name: "Stylish Jacket",
        price: 120,
        images: [
            {
                url: "https://picsum.photos/500/500?random=1",
                altText: "Stylish Jacket 1",
            },

        ]
    },

]


const Home = () => {
    return <>
        <Hero />
        <GenderCollectionSection />
        <NewArrivals />
        {/* Best Seller Section */}
        <h2 className='text-3xl text-center font-bold mb-4'>Best Seller</h2>
        <ProductDetails />
        {/* Women's Suggestion */}
        <div className="container px-5">
            <h2 className="text-3xl text-center font-bold mb-4">
                Top Wear for Women
            </h2>
            <ProductGrid products={placeholderProducts} />
        </div>
        {/* Featured Collection */}
        <FeaturedCollection />
        {/* Features Section */}
        <FeaturesSection />

        {/* Login (temporary)*/}
        <Login />
    </>
}

export default Home
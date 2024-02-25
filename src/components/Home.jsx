import SearchBar from "./SearchBar"
import Advertisement from "./Advertisement"
import HomeItem from "./HomeItem"
function Home() {
    return (

        <div className="h-screen">
            <div className="flex justify-center w-screen items-center fixed top-24 left-auto"> <SearchBar /></div>
            <Advertisement />
            <HomeItem order = "2" description="Indulge in our chef's exquisite creation, a culinary masterpiece meticulously crafted with the freshest seasonal ingredients. Delight your palate with harmonious flavors and textures, from tender meats to vibrant vegetables, perfectly paired and beautifully presented. Elevate your dining experience to new heights as you savor each bite, immersed in a symphony of taste and aroma. Experience culinary excellence at its finest, only at our restaurant."/>
            <HomeItem order = "1" description="Indulge in our chef's exquisite creation, a culinary masterpiece meticulously crafted with the freshest seasonal ingredients. Delight your palate with harmonious flavors and textures, from tender meats to vibrant vegetables, perfectly paired and beautifully presented. Elevate your dining experience to new heights as you savor each bite, immersed in a symphony of taste and aroma. Experience culinary excellence at its finest, only at our restaurant."/>
            <HomeItem order = "2" description="Indulge in our chef's exquisite creation, a culinary masterpiece meticulously crafted with the freshest seasonal ingredients. Delight your palate with harmonious flavors and textures, from tender meats to vibrant vegetables, perfectly paired and beautifully presented. Elevate your dining experience to new heights as you savor each bite, immersed in a symphony of taste and aroma. Experience culinary excellence at its finest, only at our restaurant."/>
        </div>


    )
}

export default Home


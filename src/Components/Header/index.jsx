

const Header = () => {

    const images = [
        "https://static.vecteezy.com/system/resources/previews/011/871/820/non_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg",
        "https://static.vecteezy.com/system/resources/thumbnails/004/299/835/small_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg",
        "https://static.vecteezy.com/system/resources/previews/007/153/463/non_2x/shopping-online-on-smartphone-and-new-buy-sale-promotion-pink-backgroud-for-banner-market-ecommerce-women-concept-free-vector.jpg",
    ];


    return (
        <>
            <div className="relative w-full overflow-hidden">
                <img
                    src={images[0]}
                    alt="Banner"
                    className="w-full h-auto max-h-[500px] object-contain md:object-cover md:h-[500px]"
                />
            </div>
        </>
    )
}

export default Header
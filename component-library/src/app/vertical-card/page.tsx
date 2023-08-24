import VerticalCard from "../../components/VerticalCard"
export default function CardsPage () {
    const fakeProducts = [
        {
            title: `Nikes`,
            image: `/images/StockImages/jay-nuetey-EIYUYEu68Uk-unsplash.jpg`,
            description: `For the sneaker heads out there`
        },
        {
            title: `Jeans & Sunnies`,
            image: `/images/StockImages/ankita-bhattacharya-8jknGKPENCY-unsplash.jpg`,
            description: `Sunshine and denim FTW`
        },
        {
            title: `More Nikes`,
            image: `/images/StockImages/jay-nuetey-uOufXd_8boE-unsplash.jpg`,
            description: `For the sneaker heads out there`
        },
        {
            title: `Coat`,
            image: `images/StockImages/tamara-schipchinskaya-YDxW47w8ANg-unsplash.jpg`,
            description: `Stay cozy my friends`
        },

    ]
        
    return (
        <div style={{width: "100%", display:"flex", alignItems:"center", flexWrap: "wrap", justifyContent: "space-around", rowGap: "1rem"}}>
        {fakeProducts.map((item) => <VerticalCard key={item.title} title={item.title} image={item.image} description={item.description}/>)}
        </div>
    )
}
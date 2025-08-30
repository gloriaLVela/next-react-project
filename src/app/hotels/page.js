async function getData() {
    const res = await fetch(
        "https://snowtooth-api-rest.fly.dev/hotels"
    );
    return res.json();
}

function HotelBlock({ name, capacity }) {
    return (
        <div >
            <h2>{name}</h2>
            <p>{capacity}</p>
        </div>
    );
}

export default async function Page() {
    const data = await getData();
    return (
        <main>
            <div>
                <h1>Hotels Details</h1>
            </div>
            <div>{data.map((hotel) => (
                <HotelBlock key={hotel.id} name={hotel.name} capacity={hotel.capacity} />
            ))}</div>
        </main>
    )
}
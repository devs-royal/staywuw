export const AmenitiesIcons = (amenities)=>{
    switch(amenities){
        case "restaurant":
            return(<button tittle={amenities}><img src={`${process.env.NEXT_PUBLIC_URL}/icons/restaurant/restaurant-b.svg`} alt={amenities} width={18} height={18} /></button>)
        case "wi-fi":
            return(<button tittle={amenities}><img src={`${process.env.NEXT_PUBLIC_URL}/icons/wifi/wifi-b.svg`} alt={amenities} width={18} height={18} /></button>)
        case "room-service":
            return(<button tittle={amenities}><img src={`${process.env.NEXT_PUBLIC_URL}/icons/rooms/rooms-b.svg`} alt={amenities} width={18} height={18} /></button>)
        case "gym":
            return(<button tittle={amenities}><img src={`${process.env.NEXT_PUBLIC_URL}/icons/gym/gym-b.svg`} alt={amenities} width={18} height={18} /></button>)
        case "pool":
            return(<button tittle={amenities}><img src={`${process.env.NEXT_PUBLIC_URL}/icons/pool/pool-b.svg`} alt={amenities} width={18} height={18} /></button>)
        case "golf":
            return(<button tittle={amenities}><img src={`${process.env.NEXT_PUBLIC_URL}/icons/golf/golf-b.svg`} alt={amenities} width={18} height={18} /></button>)
        case "spa":
            return(<button tittle={amenities}><img src={`${process.env.NEXT_PUBLIC_URL}/icons/spa/spa-b.svg`} alt={amenities} width={18} height={18} /></button>)
        case "kids-club":
            return(<button tittle={amenities}><img src={`${process.env.NEXT_PUBLIC_URL}/icons/kids/kids-b.svg`} alt={amenities} width={18} height={18} /></button>)
        case "baggage":
            return(<button tittle={amenities}><img src={`${process.env.NEXT_PUBLIC_URL}/icons/baggage/baggage-b.svg`} alt={amenities} width={18} height={18} /></button>)
        case "air-conditioning":
            return(<button tittle={amenities}><img src={`${process.env.NEXT_PUBLIC_URL}/icons/air/air-b.svg`} alt={amenities} width={18} height={18} /></button>)
        case "water":
            return(<button tittle={amenities}><img src={`${process.env.NEXT_PUBLIC_URL}/icons/water/water-b.svg`} alt={amenities} width={18} height={18} /></button>)
    }
}
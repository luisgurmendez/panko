import { Banner } from "./Banner";
import Image from 'next/image';
import losdedos from '../../assets/lapunta2.jpg'

const CityBanner = () => (
    <Banner title="Planes y eventos en Punta del Este todo el año">
        <picture style={{ width: '132%', left: '-16%', right: '16%' }} className="absolute h-full">
            <Image src={losdedos} alt="Los dedos" className="object-[0px_-142px] md:object-cover md:h-full md:object-center" />
        </picture>
    </Banner>
)

export default CityBanner;
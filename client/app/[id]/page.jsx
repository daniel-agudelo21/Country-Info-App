import { fetchDataId } from "../lib/API";
import Image from "next/image";
import Return from "../ui/return";
import PopulationChart from "../ui/populationChart";
import { Globe, MapPin, Flag } from 'lucide-react'
import InfoItem from "../ui/infoItem";
import Link from "next/link";

export default async function CountryInfo({ params }) {
    const country = await fetchDataId(params.id)

    return (

        <div div key={country.id} className="md:mx-20 md:mt-10 mt-5">
            <Return />
            <div className="md:mx-5 md:mt-5">
                <div className="flex items-center space-x-4 justify-center flex-col md:justify-start md:flex-row md:mb-5">
                    <Image
                        src={country.flag || `/default_flag.png`}
                        alt={`${country.name} flag`}
                        width={200} height={200}
                        className=" object-cover rounded drop-shadow-[2px_2px_2px_rgba(0,0,0,0.5)]"
                    />
                    <h3 className="text-3xl font-bold mt-5 md:mt-0 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.5)]">{country.name}</h3>
                </div>
                <div className=" flex flex-col gap-4 ">
                    <div className="md:flex md:flex-row md:gap-x-10 ">
                        <InfoItem icon={<MapPin className="size-6 md:size-10 drop-shadow-[2px_3px_1px_rgba(0,0,0,0.5)]" />} label="Official name" value={country.officialName} />
                        <InfoItem icon={<Globe className="size-6 md:size-10 drop-shadow-[2px_3px_1px_rgba(0,0,0,0.5)]" />} label="Region" value={country.region} />
                    </div>
                    <InfoItem icon={<Flag className="size-6 md:size-10 drop-shadow-[2px_3px_1px_rgba(0,0,0,0.5)]" />} label="Borders" value={
                        country.borders && country.borders.length > 0 ? (
                            <ul className="flex flex-wrap gap-2  max-w-xs md:max-w-max">
                                {country.borders.map((border) => (
                                    <li key={border.countryCode} className="hover:text-amber-800 dark:hover:text-orange-400  transition-all duration-300 ease-in-out border hover:border-amber-800 dark:hover:border-orange-400  hover:text-primary-foreground font-semibold p-1 md:p-2 rounded-md ">
                                        <Link href={`/${border.countryCode}`}>{border.commonName}</Link>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <span>No neighboring countries</span>
                        )
                    }
                    />
                </div>
                <PopulationChart populationData={country.population} />
            </div>

        </div >
    )
}

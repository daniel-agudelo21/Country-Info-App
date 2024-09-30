import Card from "./Card";

export default function Cards({ countries }) {
    return (
        <div className="flex flex-wrap min-h-screen justify-center">
            <ul className="flex flex-wrap gap-4 justify-center">
                {countries.map(({ id, name }) => {
                    return (
                        <li key={id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 lg:mt-2">
                            <Card id={id} name={name} />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}


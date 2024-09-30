import Cards from "./ui/Cards";
import fetchData from './lib/API';

export default async function Home(){
  const countries = await fetchData()
  
  return(
    <main className="mx-4">
      <div className="justify-center items-center flex">
      <h1 className="text-3xl font-semibold mb-10 mt-2">Countries List</h1>
      </div>
      <div>
        <Cards countries={countries}/>
      </div>
    </main>
  )
}
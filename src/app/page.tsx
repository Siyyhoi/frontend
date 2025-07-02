import Carousel from "./components/carousel"
import Cards from "./components/cards"

export default function Home() {
  return (
    <>
      <Carousel />
      <div className="mt-10">
        <Cards />
      </div>
    </>
  );
}

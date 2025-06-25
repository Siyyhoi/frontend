import Carousel from "./components/carousel"

export default function Home() {
  return (
    <>
      <Carousel />
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-5xl">home page</h1>
      </div>
    </>
  );
}

import Header from "@/components/Header";
import PixelBox from "@/components/PixelBox";
import { image } from "@/owners/image";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="flex flex-wrap items-center justify-center gap-0.5 px-6 md:px-28 mt-5 mb-5">
        {image.map((image) => (
          <PixelBox src={image} />
        ))}
      </div>
    </main>
  );
}

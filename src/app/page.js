import Image from "next/image";
import Collages from "./components/collages/Collages";

export default function Home() {
  return (
    <div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
     <Collages/>
    </div>
  );
}

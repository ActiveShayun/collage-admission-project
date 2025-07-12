import Image from "next/image";
import Collages from "./components/collages/Collages";
import Banner from "./components/banner/Banner";
import FeedBack from "./components/allFeedBack/FeedBack";

export default function Home() {
  return (
    <div className="">
      <Banner/>
     <Collages/>
     <FeedBack/>
    </div>
  );
}

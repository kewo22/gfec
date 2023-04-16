
import Hero from "./components/hero";
import SupportedCountries from "./components/supported-countries";
import About from "./components/about";
import OurServices from "./components/our-services";
import GetInTouch from "./components/get-in-touch";
import Testimonial from "./components/testimonial";

// const inter = Inter({ subsets: ["latin"] });

// async function getArtist() {
//   const res = await fetch(`http://localhost:3000/api/getInTouch`);
//   return res.json();
// }

export default function Home() {
  // const artistData = await getArtist();
  // console.log("🚀 ~ file: page.tsx:26 ~ Home ~ artistData:", artistData);
  // await postArtist();

  // const { height } = useNavigationHeight();
  // console.log(height);

  return (
    <main className="">
      {/* <h1>ssss - {artistData.data.email}</h1> */}
      <Hero />
      <About />
      <OurServices />
      <Testimonial />
      <SupportedCountries />
      <GetInTouch />
    </main>
    // {/* @ts-expect-error Server Component */}
    // <SupportedCountries />
  );
}

import Hero from "./components/hero";
import SupportedCountries from "./components/supported-countries";
import About from "./components/about";
import OurServices from "./components/our-services";
import GetInTouch from "./components/get-in-touch";
import Testimonial from "./components/testimonial";

async function getArtist() {
  const res = await fetch(`https://uat.d2ergyqxpebfoy.amplifyapp.com/api/test`);
  // const res = await fetch(`http://localhost:3000/api/test`);
  return res.json();
}

export default async function Home() {
  const artistData = await getArtist();
  console.log("🚀 ~ file: page.tsx:26 ~ Home ~ artistData:", artistData.data);
  // await postArtist();

  // const { height } = useNavigationHeight();
  // console.log(height);

  return (
    <main className="">
      <h1>ssss - {artistData?.data[0]?.email}</h1>
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

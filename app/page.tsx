import Hero from "./components/hero";
import SupportedCountries from "./components/supported-countries";
import About from "./components/about";
import OurServices from "./components/our-services";
import GetInTouch from "./components/get-in-touch";
import Testimonial from "./components/testimonial";

async function hhhhh() {
  const url = `${process.env.API_BASE_URL_UAT}/test` || "";
  const res = await fetch(url);
  return res.json();
}

export default async function Home() {
  const artistData = await hhhhh();
  // console.log("🚀 ~ file: page.tsx:26 ~ Home ~ artistData:", artistData.data);

  // const { height } = useNavigationHeight();
  // console.log(height);

  return (
    <main className="">
      <h1>ssss - {JSON.stringify(artistData)}</h1>
      <h1>ooo - {artistData.data[0].email || "NO"}</h1>
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

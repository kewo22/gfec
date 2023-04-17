import Hero from "./components/hero";
import SupportedCountries from "./components/supported-countries";
import About from "./components/about";
import OurServices from "./components/our-services";
import GetInTouch from "./components/get-in-touch";
import Testimonial from "./components/testimonial";

async function getGetInTouchData() {
  debugger;
  try {
    const url = `https://uat.d2ergyqxpebfoy.amplifyapp.com/api/getintouch`;
    const res = await fetch(url);
    return res.json();
  } catch (error) {
    const s = { data: "swqd" };
    return s;
  } finally {
    const s = { data: "swqd" };
    return s;
  }
}

export default async function Home() {
  const artistData = await getGetInTouchData();
  console.log("🚀 ~ file: page.tsx:26 ~ Home ~ artistData:", artistData);
  // console.log("🚀 ~ file: page.tsx:26 ~ Home ~ artistData:", artistData.data);

  // const { height } = useNavigationHeight();
  // console.log(height);

  return (
    <main className="">
      <h1>ssss - {JSON.stringify(artistData || null)}</h1>
      <h1>ooo - {artistData?.data[0]?.email || "NO"}</h1>
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

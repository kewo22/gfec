import Hero from "./components/hero";
import SupportedCountries from "./components/supported-countries";
import About from "./components/about";
import OurServices from "./components/our-services";
import GetInTouch from "./components/get-in-touch";
import Testimonial from "./components/testimonial";

// Promise<any>
async function getGetInTouchData() {
  try {
    const url = `https://uat.d2ergyqxpebfoy.amplifyapp.com/api/getintouch`;
    // const url = `http://localhost:3000/api/getintouch`;
    const res = await fetch(url, { mode: "no-cors", cache: "no-store" });
    return res.json();
  } catch (error) {
    return { data: [] };
  }
}

export default async function Home() {
  const artistData = await getGetInTouchData();
  // console.log("🚀 ~ file: page.tsx:26 ~ Home ~ artistData:", artistData);
  // console.log("🚀 ~ file: page.tsx:26 ~ Home ~ artistData:", artistData.data);

  // const { height } = useNavigationHeight();
  // console.log(height);

  return (
    <main className="">
      <pre>ssss - {JSON.stringify(artistData || null, null, 4)}</pre>
      <h1>ooo - {artistData?.data[0]?.email || "NO"}</h1>
      <h1>--- pPPPPPPPPPPPPPPPPPPPPPPPPPPPPP897732y ----</h1>
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

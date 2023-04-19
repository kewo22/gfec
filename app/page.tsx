import Hero from "./components/hero";
import SupportedCountries from "./components/supported-countries";
import About from "./components/about";
import OurServices from "./components/our-services";
import GetInTouch from "./components/get-in-touch";
import Testimonial from "./components/testimonial";

// Promise<any>
async function getGetInTouchData() {
  try {
    const url = `${process.env.API_BASE_URL}/getintouch` || "";
    const res = await fetch(url, { cache: "no-store" });
    return res.json();
  } catch (error) {
    return { data: [] };
  }
}

export default async function Home() {
  const artistData = await getGetInTouchData();

  // const { height } = useNavigationHeight();
  // console.log(height);

  return (
    <main className="">
      <pre>ssss - {JSON.stringify(artistData || null, null, 4)}</pre>
      <h1>ooo - {artistData?.data[0]?.email || "NO"}</h1>
      <h1>--- HHHHHHHHHHHH87878787878787878HHHHHHHHHHHHHHh ----</h1>
      <Hero />
      <About />
      <OurServices />
      <Testimonial />
      <SupportedCountries />
      <GetInTouch />
    </main>
  );
}

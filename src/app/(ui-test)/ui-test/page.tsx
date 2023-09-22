import { Typography } from "../../_components/ui/typography";

export default function Home() {
  return (
    <>
      <div className="block  sm:hidden md:hidden lg:hidden xl:hidden bg-orange-500">
        MOBILE
      </div>
      <div className="hidden sm:block  md:hidden lg:hidden xl:hidden bg-red-500">
        SM
      </div>
      <div className="hidden sm:hidden md:block  lg:hidden xl:hidden bg-green-500">
        MD
      </div>
      <div className="hidden sm:hidden md:hidden lg:block  xl:hidden bg-blue-500">
        LG
      </div>
      <div className="hidden sm:hidden md:hidden lg:hidden xl:block 2xl:hidden bg-amber-500">
        XL
      </div>
      <div className="hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:block bg-pink-500">
        2XL
      </div>
      <br />
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
      <Typography variant="h5">Heading 5</Typography>
      <Typography variant="p">Body text with P</Typography>
      <Typography variant="small">Body text with small</Typography>
    </>
  );
}

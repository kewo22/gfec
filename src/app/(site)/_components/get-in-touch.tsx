import ContainerNew from "./layouts/container-new";
import GetInTouchForm from "./get-in-touch-form";

export default function GetInTouch() {
  return (
    <section className="bg-surface py-16 lg:py-24">
      <ContainerNew className="px-5 lg:px-12 max-w-3xl">
        <div className="text-center mb-12">
          <p className="ledger-ref text-gold text-xs uppercase mb-3">Book my consultation</p>
          <h2 className="font-display font-bold text-navy text-3xl lg:text-4xl">Tell us about your plans</h2>
        </div>
        <div className="ledger-card rounded-sm p-6 sm:p-10">
          <GetInTouchForm />
        </div>
      </ContainerNew>
    </section>
  );
}

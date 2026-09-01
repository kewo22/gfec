import { Spinner } from "@/app/_components/ui/spinner";

export default function SiteLoading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <Spinner className="size-8 text-primary" />
    </div>
  );
}

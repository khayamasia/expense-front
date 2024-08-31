import LandingPage from "@/components/Landing";
import { fetchData, fetchMetadata } from "@/utils/FetchMetadata";

export default async function Home() {
  const res = await fetchMetadata();
  const features = await fetchData("/api/keyfeature?populate=*");
  return <LandingPage props={res} features={features} />;
}

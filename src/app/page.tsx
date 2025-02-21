import { Hero } from "@/components/hero/hero";
import { Concept } from "@/components/concept/concept";
import { Topics } from "@/components/topics/topics";
import { Stylist } from "@/components/stylist/stylist";
import { Shop } from "@/components/shop/shop";


export default function Home() {
  return (
    <main>
      <Hero />
      <Concept />
      <Topics />
      <Stylist />
      <Shop />
    </main>
  );
}

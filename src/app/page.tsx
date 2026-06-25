import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Components from "./components/Components";
import HowItWorks from "./components/HowItWorks";
import Detection from "./components/Detection";
import AlertFlow from "./components/AlertFlow";
import Scenarios from "./components/Scenarios";
import Comparison from "./components/Comparison";
import Closing from "./components/Closing";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Problem />
        <Components />
        <HowItWorks />
        <Detection />
        <AlertFlow />
        <Scenarios />
        <Comparison />
        <Closing />
      </main>
    </>
  );
}

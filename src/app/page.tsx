import BasicTimer from "@/components/BasicTimer";
import TimerApp from "@/components/TimerApp";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <TimerApp initialCount={50} />
    </main>
  );
}

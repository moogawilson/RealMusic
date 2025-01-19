import { PlayerProvider } from "@/context/PlayerContext";
import ParentContainer from "@/components/parentContainer";

export default async function Home() {
  return (
    <PlayerProvider>
      <main>
        <ParentContainer />
      </main>
    </PlayerProvider>
  );
}

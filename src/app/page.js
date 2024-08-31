import Canvas from "./components/canvas";
import { MenuFormBuilder } from "./components/menuFormBuilder";

export default function Home() {
  return (
    <main className="w-screen h-screen">
      <MenuFormBuilder />
      <Canvas />
    </main>
  );
}

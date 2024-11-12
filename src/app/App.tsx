import { Banner } from "@/entities/Banner";
import { Mobile } from "@/entities/Mobile";
import { Web } from "@/entities/Web";
import { Header } from "@/widgets/Header";
import { memo } from "react";

function App() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Web />
        <Mobile />
      </main>
    </>
  );
}

export default memo(App);

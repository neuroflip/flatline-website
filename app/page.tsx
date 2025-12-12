import Header from "./ui/Header";
import ContentHeader from "./ui/ContentHeader";
import InternalLinks from "./ui/InternalLinks";
import ObsoleteEngine from "./sections/ObsoleteEngine/ObsoleteEngine";
import Interests from "./sections/Interests";
import Title from "./ui/Title/Title";
import Introduction from "./sections/Introduction";
import Projects from "./sections/Projects";
import Experiments from "./sections/Experiments";
import { Suspense } from 'react'

const Home = () => {
  return (<main className="mt-0 ,b-0 mr-auto ml-auto flex max-w-lg w-11/12 min-h-screen flex-col items-center justify-between">
    <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      <div className="fixed left-0 top-0 flex w-full justify-center border-b bg-gradient-to-b pb-6 pt-8 backdrop-blur-2xl border-neutral-800 bg-zinc-800/30 from-inherit">
        <Header></Header>
      </div>
      <div className="fixed bottom-0 left-0 flex h-12 w-full items-end justify-center bg-gradient-to-t from-black via-black">
        <Title><div className="text-xs text-center text-gray-700">neuroflip - 2025</div></Title>
      </div>
    </div>

    <Suspense fallback={<p>Loading feed...</p>}>
      <ObsoleteEngine></ObsoleteEngine>
    </Suspense>
    <ContentHeader></ContentHeader>
    <InternalLinks></InternalLinks>

    <Introduction></Introduction>
    <Interests></Interests>
    <Projects></Projects>
    <Experiments></Experiments>
  </main>);
}

export default Home;
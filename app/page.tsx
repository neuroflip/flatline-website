import Image from "next/image";
import Header from "./ui/Header";
import ContentHeader from "./ui/ContentHeader";
import InternalLinks from "./ui/InternalLinks";
import ObsoleteEngine from "./ui/ObsoleteEngine/ObsoleteEngine";
import TagCard from "./ui/TagCard";
import Card from "./ui/Card";
import Crawlear from "./ui/projects/Crawlear";
import ProjectObsolete from "./ui/projects/ProjectObsolete";
import AHX from "./ui/projects/AHX";
import Title from "./ui/Title";
import Tunnel from "./ui/projects/Tunnel";
import Pulgon from "./ui/projects/Pulgon";
import SpaceTrash from "./ui/projects/SpaceTrash";
import Tetris from "./ui/projects/Tetris";
import Portfolio from "./ui/projects/Portfolio";

export default function Home() {
  return (
    <main className="mt-0 ,b-0 mr-auto ml-auto flex max-w-lg w-11/12 min-h-screen flex-col items-center justify-between">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed left-0 top-0 flex w-full justify-center border-b bg-gradient-to-b pb-6 pt-8 backdrop-blur-2xl border-neutral-800 bg-zinc-800/30 from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:bg-zinc-800/30">
          <Header></Header>
        </div>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-black via-black lg:static lg:size-auto lg:bg-none"></div>
      </div>

      <ObsoleteEngine></ObsoleteEngine>
      <ContentHeader></ContentHeader>
      <InternalLinks></InternalLinks>

      <div id="introduction">
        <Title><>INTRODUCTION</></Title>
        <Card extraClassName="p-6 mt-0">
          <>Social and friendly person interested in web sites since the late 90’s. Passionate about innovation in all that I do.</>
        </Card>
        <Card extraClassName="p-6 mt-6">
          <>Working with modern web applications since 2002, helping several bcn tech startups (MedHouses, Cybex, Layers, <b>Marfeel</b>) building awsome products and working with international and multidisciplinary teams.</>
        </Card>
      </div>
      <div id="projects">
        <Title><>PROJECTS</></Title>
        <Crawlear></Crawlear>
        <ProjectObsolete></ProjectObsolete>
        <Portfolio></Portfolio>
        <AHX></AHX>
      </div>
      <div id="experiments">
        <Title><>EXPERIMENTS</></Title>
        <Tunnel></Tunnel>
        <Pulgon></Pulgon>
        <SpaceTrash></SpaceTrash>
        <Tetris></Tetris>
      </div>
      <div id="interests">
        <Title><>INTERESTS</></Title>
        <TagCard></TagCard>
      </div>
    </main>
  );
}

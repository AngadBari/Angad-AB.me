import { Container } from "@/components/container";
import Intro from "@/components/intro";
import {Skills} from "@/components/skills";
import { Cause } from "next/font/google";
import { HiMapPin } from "react-icons/hi2";
const cause = Cause({ subsets: ["latin"], weight: ["800"] });


export default function Home() {
  return (
    <div className=" min-h-screen flex justify-between items-start bg-black">
      <div className="fixed flex w-full items-center justify-between top-0 left-0 p-5 text-neutral-50">
        <p className={`${cause.className} text-sm`}>
          IN:{" "}
          {new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
        <p className={`${cause.className} text-sm`}>
          <HiMapPin className="inline-block mr-1" />
          <span>MUMBAI,INDIA</span>
        </p>
      </div>

      <Container className="min-h-screen text-neutral-50">
       <Intro/>
      <Skills/>
      </Container>
    </div>
  );
}

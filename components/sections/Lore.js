import React from "react";
import FallInPlace from "../FallInPlace";
import MainHeader from "../MainHeader";

const Lore = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center sub-page-bg bg-cover bg-no-repeat">
      <MainHeader>LORE/UTILITY</MainHeader>
      <FallInPlace>
        <div className="w-full mt-[-125px] md:mt-[-250px] flex justify-center">
          <img
            src="/Radovan.png"
            alt="Radovan"
            className="w-[75%] md:w-[35%] "
          />
        </div>
      </FallInPlace>
      <FallInPlace delay={0.05}>
        <div className="backdrop-blur-md bg-black bg-opacity-40 w-[95%] lg:w-[70%] text-gray-300 flex flex-col gap-[2.5rem] font-ubuntu text-[1.25rem] mt-[-10px] mb-[100px] p-[2rem]">
          <div className="flex flex-col items-center ">
            <h2 className="text-[8.5vw] md:text-[6vw] text-center font-audiowide main-title">
              UTILTY
            </h2>
            <ul className="list-disc flex flex-col text-left gap-[1rem] px-[2rem]">
              <li>
                Lore-based NFT project with a sci-fi horror story theme and
                high-quality art.
              </li>
              <li>
                First of its kind <span className="redacted">doulap</span>
                -2-Earn feature <span className="redacted">ot puolda</span>{" "}
                <span className="redacted"> seidvu dna</span>{" "}
                <span className="redacted">emtrop eht </span>
                <span className="redacted"> tcejorp,</span>{" "}
                <span className="redacted">izecnivetnis htob </span>
                <span className="redacted"> tnetnoc </span>{" "}
                <span className="redacted">serotaerc dna </span>
                <span className="redacted">TFN slledoh</span>.
              </li>
              <li>
                <span className="redacted">ylailitn,</span> only NFT holders can
                participate, <span className="redacted">gnitarec</span>{" "}
                <span className="redacted"> ytiluxesiv </span>{" "}
                <span className="redacted">and eulav</span>{" "}
                <span className="redacted">rof gnildoh</span>{" "}
                <span className="redacted">eht TFN</span>.
              </li>
              <li>
                As the project grows, <span className="redacted">a ssap</span>{" "}
                <span className="redacted">nac eb</span>{" "}
                <span className="redacted">ghoutb</span>{" "}
                <span className="redacted">rof a</span> passive income
                <span className="redacted">maerts</span>{" "}
                <span className="redacted">fo gnidpolu</span>{" "}
                <span className="redacted">ot nere</span>.
              </li>
              <li>
                Revenue model <span className="redacted">morf</span>
                <span className="redacted"> gnitiradsa</span>
                <span className="redacted"> elpoep</span>
                <span className="redacted"> hguorht eht</span>{" "}
                <span className="redacted">sdrawro sytsem</span>,{" "}
                <span className="redacted">wtih elpoep</span>
                <span className="redacted">yinap ot tsop dna nere</span>.
              </li>
              <li>
                <span className="redacted">loag fo</span>{" "}
                <span className="redacted">gniog lirav</span>. aligns with
                Radovan&apos;s desire for power and control.
              </li>
            </ul>
          </div>
          <div className="">
            <h2 className="text-[8.5vw] md:text-[6vw] text-center font-audiowide main-title ">
              LORE
            </h2>
            <p className="lore-text leading-loose text-[1.25rem] px-[1rem]">
              Radovan, the crazed scientist, is the ultimate antagonist of this
              sci-fi horror story. His obsession with extending his life, or
              even avoiding death at all costs, has driven him to create devices
              beyond imagination. However, his physical health is critical, and
              he can barely move without the aid of machines. Despite this
              limitation, Radovan has found a way to exist beyond his physical
              form. He is able to live in many organisms using digital space,
              which enables him to transfer his mind into the computer and
              control his victims like a virus. The most terrifying aspect of
              Radovan&apos;s existence is that his brain is directly connected
              to the computer, making him almost omnipotent. Although he is
              static physically, mentally he is more powerful than ever before.
              He has also gathered supporters to aid him in his quest for
              eternal life. The man on his back is using a breathing machine,
              similar to a blacksmith&apos;s bellows, to keep the boss alive.
              This machine substitutes for Radovan&apos;s lungs, which no longer
              function. The lore of Radovan creates a world where humans are no
              longer the only dominant species. The line between human and
              machine is blurred, and the boundaries of life and death are
              pushed to the limit. Radovan is a symbol of the ultimate desire
              for power and control. His mind is more powerful than his physical
              body, and he is willing to do anything to achieve his goal. As the
              story unfolds, we are left to wonder if Radovan will succeed in
              his quest for eternal life or if his madness will lead to his
              ultimate demise.
            </p>
          </div>
        </div>
      </FallInPlace>
    </div>
  );
};

export default Lore;

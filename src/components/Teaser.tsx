import Logo from "../assets/logo.svg?inline";
import BgVideo from "../assets/bg/bg.mp4?url";

export function Teaser() {
  return (
    <div class="aspect-[22/9] w-full text-white relative overflow-hidden bg-black">
      <div class="absolute left-0 top-0 w-full h-full">
        <video
          class="w-full h-full object-cover object-bottom"
          src={BgVideo}
          autoplay
          muted
          loop
          playsinline
          preload="auto"
        />
      </div>

      <img class="absolute left-[2vw] top-[3vw] w-[36vw]" src={Logo} alt="logo" />

      <div class="absolute left-[39vw] top-[1.5vw] text-[4vw] font-bold">2026</div>

      <div class="absolute left-[3.5vw] top-[10vw] text-[2.8vw]">第十三届</div>

      <div class="absolute left-[3.5vw] top-[13vw] text-[2.8vw]">中国可视化与可视分析大会</div>

      <div class="absolute left-[3.5vw] bottom-[4vw] text-[2.2vw] font-thin">The 13th China Visualization</div>
      <div class="absolute left-[3.5vw] bottom-[2vw] text-[2.2vw] font-thin">and Visual Analytics Conference</div>

      <div class="absolute right-[2vw] top-[22vw] text-[2.5vw] text-right font-medium">中国&centerdot;贵阳</div>

      <div class="absolute right-[2vw] top-[24.6vw] text-[2vw] text-right font-thin">China&centerdot;Guiyang</div>

      <div class="absolute right-[2vw] top-[27.6vw] text-[3.5vw] text-right leading-[2.8vw] font-bold">2026.07.19-22</div>
    </div>
  )
}
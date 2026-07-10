import { MarkdownPage } from "~/components/MarkdownPage";
import * as Dict from "~/i18n/home";

import GZBigDataLogo from "~/assets/sponsor/guizhou-big-data-horizontal.avif";
import SeewoLogo from "~/assets/sponsor/seewo.avif";
import GZCultureTourismLogo from "~/assets/sponsor/guizhou-culture-tourism-tech.avif";
import YeeHeartLogo from "~/assets/sponsor/yeeheart.avif";
import WukongImageLogo from "~/assets/sponsor/wukong-image.avif";
import JixinLogo from "~/assets/sponsor/jixin.avif";

export default function Home() {
  return (
    <MarkdownPage
      dict={Dict}
      variables={{
        GZBigDataLogo,
        SeewoLogo,
        GZCultureTourismLogo,
        YeeHeartLogo,
        WukongImageLogo,
        JixinLogo,
      }}
    />
  );
}
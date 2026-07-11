import { MarkdownPage } from "~/components/MarkdownPage";
import * as Dict from "~/i18n/home";

import GZBigDataLogo from "~/assets/sponsor/guizhou-big-data-horizontal.avif";
import SeewoLogo from "~/assets/sponsor/seewo.avif";
import GZCultureTourismLogo from "~/assets/sponsor/guizhou-culture-tourism-tech.avif";
import JixinLogo from "~/assets/sponsor/jixin-1.avif";

export default function Home() {
  return (
    <MarkdownPage
      dict={Dict}
      variables={{
        GZBigDataLogo,
        SeewoLogo,
        GZCultureTourismLogo,
        JixinLogo,
      }}
    />
  );
}
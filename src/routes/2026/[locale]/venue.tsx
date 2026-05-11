import { MarkdownPage } from "~/components/MarkdownPage";
import * as Dict from "~/i18n/venue";

import "./venue.css";

import venueCenterImage from "~/assets/venue/venue-center.avif";
import vipKing1Image from "~/assets/venue/vip-king-1.avif";
import vipKing2Image from "~/assets/venue/vip-king-2.avif";
import vipTwin1Image from "~/assets/venue/vip-twin-1.avif";
import vipTwin2Image from "~/assets/venue/vip-twin-2.avif";
import yingbinRoom1Image from "~/assets/venue/yingbin-room-1.avif";
import yingbinRoom2Image from "~/assets/venue/yingbin-room-2.avif";

export default function Venue() {
  return (
    <MarkdownPage
      dict={Dict}
      variables={{
        venueCenterImage,
        vipKing1Image,
        vipKing2Image,
        vipTwin1Image,
        vipTwin2Image,
        yingbinRoom1Image,
        yingbinRoom2Image,
      }}
    />
  );
}
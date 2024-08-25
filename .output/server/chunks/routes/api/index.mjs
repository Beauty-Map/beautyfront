import { d as defineEventHandler } from '../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';

const index = defineEventHandler((event) => {
  return [
    {
      id: 1,
      full_name: "\u062D\u062F\u06CC\u062B\u0647 \u0634\u0631\u06CC\u0641\u06CC",
      has_blue_tick: true,
      created_at_ago_fa: "1 \u0633\u0627\u0644 \u0648 2 \u0645\u0627\u0647",
      portfolios_count: 15,
      services_count: 2,
      address: "\u0633\u0627\u0644\u0646 \u0632\u06CC\u0628\u0627\u06CC\u06CC \u0639\u0631\u0648\u0633",
      distance: "17km",
      rating: 4.5,
      is_bookmarked: true,
      avatar: "/images/artist/2.png"
    },
    {
      id: 2,
      full_name: "\u062D\u062F\u06CC\u062B\u0647 \u0634\u0631\u06CC\u0641\u06CC",
      has_blue_tick: true,
      created_at_ago_fa: "1 \u0633\u0627\u0644 \u0648 2 \u0645\u0627\u0647",
      portfolios_count: 15,
      services_count: 2,
      address: "\u0633\u0627\u0644\u0646 \u0632\u06CC\u0628\u0627\u06CC\u06CC \u0639\u0631\u0648\u0633",
      distance: "17km",
      rating: 4.5,
      is_bookmarked: true,
      avatar: "/images/artist/2.png"
    },
    {
      id: 3,
      full_name: "\u062D\u062F\u06CC\u062B\u0647 \u0634\u0631\u06CC\u0641\u06CC",
      has_blue_tick: true,
      created_at_ago_fa: "1 \u0633\u0627\u0644 \u0648 2 \u0645\u0627\u0647",
      portfolios_count: 15,
      services_count: 2,
      address: "\u0633\u0627\u0644\u0646 \u0632\u06CC\u0628\u0627\u06CC\u06CC \u0639\u0631\u0648\u0633",
      distance: "17km",
      rating: 4.5,
      is_bookmarked: true,
      avatar: "/images/artist/2.png"
    },
    {
      id: 4,
      full_name: "\u062D\u062F\u06CC\u062B\u0647 \u0634\u0631\u06CC\u0641\u06CC",
      has_blue_tick: true,
      created_at_ago_fa: "1 \u0633\u0627\u0644 \u0648 2 \u0645\u0627\u0647",
      portfolios_count: 15,
      services_count: 2,
      address: "\u0633\u0627\u0644\u0646 \u0632\u06CC\u0628\u0627\u06CC\u06CC \u0639\u0631\u0648\u0633",
      distance: "17km",
      rating: 4.5,
      is_bookmarked: true,
      avatar: "/images/artist/2.png"
    },
    {
      id: 5,
      full_name: "\u062D\u062F\u06CC\u062B\u0647 \u0634\u0631\u06CC\u0641\u06CC",
      has_blue_tick: true,
      created_at_ago_fa: "1 \u0633\u0627\u0644 \u0648 2 \u0645\u0627\u0647",
      portfolios_count: 15,
      services_count: 2,
      address: "\u0633\u0627\u0644\u0646 \u0632\u06CC\u0628\u0627\u06CC\u06CC \u0639\u0631\u0648\u0633",
      distance: "17km",
      rating: 4.5,
      is_bookmarked: true,
      avatar: "/images/artist/2.png"
    },
    {
      id: 6,
      full_name: "\u062D\u062F\u06CC\u062B\u0647 \u0634\u0631\u06CC\u0641\u06CC",
      has_blue_tick: true,
      created_at_ago_fa: "1 \u0633\u0627\u0644 \u0648 2 \u0645\u0627\u0647",
      portfolios_count: 15,
      services_count: 2,
      address: "\u0633\u0627\u0644\u0646 \u0632\u06CC\u0628\u0627\u06CC\u06CC \u0639\u0631\u0648\u0633",
      distance: "17km",
      rating: 4.5,
      is_bookmarked: true,
      avatar: "/images/artist/2.png"
    },
    {
      id: 7,
      full_name: "\u062D\u062F\u06CC\u062B\u0647 \u0634\u0631\u06CC\u0641\u06CC",
      has_blue_tick: true,
      created_at_ago_fa: "1 \u0633\u0627\u0644 \u0648 2 \u0645\u0627\u0647",
      portfolios_count: 15,
      services_count: 2,
      address: "\u0633\u0627\u0644\u0646 \u0632\u06CC\u0628\u0627\u06CC\u06CC \u0639\u0631\u0648\u0633",
      distance: "17km",
      rating: 4.5,
      is_bookmarked: true,
      avatar: "/images/artist/2.png"
    },
    {
      id: 8,
      full_name: "\u062D\u062F\u06CC\u062B\u0647 \u0634\u0631\u06CC\u0641\u06CC",
      has_blue_tick: true,
      created_at_ago_fa: "1 \u0633\u0627\u0644 \u0648 2 \u0645\u0627\u0647",
      portfolios_count: 15,
      services_count: 2,
      address: "\u0633\u0627\u0644\u0646 \u0632\u06CC\u0628\u0627\u06CC\u06CC \u0639\u0631\u0648\u0633",
      distance: "17km",
      rating: 4.5,
      is_bookmarked: true,
      avatar: "/images/artist/2.png"
    },
    {
      id: 9,
      full_name: "\u062D\u062F\u06CC\u062B\u0647 \u0634\u0631\u06CC\u0641\u06CC",
      has_blue_tick: true,
      created_at_ago_fa: "1 \u0633\u0627\u0644 \u0648 2 \u0645\u0627\u0647",
      portfolios_count: 15,
      services_count: 2,
      address: "\u0633\u0627\u0644\u0646 \u0632\u06CC\u0628\u0627\u06CC\u06CC \u0639\u0631\u0648\u0633",
      distance: "17km",
      rating: 4.5,
      is_bookmarked: true,
      avatar: "/images/artist/2.png"
    },
    {
      id: 10,
      full_name: "\u062D\u062F\u06CC\u062B\u0647 \u0634\u0631\u06CC\u0641\u06CC",
      has_blue_tick: true,
      created_at_ago_fa: "1 \u0633\u0627\u0644 \u0648 2 \u0645\u0627\u0647",
      portfolios_count: 15,
      services_count: 2,
      address: "\u0633\u0627\u0644\u0646 \u0632\u06CC\u0628\u0627\u06CC\u06CC \u0639\u0631\u0648\u0633",
      distance: "17km",
      rating: 4.5,
      is_bookmarked: true,
      avatar: "/images/artist/2.png"
    }
  ];
});

export { index as default };
//# sourceMappingURL=index.mjs.map

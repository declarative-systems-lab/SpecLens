import type { MultiRouterExample } from './types';
import { assetUrl } from '../../utils/assetUrl';

export const question3Example: MultiRouterExample = {
  topologyImage: assetUrl('/figures/question3-topology.png'),
  specificationHtml: `<span><b>Customer Reachability:</b> The Customer must be able to reach ISP1-advertised prefix 198.51.100.0/24.</span>`,
  specificationPlain: `Customer Reachability: The Customer must be able to reach ISP1-advertised prefix 198.51.100.0/24.`,
  fieldSubspecs: `Field-Level Subspecs (Normalized)
==================================

Config Variable: Config_r1_CommunityList_200110__Line1__exact_community_200_110_200_110_community
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_CommunityList_200110__Line1__exact_community_200_110_action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_CommunityList_400110__Line1__exact_community_400_110_400_110_community
Subspecs (2):
  2. empty
  1. (= Config_r1_CommunityList_400110__Line1__exact_community_400_110_400_110_community true) <br>configurable = {400:110} <br>nonconfigurable = {100:210, 100:220, 200:110, 400:120, 500:210, 500:220}
--------------------------------------------------

Config Variable: Config_r1_CommunityList_400110__Line1__exact_community_400_110_action
Subspecs (2):
  2. empty
  1. (= Config_r1_CommunityList_400110__Line1__exact_community_400_110_action true)
--------------------------------------------------

Config Variable: Config_r1_CommunityList_400120__Line1__exact_community_400_120_400_120_community
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_CommunityList_400120__Line1__exact_community_400_120_action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_CommunityList_500210__Line1__exact_community_500_210_500_210_community
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_CommunityList_500210__Line1__exact_community_500_210_action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_CommunityList_500220__Line1__exact_community_500_220_500_220_community
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_CommunityList_500220__Line1__exact_community_500_220_action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_default_ips__Line1__0_0_0_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_default_ips__Line1__0_0_0_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_default_ips__Line1__0_0_0_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_default_ips__Line1__0_0_0_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_default_ips__Line1__0_0_0_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line10__201_51_110_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line10__201_51_110_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line10__201_51_110_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line10__201_51_110_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line10__201_51_110_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line1__192_0_96_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line1__192_0_96_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line1__192_0_96_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line1__192_0_96_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line1__192_0_96_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line2__192_0_96_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line2__192_0_96_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line2__192_0_96_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line2__192_0_96_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line2__192_0_96_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line3__192_51_96_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line3__192_51_96_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line3__192_51_96_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line3__192_51_96_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line3__192_51_96_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line4__192_0_2_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line4__192_0_2_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line4__192_0_2_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line4__192_0_2_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line4__192_0_2_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line5__192_0_100_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line5__192_0_100_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line5__192_0_100_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line5__192_0_100_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line5__192_0_100_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line6__192_0_100_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line6__192_0_100_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line6__192_0_100_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line6__192_0_100_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line6__192_0_100_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line7__197_51_96_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line7__197_51_96_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line7__197_51_96_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line7__197_51_96_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line7__197_51_96_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line8__198_51_96_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line8__198_51_96_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line8__198_51_96_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line8__198_51_96_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line8__198_51_96_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line9__199_51_96_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line9__199_51_96_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line9__199_51_96_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line9__199_51_96_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line9__199_51_96_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line10__198_51_110_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line10__198_51_110_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line10__198_51_110_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line10__198_51_110_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line10__198_51_110_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line11__198_51_110_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line11__198_51_110_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line11__198_51_110_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line11__198_51_110_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line11__198_51_110_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line12__198_51_108_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line12__198_51_108_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line12__198_51_108_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line12__198_51_108_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line12__198_51_108_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line13__198_51_100_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line13__198_51_100_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line13__198_51_100_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line13__198_51_100_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line13__198_51_100_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line14__198_51_96_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line14__198_51_96_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line14__198_51_96_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line14__198_51_96_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line14__198_51_96_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line15__198_51_100_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line15__198_51_100_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line15__198_51_100_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line15__198_51_100_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line15__198_51_100_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line16__198_51_96_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line16__198_51_96_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line16__198_51_96_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line16__198_51_96_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line16__198_51_96_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line1__192_0_100_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line1__192_0_100_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line1__192_0_100_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line1__192_0_100_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line1__192_0_100_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line2__192_0_108_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line2__192_0_108_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line2__192_0_108_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line2__192_0_108_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line2__192_0_108_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line3__198_0_100_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line3__198_0_100_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line3__198_0_100_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line3__198_0_100_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line3__198_0_100_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line4__192_0_0_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line4__192_0_0_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line4__192_0_0_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line4__192_0_0_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line4__192_0_0_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line5__198_0_0_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line5__198_0_0_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line5__198_0_0_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line5__198_0_0_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line5__198_0_0_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line6__192_0_220_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line6__192_0_220_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line6__192_0_220_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line6__192_0_220_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line6__192_0_220_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line7__192_0_100_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line7__192_0_100_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line7__192_0_100_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line7__192_0_100_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line7__192_0_100_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line8__198_51_110_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line8__198_51_110_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line8__198_51_110_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line8__198_51_110_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line8__198_51_110_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line9__198_51_110_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line9__198_51_110_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line9__198_51_110_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line9__198_51_110_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line9__198_51_110_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line10__192_0_2_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line10__192_0_2_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line10__192_0_2_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line10__192_0_2_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line10__192_0_2_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line11__198_51_100_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line11__198_51_100_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line11__198_51_100_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line11__198_51_100_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line11__198_51_100_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line12__192_0_0_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line12__192_0_0_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line12__192_0_0_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line12__192_0_0_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line12__192_0_0_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line1__192_0_0_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line1__192_0_0_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line1__192_0_0_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line1__192_0_0_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line1__192_0_0_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line2__192_0_0_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line2__192_0_0_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line2__192_0_0_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line2__192_0_0_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line2__192_0_0_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line3__192_0_0_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line3__192_0_0_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line3__192_0_0_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line3__192_0_0_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line3__192_0_0_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line4__198_51_100_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line4__198_51_100_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line4__198_51_100_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line4__198_51_100_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line4__198_51_100_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line5__198_51_100_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line5__198_51_100_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line5__198_51_100_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line5__198_51_100_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line5__198_51_100_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line6__198_51_101_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line6__198_51_101_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line6__198_51_101_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line6__198_51_101_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line6__198_51_101_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line7__198_51_110_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line7__198_51_110_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line7__198_51_110_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line7__198_51_110_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line7__198_51_110_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line8__198_0_0_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line8__198_0_0_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line8__198_0_0_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line8__198_0_0_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line8__198_0_0_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line9__192_51_0_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line9__192_51_0_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line9__192_51_0_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line9__192_51_0_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line9__192_51_0_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RoutingPolicy_R1_IN_FROM_ISP1__Line1__add_community_400_110_community
Subspecs (1):
  1. (= Config_r1_RoutingPolicy_R1_IN_FROM_ISP1__Line1__add_community_400_110_community true)
--------------------------------------------------

Config Variable: Config_r1_RoutingPolicy_R1_IN_FROM_ISP1__Line2__add_community_400_110_community
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RoutingPolicy_R1_IN_FROM_ISP1__Line3__add_community_400_120_community
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RoutingPolicy_R1_OUT_TO_R2__Line1__set_community_100_210_community
Subspecs (1):
  1. (= Config_r1_RoutingPolicy_R1_OUT_TO_R2__Line1__set_community_100_210_community true)
--------------------------------------------------

Config Variable: Config_r1_RoutingPolicy_R1_OUT_TO_R2__Line2__set_community_100_220_community
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_CommunityList_100210__Line1__exact_community_100_210_100_210_community
Subspecs (1):
  1. (= Config_r2_CommunityList_100210__Line1__exact_community_100_210_100_210_community true) <br>configurable = {100:210} <br>nonconfigurable = {100:220, 200:110, 400:110, 400:120, 500:210, 500:220}
--------------------------------------------------

Config Variable: Config_r2_CommunityList_100210__Line1__exact_community_100_210_action
Subspecs (1):
  1. (= Config_r2_CommunityList_100210__Line1__exact_community_100_210_action true)
--------------------------------------------------

Config Variable: Config_r2_CommunityList_100220__Line1__exact_community_100_220_100_220_community
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_CommunityList_100220__Line1__exact_community_100_220_action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_CommunityList_200110__Line1__exact_community_200_110_200_110_community
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_CommunityList_200110__Line1__exact_community_200_110_action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_CommunityList_400110__Line1__exact_community_400_110_400_110_community
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_CommunityList_400110__Line1__exact_community_400_110_action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_CommunityList_400120__Line1__exact_community_400_120_400_120_community
Subspecs (1):
  1. (= Config_r2_CommunityList_400120__Line1__exact_community_400_120_400_120_community true) <br>configurable = {400:120, 100:220, 200:110, 400:110, 500:210, 500:220} <br>nonconfigurable = {100:210}
--------------------------------------------------

Config Variable: Config_r2_CommunityList_400120__Line1__exact_community_400_120_action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_default_ips__Line1__0_0_0_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_default_ips__Line1__0_0_0_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_default_ips__Line1__0_0_0_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_default_ips__Line1__0_0_0_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_default_ips__Line1__0_0_0_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line10__203_0_120_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line10__203_0_120_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line10__203_0_120_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line10__203_0_120_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line10__203_0_120_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line11__202_0_113_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line11__202_0_113_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line11__202_0_113_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line11__202_0_113_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line11__202_0_113_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line12__203_0_113_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line12__203_0_113_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line12__203_0_113_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line12__203_0_113_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line12__203_0_113_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line13__203_100_96_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line13__203_100_96_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line13__203_100_96_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line13__203_100_96_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line13__203_100_96_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line14__203_100_112_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line14__203_100_112_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line14__203_100_112_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line14__203_100_112_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line14__203_100_112_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line15__203_200_112_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line15__203_200_112_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line15__203_200_112_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line15__203_200_112_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line15__203_200_112_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line16__203_200_112_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line16__203_200_112_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line16__203_200_112_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line16__203_200_112_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line16__203_200_112_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line1__202_0_96_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line1__202_0_96_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line1__202_0_96_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line1__202_0_96_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line1__202_0_96_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line2__202_0_96_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line2__202_0_96_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line2__202_0_96_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line2__202_0_96_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line2__202_0_96_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line3__202_0_113_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line3__202_0_113_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line3__202_0_113_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line3__202_0_113_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line3__202_0_113_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line4__203_0_112_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line4__203_0_112_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line4__203_0_112_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line4__203_0_112_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line4__203_0_112_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line5__203_0_121_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line5__203_0_121_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line5__203_0_121_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line5__203_0_121_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line5__203_0_121_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line6__203_0_123_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line6__203_0_123_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line6__203_0_123_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line6__203_0_123_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line6__203_0_123_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line7__203_0_124_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line7__203_0_124_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line7__203_0_124_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line7__203_0_124_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line7__203_0_124_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line8__203_0_100_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line8__203_0_100_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line8__203_0_100_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line8__203_0_100_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line8__203_0_100_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line9__203_0_120_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line9__203_0_120_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line9__203_0_120_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line9__203_0_120_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line9__203_0_120_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line10__203_0_113_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line10__203_0_113_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line10__203_0_113_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line10__203_0_113_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line10__203_0_113_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line11__203_0_115_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line11__203_0_115_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line11__203_0_115_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line11__203_0_115_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line11__203_0_115_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line12__203_113_0_128__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line12__203_113_0_128__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line12__203_113_0_128__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line12__203_113_0_128__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line12__203_113_0_128__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line13__203_113_111_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line13__203_113_111_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line13__203_113_111_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line13__203_113_111_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line13__203_113_111_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line14__203_113_111_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line14__203_113_111_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line14__203_113_111_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line14__203_113_111_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line14__203_113_111_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line15__203_0_113_128__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line15__203_0_113_128__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line15__203_0_113_128__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line15__203_0_113_128__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line15__203_0_113_128__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line16__0_0_0_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line16__0_0_0_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line16__0_0_0_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line16__0_0_0_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line16__0_0_0_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line1__203_51_96_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line1__203_51_96_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line1__203_51_96_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line1__203_51_96_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line1__203_51_96_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line2__203_51_96_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line2__203_51_96_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line2__203_51_96_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line2__203_51_96_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line2__203_51_96_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line3__203_51_112_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line3__203_51_112_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line3__203_51_112_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line3__203_51_112_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line3__203_51_112_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line4__203_0_110_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line4__203_0_110_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line4__203_0_110_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line4__203_0_110_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line4__203_0_110_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line5__203_0_111_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line5__203_0_111_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line5__203_0_111_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line5__203_0_111_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line5__203_0_111_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line6__192_0_0_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line6__192_0_0_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line6__192_0_0_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line6__192_0_0_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line6__192_0_0_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line7__203_113_96_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line7__203_113_96_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line7__203_113_96_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line7__203_113_96_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line7__203_113_96_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line8__203_113_112_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line8__203_113_112_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line8__203_113_112_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line8__203_113_112_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line8__203_113_112_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line9__203_113_112_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line9__203_113_112_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line9__203_113_112_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line9__203_113_112_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line9__203_113_112_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RoutingPolicy_R2_IN_FROM_ISP2__Line1__add_community_500_210_community
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RoutingPolicy_R2_IN_FROM_ISP2__Line2__add_community_500_220_community
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RoutingPolicy_R2_OUT_TO_R1__Line0__set_community_200_110_community
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_CommunityList_100210__Line1__exact_community_100_210_100_210_community
Subspecs (1):
  1. (= Config_r3_CommunityList_100210__Line1__exact_community_100_210_100_210_community true) <br>configurable = {100:210} <br>nonconfigurable = {100:220, 200:110, 400:110, 400:120, 500:210, 500:220}
--------------------------------------------------

Config Variable: Config_r3_CommunityList_100210__Line1__exact_community_100_210_action
Subspecs (1):
  1. (= Config_r3_CommunityList_100210__Line1__exact_community_100_210_action true)
--------------------------------------------------

Config Variable: Config_r3_CommunityList_100220__Line1__exact_community_100_220_100_220_community
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_CommunityList_100220__Line1__exact_community_100_220_action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_CommunityList_200110__Line1__exact_community_200_110_200_110_community
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_CommunityList_200110__Line1__exact_community_200_110_action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_CommunityList_400110__Line1__exact_community_400_110_400_110_community
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_CommunityList_400110__Line1__exact_community_400_110_action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_CommunityList_400120__Line1__exact_community_400_120_400_120_community
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_CommunityList_400120__Line1__exact_community_400_120_action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_CommunityList_500210__Line1__exact_community_500_210_500_210_community
Subspecs (1):
  1. (= Config_r3_CommunityList_500210__Line1__exact_community_500_210_500_210_community true) <br>configurable = {500:210, 100:220, 200:110, 400:110, 400:120, 500:220} <br>nonconfigurable = {100:210}
--------------------------------------------------

Config Variable: Config_r3_CommunityList_500210__Line1__exact_community_500_210_action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_CommunityList_500220__Line1__exact_community_500_220_500_220_community
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_CommunityList_500220__Line1__exact_community_500_220_action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_default_ips__Line1__0_0_0_0__action
Subspecs (2):
  2. empty
  1. (= Config_r3_RouteFilterList_default_ips__Line1__0_0_0_0__action true)
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_default_ips__Line1__0_0_0_0__ip
Subspecs (1):
  1. (= ((_ extract 31 8) |0_dst-ip|) #xc63364) AND (= (bvand |0_dst-ip| Config_r3_RouteFilterList_default_ips__Line1__0_0_0_0__mask) (bvand Config_r3_RouteFilterList_default_ips__Line1__0_0_0_0__ip Config_r3_RouteFilterList_default_ips__Line1__0_0_0_0__mask))
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_default_ips__Line1__0_0_0_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_default_ips__Line1__0_0_0_0__prefix_range_end
Subspecs (2):
  2. empty
  1. (>= Config_r3_RouteFilterList_default_ips__Line1__0_0_0_0__prefix_range_end 24) AND (<= Config_r3_RouteFilterList_default_ips__Line1__0_0_0_0__prefix_range_end 32)
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_default_ips__Line1__0_0_0_0__prefix_range_start
Subspecs (2):
  2. empty
  1. (>= Config_r3_RouteFilterList_default_ips__Line1__0_0_0_0__prefix_range_start 0) AND (<= Config_r3_RouteFilterList_default_ips__Line1__0_0_0_0__prefix_range_start 24)
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line10__192_168_139_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line10__192_168_139_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line10__192_168_139_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line10__192_168_139_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line10__192_168_139_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line11__192_168_138_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line11__192_168_138_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line11__192_168_138_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line11__192_168_138_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line11__192_168_138_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line12__192_168_129_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line12__192_168_129_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line12__192_168_129_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line12__192_168_129_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line12__192_168_129_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line13__192_0_0_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line13__192_0_0_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line13__192_0_0_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line13__192_0_0_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line13__192_0_0_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line14__192_168_0_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line14__192_168_0_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line14__192_168_0_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line14__192_168_0_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line14__192_168_0_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line15__192_168_128_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line15__192_168_128_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line15__192_168_128_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line15__192_168_128_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line15__192_168_128_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line16__192_168_128_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line16__192_168_128_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line16__192_168_128_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line16__192_168_128_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line16__192_168_128_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line1__192_168_144_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line1__192_168_144_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line1__192_168_144_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line1__192_168_144_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line1__192_168_144_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line2__192_168_144_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line2__192_168_144_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line2__192_168_144_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line2__192_168_144_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line2__192_168_144_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line3__192_168_128_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line3__192_168_128_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line3__192_168_128_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line3__192_168_128_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line3__192_168_128_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line4__192_168_140_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line4__192_168_140_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line4__192_168_140_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line4__192_168_140_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line4__192_168_140_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line5__192_169_128_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line5__192_169_128_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line5__192_169_128_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line5__192_169_128_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line5__192_169_128_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line6__192_169_129_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line6__192_169_129_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line6__192_169_129_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line6__192_169_129_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line6__192_169_129_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line7__192_169_128_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line7__192_169_128_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line7__192_169_128_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line7__192_169_128_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line7__192_169_128_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line8__192_168_128_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line8__192_168_128_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line8__192_168_128_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line8__192_168_128_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line8__192_168_128_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line9__192_168_0_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line9__192_168_0_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line9__192_168_0_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line9__192_168_0_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line9__192_168_0_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RoutingPolicy_R3_IN_FROM_R2__Line1__prepend_aspath_cost
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RoutingPolicy_R3_IN_FROM_R2__Line4__prepend_aspath_cost
Subspecs (1):
  1. empty
--------------------------------------------------

`,
  fieldSubspecsTrans: `Field-Level Subspecs (Normalized)
==================================

Config Variable: Config_r1_CommunityList_200110__Line1__exact_community_200_110_200_110_community
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_CommunityList_200110__Line1__exact_community_200_110_action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_CommunityList_400110__Line1__exact_community_400_110_400_110_community
Subspecs (2):
  2. Irrelevant / Redundant, Unrestricted
  1. (= Config_r1_CommunityList_400110__Line1__exact_community_400_110_400_110_community true) <br>configurable = {400:110} <br>nonconfigurable = {100:210, 100:220, 200:110, 400:120, 500:210, 500:220}
  1. Community = 400:110
--------------------------------------------------

Config Variable: Config_r1_CommunityList_400110__Line1__exact_community_400_110_action
Subspecs (2):
  2. Irrelevant / Redundant, Unrestricted
  1. (= Config_r1_CommunityList_400110__Line1__exact_community_400_110_action true)
  1. Action = permit
--------------------------------------------------

Config Variable: Config_r1_CommunityList_400120__Line1__exact_community_400_120_400_120_community
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_CommunityList_400120__Line1__exact_community_400_120_action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_CommunityList_500210__Line1__exact_community_500_210_500_210_community
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_CommunityList_500210__Line1__exact_community_500_210_action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_CommunityList_500220__Line1__exact_community_500_220_500_220_community
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_CommunityList_500220__Line1__exact_community_500_220_action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_default_ips__Line1__0_0_0_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_default_ips__Line1__0_0_0_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_default_ips__Line1__0_0_0_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_default_ips__Line1__0_0_0_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_default_ips__Line1__0_0_0_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line10__201_51_110_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line10__201_51_110_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line10__201_51_110_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line10__201_51_110_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line10__201_51_110_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line1__192_0_96_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line1__192_0_96_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line1__192_0_96_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line1__192_0_96_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line1__192_0_96_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line2__192_0_96_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line2__192_0_96_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line2__192_0_96_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line2__192_0_96_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line2__192_0_96_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line3__192_51_96_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line3__192_51_96_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line3__192_51_96_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line3__192_51_96_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line3__192_51_96_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line4__192_0_2_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line4__192_0_2_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line4__192_0_2_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line4__192_0_2_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line4__192_0_2_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line5__192_0_100_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line5__192_0_100_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line5__192_0_100_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line5__192_0_100_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line5__192_0_100_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line6__192_0_100_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line6__192_0_100_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line6__192_0_100_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line6__192_0_100_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line6__192_0_100_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line7__197_51_96_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line7__197_51_96_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line7__197_51_96_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line7__197_51_96_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line7__197_51_96_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line8__198_51_96_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line8__198_51_96_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line8__198_51_96_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line8__198_51_96_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line8__198_51_96_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line9__199_51_96_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line9__199_51_96_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line9__199_51_96_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line9__199_51_96_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network1__Line9__199_51_96_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line10__198_51_110_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line10__198_51_110_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line10__198_51_110_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line10__198_51_110_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line10__198_51_110_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line11__198_51_110_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line11__198_51_110_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line11__198_51_110_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line11__198_51_110_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line11__198_51_110_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line12__198_51_108_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line12__198_51_108_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line12__198_51_108_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line12__198_51_108_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line12__198_51_108_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line13__198_51_100_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line13__198_51_100_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line13__198_51_100_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line13__198_51_100_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line13__198_51_100_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line14__198_51_96_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line14__198_51_96_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line14__198_51_96_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line14__198_51_96_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line14__198_51_96_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line15__198_51_100_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line15__198_51_100_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line15__198_51_100_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line15__198_51_100_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line15__198_51_100_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line16__198_51_96_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line16__198_51_96_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line16__198_51_96_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line16__198_51_96_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line16__198_51_96_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line1__192_0_100_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line1__192_0_100_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line1__192_0_100_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line1__192_0_100_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line1__192_0_100_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line2__192_0_108_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line2__192_0_108_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line2__192_0_108_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line2__192_0_108_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line2__192_0_108_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line3__198_0_100_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line3__198_0_100_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line3__198_0_100_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line3__198_0_100_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line3__198_0_100_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line4__192_0_0_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line4__192_0_0_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line4__192_0_0_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line4__192_0_0_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line4__192_0_0_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line5__198_0_0_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line5__198_0_0_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line5__198_0_0_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line5__198_0_0_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line5__198_0_0_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line6__192_0_220_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line6__192_0_220_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line6__192_0_220_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line6__192_0_220_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line6__192_0_220_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line7__192_0_100_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line7__192_0_100_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line7__192_0_100_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line7__192_0_100_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line7__192_0_100_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line8__198_51_110_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line8__198_51_110_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line8__198_51_110_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line8__198_51_110_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line8__198_51_110_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line9__198_51_110_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line9__198_51_110_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line9__198_51_110_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line9__198_51_110_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network2__Line9__198_51_110_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line10__192_0_2_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line10__192_0_2_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line10__192_0_2_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line10__192_0_2_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line10__192_0_2_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line11__198_51_100_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line11__198_51_100_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line11__198_51_100_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line11__198_51_100_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line11__198_51_100_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line12__192_0_0_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line12__192_0_0_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line12__192_0_0_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line12__192_0_0_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line12__192_0_0_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line1__192_0_0_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line1__192_0_0_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line1__192_0_0_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line1__192_0_0_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line1__192_0_0_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line2__192_0_0_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line2__192_0_0_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line2__192_0_0_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line2__192_0_0_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line2__192_0_0_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line3__192_0_0_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line3__192_0_0_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line3__192_0_0_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line3__192_0_0_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line3__192_0_0_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line4__198_51_100_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line4__198_51_100_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line4__198_51_100_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line4__198_51_100_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line4__198_51_100_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line5__198_51_100_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line5__198_51_100_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line5__198_51_100_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line5__198_51_100_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line5__198_51_100_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line6__198_51_101_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line6__198_51_101_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line6__198_51_101_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line6__198_51_101_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line6__198_51_101_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line7__198_51_110_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line7__198_51_110_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line7__198_51_110_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line7__198_51_110_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line7__198_51_110_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line8__198_0_0_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line8__198_0_0_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line8__198_0_0_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line8__198_0_0_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line8__198_0_0_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line9__192_51_0_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line9__192_51_0_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line9__192_51_0_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line9__192_51_0_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network3__Line9__192_51_0_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RoutingPolicy_R1_IN_FROM_ISP1__Line1__add_community_400_110_community
Subspecs (1):
  1. (= Config_r1_RoutingPolicy_R1_IN_FROM_ISP1__Line1__add_community_400_110_community true)
  1. Community = 400:110
--------------------------------------------------

Config Variable: Config_r1_RoutingPolicy_R1_IN_FROM_ISP1__Line2__add_community_400_110_community
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RoutingPolicy_R1_IN_FROM_ISP1__Line3__add_community_400_120_community
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RoutingPolicy_R1_OUT_TO_R2__Line1__set_community_100_210_community
Subspecs (1):
  1. (= Config_r1_RoutingPolicy_R1_OUT_TO_R2__Line1__set_community_100_210_community true)
  1. Community = 100:210
--------------------------------------------------

Config Variable: Config_r1_RoutingPolicy_R1_OUT_TO_R2__Line2__set_community_100_220_community
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_CommunityList_100210__Line1__exact_community_100_210_100_210_community
Subspecs (1):
  1. (= Config_r2_CommunityList_100210__Line1__exact_community_100_210_100_210_community true) <br>configurable = {100:210} <br>nonconfigurable = {100:220, 200:110, 400:110, 400:120, 500:210, 500:220}
  1. Community = 100:210
--------------------------------------------------

Config Variable: Config_r2_CommunityList_100210__Line1__exact_community_100_210_action
Subspecs (1):
  1. (= Config_r2_CommunityList_100210__Line1__exact_community_100_210_action true)
  1. Action = permit
--------------------------------------------------

Config Variable: Config_r2_CommunityList_100220__Line1__exact_community_100_220_100_220_community
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_CommunityList_100220__Line1__exact_community_100_220_action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_CommunityList_200110__Line1__exact_community_200_110_200_110_community
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_CommunityList_200110__Line1__exact_community_200_110_action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_CommunityList_400110__Line1__exact_community_400_110_400_110_community
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_CommunityList_400110__Line1__exact_community_400_110_action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_CommunityList_400120__Line1__exact_community_400_120_400_120_community
Subspecs (1):
  1. (= Config_r2_CommunityList_400120__Line1__exact_community_400_120_400_120_community true) <br>configurable = {400:120, 100:220, 200:110, 400:110, 500:210, 500:220} <br>nonconfigurable = {100:210}
  1. <span style="color: red;"><b>Cannot be configured as (all others are allowed):</b></span> <br>Community = 100:210 <br><br><em>Configurable = {400:120, 100:220, 200:110, 400:110, 500:210, 500:220}</em>
--------------------------------------------------

Config Variable: Config_r2_CommunityList_400120__Line1__exact_community_400_120_action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_default_ips__Line1__0_0_0_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_default_ips__Line1__0_0_0_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_default_ips__Line1__0_0_0_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_default_ips__Line1__0_0_0_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_default_ips__Line1__0_0_0_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line10__203_0_120_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line10__203_0_120_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line10__203_0_120_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line10__203_0_120_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line10__203_0_120_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line11__202_0_113_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line11__202_0_113_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line11__202_0_113_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line11__202_0_113_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line11__202_0_113_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line12__203_0_113_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line12__203_0_113_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line12__203_0_113_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line12__203_0_113_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line12__203_0_113_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line13__203_100_96_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line13__203_100_96_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line13__203_100_96_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line13__203_100_96_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line13__203_100_96_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line14__203_100_112_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line14__203_100_112_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line14__203_100_112_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line14__203_100_112_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line14__203_100_112_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line15__203_200_112_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line15__203_200_112_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line15__203_200_112_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line15__203_200_112_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line15__203_200_112_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line16__203_200_112_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line16__203_200_112_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line16__203_200_112_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line16__203_200_112_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line16__203_200_112_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line1__202_0_96_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line1__202_0_96_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line1__202_0_96_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line1__202_0_96_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line1__202_0_96_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line2__202_0_96_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line2__202_0_96_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line2__202_0_96_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line2__202_0_96_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line2__202_0_96_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line3__202_0_113_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line3__202_0_113_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line3__202_0_113_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line3__202_0_113_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line3__202_0_113_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line4__203_0_112_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line4__203_0_112_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line4__203_0_112_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line4__203_0_112_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line4__203_0_112_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line5__203_0_121_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line5__203_0_121_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line5__203_0_121_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line5__203_0_121_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line5__203_0_121_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line6__203_0_123_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line6__203_0_123_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line6__203_0_123_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line6__203_0_123_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line6__203_0_123_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line7__203_0_124_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line7__203_0_124_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line7__203_0_124_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line7__203_0_124_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line7__203_0_124_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line8__203_0_100_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line8__203_0_100_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line8__203_0_100_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line8__203_0_100_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line8__203_0_100_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line9__203_0_120_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line9__203_0_120_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line9__203_0_120_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line9__203_0_120_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network1__Line9__203_0_120_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line10__203_0_113_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line10__203_0_113_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line10__203_0_113_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line10__203_0_113_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line10__203_0_113_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line11__203_0_115_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line11__203_0_115_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line11__203_0_115_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line11__203_0_115_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line11__203_0_115_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line12__203_113_0_128__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line12__203_113_0_128__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line12__203_113_0_128__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line12__203_113_0_128__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line12__203_113_0_128__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line13__203_113_111_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line13__203_113_111_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line13__203_113_111_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line13__203_113_111_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line13__203_113_111_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line14__203_113_111_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line14__203_113_111_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line14__203_113_111_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line14__203_113_111_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line14__203_113_111_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line15__203_0_113_128__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line15__203_0_113_128__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line15__203_0_113_128__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line15__203_0_113_128__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line15__203_0_113_128__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line16__0_0_0_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line16__0_0_0_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line16__0_0_0_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line16__0_0_0_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line16__0_0_0_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line1__203_51_96_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line1__203_51_96_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line1__203_51_96_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line1__203_51_96_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line1__203_51_96_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line2__203_51_96_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line2__203_51_96_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line2__203_51_96_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line2__203_51_96_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line2__203_51_96_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line3__203_51_112_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line3__203_51_112_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line3__203_51_112_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line3__203_51_112_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line3__203_51_112_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line4__203_0_110_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line4__203_0_110_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line4__203_0_110_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line4__203_0_110_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line4__203_0_110_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line5__203_0_111_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line5__203_0_111_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line5__203_0_111_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line5__203_0_111_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line5__203_0_111_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line6__192_0_0_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line6__192_0_0_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line6__192_0_0_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line6__192_0_0_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line6__192_0_0_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line7__203_113_96_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line7__203_113_96_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line7__203_113_96_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line7__203_113_96_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line7__203_113_96_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line8__203_113_112_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line8__203_113_112_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line8__203_113_112_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line8__203_113_112_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line8__203_113_112_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line9__203_113_112_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line9__203_113_112_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line9__203_113_112_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line9__203_113_112_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network2__Line9__203_113_112_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RoutingPolicy_R2_IN_FROM_ISP2__Line1__add_community_500_210_community
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RoutingPolicy_R2_IN_FROM_ISP2__Line2__add_community_500_220_community
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RoutingPolicy_R2_OUT_TO_R1__Line0__set_community_200_110_community
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_CommunityList_100210__Line1__exact_community_100_210_100_210_community
Subspecs (1):
  1. (= Config_r3_CommunityList_100210__Line1__exact_community_100_210_100_210_community true) <br>configurable = {100:210} <br>nonconfigurable = {100:220, 200:110, 400:110, 400:120, 500:210, 500:220}
  1. Community = 100:210
--------------------------------------------------

Config Variable: Config_r3_CommunityList_100210__Line1__exact_community_100_210_action
Subspecs (1):
  1. (= Config_r3_CommunityList_100210__Line1__exact_community_100_210_action true)
  1. Action = permit
--------------------------------------------------

Config Variable: Config_r3_CommunityList_100220__Line1__exact_community_100_220_100_220_community
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_CommunityList_100220__Line1__exact_community_100_220_action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_CommunityList_200110__Line1__exact_community_200_110_200_110_community
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_CommunityList_200110__Line1__exact_community_200_110_action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_CommunityList_400110__Line1__exact_community_400_110_400_110_community
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_CommunityList_400110__Line1__exact_community_400_110_action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_CommunityList_400120__Line1__exact_community_400_120_400_120_community
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_CommunityList_400120__Line1__exact_community_400_120_action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_CommunityList_500210__Line1__exact_community_500_210_500_210_community
Subspecs (1):
  1. (= Config_r3_CommunityList_500210__Line1__exact_community_500_210_500_210_community true) <br>configurable = {500:210, 100:220, 200:110, 400:110, 400:120, 500:220} <br>nonconfigurable = {100:210}
  1. <span style="color: red;"><b>Cannot be configured as (all others are allowed):</b></span> <br>Community = 100:210 <br><br><em>Configurable = {500:210, 100:220, 200:110, 400:110, 400:120, 500:220}</em>
--------------------------------------------------

Config Variable: Config_r3_CommunityList_500210__Line1__exact_community_500_210_action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_CommunityList_500220__Line1__exact_community_500_220_500_220_community
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_CommunityList_500220__Line1__exact_community_500_220_action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_default_ips__Line1__0_0_0_0__action
Subspecs (2):
  2. Irrelevant / Redundant, Unrestricted
  1. (= Config_r3_RouteFilterList_default_ips__Line1__0_0_0_0__action true)
  1. Action = permit
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_default_ips__Line1__0_0_0_0__ip
Subspecs (1):
  1. (= ((_ extract 31 8) |0_dst-ip|) #xc63364) AND (= (bvand |0_dst-ip| Config_r3_RouteFilterList_default_ips__Line1__0_0_0_0__mask) (bvand Config_r3_RouteFilterList_default_ips__Line1__0_0_0_0__ip Config_r3_RouteFilterList_default_ips__Line1__0_0_0_0__mask))
  1. Prefix covers 198.51.100.0/24
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_default_ips__Line1__0_0_0_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_default_ips__Line1__0_0_0_0__prefix_range_end
Subspecs (2):
  2. Irrelevant / Redundant, Unrestricted
  1. (>= Config_r3_RouteFilterList_default_ips__Line1__0_0_0_0__prefix_range_end 24) AND (<= Config_r3_RouteFilterList_default_ips__Line1__0_0_0_0__prefix_range_end 32)
  1. Prefix le range = 24~32
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_default_ips__Line1__0_0_0_0__prefix_range_start
Subspecs (2):
  2. Irrelevant / Redundant, Unrestricted
  1. (>= Config_r3_RouteFilterList_default_ips__Line1__0_0_0_0__prefix_range_start 0) AND (<= Config_r3_RouteFilterList_default_ips__Line1__0_0_0_0__prefix_range_start 24)
  1. Prefix ge range = 0~24
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line10__192_168_139_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line10__192_168_139_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line10__192_168_139_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line10__192_168_139_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line10__192_168_139_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line11__192_168_138_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line11__192_168_138_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line11__192_168_138_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line11__192_168_138_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line11__192_168_138_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line12__192_168_129_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line12__192_168_129_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line12__192_168_129_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line12__192_168_129_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line12__192_168_129_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line13__192_0_0_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line13__192_0_0_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line13__192_0_0_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line13__192_0_0_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line13__192_0_0_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line14__192_168_0_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line14__192_168_0_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line14__192_168_0_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line14__192_168_0_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line14__192_168_0_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line15__192_168_128_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line15__192_168_128_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line15__192_168_128_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line15__192_168_128_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line15__192_168_128_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line16__192_168_128_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line16__192_168_128_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line16__192_168_128_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line16__192_168_128_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line16__192_168_128_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line1__192_168_144_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line1__192_168_144_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line1__192_168_144_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line1__192_168_144_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line1__192_168_144_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line2__192_168_144_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line2__192_168_144_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line2__192_168_144_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line2__192_168_144_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line2__192_168_144_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line3__192_168_128_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line3__192_168_128_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line3__192_168_128_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line3__192_168_128_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line3__192_168_128_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line4__192_168_140_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line4__192_168_140_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line4__192_168_140_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line4__192_168_140_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line4__192_168_140_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line5__192_169_128_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line5__192_169_128_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line5__192_169_128_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line5__192_169_128_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line5__192_169_128_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line6__192_169_129_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line6__192_169_129_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line6__192_169_129_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line6__192_169_129_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line6__192_169_129_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line7__192_169_128_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line7__192_169_128_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line7__192_169_128_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line7__192_169_128_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line7__192_169_128_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line8__192_168_128_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line8__192_168_128_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line8__192_168_128_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line8__192_168_128_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line8__192_168_128_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line9__192_168_0_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line9__192_168_0_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line9__192_168_0_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line9__192_168_0_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line9__192_168_0_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RoutingPolicy_R3_IN_FROM_R2__Line1__prepend_aspath_cost
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RoutingPolicy_R3_IN_FROM_R2__Line4__prepend_aspath_cost
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

`,
  lineSubspecs: `Line-Level Subspecs (Normalized)
=================================

Line Group: Config_r1_CommunityList_200110__Line1
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r1_CommunityList_400110__Line1
Subspecs (2):
  2. empty
  1. (= Config_r1_CommunityList_400110__Line1__exact_community_400_110_400_110_community true) AND (= Config_r1_CommunityList_400110__Line1__exact_community_400_110_action true) <br>configurable (permit) = {400:110} <br>configurable (deny) &nbsp;&nbsp;= {} <br>nonconfigurable (permit) = {100:210, 100:220, 200:110, 400:120, 500:210, 500:220} <br>nonconfigurable (deny) &nbsp;&nbsp;= {400:110, 100:210, 100:220, 200:110, 400:120, 500:210, 500:220}
--------------------------------------------------

Line Group: Config_r1_CommunityList_400120__Line1
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r1_CommunityList_500210__Line1
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r1_CommunityList_500220__Line1
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_default_ips__Line1
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network1__Line1
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network1__Line10
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network1__Line2
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network1__Line3
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network1__Line4
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network1__Line5
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network1__Line6
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network1__Line7
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network1__Line8
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network1__Line9
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network2__Line1
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network2__Line10
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network2__Line11
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network2__Line12
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network2__Line13
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network2__Line14
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network2__Line15
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network2__Line16
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network2__Line2
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network2__Line3
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network2__Line4
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network2__Line5
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network2__Line6
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network2__Line7
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network2__Line8
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network2__Line9
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network3__Line1
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network3__Line10
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network3__Line11
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network3__Line12
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network3__Line2
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network3__Line3
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network3__Line4
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network3__Line5
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network3__Line6
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network3__Line7
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network3__Line8
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network3__Line9
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r1_RoutingPolicy_R1_IN_FROM_ISP1__Line1
Subspecs (1):
  1. (= Config_r1_RoutingPolicy_R1_IN_FROM_ISP1__Line1__add_community_400_110_community true)
--------------------------------------------------

Line Group: Config_r1_RoutingPolicy_R1_IN_FROM_ISP1__Line2
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r1_RoutingPolicy_R1_IN_FROM_ISP1__Line3
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r1_RoutingPolicy_R1_OUT_TO_R2__Line1
Subspecs (1):
  1. (= Config_r1_RoutingPolicy_R1_OUT_TO_R2__Line1__set_community_100_210_community true)
--------------------------------------------------

Line Group: Config_r1_RoutingPolicy_R1_OUT_TO_R2__Line2
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r2_CommunityList_100210__Line1
Subspecs (1):
  1. (= Config_r2_CommunityList_100210__Line1__exact_community_100_210_100_210_community true) AND (= Config_r2_CommunityList_100210__Line1__exact_community_100_210_action true) <br>configurable (permit) = {100:210} <br>configurable (deny) &nbsp;&nbsp;= {} <br>nonconfigurable (permit) = {100:220, 200:110, 400:110, 400:120, 500:210, 500:220} <br>nonconfigurable (deny) &nbsp;&nbsp;= {100:210, 100:220, 200:110, 400:110, 400:120, 500:210, 500:220}
--------------------------------------------------

Line Group: Config_r2_CommunityList_100220__Line1
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r2_CommunityList_200110__Line1
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r2_CommunityList_400110__Line1
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r2_CommunityList_400120__Line1
Subspecs (1):
  1. (not (and (not Config_r2_CommunityList_400120__Line1__exact_community_400_120_400_120_community) Config_r2_CommunityList_400120__Line1__exact_community_400_120_action)) <br>configurable (permit) = {400:120, 100:220, 200:110, 400:110, 500:210, 500:220} <br>configurable (deny) &nbsp;&nbsp;= {400:120, 100:210, 100:220, 200:110, 400:110, 500:210, 500:220} <br>nonconfigurable (permit) = {100:210} <br>nonconfigurable (deny) &nbsp;&nbsp;= {}
--------------------------------------------------

Line Group: Config_r2_RouteFilterList_default_ips__Line1
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r2_RouteFilterList_isp2_network1__Line1
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r2_RouteFilterList_isp2_network1__Line10
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r2_RouteFilterList_isp2_network1__Line11
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r2_RouteFilterList_isp2_network1__Line12
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r2_RouteFilterList_isp2_network1__Line13
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r2_RouteFilterList_isp2_network1__Line14
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r2_RouteFilterList_isp2_network1__Line15
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r2_RouteFilterList_isp2_network1__Line16
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r2_RouteFilterList_isp2_network1__Line2
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r2_RouteFilterList_isp2_network1__Line3
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r2_RouteFilterList_isp2_network1__Line4
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r2_RouteFilterList_isp2_network1__Line5
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r2_RouteFilterList_isp2_network1__Line6
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r2_RouteFilterList_isp2_network1__Line7
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r2_RouteFilterList_isp2_network1__Line8
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r2_RouteFilterList_isp2_network1__Line9
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r2_RouteFilterList_isp2_network2__Line1
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r2_RouteFilterList_isp2_network2__Line10
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r2_RouteFilterList_isp2_network2__Line11
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r2_RouteFilterList_isp2_network2__Line12
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r2_RouteFilterList_isp2_network2__Line13
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r2_RouteFilterList_isp2_network2__Line14
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r2_RouteFilterList_isp2_network2__Line15
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r2_RouteFilterList_isp2_network2__Line16
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r2_RouteFilterList_isp2_network2__Line2
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r2_RouteFilterList_isp2_network2__Line3
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r2_RouteFilterList_isp2_network2__Line4
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r2_RouteFilterList_isp2_network2__Line5
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r2_RouteFilterList_isp2_network2__Line6
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r2_RouteFilterList_isp2_network2__Line7
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r2_RouteFilterList_isp2_network2__Line8
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r2_RouteFilterList_isp2_network2__Line9
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r2_RoutingPolicy_R2_IN_FROM_ISP2__Line1
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r2_RoutingPolicy_R2_IN_FROM_ISP2__Line2
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r2_RoutingPolicy_R2_OUT_TO_R1__Line0
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r3_CommunityList_100210__Line1
Subspecs (1):
  1. (= Config_r3_CommunityList_100210__Line1__exact_community_100_210_100_210_community true) AND (= Config_r3_CommunityList_100210__Line1__exact_community_100_210_action true) <br>configurable (permit) = {100:210} <br>configurable (deny) &nbsp;&nbsp;= {} <br>nonconfigurable (permit) = {100:220, 200:110, 400:110, 400:120, 500:210, 500:220} <br>nonconfigurable (deny) &nbsp;&nbsp;= {100:210, 100:220, 200:110, 400:110, 400:120, 500:210, 500:220}
--------------------------------------------------

Line Group: Config_r3_CommunityList_100220__Line1
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r3_CommunityList_200110__Line1
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r3_CommunityList_400110__Line1
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r3_CommunityList_400120__Line1
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r3_CommunityList_500210__Line1
Subspecs (1):
  1. (not (and (not Config_r3_CommunityList_500210__Line1__exact_community_500_210_500_210_community) Config_r3_CommunityList_500210__Line1__exact_community_500_210_action)) <br>configurable (permit) = {500:210, 100:220, 200:110, 400:110, 400:120, 500:220} <br>configurable (deny) &nbsp;&nbsp;= {500:210, 100:210, 100:220, 200:110, 400:110, 400:120, 500:220} <br>nonconfigurable (permit) = {100:210} <br>nonconfigurable (deny) &nbsp;&nbsp;= {}
--------------------------------------------------

Line Group: Config_r3_CommunityList_500220__Line1
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r3_RouteFilterList_default_ips__Line1
Subspecs (2):
  2. empty
  1. (>= Config_r3_RouteFilterList_default_ips__Line1__0_0_0_0__prefix_range_end Config_r3_RouteFilterList_default_ips__Line1__0_0_0_0__length) AND (>= Config_r3_RouteFilterList_default_ips__Line1__0_0_0_0__prefix_range_start Config_r3_RouteFilterList_default_ips__Line1__0_0_0_0__length) AND (= ((_ extract 31 8) |0_dst-ip|) #xc63364) AND (= (bvand |0_dst-ip| Config_r3_RouteFilterList_default_ips__Line1__0_0_0_0__mask) (bvand Config_r3_RouteFilterList_default_ips__Line1__0_0_0_0__ip Config_r3_RouteFilterList_default_ips__Line1__0_0_0_0__mask)) AND (= Config_r3_RouteFilterList_default_ips__Line1__0_0_0_0__action true) AND (>= Config_r3_RouteFilterList_default_ips__Line1__0_0_0_0__length 0) AND (<= Config_r3_RouteFilterList_default_ips__Line1__0_0_0_0__length 32) AND (>= Config_r3_RouteFilterList_default_ips__Line1__0_0_0_0__prefix_range_end 24) AND (<= Config_r3_RouteFilterList_default_ips__Line1__0_0_0_0__prefix_range_end 32) AND (>= Config_r3_RouteFilterList_default_ips__Line1__0_0_0_0__prefix_range_start 0) AND (<= Config_r3_RouteFilterList_default_ips__Line1__0_0_0_0__prefix_range_start 24)
--------------------------------------------------

Line Group: Config_r3_RouteFilterList_private_ips__Line1
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r3_RouteFilterList_private_ips__Line10
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r3_RouteFilterList_private_ips__Line11
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r3_RouteFilterList_private_ips__Line12
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r3_RouteFilterList_private_ips__Line13
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r3_RouteFilterList_private_ips__Line14
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r3_RouteFilterList_private_ips__Line15
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r3_RouteFilterList_private_ips__Line16
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r3_RouteFilterList_private_ips__Line2
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r3_RouteFilterList_private_ips__Line3
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r3_RouteFilterList_private_ips__Line4
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r3_RouteFilterList_private_ips__Line5
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r3_RouteFilterList_private_ips__Line6
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r3_RouteFilterList_private_ips__Line7
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r3_RouteFilterList_private_ips__Line8
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r3_RouteFilterList_private_ips__Line9
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r3_RoutingPolicy_R3_IN_FROM_R2__Line1
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r3_RoutingPolicy_R3_IN_FROM_R2__Line4
Subspecs (1):
  1. empty
--------------------------------------------------

`,
  lineSubspecsTrans: `Line-Level Subspecs (Normalized)
=================================

Line Group: Config_r1_CommunityList_200110__Line1
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r1_CommunityList_400110__Line1
Subspecs (2):
  2. Irrelevant / Redundant, Unrestricted
  1. (= Config_r1_CommunityList_400110__Line1__exact_community_400_110_400_110_community true) AND (= Config_r1_CommunityList_400110__Line1__exact_community_400_110_action true) <br>configurable (permit) = {400:110} <br>configurable (deny) &nbsp;&nbsp;= {} <br>nonconfigurable (permit) = {100:210, 100:220, 200:110, 400:120, 500:210, 500:220} <br>nonconfigurable (deny) &nbsp;&nbsp;= {400:110, 100:210, 100:220, 200:110, 400:120, 500:210, 500:220}
  1. Action = permit <b>AND</b> <br>Community = 400:110
--------------------------------------------------

Line Group: Config_r1_CommunityList_400120__Line1
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r1_CommunityList_500210__Line1
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r1_CommunityList_500220__Line1
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_default_ips__Line1
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network1__Line1
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network1__Line10
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network1__Line2
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network1__Line3
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network1__Line4
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network1__Line5
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network1__Line6
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network1__Line7
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network1__Line8
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network1__Line9
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network2__Line1
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network2__Line10
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network2__Line11
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network2__Line12
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network2__Line13
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network2__Line14
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network2__Line15
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network2__Line16
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network2__Line2
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network2__Line3
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network2__Line4
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network2__Line5
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network2__Line6
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network2__Line7
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network2__Line8
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network2__Line9
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network3__Line1
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network3__Line10
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network3__Line11
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network3__Line12
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network3__Line2
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network3__Line3
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network3__Line4
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network3__Line5
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network3__Line6
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network3__Line7
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network3__Line8
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network3__Line9
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r1_RoutingPolicy_R1_IN_FROM_ISP1__Line1
Subspecs (1):
  1. (= Config_r1_RoutingPolicy_R1_IN_FROM_ISP1__Line1__add_community_400_110_community true)
  1. Community = 400:110
--------------------------------------------------

Line Group: Config_r1_RoutingPolicy_R1_IN_FROM_ISP1__Line2
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r1_RoutingPolicy_R1_IN_FROM_ISP1__Line3
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r1_RoutingPolicy_R1_OUT_TO_R2__Line1
Subspecs (1):
  1. (= Config_r1_RoutingPolicy_R1_OUT_TO_R2__Line1__set_community_100_210_community true)
  1. Community = 100:210
--------------------------------------------------

Line Group: Config_r1_RoutingPolicy_R1_OUT_TO_R2__Line2
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r2_CommunityList_100210__Line1
Subspecs (1):
  1. (= Config_r2_CommunityList_100210__Line1__exact_community_100_210_100_210_community true) AND (= Config_r2_CommunityList_100210__Line1__exact_community_100_210_action true) <br>configurable (permit) = {100:210} <br>configurable (deny) &nbsp;&nbsp;= {} <br>nonconfigurable (permit) = {100:220, 200:110, 400:110, 400:120, 500:210, 500:220} <br>nonconfigurable (deny) &nbsp;&nbsp;= {100:210, 100:220, 200:110, 400:110, 400:120, 500:210, 500:220}
  1. Action = permit <b>AND</b> <br>Community = 100:210
--------------------------------------------------

Line Group: Config_r2_CommunityList_100220__Line1
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r2_CommunityList_200110__Line1
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r2_CommunityList_400110__Line1
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r2_CommunityList_400120__Line1
Subspecs (1):
  1. (not (and (not Config_r2_CommunityList_400120__Line1__exact_community_400_120_400_120_community) Config_r2_CommunityList_400120__Line1__exact_community_400_120_action)) <br>configurable (permit) = {400:120, 100:220, 200:110, 400:110, 500:210, 500:220} <br>configurable (deny) &nbsp;&nbsp;= {400:120, 100:210, 100:220, 200:110, 400:110, 500:210, 500:220} <br>nonconfigurable (permit) = {100:210} <br>nonconfigurable (deny) &nbsp;&nbsp;= {}
  1. <span style="color: red;"><b>Cannot be configured as (all others are allowed):</b></span> <br>Action = permit <b>AND</b> <br>Community = 100:210 <br><br><em>Configurable (permit) = {400:120, 100:220, 200:110, 400:110, 500:210, 500:220} <br>Configurable (deny) &nbsp;&nbsp;= {400:120, 100:210, 100:220, 200:110, 400:110, 500:210, 500:220}</em>
--------------------------------------------------

Line Group: Config_r2_RouteFilterList_default_ips__Line1
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r2_RouteFilterList_isp2_network1__Line1
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r2_RouteFilterList_isp2_network1__Line10
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r2_RouteFilterList_isp2_network1__Line11
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r2_RouteFilterList_isp2_network1__Line12
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r2_RouteFilterList_isp2_network1__Line13
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r2_RouteFilterList_isp2_network1__Line14
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r2_RouteFilterList_isp2_network1__Line15
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r2_RouteFilterList_isp2_network1__Line16
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r2_RouteFilterList_isp2_network1__Line2
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r2_RouteFilterList_isp2_network1__Line3
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r2_RouteFilterList_isp2_network1__Line4
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r2_RouteFilterList_isp2_network1__Line5
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r2_RouteFilterList_isp2_network1__Line6
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r2_RouteFilterList_isp2_network1__Line7
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r2_RouteFilterList_isp2_network1__Line8
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r2_RouteFilterList_isp2_network1__Line9
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r2_RouteFilterList_isp2_network2__Line1
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r2_RouteFilterList_isp2_network2__Line10
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r2_RouteFilterList_isp2_network2__Line11
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r2_RouteFilterList_isp2_network2__Line12
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r2_RouteFilterList_isp2_network2__Line13
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r2_RouteFilterList_isp2_network2__Line14
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r2_RouteFilterList_isp2_network2__Line15
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r2_RouteFilterList_isp2_network2__Line16
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r2_RouteFilterList_isp2_network2__Line2
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r2_RouteFilterList_isp2_network2__Line3
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r2_RouteFilterList_isp2_network2__Line4
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r2_RouteFilterList_isp2_network2__Line5
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r2_RouteFilterList_isp2_network2__Line6
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r2_RouteFilterList_isp2_network2__Line7
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r2_RouteFilterList_isp2_network2__Line8
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r2_RouteFilterList_isp2_network2__Line9
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r2_RoutingPolicy_R2_IN_FROM_ISP2__Line1
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r2_RoutingPolicy_R2_IN_FROM_ISP2__Line2
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r2_RoutingPolicy_R2_OUT_TO_R1__Line0
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r3_CommunityList_100210__Line1
Subspecs (1):
  1. (= Config_r3_CommunityList_100210__Line1__exact_community_100_210_100_210_community true) AND (= Config_r3_CommunityList_100210__Line1__exact_community_100_210_action true) <br>configurable (permit) = {100:210} <br>configurable (deny) &nbsp;&nbsp;= {} <br>nonconfigurable (permit) = {100:220, 200:110, 400:110, 400:120, 500:210, 500:220} <br>nonconfigurable (deny) &nbsp;&nbsp;= {100:210, 100:220, 200:110, 400:110, 400:120, 500:210, 500:220}
  1. Action = permit <b>AND</b> <br>Community = 100:210
--------------------------------------------------

Line Group: Config_r3_CommunityList_100220__Line1
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r3_CommunityList_200110__Line1
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r3_CommunityList_400110__Line1
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r3_CommunityList_400120__Line1
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r3_CommunityList_500210__Line1
Subspecs (1):
  1. (not (and (not Config_r3_CommunityList_500210__Line1__exact_community_500_210_500_210_community) Config_r3_CommunityList_500210__Line1__exact_community_500_210_action)) <br>configurable (permit) = {500:210, 100:220, 200:110, 400:110, 400:120, 500:220} <br>configurable (deny) &nbsp;&nbsp;= {500:210, 100:210, 100:220, 200:110, 400:110, 400:120, 500:220} <br>nonconfigurable (permit) = {100:210} <br>nonconfigurable (deny) &nbsp;&nbsp;= {}
  1. <span style="color: red;"><b>Cannot be configured as (all others are allowed):</b></span> <br>Action = permit <b>AND</b> <br>Community = 100:210 <br><br><em>Configurable (permit) = {500:210, 100:220, 200:110, 400:110, 400:120, 500:220} <br>Configurable (deny) &nbsp;&nbsp;= {500:210, 100:210, 100:220, 200:110, 400:110, 400:120, 500:220}</em>
--------------------------------------------------

Line Group: Config_r3_CommunityList_500220__Line1
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r3_RouteFilterList_default_ips__Line1
Subspecs (2):
  2. Irrelevant / Redundant, Unrestricted
  1. (>= Config_r3_RouteFilterList_default_ips__Line1__0_0_0_0__prefix_range_end Config_r3_RouteFilterList_default_ips__Line1__0_0_0_0__length) AND (>= Config_r3_RouteFilterList_default_ips__Line1__0_0_0_0__prefix_range_start Config_r3_RouteFilterList_default_ips__Line1__0_0_0_0__length) AND (= ((_ extract 31 8) |0_dst-ip|) #xc63364) AND (= (bvand |0_dst-ip| Config_r3_RouteFilterList_default_ips__Line1__0_0_0_0__mask) (bvand Config_r3_RouteFilterList_default_ips__Line1__0_0_0_0__ip Config_r3_RouteFilterList_default_ips__Line1__0_0_0_0__mask)) AND (= Config_r3_RouteFilterList_default_ips__Line1__0_0_0_0__action true) AND (>= Config_r3_RouteFilterList_default_ips__Line1__0_0_0_0__length 0) AND (<= Config_r3_RouteFilterList_default_ips__Line1__0_0_0_0__length 32) AND (>= Config_r3_RouteFilterList_default_ips__Line1__0_0_0_0__prefix_range_end 24) AND (<= Config_r3_RouteFilterList_default_ips__Line1__0_0_0_0__prefix_range_end 32) AND (>= Config_r3_RouteFilterList_default_ips__Line1__0_0_0_0__prefix_range_start 0) AND (<= Config_r3_RouteFilterList_default_ips__Line1__0_0_0_0__prefix_range_start 24)
  1. Action = permit <b>AND</b> <br>Prefix covers 198.51.100.0/24 <b>AND</b> <br>Prefix ge range = 0~24 <b>AND</b> <br>Prefix le range = 24~32 <b>AND</b> <br>Prefix ge/le range >= Prefix length
--------------------------------------------------

Line Group: Config_r3_RouteFilterList_private_ips__Line1
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r3_RouteFilterList_private_ips__Line10
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r3_RouteFilterList_private_ips__Line11
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r3_RouteFilterList_private_ips__Line12
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r3_RouteFilterList_private_ips__Line13
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r3_RouteFilterList_private_ips__Line14
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r3_RouteFilterList_private_ips__Line15
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r3_RouteFilterList_private_ips__Line16
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r3_RouteFilterList_private_ips__Line2
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r3_RouteFilterList_private_ips__Line3
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r3_RouteFilterList_private_ips__Line4
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r3_RouteFilterList_private_ips__Line5
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r3_RouteFilterList_private_ips__Line6
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r3_RouteFilterList_private_ips__Line7
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r3_RouteFilterList_private_ips__Line8
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r3_RouteFilterList_private_ips__Line9
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r3_RoutingPolicy_R3_IN_FROM_R2__Line1
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r3_RoutingPolicy_R3_IN_FROM_R2__Line4
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

`,
  routers: [
    { router: 'R1', configContent: `  1 !!! Summary of BGP policies on R1 !!!
  2 ! Import policies: R1_IN_FROM_ISP1
  3 ! Export policies: R1_OUT_TO_ISP1    R1_OUT_TO_R2    R1_OUT_TO_R3
  4 !
  5 !
  6 !!! Prefix-list definitions on R1 !!!
  7 [ip prefix-list](Config_r1_RouteFilterList_default_ips__Line1) default_ips seq 5 [permit](Config_r1_RouteFilterList_default_ips__Line1__0_0_0_0__action) [0.0.0.0/0](Config_r1_RouteFilterList_default_ips__Line1__0_0_0_0__ip) [le 32](Config_r1_RouteFilterList_default_ips__Line1__0_0_0_0__prefix_range_end)
  8 !
  9 [ip prefix-list](Config_r1_RouteFilterList_isp1_network1__Line1) isp1_network1 seq  5 [permit](Config_r1_RouteFilterList_isp1_network1__Line1__192_0_96_0__action) [192.0.100.0/20](Config_r1_RouteFilterList_isp1_network1__Line1__192_0_96_0__ip)  [ge 20](Config_r1_RouteFilterList_isp1_network1__Line1__192_0_96_0__prefix_range_start)
 10 [ip prefix-list](Config_r1_RouteFilterList_isp1_network1__Line2) isp1_network1 seq 10 [permit](Config_r1_RouteFilterList_isp1_network1__Line2__192_0_96_0__action) [192.0.110.0/20](Config_r1_RouteFilterList_isp1_network1__Line2__192_0_96_0__ip)  [ge 20](Config_r1_RouteFilterList_isp1_network1__Line2__192_0_96_0__prefix_range_start)
 11 [ip prefix-list](Config_r1_RouteFilterList_isp1_network1__Line3) isp1_network1 seq 15 [permit](Config_r1_RouteFilterList_isp1_network1__Line3__192_51_96_0__action) [192.51.101.0/20](Config_r1_RouteFilterList_isp1_network1__Line3__192_51_96_0__ip) [ge 20](Config_r1_RouteFilterList_isp1_network1__Line3__192_51_96_0__prefix_range_start)
 12 [ip prefix-list](Config_r1_RouteFilterList_isp1_network1__Line4) isp1_network1 seq 20 [permit](Config_r1_RouteFilterList_isp1_network1__Line4__192_0_2_0__action) [192.0.2.0/24](Config_r1_RouteFilterList_isp1_network1__Line4__192_0_2_0__ip)    [ge 24](Config_r1_RouteFilterList_isp1_network1__Line4__192_0_2_0__prefix_range_start)
 13 [ip prefix-list](Config_r1_RouteFilterList_isp1_network1__Line5) isp1_network1 seq 25 [permit](Config_r1_RouteFilterList_isp1_network1__Line5__192_0_100_0__action) [192.0.100.0/24](Config_r1_RouteFilterList_isp1_network1__Line5__192_0_100_0__ip)  [ge 24](Config_r1_RouteFilterList_isp1_network1__Line5__192_0_100_0__prefix_range_start)
 14 [ip prefix-list](Config_r1_RouteFilterList_isp1_network1__Line6) isp1_network1 seq 30 [permit](Config_r1_RouteFilterList_isp1_network1__Line6__192_0_100_0__action) [192.0.100.0/25](Config_r1_RouteFilterList_isp1_network1__Line6__192_0_100_0__ip)  [ge 25](Config_r1_RouteFilterList_isp1_network1__Line6__192_0_100_0__prefix_range_start)
 15 [ip prefix-list](Config_r1_RouteFilterList_isp1_network1__Line7) isp1_network1 seq 35 [permit](Config_r1_RouteFilterList_isp1_network1__Line7__197_51_96_0__action) [197.51.110.0/20](Config_r1_RouteFilterList_isp1_network1__Line7__197_51_96_0__ip) [ge 23](Config_r1_RouteFilterList_isp1_network1__Line7__197_51_96_0__prefix_range_start)
 16 [ip prefix-list](Config_r1_RouteFilterList_isp1_network1__Line8) isp1_network1 seq 40 [permit](Config_r1_RouteFilterList_isp1_network1__Line8__198_51_96_0__action) [198.51.110.0/20](Config_r1_RouteFilterList_isp1_network1__Line8__198_51_96_0__ip) [ge 23](Config_r1_RouteFilterList_isp1_network1__Line8__198_51_96_0__prefix_range_start)
 17 [ip prefix-list](Config_r1_RouteFilterList_isp1_network1__Line9) isp1_network1 seq 45 [permit](Config_r1_RouteFilterList_isp1_network1__Line9__199_51_96_0__action) [199.51.110.0/20](Config_r1_RouteFilterList_isp1_network1__Line9__199_51_96_0__ip) [ge 23](Config_r1_RouteFilterList_isp1_network1__Line9__199_51_96_0__prefix_range_start)
 18 [ip prefix-list](Config_r1_RouteFilterList_isp1_network1__Line10) isp1_network1 seq 50 [permit](Config_r1_RouteFilterList_isp1_network1__Line10__201_51_110_0__action) [201.51.110.0/24](Config_r1_RouteFilterList_isp1_network1__Line10__201_51_110_0__ip) [ge 25](Config_r1_RouteFilterList_isp1_network1__Line10__201_51_110_0__prefix_range_start)
 19 !
 20 [ip prefix-list](Config_r1_RouteFilterList_isp1_network2__Line1) isp1_network2 seq  5 [permit](Config_r1_RouteFilterList_isp1_network2__Line1__192_0_100_0__action) [192.0.100.0/22](Config_r1_RouteFilterList_isp1_network2__Line1__192_0_100_0__ip)  [ge 22](Config_r1_RouteFilterList_isp1_network2__Line1__192_0_100_0__prefix_range_start)
 21 [ip prefix-list](Config_r1_RouteFilterList_isp1_network2__Line2) isp1_network2 seq 10 [permit](Config_r1_RouteFilterList_isp1_network2__Line2__192_0_108_0__action) [192.0.110.0/22](Config_r1_RouteFilterList_isp1_network2__Line2__192_0_108_0__ip)  [ge 22](Config_r1_RouteFilterList_isp1_network2__Line2__192_0_108_0__prefix_range_start)
 22 [ip prefix-list](Config_r1_RouteFilterList_isp1_network2__Line3) isp1_network2 seq 15 [permit](Config_r1_RouteFilterList_isp1_network2__Line3__198_0_100_0__action) [198.0.100.0/22](Config_r1_RouteFilterList_isp1_network2__Line3__198_0_100_0__ip)  [ge 22](Config_r1_RouteFilterList_isp1_network2__Line3__198_0_100_0__prefix_range_start)
 23 [ip prefix-list](Config_r1_RouteFilterList_isp1_network2__Line4) isp1_network2 seq 20 [deny](Config_r1_RouteFilterList_isp1_network2__Line4__192_0_0_0__action)   [192.0.0.0/8](Config_r1_RouteFilterList_isp1_network2__Line4__192_0_0_0__ip)     [ge 8](Config_r1_RouteFilterList_isp1_network2__Line4__192_0_0_0__prefix_range_start)
 24 [ip prefix-list](Config_r1_RouteFilterList_isp1_network2__Line5) isp1_network2 seq 25 [deny](Config_r1_RouteFilterList_isp1_network2__Line5__198_0_0_0__action)   [198.0.0.0/8](Config_r1_RouteFilterList_isp1_network2__Line5__198_0_0_0__ip)     [ge 8](Config_r1_RouteFilterList_isp1_network2__Line5__198_0_0_0__prefix_range_start)
 25 [ip prefix-list](Config_r1_RouteFilterList_isp1_network2__Line6) isp1_network2 seq 30 [deny](Config_r1_RouteFilterList_isp1_network2__Line6__192_0_220_0__action)   [192.0.220.0/24](Config_r1_RouteFilterList_isp1_network2__Line6__192_0_220_0__ip)
 26 [ip prefix-list](Config_r1_RouteFilterList_isp1_network2__Line7) isp1_network2 seq 35 [permit](Config_r1_RouteFilterList_isp1_network2__Line7__192_0_100_0__action) [192.0.100.0/25](Config_r1_RouteFilterList_isp1_network2__Line7__192_0_100_0__ip)  [ge 25](Config_r1_RouteFilterList_isp1_network2__Line7__192_0_100_0__prefix_range_start)
 27 [ip prefix-list](Config_r1_RouteFilterList_isp1_network2__Line8) isp1_network2 seq 40 [deny](Config_r1_RouteFilterList_isp1_network2__Line8__198_51_110_0__action)   [198.51.110.0/24](Config_r1_RouteFilterList_isp1_network2__Line8__198_51_110_0__ip)
 28 [ip prefix-list](Config_r1_RouteFilterList_isp1_network2__Line9) isp1_network2 seq 45 [permit](Config_r1_RouteFilterList_isp1_network2__Line9__198_51_110_0__action) [198.51.110.0/25](Config_r1_RouteFilterList_isp1_network2__Line9__198_51_110_0__ip) [ge 25](Config_r1_RouteFilterList_isp1_network2__Line9__198_51_110_0__prefix_range_start)
 29 [ip prefix-list](Config_r1_RouteFilterList_isp1_network2__Line10) isp1_network2 seq 50 [permit](Config_r1_RouteFilterList_isp1_network2__Line10__198_51_110_0__action) [198.51.110.0/26](Config_r1_RouteFilterList_isp1_network2__Line10__198_51_110_0__ip) [ge 26](Config_r1_RouteFilterList_isp1_network2__Line10__198_51_110_0__prefix_range_start)
 30 [ip prefix-list](Config_r1_RouteFilterList_isp1_network2__Line11) isp1_network2 seq 55 [permit](Config_r1_RouteFilterList_isp1_network2__Line11__198_51_110_0__action) [198.51.110.0/23](Config_r1_RouteFilterList_isp1_network2__Line11__198_51_110_0__ip) [ge 24](Config_r1_RouteFilterList_isp1_network2__Line11__198_51_110_0__prefix_range_start)
 31 [ip prefix-list](Config_r1_RouteFilterList_isp1_network2__Line12) isp1_network2 seq 60 [permit](Config_r1_RouteFilterList_isp1_network2__Line12__198_51_108_0__action) [198.51.110.0/22](Config_r1_RouteFilterList_isp1_network2__Line12__198_51_108_0__ip) [ge 24](Config_r1_RouteFilterList_isp1_network2__Line12__198_51_108_0__prefix_range_start)
 32 [ip prefix-list](Config_r1_RouteFilterList_isp1_network2__Line13) isp1_network2 seq 65 [permit](Config_r1_RouteFilterList_isp1_network2__Line13__198_51_100_0__action) [198.51.101.0/22](Config_r1_RouteFilterList_isp1_network2__Line13__198_51_100_0__ip) [ge 24](Config_r1_RouteFilterList_isp1_network2__Line13__198_51_100_0__prefix_range_start)
 33 [ip prefix-list](Config_r1_RouteFilterList_isp1_network2__Line14) isp1_network2 seq 70 [permit](Config_r1_RouteFilterList_isp1_network2__Line14__198_51_96_0__action) [198.51.101.0/20](Config_r1_RouteFilterList_isp1_network2__Line14__198_51_96_0__ip) [ge 20](Config_r1_RouteFilterList_isp1_network2__Line14__198_51_96_0__prefix_range_start)
 34 [ip prefix-list](Config_r1_RouteFilterList_isp1_network2__Line15) isp1_network2 seq 75 [permit](Config_r1_RouteFilterList_isp1_network2__Line15__198_51_100_0__action) [198.51.100.0/22](Config_r1_RouteFilterList_isp1_network2__Line15__198_51_100_0__ip) [ge 24](Config_r1_RouteFilterList_isp1_network2__Line15__198_51_100_0__prefix_range_start)
 35 [ip prefix-list](Config_r1_RouteFilterList_isp1_network2__Line16) isp1_network2 seq 80 [permit](Config_r1_RouteFilterList_isp1_network2__Line16__198_51_96_0__action) [198.51.100.0/20](Config_r1_RouteFilterList_isp1_network2__Line16__198_51_96_0__ip) [ge 20](Config_r1_RouteFilterList_isp1_network2__Line16__198_51_96_0__prefix_range_start)
 36 !
 37 [ip prefix-list](Config_r1_RouteFilterList_isp1_network3__Line1) isp1_network3 seq  5 [permit](Config_r1_RouteFilterList_isp1_network3__Line1__192_0_0_0__action) [192.0.1.0/16](Config_r1_RouteFilterList_isp1_network3__Line1__192_0_0_0__ip)    [ge 16](Config_r1_RouteFilterList_isp1_network3__Line1__192_0_0_0__prefix_range_start)
 38 [ip prefix-list](Config_r1_RouteFilterList_isp1_network3__Line2) isp1_network3 seq 10 [permit](Config_r1_RouteFilterList_isp1_network3__Line2__192_0_0_0__action) [192.0.2.0/16](Config_r1_RouteFilterList_isp1_network3__Line2__192_0_0_0__ip)    [ge 16](Config_r1_RouteFilterList_isp1_network3__Line2__192_0_0_0__prefix_range_start)
 39 [ip prefix-list](Config_r1_RouteFilterList_isp1_network3__Line3) isp1_network3 seq 15 [permit](Config_r1_RouteFilterList_isp1_network3__Line3__192_0_0_0__action) [192.0.3.0/16](Config_r1_RouteFilterList_isp1_network3__Line3__192_0_0_0__ip)    [ge 16](Config_r1_RouteFilterList_isp1_network3__Line3__192_0_0_0__prefix_range_start)
 40 [ip prefix-list](Config_r1_RouteFilterList_isp1_network3__Line4) isp1_network3 seq 20 [permit](Config_r1_RouteFilterList_isp1_network3__Line4__198_51_100_0__action) [198.51.100.0/26](Config_r1_RouteFilterList_isp1_network3__Line4__198_51_100_0__ip) [ge 26](Config_r1_RouteFilterList_isp1_network3__Line4__198_51_100_0__prefix_range_start)
 41 [ip prefix-list](Config_r1_RouteFilterList_isp1_network3__Line5) isp1_network3 seq 25 [permit](Config_r1_RouteFilterList_isp1_network3__Line5__198_51_100_0__action) [198.51.100.0/25](Config_r1_RouteFilterList_isp1_network3__Line5__198_51_100_0__ip) [ge 25](Config_r1_RouteFilterList_isp1_network3__Line5__198_51_100_0__prefix_range_start)
 42 [ip prefix-list](Config_r1_RouteFilterList_isp1_network3__Line6) isp1_network3 seq 30 [permit](Config_r1_RouteFilterList_isp1_network3__Line6__198_51_101_0__action) [198.51.101.0/24](Config_r1_RouteFilterList_isp1_network3__Line6__198_51_101_0__ip) [ge 24](Config_r1_RouteFilterList_isp1_network3__Line6__198_51_101_0__prefix_range_start)
 43 [ip prefix-list](Config_r1_RouteFilterList_isp1_network3__Line7) isp1_network3 seq 35 [permit](Config_r1_RouteFilterList_isp1_network3__Line7__198_51_110_0__action) [198.51.110.0/24](Config_r1_RouteFilterList_isp1_network3__Line7__198_51_110_0__ip) [ge 24](Config_r1_RouteFilterList_isp1_network3__Line7__198_51_110_0__prefix_range_start)
 44 [ip prefix-list](Config_r1_RouteFilterList_isp1_network3__Line8) isp1_network3 seq 40 [permit](Config_r1_RouteFilterList_isp1_network3__Line8__198_0_0_0__action) [198.0.0.0/16](Config_r1_RouteFilterList_isp1_network3__Line8__198_0_0_0__ip)    [ge 24](Config_r1_RouteFilterList_isp1_network3__Line8__198_0_0_0__prefix_range_start)
 45 [ip prefix-list](Config_r1_RouteFilterList_isp1_network3__Line9) isp1_network3 seq 45 [permit](Config_r1_RouteFilterList_isp1_network3__Line9__192_51_0_0__action) [192.51.0.0/16](Config_r1_RouteFilterList_isp1_network3__Line9__192_51_0_0__ip)   [ge 24](Config_r1_RouteFilterList_isp1_network3__Line9__192_51_0_0__prefix_range_start)
 46 [ip prefix-list](Config_r1_RouteFilterList_isp1_network3__Line10) isp1_network3 seq 50 [permit](Config_r1_RouteFilterList_isp1_network3__Line10__192_0_2_0__action) [192.0.2.0/24](Config_r1_RouteFilterList_isp1_network3__Line10__192_0_2_0__ip)    [ge 24](Config_r1_RouteFilterList_isp1_network3__Line10__192_0_2_0__prefix_range_start)
 47 [ip prefix-list](Config_r1_RouteFilterList_isp1_network3__Line11) isp1_network3 seq 55 [permit](Config_r1_RouteFilterList_isp1_network3__Line11__198_51_100_0__action) [198.51.100.0/24](Config_r1_RouteFilterList_isp1_network3__Line11__198_51_100_0__ip) [ge 24](Config_r1_RouteFilterList_isp1_network3__Line11__198_51_100_0__prefix_range_start)
 48 [ip prefix-list](Config_r1_RouteFilterList_isp1_network3__Line12) isp1_network3 seq 60 [deny](Config_r1_RouteFilterList_isp1_network3__Line12__192_0_0_0__action)   [192.0.0.0/4](Config_r1_RouteFilterList_isp1_network3__Line12__192_0_0_0__ip)     [ge 24](Config_r1_RouteFilterList_isp1_network3__Line12__192_0_0_0__prefix_range_start)
 49 !
 50 !
 51 !!! Community-list definitions on R1 !!!
 52 [ip community-list](Config_r1_CommunityList_400110__Line1) 400110 [permit](Config_r1_CommunityList_400110__Line1__exact_community_400_110_action) [400:110](Config_r1_CommunityList_400110__Line1__exact_community_400_110_400_110_community)
 53 !
 54 [ip community-list](Config_r1_CommunityList_400120__Line1) 400120 [permit](Config_r1_CommunityList_400120__Line1__exact_community_400_120_action) [400:120](Config_r1_CommunityList_400120__Line1__exact_community_400_120_400_120_community)
 55 !
 56 [ip community-list](Config_r1_CommunityList_500210__Line1) 500210 [permit](Config_r1_CommunityList_500210__Line1__exact_community_500_210_action) [500:210](Config_r1_CommunityList_500210__Line1__exact_community_500_210_500_210_community)
 57 !
 58 [ip community-list](Config_r1_CommunityList_500220__Line1) 500220 [permit](Config_r1_CommunityList_500220__Line1__exact_community_500_220_action) [500:220](Config_r1_CommunityList_500220__Line1__exact_community_500_220_500_220_community)
 59 !
 60 [ip community-list](Config_r1_CommunityList_200110__Line1) 200110 [permit](Config_r1_CommunityList_200110__Line1__exact_community_200_110_action) [200:110](Config_r1_CommunityList_200110__Line1__exact_community_200_110_200_110_community)
 61 !
 62 !  
 63 !!! BGP import policy on R1 from ISP1 (R1 <- ISP1) !!!
 64 route-map R1_IN_FROM_ISP1 permit 10
 65   match ip address prefix-list isp1_network1
 66   [set community](Config_r1_RoutingPolicy_R1_IN_FROM_ISP1__Line1) [400:110](Config_r1_RoutingPolicy_R1_IN_FROM_ISP1__Line1__add_community_400_110_community) additive
 67 !
 68 route-map R1_IN_FROM_ISP1 permit 20
 69   match ip address prefix-list isp1_network3
 70   [set community](Config_r1_RoutingPolicy_R1_IN_FROM_ISP1__Line2) [400:110](Config_r1_RoutingPolicy_R1_IN_FROM_ISP1__Line2__add_community_400_110_community) additive
 71 !
 72 route-map R1_IN_FROM_ISP1 permit 30
 73   match ip address prefix-list isp1_network2
 74   [set community](Config_r1_RoutingPolicy_R1_IN_FROM_ISP1__Line3) [400:120](Config_r1_RoutingPolicy_R1_IN_FROM_ISP1__Line3__add_community_400_120_community) additive
 75 !
 76 route-map R1_IN_FROM_ISP1 deny 100
 77 !
 78 !
 79 !!! BGP import policy on R1 to ISP1 (R1 -> ISP1) !!!
 80 route-map R1_OUT_TO_ISP1 deny 10
 81   match community 500210
 82 !
 83 route-map R1_OUT_TO_ISP1 deny 20
 84   match community 500220
 85 !
 86 route-map R1_OUT_TO_ISP1 deny 30
 87   match community 200110
 88 !
 89 route-map R1_OUT_TO_ISP1 permit 100
 90   match ip address prefix-list default_ips
 91 !
 92 !
 93 !!! BGP export policy on R1 to R2 (R1 -> R2) !!!
 94 route-map R1_OUT_TO_R2 permit 10
 95   match community 400110
 96   [set community](Config_r1_RoutingPolicy_R1_OUT_TO_R2__Line1) [100:210](Config_r1_RoutingPolicy_R1_OUT_TO_R2__Line1__set_community_100_210_community)
 97 !
 98 route-map R1_OUT_TO_R2 permit 20
 99   match community 400120
100   [set community](Config_r1_RoutingPolicy_R1_OUT_TO_R2__Line2) [100:220](Config_r1_RoutingPolicy_R1_OUT_TO_R2__Line2__set_community_100_220_community)
101 !
102 route-map R1_OUT_TO_R2 permit 100
103   match ip address prefix-list default_ips
104 !
105 !
106 !!! BGP export policy on R1 to R3 (R1 -> R3) !!!
107 route-map R1_OUT_TO_R3 deny 10
108   match community 400110
109 !
110 route-map R1_OUT_TO_R3 permit 20
111   match community 200110
112 !
113 route-map R1_OUT_TO_R3 deny 100
` },
    { router: 'R2', configContent: ` 1 !!! Summary of BGP policies on R2 !!!
 2 ! Import policies: R2_IN_FROM_ISP2
 3 ! Export policies: R2_OUT_TO_ISP2     R2_OUT_TO_R1
 4 !
 5 !
 6 !!! Prefix-list definitions on R2 !!!
 7 [ip prefix-list](Config_r2_RouteFilterList_default_ips__Line1) default_ips seq 5 [permit](Config_r2_RouteFilterList_default_ips__Line1__0_0_0_0__action) [0.0.0.0/0](Config_r2_RouteFilterList_default_ips__Line1__0_0_0_0__ip) [le 32](Config_r2_RouteFilterList_default_ips__Line1__0_0_0_0__prefix_range_end)
 8 !
 9 [ip prefix-list](Config_r2_RouteFilterList_isp2_network1__Line1) isp2_network1 seq  5 [permit](Config_r2_RouteFilterList_isp2_network1__Line1__202_0_96_0__action) [202.0.110.0/20](Config_r2_RouteFilterList_isp2_network1__Line1__202_0_96_0__ip)   [ge 20](Config_r2_RouteFilterList_isp2_network1__Line1__202_0_96_0__prefix_range_start)
10 [ip prefix-list](Config_r2_RouteFilterList_isp2_network1__Line2) isp2_network1 seq 10 [permit](Config_r2_RouteFilterList_isp2_network1__Line2__202_0_96_0__action) [202.0.111.0/20](Config_r2_RouteFilterList_isp2_network1__Line2__202_0_96_0__ip)   [ge 20](Config_r2_RouteFilterList_isp2_network1__Line2__202_0_96_0__prefix_range_start)
11 [ip prefix-list](Config_r2_RouteFilterList_isp2_network1__Line3) isp2_network1 seq 15 [permit](Config_r2_RouteFilterList_isp2_network1__Line3__202_0_113_0__action) [202.0.113.0/24](Config_r2_RouteFilterList_isp2_network1__Line3__202_0_113_0__ip)   [ge 24](Config_r2_RouteFilterList_isp2_network1__Line3__202_0_113_0__prefix_range_start)
12 [ip prefix-list](Config_r2_RouteFilterList_isp2_network1__Line4) isp2_network1 seq 20 [permit](Config_r2_RouteFilterList_isp2_network1__Line4__203_0_112_0__action) [203.0.120.0/20](Config_r2_RouteFilterList_isp2_network1__Line4__203_0_112_0__ip)   [ge 24](Config_r2_RouteFilterList_isp2_network1__Line4__203_0_112_0__prefix_range_start)
13 [ip prefix-list](Config_r2_RouteFilterList_isp2_network1__Line5) isp2_network1 seq 25 [permit](Config_r2_RouteFilterList_isp2_network1__Line5__203_0_121_0__action) [203.0.121.0/24](Config_r2_RouteFilterList_isp2_network1__Line5__203_0_121_0__ip)   [ge 24](Config_r2_RouteFilterList_isp2_network1__Line5__203_0_121_0__prefix_range_start)
14 [ip prefix-list](Config_r2_RouteFilterList_isp2_network1__Line6) isp2_network1 seq 30 [permit](Config_r2_RouteFilterList_isp2_network1__Line6__203_0_123_0__action) [203.0.123.0/24](Config_r2_RouteFilterList_isp2_network1__Line6__203_0_123_0__ip)   [ge 24](Config_r2_RouteFilterList_isp2_network1__Line6__203_0_123_0__prefix_range_start)
15 [ip prefix-list](Config_r2_RouteFilterList_isp2_network1__Line7) isp2_network1 seq 35 [permit](Config_r2_RouteFilterList_isp2_network1__Line7__203_0_124_0__action) [203.0.124.0/24](Config_r2_RouteFilterList_isp2_network1__Line7__203_0_124_0__ip)   [ge 24](Config_r2_RouteFilterList_isp2_network1__Line7__203_0_124_0__prefix_range_start)
16 [ip prefix-list](Config_r2_RouteFilterList_isp2_network1__Line8) isp2_network1 seq 40 [deny](Config_r2_RouteFilterList_isp2_network1__Line8__203_0_100_0__action)   [203.0.100.0/25](Config_r2_RouteFilterList_isp2_network1__Line8__203_0_100_0__ip)   [ge 26](Config_r2_RouteFilterList_isp2_network1__Line8__203_0_100_0__prefix_range_start)
17 [ip prefix-list](Config_r2_RouteFilterList_isp2_network1__Line9) isp2_network1 seq 45 [permit](Config_r2_RouteFilterList_isp2_network1__Line9__203_0_120_0__action) [203.0.120.0/25](Config_r2_RouteFilterList_isp2_network1__Line9__203_0_120_0__ip)   [ge 26](Config_r2_RouteFilterList_isp2_network1__Line9__203_0_120_0__prefix_range_start)
18 [ip prefix-list](Config_r2_RouteFilterList_isp2_network1__Line10) isp2_network1 seq 50 [deny](Config_r2_RouteFilterList_isp2_network1__Line10__203_0_120_0__action)   [203.0.120.0/25](Config_r2_RouteFilterList_isp2_network1__Line10__203_0_120_0__ip)   [ge 29](Config_r2_RouteFilterList_isp2_network1__Line10__203_0_120_0__prefix_range_start)
19 [ip prefix-list](Config_r2_RouteFilterList_isp2_network1__Line11) isp2_network1 seq 55 [deny](Config_r2_RouteFilterList_isp2_network1__Line11__202_0_113_0__action)   [202.0.113.0/24](Config_r2_RouteFilterList_isp2_network1__Line11__202_0_113_0__ip)   [ge 25](Config_r2_RouteFilterList_isp2_network1__Line11__202_0_113_0__prefix_range_start)
20 [ip prefix-list](Config_r2_RouteFilterList_isp2_network1__Line12) isp2_network1 seq 60 [deny](Config_r2_RouteFilterList_isp2_network1__Line12__203_0_113_0__action)   [203.0.113.0/24](Config_r2_RouteFilterList_isp2_network1__Line12__203_0_113_0__ip)   [ge 25](Config_r2_RouteFilterList_isp2_network1__Line12__203_0_113_0__prefix_range_start)
21 [ip prefix-list](Config_r2_RouteFilterList_isp2_network1__Line13) isp2_network1 seq 65 [permit](Config_r2_RouteFilterList_isp2_network1__Line13__203_100_96_0__action) [203.100.111.0/20](Config_r2_RouteFilterList_isp2_network1__Line13__203_100_96_0__ip) [ge 24](Config_r2_RouteFilterList_isp2_network1__Line13__203_100_96_0__prefix_range_start)
22 [ip prefix-list](Config_r2_RouteFilterList_isp2_network1__Line14) isp2_network1 seq 70 [permit](Config_r2_RouteFilterList_isp2_network1__Line14__203_100_112_0__action) [203.100.112.0/20](Config_r2_RouteFilterList_isp2_network1__Line14__203_100_112_0__ip) [ge 24](Config_r2_RouteFilterList_isp2_network1__Line14__203_100_112_0__prefix_range_start)
23 [ip prefix-list](Config_r2_RouteFilterList_isp2_network1__Line15) isp2_network1 seq 75 [permit](Config_r2_RouteFilterList_isp2_network1__Line15__203_200_112_0__action) [203.200.113.0/20](Config_r2_RouteFilterList_isp2_network1__Line15__203_200_112_0__ip) [ge 24](Config_r2_RouteFilterList_isp2_network1__Line15__203_200_112_0__prefix_range_start)
24 [ip prefix-list](Config_r2_RouteFilterList_isp2_network1__Line16) isp2_network1 seq 80 [permit](Config_r2_RouteFilterList_isp2_network1__Line16__203_200_112_0__action) [203.200.114.0/20](Config_r2_RouteFilterList_isp2_network1__Line16__203_200_112_0__ip) [ge 24](Config_r2_RouteFilterList_isp2_network1__Line16__203_200_112_0__prefix_range_start)
25 !
26 [ip prefix-list](Config_r2_RouteFilterList_isp2_network2__Line1) isp2_network2 seq  5 [permit](Config_r2_RouteFilterList_isp2_network2__Line1__203_51_96_0__action) [203.51.110.0/20](Config_r2_RouteFilterList_isp2_network2__Line1__203_51_96_0__ip)  [ge 20](Config_r2_RouteFilterList_isp2_network2__Line1__203_51_96_0__prefix_range_start)
27 [ip prefix-list](Config_r2_RouteFilterList_isp2_network2__Line2) isp2_network2 seq 10 [permit](Config_r2_RouteFilterList_isp2_network2__Line2__203_51_96_0__action) [203.51.111.0/20](Config_r2_RouteFilterList_isp2_network2__Line2__203_51_96_0__ip)  [ge 20](Config_r2_RouteFilterList_isp2_network2__Line2__203_51_96_0__prefix_range_start)
28 [ip prefix-list](Config_r2_RouteFilterList_isp2_network2__Line3) isp2_network2 seq 15 [permit](Config_r2_RouteFilterList_isp2_network2__Line3__203_51_112_0__action) [203.51.112.0/20](Config_r2_RouteFilterList_isp2_network2__Line3__203_51_112_0__ip)  [ge 20](Config_r2_RouteFilterList_isp2_network2__Line3__203_51_112_0__prefix_range_start)
29 [ip prefix-list](Config_r2_RouteFilterList_isp2_network2__Line4) isp2_network2 seq 20 [permit](Config_r2_RouteFilterList_isp2_network2__Line4__203_0_110_0__action) [203.0.110.0/24](Config_r2_RouteFilterList_isp2_network2__Line4__203_0_110_0__ip)   [ge 24](Config_r2_RouteFilterList_isp2_network2__Line4__203_0_110_0__prefix_range_start)
30 [ip prefix-list](Config_r2_RouteFilterList_isp2_network2__Line5) isp2_network2 seq 25 [permit](Config_r2_RouteFilterList_isp2_network2__Line5__203_0_111_0__action) [203.0.111.0/24](Config_r2_RouteFilterList_isp2_network2__Line5__203_0_111_0__ip)   [ge 24](Config_r2_RouteFilterList_isp2_network2__Line5__203_0_111_0__prefix_range_start)
31 [ip prefix-list](Config_r2_RouteFilterList_isp2_network2__Line6) isp2_network2 seq 30 [deny](Config_r2_RouteFilterList_isp2_network2__Line6__192_0_0_0__action)   [192.0.0.0/4](Config_r2_RouteFilterList_isp2_network2__Line6__192_0_0_0__ip)      [ge 24](Config_r2_RouteFilterList_isp2_network2__Line6__192_0_0_0__prefix_range_start)
32 [ip prefix-list](Config_r2_RouteFilterList_isp2_network2__Line7) isp2_network2 seq 35 [permit](Config_r2_RouteFilterList_isp2_network2__Line7__203_113_96_0__action) [203.113.111.0/20](Config_r2_RouteFilterList_isp2_network2__Line7__203_113_96_0__ip) [ge 24](Config_r2_RouteFilterList_isp2_network2__Line7__203_113_96_0__prefix_range_start)
33 [ip prefix-list](Config_r2_RouteFilterList_isp2_network2__Line8) isp2_network2 seq 40 [permit](Config_r2_RouteFilterList_isp2_network2__Line8__203_113_112_0__action) [203.113.112.0/20](Config_r2_RouteFilterList_isp2_network2__Line8__203_113_112_0__ip) [ge 24](Config_r2_RouteFilterList_isp2_network2__Line8__203_113_112_0__prefix_range_start)
34 [ip prefix-list](Config_r2_RouteFilterList_isp2_network2__Line9) isp2_network2 seq 45 [permit](Config_r2_RouteFilterList_isp2_network2__Line9__203_113_112_0__action) [203.113.113.0/20](Config_r2_RouteFilterList_isp2_network2__Line9__203_113_112_0__ip) [ge 24](Config_r2_RouteFilterList_isp2_network2__Line9__203_113_112_0__prefix_range_start)
35 [ip prefix-list](Config_r2_RouteFilterList_isp2_network2__Line10) isp2_network2 seq 50 [permit](Config_r2_RouteFilterList_isp2_network2__Line10__203_0_113_0__action) [203.0.113.0/24](Config_r2_RouteFilterList_isp2_network2__Line10__203_0_113_0__ip)   [ge 24](Config_r2_RouteFilterList_isp2_network2__Line10__203_0_113_0__prefix_range_start)
36 [ip prefix-list](Config_r2_RouteFilterList_isp2_network2__Line11) isp2_network2 seq 55 [permit](Config_r2_RouteFilterList_isp2_network2__Line11__203_0_115_0__action) [203.0.115.0/24](Config_r2_RouteFilterList_isp2_network2__Line11__203_0_115_0__ip)   [ge 24](Config_r2_RouteFilterList_isp2_network2__Line11__203_0_115_0__prefix_range_start)
37 [ip prefix-list](Config_r2_RouteFilterList_isp2_network2__Line12) isp2_network2 seq 60 [deny](Config_r2_RouteFilterList_isp2_network2__Line12__203_113_0_128__action)   [203.113.0.128/25](Config_r2_RouteFilterList_isp2_network2__Line12__203_113_0_128__ip) [ge 26](Config_r2_RouteFilterList_isp2_network2__Line12__203_113_0_128__prefix_range_start)
38 [ip prefix-list](Config_r2_RouteFilterList_isp2_network2__Line13) isp2_network2 seq 65 [permit](Config_r2_RouteFilterList_isp2_network2__Line13__203_113_111_0__action) [203.113.111.0/25](Config_r2_RouteFilterList_isp2_network2__Line13__203_113_111_0__ip) [ge 26](Config_r2_RouteFilterList_isp2_network2__Line13__203_113_111_0__prefix_range_start)
39 [ip prefix-list](Config_r2_RouteFilterList_isp2_network2__Line14) isp2_network2 seq 70 [deny](Config_r2_RouteFilterList_isp2_network2__Line14__203_113_111_0__action)   [203.113.111.0/25](Config_r2_RouteFilterList_isp2_network2__Line14__203_113_111_0__ip) [ge 29](Config_r2_RouteFilterList_isp2_network2__Line14__203_113_111_0__prefix_range_start)
40 [ip prefix-list](Config_r2_RouteFilterList_isp2_network2__Line15) isp2_network2 seq 75 [deny](Config_r2_RouteFilterList_isp2_network2__Line15__203_0_113_128__action)   [203.0.113.128/25](Config_r2_RouteFilterList_isp2_network2__Line15__203_0_113_128__ip) [ge 26](Config_r2_RouteFilterList_isp2_network2__Line15__203_0_113_128__prefix_range_start)
41 [ip prefix-list](Config_r2_RouteFilterList_isp2_network2__Line16) isp2_network2 seq 80 [deny](Config_r2_RouteFilterList_isp2_network2__Line16__0_0_0_0__action)   [0.0.0.0/0](Config_r2_RouteFilterList_isp2_network2__Line16__0_0_0_0__ip)        [le 32](Config_r2_RouteFilterList_isp2_network2__Line16__0_0_0_0__prefix_range_end)
42 !
43 !
44 !!! Community-list definitions on R2 !!!
45 [ip community-list](Config_r2_CommunityList_400110__Line1) 400110 [permit](Config_r2_CommunityList_400110__Line1__exact_community_400_110_action) [400:110](Config_r2_CommunityList_400110__Line1__exact_community_400_110_400_110_community)
46 !                                                       
47 [ip community-list](Config_r2_CommunityList_400120__Line1) 400120 [permit](Config_r2_CommunityList_400120__Line1__exact_community_400_120_action) [400:120](Config_r2_CommunityList_400120__Line1__exact_community_400_120_400_120_community)
48 !                                                       
49 [ip community-list](Config_r2_CommunityList_100210__Line1) 100210 [permit](Config_r2_CommunityList_100210__Line1__exact_community_100_210_action) [100:210](Config_r2_CommunityList_100210__Line1__exact_community_100_210_100_210_community)
50 !                                                       
51 [ip community-list](Config_r2_CommunityList_100220__Line1) 100220 [permit](Config_r2_CommunityList_100220__Line1__exact_community_100_220_action) [100:220](Config_r2_CommunityList_100220__Line1__exact_community_100_220_100_220_community)
52 !                                                       
53 [ip community-list](Config_r2_CommunityList_200110__Line1) 200110 [permit](Config_r2_CommunityList_200110__Line1__exact_community_200_110_action) [200:110](Config_r2_CommunityList_200110__Line1__exact_community_200_110_200_110_community)
54 !
55 !
56 !!! BGP import policy on R2 from ISP2 (R2 <- ISP2) !!!
57 route-map R2_IN_FROM_ISP2 permit 10
58   match ip address prefix-list isp2_network1
59   [set community](Config_r2_RoutingPolicy_R2_IN_FROM_ISP2__Line1) [500:210](Config_r2_RoutingPolicy_R2_IN_FROM_ISP2__Line1__add_community_500_210_community) additive
60 !
61 route-map R2_IN_FROM_ISP2 permit 20
62   match ip address prefix-list isp2_network2
63   [set community](Config_r2_RoutingPolicy_R2_IN_FROM_ISP2__Line2) [500:220](Config_r2_RoutingPolicy_R2_IN_FROM_ISP2__Line2__add_community_500_220_community) additive
64 !
65 route-map R2_IN_FROM_ISP2 deny 100
66 !
67 !
68 !!! BGP export policy on R2 to ISP2 (R2 -> ISP2) !!!
69 route-map R2_OUT_TO_ISP2 deny 10
70   match community 400110
71 !
72 route-map R2_OUT_TO_ISP2 permit 20
73   match community 400120
74 !
75 route-map R2_OUT_TO_ISP2 deny 30
76   match community 100210
77 !
78 route-map R2_OUT_TO_ISP2 permit 40
79   match community 100220
80 !
81 route-map R2_OUT_TO_ISP2 permit 50
82   match community 200110
83 !
84 route-map R2_OUT_TO_ISP2 permit 100
85   match ip address prefix-list default_ips
86 !
87 !
88 !!! BGP export policy on R2 to R1 (R2 -> R1) !!!
89 route-map R2_OUT_TO_R1 permit 10
90   [set community](Config_r2_RoutingPolicy_R2_OUT_TO_R1__Line0) [200:110](Config_r2_RoutingPolicy_R2_OUT_TO_R1__Line0__set_community_200_110_community)
` },
    { router: 'R3', configContent: ` 1 !!! Summary of BGP policies on R3 !!!
 2 ! Import policies: R3_IN_FROM_R2    R3_IN_FROM_Customer
 3 ! Export policies: R3_OUT_TO_Customer
 4 !
 5 !
 6 !!! Prefix-list definitions on R3 !!!
 7 [ip prefix-list](Config_r3_RouteFilterList_default_ips__Line1) default_ips seq 5 [permit](Config_r3_RouteFilterList_default_ips__Line1__0_0_0_0__action) [0.0.0.0/0](Config_r3_RouteFilterList_default_ips__Line1__0_0_0_0__ip) [le 32](Config_r3_RouteFilterList_default_ips__Line1__0_0_0_0__prefix_range_end)
 8 !
 9 [ip prefix-list](Config_r3_RouteFilterList_private_ips__Line1) private_ips seq  5 [deny](Config_r3_RouteFilterList_private_ips__Line1__192_168_144_0__action)   [192.168.144.0/20](Config_r3_RouteFilterList_private_ips__Line1__192_168_144_0__ip) [ge 20](Config_r3_RouteFilterList_private_ips__Line1__192_168_144_0__prefix_range_start) [le 32](Config_r3_RouteFilterList_private_ips__Line1__192_168_144_0__prefix_range_end)
10 [ip prefix-list](Config_r3_RouteFilterList_private_ips__Line2) private_ips seq 10 [permit](Config_r3_RouteFilterList_private_ips__Line2__192_168_144_0__action) [192.168.144.0/20](Config_r3_RouteFilterList_private_ips__Line2__192_168_144_0__ip) [ge 22](Config_r3_RouteFilterList_private_ips__Line2__192_168_144_0__prefix_range_start) [le 32](Config_r3_RouteFilterList_private_ips__Line2__192_168_144_0__prefix_range_end)
11 [ip prefix-list](Config_r3_RouteFilterList_private_ips__Line3) private_ips seq 15 [permit](Config_r3_RouteFilterList_private_ips__Line3__192_168_128_0__action) [192.168.130.0/22](Config_r3_RouteFilterList_private_ips__Line3__192_168_128_0__ip) [ge 22](Config_r3_RouteFilterList_private_ips__Line3__192_168_128_0__prefix_range_start) [le 32](Config_r3_RouteFilterList_private_ips__Line3__192_168_128_0__prefix_range_end)
12 [ip prefix-list](Config_r3_RouteFilterList_private_ips__Line4) private_ips seq 20 [permit](Config_r3_RouteFilterList_private_ips__Line4__192_168_140_0__action) [192.168.142.0/22](Config_r3_RouteFilterList_private_ips__Line4__192_168_140_0__ip) [ge 24](Config_r3_RouteFilterList_private_ips__Line4__192_168_140_0__prefix_range_start) [le 32](Config_r3_RouteFilterList_private_ips__Line4__192_168_140_0__prefix_range_end)
13 [ip prefix-list](Config_r3_RouteFilterList_private_ips__Line5) private_ips seq 25 [deny](Config_r3_RouteFilterList_private_ips__Line5__192_169_128_0__action)   [192.169.142.0/20](Config_r3_RouteFilterList_private_ips__Line5__192_169_128_0__ip) [ge 24](Config_r3_RouteFilterList_private_ips__Line5__192_169_128_0__prefix_range_start) [le 32](Config_r3_RouteFilterList_private_ips__Line5__192_169_128_0__prefix_range_end)
14 [ip prefix-list](Config_r3_RouteFilterList_private_ips__Line6) private_ips seq 30 [deny](Config_r3_RouteFilterList_private_ips__Line6__192_169_129_0__action)   [192.169.129.0/24](Config_r3_RouteFilterList_private_ips__Line6__192_169_129_0__ip) [ge 24](Config_r3_RouteFilterList_private_ips__Line6__192_169_129_0__prefix_range_start) [le 32](Config_r3_RouteFilterList_private_ips__Line6__192_169_129_0__prefix_range_end)
15 [ip prefix-list](Config_r3_RouteFilterList_private_ips__Line7) private_ips seq 35 [deny](Config_r3_RouteFilterList_private_ips__Line7__192_169_128_0__action)   [192.169.128.0/24](Config_r3_RouteFilterList_private_ips__Line7__192_169_128_0__ip) [ge 24](Config_r3_RouteFilterList_private_ips__Line7__192_169_128_0__prefix_range_start) [le 32](Config_r3_RouteFilterList_private_ips__Line7__192_169_128_0__prefix_range_end)
16 [ip prefix-list](Config_r3_RouteFilterList_private_ips__Line8) private_ips seq 40 [deny](Config_r3_RouteFilterList_private_ips__Line8__192_168_128_0__action)   [192.168.128.0/24](Config_r3_RouteFilterList_private_ips__Line8__192_168_128_0__ip) [ge 24](Config_r3_RouteFilterList_private_ips__Line8__192_168_128_0__prefix_range_start) [le 32](Config_r3_RouteFilterList_private_ips__Line8__192_168_128_0__prefix_range_end)
17 [ip prefix-list](Config_r3_RouteFilterList_private_ips__Line9) private_ips seq 45 [deny](Config_r3_RouteFilterList_private_ips__Line9__192_168_0_0__action)   [192.168.0.0/16](Config_r3_RouteFilterList_private_ips__Line9__192_168_0_0__ip)   [ge 16](Config_r3_RouteFilterList_private_ips__Line9__192_168_0_0__prefix_range_start) [le 32](Config_r3_RouteFilterList_private_ips__Line9__192_168_0_0__prefix_range_end)
18 [ip prefix-list](Config_r3_RouteFilterList_private_ips__Line10) private_ips seq 50 [permit](Config_r3_RouteFilterList_private_ips__Line10__192_168_139_0__action) [192.168.139.0/24](Config_r3_RouteFilterList_private_ips__Line10__192_168_139_0__ip) [ge 24](Config_r3_RouteFilterList_private_ips__Line10__192_168_139_0__prefix_range_start) [le 32](Config_r3_RouteFilterList_private_ips__Line10__192_168_139_0__prefix_range_end)
19 [ip prefix-list](Config_r3_RouteFilterList_private_ips__Line11) private_ips seq 55 [permit](Config_r3_RouteFilterList_private_ips__Line11__192_168_138_0__action) [192.168.138.0/24](Config_r3_RouteFilterList_private_ips__Line11__192_168_138_0__ip) [ge 24](Config_r3_RouteFilterList_private_ips__Line11__192_168_138_0__prefix_range_start) [le 32](Config_r3_RouteFilterList_private_ips__Line11__192_168_138_0__prefix_range_end)
20 [ip prefix-list](Config_r3_RouteFilterList_private_ips__Line12) private_ips seq 60 [deny](Config_r3_RouteFilterList_private_ips__Line12__192_168_129_0__action)   [192.168.129.0/24](Config_r3_RouteFilterList_private_ips__Line12__192_168_129_0__ip) [ge 24](Config_r3_RouteFilterList_private_ips__Line12__192_168_129_0__prefix_range_start) [le 32](Config_r3_RouteFilterList_private_ips__Line12__192_168_129_0__prefix_range_end)
21 [ip prefix-list](Config_r3_RouteFilterList_private_ips__Line13) private_ips seq 65 [deny](Config_r3_RouteFilterList_private_ips__Line13__192_0_0_0__action)   [192.0.0.0/8](Config_r3_RouteFilterList_private_ips__Line13__192_0_0_0__ip)      [ge  8](Config_r3_RouteFilterList_private_ips__Line13__192_0_0_0__prefix_range_start) [le 32](Config_r3_RouteFilterList_private_ips__Line13__192_0_0_0__prefix_range_end)
22 [ip prefix-list](Config_r3_RouteFilterList_private_ips__Line14) private_ips seq 70 [permit](Config_r3_RouteFilterList_private_ips__Line14__192_168_0_0__action) [192.168.0.0/16](Config_r3_RouteFilterList_private_ips__Line14__192_168_0_0__ip)   [ge 16](Config_r3_RouteFilterList_private_ips__Line14__192_168_0_0__prefix_range_start) [le 32](Config_r3_RouteFilterList_private_ips__Line14__192_168_0_0__prefix_range_end)
23 [ip prefix-list](Config_r3_RouteFilterList_private_ips__Line15) private_ips seq 75 [permit](Config_r3_RouteFilterList_private_ips__Line15__192_168_128_0__action) [192.168.128.0/20](Config_r3_RouteFilterList_private_ips__Line15__192_168_128_0__ip) [ge 20](Config_r3_RouteFilterList_private_ips__Line15__192_168_128_0__prefix_range_start) [le 32](Config_r3_RouteFilterList_private_ips__Line15__192_168_128_0__prefix_range_end)
24 [ip prefix-list](Config_r3_RouteFilterList_private_ips__Line16) private_ips seq 80 [permit](Config_r3_RouteFilterList_private_ips__Line16__192_168_128_0__action) [192.168.129.0/20](Config_r3_RouteFilterList_private_ips__Line16__192_168_128_0__ip) [ge 20](Config_r3_RouteFilterList_private_ips__Line16__192_168_128_0__prefix_range_start) [le 32](Config_r3_RouteFilterList_private_ips__Line16__192_168_128_0__prefix_range_end)
25 !
26 !
27 !!! Community-list definitions on R3 !!!
28 [ip community-list](Config_r3_CommunityList_400110__Line1) 400110 [permit](Config_r3_CommunityList_400110__Line1__exact_community_400_110_action) [400:110](Config_r3_CommunityList_400110__Line1__exact_community_400_110_400_110_community)
29 !                                                       
30 [ip community-list](Config_r3_CommunityList_400120__Line1) 400120 [permit](Config_r3_CommunityList_400120__Line1__exact_community_400_120_action) [400:120](Config_r3_CommunityList_400120__Line1__exact_community_400_120_400_120_community)
31 !                                                       
32 [ip community-list](Config_r3_CommunityList_500210__Line1) 500210 [permit](Config_r3_CommunityList_500210__Line1__exact_community_500_210_action) [500:210](Config_r3_CommunityList_500210__Line1__exact_community_500_210_500_210_community)
33 !                                                       
34 [ip community-list](Config_r3_CommunityList_500220__Line1) 500220 [permit](Config_r3_CommunityList_500220__Line1__exact_community_500_220_action) [500:220](Config_r3_CommunityList_500220__Line1__exact_community_500_220_500_220_community)
35 !                                                       
36 [ip community-list](Config_r3_CommunityList_100210__Line1) 100210 [permit](Config_r3_CommunityList_100210__Line1__exact_community_100_210_action) [100:210](Config_r3_CommunityList_100210__Line1__exact_community_100_210_100_210_community)
37 !                                                       
38 [ip community-list](Config_r3_CommunityList_100220__Line1) 100220 [permit](Config_r3_CommunityList_100220__Line1__exact_community_100_220_action) [100:220](Config_r3_CommunityList_100220__Line1__exact_community_100_220_100_220_community)
39 !                                                       
40 [ip community-list](Config_r3_CommunityList_100220__Line1) 200110 [permit](Config_r3_CommunityList_100220__Line1__exact_community_100_220_action) [200:110](Config_r3_CommunityList_200110__Line1__exact_community_200_110_200_110_community)
41 !
42 !
43 !!! BGP import policy on R3 from R2 (R3 <- R2) !!!
44 route-map R3_IN_FROM_R2 permit 10
45   match community 500210
46   [set as-path](Config_r3_RoutingPolicy_R3_IN_FROM_R2__Line1) prepend [200](Config_r3_RoutingPolicy_R3_IN_FROM_R2__Line1__prepend_aspath_cost)
47 !
48 route-map R3_IN_FROM_R2 permit 20
49   match community 100210
50 !
51 route-map R3_IN_FROM_R2 deny 30
52   match community 500220
53 !
54 route-map R3_IN_FROM_R2 permit 40
55   match community 200110
56   [set as-path](Config_r3_RoutingPolicy_R3_IN_FROM_R2__Line4) prepend [200 200](Config_r3_RoutingPolicy_R3_IN_FROM_R2__Line4__prepend_aspath_cost)
57 !
58 route-map R3_IN_FROM_R2 deny 50
59   match community 400110
60 !
61 route-map R3_IN_FROM_R2 deny 60
62   match community 400120
63 !
64 route-map R3_IN_FROM_R2 permit 70
65   match community 100220
66 !
67 route-map R3_IN_FROM_R2 deny 100
68 !
69 !
70 !!! BGP import policy on R3 from Customer (R3 <- Customer) !!!
71 route-map R3_IN_FROM_Customer deny 10
72   match ip address prefix-list private_ips
73 !
74 route-map R3_IN_FROM_Customer permit 100
75   match ip address prefix-list default_ips
76 !
77 !
78 !!! BGP export policy on R3 to Customer (R3 -> Customer) !!!
79 route-map R3_OUT_TO_Customer permit 10
80   match community 400110
81 !
82 route-map R3_OUT_TO_Customer permit 20
83   match community 400120
84 !
85 route-map R3_OUT_TO_Customer permit 100
86   match ip address prefix-list default_ips
` },
  ],
};

import type { ConfigExample } from './types';

export const questionIntroExample: ConfigExample = {
  router: 'R1',
  specificationPlain:
    'Route Propagation: The Customer must be able to reach ISP1-advertised prefix 10.0.0.0/8.',
  specificationHtml: `<span style="text-decoration: underline;"><b>Route Propagation:</b> The Customer must be able to reach ISP1-advertised prefix 10.0.0.0/8.</span>`,
  specificationHtmlZh: `<span style="text-decoration: underline;"><b>路由传播：</b>Customer 必须能够访问 ISP1 宣告的 10.0.0.0/8 前缀。</span>`,
  configContent: ` 1 !!! Summary of BGP policies on R1 !!!
 2 ! Import policies: R1_IN_FROM_ISP1
 3 ! Export policies: R1_OUT_TO_Customer
 4 !
 5 !
 6 !!! Prefix-list definitions on R1 !!!
 7 ip prefix-list default_ips seq 5 permit 0.0.0.0/0 le 32
 8 !
 9 [ip prefix-list](Config_r1_RouteFilterList_network_10_0_0_0__Line1) network_10_0_0_0 seq 5 [permit](Config_r1_RouteFilterList_network_10_0_0_0__Line1__10_0_0_0__action) [10.0.0.0/8](Config_r1_RouteFilterList_network_10_0_0_0__Line1__10_0_0_0__ip) [ge 8](Config_r1_RouteFilterList_network_10_0_0_0__Line1__10_0_0_0__prefix_range_start)
10 !
11 [ip prefix-list](Config_r1_RouteFilterList_network_192_168_0_0__Line1) network_192_168_0_0 seq 5 [permit](Config_r1_RouteFilterList_network_192_168_0_0__Line1__192_168_0_0__action) [192.168.0.0/16](Config_r1_RouteFilterList_network_192_168_0_0__Line1__192_168_0_0__ip) [ge 16](Config_r1_RouteFilterList_network_192_168_0_0__Line1__192_168_0_0__prefix_range_start)
12 !
13 !
14 !!! Community-list definitions on R1 !!!
15 [ip community-list](Config_r1_CommunityList_400100__Line1) 400100 [permit](Config_r1_CommunityList_400100__Line1__exact_community_400_100_action) [400:100](Config_r1_CommunityList_400100__Line1__exact_community_400_100_400_100_community)
16 !
17 !
18 !!! BGP import policy on R1 from ISP1 (R1 <- ISP1) !!!
19 route-map R1_IN_FROM_ISP1 permit 10
20   match ip address prefix-list network_10_0_0_0
21   [set community](Config_r1_RoutingPolicy_R1_IN_FROM_ISP1__Line1) [400:100](Config_r1_RoutingPolicy_R1_IN_FROM_ISP1__Line1__add_community_400_100_community) additive
22 !
23 route-map R1_IN_FROM_ISP1 permit 20
24   match ip address prefix-list network_192_168_0_0
25   [set community](Config_r1_RoutingPolicy_R1_IN_FROM_ISP1__Line2) [500:200](Config_r1_RoutingPolicy_R1_IN_FROM_ISP1__Line2__add_community_500_200_community) additive
26 !
27 route-map R1_IN_FROM_ISP1 deny 100
28   match ip address prefix-list default_ips
29 !
30 !
31 !!! BGP export policy on R1 to Customer (R1 -> Customer) !!!
32 route-map R1_OUT_TO_Customer permit 10
33   match community 400100
34 !
35 route-map R1_OUT_TO_Customer deny 100
36   match ip address prefix-list default_ips`,
  fieldSubspecs: `Field-Level Subspecs (Normalized)
==================================

Config Variable: Config_r1_CommunityList_400100__Line1__exact_community_400_100_400_100_community
Subspecs (1):
  1. (= Config_r1_CommunityList_400100__Line1__exact_community_400_100_400_100_community true)
--------------------------------------------------

Config Variable: Config_r1_CommunityList_400100__Line1__exact_community_400_100_action
Subspecs (1):
  1. (= Config_r1_CommunityList_400100__Line1__exact_community_400_100_action true)
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_network_10_0_0_0__Line1__10_0_0_0__action
Subspecs (1):
  1. (= Config_r1_RouteFilterList_network_10_0_0_0__Line1__10_0_0_0__action true)
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_network_10_0_0_0__Line1__10_0_0_0__ip
Subspecs (1):
  1. (= ((_ extract 31 24) |0_dst-ip|) #x0a) AND (= (bvand |0_dst-ip| Config_r1_RouteFilterList_network_10_0_0_0__Line1__10_0_0_0__mask) (bvand Config_r1_RouteFilterList_network_10_0_0_0__Line1__10_0_0_0__ip Config_r1_RouteFilterList_network_10_0_0_0__Line1__10_0_0_0__mask))
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_network_10_0_0_0__Line1__10_0_0_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_network_10_0_0_0__Line1__10_0_0_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_network_10_0_0_0__Line1__10_0_0_0__prefix_range_start
Subspecs (1):
  1. (= Config_r1_RouteFilterList_network_10_0_0_0__Line1__10_0_0_0__prefix_range_start 8)
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_network_192_168_0_0__Line1__192_168_0_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_network_192_168_0_0__Line1__192_168_0_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_network_192_168_0_0__Line1__192_168_0_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_network_192_168_0_0__Line1__192_168_0_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_network_192_168_0_0__Line1__192_168_0_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RoutingPolicy_R1_IN_FROM_ISP1__Line1__add_community_400_100_community
Subspecs (1):
  1. (= Config_r1_RoutingPolicy_R1_IN_FROM_ISP1__Line1__add_community_400_100_community true)
--------------------------------------------------

Config Variable: Config_r1_RoutingPolicy_R1_IN_FROM_ISP1__Line2__add_community_500_200_community
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------`,
  fieldSubspecsTrans: `Field-Level Subspecs (Normalized)
==================================

Config Variable: Config_r1_CommunityList_400100__Line1__exact_community_400_100_400_100_community
Subspecs (1):
  1. Community = 400:100
--------------------------------------------------

Config Variable: Config_r1_CommunityList_400100__Line1__exact_community_400_100_action
Subspecs (1):
  1. Action = permit
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_network_10_0_0_0__Line1__10_0_0_0__action
Subspecs (1):
  1. Action = permit
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_network_10_0_0_0__Line1__10_0_0_0__ip
Subspecs (1):
  1. Prefix covers 10.0.0.0/8
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_network_10_0_0_0__Line1__10_0_0_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_network_10_0_0_0__Line1__10_0_0_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_network_10_0_0_0__Line1__10_0_0_0__prefix_range_start
Subspecs (1):
  1. Prefix ge range = 8~8
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_network_192_168_0_0__Line1__192_168_0_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_network_192_168_0_0__Line1__192_168_0_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_network_192_168_0_0__Line1__192_168_0_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_network_192_168_0_0__Line1__192_168_0_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_network_192_168_0_0__Line1__192_168_0_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RoutingPolicy_R1_IN_FROM_ISP1__Line1__add_community_400_100_community
Subspecs (1):
  1. Community = 400:100
--------------------------------------------------

Config Variable: Config_r1_RoutingPolicy_R1_IN_FROM_ISP1__Line2__add_community_500_200_community
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------`,
  lineSubspecs: `Line-Level Subspecs (Normalized)
=================================

Line Group: Config_r1_CommunityList_400100__Line1
Subspecs (1):
  1. (= Config_r1_CommunityList_400100__Line1__exact_community_400_100_400_100_community true) AND (= Config_r1_CommunityList_400100__Line1__exact_community_400_100_action true)
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_network_10_0_0_0__Line1
Subspecs (1):
  1. (>= Config_r1_RouteFilterList_network_10_0_0_0__Line1__10_0_0_0__prefix_range_end Config_r1_RouteFilterList_network_10_0_0_0__Line1__10_0_0_0__length) AND (>= Config_r1_RouteFilterList_network_10_0_0_0__Line1__10_0_0_0__prefix_range_start Config_r1_RouteFilterList_network_10_0_0_0__Line1__10_0_0_0__length) AND (= ((_ extract 31 24) |0_dst-ip|) #x0a) AND (= (bvand |0_dst-ip| Config_r1_RouteFilterList_network_10_0_0_0__Line1__10_0_0_0__mask) (bvand Config_r1_RouteFilterList_network_10_0_0_0__Line1__10_0_0_0__ip Config_r1_RouteFilterList_network_10_0_0_0__Line1__10_0_0_0__mask)) AND (= Config_r1_RouteFilterList_network_10_0_0_0__Line1__10_0_0_0__action true) AND (>= Config_r1_RouteFilterList_network_10_0_0_0__Line1__10_0_0_0__length 0) AND (<= Config_r1_RouteFilterList_network_10_0_0_0__Line1__10_0_0_0__length 32) AND (>= Config_r1_RouteFilterList_network_10_0_0_0__Line1__10_0_0_0__prefix_range_end 8) AND (<= Config_r1_RouteFilterList_network_10_0_0_0__Line1__10_0_0_0__prefix_range_end 32) AND (>= Config_r1_RouteFilterList_network_10_0_0_0__Line1__10_0_0_0__prefix_range_start 0) AND (<= Config_r1_RouteFilterList_network_10_0_0_0__Line1__10_0_0_0__prefix_range_start 8)
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_network_192_168_0_0__Line1
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r1_RoutingPolicy_R1_IN_FROM_ISP1__Line1
Subspecs (1):
  1. (= Config_r1_RoutingPolicy_R1_IN_FROM_ISP1__Line1__add_community_400_100_community true)
--------------------------------------------------

Line Group: Config_r1_RoutingPolicy_R1_IN_FROM_ISP1__Line2
Subspecs (1):
  1. empty
--------------------------------------------------`,
  lineSubspecsTrans: `Line-Level Subspecs (Normalized)
=================================

Line Group: Config_r1_CommunityList_400100__Line1
Subspecs (1):
  1. Action = permit AND Community = 400:100
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_network_10_0_0_0__Line1
Subspecs (1):
  1. Action = permit AND Prefix covers 10.0.0.0/8 AND Prefix ge range = 0~8 AND Prefix le range = 8~32 AND Prefix ge/le range >= Prefix length
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_network_192_168_0_0__Line1
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r1_RoutingPolicy_R1_IN_FROM_ISP1__Line1
Subspecs (1):
  1. Community = 400:100
--------------------------------------------------

Line Group: Config_r1_RoutingPolicy_R1_IN_FROM_ISP1__Line2
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------`,
  fieldSubspecsTransZh: `Field-Level Subspecs (Normalized)
==================================

Config Variable: Config_r1_CommunityList_400100__Line1__exact_community_400_100_400_100_community
Subspecs (1):
  1. Community 应配置为 400:100
--------------------------------------------------

Config Variable: Config_r1_CommunityList_400100__Line1__exact_community_400_100_action
Subspecs (1):
  1. Action 应配置为 permit
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_network_10_0_0_0__Line1__10_0_0_0__action
Subspecs (1):
  1. Action 应配置为 permit
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_network_10_0_0_0__Line1__10_0_0_0__ip
Subspecs (1):
  1. 基础网络前缀应包含 10.0.0.0/8
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_network_10_0_0_0__Line1__10_0_0_0__length
Subspecs (1):
  1. 与规约无关 / 冗余，无限制
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_network_10_0_0_0__Line1__10_0_0_0__prefix_range_end
Subspecs (1):
  1. 与规约无关 / 冗余，无限制
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_network_10_0_0_0__Line1__10_0_0_0__prefix_range_start
Subspecs (1):
  1. 最小 (ge) 前缀长度范围为 8~8
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_network_192_168_0_0__Line1__192_168_0_0__action
Subspecs (1):
  1. 与规约无关 / 冗余，无限制
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_network_192_168_0_0__Line1__192_168_0_0__ip
Subspecs (1):
  1. 与规约无关 / 冗余，无限制
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_network_192_168_0_0__Line1__192_168_0_0__length
Subspecs (1):
  1. 与规约无关 / 冗余，无限制
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_network_192_168_0_0__Line1__192_168_0_0__prefix_range_end
Subspecs (1):
  1. 与规约无关 / 冗余，无限制
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_network_192_168_0_0__Line1__192_168_0_0__prefix_range_start
Subspecs (1):
  1. 与规约无关 / 冗余，无限制
--------------------------------------------------

Config Variable: Config_r1_RoutingPolicy_R1_IN_FROM_ISP1__Line1__add_community_400_100_community
Subspecs (1):
  1. Community 应配置为 400:100
--------------------------------------------------

Config Variable: Config_r1_RoutingPolicy_R1_IN_FROM_ISP1__Line2__add_community_500_200_community
Subspecs (1):
  1. 与规约无关 / 冗余，无限制
--------------------------------------------------`,
  lineSubspecsTransZh: `Line-Level Subspecs (Normalized)
=================================

Line Group: Config_r1_CommunityList_400100__Line1
Subspecs (1):
  1. Action 应配置为 permit <b>并且</b> <br>Community 应配置为 400:100
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_network_10_0_0_0__Line1
Subspecs (1):
  1. Action 应配置为 permit <b>并且</b> <br>基础网络前缀应包含 10.0.0.0/8 <b>并且</b> <br>最小 (ge) 前缀长度范围为 0~8 <b>并且</b> <br>最大 (le) 前缀长度范围为 8~32 <b>并且</b> <br>最小 (ge) 与最大 (le) 前缀长度 >= 基础网络前缀长度
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_network_192_168_0_0__Line1
Subspecs (1):
  1. 与规约无关 / 冗余，无限制
--------------------------------------------------

Line Group: Config_r1_RoutingPolicy_R1_IN_FROM_ISP1__Line1
Subspecs (1):
  1. Community 应配置为 400:100
--------------------------------------------------

Line Group: Config_r1_RoutingPolicy_R1_IN_FROM_ISP1__Line2
Subspecs (1):
  1. 与规约无关 / 冗余，无限制
--------------------------------------------------`,
};

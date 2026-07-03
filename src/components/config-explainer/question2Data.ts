import type { MultiRouterExample } from './types';

export const question2Example: MultiRouterExample = {
  topologyImage: '/figures/question2-topology.png',
  specificationHtml: `<span><b>Private Prefix Filtering:</b> The router R3 must <span style="color: red; font-weight: bold;">not reach</span> Customer-advertised private prefixes 192.168.128.0/24 and 192.168.129.0/24.</span>`,
  specificationPlain: `Private Prefix Filtering: The router R3 must not reach Customer-advertised private prefixes 192.168.128.0/24 and 192.168.129.0/24.`,
  fieldSubspecs: `Field-Level Subspecs (Normalized)
==================================

Config Variable: Config_r1_CommunityList_200100__Line1__exact_community_200_100_200_100_community
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_CommunityList_200100__Line1__exact_community_200_100_action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_CommunityList_400100__Line1__exact_community_400_100_400_100_community
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_CommunityList_400100__Line1__exact_community_400_100_action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_CommunityList_500200__Line1__exact_community_500_200_500_200_community
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_CommunityList_500200__Line1__exact_community_500_200_action
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

Config Variable: Config_r1_RouteFilterList_isp1_network__Line1__198_51_96_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network__Line1__198_51_96_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network__Line1__198_51_96_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network__Line1__198_51_96_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network__Line1__198_51_96_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network__Line2__192_0_2_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network__Line2__192_0_2_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network__Line2__192_0_2_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network__Line2__192_0_2_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network__Line2__192_0_2_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network__Line3__198_51_100_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network__Line3__198_51_100_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network__Line3__198_51_100_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network__Line3__198_51_100_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network__Line3__198_51_100_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r1_RoutingPolicy_R1_IN_FROM_ISP1__Line1__add_community_400_100_community
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_CommunityList_400100__Line1__exact_community_400_100_400_100_community
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_CommunityList_400100__Line1__exact_community_400_100_action
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

Config Variable: Config_r2_RouteFilterList_isp2_network__Line1__203_0_113_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network__Line1__203_0_113_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network__Line1__203_0_113_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network__Line1__203_0_113_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network__Line1__203_0_113_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RoutingPolicy_R2_IN_FROM_ISP2__Line1__add_community_500_200_community
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r2_RoutingPolicy_R2_OUT_TO_R1__Line0__set_community_200_100_community
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_CommunityList_400100__Line1__exact_community_400_100_400_100_community
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_CommunityList_400100__Line1__exact_community_400_100_action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_CommunityList_500200__Line1__exact_community_500_200_500_200_community
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_CommunityList_500200__Line1__exact_community_500_200_action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_default_ips__Line1__0_0_0_0__action
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_default_ips__Line1__0_0_0_0__ip
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_default_ips__Line1__0_0_0_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_default_ips__Line1__0_0_0_0__prefix_range_end
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_default_ips__Line1__0_0_0_0__prefix_range_start
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__action
Subspecs (1):
  1. (= Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__action true)
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__ip
Subspecs (1):
  1. (= ((_ extract 31 8) |0_dst-ip|) #xc0a880) AND (= (bvand |0_dst-ip| Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__mask) (bvand Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__ip Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__mask))
  1. (= ((_ extract 31 8) |0_dst-ip|) #xc0a881) AND (= (bvand |0_dst-ip| Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__mask) (bvand Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__ip Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__mask))
  1. (or (= ((_ extract 31 8) |0_dst-ip|) #xc0a880) (= ((_ extract 31 8) |0_dst-ip|) #xc0a881)) AND (= (bvand |0_dst-ip| Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__mask) (bvand Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__ip Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__mask))
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__length
Subspecs (1):
  1. empty
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__prefix_range_end
Subspecs (1):
  1. (>= Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__prefix_range_end 24) AND (<= Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__prefix_range_end 32)
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__prefix_range_start
Subspecs (1):
  1. (>= Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__prefix_range_start 16) AND (<= Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__prefix_range_start 24)
--------------------------------------------------

Config Variable: Config_r3_RoutingPolicy_R3_IN_FROM_R2__Line2__prepend_aspath_cost
Subspecs (1):
  1. empty
--------------------------------------------------`,
  fieldSubspecsTrans: `Field-Level Subspecs (Normalized)
==================================

Config Variable: Config_r1_CommunityList_200100__Line1__exact_community_200_100_200_100_community
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_CommunityList_200100__Line1__exact_community_200_100_action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_CommunityList_400100__Line1__exact_community_400_100_400_100_community
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_CommunityList_400100__Line1__exact_community_400_100_action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_CommunityList_500200__Line1__exact_community_500_200_500_200_community
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_CommunityList_500200__Line1__exact_community_500_200_action
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

Config Variable: Config_r1_RouteFilterList_isp1_network__Line1__198_51_96_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network__Line1__198_51_96_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network__Line1__198_51_96_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network__Line1__198_51_96_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network__Line1__198_51_96_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network__Line2__192_0_2_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network__Line2__192_0_2_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network__Line2__192_0_2_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network__Line2__192_0_2_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network__Line2__192_0_2_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network__Line3__198_51_100_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network__Line3__198_51_100_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network__Line3__198_51_100_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network__Line3__198_51_100_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RouteFilterList_isp1_network__Line3__198_51_100_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r1_RoutingPolicy_R1_IN_FROM_ISP1__Line1__add_community_400_100_community
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_CommunityList_400100__Line1__exact_community_400_100_400_100_community
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_CommunityList_400100__Line1__exact_community_400_100_action
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

Config Variable: Config_r2_RouteFilterList_isp2_network__Line1__203_0_113_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network__Line1__203_0_113_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network__Line1__203_0_113_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network__Line1__203_0_113_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RouteFilterList_isp2_network__Line1__203_0_113_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RoutingPolicy_R2_IN_FROM_ISP2__Line1__add_community_500_200_community
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r2_RoutingPolicy_R2_OUT_TO_R1__Line0__set_community_200_100_community
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_CommunityList_400100__Line1__exact_community_400_100_400_100_community
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_CommunityList_400100__Line1__exact_community_400_100_action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_CommunityList_500200__Line1__exact_community_500_200_500_200_community
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_CommunityList_500200__Line1__exact_community_500_200_action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_default_ips__Line1__0_0_0_0__action
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_default_ips__Line1__0_0_0_0__ip
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_default_ips__Line1__0_0_0_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_default_ips__Line1__0_0_0_0__prefix_range_end
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_default_ips__Line1__0_0_0_0__prefix_range_start
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__action
Subspecs (1):
  1. (= Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__action true)
  1. Action = permit
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__ip
Subspecs (1):
  1. (= ((_ extract 31 8) |0_dst-ip|) #xc0a880) AND (= (bvand |0_dst-ip| Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__mask) (bvand Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__ip Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__mask))
  1. (= ((_ extract 31 8) |0_dst-ip|) #xc0a881) AND (= (bvand |0_dst-ip| Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__mask) (bvand Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__ip Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__mask))
  1. (or (= ((_ extract 31 8) |0_dst-ip|) #xc0a880) (= ((_ extract 31 8) |0_dst-ip|) #xc0a881)) AND (= (bvand |0_dst-ip| Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__mask) (bvand Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__ip Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__mask))
  1. Prefix covers 192.168.128.0/23 <br>(aggregated from 192.168.128.0/24 and 192.168.129.0/24)
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__length
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__prefix_range_end
Subspecs (1):
  1. (>= Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__prefix_range_end 24) AND (<= Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__prefix_range_end 32)
  1. Prefix le range = 24~32
--------------------------------------------------

Config Variable: Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__prefix_range_start
Subspecs (1):
  1. (>= Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__prefix_range_start 16) AND (<= Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__prefix_range_start 24)
  1. Prefix ge range = 16~24
--------------------------------------------------

Config Variable: Config_r3_RoutingPolicy_R3_IN_FROM_R2__Line2__prepend_aspath_cost
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------`,
  lineSubspecs: `Line-Level Subspecs (Normalized)
=================================

Line Group: Config_r1_CommunityList_200100__Line1
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r1_CommunityList_400100__Line1
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r1_CommunityList_500200__Line1
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_default_ips__Line1
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network__Line1
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network__Line2
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network__Line3
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r1_RoutingPolicy_R1_IN_FROM_ISP1__Line1
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r2_CommunityList_400100__Line1
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r2_RouteFilterList_default_ips__Line1
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r2_RouteFilterList_isp2_network__Line1
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r2_RoutingPolicy_R2_IN_FROM_ISP2__Line1
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r2_RoutingPolicy_R2_OUT_TO_R1__Line0
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r3_CommunityList_400100__Line1
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r3_CommunityList_500200__Line1
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r3_RouteFilterList_default_ips__Line1
Subspecs (1):
  1. empty
--------------------------------------------------

Line Group: Config_r3_RouteFilterList_private_ips__Line1
Subspecs (1):
  1. (>= Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__prefix_range_end Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__length) AND (>= Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__prefix_range_start Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__length) AND (= ((_ extract 31 8) |0_dst-ip|) #xc0a880) AND (= (bvand |0_dst-ip| Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__mask) (bvand Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__ip Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__mask)) AND (= Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__action true) AND (>= Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__length 0) AND (<= Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__length 32) AND (>= Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__prefix_range_end 24) AND (<= Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__prefix_range_end 32) AND (>= Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__prefix_range_start 0) AND (<= Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__prefix_range_start 24)
  1. (>= Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__prefix_range_end Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__length) AND (>= Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__prefix_range_start Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__length) AND (= ((_ extract 31 8) |0_dst-ip|) #xc0a881) AND (= (bvand |0_dst-ip| Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__mask) (bvand Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__ip Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__mask)) AND (= Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__action true) AND (>= Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__length 0) AND (<= Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__length 32) AND (>= Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__prefix_range_end 24) AND (<= Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__prefix_range_end 32) AND (>= Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__prefix_range_start 0) AND (<= Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__prefix_range_start 24)
  1. (>= Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__prefix_range_end Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__length) AND (>= Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__prefix_range_start Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__length) AND (or (= ((_ extract 31 8) |0_dst-ip|) #xc0a880) (= ((_ extract 31 8) |0_dst-ip|) #xc0a881)) AND (= (bvand |0_dst-ip| Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__mask) (bvand Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__ip Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__mask)) AND (= Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__action true) AND (>= Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__length 0) AND (<= Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__length 32) AND (>= Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__prefix_range_end 24) AND (<= Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__prefix_range_end 32) AND (>= Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__prefix_range_start 0) AND (<= Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__prefix_range_start 24)
--------------------------------------------------

Line Group: Config_r3_RoutingPolicy_R3_IN_FROM_R2__Line2
Subspecs (1):
  1. empty
--------------------------------------------------`,
  lineSubspecsTrans: `Line-Level Subspecs (Normalized)
=================================

Line Group: Config_r1_CommunityList_200100__Line1
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r1_CommunityList_400100__Line1
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r1_CommunityList_500200__Line1
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_default_ips__Line1
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network__Line1
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network__Line2
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r1_RouteFilterList_isp1_network__Line3
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r1_RoutingPolicy_R1_IN_FROM_ISP1__Line1
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r2_CommunityList_400100__Line1
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r2_RouteFilterList_default_ips__Line1
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r2_RouteFilterList_isp2_network__Line1
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r2_RoutingPolicy_R2_IN_FROM_ISP2__Line1
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r2_RoutingPolicy_R2_OUT_TO_R1__Line0
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r3_CommunityList_400100__Line1
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r3_CommunityList_500200__Line1
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r3_RouteFilterList_default_ips__Line1
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------

Line Group: Config_r3_RouteFilterList_private_ips__Line1
Subspecs (1):
  1. (>= Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__prefix_range_end Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__length) AND (>= Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__prefix_range_start Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__length) AND (= ((_ extract 31 8) |0_dst-ip|) #xc0a880) AND (= (bvand |0_dst-ip| Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__mask) (bvand Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__ip Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__mask)) AND (= Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__action true) AND (>= Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__length 0) AND (<= Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__length 32) AND (>= Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__prefix_range_end 24) AND (<= Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__prefix_range_end 32) AND (>= Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__prefix_range_start 0) AND (<= Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__prefix_range_start 24)
  1. (>= Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__prefix_range_end Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__length) AND (>= Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__prefix_range_start Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__length) AND (= ((_ extract 31 8) |0_dst-ip|) #xc0a881) AND (= (bvand |0_dst-ip| Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__mask) (bvand Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__ip Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__mask)) AND (= Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__action true) AND (>= Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__length 0) AND (<= Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__length 32) AND (>= Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__prefix_range_end 24) AND (<= Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__prefix_range_end 32) AND (>= Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__prefix_range_start 0) AND (<= Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__prefix_range_start 24)
  1. (>= Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__prefix_range_end Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__length) AND (>= Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__prefix_range_start Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__length) AND (or (= ((_ extract 31 8) |0_dst-ip|) #xc0a880) (= ((_ extract 31 8) |0_dst-ip|) #xc0a881)) AND (= (bvand |0_dst-ip| Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__mask) (bvand Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__ip Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__mask)) AND (= Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__action true) AND (>= Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__length 0) AND (<= Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__length 32) AND (>= Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__prefix_range_end 24) AND (<= Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__prefix_range_end 32) AND (>= Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__prefix_range_start 0) AND (<= Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__prefix_range_start 24)
  1. Action = permit <b>AND</b> <br>Prefix covers 192.168.128.0/23 <br>(aggregated from 192.168.128.0/24 and 192.168.129.0/24) <b>AND</b> <br>Prefix ge range = 0~24 <b>AND</b> <br>Prefix le range = 24~32 <b>AND</b> <br>Prefix ge/le range >= Prefix length
--------------------------------------------------

Line Group: Config_r3_RoutingPolicy_R3_IN_FROM_R2__Line2
Subspecs (1):
  1. Irrelevant / Redundant, Unrestricted
--------------------------------------------------`,
  routers: [
    { router: 'R1', configContent: ` 1 !!! Summary of BGP policies on R1 !!!
 2 ! Import policies: R1_IN_FROM_ISP1
 3 ! Export policies: R1_OUT_TO_ISP1     R1_OUT_TO_R3
 4 !
 5 !
 6 !!! Prefix-list definitions on R1 !!!
 7 [ip prefix-list](Config_r1_RouteFilterList_default_ips__Line1) default_ips seq 5 [permit](Config_r1_RouteFilterList_default_ips__Line1__0_0_0_0__action) [0.0.0.0/0](Config_r1_RouteFilterList_default_ips__Line1__0_0_0_0__ip) [le 32](Config_r1_RouteFilterList_default_ips__Line1__0_0_0_0__prefix_range_end)
 8 !
 9 [ip prefix-list](Config_r1_RouteFilterList_isp1_network__Line1) isp1_network seq  5 [permit](Config_r1_RouteFilterList_isp1_network__Line1__198_51_96_0__action) [198.51.110.0/20](Config_r1_RouteFilterList_isp1_network__Line1__198_51_96_0__ip) [ge 20](Config_r1_RouteFilterList_isp1_network__Line1__198_51_96_0__prefix_range_start)
10 [ip prefix-list](Config_r1_RouteFilterList_isp1_network__Line2) isp1_network seq 10 [permit](Config_r1_RouteFilterList_isp1_network__Line2__192_0_2_0__action) [192.0.2.0/24](Config_r1_RouteFilterList_isp1_network__Line2__192_0_2_0__ip)    [ge 24](Config_r1_RouteFilterList_isp1_network__Line2__192_0_2_0__prefix_range_start)
11 [ip prefix-list](Config_r1_RouteFilterList_isp1_network__Line3) isp1_network seq 15 [permit](Config_r1_RouteFilterList_isp1_network__Line3__198_51_100_0__action) [198.51.100.0/24](Config_r1_RouteFilterList_isp1_network__Line3__198_51_100_0__ip) [ge 24](Config_r1_RouteFilterList_isp1_network__Line3__198_51_100_0__prefix_range_start)
12 !
13 !
14 !!! Community-list definitions on R1 !!!
15 [ip community-list](Config_r1_CommunityList_400100__Line1) 400100 [permit](Config_r1_CommunityList_400100__Line1__exact_community_400_100_action) [400:100](Config_r1_CommunityList_400100__Line1__exact_community_400_100_400_100_community)
16 !
17 [ip community-list](Config_r1_CommunityList_500200__Line1) 500200 [permit](Config_r1_CommunityList_500200__Line1__exact_community_500_200_action) [500:200](Config_r1_CommunityList_500200__Line1__exact_community_500_200_500_200_community)
18 !
19 [ip community-list](Config_r1_CommunityList_200100__Line1) 200100 [permit](Config_r1_CommunityList_200100__Line1__exact_community_200_100_action) [200:100](Config_r1_CommunityList_200100__Line1__exact_community_200_100_200_100_community)
20 !
21 !  
22 !!! BGP import policy on R1 from ISP1 (R1 <- ISP1) !!!
23 route-map R1_IN_FROM_ISP1 permit 10
24   match ip address prefix-list isp1_network
25   [set community](Config_r1_RoutingPolicy_R1_IN_FROM_ISP1__Line1) [400:100](Config_r1_RoutingPolicy_R1_IN_FROM_ISP1__Line1__add_community_400_100_community) additive
26 !
27 route-map R1_IN_FROM_ISP1 deny 100
28 !
29 !
30 !!! BGP export policy on R1 to ISP1 (R1 -> ISP1) !!!
31 route-map R1_OUT_TO_ISP1 deny 10
32   match community 200100
33 !
34 route-map R1_OUT_TO_ISP1 deny 20
35   match community 500200
36 !
37 route-map R1_OUT_TO_ISP1 permit 100
38   match ip address prefix-list default_ips
39 !
40 !
41 !!! BGP export policy on R1 to R3 (R1 -> R3) !!!
42 route-map R1_OUT_TO_R3 deny 10
43   match community 400100
44 !
45 route-map R1_OUT_TO_R3 permit 20
46   match community 200100
47 !
48 route-map R1_OUT_TO_R3 deny 100` },
    { router: 'R2', configContent: ` 1 !!! Summary of BGP policies on R2 !!!
 2 ! Import policies: R2_IN_FROM_ISP2
 3 ! Export policies: R2_OUT_TO_ISP2     R2_OUT_TO_R1
 4 !
 5 !
 6 !!! Prefix-list definitions on R2 !!!
 7 [ip prefix-list](Config_r2_RouteFilterList_default_ips__Line1) default_ips seq 5 [permit](Config_r2_RouteFilterList_default_ips__Line1__0_0_0_0__action) [0.0.0.0/0](Config_r2_RouteFilterList_default_ips__Line1__0_0_0_0__ip) [le 32](Config_r2_RouteFilterList_default_ips__Line1__0_0_0_0__prefix_range_end)
 8 !
 9 [ip prefix-list](Config_r2_RouteFilterList_isp2_network__Line1) isp2_network seq 5 [permit](Config_r2_RouteFilterList_isp2_network__Line1__203_0_113_0__action) [203.0.113.0/24](Config_r2_RouteFilterList_isp2_network__Line1__203_0_113_0__ip) [ge 24](Config_r2_RouteFilterList_isp2_network__Line1__203_0_113_0__prefix_range_start)
10 !
11 !
12 !!! Community-list definitions on R2 !!!
13 [ip community-list](Config_r2_CommunityList_400100__Line1) 400100 [permit](Config_r2_CommunityList_400100__Line1__exact_community_400_100_action) [400:100](Config_r2_CommunityList_400100__Line1__exact_community_400_100_400_100_community)
14 !
15 !
16 !!! BGP import policy on R2 from ISP2 (R2 <- ISP2) !!!
17 route-map R2_IN_FROM_ISP2 permit 10
18   match ip address prefix-list isp2_network
19   [set community](Config_r2_RoutingPolicy_R2_IN_FROM_ISP2__Line1) [500:200](Config_r2_RoutingPolicy_R2_IN_FROM_ISP2__Line1__add_community_500_200_community) additive
20 !
21 route-map R2_IN_FROM_ISP2 deny 100
22 !
23 !
24 !!! BGP export policy on R2 to ISP2 (R2 -> ISP2) !!!
25 route-map R2_OUT_TO_ISP2 deny 10
26   match community 400100
27 !
28 route-map R2_OUT_TO_ISP2 permit 100
29   match ip address prefix-list default_ips
30 !
31 !
32 !!! BGP export policy on R2 to R1 (R2 -> R1) !!!
33 route-map R2_OUT_TO_R1 permit 10
34   [set community](Config_r2_RoutingPolicy_R2_OUT_TO_R1__Line0) [200:100](Config_r2_RoutingPolicy_R2_OUT_TO_R1__Line0__set_community_200_100_community)` },
    { router: 'R3', configContent: ` 1 !!! Summary of BGP policies on R3 !!!
 2 ! Import policies: R3_IN_FROM_R2    R3_IN_FROM_Customer
 3 ! Export policies: 
 4 !
 5 !
 6 !!! Prefix-list definitions on R3 !!!
 7 [ip prefix-list](Config_r3_RouteFilterList_default_ips__Line1) default_ips seq 5 [permit](Config_r3_RouteFilterList_default_ips__Line1__0_0_0_0__action) [0.0.0.0/0](Config_r3_RouteFilterList_default_ips__Line1__0_0_0_0__ip) [le 32](Config_r3_RouteFilterList_default_ips__Line1__0_0_0_0__prefix_range_end)
 8 !
 9 [ip prefix-list](Config_r3_RouteFilterList_private_ips__Line1) private_ips seq 5  \\\\
10         [permit](Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__action) [192.168.0.0/16](Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__ip) [ge 24](Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__prefix_range_start) [le 32](Config_r3_RouteFilterList_private_ips__Line1__192_168_0_0__prefix_range_end)
11 !
12 !
13 !!! Community-list definitions on R3 !!!
14 [ip community-list](Config_r3_CommunityList_400100__Line1) 400100 [permit](Config_r3_CommunityList_400100__Line1__exact_community_400_100_action) [400:100](Config_r3_CommunityList_400100__Line1__exact_community_400_100_400_100_community)
15 !
16 [ip community-list](Config_r3_CommunityList_500200__Line1) 500200 [permit](Config_r3_CommunityList_500200__Line1__exact_community_500_200_action) [500:200](Config_r3_CommunityList_500200__Line1__exact_community_500_200_500_200_community)
17 !
18 !
19 !!! BGP import policy on R3 from R2 (R3 <- R2) !!!
20 route-map R3_IN_FROM_R2 permit 10
21   match community 400100
22 !
23 route-map R3_IN_FROM_R2 permit 20
24   match community 500200
25   [set as-path](Config_r3_RoutingPolicy_R3_IN_FROM_R2__Line2) prepend [200](Config_r3_RoutingPolicy_R3_IN_FROM_R2__Line2__prepend_aspath_cost)
26 !
27 route-map R3_IN_FROM_R2 deny 100
28 !
29 !
30 !!! BGP import policy on R3 from Customer (R3 <- Customer) !!!
31 route-map R3_IN_FROM_Customer deny 10
32   match ip address prefix-list private_ips
33 !
34 route-map R3_IN_FROM_Customer permit 100
35   match ip address prefix-list default_ips` },
  ],
};

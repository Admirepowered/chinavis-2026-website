import { marked } from "marked";

export const zh = {
  PageTitle: "会址及住宿预定 - ChinaVis 2026",
  Title: "会址及住宿预定",
  Content: marked.parse(
    `
    ## 会议地点

    **酒店：** 贵州饭店
    
    **地址：** 贵州省贵阳市云岩区北京路66号，贵州饭店国际会议中心
    
    <img src="{{ venueCenterImage }}" alt="贵州饭店国际会议中心" style="width: 100%; max-width: 600px; margin: 25px auto; display: block;" />
    
    ## 酒店信息
    
    ### （一）贵州饭店·贵宾楼
    
    **地理位置：** 贵阳市云岩区北京路66号（近省政府、北京路地铁站 地铁D出口）
    
    **联系人：** 林闽煜 13007860786
    
    **高级大床房/高级双床房 协议价：** 1050元/晚（含双早）
    
    酒店位于贵阳市云岩区核心商圈北京路，毗邻省政府、黔灵山公园，交通便捷。距贵阳北站约10公里、贵阳龙洞堡国际机场约12公里，步行3分钟可达北京路地铁站，是贵阳地标性五星级酒店，曾多次承接省级重要会议活动。
    
    **高级大床房：**
    
    <div class="wide_image" style="display: flex; gap: 8px; justify-content: center; align-items: center; max-width: 900px; margin: 25px auto;">
      <img src="{{ vipKing1Image }}" alt="贵州饭店·贵宾楼高级大床房" style="width: calc(50% - 4px); max-height: 290px; object-fit: cover;" />
      <img src="{{ vipKing2Image }}" alt="贵州饭店·贵宾楼高级大床房" style="width: calc(50% - 4px); max-height: 290px; object-fit: cover;" />
    </div>
    
    **高级双床房：**
    
    <div class="wide_image" style="display: flex; gap: 8px; justify-content: center; align-items: center; max-width: 900px; margin: 25px auto;">
      <img src="{{ vipTwin1Image }}" alt="贵州饭店·贵宾楼高级双床房" style="width: calc(50% - 4px); max-height: 290px; object-fit: cover;" />
      <img src="{{ vipTwin2Image }}" alt="贵州饭店·贵宾楼高级双床房" style="width: calc(50% - 4px); max-height: 290px; object-fit: cover;" />
    </div>
    
    ### （二）贵州饭店·迎宾楼
    
    **地理位置：** 贵阳市云岩区北京路66号（近省政府、北京路地铁站 地铁D出口）
    
    **联系人：** 林闽煜 13007860786
    
    **大床房/双床房 协议价：** 450元/晚（含双早）
    
    <div class="wide_image" style="display: flex; gap: 8px; justify-content: center; align-items: center; max-width: 900px; margin: 25px auto;">
      <img src="{{ yingbinRoom1Image }}" alt="贵州饭店·迎宾楼房间" style="width: calc(50% - 4px); max-height: 360px; object-fit: cover;" />
      <img src="{{ yingbinRoom2Image }}" alt="贵州饭店·迎宾楼房间" style="width: calc(50% - 4px); max-height: 360px; object-fit: cover;" />
    </div>
    
    ## 乘车路线
    
    ### 1、贵阳北站——贵州饭店
    
    乘坐出租车（全程约20分钟），费用约30元
    
    公共交通：贵阳北站乘坐地铁1号线至北京路站D出口，出站步行约120米即达（全程约35分钟）
    
    ### 2、贵阳龙洞堡国际机场——贵州饭店
    
    乘坐出租车（全程约25分钟），费用约40元
    
    公共交通：机场乘坐地铁2号线至喷水池站，换乘1号线至北京路站，D出口出站步行约120米即达（全程约50分钟）
    
    ### 3、贵阳火车站——贵州饭店
    
    乘坐出租车（全程约15分钟），费用约15元
    
    公共交通：火车站乘坐1路 / 2路公交至北京路站，下车步行约5分钟即达（全程约30分钟）
    `.replace(/^    /gm, ""),
    { async: false }
  ),
};

export const en = {
  PageTitle: "Venue & Hotels - ChinaVis 2026",
  Title: "Conference Venue & Hotels",
  // language=HTML
  Content: marked.parse(
    `
    ## Conference Venue

    **Hotel:** Guizhou Hotel
    
    **Address:** Guizhou Hotel International Conference Center, No. 66 Beijing Road, Yunyan District, Guiyang, Guizhou Province
    
    <img src="{{ venueCenterImage }}" alt="Guizhou Hotel International Conference Center" style="width: 100%; max-width: 600px; margin: 25px auto; display: block;" />
    
    ## Hotel Information
    
    ### (1) The Grand Guizhou Park Hotel
    
    **Location:** No. 66 Beijing Road, Yunyan District, Guiyang (near the Guizhou Provincial Government and Beijing Road Metro Station, Exit D)
    
    **Contact Person:** Lin Minyu 13007860786
    
    **Superior King Room / Superior Twin Room Conference Rate:** 1050 RMB/night (including breakfast for two)
    
    The hotel is located on Beijing Road, in the core business district of Yunyan District, Guiyang. It is adjacent to the Guizhou Provincial Government and Qianling Mountain Park, with convenient transportation. It is about 10 km from Guiyang North Railway Station and about 12 km from Guiyang Longdongbao International Airport. Beijing Road Metro Station is about a 3-minute walk away. As a landmark five-star hotel in Guiyang, it has hosted many important provincial-level conferences and events.
    
    **Superior King Room:**
    
    <div class="wide_image" style="display: flex; gap: 8px; justify-content: center; align-items: center; max-width: 900px; margin: 25px auto;">
      <img src="{{ vipKing1Image }}" alt="The Grand Guizhou Park Hotel Superior King Room" style="width: calc(50% - 4px); max-height: 290px; object-fit: cover;" />
      <img src="{{ vipKing2Image }}" alt="The Grand Guizhou Park Hotel Superior King Room" style="width: calc(50% - 4px); max-height: 290px; object-fit: cover;" />
    </div>
    
    **Superior Twin Room:**
    
    <div class="wide_image" style="display: flex; gap: 8px; justify-content: center; align-items: center; max-width: 900px; margin: 25px auto;">
      <img src="{{ vipTwin1Image }}" alt="The Grand Guizhou Park Hotel Superior Twin Room" style="width: calc(50% - 4px); max-height: 290px; object-fit: cover;" />
      <img src="{{ vipTwin2Image }}" alt="The Grand Guizhou Park Hotel Superior Twin Room" style="width: calc(50% - 4px); max-height: 290px; object-fit: cover;" />
    </div>
    
    ### (2) Guizhou Hotel (Yingbin Building)
    
    **Location:** No. 66 Beijing Road, Yunyan District, Guiyang (near the Guizhou Provincial Government and Beijing Road Metro Station, Exit D)
    
    **Contact Person:** Lin Minyu 13007860786
    
    **King Room / Twin Room Conference Rate:** 450 RMB/night (including breakfast for two)
    
    <div class="wide_image" style="display: flex; gap: 8px; justify-content: center; align-items: center; max-width: 900px; margin: 25px auto;">
      <img src="{{ yingbinRoom1Image }}" alt="Guizhou Hotel Yingbin Building Room" style="width: calc(50% - 4px); max-height: 360px; object-fit: cover;" />
      <img src="{{ yingbinRoom2Image }}" alt="Guizhou Hotel Yingbin Building Room" style="width: calc(50% - 4px); max-height: 360px; object-fit: cover;" />
    </div>
    
    ## Transportation Guide
    
    ### 1. Guiyang North Railway Station to Guizhou Hotel
    
    **By Taxi:** Approx. 20 minutes, fare around 30 RMB.
    
    **By Public Transport:** Take Metro Line 1 from Guiyang North Railway Station to Beijing Road Station. Exit from Exit D and walk about 120 meters to the hotel. The total journey takes about 35 minutes.
    
    ### 2. Guiyang Longdongbao International Airport to Guizhou Hotel
    
    **By Taxi:** Approx. 25 minutes, fare around 40 RMB.
    
    **By Public Transport:** Take Metro Line 2 from the airport to Penshuichi Station, then transfer to Metro Line 1 to Beijing Road Station. Exit from Exit D and walk about 120 meters to the hotel. The total journey takes about 50 minutes.
    
    ### 3. Guiyang Railway Station to Guizhou Hotel
    
    **By Taxi:** Approx. 15 minutes, fare around 15 RMB.
    
    **By Public Transport:** Take Bus No. 1 or No. 2 from Guiyang Railway Station to Beijing Road Station. After getting off, walk about 5 minutes to the hotel. The total journey takes about 30 minutes.
    `.replace(/^    /gm, ""),
    { async: false }
  ),
};

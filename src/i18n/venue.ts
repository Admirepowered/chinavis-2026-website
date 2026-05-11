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
      <img src="{{ vipKing1Image }}" alt="贵州饭店·贵宾楼高级大床房1" style="width: calc(50% - 4px); max-height: 360px; object-fit: cover;" />
      <img src="{{ vipKing2Image }}" alt="贵州饭店·贵宾楼高级大床房2" style="width: calc(50% - 4px); max-height: 360px; object-fit: cover;" />
    </div>
    
    **高级双床房：**
    
    <div class="wide_image" style="display: flex; gap: 8px; justify-content: center; align-items: center; max-width: 900px; margin: 25px auto;">
      <img src="{{ vipTwin1Image }}" alt="贵州饭店·贵宾楼高级双床房1" style="width: calc(50% - 4px); max-height: 360px; object-fit: cover;" />
      <img src="{{ vipTwin2Image }}" alt="贵州饭店·贵宾楼高级双床房2" style="width: calc(50% - 4px); max-height: 360px; object-fit: cover;" />
    </div>
    
    ### （二）贵州饭店·迎宾楼
    
    **地理位置：** 贵阳市云岩区北京路66号（近省政府、北京路地铁站 地铁D出口）
    
    **联系人：** 林闽煜 13007860786
    
    **大床房/双床房 协议价：** 450元/晚（含双早）
    
    <div class="wide_image" style="display: flex; gap: 8px; justify-content: center; align-items: center; max-width: 900px; margin: 25px auto;">
      <img src="{{ yingbinRoom1Image }}" alt="贵州饭店·迎宾楼房间1" style="width: calc(50% - 4px); max-height: 360px; object-fit: cover;" />
      <img src="{{ yingbinRoom2Image }}" alt="贵州饭店·迎宾楼房间2" style="width: calc(50% - 4px); max-height: 360px; object-fit: cover;" />
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
  Content: marked.parse(
    `
    ## Conference Venue

    **Hotel:** Wenlan Hotel Northern Hangzhou

    **Address:** No. 566 Moganshan Road, Gongshu District, Hangzhou

    **Phone:** 0571-88003888

      <img src="{{ wenlaiBuildingImage }}" alt="Wenlan Hotel Northern Hangzhou" style="width: 100%; max-width: 600px; margin: 25px auto; display: block;" />

    ## Hotel Reservation

    **Booking Process for Wenlan Hotel Northern Hangzhou (Conference Hotel):**

    Scan the QR code below → Log in with phone number and verification code → Select check-in and check-out dates → Choose room type and number of rooms → Enter guest name + phone number → Pay the first night's room fee (deposit) → Booking successful

    <img src="{{ wenlaiQrCodeImage }}" alt="QR Code" style="width: 100%; max-width: 150px; margin: 25px auto; display: block;" />

    ## Hotel Information

    ### (1) Wenlan Hotel Northern Hangzhou (Conference Hotel)

    **Location:** No. 566 Moganshan Road, Gongshu District, Hangzhou

    **Contact Person:** Manager Xu 18657181139

    **King/Twin Room Conference Rate:** 450 RMB/night (with single breakfast), 500 RMB/night (with double breakfast)

    The hotel is located on Moganshan Road in Gongshu District, Hangzhou, adjacent to the Joy City shopping center. It is 12 km from Hangzhou East Railway Station, 17 km from Hangzhou West Railway Station, 39 km from Xiaoshan International Airport, and 12 km from Hangzhou Railway Station.

    <div class="wide_image">
      <img src="{{ wenlaiLobbyImage }}" alt="Wenlan Hotel Northern Hangzhou Lobby"/>
    </div>

    <div class="wide_image">
      <img src="{{ wenlaiRoomImage }}" alt="Wenlan Hotel Northern Hangzhou Room"/>
    </div>

    ### (2) Hampton by Hilton Hangzhou Xixi Zijingang (Partner Hotel)

    **Location:** Hotel Lobby, 8th Floor South, Block A, Yifanghui, No. 987 Moganshan Road, Gongshu District, Hangzhou (1 km from the conference hotel, about a 15-minute walk)

    **Hotel Front Desk:** 0571-86098089

    **King/Twin Room Conference Rate:** 430 RMB/night (including double breakfast)

    **Please book by phone:** 0571-86098089 (Mention the conference name when booking)

    The hotel enjoys a superior location with convenient transportation. An elevator on the B1 floor of Hemu Metro Station provides direct access to the hotel lobby. It is 15 km from Hangzhou East Railway Station, 20 km from Hangzhou West Railway Station, 41 km from Xiaoshan International Airport, and 13 km from Hangzhou Railway Station.

    <div class="wide_image">
      <img src="{{ hiltonLobbyImage }}" alt="Hampton by Hilton Hangzhou Xixi Zijingang Lobby"/>
    </div>

    <div class="wide_image">
      <img src="{{ hiltonRoomImage }}" alt="Hampton by Hilton Hangzhou Xixi Zijingang Room"/>
    </div>

    ### (3) Mercure Hangzhou Zijingang Hotel (Partner Hotel)

    **Location:** No. 99 Shenhua Road, Gongshu District, Hangzhou (2 km from the conference hotel, about a 30-minute walk)

    **Contact Person:** Manager Wang 15757594555

    **King/Twin Room Conference Rate:** 380 RMB/night (with double breakfast)

    **Conference Booking:** Please scan the QR code below to book the hotel.

    <img src="{{ mercureQrCodeImage }}" alt="Mercure Hangzhou Zijingang Hotel QR Code" style="width: 100%; max-width: 300px; margin: 25px auto; display: block;" />

    The hotel is located in the Shenhua area, adjacent to business districts such as the Asian Games Park, Intime Shopping Center, and Joy City. It is only a 10-minute walk from Exit D of Hemu Metro Station. It is 13 km from Hangzhou East Railway Station, 15 km from Hangzhou West Railway Station, 39 km from Xiaoshan International Airport, and 13 km from Hangzhou Railway Station.

    <div class="wide_image">
      <img src="{{ mercureLobbyImage }}" alt="Mercure Hangzhou Zijingang Hotel Lobby" />
    </div>

    <div class="wide_image">
      <img src="{{ mercureRoomImage }}" alt="Mercure Hangzhou Zijingang Hotel Room" />
    </div>

    ## Transportation Guide

    ### 1. Guiyang East Railway Station to Guizhou Hotel

    **By Taxi:** (Approx. 20 minutes), cost around 35 RMB.

    **By Public Transport:** From Guiyang East Railway Station, take Metro Line 2 to Yan'an West Road Station, transfer to Metro Line 1 to Beijing Road Station (Exit C). Walk about 200 meters to the hotel. (Total time: approx. 40 minutes).

    ### 2. Guiyang North Railway Station to Hanting Hotel (Supporting Hotel)

    **By Taxi:** (Approx. 26 minutes), cost around 30 RMB.

    **By Public Transport:** From Guiyang North Railway Station, take Metro Line 1 directly to Beijing Road Station (Exit C). After exiting, proceed to the hotel. Please note, Hanting Hotel is located near the "Hemu" Metro Station on Line 3. As there is currently no direct metro route from Guiyang North Station to Hemu Station requiring multiple transfers, it is highly recommended to take a taxi or ride-hailing service from the station for the most convenient experience.

    ### 3. Guiyang Railway Station to Hilton Garden Inn (Supporting Hotel)

    **By Taxi:** (Approx. 32 minutes), cost around 25 RMB.

    **By Public Transport:**  From Guiyang Railway Station, take Metro Line 1 to Beijing Road Station (Exit C). Then, choose one of the following options to reach the hotel (approx. 1 km away)

  
    `.replace(/^    /gm, ""),
    { async: false }
  ),
};

import { marked } from "marked";

export const zh = {
  PageTitle: "会址及住宿预定 - ChinaVis 2026",
  Title: "会址及住宿预定",
  Content: marked.parse(
    `
    ## 会议地点

    **酒店：** 贵州饭店

    **地址：** 贵阳市云岩区北京路66号

    **电话：** 0851-86680208

      <img src="{{ wenlaiBuildingImage }}" alt="贵州饭店" style="width: 100%; max-width: 600px; margin: 25px auto; display: block;" />

    ## 酒店预订

    **贵州饭店（会议酒店）订房流程：**

    扫描以下二维码 → 手机号验证码登录 → 选择入住和退房日期 → 酒店房型及房间数量 → 入住人姓名 + 手机号 → 支付首晚房费（定金） → 预订成功

    <img src="{{ wenlaiQrCodeImage }}" alt="二维码" style="width: 100%; max-width: 150px; margin: 25px auto; display: block;" />

    ## 酒店信息

    ### （一）贵州饭店（会议酒店）

    **地理位置：** 贵阳市云岩区北京路66号

    **联系人：** 林经理 13007860786

    **大床/双床房 协议价：** 450元/单早，450元/双早

    酒店位于贵阳市云岩区北京路，毗邻银海元隆购物中心。距贵阳东站14公里、贵阳北站8公里、龙洞堡机场12公里、贵阳站6公里。

    <div class="wide_image">
      <img src="{{ wenlaiLobbyImage }}" alt="贵州饭店大堂"/>
    </div>

    <div class="wide_image">
      <img src="{{ wenlaiRoomImage }}" alt="贵州饭店房间"/>
    </div>

    ### （二）汉庭酒店（配套酒店）

    **地理位置：** 贵阳市云岩区北京路66号（距会议酒店1公里 步行约10分钟）

    **联系人： 胡经理  13158018755

    **大床/双床房 协议价：** 400元左右/晚（含双早）

    **请自行电话预定：** 0571-86098089 （报会议名称订房）

    酒店地理位置优越，交通便捷，和睦地铁3号线，H出站口即为酒店大堂。距贵阳东站14公里、贵阳北站8公里、龙洞堡机场12公里、贵阳站6公里。

    <div class="wide_image">
      <img src="{{ hiltonLobbyImage }}" alt="汉庭酒店大堂"/>
    </div>

    <div class="wide_image">
      <img src="{{ hiltonRoomImage }}" alt="汉庭店房间"/>
    </div>

    ### （三）希尔顿惠庭酒店（配套酒店）

    **地理位置：** 贵阳市云岩区北京路66号（距会议酒店1公里，步行约10分钟）

    **联系人：** 熊经理 15985128834

    **大床/双床房 协议价：** 600元左右/晚（双早）

    **会议预定：** 请扫以下二维码预定酒店

    <img src="{{ mercureQrCodeImage }}" alt="希尔顿惠庭酒店二维码" style="width: 100%; max-width: 300px; margin: 25px auto; display: block;" />

    酒店地理位置优越，交通便捷，和睦地铁3号线，H出站口即为酒店大堂。距贵阳东站14公里、贵阳北站8公里、龙洞堡机场12公里、贵阳站6公里。

    <div class="wide_image">
      <img src="{{ mercureLobbyImage }}" alt="希尔顿惠庭酒店大堂" />
    </div>

    <div class="wide_image">
      <img src="{{ mercureRoomImage }}" alt="希尔顿惠庭酒店房间" />
    </div>

    ## 乘车路线

    ### 1、贵阳东站——贵州饭店

    乘坐出租车（全程约20分钟），费用约35元

    公共交通：在贵阳东站乘坐 地铁2号线 → 在 延安西路站 换乘 地铁1号线 → 在 北京路站 下车，从 C口 出站。

    ### 2、贵阳北站——汉庭酒店

    乘坐出租车（全程约26分钟），费用约30元

    公共交通：汉庭酒店位于“和睦”地铁站H出口处。从贵阳北站出发，目前尚无地铁可直达该站，需要多次换乘公交，路线较为复杂。

    ### 3、贵阳站——希尔顿惠庭酒店

    乘坐出租车（全程约32分钟），费用约25元

    公共交通：在贵阳东站乘坐 地铁2号线 → 在 延安西路站 换乘 地铁1号线 → 在 北京路站 下车，从 C口 出站。

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

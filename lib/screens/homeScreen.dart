import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import 'package:pengkie_website/constants.dart';
import 'package:pengkie_website/widgets/youtubePlayer.dart';
import 'package:url_launcher/url_launcher.dart';
// import 'package:youtube_player_iframe/youtube_player_iframe.dart';

class WebHomeScreen extends StatelessWidget {
  static const routeName = '/home-screen';
  final storeKey = GlobalKey();
  final vendorKey = GlobalKey();
  final bottomKey = GlobalKey();
  final _blueColor = Color(0xff4185F3);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: _appBar(context: context),
        centerTitle: false,
        actions: [
          // Padding(
          //   padding: const EdgeInsets.symmetric(horizontal: 15),
          //   child: Center(
          //     child: PopupMenuButton(
          //       child: Text(tr(LocaleKeys.chooseLanguage)),
          //       itemBuilder: (context) {
          //         return List.generate(2, (index) {
          //           String _language = 'English';
          //           Locale _locale =
          //               EasyLocalization.of(context)!.supportedLocales[0];
          //           if (index == 1) {
          //             _language = 'ไทย';
          //             _locale =
          //                 EasyLocalization.of(context)!.supportedLocales[1];
          //           }
          //           return PopupMenuItem(
          //             child: Text(_language),
          //             // onTap: () =>
          //             //     EasyLocalization.of(context)!.setLocale(_locale),
          //           );
          //         });
          //       },
          //     ),
          //   ),
          // ),
        ],
      ),
      backgroundColor: Colors.white,
      body: _body(context: context),
    );
  }

  _body({required BuildContext context}) {
    return Center(
      child: ConstrainedBox(
        constraints: const BoxConstraints(
          maxWidth: kMaxWidth,
        ),
        child: Padding(
          padding: const EdgeInsets.symmetric(
              // horizontal: 25.0,
              ),
          child: SingleChildScrollView(
            child: Column(
              mainAxisSize: MainAxisSize.min,
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                const SizedBox(height: 10),
                Container(
                  key: vendorKey,
                  padding: const EdgeInsets.symmetric(horizontal: 25.0),
                  // child: _vendorBody(context: context),
                  child: _storeBody(context: context),
                ),
                Container(
                  color: Colors.grey[100],
                  key: storeKey,
                  padding: const EdgeInsets.symmetric(horizontal: 25.0),
                  // child: _storeBody(context: context),
                  child: _vendorBody(context: context),
                ),
                const SizedBox(height: 45),
                // const YouTubePlayerWidget(),
                // TextButton(
                //   child: Text('Youtube'),
                //   onPressed: () => Navigator.push(
                //       context,
                //       MaterialPageRoute(
                //           builder: (ctx) => YouTubePlayerWidget())),
                // ),
                const Divider(),
                _bottom(context: context),
                const SizedBox(height: 15),
              ],
            ),
          ),
        ),
      ),
    );
  }

  _pengkieVendorQRCodes() {
    return Container(
      padding: const EdgeInsets.only(top: 15.0),
      child: Wrap(
        alignment: WrapAlignment.spaceEvenly,
        crossAxisAlignment: WrapCrossAlignment.center,
        direction: Axis.horizontal,
        spacing: 50.0,
        runSpacing: 50.0,
        children: [
          InkWell(
            child: Column(
              children: [
                SizedBox(
                  width: _width,
                  child: Image.asset(
                    'assets/images/Download-On-App-Store.png',
                    fit: BoxFit.cover,
                    scale: 1,
                  ),
                ),
                SizedBox(
                  width: _width,
                  child: Image.asset(
                    'assets/images/pengkie_vendor_ios_qr_code.jpg',
                    fit: BoxFit.cover,
                    scale: 1,
                  ),
                ),
              ],
            ),
            onTap: () =>
                _launchURL(url: Constants.PengkieVendorIOSAppStoreLink),
          ),
          InkWell(
            child: Column(
              children: [
                SizedBox(
                  width: _width,
                  child: Image.asset(
                    'assets/images/Download-On-Play-Store.png',
                    fit: BoxFit.cover,
                    scale: 1,
                  ),
                ),
                SizedBox(
                  width: _width,
                  child: Image.asset(
                    'assets/images/pengkie_vendor_android_qr_code.jpg',
                    fit: BoxFit.cover,
                    scale: 1,
                  ),
                ),
              ],
            ),
            onTap: () =>
                _launchURL(url: Constants.PengkieVendorAndroidPlayStoreLink),
          ),
        ],
      ),
    );
  }

  _language() {
    return PopupMenuButton(
      child: Text(tr(LocaleKeys.chooseLanguage)),
      itemBuilder: (context) {
        return List.generate(2, (index) {
          String _language = 'English';
          Locale _locale = EasyLocalization.of(context)!.supportedLocales[0];
          if (index == 1) {
            _language = 'ไทย';
            _locale = EasyLocalization.of(context)!.supportedLocales[1];
          }
          return PopupMenuItem(
            child: Text(_language),
            onTap: () => EasyLocalization.of(context)!.setLocale(_locale),
          );
        });
      },
    );
  }

  _appBar({required BuildContext context}) {
    final double screenWidth = MediaQuery.of(context).size.width;
    List<String> titles = [
      'PENGKIE Vendor',
      'PENGKIE Store',
      'คำถามยอดฮิต',
      'ติดต่อเรา'
    ];
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        const Padding(
          padding: EdgeInsets.only(left: 50),
          child: Text(
            "PENGKIE",
            textAlign: TextAlign.start,
          ),
        ),
        screenWidth < kTabletBreakpoint
            ? Container()
            : Row(
                children: List<Widget>.generate(
                    titles.length,
                    (index) => Padding(
                          padding: const EdgeInsets.symmetric(
                            horizontal: 20,
                          ),
                          child: InkWell(
                            child: Text(
                              titles[index],
                              textAlign: TextAlign.center,
                              style: const TextStyle(
                                fontSize: 14,
                                fontWeight: FontWeight.normal,
                              ),
                            ),
                            onTap: () {
                              if (index == 0) {
                                Scrollable.ensureVisible(
                                    vendorKey.currentContext!);
                              } else if (index == 1) {
                                Scrollable.ensureVisible(
                                    storeKey.currentContext!);
                              } else if (index == 2) {
                              } else if (index == 3) {
                                Scrollable.ensureVisible(
                                    bottomKey.currentContext!);
                              }
                            },
                          ),
                        ))),
      ],
    );
  }

  _vendorBody({required BuildContext context}) {
    final double _screenWidth = MediaQuery.of(context).size.width;
    if (_screenWidth < kTabletBreakpoint) {
      return Column(
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          SizedBox(
            height: 650,
            child: Image.asset(
              'assets/images/pengkie_vendor_home_screen.png',
              fit: BoxFit.contain,
              scale: 1,
            ),
          ),
          const SizedBox(
            height: 25,
          ),
          const Text(
              'เพราะเราอยากเห็นธุรกิจรายเล็กได้มีโอกาสเติบโต และแข่งขันกับรายใหญ่ได้'),
          const SizedBox(
            height: 25,
          ),
          const Text(
            'PENGKIE Vendor',
            style: TextStyle(
              fontSize: 50,
              fontWeight: FontWeight.bold,
              color: Color(0xff4185F3),
            ),
          ),
          const SizedBox(
            height: 25,
          ),
          const Text(
            '"เพราะร้านค้าปลีกคือกุญแจสู่ความสำเร็จของคุณ"',
            style: TextStyle(fontSize: 18),
          ),
          const SizedBox(
            height: 25,
          ),
          const Text(
              'เรารวบรวมร้านค้าปลีกให้คุณเข้าถึงได้ทันที คุณสามารถขายสินค้า และร่วมมือทำโปรโมชั่นกับร้านค้าปลีกได้อย่างที่ไม่เคยมีมาก่อน',
              textAlign: TextAlign.start),
          const SizedBox(
            height: 25,
          ),
          _pengkieVendorQRCodes(),
        ],
      );
    }
    return SizedBox(
      height: 750,
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Flexible(
            flex: 3,
            child: Container(
              alignment: Alignment.center,
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.center,
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  SizedBox(
                    width: 450,
                    child: Column(
                      children: const [
                        Text(
                            'เพราะเราอยากเห็นธุรกิจรายเล็กได้มีโอกาสเติบโต และแข่งขันกับรายใหญ่ได้'),
                        SizedBox(
                          height: 25,
                        ),
                        Text(
                          'PENGKIE Vendor',
                          style: TextStyle(
                            fontSize: 55,
                            fontWeight: FontWeight.bold,
                            color: Color(0xff4185F3),
                          ),
                        ),
                        SizedBox(
                          height: 25,
                        ),
                        Text(
                          '"เพราะร้านค้าปลีกคือกุญแจสู่ความสำเร็จของคุณ"',
                          style: TextStyle(
                              fontSize: 20, fontWeight: FontWeight.bold),
                        ),
                        SizedBox(
                          height: 25,
                        ),
                        Text(
                            'เรารวบรวมร้านค้าปลีกให้คุณเข้าถึงได้ทันที คุณสามารถขายสินค้า และร่วมมือทำโปรโมชั่นกับร้านค้าปลีกได้อย่างที่ไม่เคยมีมาก่อน',
                            textAlign: TextAlign.start),
                        SizedBox(
                          height: 25,
                        ),
                      ],
                    ),
                  ),
                  Text(
                    tr(LocaleKeys.free_download_now),
                    style: const TextStyle(
                        // color: Constants.mainColor,
                        fontWeight: FontWeight.bold,
                        fontSize: 20),
                  ),
                  const SizedBox(
                    height: 25,
                  ),
                  _pengkieVendorQRCodes(),
                ],
              ),
            ),
          ),
          Flexible(
            flex: 2,
            child: Padding(
              padding: const EdgeInsets.symmetric(vertical: 50),
              child: Center(
                child: Image.asset(
                  'assets/images/pengkie_vendor_home_screen.png',
                  fit: BoxFit.cover,
                  scale: 1,
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }

  _storeBody({required BuildContext context}) {
    final double _screenWidth = MediaQuery.of(context).size.width;
    if (_screenWidth < kTabletBreakpoint) {
      return Column(
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          SizedBox(
            height: 650,
            child: Image.asset(
              'assets/images/pengkie_store_home_screen.png',
              fit: BoxFit.contain,
              scale: 1,
            ),
          ),
          const SizedBox(
            height: 25,
          ),
          const Text(
            'PENGKIE Store',
            style: TextStyle(
              fontSize: 50,
              fontWeight: FontWeight.bold,
              color: Colors.red,
            ),
          ),
          const SizedBox(
            height: 25,
          ),
          const Text(
            '“เพิ่มพลังให้ร้านค้าปลีก”',
            style: TextStyle(fontSize: 18),
          ),
          const SizedBox(
            height: 25,
          ),
          const Text(
              'ยอดขายจากการทำโปรโมชั่น จะดึงดูดเจ้าของสินค้าอื่นๆให้สนใจร้านค้าของคุณ \nรวบรวมสินค้าให้ร้านค้าปลีกได้เลือกซื้อ พร้อมทั้งยังสามารถทำโปรโมชั่นร่วมกับเจ้าของสินค้าได้',
              textAlign: TextAlign.start),
          const SizedBox(
            height: 25,
          ),
          _pengkieStoreQRCodes(),
        ],
      );
    }
    return SizedBox(
      height: 750,
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Flexible(
            flex: 2,
            child: Padding(
              padding: const EdgeInsets.symmetric(vertical: 50),
              child: Center(
                child: Image.asset(
                  'assets/images/pengkie_store_home_screen.png',
                  fit: BoxFit.cover,
                  scale: 1,
                ),
              ),
            ),
          ),
          Flexible(
            flex: 3,
            child: Container(
              alignment: Alignment.center,
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.center,
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  SizedBox(
                    width: 450,
                    child: Column(
                      children: const [
                        Text(
                          'PENGKIE Store',
                          style: TextStyle(
                            fontSize: 55,
                            fontWeight: FontWeight.bold,
                            color: Colors.red,
                          ),
                        ),
                        SizedBox(
                          height: 25,
                        ),
                        Text(
                          '“เพิ่มพลังให้ร้านค้าปลีก”',
                          style: TextStyle(
                              fontSize: 20, fontWeight: FontWeight.bold),
                        ),
                        SizedBox(
                          height: 25,
                        ),
                        Text(
                            'ยอดขายจากการทำโปรโมชั่น จะดึงดูดเจ้าของสินค้าอื่นๆให้สนใจร้านค้าของคุณ \nรวบรวมสินค้าให้ร้านค้าปลีกได้เลือกซื้อ พร้อมทั้งยังสามารถทำโปรโมชั่นร่วมกับเจ้าของสินค้าได้',
                            textAlign: TextAlign.start),
                        SizedBox(
                          height: 25,
                        ),
                      ],
                    ),
                  ),
                  Text(
                    tr(LocaleKeys.free_download_now),
                    style: const TextStyle(
                        // color: Constants.mainColor,
                        fontWeight: FontWeight.bold,
                        fontSize: 20),
                  ),
                  const SizedBox(
                    height: 25,
                  ),
                  _pengkieStoreQRCodes(),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }

  final double _width = 200;

  _pengkieStoreQRCodes() {
    return Container(
      padding: const EdgeInsets.only(top: 10),
      child: Column(
        children: [
          Wrap(
            direction: Axis.horizontal,
            spacing: 50.0,
            runSpacing: 50.0,
            alignment: WrapAlignment.center,
            crossAxisAlignment: WrapCrossAlignment.center,
            children: [
              // Text(
              //   tr(LocaleKeys.available_on_both_ios_and_android),
              //   style: TextStyle(
              //       color: Constants.mainColor, fontWeight: FontWeight.bold, fontSize: 30),
              // ),
              InkWell(
                child: Column(
                  children: [
                    SizedBox(
                      width: _width,
                      child: Image.asset(
                        'assets/images/Download-On-App-Store.png',
                        fit: BoxFit.cover,
                        scale: 1,
                      ),
                    ),
                    SizedBox(
                      width: _width,
                      child: Image.asset(
                        'assets/images/pengkie_store_ios_qr_code.jpg',
                        fit: BoxFit.cover,
                        scale: 1,
                      ),
                    ),
                  ],
                ),
                onTap: () =>
                    _launchURL(url: Constants.PengkieStoreIOSAppStoreLink),
              ),
              InkWell(
                child: Column(
                  children: [
                    SizedBox(
                      width: _width,
                      child: Image.asset(
                        'assets/images/Download-On-Play-Store.png',
                        fit: BoxFit.cover,
                        scale: 1,
                      ),
                    ),
                    SizedBox(
                      width: _width,
                      child: Image.asset(
                        'assets/images/pengkie_store_play_store_qr_code.jpg',
                        fit: BoxFit.cover,
                        scale: 1,
                      ),
                    ),
                  ],
                ),
                onTap: () =>
                    _launchURL(url: Constants.PengkieStoreAndroidPlayStoreLink),
              ),
            ],
          ),
        ],
      ),
    );
  }

  void _launchURL({required String url}) async =>
      await canLaunch(url) ? await launch(url) : throw 'Could not launch';

  _bottom({required BuildContext context}) {
    return Padding(
      key: bottomKey,
      padding: const EdgeInsets.only(left: 25.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          _contactInfo(
            context: context,
          ),
          const SizedBox(
            height: 25,
          ),
          _copyRight(),
        ],
      ),
    );
  }

  _contactInfo({required BuildContext context}) {
    final double _screenWidth = MediaQuery.of(context).size.width;

    if (_screenWidth >= kTabletBreakpoint) {
      return Row(
        children: [
          _bottomColumn1(),
          Expanded(
            child: Center(
              child: _bottomColumn2(),
            ),
          ),
        ],
      );
    } else {
      return Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          _bottomColumn1(),
          const SizedBox(
            height: 50,
          ),
          _bottomColumn2(),
        ],
      );
    }
  }

  _bottomColumn1() {
    return SizedBox(
      width: 350,
      child: Column(
        mainAxisAlignment: MainAxisAlignment.start,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: const [
          Text(
            'ABOUT THE APP',
            style: TextStyle(
              // color: Constants.mainColor,
              fontWeight: FontWeight.bold,
            ),
          ),
          SizedBox(height: 10),
          Text(
              'We are online platform for distributors and retailers. PENGKIE ensures that your products are easily accessible to retailers in an efficient and effective way. Because we know retailers play an important role in your success.'),
        ],
      ),
    );
  }

  _bottomColumn2() {
    return Column(
      mainAxisAlignment: MainAxisAlignment.start,
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          '${tr(LocaleKeys.address)}:',
          style: const TextStyle(
            // color: Constants.mainColor,
            fontWeight: FontWeight.bold,
          ),
        ),
        const SizedBox(height: 10),
        const Text('202/33, Moo 11'),
        const Text('Bang Phli Yai, Bang Phli'),
        const Text('Samu Prakarn 10540'),
        const Text('Thailand'),
        const Text('+ 66 92 955 4291'),
        const Text('supports@pengkie.com'),
      ],
    );
  }

  _copyRight() {
    return const Text(
      '© 2021 PENGKIE. All Rights Reserved',
      style: TextStyle(color: Colors.grey, fontSize: 12),
    );
  }
}

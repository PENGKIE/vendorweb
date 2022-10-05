import 'package:easy_localization/easy_localization.dart';
import 'package:easy_localization_loader/easy_localization_loader.dart';
import 'package:flutter/material.dart';
import 'package:pengkie_website/constants.dart';
import 'package:pengkie_website/screens/homeScreen.dart';

void main() async {
  // runApp(const MyApp(),
  // );
  WidgetsFlutterBinding.ensureInitialized();
  await EasyLocalization.ensureInitialized();
  runApp(
    EasyLocalization(
      supportedLocales: const [
        Locale('en', 'US'),
        Locale('th', 'TH'),
      ],
      path: 'assets/translations',
      // assetLoader: CsvAssetLoader(),
      fallbackLocale: const Locale('th', 'TH'),
      child: const MyApp(),
    ),
  );
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      // supportedLocales:
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        fontFamily: 'FCIconic',
        tabBarTheme: const TabBarTheme(
          labelStyle: TextStyle(fontFamily: 'FCIconic'),
        ),
        appBarTheme: AppBarTheme(
          toolbarHeight: 85,
          iconTheme: ThemeData.light().iconTheme.copyWith(color: Colors.white),
          elevation: 0,
          centerTitle: true,
          color: Colors.red[500],
          titleTextStyle: const TextStyle(
            color: Colors.white,
            fontSize: 20,
            fontWeight: FontWeight.bold,
            fontFamily: 'FCIconic',
          ),
        ),
        // This is the theme of your application.
        //
        // Try running your application with "flutter run". You'll see the
        // application has a blue toolbar. Then, without quitting the app, try
        // changing the primarySwatch below to Colors.green and then invoke
        // "hot reload" (press "r" in the console where you ran "flutter run",
        // or simply save your changes to "hot reload" in a Flutter IDE).
        // Notice that the counter didn't reset back to zero; the application
        // is not restarted.
        primarySwatch: Colors.blue,
      ),
      localizationsDelegates: context.localizationDelegates,
      supportedLocales: context.supportedLocales,
      locale: context.locale,
      home: WebHomeScreen(),
      // home: const MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});

  // This widget is the home page of your application. It is stateful, meaning
  // that it has a State object (defined below) that contains fields that affect
  // how it looks.

  // This class is the configuration for the state. It holds the values (in this
  // case the title) provided by the parent (in this case the App widget) and
  // used by the build method of the State. Fields in a Widget subclass are
  // always marked "final".

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      // This call to setState tells the Flutter framework that something has
      // changed in this State, which causes it to rerun the build method below
      // so that the display can reflect the updated values. If we changed
      // _counter without calling setState(), then the build method would not be
      // called again, and so nothing would appear to happen.
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    // This method is rerun every time setState is called, for instance as done
    // by the _incrementCounter method above.
    //
    // The Flutter framework has been optimized to make rerunning build methods
    // fast, so that you can just rebuild anything that needs updating rather
    // than having to individually change instances of widgets.
    return Scaffold(
      appBar: AppBar(
        // Here we take the value from the MyHomePage object that was created by
        // the App.build method, and use it to set our appbar title.
        title: _appBar(),
        centerTitle: false,
        actions: [
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 8),
            child: Center(
              child: PopupMenuButton(
                child: Text(tr(LocaleKeys.chooseLanguage)),
                itemBuilder: (context) {
                  return List.generate(2, (index) {
                    String _language = 'English';
                    Locale _locale =
                        EasyLocalization.of(context)!.supportedLocales[0];
                    if (index == 1) {
                      _language = 'ไทย';
                      _locale =
                          EasyLocalization.of(context)!.supportedLocales[1];
                    }
                    return PopupMenuItem(
                      child: Text(_language),
                      onTap: () =>
                          EasyLocalization.of(context)!.setLocale(_locale),
                    );
                  });
                },
              ),
            ),
          ),
        ],
      ),
      // body: Center(
      //   // Center is a layout widget. It takes a single child and positions it
      //   // in the middle of the parent.
      //   child: Column(
      //     // Column is also a layout widget. It takes a list of children and
      //     // arranges them vertically. By default, it sizes itself to fit its
      //     // children horizontally, and tries to be as tall as its parent.
      //     //
      //     // Invoke "debug painting" (press "p" in the console, choose the
      //     // "Toggle Debug Paint" action from the Flutter Inspector in Android
      //     // Studio, or the "Toggle Debug Paint" command in Visual Studio Code)
      //     // to see the wireframe for each widget.
      //     //
      //     // Column has various properties to control how it sizes itself and
      //     // how it positions its children. Here we use mainAxisAlignment to
      //     // center the children vertically; the main axis here is the vertical
      //     // axis because Columns are vertical (the cross axis would be
      //     // horizontal).
      //     mainAxisAlignment: MainAxisAlignment.center,
      //     children: <Widget>[
      //       const Text(
      //         'You have pushed the button this many times:',
      //       ),
      //       Text(
      //         '$_counter',
      //         style: Theme.of(context).textTheme.headline4,
      //       ),
      //     ],
      //   ),
      // ),
      body: _body(),
      // floatingActionButton: FloatingActionButton(
      //   onPressed: _incrementCounter,
      //   tooltip: 'Increment',
      //   child: const Icon(Icons.add),
      // ), // This trailing comma makes auto-formatting nicer for build methods.
    );
  }

  _appBar() {
    final double screenWidth = MediaQuery.of(context).size.width;
    // if (_screenWidth < kTabletBreakpoint) {
    //   return Container();
    // }
    List<String> titles = [
      'PENGKIE Vendor',
      'PENGKIE Store',
      'คำถามยอดฮิต',
      'ติดต่อเรา'
    ];
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        const Text(
          "PENGKIE",
          textAlign: TextAlign.start,
        ),
        screenWidth < kTabletBreakpoint ? Container() : Row(
            children: List<Widget>.generate(
                titles.length,
                (index) => Padding(
                      padding: const EdgeInsets.symmetric(
                        horizontal: 20,
                      ),
                      child: Text(
                        titles[index],
                        style: const TextStyle(fontSize: 14),
                      ),
                    ))),
      ],
    );
  }

  _body() {
    List<Widget> widgets = [
      _storeWidget(),
      _vendorWidget(),
    ];
    return Center(
      child: ConstrainedBox(
        constraints: const BoxConstraints(
          maxWidth: kMaxWidth,
        ),
        child: ListView.builder(
          itemCount: widgets.length,
          itemBuilder: (context, index) {
            return widgets[index];
          },
        ),
      ),
    );
  }

  _storeWidget() {
    final double screenWidth = MediaQuery.of(context).size.width;
    if (screenWidth < kTabletBreakpoint) {
      return Column(
        crossAxisAlignment: CrossAxisAlignment.center,
        mainAxisSize: MainAxisSize.min,
        children: [
          Flexible(
            flex: 1,
            child: Container(),
          ),
          Flexible(
            flex: 1,
            child: SizedBox(
              width: 400,
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  const Text(
                    'PENGKIE Store',
                    style: TextStyle(fontSize: 50, fontWeight: FontWeight.bold),
                  ),
                  const   SizedBox(
                    height: 25,
                  ),
                  const   Text(
                    '“เพิ่มพลังให้ร้านค้าปลีก”',
                    style: TextStyle(fontSize: 18),
                  ),
                  const   SizedBox(
                    height: 25,
                  ),
                  const   Text(
                      'ยอดขายจากการทำโปรโมชั่น จะดึงดูดเจ้าของสินค้าอื่น ๆ ให้สนใจร้านค้าของคุณ รวบรวมสินค้าให้ร้านค้าปลีกได้เลือกซื้อ พร้อมทั้งยังสามารถ ทำโปรโมชั่นร่วมกับเจ้าของสินค้าได้',
                      textAlign: TextAlign.start),
                  const   SizedBox(
                    height: 25,
                  ),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      SizedBox(
                          width: 150,
                          child: Image.asset(
                              'assets/images/Download-On-App-Store.png')),
                      SizedBox(
                          width: 150,
                          child: Image.asset(
                              'assets/images/Download-On-Play-Store.png')),
                    ],
                  )
                ],
              ),
            ),
          ),
        ],
      );
    } else {
      return Container(
        color: Colors.grey[100],
        padding: const EdgeInsets.symmetric(vertical: 50),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Flexible(
              flex: 1,
              child: SizedBox(
                width: 400,
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    const Text(
                      'PENGKIE Store',
                      style: TextStyle(fontSize: 50, fontWeight: FontWeight.bold),
                    ),
                    const   SizedBox(
                      height: 25,
                    ),
                    const   Text(
                      '“เพิ่มพลังให้ร้านค้าปลีก”',
                      style: TextStyle(fontSize: 18),
                    ),
                    const   SizedBox(
                      height: 25,
                    ),
                    const   Text(
                        'ยอดขายจากการทำโปรโมชั่น จะดึงดูดเจ้าของสินค้าอื่น ๆ ให้สนใจร้านค้าของคุณ รวบรวมสินค้าให้ร้านค้าปลีกได้เลือกซื้อ พร้อมทั้งยังสามารถ ทำโปรโมชั่นร่วมกับเจ้าของสินค้าได้',
                        textAlign: TextAlign.start),
                    const   SizedBox(
                      height: 25,
                    ),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        SizedBox(
                            width: 150,
                            child: Image.asset(
                                'assets/images/Download-On-App-Store.png')),
                        SizedBox(
                            width: 150,
                            child: Image.asset(
                                'assets/images/Download-On-Play-Store.png')),
                      ],
                    )
                  ],
                ),
              ),
            ),
            Flexible(
              flex: 1,
              child: Container(),
            ),
          ],
        ),
      );
    }

  }

  _vendorWidget() {
    final double _screenWidth = MediaQuery.of(context).size.width;
    if (_screenWidth < kTabletBreakpoint) {
      return Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          Flexible(
            flex: 1,
            child: Container(),
          ),
          Flexible(
            flex: 1,
            child: SizedBox(
              width: 400,
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  const Text(
                       'เพราะเราอยากเห็นธุรกิจรายเล็กได้มีโอกาสเติบโต และแข่งขันกับรายใหญ่ได้'),
                   const SizedBox(
                     height: 25,
                   ),
                  const  Text(
                    'PENGKIE Vendor',
                    style: TextStyle(fontSize: 50, fontWeight: FontWeight.bold),
                  ),
                  const  SizedBox(
                    height: 25,
                  ),
                  const  Text(
                    '"เพราะร้านค้าปลีกคือกุญแจสู่ความสำเร็จของคุณ"',
                    style: TextStyle(fontSize: 18),
                  ),
                  const  SizedBox(
                    height: 25,
                  ),
                  const  Text(
                      'เรารวบรวมร้านค้าปลีกให้คุณเข้าถึงได้ทันที คุณสามารถขายสินค้า และร่วมมือทำโปรโมชั่นกับร้านค้าปลีกได้อย่างที่ไม่เคยมีมาก่อน',
                      textAlign: TextAlign.start),
                  const  SizedBox(
                    height: 25,
                  ),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      SizedBox(
                          width: 150,
                          child: Image.asset(
                              'assets/images/Download-On-App-Store.png')),
                      SizedBox(
                          width: 150,
                          child: Image.asset(
                              'assets/images/Download-On-Play-Store.png')),
                    ],
                  )
                ],
              ),
            ),
          ),
        ],
      );
    } else {
      return Container(
        padding: const EdgeInsets.symmetric(vertical: 50),
        // height: 350,
        child: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Flexible(
              flex: 1,
              child: Container(),
            ),
            Flexible(
              flex: 1,
              child: SizedBox(
                width: 400,
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    // const Text(
                    //      'เพราะเราอยากเห็นธุรกิจรายเล็กได้มีโอกาสเติบโต และแข่งขันกับรายใหญ่ได้'),
                    //  const SizedBox(
                    //    height: 25,
                    //  ),
                    const  Text(
                      'PENGKIE Vendor',
                      style: TextStyle(fontSize: 50, fontWeight: FontWeight.bold),
                    ),
                    const  SizedBox(
                      height: 25,
                    ),
                    const  Text(
                      '"เพราะร้านค้าปลีกคือกุญแจสู่ความสำเร็จของคุณ"',
                      style: TextStyle(fontSize: 18),
                    ),
                    const  SizedBox(
                      height: 25,
                    ),
                    const  Text(
                        'เรารวบรวมร้านค้าปลีกให้คุณเข้าถึงได้ทันที คุณสามารถขายสินค้า และร่วมมือทำโปรโมชั่นกับร้านค้าปลีกได้อย่างที่ไม่เคยมีมาก่อน',
                        textAlign: TextAlign.start),
                    const  SizedBox(
                      height: 25,
                    ),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        SizedBox(
                            width: 150,
                            child: Image.asset(
                                'assets/images/Download-On-App-Store.png')),
                        SizedBox(
                            width: 150,
                            child: Image.asset(
                                'assets/images/Download-On-Play-Store.png')),
                      ],
                    )
                  ],
                ),
              ),
            ),
          ],
        ),
      );
    }

  }

}

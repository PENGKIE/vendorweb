// import 'package:flutter/foundation.dart';
// import 'package:flutter/material.dart';
// import 'package:flutter/services.dart';
// import 'package:youtube_player_iframe/youtube_player_iframe.dart';
//
// class YouTubePlayerWidget extends StatefulWidget {
//   const YouTubePlayerWidget({Key? key}) : super(key: key);
//
//   @override
//   State<YouTubePlayerWidget> createState() => _YouTubePlayerWidgetState();
// }
//
// class _YouTubePlayerWidgetState extends State<YouTubePlayerWidget> {
//   late YoutubePlayerController _controller;
//
//   @override
//   void initState() {
//     _controller = YoutubePlayerController(
//       // 'https://www.youtube.com/watch?v=xJo7Mqse960',
//       params: const YoutubePlayerParams(
//         origin: 'https://www.youtube.com/watch?v=fgiy7zT5l0I',
//         showControls: true,
//         showFullscreenButton: true,
//       ),
//     );
//     _controller.onFullscreenChange = (bool fullScreen) {
//       print('fullScreen: $fullScreen');
//       if (fullScreen) {
//         SystemChrome.setPreferredOrientations([
//           DeviceOrientation.landscapeLeft,
//           DeviceOrientation.landscapeRight,
//         ]);
//       }
//     };
//     //
//     // _controller.exitFullScreen = (bool lock) {
//     //   SystemChrome.setPreferredOrientations([DeviceOrientation.portraitUp]);
//     //   Future.delayed(const Duration(seconds: 1), () {
//     //     _controller.play();
//     //   });
//     //   Future.delayed(const Duration(seconds: 5), () {
//     //     SystemChrome.setPreferredOrientations(DeviceOrientation.values);
//     //   });
//     // };
//     super.initState();
//   }
//
//   @override
//   void dispose() {
//     _controller.close();
//     super.dispose();
//   }
//
//   @override
//   Widget build(BuildContext context) {
//     const player = YoutubePlayer();
//     return YoutubePlayerControllerProvider(
//       controller: _controller,
//       child: Scaffold(
//         body: LayoutBuilder(
//           builder: (context, constraints) {
//             if (kIsWeb && constraints.maxWidth > 800) {
//               return Row(
//                 crossAxisAlignment: CrossAxisAlignment.start,
//                 children: const [
//                   Text('See youtube'),
//                   Expanded(child: player),
//                   SizedBox(
//                     width: 500,
//                     child: SingleChildScrollView(
//                       child: Controls(),
//                     ),
//                   ),
//                 ],
//               );
//             } else {
//               return ListView(
//                 children: [
//                   player,
//                   const Controls(),
//                 ],
//               );
//             }
//           },
//         ),
//       ),
//     );
//   }
// }
//
// class Controls extends StatelessWidget {
//   ///
//   const Controls();
//
//   @override
//   Widget build(BuildContext context) {
//     return Padding(
//       padding: const EdgeInsets.all(16),
//       child: Column(
//         crossAxisAlignment: CrossAxisAlignment.start,
//         children: [
//           _space,
//           // MetaDataSection(),
//           // _space,
//           // SourceInputSection(),
//           // _space,
//           // PlayPauseButtonBar(),
//           // _space,
//           // VolumeSlider(),
//           // _space,
//           // PlayerStateSection(),
//         ],
//       ),
//     );
//   }
//
//   Widget get _space => const SizedBox(height: 10);
// }

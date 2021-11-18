'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "09123cc1df59fa8659687408ad809eb0",
"favicon.ico": "86253bf59e89403237a5befa79f59be1",
"index.html": "95bea53a2957ba28a6edeb44d14bed92",
"/": "95bea53a2957ba28a6edeb44d14bed92",
"CNAME": "8e5f084898906fa656d13f55d1b673df",
"firebase-messaging-sw.js": "8d11948c5ea05472e7a0185db6bb665e",
"main.dart.js": "be6a9d5b2efb1204beefe36b6df20107",
"icons/Icon-192.png": "c739c3baff8e7aea9891e71cc2ee4fd5",
"icons/Icon-maskable-192.png": "c739c3baff8e7aea9891e71cc2ee4fd5",
"icons/Icon-maskable-512.png": "23e536fd7b5c20051fe2f9f1c3c09fba",
"icons/Icon-512.png": "23e536fd7b5c20051fe2f9f1c3c09fba",
"manifest.json": "4446ac1d85b50e34f49fe13c8ca51b6b",
".git/ORIG_HEAD": "06fdd0528a1c9002d50224448453c3d1",
".git/config": "b7405e9fd7c913bdccf441a9dac7af99",
".git/objects/68/998fdeedbacdea99dd2db5379b0306110da87b": "4585d6bbafb738ec4fb670f021dda4e9",
".git/objects/60/3a07421cd63d0b9edac66ca91be1c6f5e6b931": "b85d15152812f1edbac08cc2550831c5",
".git/objects/5f/d2d41e7cfd41e7b228c398d7b4b2157eaacafd": "5ad5ca2f92176823e279016f623324ce",
".git/objects/a4/718719dfa8528964a51c52e69327319cf230be": "f857f1685d4e58005ce5f57ba11df2f9",
".git/objects/a4/94bc32d12c71e4706d697df46a7d77fd921823": "07bae6f6849e82398ad9c3e921439cf0",
".git/objects/b5/8eab5ea3472b241160f2575fba787536afad40": "cac6ff42d4e9e18d188c19ce8e000182",
".git/objects/b2/5e82280162fd6c5b86d09b448ff15b9eebcf3c": "5aaeba554b2eec2f557f511bad292086",
".git/objects/d9/975a1f6c2ac9c27ef93150c4215934ccfdf64f": "091dee254b9f284c1a55cd0bf11cb7d8",
".git/objects/bb/575a47c2cbb6701e942388bd415eba9088e2f7": "0b2190f3928df3a519de076000015487",
".git/objects/d7/73e69f8a77f216c1311264e90f856ed1c2ba67": "10176e2fda7321043fd8ac34b706c565",
".git/objects/be/57eaa5025b17e044a0a18102be36853159d62c": "18e97240dc8f095c62fc364c44a53f43",
".git/objects/a2/c1c70abe1b7367a9d0a66a564868f1c486ac76": "97916d4b3f8137dc6813e960f63d3111",
".git/objects/e5/618ea8da665eda70cb4e001bc352cdaaf566b7": "7e4d10b5b9aba186a16bbb5a224cb634",
".git/objects/e2/13b769970963b1d27ec3f2f612693020bf220c": "d1c1c0619608c9e04b6270c74fcbdc05",
".git/objects/f3/a07e70f238296726939b9584916f38f6651448": "e55fb336403a0228aeab5f57cc58c7dd",
".git/objects/c0/18e3c519f3a0f597c5f73587cbf65d10f26c9f": "b30b6b8b0ade4576e55a7f4da1fc9c6e",
".git/objects/cf/44e03d5b4a660ff04df3e8ea12380b15900bbe": "b730216c90e2a49696c010a93ce9ca35",
".git/objects/c1/c6ac7e70ae28c0ba07aaf67d8e1b8047181290": "d39397521e49d2f1303a37b16d8cb7d5",
".git/objects/pack/pack-0879da00a1fa6edbdcec91b267d9a13c1d0bd42c.pack": "611017b92019db48e4496c4c1449db68",
".git/objects/pack/pack-0879da00a1fa6edbdcec91b267d9a13c1d0bd42c.idx": "9293e34c157f4e36330ab35b159c6df1",
".git/objects/7d/0bef42ce2077d7adc1075575b14df24cea2134": "6174efc5d5b7b5512af3b3dc104e11c4",
".git/objects/29/8f4eac8f280b9b0e3910bdc0cb26a986db6bdc": "834ea275228a96631752716eb7aea362",
".git/objects/7e/8a1fa7741b4f1cb3f5542a1644ee57b58b536b": "a74601cd57f2a1460bbcfe26a61fe437",
".git/objects/75/8e6c64d0c8dee71785c6fea5f5df7a95cf9980": "90365b928a4ae2e46467750943f694dc",
".git/objects/2a/97b59a5206058380eb375254f737fe56e1469e": "5505067a952354a84fb41e3733b234ed",
".git/objects/36/4ef43fceade9f795af77884340a71709690c22": "f48f01698fa42e080cc7bf8809d6f08b",
".git/objects/5d/53df7e6dee94c29d568ee99167a07f3e488a53": "8cb9763fd94a8575cd05298b3b6a4a08",
".git/objects/98/0a01ab2aab4ccf4c853db044dbf65847258caa": "f55a5fb699648fa2e29de49271d61140",
".git/objects/6d/107ac272ff5a37a194f4c0e757b95fb9bf360f": "1531d2e0a03a6b23584d2642ea94a448",
".git/objects/b9/e0bd9801992bd290499c81fc0d5922ccb25b2d": "2ed1354a176a6e72d38b67ee3d5910e9",
".git/objects/a1/efcac43aa5048126de9f66ea326b9ab7d8c013": "9931590fd7f1d06bc9379d15afa32975",
".git/objects/cd/e49605c5984181212971b2672ca92a6b1d9d10": "2c3d352bb4c3e25119738816b4523081",
".git/objects/e9/07c22abb74c1cc49c94a7ede8e8332f695f0dd": "7c861009525adb88feb9b098a5857561",
".git/objects/46/62e1b86018dd0881bbaee2b97535c046565552": "10102568cb2dbfa2e4514f1bd007b98d",
".git/objects/1b/861e6ec2f59caa484a73bbf46034ea541471af": "bd907de504f938ddc17a7c313d45b1f2",
".git/objects/48/0eac154aeb54d38963f90880666befb266b824": "d877f7df536cd628cb2d5bd5d107697b",
".git/objects/8c/70587d92a1537d7548c6d01ee40aeee7fb45c1": "62a18e36b3c775fd9a0b5f712ff5ee13",
".git/objects/8c/06061f5354debc302753272272c3624ccebab9": "c441ac77ac03cba84138c0b293f3be8d",
".git/objects/1d/b59813608622383f9ce6118d1876ea66878216": "9134c5b7bb4d8bf6ec4f30c75ff12caf",
".git/objects/40/f31b51df6fe8747686d633243993445c532013": "2c8b8ae13f3c00521fb5d24318304539",
".git/objects/2b/5aee20e506998b37c1702bc88af85dcce0b9d5": "9f2da5da6b1723c35327d6d5588c532b",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "995ea2858814a7f694363e6828e0ccc7",
".git/logs/refs/heads/main": "957a628e2fa58e6af8c893a00e32413c",
".git/logs/refs/remotes/origin/main": "d83847ca984d57699c1a64273a7f19d7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "edbd335baaff06f4f047935a7c350dc3",
".git/refs/remotes/origin/main": "edbd335baaff06f4f047935a7c350dc3",
".git/index": "fdfeaefc2773e8e2cb8f84c659e61dd8",
".git/COMMIT_EDITMSG": "3b0e5fc11d218fbf3e4e427b7aebed0e",
".git/FETCH_HEAD": "b0aec917f5a7963a6a40efb93bb10e01",
"assets/AssetManifest.json": "8a10da83a595e076de7a29470cb045e5",
"assets/NOTICES": "c057755ca9d81c17fa6be63c4592b46c",
"assets/FontManifest.json": "89b2bd48de7ac42d6b0dda3abc4bd168",
"assets/packages/country_currency_pickers/assets/tg.png": "a0f14f046b0356221c6923203bd43373",
"assets/packages/country_currency_pickers/assets/me.png": "a2ca2c8d5567775b6f00634bcdb7a6f9",
"assets/packages/country_currency_pickers/assets/la.png": "ab542ca6e9c4e1911e70cb6178dd64a6",
"assets/packages/country_currency_pickers/assets/mr.png": "253fc7fdd3d3360dfd2e8d726a3c27f7",
"assets/packages/country_currency_pickers/assets/ni.png": "41e2831687e9997fa4d5f4eb0700cc84",
"assets/packages/country_currency_pickers/assets/lv.png": "4370f6f09eecc21db000bd09191f3ff3",
"assets/packages/country_currency_pickers/assets/om.png": "b16ebc34417eb7a6ad7ed0e3c79a71c0",
"assets/packages/country_currency_pickers/assets/af.png": "4b0f402972e53c96146b67d621682070",
"assets/packages/country_currency_pickers/assets/cy.png": "f63fce2edfbc2aac831d6934e82a336f",
"assets/packages/country_currency_pickers/assets/bj.png": "04f9872301a332efdd91735631f3d438",
"assets/packages/country_currency_pickers/assets/aq.png": "947030b9fb778b63ab28954c545ea4c7",
"assets/packages/country_currency_pickers/assets/cn.png": "26c512b86a77d796629adf61862475ac",
"assets/packages/country_currency_pickers/assets/gb-sct.png": "d55a9a9d41e9dc61cbeef059519d5618",
"assets/packages/country_currency_pickers/assets/co.png": "37dbdf7ef835ea7ee2c1bdcf91e9a2bb",
"assets/packages/country_currency_pickers/assets/cx.png": "d5a6ca51e490d03b06a647d652d3fdb0",
"assets/packages/country_currency_pickers/assets/ag.png": "45b17f619e8d2d3321fe031c4a90691e",
"assets/packages/country_currency_pickers/assets/ms.png": "438b3ae48465543239a679ef915378de",
"assets/packages/country_currency_pickers/assets/md.png": "d579fff3f3b7644d54cdad3fbcdd501e",
"assets/packages/country_currency_pickers/assets/zm.png": "e918e6d9756449e9e9fefd52faa0da80",
"assets/packages/country_currency_pickers/assets/vn.png": "32ff65ccbf31a707a195be2a5141a89b",
"assets/packages/country_currency_pickers/assets/tf.png": "cc0d9468b31855b29f38ca53eb522067",
"assets/packages/country_currency_pickers/assets/td.png": "343a6c8ad0d15e0a7f44e075dd02082a",
"assets/packages/country_currency_pickers/assets/yt.png": "4fa81d3430e630527b8c6987619e85dc",
"assets/packages/country_currency_pickers/assets/lb.png": "30e7e0ee297d535bed953d7ad3321c6f",
"assets/packages/country_currency_pickers/assets/mf.png": "4fa81d3430e630527b8c6987619e85dc",
"assets/packages/country_currency_pickers/assets/lu.png": "31349218e6c2a6e900a3a83baa8f61d2",
"assets/packages/country_currency_pickers/assets/mq.png": "394a6076943d6eb57ee10c7f2e044e1c",
"assets/packages/country_currency_pickers/assets/cz.png": "9e16a631c6e170d3415c005061b1e5da",
"assets/packages/country_currency_pickers/assets/ae.png": "7ff210c9d922e6047b30241b5176948b",
"assets/packages/country_currency_pickers/assets/cm.png": "12c2c677c148caa9f6464050ea5647eb",
"assets/packages/country_currency_pickers/assets/bi.png": "2c1d426f4b941b9638303c34145ba672",
"assets/packages/country_currency_pickers/assets/ar.png": "b8a60b09d7db59ca8e34d0c391f7cf47",
"assets/packages/country_currency_pickers/assets/as.png": "d3ee7d8aeade5f87a5ab6ea1c53c1181",
"assets/packages/country_currency_pickers/assets/bh.png": "7533d290739c20bd2d0250414a74c19d",
"assets/packages/country_currency_pickers/assets/cl.png": "6735e0e2d88c119e9ed1533be5249ef1",
"assets/packages/country_currency_pickers/assets/ad.png": "8312ea200df9dd539e27c116939db42c",
"assets/packages/country_currency_pickers/assets/mp.png": "895e2aea9e8a9fb4a3db09ba75b2ae11",
"assets/packages/country_currency_pickers/assets/lt.png": "d79eb564dd857c66ddd65a41f4cdfe4e",
"assets/packages/country_currency_pickers/assets/mg.png": "0ef6271ad284ebc0069ff0aeb5a3ad1e",
"assets/packages/country_currency_pickers/assets/lc.png": "32e5433954c7a99cd53c1e67f2ac604a",
"assets/packages/country_currency_pickers/assets/tr.png": "0a832c3bc7481e6b285dabbf1a119e22",
"assets/packages/country_currency_pickers/assets/ua.png": "b4b10d893611470661b079cb30473871",
"assets/packages/country_currency_pickers/assets/tv.png": "d45cf6c6f6ec53ae9b52f77848dc6bf9",
"assets/packages/country_currency_pickers/assets/vi.png": "bfe5691810c27983346bf52eb5149bb4",
"assets/packages/country_currency_pickers/assets/mt.png": "2c20ed4b1721ad71677d7e26f95425cd",
"assets/packages/country_currency_pickers/assets/no.png": "ae5d87669104732f61cca68d6bd10cbf",
"assets/packages/country_currency_pickers/assets/mc.png": "6375a336b1fd53d0e918ae945523078c",
"assets/packages/country_currency_pickers/assets/ch.png": "fe8519b23bed3b2e8669dac779c3cb55",
"assets/packages/country_currency_pickers/assets/bl.png": "536f99fa693e6b52a21c67e983632092",
"assets/packages/country_currency_pickers/assets/aw.png": "01f11f497399c715de5f2561b93b8ef8",
"assets/packages/country_currency_pickers/assets/bz.png": "3b84100ca29a0bc77474677e9da6fc0f",
"assets/packages/country_currency_pickers/assets/bm.png": "72e7fff10d3168e4c62bad5465598db0",
"assets/packages/country_currency_pickers/assets/ci.png": "a490576a22f2c67f1d331cbc5098f5f1",
"assets/packages/country_currency_pickers/assets/mu.png": "f00d3c927769eaf3bbc4d2c249ea3418",
"assets/packages/country_currency_pickers/assets/us.png": "b2b35d5b34ba0d66fda92e2003cd6b10",
"assets/packages/country_currency_pickers/assets/tw.png": "079535fcbc6e855a85c508c9d1b5615a",
"assets/packages/country_currency_pickers/assets/ye.png": "4cf73209d90e9f02ead1565c8fdf59e5",
"assets/packages/country_currency_pickers/assets/mw.png": "47fb9232df51b3a1de93fda80a795163",
"assets/packages/country_currency_pickers/assets/nl.png": "3649c177693bfee9c2fcc63c191a51f1",
"assets/packages/country_currency_pickers/assets/ls.png": "2bca756f9313957347404557acb532b0",
"assets/packages/country_currency_pickers/assets/bo.png": "74bac15d186993c09eecdde11876b401",
"assets/packages/country_currency_pickers/assets/at.png": "3d36c83a3d671b11f755c891bd8de687",
"assets/packages/country_currency_pickers/assets/ck.png": "882bc3896cdd040757972bcbbf75e4bb",
"assets/packages/country_currency_pickers/assets/by.png": "c5d14943250d54b4a630794c5648c687",
"assets/packages/country_currency_pickers/assets/au.png": "63084e9484c0b6db451a1d68ad5adeb9",
"assets/packages/country_currency_pickers/assets/bn.png": "1f1c5a29f9a6fd77963f7bb3de5946c2",
"assets/packages/country_currency_pickers/assets/ma.png": "2302b44a7fe96ca595ea9528271a1ad9",
"assets/packages/country_currency_pickers/assets/nz.png": "d22c137d0038c20c1fa98ae2ed3729b0",
"assets/packages/country_currency_pickers/assets/lr.png": "ef37f094c6b37fbd2343bc800b2a35e5",
"assets/packages/country_currency_pickers/assets/mv.png": "8468c7f25a4b5dc7403146da72bd8126",
"assets/packages/country_currency_pickers/assets/tc.png": "0faabda1411738e572144aaeed24aadd",
"assets/packages/country_currency_pickers/assets/ug.png": "3a85e25a9797f7923a898007b727216a",
"assets/packages/country_currency_pickers/assets/tt.png": "2633904bd4718afeecfa0503057a7f65",
"assets/packages/country_currency_pickers/assets/pl.png": "e8714e9460929665055f1c93dce1bf61",
"assets/packages/country_currency_pickers/assets/rs.png": "0a4c07a0ac5523d6328ab7d162d79d1e",
"assets/packages/country_currency_pickers/assets/in.png": "0f1b94cf838fa1b86c172da4ab3db7e1",
"assets/packages/country_currency_pickers/assets/ge.png": "3fb1b71b32fb6bbd4e757adba06ce216",
"assets/packages/country_currency_pickers/assets/gr.png": "ed1304c7d8e6a64f31e7b65c4beea944",
"assets/packages/country_currency_pickers/assets/gs.png": "191d4b79605c08effa5b3def9834c9d6",
"assets/packages/country_currency_pickers/assets/gd.png": "7d4b72f73674133acb00c0ea3959e16b",
"assets/packages/country_currency_pickers/assets/io.png": "d4910e28f0164bc879999c17024d543c",
"assets/packages/country_currency_pickers/assets/hk.png": "69a77d8a25952f39fe6aadafb6f7efc2",
"assets/packages/country_currency_pickers/assets/kp.png": "8fcc8f2fc646b484b4a47cdc0ff21cab",
"assets/packages/country_currency_pickers/assets/gb-nir.png": "09af1c5f1433c02e97a95286ce24f4d4",
"assets/packages/country_currency_pickers/assets/kg.png": "e0eab32f37a96e43df134e70db49482a",
"assets/packages/country_currency_pickers/assets/pm.png": "4fa81d3430e630527b8c6987619e85dc",
"assets/packages/country_currency_pickers/assets/sv.png": "abe677facaeee030a10987f87831ee53",
"assets/packages/country_currency_pickers/assets/re.png": "4fa81d3430e630527b8c6987619e85dc",
"assets/packages/country_currency_pickers/assets/sa.png": "60851afd0246c77b57f76f32e853c130",
"assets/packages/country_currency_pickers/assets/sc.png": "fce9893562cbe99d2e62a46b03e42007",
"assets/packages/country_currency_pickers/assets/st.png": "5abecf1202ef9f7b33bdb9d0e3913f80",
"assets/packages/country_currency_pickers/assets/ke.png": "3e54059985907a758bb0531a711522fb",
"assets/packages/country_currency_pickers/assets/im.png": "d3da8affefefe4ec55770c9f3f43f117",
"assets/packages/country_currency_pickers/assets/kr.png": "f36e020411beb5d89c1accce5acb1dd1",
"assets/packages/country_currency_pickers/assets/gf.png": "4004b2e3ec6c151fe4cb43e902280952",
"assets/packages/country_currency_pickers/assets/dj.png": "6816bcba85e0179c4c1fafb76f35cd93",
"assets/packages/country_currency_pickers/assets/gq.png": "de93250a1de5e482f88bc5309ce21ac0",
"assets/packages/country_currency_pickers/assets/gp.png": "4fa81d3430e630527b8c6987619e85dc",
"assets/packages/country_currency_pickers/assets/dk.png": "2f452388777897cd70a25b1295582938",
"assets/packages/country_currency_pickers/assets/gg.png": "0a697b4266f87119aeb8a2ffe3b15498",
"assets/packages/country_currency_pickers/assets/il.png": "ee933479696b8c80d2ade96ee344a89c",
"assets/packages/country_currency_pickers/assets/pn.png": "0205d0644f1207674c80eef7719db270",
"assets/packages/country_currency_pickers/assets/sb.png": "12cccb421defca5c7a4d19661f98f06f",
"assets/packages/country_currency_pickers/assets/py.png": "4dca66b598604fb3af9dee2fd9622ac4",
"assets/packages/country_currency_pickers/assets/ru.png": "6974dcb42ad7eb3add1009ea0c6003e3",
"assets/packages/country_currency_pickers/assets/kw.png": "cac0e665bc61366ffeb1cb08c24b609b",
"assets/packages/country_currency_pickers/assets/do.png": "e625b779a26a0130150b0a5bafe24380",
"assets/packages/country_currency_pickers/assets/gt.png": "2791b68757cd31e89af8817817e589f0",
"assets/packages/country_currency_pickers/assets/gb.png": "09af1c5f1433c02e97a95286ce24f4d4",
"assets/packages/country_currency_pickers/assets/gu.png": "7e51aa7e3adaf526a8722350e0477192",
"assets/packages/country_currency_pickers/assets/je.png": "6fcdb123f8bf3cafea5537542018b151",
"assets/packages/country_currency_pickers/assets/hm.png": "63084e9484c0b6db451a1d68ad5adeb9",
"assets/packages/country_currency_pickers/assets/sg.png": "fd3e4861be787cfde6338870e2c8d60a",
"assets/packages/country_currency_pickers/assets/pk.png": "c341fe3cf9392ed6a3b178269c1d9f0c",
"assets/packages/country_currency_pickers/assets/sr.png": "b9e4b7fff662b655ce2b41324a04526b",
"assets/packages/country_currency_pickers/assets/se.png": "775da17dccf0768a1f10f21d47942985",
"assets/packages/country_currency_pickers/assets/jp.png": "fc7c3eb4c199252dc35730939ca4384d",
"assets/packages/country_currency_pickers/assets/gw.png": "806f63c256bddd4f1680529f054f4043",
"assets/packages/country_currency_pickers/assets/eh.png": "f91039d93b511ab8baba3a6242f21359",
"assets/packages/country_currency_pickers/assets/dz.png": "7372cc9383ca55804d35ca60d09f2ab9",
"assets/packages/country_currency_pickers/assets/ga.png": "7a9bd1b751a4c92c4a00897dbb973214",
"assets/packages/country_currency_pickers/assets/fr.png": "4fa81d3430e630527b8c6987619e85dc",
"assets/packages/country_currency_pickers/assets/dm.png": "013b44702a8fb5773a0983085b0dc076",
"assets/packages/country_currency_pickers/assets/hn.png": "5fcf2451994a42af2bba0c17717ed13f",
"assets/packages/country_currency_pickers/assets/sd.png": "40572a05b7cd8ea53cee59c6be331588",
"assets/packages/country_currency_pickers/assets/rw.png": "f6602a0993265061713f34e8a86c42cf",
"assets/packages/country_currency_pickers/assets/ph.png": "158bd50b6f2d18f398e8600f6663b488",
"assets/packages/country_currency_pickers/assets/ss.png": "bfc79aa44e6d2b026717f7aae4431639",
"assets/packages/country_currency_pickers/assets/qa.png": "3ed06ed4f403488dd34a747d2869204d",
"assets/packages/country_currency_pickers/assets/pe.png": "b722a28a444000bab6cd03e859112e42",
"assets/packages/country_currency_pickers/assets/pr.png": "b496188f51424a776d7ce5d8e28fd022",
"assets/packages/country_currency_pickers/assets/si.png": "9fa57dc95640bcd67051d7ff63caa828",
"assets/packages/country_currency_pickers/assets/ht.png": "a49a27479ed8be33d962898febc049f1",
"assets/packages/country_currency_pickers/assets/es.png": "a290e5120fe89e60d72009815478d0d3",
"assets/packages/country_currency_pickers/assets/gl.png": "fb536122819fd1d3fc18c02c7df93865",
"assets/packages/country_currency_pickers/assets/gm.png": "be81263dd47ca1f99936f78f6b5dfc4a",
"assets/packages/country_currency_pickers/assets/er.png": "300cbfb7dda5e2eea87e9b03660a6077",
"assets/packages/country_currency_pickers/assets/fi.png": "3ccd69a842e55183415b7ea2c04b15c8",
"assets/packages/country_currency_pickers/assets/ee.png": "69e0ffbab999ade674a9b07db0ee3941",
"assets/packages/country_currency_pickers/assets/kn.png": "11889e3432a57b8327eaeb5f34951db5",
"assets/packages/country_currency_pickers/assets/hu.png": "ff1d0e2bc549da022f2312c4ac7ca109",
"assets/packages/country_currency_pickers/assets/iq.png": "9434c17a6d4653df965e3276137764a1",
"assets/packages/country_currency_pickers/assets/ky.png": "bacc27cd23c1e359244533ecb9043de6",
"assets/packages/country_currency_pickers/assets/sh.png": "09af1c5f1433c02e97a95286ce24f4d4",
"assets/packages/country_currency_pickers/assets/ps.png": "e3e006d28f6b72169c717c1dba49b4d5",
"assets/packages/country_currency_pickers/assets/pf.png": "33211a88528a8f7369d4bf92766131b2",
"assets/packages/country_currency_pickers/assets/sj.png": "ae5d87669104732f61cca68d6bd10cbf",
"assets/packages/country_currency_pickers/assets/id.png": "80bb82d11d5bc144a21042e77972bca9",
"assets/packages/country_currency_pickers/assets/is.png": "9fce179e688579504fb8210c51aed66d",
"assets/packages/country_currency_pickers/assets/eg.png": "97843ac1dffee8cf3b3e7b341a38893e",
"assets/packages/country_currency_pickers/assets/fk.png": "d599200dd54a121ac54e4895f97f19b1",
"assets/packages/country_currency_pickers/assets/fj.png": "7970a279e5034d20c73b904388df7cba",
"assets/packages/country_currency_pickers/assets/gn.png": "30b014c10d88f166e4bfd46bbc235ebe",
"assets/packages/country_currency_pickers/assets/gy.png": "64f3007da6bdc84a25d8ad6b5d7f3094",
"assets/packages/country_currency_pickers/assets/ir.png": "5d8864e2235f7acb3063a9f32684c80e",
"assets/packages/country_currency_pickers/assets/km.png": "c631326a464f21c51fbfd767be9bcf39",
"assets/packages/country_currency_pickers/assets/ie.png": "1d91912afc591dd120b47b56ea78cdbf",
"assets/packages/country_currency_pickers/assets/kz.png": "caba66830ed539d3f86431ddf4006e72",
"assets/packages/country_currency_pickers/assets/ro.png": "50ada15f78e9828d9886505e0087cbfd",
"assets/packages/country_currency_pickers/assets/sk.png": "207097f7d7d1ab9c7c88d16129cdba39",
"assets/packages/country_currency_pickers/assets/pg.png": "96c8233f13b1f4e7200d6ac4173de697",
"assets/packages/country_currency_pickers/assets/pt.png": "1fe8c12d96a7536b0aa25a9ca7d3c701",
"assets/packages/country_currency_pickers/assets/so.png": "2a29df9dfbfbe10d886f1f6157557147",
"assets/packages/country_currency_pickers/assets/sx.png": "aee87f6ff085fccd57c234f10a6d6052",
"assets/packages/country_currency_pickers/assets/hr.png": "3175463c3e7e42116d5b59bc1da19a3f",
"assets/packages/country_currency_pickers/assets/ki.png": "a93bda4f0f004d9c865f93d25c81ce18",
"assets/packages/country_currency_pickers/assets/jm.png": "87dbf861e528586787fdf8b6617e2f61",
"assets/packages/country_currency_pickers/assets/eu.png": "38336a6139fea0f3e2daa5a135e70d1d",
"assets/packages/country_currency_pickers/assets/ec.png": "746ed5202fb98b28f7031393c2b479da",
"assets/packages/country_currency_pickers/assets/et.png": "7bc0f7bd7b4c252b375fc5bd94fe6a3f",
"assets/packages/country_currency_pickers/assets/fo.png": "ccd988f6309e4245cfa36478e103fb9b",
"assets/packages/country_currency_pickers/assets/kh.png": "25e4099457402866cc1fabcd4506c6cc",
"assets/packages/country_currency_pickers/assets/sy.png": "f415bf216f4c08b9a224b83165decc11",
"assets/packages/country_currency_pickers/assets/sn.png": "1e8f55378ddd44cdc9868a7d35bda2fe",
"assets/packages/country_currency_pickers/assets/pw.png": "5216b69d6d8cb4e50962f8a6531231e8",
"assets/packages/country_currency_pickers/assets/sl.png": "61b9d992c8a6a83abc4d432069617811",
"assets/packages/country_currency_pickers/assets/gb-eng.png": "0d9f2a6775fd52b79e1d78eb1dda10cf",
"assets/packages/country_currency_pickers/assets/fm.png": "03c6a315c3acedae9a51cb444c99be5e",
"assets/packages/country_currency_pickers/assets/gi.png": "987d065705257febe56bdbe05a294749",
"assets/packages/country_currency_pickers/assets/de.png": "e2227152ece494eabbb6b184dfb9f9a9",
"assets/packages/country_currency_pickers/assets/gh.png": "b35464dca793fa33e51bf890b5f3d92b",
"assets/packages/country_currency_pickers/assets/jo.png": "79a73b63a1e0d78a08da882b146a2224",
"assets/packages/country_currency_pickers/assets/it.png": "ff7064f6e37512ff41e665f3a4987e70",
"assets/packages/country_currency_pickers/assets/pa.png": "3215dc6016afeb373faacc38ee34b3d4",
"assets/packages/country_currency_pickers/assets/sz.png": "a06f0fa489d9c9faf0690673242005d2",
"assets/packages/country_currency_pickers/assets/sm.png": "8615f3e38ee216e53895ac9acd31a56b",
"assets/packages/country_currency_pickers/assets/tn.png": "c375381bbdb31c4e80af18210d196d30",
"assets/packages/country_currency_pickers/assets/ml.png": "82bf0ca0c67d2371207a540b40c320fc",
"assets/packages/country_currency_pickers/assets/cg.png": "502df6404e41cb76d033af895f34eb2c",
"assets/packages/country_currency_pickers/assets/ax.png": "adc1e135fd79d41a3d968de5ec048d8a",
"assets/packages/country_currency_pickers/assets/ao.png": "eec240bde52c32770eeacd027b193347",
"assets/packages/country_currency_pickers/assets/bt.png": "43e973113f8c57a5cd303a49b5f371da",
"assets/packages/country_currency_pickers/assets/an.png": "2aaab4636955c0e2609ad551e8e938cf",
"assets/packages/country_currency_pickers/assets/bb.png": "8679327e664edb5e050982e7ee0c7828",
"assets/packages/country_currency_pickers/assets/cf.png": "acb28ea1b07b24c3e4984a6698faef24",
"assets/packages/country_currency_pickers/assets/mm.png": "0073e71d8d7d5c7f6ee70c828be1b7c8",
"assets/packages/country_currency_pickers/assets/li.png": "1abb7f4421487e6f40007c97ccf98c3d",
"assets/packages/country_currency_pickers/assets/na.png": "2431d5e2158f15bbcbad8e57bb78f25d",
"assets/packages/country_currency_pickers/assets/mz.png": "3bce789f6780525f09212b677239f2d5",
"assets/packages/country_currency_pickers/assets/to.png": "1cdd716b5b5502f85d6161dac6ee6c5b",
"assets/packages/country_currency_pickers/assets/vg.png": "420edc09fba1878f87336f8ebcdcee66",
"assets/packages/country_currency_pickers/assets/ve.png": "c177b253feaa781aae0368ae9d55d702",
"assets/packages/country_currency_pickers/assets/tz.png": "f8da3c6c3c64726ba9cb58ccfb373de2",
"assets/packages/country_currency_pickers/assets/tm.png": "9b27cae273a82e046c82a94f380826a6",
"assets/packages/country_currency_pickers/assets/mx.png": "7e557bb1bf47d52b6f3820e647fa5f98",
"assets/packages/country_currency_pickers/assets/nc.png": "b94385d139bf8b82b5b3f20559feece5",
"assets/packages/country_currency_pickers/assets/mo.png": "08f0124b030743d010253d0108ef3b7f",
"assets/packages/country_currency_pickers/assets/lk.png": "b7ab4259e284bb6f4f30cb8ec5e9b1b6",
"assets/packages/country_currency_pickers/assets/cd.png": "f0b60b807ec62ebfc391ff50c79ec30e",
"assets/packages/country_currency_pickers/assets/al.png": "675265e7b86d00e3aa6f25bf64a4dab9",
"assets/packages/country_currency_pickers/assets/bw.png": "d50ac293dc1f0534aedb989c8ded82c0",
"assets/packages/country_currency_pickers/assets/cr.png": "40dc5bc52eb9391bd6d1bf895b107a65",
"assets/packages/country_currency_pickers/assets/bv.png": "ae5d87669104732f61cca68d6bd10cbf",
"assets/packages/country_currency_pickers/assets/am.png": "55d71092c291a382a8fb4e0dae4b76a0",
"assets/packages/country_currency_pickers/assets/az.png": "98833fec449ef8d633ef934e63080891",
"assets/packages/country_currency_pickers/assets/ba.png": "4b5ad282e533a2e75d8b6ce8cff43db0",
"assets/packages/country_currency_pickers/assets/mn.png": "22d7616bc740394c5ae5b384bf2ef225",
"assets/packages/country_currency_pickers/assets/nu.png": "146c66c2ede3bd38ec680f76ef6525a0",
"assets/packages/country_currency_pickers/assets/my.png": "e7fc1cb576089cfed2e7fa8071af4cd8",
"assets/packages/country_currency_pickers/assets/tl.png": "5519f1e7173e1f345d1580bab1b34d51",
"assets/packages/country_currency_pickers/assets/ws.png": "d8e4ad3af401330e3f11db4be39dbf32",
"assets/packages/country_currency_pickers/assets/th.png": "aa978ab62657076b0fa36ef0514d4dcf",
"assets/packages/country_currency_pickers/assets/xk.png": "6781f6c7e81d5617769900576c85917e",
"assets/packages/country_currency_pickers/assets/nf.png": "4a9944f819ff0fc923f619184ae3c6df",
"assets/packages/country_currency_pickers/assets/ly.png": "c6d7280c521faa563e07b1f8bec1d9b7",
"assets/packages/country_currency_pickers/assets/ai.png": "7112379111bbf96dae31e0b13a62b926",
"assets/packages/country_currency_pickers/assets/br.png": "4d47e5b273c0043e76bfd6ac76c3e035",
"assets/packages/country_currency_pickers/assets/cv.png": "a5193806962944dad9ee6c9c91f5cf10",
"assets/packages/country_currency_pickers/assets/be.png": "6c7022eda06794dc916358268cb08d50",
"assets/packages/country_currency_pickers/assets/ca.png": "e20a51380b2da69353e3755edead340d",
"assets/packages/country_currency_pickers/assets/bd.png": "0ca802e7f67045161047607b20c6490e",
"assets/packages/country_currency_pickers/assets/cw.png": "7132ff340c5f3fef7f163b60f2c841e2",
"assets/packages/country_currency_pickers/assets/bs.png": "0b6796dfa9a54bf9c6473a005cc7f687",
"assets/packages/country_currency_pickers/assets/ng.png": "eeb857562b3dfcd105aef9ec371a916f",
"assets/packages/country_currency_pickers/assets/mk.png": "b84591fe5860ed7accf9ff7e7307f099",
"assets/packages/country_currency_pickers/assets/np.png": "99ba0ec8de01de3bc62146b2ffd1f96e",
"assets/packages/country_currency_pickers/assets/va.png": "e84a6f9dc08930a11d1e4b9d25b6234f",
"assets/packages/country_currency_pickers/assets/uz.png": "475189379e4a67b29e9ab9a1d71f3cdd",
"assets/packages/country_currency_pickers/assets/um.png": "b2b35d5b34ba0d66fda92e2003cd6b10",
"assets/packages/country_currency_pickers/assets/tk.png": "fcbceb6da21d71232ad719d05b6bb71b",
"assets/packages/country_currency_pickers/assets/vc.png": "e6cead4282ee9e362c624b46752aa3d5",
"assets/packages/country_currency_pickers/assets/zw.png": "6245bb368a8a37c49f2e87331424c1fa",
"assets/packages/country_currency_pickers/assets/nr.png": "c96262cfab530f60649c118ad21ab65f",
"assets/packages/country_currency_pickers/assets/ne.png": "89c2cbd76d15ae5c43f814b5ef5010dd",
"assets/packages/country_currency_pickers/assets/cu.png": "82ec98ab8b9832e6a182367a5dd16f93",
"assets/packages/country_currency_pickers/assets/bq.png": "3649c177693bfee9c2fcc63c191a51f1",
"assets/packages/country_currency_pickers/assets/bf.png": "5746b4e7bb2c86e7a2dc5077226b9952",
"assets/packages/country_currency_pickers/assets/bg.png": "6b473783a5c5b427e668a2048022663e",
"assets/packages/country_currency_pickers/assets/cc.png": "5d1c266d4620dc7203023882a7b647e5",
"assets/packages/country_currency_pickers/assets/gb-wls.png": "74e73d030683c21d2183d92025d11be9",
"assets/packages/country_currency_pickers/assets/mh.png": "575772c6fb22f9d6e470c627cacb737e",
"assets/packages/country_currency_pickers/assets/za.png": "6c93cf2398f55956549f241ef9f32e15",
"assets/packages/country_currency_pickers/assets/uy.png": "2579723aba2ee05a8d68c9084eaf5588",
"assets/packages/country_currency_pickers/assets/wf.png": "6214b3091dbe62c7a6c9991ee6466859",
"assets/packages/country_currency_pickers/assets/vu.png": "47ba92e2fe9961be0991dc76520dade9",
"assets/packages/country_currency_pickers/assets/tj.png": "a9e427318b756c0c03bec3f3ff976fa3",
"assets/packages/map_launcher/assets/icons/citymapper.svg": "58c49ff6df286e325c21a28ebf783ebe",
"assets/packages/map_launcher/assets/icons/tencent.svg": "4e1babec6bbab0159bdc204932193a89",
"assets/packages/map_launcher/assets/icons/yandexNavi.svg": "bad6bf6aebd1e0d711f3c7ed9497e9a3",
"assets/packages/map_launcher/assets/icons/yandexMaps.svg": "3dfd1d365352408e86c9c57fef238eed",
"assets/packages/map_launcher/assets/icons/doubleGis.svg": "ab8f52395c01fcd87ed3e2ed9660966e",
"assets/packages/map_launcher/assets/icons/here.svg": "aea2492cde15953de7bb2ab1487fd4c7",
"assets/packages/map_launcher/assets/icons/mapswithme.svg": "87df7956e58cae949e88a0c744ca49e8",
"assets/packages/map_launcher/assets/icons/osmandplus.svg": "31c36b1f20dc45a88c283e928583736f",
"assets/packages/map_launcher/assets/icons/google.svg": "cb318c1fc31719ceda4073d8ca38fc1e",
"assets/packages/map_launcher/assets/icons/googleGo.svg": "cb318c1fc31719ceda4073d8ca38fc1e",
"assets/packages/map_launcher/assets/icons/osmand.svg": "639b2304776a6794ec682a926dbcbc4c",
"assets/packages/map_launcher/assets/icons/baidu.svg": "22335d62432f9d5aac833bcccfa5cfe8",
"assets/packages/map_launcher/assets/icons/apple.svg": "6fe49a5ae50a4c603897f6f54dec16a8",
"assets/packages/map_launcher/assets/icons/waze.svg": "311a17de2a40c8fa1dd9022d4e12982c",
"assets/packages/map_launcher/assets/icons/amap.svg": "00409535b144c70322cd4600de82657c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en.json": "5bd908341879a431441c8208ae30e4fd",
"assets/packages/easy_localization/i18n/en-US.json": "5bd908341879a431441c8208ae30e4fd",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/userProfile.png": "d9f433b042eda9ab9f56fda249e11bec",
"assets/assets/images/Frame%25205.png": "53b26a0033ff392217de31dc0e3d72d6",
"assets/assets/images/pengkie_vendor_android_qr_code.jpg": "96e38aba56ec06f0b1408f30d596a111",
"assets/assets/images/PENGKIE.png": "519ded88e3676edc40dd95c0818c994c",
"assets/assets/images/pengkie_store_logo.png": "cc31600f6948fcd38ae2e2f02aa0c78e",
"assets/assets/images/pengkie_vendor_ios_qr_code.jpg": "b022b8f8cf03e6184ce52626708f4a04",
"assets/assets/images/pengkie_store_home_screen.png": "218558af98dfbafe17c675c3a491eaf9",
"assets/assets/images/individualItems.jpg": "13917bcb92e63659517ad42e60e80147",
"assets/assets/images/Pengkie_Vendor%2520Color.png": "ba4c7c8b2c7ae0b84236b5583d2aa4d7",
"assets/assets/images/icon_app_store.png": "31ab0275671c21dce720d3ada7ed0263",
"assets/assets/images/logo.png": "6dbabcd3c2579c31a4fadfe785fecbc3",
"assets/assets/images/icon_google_%2520play_store.png": "3dbfbce4fe80b6fc18d13d5d95795696",
"assets/assets/images/phone.png": "0b651764b6e387c161c4f526e58419ed",
"assets/assets/images/Pengkie-01.png": "d5f4701bfe631c25f6b8f7f35617dc1d",
"assets/assets/images/waiting.png": "1e2257e67a9ce0d764fefd5bf669755a",
"assets/assets/images/itemsPacking.png": "8176fbb1270262825bb0f71325c9ddb6",
"assets/assets/images/pengkie_vendor_logo.png": "53b26a0033ff392217de31dc0e3d72d6",
"assets/assets/images/pengkie_store_ios_qr_code.jpg": "a83540c46681ff265d3a00f63e8c4708",
"assets/assets/images/pengkie_store_play_store_qr_code.jpg": "ec75f2e78fe94e052d91eebeb8214fdf",
"assets/assets/images/box.png": "34a3bc5a6608483c12801c6d02c06caf",
"assets/assets/images/pengkie_apps.png": "89244fa6d9c276793a576528ec19bf58",
"assets/assets/icons/ConsumerGoodsIcon.ttf": "eef34e0fc130ae35fce955ff9c9179ca",
"assets/assets/fonts/Taviraj-Bold.ttf": "0cd2a003cd34889573483800c6818bea",
"assets/assets/fonts/Trirong-Regular.ttf": "6d786d5675d0dc70316fc50e342a938c",
"assets/assets/fonts/Taviraj-Light.ttf": "1021b3db70e9f5e10b263e680ad228df",
"assets/assets/translations/th-TH.json": "bc442e7266910edc51db41d7fc2b215b",
"assets/assets/translations/en-US.json": "551e0e8d7446f41424cb9b84c804d577"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

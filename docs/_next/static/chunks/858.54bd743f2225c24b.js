(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[858],{5665:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return I}});var a=n(4051),i=n.n(a),r=n(5893),s=n(7294),c=n(1664),d=n.n(c),o=n(9129),u=n.n(o),p={src:"/_next/static/media/logo.5bf80fab.png",height:246,width:394,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAp0lEQVR42mMAgXtTGTLvTWToeTSDYe6LXgYNBii4e3QRE5hxZ1nM1oebyh49WJ3y+er6utJz26eGH1tRrweWvLKhSezpjb1PX9w98v/t/cO/n55b8//V9R3/H59ffwcozchwcnVL/oXtU/6fXVn1/+qW9v/XNzX/v3tg+v87Rxf92TktK4jBhYFBpCNJy2Nhc4x/T567b3u+n9uKPIaOCdIMhgwMDFwAOu1P/OROdOgAAAAASUVORK5CYII="},f={src:"/_next/static/media/dcLogo.6ae42547.svg",height:50,width:50},l={src:"/_next/static/media/twLogo.052e20e8.svg",height:50,width:50},y={src:"/_next/static/media/osLogo.caf02dd4.svg",height:50,width:50},b={src:"/_next/static/media/add.9ae8667d.svg",height:19,width:19},m={src:"/_next/static/media/min.f3b0ce60.svg",height:6,width:12},x=n(5675),C=n.n(x),A=n(1744),D="0x1B75ad42D7C1E20F167716C65078102f4f92AE9b",F=n(7626),B=n(5286),E=n(7659),v=n(8206),T=n(6455),h=n.n(T),w=n(2162),g=n(4648);var _=function(e){var t;return e?(null===(t=e.error)||void 0===t?void 0:t.message)||e.message||e.message||"Something went wrong":""};function M(e,t,n,a,i,r,s){try{var c=e[r](s),d=c.value}catch(o){return void n(o)}c.done?t(d):Promise.resolve(d).then(a,i)}function S(e){return function(){var t=this,n=arguments;return new Promise((function(a,i){var r=e.apply(t,n);function s(e){M(r,a,i,s,c,"next",e)}function c(e){M(r,a,i,s,c,"throw",e)}s(void 0)}))}}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){j(e,t,n[t])}))}return e}var k=n(4767),O=n(4648),P=function(e){return new w.MerkleTree(e,g,{sortPairs:!0})}(k.whitelist.map((function(e){return O(e)}))),I=function(){var e=(0,B.mA)().address,t=(0,B.F6)({address:e}).data,n=(0,B.$4)({connector:new v.I}),a=n.data,c=n.connect,o=n.error,x=(0,B.qL)().disconnect,T=(0,s.useState)(null),w=T[0],M=T[1],j=(0,s.useState)(1),k=j[0],O=(j[1],(0,s.useState)("???")),I=O[0],R=O[1],L=(0,s.useState)(null),U=L[0],K=L[1],Q=(0,B.mx)().data,V=(0,B.g0)(),X=(V.chains,V.switchNetwork),J=null===a||void 0===a?void 0:a.chain.id,Y=E.c.mainnet.id,Z=(0,B.cq)({addressOrName:D,contractInterface:F,signerOrProvider:Q});(0,s.useEffect)((function(){S(i().mark((function t(){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e||!Q||J!=Y){t.next=5;break}return t.next=3,Z.totalSupply();case 3:n=t.sent,R(n.toString());case 5:case"end":return t.stop()}}),t)})))()}),[e,Q]),(0,s.useEffect)((function(){if(e){var t=e.slice(0,6)+"..."+e.slice(-4);M(t);"0x".concat(P.getRoot().toString("hex"));var n=function(e,t){return function(e,t){return e.getProof(t).map((function(e){return"0x".concat(e.data.toString("hex"))}))}(e,g(t))}(P,e);K(n)}}),[e]),(0,s.useEffect)((function(){J!=Y&&(null===X||void 0===X||X(Y))}),[a]);var G=(0,B.GG)({addressOrName:D,contractInterface:F,functionName:"preSaleMint",args:[U],overrides:{value:A.parseEther("0.38")}}),W=(G.data,G.isError,G.isLoading,G.writeAsync),z=function(){var e=S(i().mark((function e(){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(J!=Y){e.next=13;break}return e.prev=1,e.next=4,W();case 4:t=e.sent,n=(null===t||void 0===t?void 0:t.hash.slice(0,6))+"..."+(null===t||void 0===t?void 0:t.hash.slice(-4)),h().fire({icon:"success",title:"Success",html:"Send transaction successfully.<br/>"+'your tx: <a style="color: blue;" href="https://etherscan.io/tx/'.concat(t.hash,'">').concat(n,"</a> "),confirmButtonColor:"#FFF732",customClass:{confirmButton:"confirm-button-class"}}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0),h().fire({title:"Error",text:_(e.t0),icon:"error",confirmButtonColor:"#FFF732",customClass:{confirmButton:"confirm-button-class"}});case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();return(0,r.jsxs)("div",{className:u().section,children:[(0,r.jsxs)("div",{className:u().header,children:[(0,r.jsx)(C(),{className:u().logo,src:p,width:98.5,height:61.5,alt:""}),(0,r.jsxs)("div",{className:u().mediaBox,children:[(0,r.jsx)(d(),{href:"https://twitter.com/meloscout_nft",children:(0,r.jsx)("a",{target:"_blank",rel:"noreferrer",children:(0,r.jsx)(C(),{src:l,width:50,height:50,alt:""})})}),(0,r.jsx)(d(),{href:"https://discord.com/invite/dM4bdgkRAK",children:(0,r.jsx)("a",{target:"_blank",rel:"noreferrer",children:(0,r.jsx)(C(),{src:f,width:50,height:50,alt:""})})}),(0,r.jsx)(d(),{href:"https://opensea.io/collection/meloscoutnft",children:(0,r.jsx)("a",{children:(0,r.jsx)(C(),{src:y,width:50,height:50,alt:""})})})]})]}),e&&(0,r.jsx)("button",{className:u().profile,onClick:function(){return x()},children:null!==t&&void 0!==t?t:w}),(0,r.jsx)("div",{className:u().imgBox,children:(0,r.jsx)(C(),{src:p,width:394,height:246,alt:""})}),!e&&(0,r.jsx)("button",{className:u().btn,onClick:function(){return c()},children:"Connect"}),o&&(0,r.jsx)("div",N({},void h().fire({icon:"warning",title:"Need to install Metamask Wallet",confirmButtonColor:"#FFF732",customClass:{confirmButton:"confirm-button-class"}}))),e&&(0,r.jsxs)("div",{className:u().mintCard,children:[(0,r.jsxs)("div",{className:u().mintCounter,children:[(0,r.jsx)("button",{className:u().countBtn,children:(0,r.jsx)(C(),{src:m,width:15,height:10,alt:""})}),(0,r.jsx)("div",{className:u().countNum,children:k}),(0,r.jsx)("button",{className:u().countBtn,children:(0,r.jsx)(C(),{src:b,width:20,height:15,alt:""})})]}),(0,r.jsx)("button",{className:u().mintBtn,onClick:function(){return z()},children:"Mint"}),(0,r.jsxs)("div",{className:u().mintData,children:[I,"/888 minted ",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"Presale 0.38 ETH",(0,r.jsx)("br",{}),"Public sale 0.4 ETH"]})]})]})}},9129:function(e){e.exports={section:"frontCover_section__ICvJI",header:"frontCover_header__pj_OQ",mediaBox:"frontCover_mediaBox__yhWcF",imgBox:"frontCover_imgBox__7Zg1j",btn:"frontCover_btn__FdclC",profile:"frontCover_profile__JAKxY",mintCard:"frontCover_mintCard__fB0ES",mintCounter:"frontCover_mintCounter__nLm3z",countBtn:"frontCover_countBtn__kpVoO",countNum:"frontCover_countNum__AhMSM",mintBtn:"frontCover_mintBtn__LGnnP",mintData:"frontCover_mintData__bq6Zp",melo:"frontCover_melo__KbE2U"}},2361:function(){},4616:function(){},7626:function(e){"use strict";e.exports=JSON.parse('[{"inputs":[{"internalType":"string","name":"_newBaseURI","type":"string"},{"internalType":"uint256","name":"_preSaleStartTime","type":"uint256"},{"internalType":"uint256","name":"_preSaleEndTime","type":"uint256"},{"internalType":"uint256","name":"_publicSaleStartTime","type":"uint256"},{"internalType":"uint256","name":"_publicSaleEndTime","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"ApprovalCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"ApprovalQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"ApprovalToCurrentOwner","type":"error"},{"inputs":[],"name":"ApproveToCaller","type":"error"},{"inputs":[],"name":"BalanceQueryForZeroAddress","type":"error"},{"inputs":[],"name":"MintToZeroAddress","type":"error"},{"inputs":[],"name":"MintZeroQuantity","type":"error"},{"inputs":[],"name":"OwnerQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"TransferCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"TransferFromIncorrectOwner","type":"error"},{"inputs":[],"name":"TransferToNonERC721ReceiverImplementer","type":"error"},{"inputs":[],"name":"TransferToZeroAddress","type":"error"},{"inputs":[],"name":"URIQueryForNonexistentToken","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"MAX_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseTokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"devMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxPublicMintAmountPerTx","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"preSaleEndTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32[]","name":"_proof","type":"bytes32[]"}],"name":"preSaleMint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"preSalePrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"preSaleStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"publicMint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"publicSaleEndTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"publicSalePrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"publicSaleStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"root","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"safe","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"baseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"setMaxPublicMintAmountPerTx","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newStartTime","type":"uint256"},{"internalType":"uint256","name":"_newEndTime","type":"uint256"}],"name":"setPreSaleTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newPreSalePrice","type":"uint256"},{"internalType":"uint256","name":"_newPublicSalePrice","type":"uint256"}],"name":"setPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newStartTime","type":"uint256"},{"internalType":"uint256","name":"_newEndTime","type":"uint256"}],"name":"setPublicSaleTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_newRoot","type":"bytes32"}],"name":"setRoot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_newSafe","type":"address"}],"name":"setSafe","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawToSafe","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},4767:function(e){"use strict";e.exports=JSON.parse('{"whitelist":["0x7a855526F3CF3722BB2944037960d5Adc4f00BEE","0xA255DA8EAbb3D305B7921653622a03344093D76E","0xbFe4A8AC298AeB634534Fc708f30D3fCd4c4Cdf2","0x105e9cBD8bDd8449a9Bb0Dfc8dD0a360392DF300","0x299a94e8493E38c44f00b41E90ceF260e3898766","0x3B0667Ab576a6aceb3adD15C98DB84f51C20E370","0xC34e0727428303010eEf33dFE026E0d175F430a3","0xa41a41288d765D19b0062A357B70eAea83433E50","0x6f43Db39E06355EB652bEFfBA049005dedD813c6","0x69eC3fe4F88a20Ea4C29633546C282Dccd011518","0x0A296D643c22747e201E6f5219757bfd32E94908","0xDFBBeB71b94C005527eF8429cd34363459802E02","0x50C219DCe159FFA727b839842E012aBCD891C9af","0x9716d67C1F57E5e0183584467d15b9e7164e0fED","0x79398F6061e6BC98491049ABC137dc1146726Cb5","0xC40dd2e85459e841021DD84F550645901aA337F9","0x75C4f7D29675a8238Db9fec60dc89833c8bfC0BF","0x53823d225a538D595F45187D886247374106999a","0xfdA47d20e5DDA48088FA9b171066C052c758013e","0xa20CAEA6CE6f19d2585697B27bF657696D4f7352","0x46b97d1cDd9B67322b0eAE602653944a723c1f3d","0x4Ea636B489F51e2c332e2a6203Bf3FCc0954a5F4","0xa8CE3928e9A862275a532aee6FC4A3156BB539Fb","0xf5d8470911D3cB7427186E3c0CBEa6983dc92CDe","0xa28C464164720EC3d207a27E4A8C5736791cC9Ad","0x277682C31aD888cc20dAc1c592ccF3444a7F7799","0xa3bed74db36620c8f267e99cd0939252a0800532","0xBc93Deb7e9c1D5a26f1cc61E9260CCe6b5ddB21B","0x213443dE51cDF4017697F07bF9bb487523b6f745","0x83F8D743947101D39C0BF2E27553609BBD71Dc23","0xB2206f941A5206B55BFA33E665687523A8bcEd80","0x17f9F3c100CB353D8c1342a6a03944D0dccc5E12","0xf93bDD94A8a277d1ce9043A93b3CBBEb90337c64","0xaBFEe01C95030bd3746250C4AAaADF986C0E80E6","0xB27f4073dae35AdCeBA0ab46fFF2116a38787c0D","0x23c7D7C963DA620F032f530682c7dD7A9a5b49dD","0x5dD4C472134591905D18Ee643507d4FE9F40E815","0x50073d58bFb108c90286f9300A7Cd07227181EA7","0x1201D8Eb672C6e015F8742679aCda7Be6a8Faa95","0x4e4Db2944A3AfEce97C1717cD6f08cA897952A48","0x6f16aB9A418e48b863710aB379637256cA3Cb39F","0x928EE1c2144AE7d9D0ffE89373917AfF4B3a6900","0xF6CFEc194d7E8dccD91fADeA02667124507a7d5F","0x3D3F9Be37C5BeE70adC56f75FF187Fdab16E08b0","0xd90FE216865374a701bcDA37198232253d76CFe5","0xDE15C16182eEe9D8D8F22Ff3b9EC9D8Fa06B5f53","0xAD990b2D8f63Cef4De48D9B685c3A712b621BE3e","0x9A05c2fF8f832A1F22C86A2EBF5cc75ccFA83815","0xda213Bbd7B88EC6787885258A7e056A7c60b0e62","0x64110F5bd00561cC7D1Df17f8FAf7168A80985Ac","0x5a4921fBA301572E427491B4bEF745B3348f12bf","0x6711Ff0e0F5209930079B2C594724297d668F3a2","0xa12D957C3ED4a0276b9cdEd74225bcd64c41712D","0xAdda59FC3467223F5D6238ffB7f8014E177582e3","0x3c13D959dEB59223f3C9d41aA6aA64219dd1D69B","0x76c465aeB522D8A037B3A061054b293c9c330C51","0xD1682ff111529428B41E566363Cd96d3d7e38Ae2","0xb2DA177888eC07e607E17fbbb99B15Bf3ac52BBb","0xC9F34532feBfe48298DbDCF15d57647d3419a983","0x3A113683d181CEcCe0Fc05Fa2d249b64a722fD03","0x43feA8EFc2709E4EEFB82B57f74ED3c6195d3fFf","0xE8fA87DfBC1646D047f58E58Af9c625129559776","0x74D4a55Dd8587e217A56ed87F8DCF90F442D8d01","0x284615314643fb9c87E346Cd4c7a2F1cefF09818","0x279577091DA7cC719adeFDbb9db168EAFE527A8A","0x18370F606ea39CCFBBcEdeC134e38b0D00409d11","0x5Adfe4448407748Df0387FE6B52fbb8C5EE868ca","0xCd11Dc1815dD9E10e10ec51c4f43df7E356C8de4","0x4a213FD30228064029FA961DdBE70647D02803D6","0xCA7c738548fafC3a60344d828fE0Ea7439ffCf9B","0xA4eAd4Ccda6A99F0863c8938e9f3Cb117d545694","0x002fE26Afd37b8F243836726688B9DeBe504e618","0x26c646bCc830a0186958d82f268bBeb784ecF04c","0x9182007eA40e043f0104480E84386c99772682E9","0xfFd3a3676d2f9e6c893FF7438a78912a2b61390F","0x69e8e23Eb2e61BC8449e02Ced7075186DAFBcFc1","0xFAef22Aed83De0FCa649bdc2340190a923Aa4cD3","0x89b27d0025f66035595fDe61A58192Cf7b9df987","0xeC6a84969Ea0cA01874D091F4ECa7645D44b1249","0xd63B0D988A8028c18B0d86EA5d5587bEd27743E4","0xec0be19C5374776FDee2ECb039d99684Ac336ec4","0x0a8279c6ab0C897d368Ba8a8a32E3FE673dc5158","0xfd0d7EcD0DdB8e85Fc8CACd48fB0F029cC3C95dc","0x674ffe523F7E72cd4a6D8b0B1a63086Ac9C88DA4","0x18E42e5ad7ecC290A93018780A80d2FEff4944f5","0xBb07185c116E29bD65e5Bab70e67EC8Da91D7BbF","0xa48BA4C1aEbbb4427BdD032a506eF5D5446f61D2","0x396FE82a21E7400C4962aBf5647570D13370f04f","0xb655CC4572114987117E54f677E988373650D637","0xAd76080F5eb6C661e53D46aCf12e448c72f207A8","0xAf615b81293837751bf93BEDDCBD8FcEB8428f49","0x67DdeC34110e4C53B9Be0F00f7734B2226f7E04F","0xa6E0aE6618Aa38Fb007D3d6241017f3882bb7159","0x290e57eD8906d3D6069730bA5dE199C6348256e3","0xDF8D3A775a34188bB1bCb78b46B08eD650fCB663","0xd9e5C495EB09063f94BcFe8B513c3651D589EeF9","0x8d9e7cd6ce495885f15DfC1802b9feee5f2c7ce9","0xc9e4c5b2db7994a1828ccceec9cdf293dd614d2a","0xaE36266C41e8d6AA90861a4F5c5542eEe07a201a","0xb153EC74C39D3Eff052d1c228933cA85c61Bd913","0x296C15Abc074deB89c1d82f0E243290891D21773","0xf381D5b0A3c8632D8A2F97c46F06A25E88C2d8A6","0x6aB7B619E11dD533a2b01c51D5D6Db37829b2706","0x8891B0dda5C0BBB9b28EB2c6d02920834a9489ac","0xd962d1a56DDfF72F29A51AF9f64f0240E59b5FcF","0xD87704E10b7364a149d70c5f25A85391f230197B","0x9aD171Fd841d99847C4Cf6DcACC00Bd7aC6f64ae","0x3D450c51E1CDAA4dBbC7BD8D69Aac78D341aB013","0x8D934132F7275057845D0278bAA34E3eAb519867","0x9773929055E690CbEC8e7d36d838941D4ACb24e8","0x64A11e3FF7AAd0F1FDBF024ddC89668660F3b20c","0x81C58302Ef10f692B05197Cd4622d3037c345a03","0x7CD14bCf280749469CB759221834d744B583ED1A","0xFfC6B0c3b2840308282A93bf5Bb0B2C484FBc234","0xB4aB16e360979Ed0F63023383Ca2Fc8015912E4D","0x6a1b15B2ABc4aC74246F37D1aa673926fce411ED","0x3e197DF91F0BE9AfB107D658388287145716c0fD","0x41476e1377B291AE6c6A4edC450cB045a27aCEd5","0x998d63a0B4Aca680B4b00Ee51569D966c76072e3","0xFb5F34eDC556eAaf9A4B35e79074CBFd148aEe67","0x194e4ee1809697c58F002ac47fDD565F8942153e","0xbe05ce427733817393dB2ddD4dBb4348e41B1325","0x6556AC2df4555fA7Ff5315ca4205877F0eae9BB9","0xEFb68A32d713fBd14e6D19DA9F554B2fa0035e46","0x6d9500a2206c3c425b1cA8883ceFa3898323bd51","0x1B8a73DEf836C033D8223a8a385fcDbE8b72130B","0x1d8bb512f56451dDef820d6Fe0fAa0b1b655Af07","0xc45e9d4C43c622Bf215c9270172174FD63921aB7","0x87d63B96ca7695775fddE18ADE27480143F9dfA0","0xb49eade93F31Addeb45eE63Ce758635E3E2E17c2","0x194e4ee1809697c58F002ac47fDD565F8942153e","0xd2bf3A9E0611477758A79DaBCD7cb322bCf88c7B","0xBAf412BC8DbfaD59C9135fC332d6De6C1fBc4a34","0x8bA3765Af93538054e38998c93c30a94B9C7572F","0xF01Dc44cA43C2475448F735F94d4bc1Bd0827c54","0x3ba75C7cCfe8d3353DfcaE0e13271Ab0ac228dDD","0x10e030349db258f7322f286Cf859fF0c10c35617","0x73f5318483B289F08FD513C9a51687F480B84E30","0x4074508AA765eA2C6edE341CC0201c0D1a714414","0x33550bEB7beA594eB1F5dcf009C21db1d385c036","0xD30B1C0739E9bD745b64888387141D4cad9b0C84","0x0f012F8B4f0e2cD0a269Ea2F94AD3B35865921fC","0xd43832F7e403D4d31b405B7ADC6852BE0167082c","0x3F6792b9D43cC5143158c787B6384B2F94c31C3e"]}')}}]);
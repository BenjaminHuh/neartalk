(this["webpackJsonpnear-open-web-frontend"]=this["webpackJsonpnear-open-web-frontend"]||[]).push([[0],{114:function(e,t){},116:function(e,t){},137:function(e,t){},143:function(e,t){},160:function(e,t){},168:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),s=n(2),i=n(0),o=n.n(i),c=n(83),l=n.n(c),u=n(11),p=n(12),h=n(19),d=n(18),f=n(20),m=n(89),g=n(28),y=n(42),b=n(24),v=n(84),w=n.n(v),k=(n(99),n(5)),x=n(40),E=n(41),I=n(32),O=n.n(I),j=n(85),N=n.n(j),S=function(e){function t(e){var n;Object(u.a)(this,t);var r=["displayName","profileUrl","bio"];return(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).state=r.reduce((function(e,t){return e[t]="",e.chainValues[t]=null,e}),{keys:r,chainValues:{},initialized:!1}),n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"init",value:function(){var e=Object(s.a)(a.a.mark((function e(){var t,n,r=this;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("init profile"),this.setState({initialized:!0}),e.next=4,Promise.all(this.state.keys.map((function(e){return r.props.app.get(e)})));case 4:t=e.sent,console.log(t),n=this.state.keys.reduce((function(e,n,r){return e[n]=t[r]||"",e}),{}),this.setState(Object.assign({chainValues:n},n));case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(e){this.props.app&&!this.state.initialized&&this.init()}},{key:"handleChange",value:function(e,t){console.log(t.length),this.setState(Object(E.a)({},e,t))}},{key:"save",value:function(){var e=Object(s.a)(a.a.mark((function e(){var t,n=this;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Saving"),t=Object.assign({},this.state.chainValues),this.state.keys.forEach((function(e){n.state.chainValues[e]!==n.state[e]&&(t[e]=n.state[e],n.props.app.set(e,n.state[e]).then((function(){console.log("Updated key `"+e+"` to value `"+n.state[e]+"`")})))})),this.setState({chainValues:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"onFilesChange",value:function(){var e=Object(s.a)(a.a.mark((function e(t){var n,r,s=this;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=new Image,(r=new FileReader).readAsDataURL(t[0]),n.onload=function(){var e=document.createElement("canvas"),t=n.naturalWidth/n.naturalHeight,r=Math.round(96*Math.max(1,t)),a=Math.round(96*Math.max(1,1/t));e.width=96,e.height=96;var i=e.getContext("2d");i.imageSmoothingQuality="high",i.fillStyle="#fff",i.fillRect(0,0,96,96),i.drawImage(n,(96-r)/2,(96-a)/2,r,a);var o=[e.toDataURL("image/jpeg",.92),e.toDataURL("image/webp",.92),e.toDataURL("image/png")];o.sort((function(e,t){return e.length-t.length})),s.handleChange("profileUrl",o[0])},r.onload=function(e){n.src=e.target.result};case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"onFilesError",value:function(){var e=Object(s.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t,n);case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("img",{className:"profile-image",src:this.state.profileUrl||O.a}),o.a.createElement("span",{className:"letter-expanded-profile"},o.a.createElement("span",{className:"letter-profile-name"},this.state.displayName),this.props.app&&o.a.createElement("span",{className:"letter-account-id"},"(@"+this.props.app.accountId+")"))),o.a.createElement("hr",null),o.a.createElement("div",null,o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"displayName"},"Display Name"),o.a.createElement("input",{placeholder:"The REAL Satoshi",id:"displayName",className:"form-control",disabled:!this.props.app,value:this.state.displayName,onChange:function(t){return e.handleChange("displayName",t.target.value)}})),o.a.createElement("label",{htmlFor:"profileUrl"},"Profile URL"),o.a.createElement("div",{className:"input-group"},o.a.createElement("input",{placeholder:"https://metanear.com"+O.a,id:"profileUrl",className:"form-control",disabled:!this.props.app,value:this.state.profileUrl,onChange:function(t){return e.handleChange("profileUrl",t.target.value)}}),o.a.createElement("div",{className:"input-group-append"},o.a.createElement(N.a,{type:"button",className:"btn btn-outline-primary",onChange:function(t){return e.onFilesChange(t)},onError:function(t,n){return e.onFilesError(t,n)},multiple:!1,accepts:["image/*"],minFileSize:1,clickable:!0},"Click to upload"))),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"bio"},"Bio"),o.a.createElement("textarea",{placeholder:"I'm working on Bitcoin, so bankers can go home.",id:"bio",className:"form-control",disabled:!this.props.app,value:this.state.bio,onChange:function(t){return e.handleChange("bio",t.target.value)}})),o.a.createElement("div",{className:"form-group"},o.a.createElement("button",{onClick:function(){return e.save()}},"Save changes"))))}}]),t}(o.a.Component),_=n(86),C=n.n(_),L=n(87),K=n.n(L),A=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={initialized:!1,receiverId:"",subject:"",content:"",sending:!1,profileFetchTimeoutId:null,profileFetchIndex:0,numLetters:0,unread:0,expandedId:-1,theirPublicKey64:null,inbox:[]},n.textarea=o.a.createRef(),n.profileCache={},n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"modifyLetter",value:function(e,t){if(void 0===t){if(!e)return;t=e.messageId}var n=this.state.inbox.filter((function(e){return e.messageId!=t}));e&&n.push(e),n.sort((function(e,t){return t.time-e.time}));var r=n.reduce((function(e,t){return e+(t.read?0:1)}),0);this.setState({inbox:n,unread:r}),this.props.onNewMail(r)}},{key:"migrateFrom",value:function(){var e=Object(s.a)(a.a.mark((function e(t){var n,r,s,i,o=this;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t){e.next=11;break}return console.log("Migrating from version #0"),e.next=4,this.props.app.get("numLetters");case 4:for(n=e.sent,r=[this.props.app.set("numLetters",n,{encrypted:!0})],s=function(e){r.push(o.props.app.get("letter_"+e).then((function(t){return t?o.props.app.set("letter_"+e,t,{encrypted:!0}).then((function(){console.log("Migrated letter #"+e)})):Promise.resolve()})).catch((function(t){return console.log("Can't migrate letter #",e,t)})))},i=0;i<n;++i)s(i);return e.next=10,Promise.all(r);case 10:t++;case 11:if(1!==t){e.next=16;break}return console.log("Migrating from version #1"),e.next=15,this.props.app.storeEncryptionPublicKey();case 15:t++;case 16:return e.next=18,this.props.app.set("version",t,{encrypted:!0});case 18:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"init",value:function(){var e=Object(s.a)(a.a.mark((function e(){var t,n,r,s=this;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("init"),this.setState({initialized:!0}),e.next=4,this.props.app.get("version",{encrypted:!0});case 4:if(e.t0=e.sent,e.t0){e.next=7;break}e.t0=0;case 7:if(!((t=e.t0)<2)){e.next=11;break}return e.next=11,this.migrateFrom(t);case 11:return e.next=13,this.props.app.get("numLetters",{encrypted:!0});case 13:if(e.t1=e.sent,e.t1){e.next=16;break}e.t1=0;case 16:for(n=e.t1,this.setState({numLetters:n}),r=Math.max(0,n-10);r<n;++r)this.props.app.get("letter_"+r,{encrypted:!0}).then((function(e){return s.modifyLetter(e)}));this.fetchMessages();case 20:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(e){this.props.app&&!this.state.initialized&&this.init()}},{key:"fetchProfile",value:function(){var e=Object(s.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t in this.profileCache)){e.next=4;break}return e.abrupt("return",this.profileCache[t]);case 4:return console.log("Fetching profile for "+t),e.prev=5,e.next=8,Promise.all([this.props.app.getFrom(t,"displayName",{appId:"profile"}),this.props.app.getFrom(t,"profileUrl",{appId:"profile"}),this.props.app.getFrom(t,x.b)]);case 8:n=e.sent,this.profileCache[t]={displayName:n[0]||"",profileUrl:n[1],theirPublicKey64:n[2]},e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),this.profileCache[t]=!1;case 15:return e.abrupt("return",this.profileCache[t]);case 16:case"end":return e.stop()}}),e,this,[[5,12]])})));return function(t){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e,t){var n=this,r=Object(E.a)({},e,t);if("receiverId"===e){t=t.toLowerCase().replace(/[^a-z0-9\-\_\.]/,""),r[e]=t;var a=this.state.profileFetchIndex+1;r.profileFetchIndex=a,r.profile=null,t?(r.profileLoading=!0,this.fetchProfile(t).then((function(e){n.state.profileFetchIndex===a&&n.setState({profileLoading:!1,profile:e})}))):r.profileLoading=!1}this.setState(r)}},{key:"fetchMessages",value:function(){var e=Object(s.a)(a.a.mark((function e(){var t,n,r,s,i,o,c,l=this;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.props.app){e.next=2;break}return e.abrupt("return");case 2:return this.fetchTimeoutId&&(clearTimeout(this.fetchTimeoutId),this.fetchTimeoutId=null),console.log("Fetching messages"),e.next=6,this.props.app.pullMessage();case 6:if(t=e.sent){e.next=10;break}return this.fetchTimeoutId=setTimeout((function(){l.fetchMessages()}),6e4),e.abrupt("return");case 10:if(e.prev=10,console.log(t),n=JSON.parse(t.message),r="encrypted"===n.type,s=n.fromAppId||this.props.app.appId,!r){e.next=20;break}return e.next=18,this.props.app.decryptMessage(n.content,{accountId:t.sender,appId:n.fromAppId});case 18:i=e.sent,n=JSON.parse(i);case 20:"mail"===n.type?(o={messageId:this.state.numLetters,isEncrypted:r,fromAppId:s,sender:t.sender,subject:n.subject,content:n.content,time:Math.trunc(t.time/1e6)},c=this.state.numLetters+1,this.setState({numLetters:c}),this.props.app.set("letter_"+o.messageId,o,{encrypted:!0}).then((function(){console.log("Saved the letter: ",o)})),this.props.app.set("numLetters",c,{encrypted:!0}).then((function(){console.log("Saved the new number of letters: ",c)})),this.modifyLetter(o)):console.warn("Unknown message",t),e.next=26;break;case 23:e.prev=23,e.t0=e.catch(10),console.error(e.t0);case 26:return e.prev=26,this.fetchMessages(),e.finish(26);case 29:case"end":return e.stop()}}),e,this,[[10,23,26,29]])})));return function(){return e.apply(this,arguments)}}()},{key:"sendMail",value:function(){var e=Object(s.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.profile){e.next=2;break}return e.abrupt("return");case 2:if(console.log("Sending mail"),this.setState({sending:!0}),e.prev=4,t=JSON.stringify({type:"mail",subject:this.state.subject,content:this.state.content}),!this.state.profile.theirPublicKey64){e.next=11;break}return e.next=9,this.props.app.encryptMessage(t,{theirPublicKey64:this.state.profile.theirPublicKey64});case 9:n=e.sent,t=JSON.stringify({type:"encrypted",fromAppId:this.props.app.appId,content:n});case 11:return e.next=13,this.props.app.sendMessage(this.state.receiverId,t);case 13:this.setState({subject:"",content:""}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(4),console.log("Failed to send the message",e.t0);case 19:return e.prev=19,this.setState({sending:!1}),this.fetchMessages(),e.finish(19);case 23:case 24:case"end":return e.stop()}}),e,this,[[4,16,19,23]])})));return function(){return e.apply(this,arguments)}}()},{key:"receiverClass",value:function(){return!this.state.receiverId||this.state.profileLoading?"form-control":this.state.profile?"form-control is-valid":"form-control is-invalid"}},{key:"replyTo",value:function(e,t){var n=this;this.handleChange("receiverId",e.sender),this.setState({subject:(e.subject.startsWith("Re: ")?"":"Re: ")+e.subject,content:["","",["On",new Date(e.time).toLocaleDateString(),t,"@"+e.sender,"wrote:"].join(" ")].concat(Object(y.a)(e.content.split(/\r?\n/).map((function(e){return"| "+e})))).join("\n")},(function(){n.textarea.current.focus(),n.textarea.current.setSelectionRange(0,0),n.textarea.current.scrollLeft=0,n.textarea.current.scrollTop=0}))}},{key:"selectLetter",value:function(e){this.setState({expandedId:this.state.expandedId===e.messageId?-1:e.messageId}),e.read||((e=JSON.parse(JSON.stringify(e))).read=!0,this.props.app.set("letter_"+e.messageId,e,{encrypted:!0}).then((function(){console.log("Saved the letter: ",e)})),this.modifyLetter(e))}},{key:"deleteLetter",value:function(e){this.props.app.remove("letter_"+e.messageId).then((function(){console.log("Deleted the letter: ",e)})),this.modifyLetter(null,e.messageId)}},{key:"render",value:function(){var e=this,t=this.state.profile&&this.state.profile.theirPublicKey64,n=this.state.profile&&o.a.createElement("img",{className:"encryption-icon",src:t?C.a:K.a,title:t?"Encryption is ON":"Not secure! Encryption is OFF"}),r=this.state.profileLoading?o.a.createElement("div",{className:"col"},o.a.createElement("div",{className:"spinner-grow",role:"status"},o.a.createElement("span",{className:"sr-only"},"Loading..."))):this.state.profile?o.a.createElement("div",{className:"col"},o.a.createElement("img",{className:"profile-image",src:this.state.profile.profileUrl||O.a}),o.a.createElement("span",{className:"profile-name"},this.state.profile.displayName)):null,a=this.state.inbox.map((function(t,n){return o.a.createElement(P,{key:t.messageId,fetchProfile:function(t){return e.fetchProfile(t)},letter:t,expanded:t.messageId==e.state.expandedId,deleteLetter:function(t){return e.deleteLetter(t)},replyTo:function(t,n){return e.replyTo(t,n)},selectLetter:function(t){return e.selectLetter(t)}})}));return o.a.createElement("div",null,"Inbox ",o.a.createElement("button",{className:"btn btn-sm",onClick:function(){return e.fetchMessages()}},"\ud83d\udd04"),o.a.createElement("div",null,a),o.a.createElement("h3",null,"Send"),o.a.createElement("div",{className:"form-row"},o.a.createElement("div",{className:"col"},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{className:"sr-only",htmlFor:"toAccountId"},"To Account ID"),o.a.createElement("div",{className:"input-group"},o.a.createElement("div",{className:"input-group-prepend"},o.a.createElement("div",{className:"input-group-text"},"@")),o.a.createElement("input",{type:"text",className:this.receiverClass(),id:"toAccountId",placeholder:"To Account ID",value:this.state.receiverId,disabled:!this.props.app,onChange:function(t){return e.handleChange("receiverId",t.target.value)}})))),r),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{className:"sr-only",htmlFor:"subject"},"Subject"),o.a.createElement("input",{type:"text",className:"form-control",id:"subject",placeholder:"Subject",disabled:!this.props.app,value:this.state.subject,onChange:function(t){return e.handleChange("subject",t.target.value)}})),o.a.createElement("div",{className:"form-group"},o.a.createElement("textarea",{ref:this.textarea,id:"content",className:"form-control",rows:"7",disabled:!this.props.app,value:this.state.content,onChange:function(t){return e.handleChange("content",t.target.value)}})),o.a.createElement("div",{className:"form-group"},o.a.createElement("button",{className:"form-control form-control-lg btn "+(this.state.profile&&!t?"btn-danger":"btn-primary"),disabled:!this.state.profile||this.state.sending,onClick:function(){return e.sendMail()}},"Send ",n)))}}]),t}(o.a.Component),P=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={profile:{profileUrl:null,displayName:"@"+e.letter.sender}},n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.fetchProfile(this.props.letter.sender).then((function(t){e.setState({profile:t})}))}},{key:"onClick",value:function(){this.props.selectLetter(this.props.letter)}},{key:"render",value:function(){var e,t=this,n=o.a.createElement("span",{className:"letter-expanded-profile"},o.a.createElement("span",{className:"letter-profile-name"},this.state.profile.displayName),o.a.createElement("span",{className:"letter-account-id"},"(@"+this.props.letter.sender+")")),r=o.a.createElement("div",{className:"col-sm-6 col-md-4 col-lg-4 letter-profile"},o.a.createElement("img",{className:"letter-profile-image",src:this.state.profile.profileUrl||O.a}),n),a=o.a.createElement("div",{className:"col-sm-4 col-md"},o.a.createElement("div",{className:"letter-subject"},this.props.letter.subject)),s=this.props.expanded?o.a.createElement("div",{className:"col-sm-2 col-lg-2"},o.a.createElement("div",{className:"letter-time"},(e=this.props.letter.time,new Date(e).toLocaleString()))):o.a.createElement("div",{className:"col-sm-2 col-lg-1 d-none d-md-block"},o.a.createElement("div",{className:"letter-time"},function(e){var t=new Date(e);if((new Date).getDate()===t.getDate()){var n=t.getHours()%12,r=t.getMinutes().toString().padStart(2,"0"),a=t.getHours()>=12?"PM":"AM";return"".concat(n,":").concat(r," ").concat(a)}return t.toLocaleDateString()}(this.props.letter.time)));return this.props.expanded?o.a.createElement("div",{className:"letter letter-expanded"},o.a.createElement("div",{className:"row letter-expanded-header",onClick:function(){return t.onClick()}},r,a,s),o.a.createElement("div",{className:"letter-content-expanded"},o.a.createElement("pre",null,this.props.letter.content),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm"},o.a.createElement("button",{className:"btn btn-primary",onClick:function(){return t.props.replyTo(t.props.letter,t.state.profile.displayName)}},"Reply")),o.a.createElement("div",{className:"col-sm"},o.a.createElement("button",{className:"btn btn-danger float-right",onClick:function(){return t.props.deleteLetter(t.props.letter)}},"DELETE THIS!"))))):o.a.createElement("div",{className:"row letter letter-small"+(this.props.letter.read?" letter-read":" letter-unread"),onClick:function(){return t.onClick()}},r,a,o.a.createElement("div",{className:"col-sm d-none d-lg-block"},o.a.createElement("div",{className:"letter-content"},this.props.letter.content)),s)}}]),t}(o.a.Component);var M=n(30),U=(n(163),function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).requestSignOut=function(){n.props.wallet.signOut(),setTimeout(n.signedOutFlow,500),console.log("after sign out",n.props.wallet.isSignedIn())},n.signedOutFlow=function(){window.location.search.includes("account_id")&&window.location.replace(window.location.origin+window.location.pathname),n.setState({login:!1})},n.state={login:!1,apps:{},logs:[],unread:0,loading:!1},n.signedInFlow=n.signedInFlow.bind(Object(b.a)(n)),n.requestSignIn=n.requestSignIn.bind(Object(b.a)(n)),n.requestSignOut=n.requestSignOut.bind(Object(b.a)(n)),n.signedOutFlow=n.signedOutFlow.bind(Object(b.a)(n)),n.checkSignIn=n.checkSignIn.bind(Object(b.a)(n)),n.initOpenWebApp=n.initOpenWebApp.bind(Object(b.a)(n)),window.nearlib=k,n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.checkSignIn()}},{key:"checkSignIn",value:function(){var e=Object(s.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.walletAccount.isSignedIn()){e.next=6;break}return e.next=4,this.signedInFlow();case 4:e.next=7;break;case 6:this.signedOutFlow();case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"log",value:function(e){console.log(e),this.setState({logs:this.state.logs.concat([e])})}},{key:"signedInFlow",value:function(){var e=Object(s.a)(a.a.mark((function e(){var t,n,r,s,i,o,c,l;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("come in sign in flow"),e.next=3,this.props.wallet.getAccountId();case 3:return t=e.sent,this.setState({login:!0,loading:!0,accountId:t}),window.location.search.includes("account_id")&&window.location.replace(window.location.origin+window.location.pathname),window.location.search.includes("all_keys")&&window.location.replace(window.location.origin+window.location.pathname),this.log("Connecting to account..."),e.next=10,new k.Account(window.near.connection,t);case 10:return n=e.sent,this.log("Querying state..."),e.next=14,n.state();case 14:if(r=e.sent,console.log(r),"C8UmYSqATkuyhheJ7i7ryxPjfZL4nV8PfkovdMKitsmJ"===r.code_hash){e.next=39;break}return this.log("Going to deploy the code"),this.log("Downloading started..."),e.next=21,fetch("/open_web.wasm");case 21:return s=e.sent,e.next=24,s.arrayBuffer();case 24:return i=e.sent,this.log("Downloading done. Deploying contract..."),e.next=28,n.deployContract(new Uint8Array(i));case 28:if("11111111111111111111111111111111"!==r.code_hash){e.next=38;break}return this.log("Deploying done. Initializing contract..."),e.next=32,new k.Contract(n,t,{viewMethods:[],changeMethods:["new"],sender:t});case 32:return o=e.sent,e.t0=console,e.next=36,o.new();case 36:e.t1=e.sent,e.t0.log.call(e.t0,e.t1);case 38:this.log("The contract is deployed");case 39:return e.next=41,new k.Contract(n,t,{viewMethods:["apps"],changeMethods:["add_app_key","remove_app_key"],sender:t});case 41:return c=e.sent,this.masterContract=c,window.masterContract=c,this.log("Fetching authorized apps..."),e.t2=console,e.next=48,c.apps();case 48:return e.t3=e.sent,e.t2.log.call(e.t2,"Apps:",e.t3),this.log("Initializing local apps..."),e.next=53,this.initOpenWebApp("profile",t);case 53:return e.t4=e.sent,e.next=56,this.initOpenWebApp("graph",t);case 56:return e.t5=e.sent,e.next=59,this.initOpenWebApp("mail",t);case 59:e.t6=e.sent,l={profile:e.t4,graph:e.t5,mail:e.t6},window.apps=l,this.apps=l,this.setState({apps:l,loading:!1}),console.log(l);case 65:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"initOpenWebApp",value:function(){var e=Object(s.a)(a.a.mark((function e(t,n){var r,s,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.log("Initializing app: "+t+" ..."),e.next=3,new x.a(t,n,window.nearConfig);case 3:return r=e.sent,e.next=6,r.init();case 6:return e.next=8,r.ready();case 8:if(e.sent){e.next=18;break}return e.next=11,r.getAccessPublicKey();case 11:return s=e.sent,this.log("Authorizing app for key "+s.toString()+" ..."),i={public_key:Object(y.a)(k.utils.serialize.serialize(k.transactions.SCHEMA,s)),app_id:t},e.next=16,this.masterContract.add_app_key(i,2e15);case 16:return e.next=18,r.onKeyAdded();case 18:return this.log("Done"),e.abrupt("return",r);case 20:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"requestSignIn",value:function(){var e=Object(s.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"Open Web Home",e.next=3,this.props.wallet.requestSignIn("","Open Web Home");case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return document.title=(this.state.unread?"(".concat(this.state.unread,") "):"")+"Open Web Home - NEAR",o.a.createElement("div",{className:"App-header"},o.a.createElement("div",{className:"image-wrapper"},o.a.createElement("img",{className:"logo",src:w.a,alt:"NEAR logo"})),o.a.createElement("h1",null,"Hello",this.state.login?", "+this.state.accountId:"?"),o.a.createElement("div",null,this.state.login?o.a.createElement("button",{onClick:this.requestSignOut},"Log out"):o.a.createElement("button",{onClick:this.requestSignIn},"Log in with NEAR")),o.a.createElement("br",null),this.state.loading&&o.a.createElement("div",{className:"loading-div"},o.a.createElement("div",{className:"spinner-grow loading-spinner",role:"status"},o.a.createElement("span",{className:"sr-only"},"Loading...")),o.a.createElement("pre",{className:"text-left"},this.state.logs.join("\n"))),this.state.login&&o.a.createElement("div",{className:"apps"+(this.state.loading?" d-none":"")},o.a.createElement(M.d,{forceRenderTabPanel:!0},o.a.createElement(M.b,null,o.a.createElement(M.a,null,"Profile"),o.a.createElement(M.a,null,"Mail ",this.state.unread?"(".concat(this.state.unread,")"):"")),o.a.createElement(M.c,null,o.a.createElement(S,{app:this.state.apps.profile})),o.a.createElement(M.c,null,o.a.createElement(A,{app:this.state.apps.mail,onNewMail:function(t){return e.setState({unread:t})}})))))}}]),t}(i.Component)),F=n(88),D=n.n(F),T=function(e){function t(e){var n;Object(u.a)(this,t),n=Object(h.a)(this,Object(d.a)(t).call(this,e));var r=D.a.parse(n.props.location.search),a=r.app_id,s=r.pub_key;return n.state=a&&s?{authorized:!1,new_app_id:a,new_pub_key:s}:{authorized:!1,new_app_id:"",new_pub_key:""},n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;!this.props.loading&&this.state.new_app_id&&this.state.new_pub_key&&this.props.initOpenWebApp(this.state.new_app_id,this.state.new_pub_key).then((function(t){e.setState({authorized:!0})}))}},{key:"componentDidUpdate",value:function(e){this.props.app&&this.state.initialized}},{key:"render",value:function(){return o.a.createElement("div",null,this.state.authorized?o.a.createElement("div",null,o.a.createElement("p",null,"App ",o.a.createElement("strong",null,this.state.new_app_id)," was added"),o.a.createElement("p",null," Using the public key: ",this.state.new_pub_key," ")):"You need pass a key in order to add an app")}}]),t}(o.a.Component),R=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(m.a,{basename:"",hashType:"noslash"},o.a.createElement(g.c,null,o.a.createElement(g.a,{exact:!0,path:"/",component:function(){return o.a.createElement(U,e.props)}}),o.a.createElement(g.a,{path:"/auth",component:function(){return o.a.createElement(T,e.props)}})))}}]),t}(i.Component),z=n(92),B=n.n(z);function J(){return(J=Object(s.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return window.nearConfig=B()("development"),console.log("nearConfig",window.nearConfig),e.next=4,k.connect(Object.assign({deps:{keyStore:new k.keyStores.BrowserLocalStorageKeyStore}},window.nearConfig));case 4:window.near=e.sent,window.walletAccount=new k.WalletAccount(window.near),window.accountId=window.walletAccount.getAccountId();case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}window.nearInitPromise=function(){return J.apply(this,arguments)}().then((function(){l.a.render(o.a.createElement(R,{contract:window.contract,wallet:window.walletAccount}),document.getElementById("root"))})).catch(console.error)},32:function(e,t,n){e.exports=n.p+"static/media/anon.5cbbd243.png"},40:function(e,t,n){"use strict";(function(e){n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return p}));var r=n(1),a=n.n(r),s=n(2),i=n(11),o=n(12),c=n(5),l=n(3),u="encryptionKey",p=function(){function t(n,r,a){Object(i.a)(this,t),this.appId=n,this.accountId=r,this._config=a,this.blocking=Promise.resolve(),this.parseEncryptionKey(),window.nacl=l,window.Buffer=e}return Object(o.a)(t,[{key:"parseEncryptionKey",value:function(){var t="enc_key:"+this.accountId+":"+this.appId+":",n=localStorage.getItem(t);n?n=l.box.keyPair.fromSecretKey(e.from(n,"base64")):(n=new l.box.keyPair,localStorage.setItem(t,e.from(n.secretKey).toString("base64"))),this._key=n}},{key:"init",value:function(){var e=Object(s.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._keyStore=new c.keyStores.BrowserLocalStorageKeyStore(localStorage,"app:"+this.appId),e.next=3,c.connect(Object.assign({deps:{keyStore:this._keyStore}},this._config));case 3:this._near=e.sent,this._account=new c.Account(this._near.connection,this.accountId),this._contract=new c.Contract(this._account,this.accountId,{viewMethods:["get","apps","num_messages"],changeMethods:["set","remove","pull_message","send_message"],sender:this.accountId}),this._networkId=this._config.networkId;case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"ready",value:function(){var e=Object(s.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._keyStore.getKey(this._networkId,this.accountId);case 2:return t=e.sent,e.abrupt("return",!!t);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getAccessPublicKey",value:function(){var e=Object(s.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._keyStore.getKey(this._networkId,this.accountId);case 2:if(!(t=e.sent)){e.next=5;break}return e.abrupt("return",t.getPublicKey());case 5:if(!this._tmpKey){e.next=7;break}return e.abrupt("return",this._tmpKey.getPublicKey());case 7:return n=c.KeyPair.fromRandom("ed25519"),this._tmpKey=n,e.abrupt("return",n.getPublicKey());case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getEncryptionPublicKey",value:function(){return e.from(this._key.publicKey).toString("base64")}},{key:"storeEncryptionPublicKey",value:function(){var e=Object(s.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.set(u,this.getEncryptionPublicKey()));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"onKeyAdded",value:function(){var e=Object(s.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._tmpKey){e.next=2;break}throw new Error("The key is not initialized yet");case 2:return e.next=4,this._keyStore.setKey(this._networkId,this.accountId,this._tmpKey);case 4:this._tmpKey=null;case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"forceReady",value:function(){var e=Object(s.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.ready();case 2:if(e.sent){e.next=4;break}throw new Error("Not ready yet");case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"wrappedCall",value:function(e){return this.blocking=this.blocking.then((function(){return e()})).catch((function(){return e()})),this.blocking}},{key:"decryptSecretBox",value:function(t){var n=e.from(t,"base64"),r=new Uint8Array(l.secretbox.nonceLength);n.copy(r,0,0,r.length);var a=new Uint8Array(n.length-l.secretbox.nonceLength);n.copy(a,0,r.length);var s=l.secretbox.open(a,r,this._key.secretKey);return e.from(s).toString()}},{key:"encryptSecretBox",value:function(t){var n=e.from(t),r=l.randomBytes(l.secretbox.nonceLength),a=l.secretbox(n,r,this._key.secretKey),s=new Uint8Array(a.length+l.secretbox.nonceLength);return s.set(r),s.set(a,l.secretbox.nonceLength),e.from(s).toString("base64")}},{key:"decryptBox",value:function(t,n){if(n.length!=l.box.publicKeyLength)throw new Error("Given encryption public key is invalid.");var r=e.from(t,"base64"),a=new Uint8Array(l.box.nonceLength);r.copy(a,0,0,a.length);var s=new Uint8Array(r.length-l.box.nonceLength);r.copy(s,0,a.length);var i=l.box.open(s,a,n,this._key.secretKey);return e.from(i).toString()}},{key:"encryptBox",value:function(t,n){if(n.length!=l.box.publicKeyLength)throw new Error("Given encryption public key is invalid.");var r=e.from(t),a=l.randomBytes(l.box.nonceLength),s=l.box(r,a,n,this._key.secretKey),i=new Uint8Array(s.length+l.box.nonceLength);return i.set(a),i.set(s,l.box.nonceLength),e.from(i).toString("base64")}},{key:"get",value:function(){var e=Object(s.a)(a.a.mark((function e(t,n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object.assign({encrypted:!1,appId:this.appId},n),e.next=3,this._contract.get({app_id:n.appId,key:t});case 3:return(r=e.sent)&&(r=JSON.parse(n.encrypted?this.decryptSecretBox(r):r)),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"getFrom",value:function(){var e=Object(s.a)(a.a.mark((function e(t,n,r){var s,i,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Object.assign({encrypted:!1,appId:this.appId},r),s=new c.Account(this._near.connection,t),i=new c.Contract(s,t,{viewMethods:["get"],changeMethods:[],sender:this.accountId}),e.next=5,i.get({app_id:r.appId,key:n});case 5:return(o=e.sent)&&(o=JSON.parse(r.encrypted?this.decryptSecretBox(o):o)),e.abrupt("return",o);case 8:case"end":return e.stop()}}),e,this)})));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"apps",value:function(){var e=Object(s.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._contract.apps();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"set",value:function(){var e=Object(s.a)(a.a.mark((function e(t,n,r){var s=this;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.forceReady();case 2:return r=Object.assign({encrypted:!1},r),e.next=5,this.wrappedCall((function(){return s._contract.set({key:t,value:r.encrypted?s.encryptSecretBox(JSON.stringify(n)):JSON.stringify(n)},2e15)}));case 5:case"end":return e.stop()}}),e,this)})));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"remove",value:function(){var e=Object(s.a)(a.a.mark((function e(t){var n=this;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.forceReady();case 2:return e.next=4,this.wrappedCall((function(){return n._contract.remove({key:t},2e15)}));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"pullMessage",value:function(){var e=Object(s.a)(a.a.mark((function e(t){var n=this;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.forceReady();case 2:return e.next=4,this._contract.num_messages({app_id:this.appId});case 4:if(e.t0=e.sent,!(e.t0>0)){e.next=11;break}return e.next=8,this.wrappedCall((function(){return n._contract.pull_message({},2e15)}));case 8:return e.abrupt("return",e.sent);case 11:return e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getTheirPublicKey",value:function(){var t=Object(s.a)(a.a.mark((function t(n){var r,s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.forceReady();case 2:if(!(n=Object.assign({accountId:null,theirPublicKey:null,theirPublicKey64:null,encryptionKey:u,appId:this.appId},n)).theirPublicKey){t.next=5;break}return t.abrupt("return",n.theirPublicKey);case 5:if(n.theirPublicKey64){t.next=11;break}if(n.accountId){t.next=8;break}throw new Error("Either accountId or theirPublicKey64 has to be provided");case 8:return t.next=10,this.getFrom(n.accountId,n.encryptionKey,{appId:n.appId});case 10:n.theirPublicKey64=t.sent;case 11:if(n.theirPublicKey64){t.next=13;break}throw new Error("Their app doesn't provide the encryption public key.");case 13:if((r=e.from(n.theirPublicKey64,"base64")).length==l.box.publicKeyLength){t.next=16;break}throw new Error("Their encryption public key is invalid.");case 16:return(s=new Uint8Array(l.box.publicKeyLength)).set(r),t.abrupt("return",s);case 19:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"encryptMessage",value:function(){var e=Object(s.a)(a.a.mark((function e(t,n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.forceReady();case 2:return e.next=4,this.getTheirPublicKey(n);case 4:return r=e.sent,e.abrupt("return",this.encryptBox(t,r));case 6:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"decryptMessage",value:function(){var e=Object(s.a)(a.a.mark((function e(t,n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.forceReady();case 2:return e.next=4,this.getTheirPublicKey(n);case 4:return r=e.sent,e.abrupt("return",this.decryptBox(t,r));case 6:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"sendMessage",value:function(){var e=Object(s.a)(a.a.mark((function e(t,n,r){var s=this;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.forceReady(),r=Object.assign({appId:this.appId},r),e.next=4,this.wrappedCall((function(){return s._contract.send_message({receiver_id:t,app_id:r.appId,message:n},2e15)}));case 4:case"end":return e.stop()}}),e,this)})));return function(t,n,r){return e.apply(this,arguments)}}()}]),t}()}).call(this,n(17).Buffer)},84:function(e,t,n){e.exports=n.p+"static/media/gray_near_logo.55517b93.svg"},86:function(e,t,n){e.exports=n.p+"static/media/encryptionOn.23e3b306.png"},87:function(e,t,n){e.exports=n.p+"static/media/encryptionOff.475ce496.png"},92:function(e,t,n){!function(){function t(e){switch(e){case"production":case"development":return{networkId:"default",nodeUrl:"https://rpc.nearprotocol.com",contractName:"neardev",walletUrl:"https://wallet.nearprotocol.com"};case"staging":return{networkId:"staging",nodeUrl:"https://staging-rpc.nearprotocol.com/",contractName:"neardev",walletUrl:"https://near-wallet-staging.onrender.com"};case"local":return{networkId:"local",nodeUrl:"http://localhost:3030",keyPath:"".concat(Object({NODE_ENV:"production",PUBLIC_URL:""}).HOME,"/.near/validator_key.json"),walletUrl:"http://localhost:4000/wallet",contractName:"neardev"};case"test":return{networkId:"local",nodeUrl:"http://localhost:3030",contractName:"neardev",masterAccount:"test.near"};case"test-remote":case"ci":return{networkId:"shared-test",nodeUrl:"http://shared-test.nearprotocol.com:3030",contractName:"neardev",masterAccount:"test.near"};case"ci-staging":return{networkId:"shared-test-staging",nodeUrl:"http://staging-shared-test.nearprotocol.com:3030",contractName:"neardev",masterAccount:"test.near"};default:throw Error("Unconfigured environment '".concat(e,"'. Can be configured in src/config.js."))}}var r=n(167),a="undefined"!=typeof r&&r.getJSON("fiddleConfig");e.exports?(console.log("module works"),e.exports=t):(console.log("Cookie works"),window.nearConfig=a&&a.nearPages?a:t("development"))}()},93:function(e,t,n){e.exports=n(168)},99:function(e,t,n){}},[[93,1,2]]]);
//# sourceMappingURL=main.b2ab866e.chunk.js.map
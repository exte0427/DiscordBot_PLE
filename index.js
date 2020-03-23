const Discord = require(`discord.js`); // discord.js를 불러옴
const client = new Discord.Client(); // 새로운 디스코드 클라이언트를 만듬

var word = 'node.js';
client.on ( 'ready', () => {client.user.setGame ("/도움말 ex찬향");});

var name= new Array();
var rank = new Array();

var rkdghk = new Array();
var fpqpf = new Array();
var akf = new Array();
var gkf = new Array();
var dbwj = new Array();
var money = new Array();
var memb = new Array();
var wntlr = new Array();
var rotn = new Array();
var request = require('request'),
cheerio = require('cheerio');
let role = "";
var ll = new Array("ex전자","pl의료","le보험","jk커피","lo게임","kd은행","od운송","lj텍배");
var ll2 = new Array(10000,10000,10000,10000,10000,10000,10000,10000);
var ll3 = new Array(0,0,0,0,0,0,0,0);
client.once('ready', () => {
  console.log("im here!");
});
client.on('message', async message => {
  if (message.author.bot) return;
  role = message.guild.roles.find(r => r.name == "MUTE");
  if(role == null){
    if(message.content.startsWith("/")){
      message.channel.send("> **/기본설정** 을 해주세요")
    }
    if (message.content.startsWith("/기본설정") ){
      message.channel.guild.createRole( {name:"MUTE", color: "#ff0000", permissions:["MENTION_EVERYONE"] } );
      message.channel.guild.createRole( {name:"PLEOK", color: "#13b66f", permissions:["MENTION_EVERYONE"] } );
      message.channel.guild.createRole( {name:"공지맨션", color: "#13b66f", permissions:["MENTION_EVERYONE"] } );
      message.channel.send(">>> **기본설정** 완료!\n/도움말");
    }
  }
  function gg(){
    let color = ((1 << 24) * Math.random() | 0).toString(16);
    const sendMsg = new Discord.RichEmbed()
    .setColor(color)
    .setTitle("권한이 없음")
    .setFooter("노오력 [PLEOK 를 착용하시길..]");
    message.channel.send(sendMsg)
  }
    jj = "<@&682090528006733855>";
      try{
      //-----------------------------------------------------코딩-----------------------------------------------------
        function mute(time,userT){
          setTimeout(function() {
            const nnn = message.guild.roles.find(role => role.name === 'MUTE');
            userT.removeRole(nnn);
            message.channel.send("> " +userToModify + "님 축하드립니다! **뮤트**가 풀리셨습니다");
          }, time*60000);
        }
        function mute2(time,userT){
          setTimeout(function() {
            dbwj[time-1]="dsufhuuhewkghweighweghew";
          }, userT*1000);
        }
        function timeot(){
          setTimeout(function() {
            for(var i=0;i<ll.length;i++){
              var ren=Math.floor(Math.random() * (3000 - -3000)) + -3000;
              ll2[i]=ll2[i]+ren;
              if(ll2[i]<1000){
                ll2[i]=1000;
              }
              ll3[i]=ren;
            }
          }, 30000);
        }
        timeot();
        if(message.content.startsWith("/삭제")){
          if (message.member.roles.some(role => role.name === "PLEOK") || (message.author.id === '508507359677775873')) {
            var data = message.content.split(" ");
            if(data.length > 1){
              if(typeof(data[1]*1) == "number"){
                message.channel.bulkDelete((data[1]*1)+1);
              }
            }
          }
          else{
            gg();
          }
        }
        if (message.content === "/도움말" ) {
          let color = ((1 << 24) * Math.random() | 0).toString(16);
          const sendMsg = new Discord.RichEmbed()
            .setColor(color)
            .setTitle("도움말")
            .addField("프리야 [할말]", "간단한 대화가 가능합니다")
            .addField("/기본 도움말", "뮤트,투표 등 서버관리 관련 도움말을 봅니다")
            .addField("/기타 도움말", "코로나19 소식,익명 등 기타 도움말을 봅니다")
            .addField("/주식 도움말", "주식 미니게임에 도움말을 봅니다")
            .addField("/강화 도움말", "강화 미니게임에 도움말을 봅니다")
            .setFooter("/초대링크 로 초대링크 보기");
            message.channel.send(sendMsg)

        }
        if (message.content === "/기본 도움말" ) {
          let color = ((1 << 24) * Math.random() | 0).toString(16);
          const sendMsg = new Discord.RichEmbed()
            .setColor(color)
            .setTitle("기본 도움말")
            .addField("/투표 [투표의 제목];[~~1];[~~N]", "투표를 합니다 예시로 /투표 테스트;항목1;항목2 나 /투표 테스트;1;2;3;4 등을 할 수 있습니다")
            .addField("/추방 [맨션]", "해당사람을 추방시킵니다")
            .addField("/권한 [맨션] [권한맨션]", "해당 사람에게 권한을 줍니다")
            .addField("/뮤트 [맨션] [뮤트 할 시간(분)]", "뮤트시킵니다")
            .addField("/만들기 [역할 이름] [역할 권한]", "예 ) /만들기 관리자 ADMINISTRATOR")
            message.channel.send(sendMsg)

        }
        if (message.content === "/기타 도움말" ) {
          let color = ((1 << 24) * Math.random() | 0).toString(16);
          const sendMsg = new Discord.RichEmbed()
            .setColor(color)
            .setTitle("기타 도움말")
            .addField("/나무위키 [검색할 내용]", "꺼무위키에서 검색합니다")
            .addField("/순위", "채팅 양을 봅니다")
            .addField("/유저 정보 [맨션]", "유저의 정보를 봅니다")
            .addField("/핑", "지금 핑을 봅니다")
            .addField("/익명 [할말]", "익명으로 하고싶은 말을 합니다")
            .addField("/명령어 추가 [이걸 받았을때] [이걸 말하기]", "명령어를 추가합니다")
            .addField("/명령어 삭제 [명령어 이름]", "명령어를 삭제합니다")
            .addField("/명령어 목록", "명령어 목록을 봅니다")
            .addField("/코로나", "현재 코로나19 상황을 봅니다")
            message.channel.send(sendMsg)

        }
        if (message.content === "/주식 도움말" ) {
          let color = ((1 << 24) * Math.random() | 0).toString(16);
          const sendMsg = new Discord.RichEmbed()
            .setColor(color)
            .setTitle("주식 도움말")
            .addField("/돈", "남은 돈을 봅니다")
            .addField("/주식 구매 [주식이름] [수]", "주식을 일정 액수만큼 구매합니다")
            .addField("/주식 판매 [주식이름] [수]", "주식을 일정 액수만큼 판매합니다")
            .addField("/주식 순위", "[일부완성] 주식 순위를 봅니다")
            .setFooter("주식은 30초마다 변경됩니다");
            message.channel.send(sendMsg)
        }
        if (message.content === "/강화 도움말" ) {
          let color = ((1 << 24) * Math.random() | 0).toString(16);
          const sendMsg = new Discord.RichEmbed()
            .setColor(color)
            .setTitle("강화 도움말")
            .addField("/강화 [이름]", "강화합니다")
            .addField("/강화 순위", "강화 순위를 봅니다")
            message.channel.send(sendMsg)
        }
        if (message.content === "/초대링크" ) {
          let color = ((1 << 24) * Math.random() | 0).toString(16);
          const sendMsg = new Discord.RichEmbed()
            .setColor(color)
            .setTitle("초대링크!")
            .addField("여기를 클릭하세요","https://discordapp.com/api/oauth2/authorize?client_id=682088206887550997&permissions=8&scope=bot")
            .setFooter("made by exte0427");
            message.channel.send(sendMsg)
        }
        if(message.content.startsWith("/익명")){
          var d = message.content.split(" ");
          mentionMessage = message.content.slice (4);
          message.delete();
          let color = ((1 << 24) * Math.random() | 0).toString(16);
          const sendMsg = new Discord.RichEmbed()
            .setColor(color)
            .setTitle(mentionMessage)
            .setFooter("/익명 으로 쓴 글");

            message.channel.send(sendMsg)
        }
        if(message.content.startsWith("/추방")){
          if (message.member.roles.some(role => role.name === "PLEOK") || (message.author.id === '508507359677775873')) {
            var member = message.mentions.members.first();
            member.kick();
            message.reply(member+"님이 추방 되셨습니다:(");
          }
          else{
            gg();
          }
        }
        if (message.content.startsWith("/권한")) {
          if (message.member.roles.some(role => role.name === "PLEOK") || (message.author.id === '508507359677775873')) {
            userToModify = message.mentions.members.first();
            //const nnn = message.mentions.roles.first();
            var kokok=message.content.split(" ");
            let nnn = message.guild.roles.find(r => r.name === kokok[2]);
            userToModify.addRole(nnn);
            message.channel.send("> "+kokok[2]+" 권한이 주어짐 "+userToModify);
          }
          else{
            gg();
          }
        }
        if (message.content.startsWith("/뮤트")) {
          if (message.member.roles.some(role => role.name === "PLEOK") || (message.author.id === '508507359677775873')) {
          userToModify = message.mentions.members.first();
          data = message.content.split(" ");
          const nnn = message.guild.roles.find(role => role.name === 'MUTE');
          userToModify.addRole(nnn);
          message.channel.send("> 이런! "+userToModify+"님이 **"+data[2]+"분** 동안 **음소거**되셨네요");
          mute(data[2]*1,userToModify);
          }
          else{
            gg();
          }
        }
        if (message.content === "/핑" ){
          let color = ((1 << 24) * Math.random() | 0).toString(16);
          const sendMsg = new Discord.RichEmbed()
            .setColor(color)
            .setTitle("나의 핑은?")
            .setDescription("**"+client.ping+"ms** 입니다");

            message.channel.send(sendMsg)
        }
        if (message.content.startsWith("/강화")){
          if (message.content === "/강화 도움말" ){

          }
          else{
            data = message.content.split(" ");
            if(data[1]=="순위"){
              temp="";
              for(var i=0;i<rkdghk.length;i++){ //배열 출력
                for(var j=0;j<rkdghk.length;j++){ //배열 출력
                  if(fpqpf[i]>fpqpf[j]){
                    temp=fpqpf[i];
                    fpqpf[i]=fpqpf[j];
                    fpqpf[j]=temp;
                    temp=rkdghk[i];
                    rkdghk[i]=rkdghk[j];
                    rkdghk[j]=temp;
                  }
                }
              }
              kk="";
              for(var i=0;i<rkdghk.length;i++){ //배열 출력
                kk=kk+(i+1)+"."+rkdghk[i]+"["+fpqpf[i]+"]"+"\n";
              }
              message.channel.send("```css\n-----강화순위!-----\n"+kk+"\n-------------------```");
            }
            else{
              yesno=0
              for(var i=0;i<dbwj.length;i++){ //배열 출력
                if(message.author.id==dbwj[i]){
                  yesno=1
                }
              }
              if(yesno==0){
              var is_no=-1;
              for(var i=0;i<rkdghk.length;i++){ //배열 출력
                if(data[1]==rkdghk[i]){
                  is_no=i;
                  break;
                }
              }
              okdk=-1;
              for(var i=0;i<memb.length;i++){
                if(message.author.id==memb[i]){
                  okdk=i;
                  break;
                }

              }
              if(is_no==-1){
                rkdghk.push(data[1]);
                fpqpf.push(0);
                var is_no=-1;
                for(var i=0;i<rkdghk.length;i++){ //배열 출력
                  if(data[1]==rkdghk[i]){
                    is_no=i;
                    break;
                  }
                }
                  var ren=Math.floor(Math.random() * (100 - 1)) + 1;
                  if((100-fpqpf[is_no])>=ren){
                    ren=Math.floor(Math.random() * (15 - 2)) + 2;
                    message.channel.send("**"+(100-fpqpf[is_no])+"%** 확율로 **"+ren+"LV**이 올랐습니다 :)")
                    fpqpf[is_no]=fpqpf[is_no]+ren;
                  }
                  else{
                    ren=Math.floor(Math.random() * (15 - 2)) + 2;
                    message.channel.send("**"+(100-(100-fpqpf[is_no]))+"%** 확율로 **"+ren+"LV**이 내려갔습니다 :(")
                    fpqpf[is_no]=fpqpf[is_no]-ren;
                  }

              }
              else{
                ren=Math.floor(Math.random() * (100 - 1)) + 1;
                if((100-fpqpf[is_no])>=ren){
                  ren=Math.floor(Math.random() * (15 - 2)) + 2;
                  message.channel.send("**"+(100-fpqpf[is_no])+"%** 확율로 **"+ren+"LV**이 올랐습니다 :)")
                  fpqpf[is_no]=fpqpf[is_no]+ren;
                }
                else{
                  ren=Math.floor(Math.random() * (15 - 2)) + 2;
                  message.channel.send("**"+(100-(100-fpqpf[is_no]))+"%** 확율로 **"+ren+"LV**이 내려갔습니다 :(")
                  fpqpf[is_no]=fpqpf[is_no]-ren;
                }
              }
              dbwj.push(message.author.id);
              mute2(dbwj.length,5);
            }
            else{
              message.channel.send("> 잠시만 기다려주세요..")
            }
          }
        }
          }

        if (message.content === "/재시작"){
          if (message.author.id === '508507359677775873') {
            message.channel.send("**재시작**중..");
            setTimeout(function() {
              process.exit();
            }, 1000);
          }
          else{
            message.channel.send("**권한**이 없습니다!");
          }
        }
        if (message.content.startsWith("/만들기")) {
          if (message.member.roles.some(role => role.name === "PLEOK") || (message.author.id === '508507359677775873')) {
          j = message.content.split(" ");
          message.channel.guild.createRole( {name:j[1], color: "#13b66f", permissions:[j[2]] } );
          let color = ((1 << 24) * Math.random() | 0).toString(16);
          const sendMsg = new Discord.RichEmbed()
            .setColor(color)
            .setTitle(j[1])
            .setFooter("새로운 역할이 만들어짐");
          message.channel.send(sendMsg)
        }
          else{
            gg();
          }
        }

        o=-1
        var how=0;
        var rhffk = new Array();

        for(var i=0;i<gkf.length;i++){
          if (message.content.startsWith(gkf[i])){
            rhffk.push(akf[i]);
            how++;
            o=1;
          }
        }
        if (o!=-1){
          var ren=Math.floor(Math.random() * (rhffk.length - 0)) + 0;
          message.channel.send(rhffk[ren]);
        }
        if (message.content.startsWith("/명령어 추가") ){
          var dj = message.content.split(" ");
          gkf.push(dj[2]);
          var pu="";
          for(var a=3;a<dj.length;a++){
            pu=pu+dj[a];
          }
          akf.push(pu);
          let color = ((1 << 24) * Math.random() | 0).toString(16);
          const sendMsg = new Discord.RichEmbed()
            .setColor(color)
            .setTitle(dj[2])
            .setFooter("새로운 명령어가 추가됨");

            message.channel.send(sendMsg)
        }
        if (message.content.startsWith("/명령어 삭제") ){
          var dj = message.content.split(" ");
            for(var i=0;i<gkf.length;i++){
              if (dj[2] == gkf[i]){
                o=i;
                break;
              }
            }
            if(o!=-1)
              gkf[i]="zasugwo8qt48q3t4783o83vo373g78geewewgrwgewgegtgetgyeryeruyrq3uq";
            let color = ((1 << 24) * Math.random() | 0).toString(16);
            const sendMsg = new Discord.RichEmbed()
              .setColor(color)
              .setTitle(dj[2])
              .setFooter("명령어가 삭제되었습니다");
            message.channel.send(sendMsg)
        }
        if (message.content.startsWith("/명령어 목록") ){
          var dj = message.content.split(" ");
          koko="";
            for(var i=0;i<gkf.length;i++){
              if(gkf[i]!="zasugwo8qt48q3t4783o83vo373g78geewewgrwgewgegtgetgyeryeruyrq3uq")
                koko=koko+"["+(i+1)+"]"+gkf[i]+" 실행["+akf[i]+"]\n";
            }
            message.channel.send("```"+koko+"```");
        }
        if (message.content.startsWith("프리야") ){
          var dj = message.content.split(" ");
          var request = require('request');

          var headers = {
            'Authorization': 'Basic a2V5OjZkYmM2NDU0MGE5ZjQzNzRmNmU5OGUwZDliZjg2ZWQ0',
            'Content-Type': 'application/json'
          };
          var a="";
          for(var i=1;i<=dj.length;i++){
            a=a+dj[i];
          }
          var dataString = '{"request": {"query": "'+a+'"}}';

          var options = {
            url: 'https://builder.pingpong.us/api/builder/5e5b7b7ae4b0147906136112/integration/v0.2/custom/{sessionId}',
            method: 'POST',
            headers: headers,
            body: dataString
          };

          function callback(error, response, body) {
            if (!error && response.statusCode == 200) {
              var t=JSON.stringify(body);
              var start=body.indexOf(",\"text\":\"")+9;
              var end=body.indexOf("\"",start)-1;
              if(body.indexOf("uD",start)-2 < end && body.indexOf("uD",start)-1 > 2){
                end=body.indexOf("uD",start)-2;
              }
              var okok="";
              for(var i=start;i<=end;i++){
                okok=okok+body.charAt(i)
              }
              message.channel.send(okok);
            }
          }
          //message.channel.send("dd");
          request(options, callback);
        }
        if (message.content.startsWith("/유저 정보") ){
          let ment = message.mentions.users.first();
		        if(!ment) {
			           memt=message.author.id;
                 memt="<@"+memt+">";
                 //message.channel.send(memt);
		        }
	                // Creats an embed with information about the mentioned user
            var j;
            if(ment.presence.status=="dnd")
              j="다른용무중";
            if(ment.presence.status=="idle")
              j="자리비움";
            if(ment.presence.status=="online")
              j="온라인";
            if(ment.presence.status=="offline")
              j="오프라인";
		                let embed = new Discord.RichEmbed()
		                  .addField("닉네임", ment.tag)
		                    .addField("ID", ment.id)
		                      .addField("상태", j)
		                        .addField("만들어진 날짜", ment.createdAt)
		                          .setThumbnail(ment.avatarURL)
		                            message.channel.send(embed)
        }
        function timeout(){
            okdk="";
            for(var i=0;i<ll.length;i++){
              if(ll3[i]>=0)
                okdk=okdk+"+["+ll[i]+"] "+ll2[i]+"원 (▲"+ll3[i]+")\n"
              else{
                okdk=okdk+"-["+ll[i]+"] "+ll2[i]+"원 (▼"+(ll3[i]*-1)+")\n"
              }
            }
            message.channel.send("```diff\n"+okdk+"```");
        }
        okdk=-1;
        for(var i=0;i<memb.length;i++){
          if(message.author.id==memb[i]){
            okdk=i;
            break;
          }
        }
        if(okdk!=-1){
          if (message.content === "/주식"){
            temp="";
            for(var i=0;i<ll.length;i++){ //배열 출력
              for(var j=0;j<ll.length;j++){ //배열 출력
                if(ll2[i]>ll2[j]){
                  temp=ll2[i];
                  ll2[i]=ll2[j];
                  ll2[j]=temp;
                  temp=ll[i];
                  ll[i]=ll[j];
                  ll[j]=temp;
                  temp=ll3[i];
                  ll3[i]=ll3[j];
                  ll3[j]=temp;
                }
              }
            }
            timeout();
          }
          if (message.content.startsWith("/주식 구매")){
            var k=-1;
            var d = message.content.split(" ");

            for(var i=0;i<ll.length;i++){
              if(ll[i]==d[2]){
                k=i;
                break;
              }
            }
            if(k==-1){
              message.channel.send("> **"+d[2]+"**을(를)찾을 수 없음 /주식");
            }
            else{
              for(var i=0;i<memb.length;i++){
                if(message.author.id==memb[i]){
                  okdk=i;
                  break;
                }
              }
              if(money[okdk]>=ll2[k]*d[3]){
                if(rotn[okdk]==0){
                  money[okdk]=money[okdk]-ll2[k]*d[3];
                  wntlr[okdk]=ll[k];
                  rotn[okdk]=d[3];
                  message.channel.send("> **"+(ll2[k]*d[3])+"원**에 주식을 구매함 /주식 판매");
                }
                else{
                  message.channel.send("> **주식**이 이미 있습니다 /주식 판매");
                }
              }
              else{
                message.channel.send("> **돈**이 부족합니다 /돈");
              }
            }
          }
          if (message.content.startsWith("/주식 판매")){
            var d = message.content.split(" ");
            for(var i=0;i<memb.length;i++){
              if(message.author.id==memb[i]){
                okdk=i;
                break;
              }
            }
            okdkd=-1;
            for(var i=0;i<ll.length;i++){
              if(d[2]==ll[i]){
                okdkd=i;
                break;
              }
            }
            if(wntlr[okdk]==d[2]){
              if(rotn[okdk]<d[3]){
                message.channel.send(">>> **보유중인**주식의 개수는**"+rotn[okdk]+"**개 입니다");
              }
              else{
                message.channel.send(">>>"+wntlr[okdk]+" 주식 "+d[3]+"개를 **"+(ll2[okdkd]*rotn[okdk])+"**원에 판매하였습니다");
                money[okdk]=money[okdk]+ll2[okdkd]*d[3];
                wntlr[okdk]="없음";
                rotn[okdk]=0;
              }
            }
            else{
              message.channel.send(">>> **보유중인**주식을 찾을 수 없습니다\n현제 보유중인 주식은**"+wntlr[okdk]+"** 입니다");
            }
          }
        }
        else{
          if(message.content === "/주식"){
            okdk=-1;
            for(var i=0;i<memb.length;i++){
              if(message.author.id==memb[i]){
                okdk=i;
                break;
              }

            }
            if(okdk==-1){
              memb.push(message.author.id);
              money.push(100000);
              wntlr.push("없음");
              rotn.push(0);
              okdk=memb.length-1;
            }
            temp="";
            for(var i=0;i<ll.length;i++){ //배열 출력
              for(var j=0;j<ll.length;j++){ //배열 출력
                if(ll2[i]>ll2[j]){
                  temp=ll2[i];
                  ll2[i]=ll2[j];
                  ll2[j]=temp;
                  temp=ll[i];
                  ll[i]=ll[j];
                  ll[j]=temp;
                  temp=ll3[i];
                  ll3[i]=ll3[j];
                  ll3[j]=temp;
                }
              }
            }
            timeout();
          }
        }

        //-----------------------------------------------------------------주식--------------------------------------
        if (message.content === "/돈"){
          okdk=-1;
          for(var i=0;i<memb.length;i++){
            if(message.author.id==memb[i]){
              okdk=i;
              break;
            }
          }
          if(okdk==-1){
            memb.push(message.author.id);
            money.push(100000);
            wntlr.push("없음");
            rotn.push(0);
            okdk=memb.length-1;
          }
          let color = ((1 << 24) * Math.random() | 0).toString(16);
          const sendMsg = new Discord.RichEmbed()
          .setColor(color)
          .setTitle(money[okdk]+"원 보유중")
          .setDescription(wntlr[okdk]+" 주식을 "+rotn[okdk]+"개 보유중");

          message.channel.send(sendMsg)

        }
        if (message.content === "/주식 순위"){
          temp="";
          for(var i=0;i<money.length;i++){ //배열 출력
            for(var j=0;j<money.length;j++){ //배열 출력
              if(money[i]>money[j]){
                temp=money[i];
                money[i]=money[j];
                money[j]=temp;
                temp=memb[i];
                memb[i]=memb[j];
                memb[j]=temp;
              }
            }
            okdk="";
            for(var i=0;i<memb.length;i++){
              okdk=okdk+(i+1)+". <@"+memb[i]+"> 님 "+money[i]+"원\n"
            }
            message.channel.send("```css\n"+okdk+"```");
          }

        }
        //-----------------------------------------------------------------주식--------------------------------------
        if (message.content === "/코로나" ){
          var request = require('request'),
          cheerio = require('cheerio');
          var url = "http://ncov.mohw.go.kr/bdBoardList_Real.do?brdId=1&brdGubun=11&ncvContSeq=&contSeq=&board_id=&gubun=";
          var a = 1;
          var c = new Array("","","","");
          request(url, function (err, res, html) {
            var $ = cheerio.load(html);
            $(".num > tbody > tr > td").each(function () {
              var post = {"title": "", "link": "", "summary": "", "category": []};
              var data = $(this);

              post["title"] = data.text();
              c[a]=post["title"];
              a=a+1;
            });
            let color = ((1 << 24) * Math.random() | 0).toString(16);
            const sendMsg = new Discord.RichEmbed()
              .setColor(color)
              .setTitle("코로나19 상황")
              .addField("확진자 수", c[1])
              .addField("격리해제", c[2])
              .addField("격리중", c[3])
              .addField("사망", c[4])
              message.channel.send(sendMsg)
          })

          }
          //-------------------------------------------------------------
        if (message.content.startsWith("/나무위키")){
          var dj = message.content.split(" ");
          var request = require('request'),
          cheerio = require('cheerio');
          var gf=encodeURI(dj[1]);
          var url = "https://namu.wiki/w/"+gf;
          var a = 1;
          var c = new Array("","","","");
          request(url, function (err, res, html) {
            var $ = cheerio.load(html);
            $("div > .w > .wiki-heading-content > .wiki-paragraph").each(function () {
              var post = {"title": "", "link": "", "summary": "", "category": []};
              var data = $(this);
              post["title"] = data.text();
              c[a]=post["title"];
              a=a+1;
            });
            var dodo="";
            for(var i=0;i<=500;i++){
              dodo=dodo+c[1].charAt(i)
            }
            let color = ((1 << 24) * Math.random() | 0).toString(16);
            const sendMsg = new Discord.RichEmbed()
              .setColor(color)
              .setFooter(dodo+"....")
              .addField(dj[1]+"의 검색결과",url);
              message.channel.send(sendMsg)
          })

        }
        if (message.content.startsWith("/공지") ){
          if (message.member.roles.some(role => role.name === "PLEOK") || (message.author.id === '508507359677775873')) {
          var dj = message.content.split(";");
          var kkj="";
          var dsa=0;
          for(var i=4;i<dj[0].length;i++){
            kkj=kkj+dj[0].charAt(i)
          }
          dj[0]=kkj;
          let color = ((1 << 24) * Math.random() | 0).toString(16);
          var a="";
          var b="";
          const sendMsg = new Discord.RichEmbed()
            .setColor(color)
            .setTitle(dj[0])
            .setFooter(dj[1]+"[맨션을 받을려면 ✔]");
            let send = await message.channel.send(sendMsg)
            await send.react('✔');
            const filter = (reaction, user) => {
              let nnn = message.guild.roles.find(r => r.name === '공지맨션');
              let use = "<@!"+user.id+">";
              if(user.id!=682088206887550997){
                a=use;
                b=nnn;
              }

    	         return ['✔'].includes(reaction.emoji.name)&& user.id === message.author.id;
            };
            send.awaitReactions(filter, { max: 1, time: 60000})
    	       .then(async collected => {
    		        const reaction = collected.first();
                console.log(reaction.users.map(u => msg.guild.members.get(u.id)))
    		         if (reaction.emoji.name === '✔') {
                   //message.channel.send(a+"end"+b);
                   userToModify = a;
                   let nnn = b;
                   //userToModify.addRole(nnn);
                 }
            })



          }
        }
      //--------------------------------------------랭킹
      if (message.content.startsWith("/투표") ){
        var dj = message.content.split(";");
        var kkj="";
        var dsa=0;
        for(var i=4;i<dj[0].length;i++){
          kkj=kkj+dj[0].charAt(i)
        }
        dj[0]=kkj;
        var t="";
        for(var i=0;i<dj.length;i++){
          if(i!=0)
            t=t+em(i)+dj[i]+"\n";
          else{
            t=t+"--"+dj[i]+"--"+"\n";
          }
        }
        const filter = (reaction, user) => {
	         return ['✔', '✖'].includes(reaction.emoji.name) && user.id === message.author.id;
        };
        let color = ((1 << 24) * Math.random() | 0).toString(16);
        const sendMsg = new Discord.RichEmbed()
          .setColor(color)
          .setTitle("확실한가요?")
          .setFooter(t);
          let send = await message.channel.send(sendMsg)
          await send.react('✔');
          await send.react('✖');
          send.awaitReactions(filter, { max: 1, time: 60000})
  	       .then(async collected => {
  		         const reaction = collected.first();
  		           if (reaction.emoji.name === '✔') {
                   message.channel.bulkDelete(2);
  			           var g="";
                   for(var i=1;i<dj.length;i++){
                     g=g+em(i)+dj[i]+"\n";
                   }
                   let color = ((1 << 24) * Math.random() | 0).toString(16);
                   const sendMsg = new Discord.RichEmbed()
                     .setColor(color)
                     .setTitle("[투표]"+dj[0])
                     .setFooter(g);
                    let ssend = await message.channel.send(sendMsg)
                    await ssend.react(em(1));
                    if(dj.length>=3)  await ssend.react(em(2));
                    if(dj.length>=4)  await ssend.react(em(3));
                    if(dj.length>=5)  await ssend.react(em(4));
                    if(dj.length>=6)  await ssend.react(em(5));
                    if(dj.length>=7)  await ssend.react(em(6));
  		           } else {
  			            message.channel.bulkDelete(2);
  		           }
               })
      }
      function em(a){
        if(a==1)    return'1️⃣';
        if(a==2)    return'2️⃣';
        if(a==3)    return'3️⃣';
        if(a==4)    return'4️⃣';
        if(a==5)    return'5️⃣';
        if(a==6)    return'6️⃣';
      }
      var k=message.author.id;
      var kkokk=-1;
      for(var i=0;i<=name.length;i++){
        if(name[i]==k){
          kkokk=i;
          break;
        }
      }
      if(kkokk==-1){
        name.push(k);
        rank.push(0);
        for(var i=0;i<=name.length;i++){
          if(name[i]==k){
            kkokk=i;
            break;
          }
        }
      }
      rank[kkokk]=rank[kkokk]+10;
      //--------------------------------------------랭킹
      if (message.content === "/순위" ) {
        for(var i=0;i<=name.length;i++){
          for(var j=0;j<=name.length;j++){
            if(rank[i]>rank[j]){
              var temp=rank[j];
              rank[j]=rank[i];
              rank[i]=temp;
              temp=name[j];
              name[j]=name[i];
              name[i]=temp;
            }
          }
        }
        var k=message.mentions.users.first();
        if(!k){
          k=message.author.id;
        }
        var kkokk=-1;
        for(var i=0;i<=name.length;i++){
          if(name[i]==k){
            kkokk=i;
            break;
          }
        }
        let color = ((1 << 24) * Math.random() | 0).toString(16);
        const sendMsg = new Discord.RichEmbed()
          .setColor(color)
          .setTitle("순위는?")
          .addField(rank[kkokk]+"점 "+(Math.floor(rank[kkokk]/100)+1)+"rank", "나의 등수 "+(kkokk+1)+"등")
          message.channel.send(sendMsg)

      }
      //-----------------------------------------------------코딩-----------------------------------------------------
    if (message.member.roles.some(role => role.name === "MUTE")) {
      message.delete();
    }
    } catch(err){
      message.reply(err.message);
      return;
    }

});
// 여러분의 디스코드 토큰으로 디스코드에 로그인합니다
client.login(`토큰`);

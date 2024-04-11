var posts=["2024/04/09/2019-06-1-加密文章/","2024/04/09/2019-07-12-hello-world/","2023/06/02/2023-06-2-基于TCP协议的Socket网络编程示例/","2024/04/09/2023-06-20-Qt多线程编程/","2023/06/27/2023-06-27-Carla和Python实现自动驾驶/","2024/04/09/2023-07-01-计算视觉SLAM——引言/","2023/07/01/2023-07-1-7月份通信类会议整理/","2024/04/09/2023-07-24-CMake介绍/","2024/04/09/2023-07-24-智能网联车企业汇总/","2024/04/09/2023-07-24-组会会议记录/","2023/07/07/2023-07-7-leetcode刷题笔记——链表/","2024/04/09/2023-07-9-三维空间刚体运动/","2023/08/10/2023-08-10-vector遍历/","2024/04/09/2023-08-12-信任管理文献笔记/","2023/08/16/2023-08-16-堆和栈的区别/","2023/08/18/2023-08-18-汇编、CPU架构和指令集/","2024/04/09/2023-08-3-2024届秋招投递记录/","2024/04/09/2023-08-6 TCPIP和UDP协议的区别/","2023/08/06/2023-08-6-C++刷题笔记——Linux网络/","2023/08/06/2023-08-6-操作系统——线程同步(互斥量)/","2023/08/06/2023-08-6-操作系统——线程同步(读写锁)/","2024/04/09/2023-08-9-C++正则表达式/","2024/04/09/2023-08-9-行云智能-笔试题答案/","2024/04/09/2023-7-19-论文盲审评语/","2023/08/06/2023-08-6-面试八股文——操作系统/","2024/04/09/2023-7-2-leetcode刷题笔记/","2024/04/09/2023-7-2-leetcode刷题笔记——数组(二分查找)/","2024/04/09/2023-7-31 智能网联汽车产业链全景图/","2024/04/09/2023-7-22-6月-7月学习周报/","2023/11/05/IDS/","2024/04/09/xxxxxxxxxx 1graph TB2    A[开始] -- B[以rb模式打开Users/","2024/04/09/会议整理/","2023/11/05/数据共享研究2023年最新文献/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"Hexo","link":"https://hexo.io/zh-tw/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、简单且强大的网站框架"},{"name":"anzhiyu主题","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg","color":"vip","tag":"技术"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","recommend":true}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };
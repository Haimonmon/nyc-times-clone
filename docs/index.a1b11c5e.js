let e=["https://api.nytimes.com/svc/topstories/v2/home.json?api-key=I3SCMGvGeTN6bzgOgpbFyDOaAcDIlOzL","https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=I3SCMGvGeTN6bzgOgpbFyDOaAcDIlOzL","https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=I3SCMGvGeTN6bzgOgpbFyDOaAcDIlOzL","https://api.nytimes.com/svc/topstories/v2/world.json?api-key=I3SCMGvGeTN6bzgOgpbFyDOaAcDIlOzL"];const t=async()=>{try{let t=await Promise.all(e.map(e=>fetch(e))),s=await Promise.all(t.map(e=>e.json()));return{homePageData:s[0],artsPageData:s[1],sportsPageData:s[2],worldPageData:s[3]}}catch(e){console.log(`Failed to fetch, Check your apiKey bro. ${e}`)}},s=()=>{let e=document.getElementById("search-input");document.getElementById("search-btn").addEventListener("click",()=>{console.log(e.value)})},a=e=>{let t=new Date(e),s=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][t.getDay()],a=["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()],i=t.getDate(),r=t.getFullYear();return`${s}, ${a} ${i}, ${r}`},i=e=>{let t=a(e.last_updated);document.getElementById("todays-date").innerHTML=`<p> ${t} <br> Today's Agenda <p>`},r=e=>e.results,o=e=>{let t=document.getElementById("header-img");"home"===e.section?t.innerHTML=`
            <img src="./assets/image/IMG-Header-Page-0001.jpg" alt="">
            <h1 id="page-name">News</h1>
            <h1 id="skyline">Skyline</h1>`:"Arts"===e.section?t.innerHTML=`
            <img src="./assets/image/IMG-Header-Page-0002.jpg" alt="">
            <h1 id="page-name">Arts</h1>
            <h1 id="skyline">Skyline</h1>`:"Sports"===e.section?t.innerHTML=`
            <img src="./assets/image/IMG-Header-Page-0001.jpg" alt="">
            <h1 id="page-name">Sports</h1>
            <h1 id="skyline">Skyline</h1>`:"World News"===e.section&&(t.innerHTML=`
            <img src="./assets/image/IMG-Header-Page-0001.jpg" alt="">
            <h1 id="page-name">World</h1>
            <h1 id="skyline">Skyline</h1>`)},n=e=>{let t=r(e),s=0;o(e);let i=document.querySelectorAll(".circle"),n=e=>{i.forEach((t,s)=>{s===e?t.classList.add("active"):t.classList.remove("active")})},d=e=>{let s=t[e],i=document.getElementById("hot-topic-publisher");i.classList.remove("summon-text"),i.offsetWidth,i.classList.add("summon-text"),i.innerHTML=` <p id="publisher"> ${s.byline} </p> <hr> <p id="date-published">${a(s.published_date)}</p>`;let r=document.getElementById("hot-topic-title");r.classList.remove("summon-text"),r.offsetWidth,r.classList.add("summon-text"),r.innerHTML=`<h1>${s.title}</h1>`;let o=document.getElementById("hot-topic-abstract");o.innerHTML=`<p>${s.abstract}</p>`,o.classList.remove("summon-text"),o.offsetWidth,o.classList.add("summon-text"),document.getElementById("read-more-top-news").innerHTML=`<a href="${s.url}" target="_blank"><button>Read More</button></a>`,n(e)};d(s),document.getElementById("cnav-btn1").addEventListener("click",()=>{d(s=0)}),document.getElementById("cnav-btn2").addEventListener("click",()=>{d(s=1)}),document.getElementById("cnav-btn3").addEventListener("click",()=>{d(s=2)}),document.getElementById("cnav-btn4").addEventListener("click",()=>{d(s=3)}),document.getElementById("previous-arrow").addEventListener("click",()=>{d(s=(s-1+4)%4)}),document.getElementById("forward-arrow").addEventListener("click",()=>{d(s=(s+1)%4)})},d=(e,t,s,i)=>{let o=r(e),n=document.getElementById(t);n.innerHTML="";for(let e=s;e<=i;e++){let t=o[e].multimedia||["./assets/image/IMG-Header-Page-0001.jpg"],s=t&&t.length>0?t[0].url:"./assets/image/IMG-Header-Page-0001.jpg";n.innerHTML+=`
            <div class="top-stories-container">
                <div class="information-container">
                    <div id="top-stories-publisher">
                        <p>${o[e].byline}</p>
                        <hr>
                        <p>${a(o[e].published_date)}</p>
                    </div>
                    <div id="top-stories-title">
                        <h1>${o[e].title}</h1>
                    </div>
                    <div id="top-stories-abstract">
                        <p>${o[e].abstract}</p>
                    </div>
                    <a href="${o[e].url}" target="_blank">
                        <div class="top-stories-read-more-btn">
                            <button>Read More</button>
                        </div>
                    </a>
                </div>
                <img src="${s}" alt="">
            </div>

        `}},l=(e,t,s,a)=>{let i=r(e),o=document.getElementById(t);o.innerHTML="";for(let e=s;e<=a;e++){let t=i[e].multimedia||["./assets/image/IMG-Header-Page-0001.jpg"],s=t&&t.length>0?t[0].url:"./assets/image/IMG-Header-Page-0001.jpg";o.innerHTML+=`
            <a href="${i[e].url}" target="_blank">
                <div class="other-sports-news-container">
                    <img src="${s}" alt="">
                    <h1>${i[e].title}</h1>
                    <p>${i[e].abstract}</p>
                    <img id="read-more" src="./assets/navigation-icons/Arrow 3.png" alt="">
                </div>
            </a>`}},c=e=>{let t=e.homePageData,s=e.artsPageData,a=e.sportsPageData,i=e.worldPageData,r=document.getElementById("home-button"),o=document.getElementById("arts-button"),c=document.getElementById("sports-button"),m=document.getElementById("world-button");r.addEventListener("click",()=>{n(t),d(t,"top-stories1",4,7),l(a,"sports-stories",0,2),l(s,"art-stories",0,2),d(t,"top-stories2",8,11)}),o.addEventListener("click",()=>{n(s),d(s,"top-stories1",4,7),l(t,"sports-stories",0,2),l(i,"art-stories",0,2),d(s,"top-stories2",8,11)}),c.addEventListener("click",()=>{n(a),d(a,"top-stories1",4,7),l(s,"sports-stories",0,2),l(t,"art-stories",0,2),d(a,"top-stories2",8,9)}),m.addEventListener("click",()=>{n(i),d(i,"top-stories1",4,7),l(a,"sports-stories",0,2),l(t,"art-stories",0,2),d(i,"top-stories2",8,11)})};(async()=>{let e=await t();console.log(e);let a=e.homePageData,r=e.artsPageData,o=e.sportsPageData;i(a),n(a),d(a,"top-stories1",4,7),s(),l(o,"sports-stories",0,2),l(r,"art-stories",0,2),d(a,"top-stories2",8,11),c(e)})();
//# sourceMappingURL=index.a1b11c5e.js.map

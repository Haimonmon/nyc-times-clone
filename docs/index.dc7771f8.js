let e=["https://api.nytimes.com/svc/topstories/v2/home.json?api-key=I3SCMGvGeTN6bzgOgpbFyDOaAcDIlOzL","https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=I3SCMGvGeTN6bzgOgpbFyDOaAcDIlOzL","https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=I3SCMGvGeTN6bzgOgpbFyDOaAcDIlOzL","https://api.nytimes.com/svc/topstories/v2/world.json?api-key=I3SCMGvGeTN6bzgOgpbFyDOaAcDIlOzL"];const t=async()=>{try{let t=await Promise.all(e.map(e=>fetch(e))),a=await Promise.all(t.map(e=>e.json()));return{homePageData:a[0],artsPageData:a[1],sportsPageData:a[2],worldPageData:a[3]}}catch(e){console.log(`Failed to fetch, Check your apiKey bro. ${e}`)}},a=()=>{let e=document.getElementById("search-input");document.getElementById("search-btn").addEventListener("click",()=>{console.log(e.value)})},s=e=>{let t=new Date(e),a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][t.getDay()],s=["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()],i=t.getDate(),r=t.getFullYear();return`${a}, ${s} ${i}, ${r}`},i=e=>{let t=s(e.last_updated);document.getElementById("todays-date").innerHTML=`<p> ${t} <br> Today's Agenda <p>`},r=e=>e.results,o=e=>{let t=r(e)[0];document.getElementById("hot-topic-publisher").innerHTML=` <p id="publisher"> ${t.byline} </p> <hr> <p id="date-published">${s(t.published_date)}</p>`,document.getElementById("hot-topic-title").innerHTML=`<h1>${t.title}</h1>`,document.getElementById("hot-topic-abstract").innerHTML=`<p>${t.abstract}</p>`},n=(e,t,a,i)=>{let o=r(e),n=document.getElementById(t);n.innerHTML="";for(let e=a;e<=i;e++){let t=o[e].multimedia[0].url||"./assets/image/IMG-Header-Page-0001.jpg";n.innerHTML+=`
        <a href="${o[e].url}" target="_blank">
            <div class="top-stories-container">
                    <div class="information-container">
                        <div id="top-stories-publisher">
                            <p>${o[e].byline}</p>
                            <hr>
                            <p>${s(o[e].published_date)}</p>
                        </div>
                        <div id="top-stories-title">
                            <h1>${o[e].title}</h1>
                        </div>
                        <div id="top-stories-abstract">
                            <p>${o[e].abstract}</p>
                        </div>

                        <div class="top-stories-read-more-btn">
                            <button>Read More</button>
                        </div>
                    </div>
                    <img src="${t}" alt="">
                </div>
        </a>
        `}},l=(e,t,a,s)=>{let i=r(e),o=document.getElementById(t);o.innerHTML="";for(let e=a;e<=s;e++){let t=i[e].multimedia[0].url||"./assets/image/IMG-Header-Page-0001.jpg";o.innerHTML+=`
            <a href="${i[e].url}" target="_blank">
                <div class="other-sports-news-container">
                    <img src="${t}" alt="">
                    <h1>${i[e].title}</h1>
                    <p>${i[e].abstract}</p>
                    <img id="read-more" src="./assets/navigation-icons/Arrow 3.png" alt="">
                </div>
            </a>`}};(async()=>{let e=await t();console.log(e);let s=e.homePageData,r=e.artsPageData,d=e.sportsPageData;i(s),o(s),n(s,"top-stories1",4,7),a(),l(d,"sports-stories",0,2),l(r,"art-stories",0,2),n(s,"top-stories2",8,11)})();
//# sourceMappingURL=index.dc7771f8.js.map

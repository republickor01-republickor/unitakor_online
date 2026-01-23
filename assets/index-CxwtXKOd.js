import{initializeApp as k}from"https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";import{getFirestore as E,addDoc as L,collection as z,serverTimestamp as B}from"https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(n){if(n.ep)return;n.ep=!0;const s=e(n);fetch(n.href,s)}})();function S(o){o.innerHTML=`
  <!-- 전체 환경 -->
    <div id="app-viewport" style="
      width:100vw;
      height:100vh;
      background:#0b0b0b;
      display:flex;
      justify-content:center;
      align-items:center;
      overflow-y:auto;     /* ⭐ 화면이 스크롤 */
      padding:20px 0;      /* 위아래 여유 */
    ">

    <!-- 쓰는  환경 -->
      <div id="app-stage" style="
        width:min(88vw, 420px);
        max-height:min(80vh, 720px);
        heigh: 100%;
        background:#fff;
        border-radius:16px;
        padding:24px;
        box-sizing:border-box;
        display:flex;
        flex-direction:column;
        box-shadow: 0 10px 25px rgba(0,0,0,0.5);
      ">
        <div id="view-root"
             style="
              flex:1; 
              display:flex; 
              flex-direction:column;
              overflow-y:auto;   /* ⭐ 핵심 */
              min-height:0;      /* ⭐ flex overflow 버그 방지 */
              ">
        </div>
      </div>
    </div>
  `}const A={apiKey:"AIzaSyBpG-uKT3J8S9DcPewHp7gWOVZBTOByGGc",authDomain:"unitakor-div.firebaseapp.com",projectId:"unitakor-div",storageBucket:"unitakor-div.firebasestorage.app",messagingSenderId:"247399603524",appId:"1:247399603524:web:33f6b39e93b3fe0e628b11",measurementId:"G-P7WX2W4DLK"},H=k(A),N=E(H);async function O(o,t,e,r){try{return await L(z(N,"math_results"),{studentName:o,score:t,total:e,unit:r,timestamp:B()}),!0}catch(n){return console.error("Error adding document: ",n),!1}}const j=(o,t)=>{const e=Number(t);return e===0?"CONST_1":e===1?`BASE_${o}`:`BASE_${o}_EXP_${e.toFixed(1)}`};function h(o,t){return Math.floor(Math.random()*(t-o+1))+o}function P(o){const{base:t,core:e,ans:r}=o;let n=[r];new Set().add(j(t,e));const a=["0","1","-1","\\frac{1}{2}","-\\frac{1}{2}","\\frac{\\sqrt{2}}{2}","-\\frac{\\sqrt{2}}{2}","\\frac{\\sqrt{3}}{2}","-\\frac{\\sqrt{3}}{2}","\\sqrt{3}","-\\sqrt{3}"],{text:d,math:p}=o;let u=0;for(;n.length<5&&u<100;){u++;let i,m;if(t==="trig")i=a[h(0,a.length-1)],m=i;else if(t==="radian"||t==="degree"){const f=(Math.random()*20-10).toFixed(0);m=Number(e)+Number(f),i=t==="degree"?`${m}^\\circ`:`\\frac{${h(1,7)}\\pi}{${h(2,6)}}`}else if(t==="arithmetic"||t==="geometric"){const f=h(1,5)*(Math.random()>.5?1:-1);m=Number(r)+f,i=`${m}`}else{const f=Math.floor(Math.random()*21)-10;m=f,i=f===1?`${t}`:`${t}^{${f}}`,f===0&&(i="1")}n.includes(i)||n.push(i)}return n.sort(()=>Math.random()-.5)}function x(o,t){const e=localStorage.getItem("temp_student_name")||"학생",{title:r,generator:n,max:s=10}=t;let a=0,d=0;function p(){if(d>=s){u();return}const i=n(),{q:m,text:f,math:v,ans:q}=i,_=P(i);o.innerHTML=`
        <div style="display:flex; 
            flex-direction:column; 
            height:100%;">
            <div style="display:flex;
                justify-content:space-between;
                align-items:center;
                padding-bottom:10px; 
                border-bottom:1px solid #eee;">
                    <button id="btn-home" 
                        style="border:none; 
                        background:none; 
                        cursor:pointer; 
                        font-size:20px;">
                    🏠</button>
                <div style="text-align:right;">
                    <div style="font-size:10px; 
                        color:#999;">
                        ${e} | ${r}
                    </div>
                    <div style="font-size:13px; 
                        font-weight:bold; 
                        color:#4A90E2;">
                        ${a}/${d}
                    </div>
                </div>
            </div>

            <div id="question-area" 
                style="
                    flex:1; 
                    display:flex; 
                    min-width:0;              /* ⭐ 이 줄 추가 */
                    flex-direction:column; 
                    justify-content:center; 
                    align-items:center; 
                    text-align:center;
                    padding: 0 10px;      /* 양옆 여백 추가 */
                    width: 100%;          /* 부모 너비에 맞춤 */
                    box-sizing: border-box;
                    overflow-wrap: break-word; /* 단어 단위 줄바꿈 */
                    word-wrap: break-word; 
                    ">
                <div id="math-question" 
                    style="
                    width:100%;
                    max-width:100%;
                    font-size:clamp(18px, 5vw, 24px);
                    margin-bottom:15px;
                    line-height:1.4;
                    text-align:center;
                    ">
                    ${m?`$$ ${m} $$`:`
                            ${f?`<div style="margin-bottom:8px;">${f}</div>`:""}
                            ${v?`<div>$$ ${v} $$</div>`:""}
                          `}
                </div>

                <p style="
                    font-size:18px; 
                    color:#333; margin:0;
                    ">
                    의 값을 구하시오.
                </p>
            </div>

            <div style="padding:15px 0 5px 0; border-top:1px solid #eee;">
                <div id="answer-area" 
                    style="
                        display:grid; 
                        grid-template-columns: 
                        repeat(5, 1fr); gap:6px;
                        ">
                    ${_.map((g,I)=>`
                    <button class="ans-btn" data-val="${g}" style="padding:12px 0; border:1px solid #ddd; border-radius:8px; background:#fff; cursor:pointer;">
                        <span style="color:#4A90E2; font-weight:bold; font-size:11px;">${I+1}</span><br>
                        <span style="font-size:16px; font-weight:600;">$$ ${g} $$</span>
                    </button>
                      `).join("")}
                </div>
            </div>
        </div>
      `,document.getElementById("btn-home").onclick=()=>location.reload(),o.querySelectorAll(".ans-btn").forEach(g=>{g.onclick=()=>{g.dataset.val===q?(a++,d++,p()):(g.style.borderColor="#ff4d4d",g.style.background="#fff0f0")}}),window.MathJax&&MathJax.typesetPromise([o])}function u(){o.innerHTML=`
            <div style="text-align:center; padding-top:40px;">
                <h1 style="font-size:50px; margin:0;">🏆</h1>
                <h2>수고하셨습니다!</h2>
                <div style="background:#f8f9fa; padding:20px; border-radius:15px; margin:20px 0; font-size:20px;">
                    정답: <b>${a}</b> / ${s}
                </div>
                <button id="btn-final-save" 
                    style="width:100%; 
                    padding:15px; 
                    background:#27ae60; 
                    color:#fff; border:none; 
                    border-radius:12px; 
                    font-size:16px; 
                    font-weight:bold; 
                    cursor:pointer;">
                    기록 저장하고 메뉴로
                </button>
                <button id="btn-just-main" 
                    style="width:100%; 
                    padding:15px; 
                    background:#eee; 
                    color:#666; 
                    border:none; 
                    border-radius:12px; 
                    font-size:16px; 
                    cursor:pointer;">
                        저장 없이 메뉴로
                </button>
            </div>
      `,document.getElementById("btn-final-save").onclick=async()=>{console.log(e,a,s,r);const i=await O(e,a,s,r);alert(i?`저장 성공!
이름: ${e}
단원: ${r}
점수: ${a}/${s}`:"데이터 저장에 실패했습니다. 파이어베이스 설정을 확인하세요."),location.reload()},document.getElementById("btn-just-main").onclick=()=>{confirm("기록이 저장되지 않습니다. 정말 나갈까요?")&&location.reload()}}p()}const y=(o,t)=>Math.floor(Math.random()*(t-o+1))+o,F=(o,t)=>t===0?"1":t===1?`${o}`:`${o}^{${t}}`,T={title:"지수법칙 마스터 (범용 조립형)",generator:()=>{const t=y(2,3),e=y(2,4),r=`(a^{${t}})^{${e}}`,n=t*e,s=y(-5,5),a=`a^{${s}}`,d=y(1,6),p=`a^{${d}}`,u=`\\frac{${r} \\times ${a}}{${p}}`,i=n+s-d;return{q:u,ans:F("a",i),core:i,base:"a"}}},c=(o,t)=>Math.floor(Math.random()*(t-o+1))+o,V={title:"로그의 정의와 성질 마스터",generator:()=>{const o=[()=>{const t=[2,3,5][c(0,2)],e=c(2,4),r=Math.pow(t,e);return{q:`${t}^{${e}} = ${r} \\text{ 일 때, } \\log_{${t}} ${r} \\text{ 의 값}`,ans:`${e}`,core:e,base:""}},()=>({q:`\\log_{${c(2,99)}} 1`,ans:"0",core:0,base:""}),()=>{const t=c(2,99);return{q:`\\log_{${t}} ${t}`,ans:"1",core:1,base:""}},()=>{const t=[2,3,5][c(0,1)],e=c(1,3),r=c(1,2),n=Math.pow(t,e),s=Math.pow(t,r);return{q:`\\log_{${t}} ${n} + \\log_{${t}} ${s}`,ans:`${e+r}`,core:e+r,base:""}},()=>{const e=c(4,6),r=c(1,3),n=Math.pow(2,e),s=Math.pow(2,r);return{q:`\\log_{2} ${n} - \\log_{2} ${s}`,ans:`${e-r}`,core:e-r,base:""}},()=>{const t=[2,3][c(0,1)],e=c(2,5),r=Math.pow(t,e);return{q:`\\log_{${t}} ${r}`,ans:`${e}`,core:e,base:""}},()=>{const e=c(2,3);return{q:`\\log_{${Math.pow(2,e)}} 2`,ans:`\\frac{1}{${e}}`,core:1/e,base:""}},()=>({q:"\\log_{2} 7 \\times \\log_{7} 2",ans:"1",core:1,base:""}),()=>{const t=c(2,9),e=c(2,15);return{q:`${t}^{\\log_{${t}} ${e}}`,ans:`${e}`,core:e,base:""}},()=>({q:"\\log_{2} 5 \\times \\log_{5} 8",ans:"3",core:3,base:""})];return o[c(0,o.length-1)]()}},b=(o,t)=>Math.floor(Math.random()*(t-o+1))+o,K={title:"삼각함수의 기초와 동경",generator:()=>{const o=[()=>{const t=[30,45,60,90,120,135,150,180,210,240,270,300,315,330][b(0,13)],e=t*Math.PI/180,r=(u,i)=>i?r(i,u%i):u,n=r(t,180),s=t/n,a=180/n;let d=s===1?"":s.toString(),p=a===1?`${d}\\pi`:`\\frac{${d}\\pi}{${a}}`;return t===0&&(p="0"),t===180&&(p="\\pi"),{q:`${t}^\\circ \\text{ 를 호도법으로 나타내면?}`,ans:p,core:e.toFixed(5),base:"radian"}},()=>{const t=[{d:30,r:"\\frac{\\pi}{6}"},{d:45,r:"\\frac{\\pi}{4}"},{d:60,r:"\\frac{\\pi}{3}"},{d:90,r:"\\frac{\\pi}{2}"},{d:180,r:"\\pi"},{d:270,r:"\\frac{3\\pi}{2}"},{d:360,r:"2\\pi"}],e=t[b(0,t.length-1)];return{q:`${e.r} \\text{ 를 육십분법으로 나타내면?}`,ans:`${e.d}^\\circ`,core:e.d,base:"degree"}},()=>{const t=[0,30,45,60,90,120,135,150,180,210,225,240,270,300,315,330],e=t[b(0,t.length-1)],n=["\\sin","\\cos","\\tan"][b(0,2)],s=e*Math.PI/180;let a,d;n==="\\sin"?a=Math.sin(s):n==="\\cos"?a=Math.cos(s):a=Math.tan(s);const p={"0.000":"0","1.000":"1","-1.000":"-1","0.500":"\\frac{1}{2}","-0.500":"-\\frac{1}{2}","0.707":"\\frac{\\sqrt{2}}{2}","-0.707":"-\\frac{\\sqrt{2}}{2}","0.866":"\\frac{\\sqrt{3}}{2}","-0.866":"-\\frac{\\sqrt{3}}{2}","1.732":"\\sqrt{3}","-1.732":"-\\sqrt{3}","0.577":"\\frac{\\sqrt{3}}{3}","-0.577":"-\\frac{\\sqrt{3}}{3}"};if(Math.abs(a)>100)return o[0]();const u=a.toFixed(3);return d=p[u]||u,{q:`${n} ${e}^\\circ`,ans:d,core:a.toFixed(5),base:"trig"}}];return o[b(0,o.length-1)]()}},l=(o,t)=>Math.floor(Math.random()*(t-o+1))+o,C={title:"수열의 기초 (등차와 등비)",max:10,generator:()=>{const o=[()=>{const t=l(1,15),e=l(2,10),r=l(5,20),n=t+(r-1)*e;return{text:`첫째항이 ${t}, 공차가 ${e}인 등차수열의 제 ${r}항은?`,math:null,ans:`${n}`,core:n,base:"arithmetic"}},()=>{const t=l(1,5),e=[2,3][l(0,1)],r=l(3,6),n=t*Math.pow(e,r-1);return{text:"다음 수열의 규칙을 만족하는 다음 항은?",math:`${seq.join(", ")}, \\dots`,ans:`${n}`,core:n,base:isArithmetic?"arithmetic":"geometric"}},()=>{const t=Math.random()>.5;let e=[],r;if(t){const n=l(1,10),s=l(2,8);e=[n,n+s,n+2*s],r=n+3*s}else{const n=l(1,5),s=l(2,3);e=[n,n*s,n*s*s],r=n*Math.pow(s,3)}return{q:`${e.join(", ")}, \\dots \\text{ 의 규칙을 만족하는 다음 항은?}`,ans:`${r}`,core:r,base:t?"arithmetic":"geometric"}},()=>{const t=l(1,20),e=l(2,10),r=t+e,n=t+2*e;return{text:`${t}, x, ${n}가 이 순서대로 등차수열을 이룰 때`,math:"x",ans:`${r}`,core:r,base:"arithmetic"}}];return o[l(0,o.length-1)]()}};function $(o){return`padding:20px; color:#fff; background:${o}; border:none; border-radius:15px; font-weight:bold; font-size:18px; cursor:pointer;`}function w(){const o=document.getElementById("view-root");o.innerHTML=`
        <div style="display:flex; flex-direction:column; justify-content:center; height:100%; text-align:center; gap:20px;">
            <h2 style="margin:0;">👋 반가워요!<br>이름을 알려주세요.</h2>
            <input type="text" id="name-input" placeholder="이름 입력" style="padding:15px; border:2px solid #ddd; border-radius:12px; font-size:18px; text-align:center;">
            <button id="btn-login" style="${$("#4A90E2")}">시작하기</button>
        </div>
    `,document.getElementById("btn-login").onclick=()=>{const t=document.getElementById("name-input").value.trim();t?(localStorage.setItem("temp_student_name",t),M()):alert("이름을 입력해 주세요!")}}function M(){const o=localStorage.getItem("temp_student_name");if(!o){w();return}const t=document.getElementById("view-root");t.innerHTML=`
        <div style="display:flex; flex-direction:column; gap:15px; text-align:center;">
            <div style="margin: 10px 0; text-align:right; font-size:14px; color:#666;">
                <b>${o}</b>님 열공하세요! 
                <span id="btn-logout" style="text-decoration:underline; cursor:pointer; margin-left:10px; color:#999;">로그아웃</span>
            </div>
            <h2 style="margin: 0px 0;">🚀 기본내용 정복</h2>
            <button id="m1" style="${$("#4A90E2")}">H2-1_1 지수법칙(간단)</button>
            <button id="m2" style="${$("#27ae60")}">H2-1_2 로그의 계산(성질)</button>
            <button id="m3" style="${$("#f39c12")}">H2-1_3 삼각함수(호도법)</button>
            <button id="m4" style="${$("#e74c3c")}">H2-1_4 수열(등차,등비)</button>
        </div>
    `,document.getElementById("btn-logout").onclick=()=>{localStorage.removeItem("temp_student_name"),w()},document.getElementById("m1").onclick=()=>x(t,T),document.getElementById("m2").onclick=()=>x(t,V),document.getElementById("m3").onclick=()=>x(t,K),document.getElementById("m4").onclick=()=>x(t,C)}function D(){const o=document.body;S(o),M()}window.addEventListener("DOMContentLoaded",D);

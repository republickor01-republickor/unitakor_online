import{initializeApp as C}from"https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";import{getFirestore as H,addDoc as D,collection as P,serverTimestamp as V}from"https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function G(e){e.innerHTML=`
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
        height: 100%;
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
  `}function R(e){const t=document.getElementById("view-root");if(!t)return;t.innerHTML=`
      <div style="
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        height:100%;
        gap:20px;
      ">
        <h2>👋 반갑습니다!</h2>
        <input id="name-input" placeholder="이름 입력"
          style="padding:12px; width:200px;" />
        <button id="btn-login">입장</button>
      </div>
    `;const n=document.getElementById("name-input");n.focus(),document.getElementById("btn-login").onclick=()=>{const o=n.value.trim();if(!o)return alert("이름을 입력하세요");sessionStorage.setItem("temp_student_name",o),e()}}const U={apiKey:"AIzaSyBpG-uKT3J8S9DcPewHp7gWOVZBTOByGGc",authDomain:"unitakor-div.firebaseapp.com",projectId:"unitakor-div",storageBucket:"unitakor-div.firebasestorage.app",messagingSenderId:"247399603524",appId:"1:247399603524:web:33f6b39e93b3fe0e628b11",measurementId:"G-P7WX2W4DLK"},F=C(U),K=H(F);async function A(e,t,n,o){try{return await D(P(K,"math_results"),{studentName:e,score:t,total:n,unit:o,timestamp:V()}),!0}catch(r){return console.error("Error adding document: ",r),!1}}const k=(e,t,n,o="")=>{switch(e){case"circlePart":const s=Math.abs(n);return`(${t} + ${s})^{2}`;case"exp":return`${t}^{${n}}`;case"log":return`\\log_{${t}}{${n}}`;case"frac":return`\\frac{${t}}{${n}}`;case"sqrt":return o?`\\sqrt[${o}]{${t}}`:`\\sqrt{${t}}`;case"root":return`\\sqrt[${o}]{${t}^{${n}}}`;case"fracExp":return`${t}^{\\frac{${n}}{${o}}}`;default:return String(t)}};function W(e,t){return`${e}::${t}`}function I(e,t){return Math.floor(Math.random()*(t-e+1))+e}function J(e){const{base:t,core:n,ans:o}=e;let r=[o];new Set().add(W(t,n));const a=["0","1","-1","\\frac{1}{2}","-\\frac{1}{2}","\\frac{\\sqrt{2}}{2}","-\\frac{\\sqrt{2}}{2}","\\frac{\\sqrt{3}}{2}","-\\frac{\\sqrt{3}}{2}","\\sqrt{3}","-\\sqrt{3}"],{text:c,math:l}=e;let p=0;for(;r.length<5&&p<100;){p++;let i,b;if(t==="trig")i=a[I(0,a.length-1)],b=i;else if(t==="radian"||t==="degree"){const d=(Math.random()*20-10).toFixed(0);b=Number(n)+Number(d),i=t==="degree"?`${b}^\\circ`:`\\frac{${I(1,7)}\\pi}{${I(2,6)}}`}else if(t==="arithmetic"||t==="geometric"){const d=I(1,5)*(Math.random()>.5?1:-1);b=Number(o)+d,i=`${b}`}else{const d=Math.floor(Math.random()*21)-10;b=d,i=d===1?`${t}`:`${t}^{${d}}`,d===0&&(i="1")}r.includes(i)||r.push(i)}return r.sort(()=>Math.random()-.5)}function _(e,t){const n=sessionStorage.getItem("temp_student_name")||"학생",{title:o,generator:r,max:s=10}=t;let a=0,c=0;function l(){if(c>=s){p();return}const i=r(),{q:b,text:d,math:v,ans:T}=i,O=J(i);e.innerHTML=`
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
                        ${n} | ${o}
                    </div>
                    <div style="font-size:13px; 
                        font-weight:bold; 
                        color:#4A90E2;">
                        ${a}/${c}
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
                    ${b?`$$ ${b} $$`:`
                            ${d?`<div style="margin-bottom:8px;">${d}</div>`:""}
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
                    ${O.map((y,j)=>`
                    <button class="ans-btn" data-val="${y}" style="padding:12px 0; border:1px solid #ddd; border-radius:8px; background:#fff; cursor:pointer;">
                        <span style="color:#4A90E2; font-weight:bold; font-size:11px;">${j+1}</span><br>
                        <span style="font-size:16px; font-weight:600;">$$ ${y} $$</span>
                    </button>
                      `).join("")}
                </div>
            </div>
        </div>
      `,document.getElementById("btn-home").onclick=()=>location.reload(),e.querySelectorAll(".ans-btn").forEach(y=>{y.onclick=()=>{y.dataset.val===T?(a++,c++,l()):(y.style.borderColor="#ff4d4d",y.style.background="#fff0f0")}}),window.MathJax&&MathJax.typesetPromise([e])}function p(){e.innerHTML=`
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
      `,document.getElementById("btn-final-save").onclick=async()=>{console.log(n,a,s,o);const i=await A(n,a,s,o);alert(i?`저장 성공!
이름: ${n}
단원: ${o}
점수: ${a}/${s}`:"데이터 저장에 실패했습니다. 파이어베이스 설정을 확인하세요."),location.reload()},document.getElementById("btn-just-main").onclick=()=>{confirm("기록이 저장되지 않습니다. 정말 나갈까요?")&&location.reload()}}l()}const E=(e,t)=>Math.floor(Math.random()*(t-e+1))+e,Q=(e,t)=>t===0?"1":t===1?`${e}`:`${e}^{${t}}`,Z={title:"지수법칙 마스터 (범용 조립형)",generator:()=>{const t=E(2,3),n=E(2,4),o=`(a^{${t}})^{${n}}`,r=t*n,s=E(-5,5),a=`a^{${s}}`,c=E(1,6),l=`a^{${c}}`,p=`\\frac{${o} \\times ${a}}{${l}}`,i=r+s-c;return{q:p,ans:Q("a",i),core:i,base:"a"}}},u=(e,t)=>Math.floor(Math.random()*(t-e+1))+e,X={title:"로그의 정의와 성질 마스터",generator:()=>{const e=[()=>{const t=[2,3,5][u(0,2)],n=u(2,4),o=Math.pow(t,n);return{q:`${t}^{${n}} = ${o} \\text{ 일 때, } \\log_{${t}} ${o} \\text{ 의 값}`,ans:`${n}`,core:n,base:""}},()=>({q:`\\log_{${u(2,99)}} 1`,ans:"0",core:0,base:""}),()=>{const t=u(2,99);return{q:`\\log_{${t}} ${t}`,ans:"1",core:1,base:""}},()=>{const t=[2,3,5][u(0,1)],n=u(1,3),o=u(1,2),r=Math.pow(t,n),s=Math.pow(t,o);return{q:`\\log_{${t}} ${r} + \\log_{${t}} ${s}`,ans:`${n+o}`,core:n+o,base:""}},()=>{const n=u(4,6),o=u(1,3),r=Math.pow(2,n),s=Math.pow(2,o);return{q:`\\log_{2} ${r} - \\log_{2} ${s}`,ans:`${n-o}`,core:n-o,base:""}},()=>{const t=[2,3][u(0,1)],n=u(2,5),o=Math.pow(t,n);return{q:`\\log_{${t}} ${o}`,ans:`${n}`,core:n,base:""}},()=>{const n=u(2,3);return{q:`\\log_{${Math.pow(2,n)}} 2`,ans:`\\frac{1}{${n}}`,core:1/n,base:""}},()=>({q:"\\log_{2} 7 \\times \\log_{7} 2",ans:"1",core:1,base:""}),()=>{const t=u(2,9),n=u(2,15);return{q:`${t}^{\\log_{${t}} ${n}}`,ans:`${n}`,core:n,base:""}},()=>({q:"\\log_{2} 5 \\times \\log_{5} 8",ans:"3",core:3,base:""})];return e[u(0,e.length-1)]()}},w=(e,t)=>Math.floor(Math.random()*(t-e+1))+e,Y={title:"삼각함수의 기초와 동경",generator:()=>{const e=[()=>{const t=[30,45,60,90,120,135,150,180,210,240,270,300,315,330][w(0,13)],n=t*Math.PI/180,o=(p,i)=>i?o(i,p%i):p,r=o(t,180),s=t/r,a=180/r;let c=s===1?"":s.toString(),l=a===1?`${c}\\pi`:`\\frac{${c}\\pi}{${a}}`;return t===0&&(l="0"),t===180&&(l="\\pi"),{text:"다음 각도를 호도법으로 나타내시오",math:`${t}^\\circ`,ans:l,core:n.toFixed(5),base:"radian"}},()=>{const t=[{d:30,r:"\\frac{\\pi}{6}"},{d:45,r:"\\frac{\\pi}{4}"},{d:60,r:"\\frac{\\pi}{3}"},{d:90,r:"\\frac{\\pi}{2}"},{d:180,r:"\\pi"},{d:270,r:"\\frac{3\\pi}{2}"},{d:360,r:"2\\pi"}],n=t[w(0,t.length-1)];return{text:"다음 호도법을 육십분법으로 나타내면?",math:`${n.r}`,ans:`${n.d}^\\circ`,core:n.d,base:"degree"}},()=>{const t=[0,30,45,60,90,120,135,150,180,210,225,240,270,300,315,330],n=t[w(0,t.length-1)],r=["\\sin","\\cos","\\tan"][w(0,2)],s=n*Math.PI/180;let a,c;r==="\\sin"?a=Math.sin(s):r==="\\cos"?a=Math.cos(s):a=Math.tan(s);const l={"0.000":"0","1.000":"1","-1.000":"-1","0.500":"\\frac{1}{2}","-0.500":"-\\frac{1}{2}","0.707":"\\frac{\\sqrt{2}}{2}","-0.707":"-\\frac{\\sqrt{2}}{2}","0.866":"\\frac{\\sqrt{3}}{2}","-0.866":"-\\frac{\\sqrt{3}}{2}","1.732":"\\sqrt{3}","-1.732":"-\\sqrt{3}","0.577":"\\frac{\\sqrt{3}}{3}","-0.577":"-\\frac{\\sqrt{3}}{3}"};if(Math.abs(a)>100)return e[0]();const p=a.toFixed(3);return c=l[p]||p,{text:"다음 삼각함수의 값을 구하시오.",math:`${r} ${n}^\\circ`,ans:c,core:a.toFixed(5),base:"trig"}}];return e[w(0,e.length-1)]()}},f=(e,t)=>Math.floor(Math.random()*(t-e+1))+e,tt={title:"수열의 기초 (등차와 등비)",max:10,generator:()=>{const e=[()=>{const t=f(1,15),n=f(2,10),o=f(5,20),r=t+(o-1)*n;return{text:`첫째항이 ${t}, 공차가 ${n}인 등차수열의 제 ${o}항은?`,math:null,ans:`${r}`,core:r,base:"arithmetic"}},()=>{const t=f(1,5),n=[2,3][f(0,1)],o=f(3,6),r=t*Math.pow(n,o-1);return{text:"다음 수열의 규칙을 만족하는 다음 항은?",math:`${seq.join(", ")}, \\dots`,ans:`${r}`,core:r,base:isArithmetic?"arithmetic":"geometric"}},()=>{const t=Math.random()>.5;let n=[],o;if(t){const r=f(1,10),s=f(2,8);n=[r,r+s,r+2*s],o=r+3*s}else{const r=f(1,5),s=f(2,3);n=[r,r*s,r*s*s],o=r*Math.pow(s,3)}return{text:"아래의 귀칙을 만족하는 다음항의 값은 ?",math:`${n.join(", ")}, \\dots`,ans:`${o}`,core:o,base:t?"arithmetic":"geometric"}},()=>{const t=f(1,20),n=f(2,10),o=t+n,r=t+2*n;return{text:`${t}, x, ${r}가 이 순서대로 등차수열을 이룰 때`,math:"x",ans:`${o}`,core:o,base:"arithmetic"}}];return e[f(0,e.length-1)]()}};function et(e,t){const n=sessionStorage.getItem("temp_student_name");e.innerHTML=`
        <div style="display:flex; flex-direction:column; gap:15px; text-align:center;">
            <div style="margin: 10px 0; text-align:center; font-size:14px; color:#666;">
                <b>${n}</b>님 열공하세요! 
            </div>
            <h2 style="margin: 0px 0;">🚀 고2 대수 기본 정복</h2>
            <button id="m1" style="padding:15px; color:#fff; background:#4A90E2; border:none; border-radius:15px; font-weight:bold; font-size:18px;">H2-1_1 지수법칙(간단)</button>
            <button id="m2" style="padding:15px; color:#fff; background:#27ae60; border:none; border-radius:15px; font-weight:bold; font-size:18px;">H2-1_2 로그의 계산(성질)</button>
            <button id="m3" style="padding:15px; color:#fff; background:#f39c12; border:none; border-radius:15px; font-weight:bold; font-size:18px;">H2-1_3 삼각함수(호도법)</button>
            <button id="m4" style="padding:15px; color:#fff; background:#e74c3c; border:none; border-radius:15px; font-weight:bold; font-size:18px;">H2-1_4 수열(등차,등비)</button>
            <button id="btn-back" style="padding:15px; color:#fff; background:#666; border:none; border-radius:15px; margin-top:10px;">⬅ 뒤로가기</button>
        </div>
    `,document.getElementById("m1").onclick=()=>_(e,Z),document.getElementById("m2").onclick=()=>_(e,X),document.getElementById("m3").onclick=()=>_(e,Y),document.getElementById("m4").onclick=()=>_(e,tt),document.getElementById("btn-back").onclick=t}const g=(e,t)=>Math.floor(Math.random()*(t-e+1))+e,nt=e=>e.sort(()=>Math.random()-.5);function ot(e){if(e==null)return"UNKNOWN";const t=String(e).replace(/\s+/g,"");return/^\d+$/.test(t)?"NATURAL":/^\-?\d+(\.\d+)?$/.test(t)?"NUMBER":/^\d+\/\d+$/.test(t)?"FRACTION":/^\\sqrt\{.+\}$/.test(t)?"ROOT":/^\(.+,.+\)$/.test(t)?"COORD":/\)\s*,\s*\(/.test(t)?"PAIR":/평행|수직|일치/.test(t)?"RELATION":/확률|P\(/.test(t)?"PROB":/x=|y=/.test(t)?"EQUATION":/^\w+$/.test(t)?"STRING":"UNKNOWN"}const S={NATURAL:e=>{const t=parseInt(e),n=[-5,-2,-1,1,2,3,5];return String(t+n[g(0,n.length-1)])},NUMBER:e=>{const t=parseFloat(e),n=[-1,-.5,.5,1];return String((t+n[g(0,n.length-1)]).toFixed(1))},FRACTION:e=>{const[t,n]=e.split("/").map(Number),o=g(-2,2),r=g(1,3);return`${t+o}/${n+r}`},ROOT:()=>{const e=[2,3,5,6,7,10,13,17,19];return k("sqrt",e[g(0,e.length-1)])},COORD:()=>`(${g(-6,6)}, ${g(-6,6)})`,PAIR:()=>{const e=[2,3,5,8,10,13][g(0,5)],t=k("sqrt",e);return`(${t},0),(-${t},0)`},RELATION:e=>{const t=["평행","수직","일치"];return t.filter(n=>n!==e)[g(0,t.length-2)]},PROB:()=>{const e=g(1,4),t=g(e+1,6);return`${e}/${t}`},EQUATION:()=>`x=${g(-5,5)}`,STRING:()=>{const e=["참","거짓","가능","불가능"];return e[g(0,e.length-1)]},UNKNOWN:()=>String(g(1,20))};function rt(e,t=5){const n=String(e.answer.value),o=[n],r=ot(n),s=S[r]||S.UNKNOWN;for(;o.length<t;){const a=s(n);if(a==null)continue;o.some(l=>l.replace(/\s+/g,"")===a.replace(/\s+/g,""))||o.push(a)}return nt(o)}function st(e){var n;const t=(n=e.meta)==null?void 0:n.domain;switch(t){case"geometry":return rt(e);default:throw new Error(`옵션 생성기 없음: domain=${t}`)}}function at(e,t){const n=String(e).replace(/\s+/g,""),o=String(t).replace(/\s+/g,"");return n===o}function it(e,t){const{value:n,judge:o}=t;switch(o){case"coord":case"geometry":return at(e,n);case"simple":default:return String(e).trim()===String(n).trim()}}function M(e,t){const n=sessionStorage.getItem("temp_student_name")||"학생",{title:o="퀴즈",generator:r,max:s=10}=t;let a=0,c=0;debugLog("Quiz 2 ");function l(){if(c>=s){p();return}const i=r(),b=st(i);e.innerHTML=`
      <div style="display:flex; flex-direction:column; height:100%;">
        <div style="display:flex; justify-content:space-between; align-items:center; padding-bottom:10px; border-bottom:1px solid #eee;">
          <button id="btn-home" style="border:none; background:none; cursor:pointer; font-size:20px;">🏠</button>
          <div style="text-align:right;">
            <div style="font-size:10px; color:#999;">${n} | ${o}</div>
            <div style="font-size:13px; font-weight:bold; color:#4A90E2;">${a}/${c}</div>
          </div>
        </div>

        <div id="question-area" style="flex:1; display:flex; flex-direction:column; justify-content:center; align-items:stretch; text-align:center; padding: 0 10px;">
          <div style="font-size: 20px; margin-bottom: 15px; font-weight: bold; color:#333;">
            ${i.question.desc}
          </div>
          <div class="math-block">
            $$ ${i.question.latex} $$
          </div>
          <p style="font-size:18px; color:#333; margin:0;">의 값을 구하시오.</p>
        </div>

        <div style="padding:15px 0 5px 0; border-top:1px solid #eee;">
          <div id="answer-area" style="display:grid; grid-template-columns: repeat(2, 1fr); gap:8px;">
            ${b.map((d,v)=>`
              <button class="ans-btn" data-val="${d}" style="padding:15px 0; border:1px solid #ddd; border-radius:10px; background:#fff; cursor:pointer;">
                <span style="color:#4A90E2; font-weight:bold; font-size:11px;">${v+1}</span><br>
                <span style="font-size:16px; font-weight:600;">
                \\( ${d} \\)
                </span>
              </button>
            `).join("")}
          </div>
        </div>
      </div>
    `,document.getElementById("btn-home").onclick=()=>location.reload(),e.querySelectorAll(".ans-btn").forEach(d=>{d.onclick=()=>{it(d.dataset.val,i.answer)?(a++,c++,l()):(d.style.borderColor="#ff4d4d",d.style.background="#fff0f0")}}),window.MathJax&&MathJax.typesetPromise([e])}function p(){e.innerHTML=`
      <div style="text-align:center; padding-top:40px;">
        <h1 style="font-size:50px; margin:0;">🏆</h1>
        <h2>수고하셨습니다!</h2>
        <div style="background:#f8f9fa; padding:20px; border-radius:15px; margin:20px 0; font-size:20px;">
          정답: <b>${a}</b> / ${s}
        </div>
        
        <button id="btn-final-save" style="width:100%; padding:15px; background:#27ae60; color:#fff; border:none; border-radius:12px; font-size:16px; font-weight:bold; cursor:pointer; margin-bottom:10px;">
          기록 저장하고 메뉴로
        </button>
        
        <button id="btn-just-main" style="width:100%; padding:15px; background:#eee; color:#666; border:none; border-radius:12px; font-size:16px; cursor:pointer;">
          저장 없이 메뉴로
        </button>
      </div>
    `,document.getElementById("btn-final-save").onclick=async()=>{const i=await A(n,a,s,o);alert(i?`저장 성공!
이름: ${n}
단원: ${o}
점수: ${a}/${s}`:"데이터 저장에 실패했습니다."),location.reload()},document.getElementById("btn-just-main").onclick=()=>{confirm("기록이 저장되지 않습니다. 정말 나갈까요?")&&location.reload()}}l()}const $=e=>`
    padding: 12px 25px;       /* 위아래 15px, 좌우 25px 여백 */
    color: #fff;              /* 글자색: 흰색 */
    background: ${e};         /* 배경색: 입력받은 색상 */
    border: none;             /* 테두리 제거 */
    border-radius: 12px;      /* 모서리 둥글기 */
    font-weight: bold;        /* 글자 굵게 */
    font-size: 16px;          /* 글자 크기 */
    cursor: pointer;          /* 마우스 올리면 손가락 모양 */
    box-shadow: 0 4px 6px rgba(0,0,0,0.1); /* 은은한 그림자 */
    transition: all 0.2s;     /* 반응 속도 (부드럽게) */
`;function x(e,t){return Math.floor(Math.random()*(t-e+1))+e}function ct(){const e=x(-4,4),t=x(-4,4),n=x(2,6),o=(r,s)=>s===0?`${r}^2`:s>0?`(${r} - ${s})^2`:`(${r} + ${Math.abs(s)})^2`;return{meta:{domain:"geometry"},question:{latex:`${o("x",e)} + ${o("y",t)} = ${n*n}`,desc:"원의 중심좌표를 구하시오"},answer:{value:`(${e}, ${t})`,judge:"coord"}}}function dt(){const e=x(1,5);return{meta:{domain:"geometry",type:"parabola"},question:{latex:`y^2 = ${4*e}x`,desc:"포물선의 초점의 좌표를 구하시오."},answer:{value:`(${e}, 0)`,judge:"coord"}}}function lt(){const e=x(5,8),t=x(3,e-1),n=e*e-t*t,o=k("sqrt",n);return{meta:{domain:"geometry",type:"ellipse"},question:{latex:`\\frac{x^2}{${e*e}} + \\frac{y^2}{${t*t}} = 1`,desc:"타원의 두 초점의 좌표를 모두 구하시오."},answer:{value:`(${o}, 0), (-${o}, 0)`,judge:"coord"}}}function ut(){const e=x(2,5),t=x(2,5),n=e*e+t*t,o=k("sqrt",n);return{meta:{domain:"geometry",type:"hyperbola"},question:{latex:`\\frac{x^2}{${e*e}} - \\frac{y^2}{${t*t}} = 1`,desc:"쌍곡선의 두 초점의 좌표를 모두 구하시오."},answer:{value:`(${o}, 0), (-${o}, 0)`,judge:"coord"}}}const pt={title:"고2 기하 - 이차곡선 기본 (원·타원·포물선·쌍곡선)",max:10,generator:()=>{switch(x(0,3)){case 0:return ct();case 1:return dt();case 2:return lt();case 3:return ut()}}};function m(e,t){return Math.floor(Math.random()*(t-e+1))+e}function gt(){const e=m(-5,5),t=m(-5,5),n=m(-5,5),o=m(-5,5),r=m(0,1)===0?"+":"-",s=r==="+"?e+n:e-n,a=r==="+"?t+o:t-o;return{meta:{domain:"geometry",type:"vector_calc"},question:{latex:`
        \\begin{array}{l}
        \\vec{a}=(${e}, ${t}),\\ \\vec{b}=(${n}, ${o}) \\\\ % 두 벡터의 성분 제시
        \\text{일 때, } \\vec{a} ${r} \\vec{b}              % 벡터 연산 지시
        \\end{array}
        `,desc:"결과 벡터의 성분을 구하시오."},answer:{value:`(${s}, ${a})`,judge:"coord"}}}function ft(){const e=[[3,4],[6,8],[5,12],[8,15]],t=e[m(0,e.length-1)],n=t[0]*(m(0,1)?1:-1),o=t[1]*(m(0,1)?1:-1),r=Math.sqrt(n*n+o*o);return{meta:{domain:"geometry",type:"vector_size"},question:{latex:`\\vec{a}=(${n}, ${o})`,desc:"벡터의 크기 를 구하시오."},answer:{value:`${r}`,judge:"number"}}}function mt(){const e=m(-3,3),t=m(-3,3),n=m(2,4);return{meta:{domain:"geometry",type:"vector_scalar"},question:{latex:`\\vec{a}=(${e}, ${t})\\text{일 때, } ${n}\\vec{a}`,desc:"실수배한 벡터의 성분을 구하시오."},answer:{value:`(${n*e}, ${n*t})`,judge:"coord"}}}const bt={title:"고2 기하 - 평면벡터 기초 (성분과 연산)",max:10,generator:()=>{const e=m(0,2);return e===0?gt():e===1?ft():mt()}};function h(e,t){return Math.floor(Math.random()*(t-e+1))+e}function $t(){const e=h(1,5),t=h(1,5),n=h(1,5),o=e*e+t*t+n*n;return{meta:{domain:"geometry",type:"space_distance"},question:{latex:`
        \\begin{array}{l}
        A(0,0,0),\\ B(${e}, ${t}, ${n})일 때, \\\\
        두 점 A, B 사이의 거리를 구하시오.
        \\end{array}
        `,desc:"공간에서의 두 점 사이의 거리 공식을 이용하시오."},answer:{value:`\\sqrt{${o}}`,judge:"latex"}}}function xt(){const e=h(2,6);return{meta:{domain:"geometry",type:"point_plane_distance"},question:{latex:`
        \\begin{array}{l}
        점 P(${e}, 0, 0)에서 \\\\
        평면 x = 0 까지의 거리를 구하시오.
        \\end{array}
        `,desc:"공간에서의 거리는 항상 수선의 길이이다."},answer:{value:`${e}`,judge:"number"}}}function yt(){const e=h(2,6),t=h(2,6),n=e*t/2;return{meta:{domain:"geometry",type:"space_triangle_area"},question:{latex:`
        \\begin{aligned}
        A(0,0,0),\\ B(${e},0,0),\\ C(0,${t},0) &\\text{일 때} \\\\
        \\triangle ABC의 넓이를 구하시오.
        \\end{aligned}
        `,desc:"같은 평면 위에서는 평면도형으로 생각한다."},answer:{value:`${n}`,judge:"number"}}}function ht(){return{meta:{domain:"geometry",type:"space_line_relation"},question:{latex:`
        \\begin{array}{l}
        직선 l_1의 방향벡터가 (1, 2, 3), \\\\
        직선 l_2의 방향벡터가 (2, 4, 6)일 때, \\\\
        두 직선의 관계를 판별하시오.
        \\end{array}
        `,desc:"방향벡터를 이용하여 판별하시오."},answer:{value:"평행",judge:"string"}}}const wt={title:"고2 기하 - 공간좌표 기초",max:10,generator:()=>{const e=h(0,3);return e===0?$t():e===1?xt():e===2?yt():ht()}};function vt(e,t){const n=sessionStorage.getItem("temp_student_name");e.innerHTML=`
    <div style="display:flex; flex-direction:column; gap:15px; text-align:center;">
      <div style="font-size:14px; color:#666;">
        <b>${n}</b>님 열공하세요!
      </div>

      <h2>📐 고2 기하</h2>

      <button id="g1" style="${$("#8E44AD")}">📏 도형</button>
      <button id="g2" style="${$("#16A085")}">🧭 벡터</button>
      <button id="g3" style="${$("#2C3E50")}">📦 공간도형</button>

      <button id="btn-back"
        style="padding:15px; background:#666; color:#fff; border:none; border-radius:15px;">
        ⬅ 뒤로가기
      </button>
    </div>
  `,document.getElementById("g1").onclick=()=>{debugLog("도형호출출"),M(e,pt)},document.getElementById("g2").onclick=()=>{debugLog("백터터호출"),M(e,bt)},document.getElementById("g3").onclick=()=>{debugLog("공간도형호출"),M(e,wt)},document.getElementById("btn-back").onclick=t}function B(e){const t=document.getElementById("view-root");if(!t)return;debugLog(),t.innerHTML=`
    <div style="display:flex; flex-direction:column; gap:5px; text-align:center; padding: 0px 0;">
      <h2 style="margin-bottom:10px;">🏫 고등 수학 과정</h2>

      <button id="go-math1" style="${$("#4A90E2")}">
        <span style="color: yellow; opacity: 0.5;">📘 공통수학 1 (작업중) </span>
      </button>
      <button id="go-math2" style="${$("#34A853")}">
        <span style="color: yellow; opacity: 0.5;">📗 공통수학 2 (작업중) </span>
      </button>
      <button id="btn-algebra" style="${$("#2C3E50")}">
      📐 대수 (수학Ⅰ) 
      </button>
      <button id="btn-calculus" style="${$("#E74C3C")}">
        <span style="color: yellow; opacity: 0.5;">📈 미적분 (수Ⅱ) (작업중) </span>
      </button>
      <button id="go-calculus2" style="${$("#E67E22")}">
        <span style="color: yellow; opacity: 0.5;">📙 미적분 Ⅱ (작업중) </span>
      </button>
      <button id="btn-geometry" style="${$("#9B59B6")}">
      🌍 기하
      </button>
      <button id="go-stats" style="${$("#F1C40F")}">
        <span style="color: yellow; opacity: 0.5;">🎲 확률과 통계(작업중)</span>
      </button>
      <span id="btn-back" style="margin-top:15px; color:#999; cursor:pointer; text-decoration:underline;">
        ← 이전 화면으로
      </span>
    </div>
  `,document.getElementById("btn-algebra").onclick=()=>{et(t,()=>B(e))};const n=()=>alert("해당 과정은 현재 교재 제작 중입니다! 😊");document.getElementById("go-math1").onclick=n,document.getElementById("go-math2").onclick=n,document.getElementById("btn-calculus").onclick=n,document.getElementById("go-calculus2").onclick=n,document.getElementById("btn-geometry").onclick=()=>{vt(t,()=>B(e))},document.getElementById("go-stats").onclick=n,document.getElementById("btn-back").onclick=e}function N(){const e=document.getElementById("view-root"),t=sessionStorage.getItem("temp_student_name");t&&(debugLog("여기어디"),e.innerHTML=`
    <div style="text-align:center;">
      <p><b>${t}</b>님 환영합니다</p>
      <button id="btn-middle">중등</button>
      <button id="btn-high">고등</button>
      <span id="btn-logout">로그아웃</span>
    </div>
  `,document.getElementById("btn-high").onclick=()=>{B(N)},document.getElementById("btn-logout").onclick=()=>{sessionStorage.removeItem("temp_student_name"),location.reload()})}const z=30,It=z*60*1e3;let q;function L(){q&&clearTimeout(q),q=setTimeout(()=>{_t()},It)}function _t(){alert(`${z}분 동안 활동이 없어 자동 로그아웃됩니다.`),sessionStorage.removeItem("temp_student_name"),location.reload()}function Et(){["mousedown","mousemove","keypress","scroll","touchstart"].forEach(t=>{window.removeEventListener(t,L),window.addEventListener(t,L)}),L(),console.log("감시 시작됨!")}window.DEBUG_ENABLED=!0;window.__DEBUG_CONSOLE_INITIALIZED__||(window.__DEBUG_CONSOLE_INITIALIZED__=!0,window.debugLog=function(e="지점 통과"){var s;if(!window.DEBUG_ENABLED)return;const r=((((s=new Error().stack)==null?void 0:s.split(`
`))||[])[2]||"").match(/(?:at\s+)?(.+):(\d+):(\d+)/);if(r){const a=r[1].split("/").pop().replace(/\?.*$/,""),c=r[2];console.log(`%c[${a}:${c}]%c ${e}`,"color:#00ff00;background:#222;font-weight:bold;padding:2px 6px;border-radius:4px;","color:#fff;background:#444;padding:2px 6px;border-radius:4px;")}else console.log(`[DEBUG] ${e}`)},console.log("🟢 Global Debug Console Ready"));window.addEventListener("DOMContentLoaded",()=>{G(document.body),sessionStorage.getItem("temp_student_name")?(Et(),N()):R(N)});

import{initializeApp as $}from"https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";import{getFirestore as w,addDoc as E,collection as I,serverTimestamp as k}from"https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function i(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=i(n);fetch(n.href,o)}})();function z(e){e.innerHTML=`
  <!-- 전체 환경 -->
    <div id="app-viewport" style="
      width:100vw;
      height:100vh;
      background:#0b0b0b;
      display:flex;
      justify-content:center;
      align-items:center;
    ">

    <!-- 쓰는  환경 -->
      <div id="app-stage" style="
        width:min(88vw, 420px);
        height:min(80vh, 720px);
        background:#fff;
        border-radius:16px;
        padding:24px;
        box-sizing:border-box;
        display:flex;
        flex-direction:column;
        box-shadow: 0 10px 25px rgba(0,0,0,0.5);
      ">
        <div id="view-root"
             style="flex:1; display:flex; flex-direction:column;">
        </div>
      </div>
    </div>
  `}const L={apiKey:"AIzaSyBpG-uKT3J8S9DcPewHp7gWOVZBTOByGGc",authDomain:"unitakor-div.firebaseapp.com",projectId:"unitakor-div",storageBucket:"unitakor-div.firebasestorage.app",messagingSenderId:"247399603524",appId:"1:247399603524:web:33f6b39e93b3fe0e628b11",measurementId:"G-P7WX2W4DLK"},S=$(L),B=w(S);async function M(e,t,i,s){try{return await E(I(B,"math_results"),{studentName:e,score:t,total:i,unit:s,timestamp:k()}),!0}catch(n){return console.error("Error adding document: ",n),!1}}const m=(e,t)=>{const i=Number(t);return i===0?"CONST_1":i===1?`BASE_${e}`:`BASE_${e}_EXP_${i.toFixed(1)}`};function _(e){const{base:t,core:i,ans:s}=e;let n=[s],o=new Set;for(o.add(m(t,i));n.length<5;){const r=Math.floor(Math.random()*21)-10,d=m(t,r);if(o.has(d))continue;let a=r===1?`${t}`:`${t}^{${r}}`;r===0&&(a="1"),n.push(a),o.add(d)}return n.sort(()=>Math.random()-.5)}function A(e,t){const i=localStorage.getItem("temp_student_name")||"학생",{title:s,generator:n,max:o=10}=t;let r=0,d=0;function a(){if(d>=o){f();return}const l=n(),{q:x,ans:y}=l,h=_(l);e.innerHTML=`
          <div style="display:flex; flex-direction:column; height:100%;">
              <div style="display:flex; justify-content:space-between; align-items:center; padding-bottom:10px; border-bottom:1px solid #eee;">
                  <button id="btn-home" style="border:none; background:none; cursor:pointer; font-size:20px;">🏠</button>
                  <div style="text-align:right;">
                      <div style="font-size:10px; color:#999;">${i} | ${s}</div>
                      <div style="font-size:13px; font-weight:bold; color:#4A90E2;">${r}/${d}</div>
                  </div>
              </div>

              <div id="question-area" style="flex:1; display:flex; flex-direction:column; justify-content:center; align-items:center; text-align:center;">
                  <div style="font-size:36px; margin-bottom:15px; width:100%;"> $$ ${x} $$ </div>
                  <p style="font-size:18px; color:#333; margin:0;">의 값을 구하시오.</p>
              </div>

              <div style="padding:15px 0 5px 0; border-top:1px solid #eee;">
                  <div id="answer-area" style="display:grid; grid-template-columns: repeat(5, 1fr); gap:6px;">
                      ${h.map((c,v)=>`
                          <button class="ans-btn" data-val="${c}" style="padding:12px 0; border:1px solid #ddd; border-radius:8px; background:#fff; cursor:pointer;">
                              <span style="color:#4A90E2; font-weight:bold; font-size:11px;">${v+1}</span><br>
                              <span style="font-size:16px; font-weight:600;">$$ ${c} $$</span>
                          </button>
                      `).join("")}
                  </div>
              </div>
          </div>
      `,document.getElementById("btn-home").onclick=()=>location.reload(),e.querySelectorAll(".ans-btn").forEach(c=>{c.onclick=()=>{c.dataset.val===y?(r++,d++,a()):(c.style.borderColor="#ff4d4d",c.style.background="#fff0f0")}}),window.MathJax&&MathJax.typesetPromise([e])}function f(){e.innerHTML=`
          <div style="text-align:center; padding-top:40px;">
              <h1 style="font-size:50px; margin:0;">🏆</h1>
              <h2>수고하셨습니다!</h2>
              <div style="background:#f8f9fa; padding:20px; border-radius:15px; margin:20px 0; font-size:20px;">
                  정답: <b>${r}</b> / ${o}
              </div>
              <button id="btn-final-save" style="width:100%; padding:15px; background:#27ae60; color:#fff; border:none; border-radius:12px; font-size:16px; font-weight:bold; cursor:pointer;">기록 저장하고 메뉴로</button>
              <button id="btn-just-main" style="width:100%; padding:15px; background:#eee; color:#666; border:none; border-radius:12px; font-size:16px; cursor:pointer;">
                        저장 없이 메뉴로
                    </button>
          </div>
      `,document.getElementById("btn-final-save").onclick=async()=>{console.log(i,r,o,s);const l=await M(i,r,o,s);alert(l?`저장 성공!
이름: ${i}
단원: ${s}
점수: ${r}/${o}`:"데이터 저장에 실패했습니다. 파이어베이스 설정을 확인하세요."),location.reload()},document.getElementById("btn-just-main").onclick=()=>{confirm("기록이 저장되지 않습니다. 정말 나갈까요?")&&location.reload()}}a()}const p=(e,t)=>Math.floor(Math.random()*(t-e+1))+e,H=(e,t)=>t===0?"1":t===1?`${e}`:`${e}^{${t}}`,O={title:"지수법칙 마스터 (범용 조립형)",generator:()=>{const t=p(2,3),i=p(2,4),s=`(a^{${t}})^{${i}}`,n=t*i,o=p(-5,5),r=`a^{${o}}`,d=p(1,6),a=`a^{${d}}`,f=`\\frac{${s} \\times ${r}}{${a}}`,l=n+o-d;return{q:f,ans:H("a",l),core:l,base:"a"}}};function u(e){return`padding:20px; color:#fff; background:${e}; border:none; border-radius:15px; font-weight:bold; font-size:18px; cursor:pointer;`}function g(){const e=document.getElementById("view-root");e.innerHTML=`
        <div style="display:flex; flex-direction:column; justify-content:center; height:100%; text-align:center; gap:20px;">
            <h2 style="margin:0;">👋 반가워요!<br>이름을 알려주세요.</h2>
            <input type="text" id="name-input" placeholder="이름 입력" style="padding:15px; border:2px solid #ddd; border-radius:12px; font-size:18px; text-align:center;">
            <button id="btn-login" style="${u("#4A90E2")}">시작하기</button>
        </div>
    `,document.getElementById("btn-login").onclick=()=>{const t=document.getElementById("name-input").value.trim();t?(localStorage.setItem("temp_student_name",t),b()):alert("이름을 입력해 주세요!")}}function b(){const e=localStorage.getItem("temp_student_name");if(!e){g();return}const t=document.getElementById("view-root");t.innerHTML=`
        <div style="display:flex; flex-direction:column; gap:15px; text-align:center;">
            <div style="margin: 10px 0; text-align:right; font-size:14px; color:#666;">
                <b>${e}</b>님 열공하세요! 
                <span id="btn-logout" style="text-decoration:underline; cursor:pointer; margin-left:10px; color:#999;">로그아웃</span>
            </div>
            <h2 style="margin: 0px 0;">🚀 수능 2점 정복</h2>
            <button id="m1" style="${u("#4A90E2")}">H2-1 지수법칙</button>
            <button id="m2" style="${u("#27ae60")}">H2-2 로그의 계산(작업중)</button>
            <button id="m3" style="${u("#f39c12")}">H2-3 삼각함수(작업중)</button>
            <button id="m4" style="${u("#e74c3c")}">H2-4 미분기초(작업중)</button>
        </div>
    `,document.getElementById("btn-logout").onclick=()=>{localStorage.removeItem("temp_student_name"),g()},document.getElementById("m1").onclick=()=>A(t,O)}function T(){const e=document.body;z(e),b()}window.addEventListener("DOMContentLoaded",T);

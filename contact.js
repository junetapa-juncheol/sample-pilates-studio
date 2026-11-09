'use strict';
document.getElementById('inquiry-form').addEventListener('submit',e=>{e.preventDefault();const f=e.currentTarget;if(!f.reportValidity())return;const r=document.getElementById('inquiry-result');r.hidden=false;r.textContent='체험 완료: '+f.elements.topic.value+' / '+f.elements.question.value+'. 내용은 저장·전송되지 않았습니다.';});

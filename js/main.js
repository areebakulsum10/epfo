// Chat Widget Toggle
const chatHeader = document.getElementById("chatHeader");
const chatContent = document.getElementById("chatContent");
chatHeader.addEventListener("click", ()=>{chatContent.style.display=chatContent.style.display==="block"?"none":"block";});
chatHeader.addEventListener("keypress",(e)=>{if(e.key==="Enter") chatHeader.click();});

// Chat Functionality
const sendBtn = document.getElementById("sendBtn");
const userInput = document.getElementById("userInput");
const chatMessages = document.getElementById("chatMessages");

function addMessage(text,sender="bot"){
  const msg=document.createElement("div");
  msg.textContent=text;
  msg.className=`message ${sender}`;
  chatMessages.appendChild(msg);
  chatMessages.scrollTop=chatMessages.scrollHeight;
  if(sender==="bot" && window.speechSynthesis){
    const utter=new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utter);
  }
}

function botReply(msg){
  msg=msg.toLowerCase();
  if(msg.includes("hi")||msg.includes("hello")) return "Hello! Welcome to JobPortal. How can we help you today?";
  if(msg.includes("jobs")||msg.includes("openings")) return "We have Frontend, Backend, and UX Designer jobs available. Use the filters above to narrow down.";
  if(msg.includes("apply")) return "You can submit your application using the form in the 'Apply' page.";
  if(msg.includes("contact")) return "You can contact us via email at info@jobportal.com or call +91 1234567890.";
  return "Sorry, I didn't understand that. Please ask about jobs, applications, or contact info.";
}

sendBtn.addEventListener("click",()=>{
  const text=userInput.value.trim();
  if(!text) return;
  addMessage(text,"user");
  userInput.value="";
  setTimeout(()=>addMessage(botReply(text),"bot"),500);
});
userInput.addEventListener("keypress",(e)=>{if(e.key==="Enter") sendBtn.click();});

// Form Submission (apply/contact)
const appForm=document.getElementById("applicationForm");
if(appForm){
  appForm.addEventListener("submit", e=>{
    e.preventDefault();
    document.getElementById("formMessage").textContent="Application submitted successfully!";
    e.target.reset();
  });
}
const contactForm=document.getElementById("contactForm");
if(contactForm){
  contactForm.addEventListener("submit", e=>{
    e.preventDefault();
    document.getElementById("contactMessage").textContent="Message sent successfully!";
    e.target.reset();
  });
}

(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{113:function(e,t,a){e.exports=a(252)},252:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(26),i=a.n(l),o=a(3),c=a(4),s=a(6),m=a(5),u=a(7),d=a(254),h=a(256),p=a(255),g=a(2),E=a(107),b=a.n(E)()({projectId:"p2bdzhxh",dataset:"projects",useCdn:!0}),f=(a(84),a(70)),C=a(46),j=a.n(C),v=a(12),O=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={animate:!1},a.gotoExperience=a.gotoExperience.bind(Object(g.a)(Object(g.a)(a))),a.gotoSkills=a.gotoSkills.bind(Object(g.a)(Object(g.a)(a))),a.gotoContact=a.gotoContact.bind(Object(g.a)(Object(g.a)(a))),a.gotoProjects=a.gotoProjects.bind(Object(g.a)(Object(g.a)(a))),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"gotoProjects",value:function(){console.log("firing"),v.scroller.scrollTo("projects",{delay:0,duration:800,smooth:"easeInOutQuart"})}},{key:"gotoExperience",value:function(){v.scroller.scrollTo("journey",{delay:0,duration:800,smooth:"easeInOutQuart"})}},{key:"gotoSkills",value:function(){v.scroller.scrollTo("speak-code",{duration:800,delay:0,smooth:"easeInOutQuart"})}},{key:"gotoContact",value:function(){v.scroller.scrollTo("lets-talk",{duration:800,delay:0,smooth:"easeInOutQuart"})}},{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.setState({animate:!0})},3500)}},{key:"render",value:function(){return r.a.createElement("section",{className:"header"},r.a.createElement("div",{className:"headerContent"},r.a.createElement("a",{href:"/",className:"headerLogo"},"Dane Brown"),r.a.createElement("ul",{className:"headerNavigation"},r.a.createElement("a",{href:"#1",onClick:this.gotoSkills},r.a.createElement("li",null,"Skills")),r.a.createElement("a",{href:"#1",onClick:this.gotoExperience},r.a.createElement("li",null,"Experience")),r.a.createElement("a",{href:"#1",onClick:this.gotoProjects},r.a.createElement("li",null,"Projects")),r.a.createElement("a",{href:"#1",onClick:this.gotoContact},r.a.createElement("li",null,"Contact")))),r.a.createElement("div",{className:"container header-container"},r.a.createElement("div",{className:"header-line "+(this.state.animate?"animate":"")}),r.a.createElement(j.a,{className:"headerHello",avgTypingDelay:300,delay:150,cursor:{show:!1}},"<hello>",r.a.createElement(j.a.Backspace,{count:1,delay:600}),r.a.createElement(j.a.Delay,{ms:300}),"/>")))}}]),t}(n.Component),k=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container skills"},this.props.skills.map(function(t,a){var n={transitionDelay:.15*a+"s",width:t.percentage+"%"};return r.a.createElement("div",{className:"skill-item",key:t._id},r.a.createElement("div",{className:"skill-heading"},t.name),r.a.createElement("div",{className:"skill-details"},r.a.createElement("div",{className:"skill-bar"},r.a.createElement("div",{className:"skill-fill",style:e.props.animate?n:{}})),r.a.createElement("div",{className:"skill-percentage"},t.percentage,"%")))}))}}]),t}(n.Component),y=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container experience"},this.props.experience.map(function(t,a){var n={transitionDelay:.35*a+"s"};return r.a.createElement("div",{key:t._id,style:n,className:"experience-item "+("right"===t.position?"right":"")+(e.props.animate?" animate":"")},r.a.createElement("div",{className:"experience-timeline"},t.timeline),r.a.createElement("p",null,t.description),r.a.createElement("div",{className:"experience-dot"}))}))}}]),t}(n.Component),w=a(108),N=a.n(w),x=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={nameToggled:!1,emailToggled:!1,contactToggled:!1,messageToggled:!1},a.handleName=a.handleName.bind(Object(g.a)(Object(g.a)(a))),a.handleEmail=a.handleEmail.bind(Object(g.a)(Object(g.a)(a))),a.handleContact=a.handleContact.bind(Object(g.a)(Object(g.a)(a))),a.handleMessage=a.handleMessage.bind(Object(g.a)(Object(g.a)(a))),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"handleName",value:function(){this.setState({nameToggled:!0})}},{key:"handleEmail",value:function(){this.setState({emailToggled:!0})}},{key:"handleContact",value:function(){this.setState({contactToggled:!0})}},{key:"handleMessage",value:function(){this.setState({messageToggled:!0})}},{key:"render",value:function(){return r.a.createElement("form",{ref:"form",action:"https://formspree.io/danebrwn47@gmail.com",method:"POST"},r.a.createElement("div",{className:"main-headings"},"LET'S TALK"),r.a.createElement("div",{className:"input-holder",onClick:this.handleName,onChange:this.handleName},r.a.createElement("div",{className:"placeholder "+(this.state.nameToggled?"animate":"")},"Name"),r.a.createElement("input",{type:"text",name:"name",id:"form-name",required:!0})),r.a.createElement("div",{className:"input-holder",onClick:this.handleEmail,onChange:this.handleEmail},r.a.createElement("div",{className:"placeholder "+(this.state.emailToggled?"animate":"")},"Email Address"),r.a.createElement("input",{type:"email",name:"email",id:"form-email",required:!0})),r.a.createElement("div",{className:"input-holder",onClick:this.handleContact,onChange:this.handleContact},r.a.createElement("div",{className:"placeholder "+(this.state.contactToggled?"animate":"")},"Contact Number"),r.a.createElement("input",{type:"tel",name:"contact",id:"form-contact",required:!0})),r.a.createElement("div",{className:"input-holder",onClick:this.handleMessage,onChange:this.handleMessage},r.a.createElement("div",{className:"placeholder "+(this.state.messageToggled?"animate":"")},"Message"),r.a.createElement("textarea",{className:"special",name:"message",id:"form-message",cols:"30",rows:"10"})),r.a.createElement("input",{className:"form-submit",type:"submit",value:"SPAM ME!"}))}}]),t}(n.Component),S=a(110),M=a.n(S)()(b);var T=function(e){return M.image(e)},_=a(111),V=a.n(_),I=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.slider.slickGoTo(0)}},{key:"render",value:function(){var e=this;return r.a.createElement(V.a,Object.assign({ref:function(t){return e.slider=t}},{dots:!0,arrows:!1,speed:500,autoplay:!1,autoplaySpeed:4e3,pauseOnHover:!0,slidesToShow:4,slidesToScroll:1,responsive:[{breakpoint:900,settings:{slidesToShow:2}},{breakpoint:500,settings:{slidesToShow:1}}]}),this.props.projects.map(function(e){var t={backgroundImage:"url("+T(e.first_image).url()+")"},a={backgroundImage:"url("+T(e.second_image).url()+")"};return r.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"slider-item",key:e._id},r.a.createElement("div",{className:"first-image",style:t}),r.a.createElement("div",{className:"second-image",style:a}))}))}}]),t}(n.Component),H=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={isMain:!0,animate:!1},a.toggleView=a.toggleView.bind(Object(g.a)(Object(g.a)(a))),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"toggleView",value:function(){var e=this;setTimeout(function(){e.state.isMain?e.setState({isMain:!1}):e.setState({isMain:!0})},1500),this.setState({animate:!0}),v.animateScroll.scrollTo("projects",{duration:650,delay:0,offset:-100,smooth:"easeInOut"})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"main-headings"},"SOME WORK")),r.a.createElement("div",{className:"container projects "+(this.state.isMain?"show":"hide")+(this.state.animate?" animate":"")},this.props.projects.map(function(e){var t={order:e.order,backgroundImage:"url("+T(e.first_image).url()+")"},a={backgroundImage:"url("+T(e.second_image).url()+")"};return r.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"project-item project-"+e.order,key:e._id,style:t},r.a.createElement("div",{className:"second-image",style:a}))}),r.a.createElement("div",{className:"project-item view-all"},r.a.createElement("div",{onClick:this.toggleView,className:"button"},"VIEW ALL"))),r.a.createElement("div",{className:"projects-all "+(this.state.isMain?"hide":"show")},r.a.createElement(I,{projects:this.props.projectsAll})))}}]),t}(n.Component),A=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("a",{href:"https://github.com/dane-brown",className:"footer-icon",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("svg",{width:"50",height:"51",viewBox:"0 0 50 51",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M24.9969 0.0268555C11.1938 0.0268555 0 11.5454 0 25.7546C0 37.1194 7.1625 46.7609 17.1 50.1658C18.35 50.4029 18.8062 49.6085 18.8062 48.9262C18.8062 48.3144 18.7844 46.6968 18.7719 44.5507C11.8188 46.1042 10.35 41.1009 10.35 41.1009C9.21562 38.1284 7.575 37.3372 7.575 37.3372C5.30312 35.742 7.74375 35.7741 7.74375 35.7741C10.2531 35.9566 11.5719 38.4263 11.5719 38.4263C13.8031 42.3565 17.425 41.2226 18.85 40.5628C19.075 38.9003 19.7219 37.7664 20.4375 37.1226C14.8875 36.4723 9.05 34.2654 9.05 24.4093C9.05 21.6001 10.025 19.3034 11.625 17.5033C11.3656 16.853 10.5094 14.236 11.8688 10.6966C11.8688 10.6966 13.9688 10.0047 18.7437 13.3328C20.7375 12.7626 22.875 12.4775 25.0031 12.4679C27.125 12.4807 29.2656 12.7626 31.2625 13.336C36.0344 10.0079 38.1312 10.6998 38.1312 10.6998C39.4937 14.2425 38.6375 16.8562 38.3812 17.5065C39.9844 19.3066 40.95 21.6033 40.95 24.4125C40.95 34.2942 35.1062 36.4691 29.5375 37.1066C30.4344 37.901 31.2344 39.4705 31.2344 41.8697C31.2344 45.3098 31.2031 48.0838 31.2031 48.9262C31.2031 49.6149 31.6531 50.4157 32.9219 50.1626C42.8438 46.7545 50 37.1162 50 25.7546C50 11.5454 38.8063 0.0268555 24.9969 0.0268555Z",fill:"#6CC644"})))}}]),t}(n.Component),P=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("a",{className:"footer-icon",href:"https://twitter.com/dane_brown_47",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("svg",{width:"50",height:"52",viewBox:"0 0 50 52",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M50 25.6257C50 39.7784 38.8071 51.2515 25 51.2515C11.1929 51.2515 0 39.7784 0 25.6257C0 11.473 11.1929 0 25 0C38.8071 0 50 11.473 50 25.6257ZM36.881 19.3806C38.0896 19.2335 39.2421 18.9041 40.3134 18.4172C39.5126 19.6455 38.4996 20.724 37.3311 21.5873C37.3427 21.8495 37.3485 22.114 37.3485 22.3794C37.3485 30.4741 31.3376 39.8071 20.3461 39.8071C16.9717 39.8071 13.8298 38.7935 11.1867 37.055C11.6533 37.1121 12.1301 37.1409 12.6114 37.1409C15.4119 37.1409 17.9882 36.162 20.0337 34.5189C17.4182 34.4691 15.2118 32.6982 14.4515 30.2653C14.8161 30.3366 15.19 30.3745 15.5759 30.3745C16.12 30.3745 16.649 30.3 17.1499 30.1593C14.4168 29.597 12.3561 27.1217 12.3561 24.154C12.3561 24.1284 12.3561 24.1024 12.3565 24.0763C13.1618 24.5363 14.0839 24.8117 15.063 24.8433C13.4604 23.7452 12.4047 21.8696 12.4047 19.7451C12.4047 18.6227 12.6997 17.5699 13.214 16.6654C16.1615 20.3722 20.5649 22.8106 25.5312 23.0659C25.4287 22.6173 25.3757 22.1501 25.3757 21.67C25.3757 18.2879 28.0518 15.5449 31.3514 15.5449C33.0712 15.5449 34.6243 16.2886 35.7143 17.4785C37.0749 17.204 38.3543 16.6947 39.509 15.9926C39.062 17.4237 38.115 18.6227 36.881 19.3806Z",fill:"#1DA1F2"})))}}]),t}(n.Component),Z=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("a",{className:"footer-icon",href:"https://www.linkedin.com/in/dane-brown-81665b13b/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("svg",{width:"50",height:"52",viewBox:"0 0 50 52",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M50 25.6257C50 39.7784 38.8071 51.2515 25 51.2515C11.1929 51.2515 0 39.7784 0 25.6257C0 11.473 11.1929 0 25 0C38.8071 0 50 11.473 50 25.6257ZM39.9373 38.2529V27.6883C39.9373 22.031 36.9897 19.3981 33.0582 19.3981C29.883 19.3981 28.4667 21.1887 27.6726 22.4412V19.8307H21.696C21.7762 21.5587 21.696 38.2525 21.696 38.2525H27.6721V27.9638C27.6721 27.4115 27.7127 26.8647 27.87 26.471C28.3031 25.3692 29.284 24.2313 30.9351 24.2313C33.0988 24.2313 33.9616 25.9215 33.9616 28.3964V38.2529H39.9373ZM27.6726 22.4412V22.5015H27.6329C27.6386 22.4911 27.646 22.4805 27.6535 22.4698C27.6602 22.4604 27.6669 22.4508 27.6726 22.4412ZM12.0628 14.1331C12.0628 12.3261 13.4002 10.9507 15.4444 10.9507C17.489 10.9507 18.7453 12.3261 18.785 14.1331C18.785 15.9018 17.489 17.3169 15.4047 17.3169H15.366C13.3614 17.3169 12.0628 15.9018 12.0628 14.1331ZM18.3919 38.2529H12.418V19.8307H18.3919V38.2529Z",fill:"#0077B5"})))}}]),t}(n.Component),B=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("a",{className:"footer-icon",href:"https://www.instagram.com/danebrwn47/?hl=en",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("svg",{width:"50",height:"52",viewBox:"0 0 50 52",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M32.4511 13.6353H17.5489C15.1702 13.6353 13.235 15.6191 13.235 18.0574V33.3341C13.235 35.7724 15.1702 37.7568 17.5489 37.7568H32.4511C34.8297 37.7568 36.7655 35.773 36.7655 33.3341V18.0574C36.7655 15.6191 34.8303 13.6353 32.4511 13.6353ZM25 33.6367C20.7291 33.6367 17.2542 30.0745 17.2542 25.6958C17.2542 21.3175 20.7291 17.7554 25 17.7554C29.2715 17.7554 32.7464 21.3175 32.7464 25.6958C32.7464 30.074 29.2709 33.6367 25 33.6367ZM32.9954 19.3971C31.9843 19.3971 31.1621 18.5542 31.1621 17.5184C31.1621 16.4825 31.9843 15.6396 32.9954 15.6396C34.0059 15.6396 34.8281 16.4825 34.8281 17.5184C34.8281 18.5542 34.0059 19.3971 32.9954 19.3971Z",fill:"#E1306C"}),r.a.createElement("path",{d:"M25 21.1104C22.5345 21.1104 20.5269 23.1673 20.5269 25.6947C20.5269 28.2233 22.5345 30.2808 25 30.2808C27.4666 30.2808 29.4726 28.2233 29.4726 25.6947C29.4726 23.1678 27.4661 21.1104 25 21.1104Z",fill:"#E1306C"}),r.a.createElement("path",{d:"M25 0C11.1934 0 0 11.4736 0 25.6257C0 39.7779 11.1934 51.2515 25 51.2515C38.8066 51.2515 50 39.7779 50 25.6257C50 11.4736 38.8066 0 25 0ZM40.0382 33.3325C40.0382 37.6212 36.6352 41.1094 32.4511 41.1094H17.5489C13.3654 41.1094 9.96179 37.6212 9.96179 33.3325V18.0572C9.96179 13.769 13.3654 10.2802 17.5489 10.2802H32.4511C36.6352 10.2802 40.0382 13.769 40.0382 18.0572V33.3325Z",fill:"#E1306C"})))}}]),t}(n.Component),D=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("a",{className:"footer-icon",href:"https://www.facebook.com/dane.brwn47",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("svg",{width:"50",height:"52",viewBox:"0 0 50 52",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M50 25.6257C50 39.7784 38.8071 51.2515 25 51.2515C11.1929 51.2515 0 39.7784 0 25.6257C0 11.473 11.1929 0 25 0C38.8071 0 50 11.473 50 25.6257ZM26.8241 26.6287H31.285L31.8755 20.7468H26.8245V17.2819C26.8245 15.9822 27.6623 15.6771 28.2581 15.6771H31.8906V9.96239L26.8842 9.94092C21.3279 9.94092 20.0654 14.2071 20.0654 16.9315V20.7413H16.8509V26.6287H20.0654V43.3809H26.8241V26.6287Z",fill:"#3B5998"})))}}]),t}(n.Component),R=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).gotoExperience=a.gotoExperience.bind(Object(g.a)(Object(g.a)(a))),a.gotoSkills=a.gotoSkills.bind(Object(g.a)(Object(g.a)(a))),a.gotoContact=a.gotoContact.bind(Object(g.a)(Object(g.a)(a))),a.gotoProjects=a.gotoProjects.bind(Object(g.a)(Object(g.a)(a))),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"gotoProjects",value:function(){v.scroller.scrollTo("projects",{delay:0,duration:800,smooth:"easeInOutQuart"})}},{key:"gotoExperience",value:function(){v.scroller.scrollTo("journey",{duration:800,delay:0,smooth:"easeInOutQuart"})}},{key:"gotoSkills",value:function(){v.scroller.scrollTo("speak-code",{duration:800,delay:0,smooth:"easeInOutQuart"})}},{key:"gotoContact",value:function(){v.scroller.scrollTo("lets-talk",{duration:800,delay:0,smooth:"easeInOutQuart"})}},{key:"render",value:function(){return r.a.createElement("section",{id:"footer"},r.a.createElement("div",{className:"container footer"},r.a.createElement("div",{className:"socials"},r.a.createElement(A,null),r.a.createElement(P,null),r.a.createElement(Z,null),r.a.createElement(B,null),r.a.createElement(D,null)),r.a.createElement("div",{className:"footer-links"},r.a.createElement("a",{href:"#1",onClick:this.gotoSkills},"Skills"),r.a.createElement("a",{href:"#1",onClick:this.gotoExperience},"Experience"),r.a.createElement("a",{href:"#1",onClick:this.gotoProjects},"Projects"),r.a.createElement("a",{href:"#1",onClick:this.gotoContact},"Contact"))))}}]),t}(n.Component),L=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={projects:[],projectsAll:[],skills:[],experience:[]},a.handleAnimation=a.handleAnimation.bind(Object(g.a)(Object(g.a)(a))),a.handleExp=a.handleExp.bind(Object(g.a)(Object(g.a)(a))),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"handleExp",value:function(){this.setState({animateExp:!0})}},{key:"handleAnimation",value:function(){this.setState({animateSkills:!0})}},{key:"componentDidMount",value:function(){var e=this;b.fetch('*[_type == "project"] | order(order) {\n  _id,\n  name,\n  order,\n  slug,\n  url,\n  first_image,\n  second_image,\n  bio\n}[0...6]').then(function(t){e.setState({projects:t})}),b.fetch('*[_type == "project"] | order(order) {\n  _id,\n  name,\n  order,\n  slug,\n  url,\n  first_image,\n  second_image,\n  bio\n}').then(function(t){e.setState({projectsAll:t})}),b.fetch('*[_type == "skill" && featured == true] {\n  _id,\n  name,\n  percentage,\n  slug,\n}').then(function(t){e.setState({skills:t})}),b.fetch('*[_type == "experience"] | order(_createdAt) {\n  _id,\n  name,\n  slug,\n  description,\n  timeline,\n  position\n}').then(function(t){e.setState({experience:t})})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(N.a,{damping:.25,thumbMinSize:20,renderByPixels:!0,continuousScrolling:!0},r.a.createElement(O,null),r.a.createElement("section",{id:"speak-code"},r.a.createElement("div",{className:"speak-line"}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"main-headings p-right-250"},"I SPEAK CODE")),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"main-headings p-right-150"},"FOR COFFEE")),r.a.createElement("div",{className:"container speak-bio"},r.a.createElement("p",{className:this.state.animateSkills?"animate":""},"Over the years I have learnt a few things here and there, take a look!")),r.a.createElement(f.a,{onEnter:this.handleAnimation}),r.a.createElement(k,{skills:this.state.skills,animate:this.state.animateSkills})),r.a.createElement("section",{id:"journey"},r.a.createElement("div",{className:"journey-line "+(this.state.animateExp?"animate":"")}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"main-headings"},"THE JOURNEY",r.a.createElement("br",null),r.a.createElement("span",null,"OF A PIXEL"))),r.a.createElement(f.a,{onEnter:this.handleExp}),r.a.createElement(y,{animate:this.state.animateExp,experience:this.state.experience})),r.a.createElement("section",{id:"projects"},r.a.createElement(H,{projects:this.state.projects,projectsAll:this.state.projectsAll})),r.a.createElement("section",{id:"lets-talk"},r.a.createElement("div",{className:"container talk"},r.a.createElement("div",{className:"resume"},r.a.createElement("p",null,"I'm a hard working person who is enthusiastic about new technologies and ways to do things. I love working with Javascript and Python mainly. My main focus is to always be learning something new and bettering my skills as a programmer."),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"/cv.pdf",className:"button"},"RESUME")),r.a.createElement(x,null))),r.a.createElement(R,null)))}}]),t}(n.Component),Q=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"404 Not Found!"))}}]),t}(n.Component),F=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement(h.a,null,r.a.createElement(p.a,{exact:!0,path:"/",component:L}),r.a.createElement(p.a,{component:Q})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},84:function(e,t,a){}},[[113,1,2]]]);
//# sourceMappingURL=main.bfe61119.chunk.js.map
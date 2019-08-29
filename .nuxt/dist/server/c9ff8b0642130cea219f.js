exports.ids=[2],exports.modules={21:function(e,t,r){"use strict";var o=r(1),component=Object(o.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:" bg-primary p-8 text-white"},[e._ssrNode('<ul class=" px-8 flex flex-col">',"</ul>",[e._ssrNode('<h3 class=" text-2xl pt-4">Select a Category</h3> '),r("nuxt-link",{staticClass:"text-white py-1",attrs:{to:"/courses/safety_management"}},[e._v("Safety Management Courses")]),e._ssrNode(" "),r("nuxt-link",{staticClass:" text-white py-1",attrs:{to:"/courses/_construction safety"}},[e._v("Construction Safety Courses")]),e._ssrNode(" "),r("nuxt-link",{staticClass:" text-white py-1",attrs:{to:"/courses/_safety passport"}},[e._v("Safety Passport Schemes Courses")]),e._ssrNode(" "),r("nuxt-link",{staticClass:" text-white py-1",attrs:{to:"/courses/workplace_safety"}},[e._v("Workplace Safety Training Courses")]),e._ssrNode(" "),r("nuxt-link",{staticClass:" text-white py-1",attrs:{to:"/courses/specialised_courses"}},[e._v("Specialised Courses")])],2)])},[],!1,null,null,"6fc56904");t.a=component.exports},60:function(e,t,r){"use strict";r.r(t);var o={components:{CourseCategory:r(21).a},asyncData:e=>new Promise(t=>{setTimeout(()=>{t({course:[{id:"IOSH",title:" IOSH Managing Safely ",excerpt:" This course is best suited to equip leaders especially Managers and Executives",previewText:" By the end of the course, you will  .....",descriptionText:"For More information, Contact XXXXX",thumbnail:"https://images.unsplash.com/photo-1553946550-4b8f3eea5451?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80"},{id:"NEBOSH",title:" NEBOSH IGC ",excerpt:" This course is best suited to equip leaders especially Managers and Executives",previewText:" By the end of the course, you will  .....",descriptionText:"For More information, Contact XXXXX",thumbnail:"https://images.unsplash.com/photo-1553946550-4b8f3eea5451?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80"}].find(t=>t.id===e.params.id)})},1500)})},l=r(1),component=Object(l.a)(o,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._ssrNode('<div class="w-full bg-white"><div class="text-center px-6 py-12 bg-gray-100 border-b"><h1 class="font-display-italic font-extrabold text-5xl md:text-5xl leading-none py-4">'+e._ssrEscape(e._s(e.course.title)+".")+"</h1></div></div> "),e._ssrNode('<div class=" flex">',"</div>",[e._ssrNode('<div class=" w-2/3"><div class=" py-6 px-6 h-auto "><div class=" border border-gray-400 lg:border lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"><div class="mb-8"><p class="text-sm text-gray-600 flex items-center justify-end"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="fill-current text-gray-500 w-3 h-3 mr-2"><path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"></path></svg>'+e._ssrEscape("\r\n                    "+e._s(e.course.id)+"\r\n                    ")+'</p> <div class="text-gray-900 font-bold text-xl mb-2">'+e._ssrEscape(e._s(e.course.title))+'</div> <p class="text-gray-700 text-base">'+e._ssrEscape(e._s(e.course.excerpt))+"</p> <div><img"+e._ssrAttr("src",e.course.thumbnail)+' alt class=" py-6 object-cover"></div> <div class="text-gray-700 text-base">'+e._ssrEscape(e._s(e.course.descriptionText))+'</div></div></div></div> <div class="max-w-sm w-full lg:max-w-full lg:flex"></div></div> '),e._ssrNode('<div class=" w-1/3">',"</div>",[r("CourseCategory")],1)],2)],2)},[],!1,null,null,"71bc1fcc");t.default=component.exports}};
//# sourceMappingURL=c9ff8b0642130cea219f.js.map
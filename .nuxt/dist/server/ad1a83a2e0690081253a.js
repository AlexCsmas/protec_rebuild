exports.ids=[4],exports.modules={22:function(e){e.exports=JSON.parse('[{"id":1,"title":"IOSH Managing Safely","summary":"Learn about IOSH, a safety management course for Managers and Executives.","content":"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>","author":"Jane Doe","published":"13:00 - 06/06/2017"},{"id":2,"title":"IOSH Working Safely","summary":"Learn about SSR in JavaScript and how it can be super cool.","content":"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>","author":"John Doe","published":"11:00 - 06/06/2017"}]')},52:function(e,t,r){"use strict";r.r(t);var o=r(22),n={validate:({params:e})=>/^\d+$/.test(e.id),asyncData({params:e},t){let r=o.find(t=>t.id===parseInt(e.id));r?t(null,{course:r}):t({statusCode:404,message:"Post not found"})},head(){return{title:this.course.title,meta:[{hid:"description",name:"description",content:this.course.summary}]}}},l=r(1),component=Object(l.a)(n,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._ssrNode('<div class="text-center px-6 py-12 bg-gray-100 border-b"><h1 class=" text-xl md:text-4xl pb-4">'+e._ssrEscape(" "+e._s(e.course.title))+"</h1></div> "),e._ssrNode('<div class="w-auto flex flex-row">',"</div>",[e._ssrNode('<div class="w-2/3"><div class="bg-gray-200 py-8"><div><div class="py-6 px-6 "><div class=" border border-gray-400 lg:border lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"><div class="mb-8"><p class="text-sm text-gray-600 flex items-center justify-end"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="fill-current text-gray-500 w-3 h-3 mr-2"><path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"></path></svg>'+e._ssrEscape("\n                        "+e._s(e.course.title)+"\n                    ")+'</p> <p class="text-gray-700 text-base">'+e._s(e.course.content)+'</p></div></div> <h4 class=" leading-normal ">\n                      by <strong>'+e._ssrEscape(e._s(e.course.author))+"</strong> at <strong>"+e._ssrEscape(e._s(e.course.published))+"</strong></h4></div></div></div></div> "),e._ssrNode('<div class="w-1/3 ">',"</div>",[e._ssrNode('<div class=" bg-primary p-8 text-white">',"</div>",[e._ssrNode('<ul class=" px-8 ">',"</ul>",[e._ssrNode('<h3 class=" text-2xl">CONSULTANCY SERVICES</h3> <li>Health &amp; Safety Consultancy</li> <li>Fire Risk Assessment / Fire Safety Audit</li> <h3 class=" text-2xl pt-4">TRAINING SERVICES</h3> '),r("nuxt-link",{staticClass:" border-b border-bg-secondary text-white",attrs:{to:"/courses/coursecat"}},[e._v("Safety Management – IOSH Courses")]),e._ssrNode(" <li>Construction Safety Courses</li> <li>Safety Passport Schemes</li> <li>Workplace Safety Training Courses</li> <li>Confined Space, Equipment and Plant Training</li> <li>Working at Height Courses</li> <li>Sector Specific (Petroleum, Rail, Food, OMC)</li> <li>Environmental and Quality Management</li>")],2)])])],2)],2)},[],!1,null,null,"3043ef12");t.default=component.exports}};
//# sourceMappingURL=ad1a83a2e0690081253a.js.map
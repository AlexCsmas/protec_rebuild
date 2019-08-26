<template>

    <div class="w-auto flex flex-row">
        <div class="w-1/3 ">
            <div class=" bg-primary p-8 text-white">
                <ul class=" px-8 ">
                    <h3 class=" text-2xl">CONSULTANCY SERVICES</h3>                        
                        <li>Health & Safety Consultancy</li>
                        <li>Fire Risk Assessment / Fire Safety Audit</li>

                    <h3 class=" text-2xl pt-4">TRAINING SERVICES</h3>
                        <nuxt-link to="/courses/coursecat" class=" border-b border-bg-secondary text-white">Safety Management – IOSH Courses</nuxt-link>
                        <li>Construction Safety Courses</li>
                        <li>Safety Passport Schemes</li>
                        <li>Workplace Safety Training Courses</li>
                        <li>Confined Space, Equipment and Plant Training</li>
                        <li>Working at Height Courses</li>
                        <li>Sector Specific (Petroleum, Rail, Food, OMC)</li>
                        <li>Environmental and Quality Management</li>
                </ul>
            </div>
        </div>

        <div class="w-2/3" >
        <div class="bg-gray-200 py-8">

        <div>

          <div class="py-6 px-6 " >

            <!--Title-->
            <h1 class=" text-2xl">{{ post.title }}</h1>
            <div v-html="post.content"></div>

          </div>

        <div class=" py-6 px-6 h-auto ">
          
             <div class=" border border-gray-400 lg:border lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div class="mb-8">
                    <p class="text-sm text-gray-600 flex items-center justify-end">
                        <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                        </svg>
                        {{ post.title }}
                    </p>     
                    <p class="text-gray-700 text-base" v-html="post.content"></p>
                </div>
                
            </div>   
        </div>  

        <br>
        
            <h4 class=" leading-normal ">
                by <strong>{{ post.author }}</strong> at <strong>{{ post.published }}</strong>
            </h4>       

            <div>
              <h1 class=" text-2xl">{{ post.title }}</h1>
                <p class="pt-2 pb-6">The course provides the essential knowledge and understanding of how to manage health & safety responsibilities in the workplace.</p>
            </div>

           

        </div>                
                
            </div>
        </div>          
    </div>

</template>

<script>
  // import posts saved JSON data
  import posts from '~/posts.json'

  export default {
    validate ({ params }) {
      return /^\d+$/.test(params.id)
    },
    asyncData ({ params }, callback) {
      let post = posts.find(post => post.id === parseInt(params.id))
      if (post) {
        callback(null, { post })
      } else {
        callback({ statusCode: 404, message: 'Post not found' })
      }
    },
    head () {
      return {
        title: this.post.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.post.summary
          }
        ]
      }
    }
  }
</script>
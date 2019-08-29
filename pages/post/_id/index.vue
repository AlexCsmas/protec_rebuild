<template>

    <div class="w-auto flex flex-row">
      <div class="md: w-full ">
        <div class="bg-gray-200 py-8 ">
          <div class=" mx-24">
            <div class="py-6 px-6 " >

              <!--Title-->
              <h1 class=" text-2xl">{{ post.title }}</h1>
               <br>
                <h4 class=" leading-normal ">
                    by <strong>{{ post.author }}</strong> at <strong>{{ post.published }}</strong>
                </h4>  
                <br>
              <div class="">{{post.urlImage}}</div>

            </div>
            <div class=" py-6 px-6 h-auto ">
                <div class=" border border-gray-400 lg:border lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div class="mb-8">
                        <p class="text-sm text-gray-600 flex items-center justify-end">
                            <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                            </svg>
                            {{ post.category }}
                        </p>     
                        <p class="text-gray-700 text-base" v-html="post.content"></p>
                    </div>
                    
                </div>   
               
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
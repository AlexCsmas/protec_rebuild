<template>

    <section>

        <div class="mx-auto max-w-6xl bg-white py-20 px-12 lg:px-24 shadow-xl mb-24">

			<div class="mb-12">

				<h1 class="text-3xl lg:text-4xl text-left mb-6 tracking-wider"> 
                    {{  post.title.rendered }} 
                </h1>

				<div class="text-gray-700 leading-normal" v-html="post.content.rendered"> </div>

			</div>


		</div>

    </section>

</template>


<script>

    import axios from 'axios'

    export default {

        data() {
            return {
                post: {}
            }
        }, 

        async asyncData({params}) {

            return axios.get('http://blog.weareproteceastafrica.com/wp-json/wp/v2/posts/' + params.id) .then ((res) => {
                return {
                    post: res.data
                }
            })

        } 
        
    }

</script>
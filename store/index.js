export const state = () => ({
    posts: []
})


export const mutations = {
    latestnewsPagePosts (state, posts) {
        state.posts = posts
    }
}
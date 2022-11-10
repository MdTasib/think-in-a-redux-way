const store = require("./app/store");
const { fetchPost } = require("./features/postSlice");
const { fetchPosts } = require("./features/relativePostsSlice");

store.subscribe(() => {});

(async () => {
	await store.dispatch(fetchPost());

	const post = store.getState().post.post.title;

	await store.dispatch(fetchPosts(post));
})();

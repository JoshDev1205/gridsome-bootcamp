<template>
	<Layout>
		<h1>Blog</h1>
		<ol
			v-for="edge in $page.allContentfulBlogPost.edges"
			:key="edge.node.id"
			class="posts"
		>
			<li class="post">
				<g-link :to="`/blog/${edge.node.slug}`">
					<h2>{{ edge.node.title }}</h2>
					<p>{{ edge.node.publishedDate }}</p>
				</g-link>
			</li>
		</ol>
	</Layout>
</template>

<page-query>
{
  allContentfulBlogPost(
    sort: {
      by: "publishedDate",
      order: DESC
    }
  ){
    edges {
      node {
        id
        title
        slug
        publishedDate(format: "MMMM Do, YYYY")
      }
    }
  }
}
</page-query>
<style lang="scss">
.posts {
	list-style-type: none;
	margin: 0;
}

.post {
	margin: 1rem 0;

	a {
		background: #f4f4f4;
		color: #000000;
		display: block;
		padding: 1rem;
		text-decoration: none;
	}

	a:hover {
		background: #e4e4e4;
	}

	h2 {
		margin-bottom: 0;
	}

	p {
		color: #777777;
		font-size: 0.8rem;
		font-style: italic;
	}
}
</style>

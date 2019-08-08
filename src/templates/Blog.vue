<template>
	<Layout>
		<h1>{{ $page.contentfulBlogPost.title}}</h1>
		<p>{{ $page.contentfulBlogPost.publishedDate }}</p>
		<p v-html="richTextToHTML($page.contentfulBlogPost.body)"></p>
	</Layout>
</template>
<page-query>
query($id: String!) {
	 contentfulBlogPost(id: $id) {
    title
    publishedDate(format: "MMMM Do, YYYY")
    body
  }
}
</page-query>
<script>
import { BLOCKS } from "@contentful/rich-text-types";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export default {
	methods: {
		richTextToHTML(content) {
			return documentToHtmlString(content, {
				renderNode: {
					[BLOCKS.EMBEDDED_ASSET]: node => {
						return `<img src="${node.data.target.fields.file.url}" alt="${node.data.target.fields.title}" />`;
					}
				}
			});
		}
	}
};
</script>

<template>
	<div class="container">
		<div class="content">
			<Header />
			<slot />
		</div>
		<Footer />
	</div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
import Header from "~/components/Header";
import Footer from "~/components/Footer";
export default {
	components: {
		Header,
		Footer
	}
};
</script>


<style lang="scss">
.container {
	margin: 0 auto;
	max-width: 750px;
	padding: 1rem;

	display: flex;
	flex-direction: column;
	min-height: 100vh;
}

.content {
	flex-grow: 1;
}
</style>


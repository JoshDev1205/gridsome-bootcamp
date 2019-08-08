<template>
	<footer class="footer">
		<p>Created by {{$static.metaData.author}}, 2019</p>
	</footer>
</template>

<static-query>
query {
  metaData {
    author
  }
}
</static-query>
<style lang="scss">
.footer {
	margin-top: 3rem;
}
</style>

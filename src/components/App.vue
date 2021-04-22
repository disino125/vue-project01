<template>
    <div class="appContainer">
        <mt-header fixed title="my first vue-project">
            <router-link to="/" slot="left">
                <mt-button icon="back">back</mt-button>
            </router-link>
        </mt-header>
        <router-view></router-view>
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/tabbarHomepage">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">Homepage</span>
			</router-link>
			<router-link class="mui-tab-item" to="/tabbarCart">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">Cart</span>
			</router-link>
			<router-link class="mui-tab-item" to="/tabbarContact">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">Contact</span>
			</router-link>
			<router-link class="mui-tab-item" to="/tabbarSearch">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">Search</span>
			</router-link>
		</nav>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .appContainer{
        padding-top: 40px;
    }
    
</style>
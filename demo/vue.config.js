module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets' : '@/assets',
                'common' : '@/common',
                'components' : '@/components',
                'server' : '@/server',
                'router' : '@/router',
                'views' : '@/views',
                'utils' : '@/utils',
                'store' : '@/store'
            }
        }
    }
}
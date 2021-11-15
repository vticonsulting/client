<script>
// import User from '@/models/User'
// import Post from '@/models/Post'
// import User from '@/models/User'
import Carrier from '@/models/Carrier'
// import Comment from '@/models/Comment'

export default {
    data() {
        return {
            users: [],
        }
    },
    async created() {
        // const user = new User({id: 1})
        // const users = await user.posts().find(1)
        // // this.users = this.users.concat(users)

        // const users = await new User().get()
        // this.users = this.users.concat(users)

        Carrier.prototype['primaryKey'] = () => {
            return 'id_affiliate'
        }
        // const affiliates = await new Carrier().get()
        // const firstCarrier = await Carrier.first()
        // const ema = await Carrier.find(45)
        const cali = Carrier.where('affiliate_address_state', 'CA')
        console.log(cali.endpoint())

        // const user = new User({id: 1})
        // const post = new Post({text: 'Hello'}).for(user)
        // console.log(post.endpoint()) // https://api.victortolbert.com/users/1/posts
        // await post.save()

        // const user = new User({id: 1})
        // const post = new Post({id: 2})
        // const comment = new Comment({
        //   post_id: 2,
        //   text: 'for() takes more than one argument now!',
        // }).for(user, post)
        // console.log(comment.endpoint())
    },
    computed: {
        sections() {
            return [
                {
                    name: 'dashboard',
                    title: 'Base Elements, Layouts, Patterns & Templates',
                    description: 'UI and UX Workshop for exploring HTML, CSS, JS (Vue.js) features and functionality',
                    icon: 'template',
                },
                // {
                //   name: 'projects',
                //   title: 'Projects',
                //   description: this.$t('resources_description'),
                //   icon: 'library',
                // },
                {
                    name: 'docs',
                    title: 'Documentation',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
                    icon: 'academic-cap',
                },
                {
                    name: 'calendar',
                    title: 'An example implentation of Full Calendar',
                    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    icon: 'calendar',
                },
                {
                    name: 'support',
                    title: 'Support',
                    description: 'Montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada.',
                    icon: 'support',
                },
            ]
        },
    },
}
</script>

<template>
    <main class="flex items-center justify-center min-h-screen bg-primary-500">
        <div
            class="max-w-4xl overflow-hidden bg-gray-200 divide-y divide-gray-200 rounded-lg shadow sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px"
        >
            {{ users[0] }}
            <div
                v-for="section in sections"
                :key="section.name"
                class="relative p-6 bg-white rounded-tl-lg rounded-tr-lg sm:rounded-tr-none group focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary-500"
            >
                <div>
                    <span
                        class="inline-flex p-3 rounded-lg text-primary-700 bg-primary-50 ring-4 ring-white"
                    >
                        <BaseIconOutlined :name="section.icon" />
                    </span>
                </div>

                <div class="mt-8">
                    <h3 class="text-lg font-medium capitalize">
                        <RouterLink :to="{ name: section.name }" class="focus:outline-none">
                            <span
                                class="absolute inset-0"
                                aria-hidden="true"
                                x-data-description="Extends touch target to entire panel"
                            />
                            {{ section.title }}
                        </RouterLink>
                    </h3>
                    <p class="mt-2 text-sm text-gray-500">{{ section.description }}</p>
                </div>
                <span
                    class="absolute text-gray-300 pointer-events-none top-6 right-6 group-hover:text-gray-400"
                    aria-hidden="true"
                >
                    <BaseIconSolid name="arrow-top-right" />
                </span>
            </div>

            <div
                v-if="false"
                class="relative p-6 bg-white group focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary-500"
            >
                <div>
                    <span
                        class="inline-flex p-3 rounded-lg bg-primary-50 text-primary-700 ring-4 ring-white"
                    >
                        <BaseIconOutlined name="users" />
                    </span>
                </div>

                <div class="mt-8">
                    <h3 class="text-lg font-medium">
                        <a href="#" class="focus:outline-none">
                            <!-- Extend touch target to entire panel -->
                            <span class="absolute inset-0" aria-hidden="true"></span>
                            Schedule a one-on-one
                        </a>
                    </h3>
                    <p class="mt-2 text-sm text-gray-500">
                        Doloribus dolores nostrum quia qui natus officia quod et dolorem.
                        Sit repellendus qui ut at blanditiis et quo et molestiae.
                    </p>
                </div>
                <span
                    class="absolute text-gray-300 pointer-events-none top-6 right-6 group-hover:text-gray-400"
                    aria-hidden="true"
                >
                    <BaseIconSolid name="arrow-top-right" />
                </span>
            </div>
        </div>
    </main>
</template>

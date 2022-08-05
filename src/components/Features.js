const features = [
    {
        name: 'Easy to find events',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    },
    {
        name: 'Easy to find businesses that serve Fremont, MI',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    },
    {
        name: 'Easy to create your own event or business listings',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    },
    {
        name: 'Easy to understand Privacy & Cookie Policy',
        description:
            'Our explanation of what information we collect and how we use it is simple, readable, and easy to understand.',
    },
]

export default function Features() {
    return (
        <div className="mt-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="md:text-center">
                    <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Enabling Community</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        A better way to find and support local events and businesses
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 md:mx-auto">
                        It's hard to find events and businesses that are specific to our community on the big platforms. Finally, a place on the web just for us.
                    </p>
                </div>

                <div className="mt-10">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative text-center">
                                <dt>
                                    <p className="text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                                </dt>
                                <dd className="mt-2 text-base text-gray-500">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}

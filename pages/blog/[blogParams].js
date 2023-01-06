import { useRouter } from 'next/router';

const BlogParams = () => {
    const router = useRouter().query;
    console.log(router.query);
    // fetch(`/api/doc/`)
    // .then(res => {
    //     res.json();
    // })
    // .then(data => {
    //     console.log(data);
    // })

    return (
        <div>
            <h1>{}</h1>
            <p>
                Laborum amet incididunt eiusmod do cupidatat Lorem ad qui consequat. Est dolor cupidatat tempor cupidatat eu consectetur elit duis eiusmod proident ullamco. Veniam aliquip officia cillum consequat irure esse in reprehenderit laborum excepteur aute anim eiusmod.
                Sint ex voluptate duis dolore magna. Ullamco aliqua magna exercitation commodo adipisicing nulla fugiat aliqua esse minim in. Voluptate mollit deserunt cupidatat ea quis deserunt voluptate non laborum. Tempor sint ex ad minim ex. Mollit ad nulla adipisicing nisi tempor ad cillum aute. Voluptate eiusmod aute sit consectetur.
            </p>
        </div>
    )
}

export default BlogParams;
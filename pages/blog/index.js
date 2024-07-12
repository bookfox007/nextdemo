//这里增加博客主页，用户可以有自己的博客,layout使用components中的layout
import Layout from '../../components/Layout';
import Link from 'next/link';

export default function Blog({ blogs }) {
  return (
    <Layout>
      <h1>Blog</h1>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/blogs');
  const blogs = await res.json();
  return {
    props: {
      blogs,
    },
  };
}




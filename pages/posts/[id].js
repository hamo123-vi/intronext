import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../components/date";
import Head from "next/head";
import Layout from "../components/layout";

export default function Post({ postData }) {

    return(
        <Layout>
            <Head>
                <title>
                    {postData.title}
                </title>
                <meta name="robots" content="all" />
                <link rel="canonical" href={"https://intronext.vercel.app/posts/" + postData.id} key="canonical" />
            </Head>
            {postData.title}
            <br />
            {postData.id}
            <br /><br />
            <Date dateString={postData.date} format='DD.MM.YYYY' />
            <h1>SEO SEO SEO SEO SEO SEO</h1>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({ params }) {
    const postData = getPostData(params.id);
    return {
        props: {
            postData
        }
    }
}
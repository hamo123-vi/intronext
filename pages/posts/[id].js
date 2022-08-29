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
            </Head>
            {postData.title}
            <br />
            {postData.id}
            <br />
            <Date dateString={postData.date} shape='dd.MM.yyyy'></Date>
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
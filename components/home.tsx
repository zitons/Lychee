'use client';
import { useState, useEffect, Suspense } from 'react';
import Head from '@/components/head';
import Main from '@/components/main';

interface PostResult {
    id: number;
    title: string;
    slug: string;
    date: string;
    cover?: string;
    tag: number[];
    sort: string;
}

export default function Profile(props: any) {
    // type data = {
    //     indexPages: any[];
    //     tags: any[];
    //     hitokoto: string;
    //     results: PostResult[];
    // }
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState<string | null>(null);

    let data = props.data;
    // console.log(data.indexPages[0]);
    // if (loading) return <div className="text-green-500">加载主页...</div>;
    // if (error) return <div className="text-red-500">{error}</div>;

    return (
        <div className="border-2 border-green-500 p-4">
            <Suspense fallback={<div className="text-gray-500">加载内容...</div>}>
                <main>
                    <Head abc={data!.indexPages} hitokoto={data!.hitokoto} />
                    <div className="mb-8">
                        <Main PostData={data!.results} TagItem={data!.tags} />
                    </div>
                </main>
            </Suspense>
        </div>
    );
}

import { notFound } from 'next/navigation';

type Model = {
    id: number;
    name: string;
    icon: string | null;
    release_date: string;
    description: string;
    sizes: string[];
    license: string;
    download_url: string;
};

async function fetchModelDetails(id: string) {
    const res = await fetch(`http://137.184.36.245:8000/model/api/models/${id}/`);
    if (!res.ok) {
        throw new Error('Failed to fetch model details');
    }
    return res.json();
}

export default async function ModelDetailPage({
    params, // 动态路由参数
}: {
    params: { id: string }; // 获取 URL 中的 id
}) {
    const { id } = params;
    let model: Model | null = null;

    try {
        model = await fetchModelDetails(id);
    } catch (error) {
        notFound(); // 如果没有找到模型，显示 404 页面
    }

    if (!model) {
        notFound(); // 如果没有模型数据，显示 404 页面
    }

    return (
        <div>
            <h1>{model.name}</h1>
            {model.icon ? (
                <img src={model.icon} alt={model.name} style={{ maxWidth: '200px', marginBottom: '10px' }} />
            ) : (
                <div>No icon available</div>
            )}
            <p>{model.description}</p>
            <p>Release Date: {new Date(model.release_date).toLocaleDateString()}</p>
            <p>License: {model.license}</p>
            <p>Sizes: {model.sizes.join(', ')}</p>
            <a href={model.download_url}>Download</a>
        </div>
    );
}

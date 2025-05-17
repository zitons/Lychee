import { notFound } from 'next/navigation';
import use, { ReactNode } from 'react' // import this line

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


type Params = { id: string };

export default async function Page({ params }: { params: Params }) {
    const { id } = params;
    let model: Model | null = null;

    try {
           const res = await fetch(`http://137.184.36.245:18281/index.php?rest_route=/wp/v2/model/${id}/`);
            if (!res.ok) {
                throw new Error('Failed to fetch model details');
            }
            model=await res.json();
    } catch (error) {
        notFound(); // 如果没有找到模型，显示 404 页面
    }

    if (!model) {
        notFound(); // 如果没有模型数据，显示 404 页面
    }

    return (
        <div>
            <h1>{model.acf.name}</h1>
            {model.acf.icon ? (
                <img src={model.acf.icon} alt={model.acf.name} style={{ maxWidth: '200px', marginBottom: '10px' }} />
            ) : (
                <div>No icon available</div>
            )}
            <p>{model.description}</p>
            <p>Release Date: {model.acf.time}</p>
            <p>License: {model.acf.license}</p>
            <p>Sizes: {model.acf.size}</p>
            <a href={model.acf.download}>Download</a>
        </div>
    );
}

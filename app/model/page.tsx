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

type ModelListPageProps = {
    models: Model[];
    totalPages: number;
    currentPage: number;
};

const PAGE_SIZE = 10;

async function fetchModels(page: number) {
    const res = await fetch(`http://137.184.36.245:8000/model/api/models/?format=json&page=${page}&page_size=${PAGE_SIZE}`, {
        next: { revalidate: 10 }, // 支持页面缓存和数据重验证
    });

    if (!res.ok) {
        throw new Error('Failed to fetch models');
    }

    return res.json();
}

export default async function ModelListPage({
    searchParams, // 从 URL 查询参数中获取分页参数
}: {
    searchParams: { page?: string };
}) {
    const page = searchParams.page ? parseInt(searchParams.page, 10) : 1; // 默认第一页
    const data = await fetchModels(page);

    if (!data.results) {
        notFound(); // 如果没有数据则返回 404
    }

    const totalPages = Math.ceil(data.count / PAGE_SIZE);

    return (
        <div>
            <h1>Model List</h1>
            <ul>
                {data.results.map((model: Model) => (
                    <li key={model.id}>
                        <h2>{model.name}</h2>
                        {model.icon ? (
                            <img src={model.icon} alt={model.name} />
                        ) : (
                            <div>No icon available</div>
                        )}
                        <p>{model.description}</p>
                        <p>Release Date: {new Date(model.release_date).toLocaleDateString()}</p>
                        <p>License: {model.license}</p>
                        <p>Sizes: {model.sizes.join(', ')}</p>
                        <a href={model.download_url}>Download</a>
                    </li>
                ))}
            </ul>

            {/* 分页控制 */}
            <div>
                {/* Previous Link */}
                <a
                    href={`/models?page=${page - 1}`}
                    style={{ marginRight: '10px' }}
                    hidden={page <= 1}
                >
                    Previous
                </a>

                {/* Page Info */}
                <span>
                    Page {page} of {totalPages}
                </span>

                {/* Next Link */}
                <a
                    href={`/models?page=${page + 1}`}
                    style={{ marginLeft: '10px' }}
                    hidden={page >= totalPages}
                >
                    Next
                </a>
            </div>
        </div>
    );
}
